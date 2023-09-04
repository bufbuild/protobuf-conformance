// Copyright 2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { readSync, writeSync } from "fs";
import {
  ConformanceRequest,
  ConformanceResponse,
  FailureSet,
  WireFormat,
} from "./gen/conformance/conformance.js";
import { TestAllTypesProto3 } from "./gen/google/protobuf/test_messages_proto3.js";
import { TestAllTypesProto2 } from "./gen/google/protobuf/test_messages_proto2.js";

function main() {
  let testCount = 0;
  try {
    while (testIo(test)) {
      testCount += 1;
    }
  } catch (e) {
    process.stderr.write(
      `conformance.ts: exiting after ${testCount} tests: ${String(e)}`
    );
    process.exit(1);
  }
}

function test(request: ConformanceRequest): ConformanceResponse["result"] {
  if (request.messageType === "conformance.FailureSet") {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    const failureSet = FailureSet.create();
    const ser = FailureSet.encode(failureSet).finish();
    return {
      $case: "protobufPayload",
      protobufPayload: ser,
    };
  }

  let messageType: typeof TestAllTypesProto3 | typeof TestAllTypesProto2;
  switch (request.messageType) {
      case "protobuf_test_messages.proto3.TestAllTypesProto3":
          messageType = TestAllTypesProto3;
          break;
      case "protobuf_test_messages.proto2.TestAllTypesProto2":
          messageType = TestAllTypesProto2;
          break;
      default:
          return {
              $case: "runtimeError",
              runtimeError: `unknown request message type ${request.messageType}`,
          };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let payload: any;

  try {
    switch (request?.payload?.$case) {
      case "protobufPayload":
        payload = messageType.decode(request.payload.protobufPayload);
        break;

      case "jsonPayload":
        messageType.fromJSON(request.payload.jsonPayload);
        break;

      default:
        // We use a failure list instead of skipping, because that is more transparent.
        return {
          $case: "runtimeError",
          runtimeError: `${request?.payload?.$case ?? "?"} not supported`,
        };
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    return { $case: "parseError", parseError: String(err) };
  }

  try {
    switch (request.requestedOutputFormat) {
      case WireFormat.PROTOBUF:
        return {
          $case: "protobufPayload",
          protobufPayload: messageType.encode(payload).finish(),
        };

      case WireFormat.JSON:
        return {
          $case: "jsonPayload",
          jsonPayload: JSON.stringify(messageType.toJSON(payload)),
        };

      case WireFormat.JSPB:
        return { $case: "skipped", skipped: "JSPB not supported." };

      case WireFormat.TEXT_FORMAT:
        return { $case: "skipped", skipped: "Text format not supported." };

      default:
        process.stderr.write("Unknown");
        return {
          $case: "runtimeError",
          runtimeError: `unknown requested output format ${request.requestedOutputFormat}`,
        };
    }
  } catch (err) {
    // > If the input was successfully parsed but errors occurred when
    // > serializing it to the requested output format, set the error message in
    // > this field.
    return { $case: "serializeError", serializeError: String(err) };
  }
}

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function testIo(test: (request: ConformanceRequest) => any): boolean {
  setBlockingStdout();
  const requestLengthBuf = readBuffer(4);
  if (requestLengthBuf === "EOF") {
    return false;
  }
  const requestLength = requestLengthBuf.readInt32LE(0);
  const serializedRequest = readBuffer(requestLength);
  if (serializedRequest === "EOF") {
    throw "Failed to read request.";
  }
  const request = ConformanceRequest.decode(serializedRequest);
  const response = ConformanceResponse.create();
  response.result = test(request);
  const serializedResponse = ConformanceResponse.encode(response).finish();
  const responseLengthBuf = Buffer.alloc(4);
  responseLengthBuf.writeInt32LE(serializedResponse.length, 0);
  writeBuffer(responseLengthBuf);
  writeBuffer(Buffer.from(serializedResponse));
  return true;
}

// Read a buffer of N bytes from stdin.
function readBuffer(bytes: number): Buffer | "EOF" {
  const buf = Buffer.alloc(bytes);
  let read = 0;
  try {
    read = readSync(0, buf, 0, bytes, null);
  } catch (e) {
    throw `failed to read from stdin: ${String(e)}`;
  }
  if (read !== bytes) {
    if (read === 0) {
      return "EOF";
    }
    throw "premature EOF on stdin.";
  }
  return buf;
}

// Write a buffer to stdout.
function writeBuffer(buffer: Buffer): void {
  let totalWritten = 0;
  while (totalWritten < buffer.length) {
    totalWritten += writeSync(
      1,
      buffer,
      totalWritten,
      buffer.length - totalWritten
    );
  }
}

// Fixes https://github.com/timostamm/protobuf-ts/issues/134
// Node is buffering chunks to stdout, meaning that for big generated
// files the CodeGeneratorResponse will not reach protoc completely.
// To fix this, we set stdout to block using the internal private
// method setBlocking(true)
function setBlockingStdout(): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
  const stdoutHandle = (process.stdout as any)._handle;
  if (stdoutHandle !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    stdoutHandle.setBlocking(true);
  }
}

main();
