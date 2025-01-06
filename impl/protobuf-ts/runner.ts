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

import type { IMessageType } from "@protobuf-ts/runtime";
import {
  ConformanceRequest,
  ConformanceResponse,
  FailureSet,
  TestCategory,
  WireFormat,
} from "./gen/conformance/conformance.js";
import { TestAllTypesProto3 } from "./gen/google/protobuf/test_messages_proto3.js";
import { TestAllTypesProto2 } from "./gen/google/protobuf/test_messages_proto2.js";
import { readSync, writeSync } from "fs";
import { Any } from "./gen/google/protobuf/any.js";
import { Duration } from "./gen/google/protobuf/duration.js";
import { FieldMask } from "./gen/google/protobuf/field_mask.js";
import { Int32Value } from "./gen/google/protobuf/wrappers.js";
import { Struct } from "./gen/google/protobuf/struct.js";
import { Timestamp } from "./gen/google/protobuf/timestamp.js";
import { Value } from "./gen/google/protobuf/struct.js";

const typeRegistry = [
  Value,
  Struct,
  FieldMask,
  Timestamp,
  Duration,
  Int32Value,
  TestAllTypesProto3,
  TestAllTypesProto2,
  Any,
] as const;

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

function test(request: ConformanceRequest): ConformanceResponse {
  if (request.messageType === FailureSet.typeName) {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    return ConformanceResponse.create({
      result: {
        oneofKind: "protobufPayload",
        protobufPayload: FailureSet.toBinary(FailureSet.create()),
      },
    });
  }

  let testMessage: object;
  let testMessageType: IMessageType<object>;
  let response = ConformanceResponse.create();

  switch (request.messageType) {
    case TestAllTypesProto3.typeName:
      testMessageType = TestAllTypesProto3;
      break;

    case TestAllTypesProto2.typeName:
      testMessageType = TestAllTypesProto2;
      break;

    default:
      return ConformanceResponse.create({
        result: {
          oneofKind: "runtimeError",
          runtimeError: `unknown request message type ${request.messageType}`,
        },
      });
  }

  try {
    switch (request.payload.oneofKind) {
      case "protobufPayload":
        testMessage = testMessageType.fromBinary(
          request.payload.protobufPayload,
        );
        break;

      case "jsonPayload":
        testMessage = testMessageType.fromJsonString(
          request.payload.jsonPayload,
          {
            ignoreUnknownFields:
              request.testCategory ===
              TestCategory.JSON_IGNORE_UNKNOWN_PARSING_TEST,
            typeRegistry,
          },
        );
        break;

      default:
        // We use a failure list instead of skipping, because that is more transparent.
        return ConformanceResponse.create({
          result: {
            oneofKind: "runtimeError",
            runtimeError: `${request.payload.oneofKind ?? "?"} not supported`,
          },
        });
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    return ConformanceResponse.create({
      result: { oneofKind: "parseError", parseError: String(err) },
    });
  }

  try {
    switch (request.requestedOutputFormat) {
      case WireFormat.PROTOBUF:
        response.result = {
          oneofKind: "protobufPayload",
          protobufPayload: testMessageType.toBinary(testMessage),
        };
        break;

      case WireFormat.JSON:
        response.result = {
          oneofKind: "jsonPayload",
          jsonPayload: testMessageType.toJsonString(testMessage, {
            typeRegistry,
          }),
        };
        break;

      case WireFormat.JSPB:
        response.result = {
          oneofKind: "skipped",
          skipped: "JSPB not supported.",
        };
        return response;

      case WireFormat.TEXT_FORMAT:
        response.result = {
          oneofKind: "skipped",
          skipped: "Text format not supported.",
        };
        return response;

      default:
        return ConformanceResponse.create({
          result: {
            oneofKind: "runtimeError",
            runtimeError: `unknown requested output format ${request.requestedOutputFormat}`,
          },
        });
    }
  } catch (err) {
    // > If the input was successfully parsed but errors occurred when
    // > serializing it to the requested output format, set the error message in
    // > this field.
    return ConformanceResponse.create({
      result: { oneofKind: "serializeError", serializeError: String(err) },
    });
  }
  return response;
}

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
function testIo(
  test: (request: ConformanceRequest) => ConformanceResponse,
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
  const request = ConformanceRequest.fromBinary(serializedRequest);
  const response = test(request);
  const serializedResponse = ConformanceResponse.toBinary(response);
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
