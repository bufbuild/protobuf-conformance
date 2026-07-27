#!/usr/bin/env -S npx tsx

// Copyright 2023-2026 Buf Technologies, Inc.
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
import protojson from "protobufjs/ext/protojson.js";
import textformat from "protobufjs/ext/textformat.js";

$protobuf.Reader.discardUnknown = false;

protos.default.resolveAll();

const registry: Record<string, $protobuf.Type> = {
  "protobuf_test_messages.proto2.TestAllTypesProto2": protos.default.lookupType(
    "protobuf_test_messages.proto2.TestAllTypesProto2",
  ),
  "protobuf_test_messages.proto3.TestAllTypesProto3": protos.default.lookupType(
    "protobuf_test_messages.proto3.TestAllTypesProto3",
  ),
  "protobuf_test_messages.editions.TestAllTypesEdition2023":
    protos.default.lookupType(
      "protobuf_test_messages.editions.TestAllTypesEdition2023",
    ),
  "protobuf_test_messages.editions.proto2.TestAllTypesProto2":
    protos.default.lookupType(
      "protobuf_test_messages.editions.proto2.TestAllTypesProto2",
    ),
  "protobuf_test_messages.editions.proto3.TestAllTypesProto3":
    protos.default.lookupType(
      "protobuf_test_messages.editions.proto3.TestAllTypesProto3",
    ),
  "google.protobuf.Struct": protos.default.lookupType("google.protobuf.Struct"),
  "google.protobuf.Value": protos.default.lookupType("google.protobuf.Value"),
  "google.protobuf.FieldMask": protos.default.lookupType(
    "google.protobuf.FieldMask",
  ),
  "google.protobuf.Duration": protos.default.lookupType(
    "google.protobuf.Duration",
  ),
  "google.protobuf.Int32Value": protos.default.lookupType(
    "google.protobuf.Int32Value",
  ),
  "google.protobuf.Any": protos.default.lookupType("google.protobuf.Any"),
  "google.protobuf.Timestamp": protos.default.lookupType(
    "google.protobuf.Timestamp",
  ),
};

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

function test(request: protos.conformance.ConformanceRequest.$Shape): Result {
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

  if (!request.messageType) {
    return {
      runtimeError: `missing request message type`,
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
    switch (request.payload) {
      case "protobufPayload":
        payload = payloadType.decode(request.protobufPayload);
        break;

      case "jsonPayload":
        payload = protojson.fromJsonString(payloadType, request.jsonPayload, {
          ignoreUnknownFields:
            request.testCategory ===
            protos.conformance.TestCategory.JSON_IGNORE_UNKNOWN_PARSING_TEST,
        });
        break;

      case "textPayload":
        payload = textformat.fromText(payloadType, request.textPayload);
        break;

      default:
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
          jsonPayload: protojson.toJsonString(payloadType, payload),
        };

      case 3: // JSPB
        return { skipped: "JSPB not supported." };

      case 4: // TEXT_FORMAT
        return {
          textPayload: textformat.toText(payloadType, payload, {
            unknowns: request.printUnknownFields ?? false,
          }),
        };

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

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
function testIo(
  test: (request: protos.conformance.ConformanceRequest.$Shape) => Result,
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
