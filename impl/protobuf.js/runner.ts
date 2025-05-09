#!/usr/bin/env -S npx tsx

// Copyright 2023-2025 Buf Technologies, Inc.
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

import * as protos from "./gen/protos_pb.js";
import * as $protobuf from "protobufjs";

const registry = {
  // "protobuf_test_messages.proto2.TestAllTypesProto2": protos.protobuf_test_messages.proto2.TestAllTypesProto2, // cannot use, fails to compile
  "protobuf_test_messages.proto3.TestAllTypesProto3":
    protos.protobuf_test_messages.proto3.TestAllTypesProto3,
  "protobuf_test_messages.editions.TestAllTypesEdition2023":
    protos.protobuf_test_messages.editions.TestAllTypesEdition2023,
  "protobuf_test_messages.editions.proto2.TestAllTypesProto2":
    protos.protobuf_test_messages.editions.proto2.TestAllTypesProto2,
  "protobuf_test_messages.editions.proto3.TestAllTypesProto3":
    protos.protobuf_test_messages.editions.proto3.TestAllTypesProto3,
  "google.protobuf.Struct": protos.google.protobuf.Struct,
  "google.protobuf.Value": protos.google.protobuf.Value,
  "google.protobuf.FieldMask": protos.google.protobuf.FieldMask,
  "google.protobuf.Duration": protos.google.protobuf.Duration,
  "google.protobuf.Int32Value": protos.google.protobuf.Int32Value,
  "google.protobuf.Any": protos.google.protobuf.Any,
  "google.protobuf.Timestamp": protos.google.protobuf.Timestamp,
} as unknown as Record<string, typeof $protobuf.Message>;

function main() {
  let testCount = 0;
  try {
    while (testIo(test)) {
      testCount += 1;
    }
  } catch (e) {
    process.stderr.write(
      `conformance.ts: exiting after ${testCount} tests: ${String(e)}`,
    );
    process.exit(1);
  }
}

interface Result {
  [s: string]: Uint8Array | string;
}

function test(request: protos.conformance.ConformanceRequest): Result {
  if (request.messageType === protos.conformance.FailureSet.name) {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    const failureSet = protos.conformance.FailureSet.create();
    return {
      protobufPayload:
        protos.conformance.FailureSet.encode(failureSet).finish(),
    };
  }

  // Returning a runtime error for the test Required.Proto3.ProtobufInput.UnknownOrdering.ProtobufOutput
  // crashes the runner.
  if (
    is_Required_Proto3_ProtobufInput_UnknownOrdering_ProtobufOutput(request)
  ) {
    return {
      protobufPayload: new Uint8Array(),
    };
  }

  const payloadType = registry[request.messageType];
  if (!payloadType) {
    return {
      runtimeError: `unknown request message type ${request.messageType}`,
    };
  }

  let payload: $protobuf.Message;

  try {
    if (request.protobufPayload) {
      payload = payloadType.decode(request.protobufPayload);
    } else if (
      request.jsonPayload !== null &&
      request.jsonPayload !== undefined &&
      request.jsonPayload != ""
    ) {
      // Note it doesn't seem ProtobufJS allows for specifying JSON options such as ignore unknown fields so this is
      // unused:
      // if (request.testCategory === TestCategory.JSON_IGNORE_UNKNOWN_PARSING_TEST;
      // Further, we first have to parse the string payload into a JSON object and then call fromObject
      payload = payloadType.fromObject(JSON.parse(request.jsonPayload));
    } else {
      // We use a failure list instead of skipping, because that is more transparent.
      return {
        runtimeError: `payload not supported`,
      };
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    return { parseError: String(err) };
  }

  try {
    switch (request.requestedOutputFormat) {
      case 1: // PROTOBUF
        return {
          protobufPayload: payloadType.encode(payload).finish(),
        };

      case 2: // JSON:
        return {
          jsonPayload: JSON.stringify(
            // See https://github.com/protobufjs/protobuf.js?tab=readme-ov-file#toolset for toObject options
            payloadType.toObject(payload, {
              json: true,
              bytes: String,
              longs: String,
              enums: String,
            }),
          ),
        };

      case 3: // JSPB
        return { skipped: "JSPB not supported." };

      case 4: // TEXT_FORMAT
        return { skipped: "Text format not supported." };

      default:
        return {
          runtimeError: `unknown requested output format ${request.requestedOutputFormat}`,
        };
    }
  } catch (err) {
    // > If the input was successfully parsed but errors occurred when
    // > serializing it to the requested output format, set the error message in
    // > this field.
    return { serializeError: String(err) };
  }
}

function is_Required_Proto3_ProtobufInput_UnknownOrdering_ProtobufOutput(
  request: protos.conformance.ConformanceRequest,
) {
  if (request.testCategory != protos.conformance.TestCategory.BINARY_TEST) {
    return false;
  }
  if (request.requestedOutputFormat != protos.conformance.WireFormat.PROTOBUF) {
    return false;
  }
  if (
    request.messageType != "protobuf_test_messages.proto3.TestAllTypesProto3" &&
    request.messageType != "protobuf_test_messages.proto2.TestAllTypesProto2"
  ) {
    return false;
  }
  if (!request.protobufPayload) {
    return false;
  }
  const reqPayload = new Uint8Array([
    210, 41, 3, 97, 98, 99, 208, 41, 123, 210, 41, 3, 100, 101, 102, 208, 41,
    200, 3,
  ]);
  if (request.protobufPayload.byteLength != reqPayload.byteLength) {
    return false;
  }
  if (
    !request.protobufPayload.every(
      (value, index) => reqPayload[index] === value,
    )
  ) {
    return false;
  }
  return true;
}

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
function testIo(
  test: (request: protos.conformance.ConformanceRequest) => Result,
): boolean {
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
  const request =
    protos.conformance.ConformanceRequest.decode(serializedRequest);
  const result = test(request);
  const response = protos.conformance.ConformanceResponse.create(result);
  const serializedResponse =
    protos.conformance.ConformanceResponse.encode(response).finish();
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
      buffer.length - totalWritten,
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
