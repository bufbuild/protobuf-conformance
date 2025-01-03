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

import {
  type ConformanceRequest,
  ConformanceRequestSchema,
  type ConformanceResponse,
  ConformanceResponseSchema,
  FailureSetSchema,
  TestCategory,
  WireFormat,
} from "./gen/conformance/conformance_pb.js";
import { readSync, writeSync } from "fs";
import { file_google_protobuf_test_messages_proto3 } from "./gen/google/protobuf/test_messages_proto3_pb.js";
import { file_google_protobuf_test_messages_proto2 } from "./gen/google/protobuf/test_messages_proto2_pb.js";
import {
  file_google_protobuf_any,
  file_google_protobuf_duration,
  file_google_protobuf_field_mask,
  file_google_protobuf_struct,
  file_google_protobuf_timestamp,
  file_google_protobuf_wrappers,
} from "@bufbuild/protobuf/wkt";
import {
  createRegistry,
  create,
  toBinary,
  fromBinary,
  toJsonString,
  fromJsonString,
  type Message,
} from "@bufbuild/protobuf";
import { file_google_protobuf_test_messages_edition2023 } from "./gen/google/protobuf/test_messages_edition2023_pb";
import { file_google_protobuf_test_messages_proto2_editions } from "./gen/google/protobuf/test_messages_proto2_editions_pb";
import { file_google_protobuf_test_messages_proto3_editions } from "./gen/google/protobuf/test_messages_proto3_editions_pb";

const registry = createRegistry(
  file_google_protobuf_test_messages_proto2,
  file_google_protobuf_test_messages_proto3,
  file_google_protobuf_test_messages_edition2023,
  file_google_protobuf_test_messages_proto2_editions,
  file_google_protobuf_test_messages_proto3_editions,
  file_google_protobuf_any,
  file_google_protobuf_struct,
  file_google_protobuf_field_mask,
  file_google_protobuf_timestamp,
  file_google_protobuf_duration,
  file_google_protobuf_wrappers,
);

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

function test(request: ConformanceRequest): ConformanceResponse["result"] {
  if (request.messageType === FailureSetSchema.typeName) {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    const failureSet = create(FailureSetSchema);
    return {
      case: "protobufPayload",
      value: toBinary(FailureSetSchema, failureSet),
    };
  }

  const payloadSchema = registry.getMessage(request.messageType);
  if (!payloadSchema) {
    return {
      case: "runtimeError",
      value: `unknown request message type ${request.messageType}`,
    };
  }

  let payload: Message;

  try {
    switch (request.payload.case) {
      case "protobufPayload":
        payload = fromBinary(payloadSchema, request.payload.value);
        break;

      case "jsonPayload":
        payload = fromJsonString(payloadSchema, request.payload.value, {
          ignoreUnknownFields:
            request.testCategory ===
            TestCategory.JSON_IGNORE_UNKNOWN_PARSING_TEST,
          registry,
        });
        break;

      default:
        // We use a failure list instead of skipping, because that is more transparent.
        return {
          case: "runtimeError",
          value: `${request.payload.case ?? "?"} not supported`,
        };
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    return { case: "parseError", value: String(err) };
  }

  try {
    switch (request.requestedOutputFormat) {
      case WireFormat.PROTOBUF:
        return {
          case: "protobufPayload",
          value: toBinary(payloadSchema, payload),
        };

      case WireFormat.JSON:
        return {
          case: "jsonPayload",
          value: toJsonString(payloadSchema, payload, {
            registry,
          }),
        };

      case WireFormat.JSPB:
        return { case: "skipped", value: "JSPB not supported." };

      case WireFormat.TEXT_FORMAT:
        return { case: "skipped", value: "Text format not supported." };

      default:
        return {
          case: "runtimeError",
          value: `unknown requested output format ${request.requestedOutputFormat}`,
        };
    }
  } catch (err) {
    // > If the input was successfully parsed but errors occurred when
    // > serializing it to the requested output format, set the error message in
    // > this field.
    return { case: "serializeError", value: String(err) };
  }
}

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
function testIo(
  test: (request: ConformanceRequest) => ConformanceResponse["result"],
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
  const request = fromBinary(ConformanceRequestSchema, serializedRequest);
  const response = create(ConformanceResponseSchema);
  response.result = test(request);
  const serializedResponse = toBinary(ConformanceResponseSchema, response);
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
