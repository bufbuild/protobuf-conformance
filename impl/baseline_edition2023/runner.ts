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

import { create, fromBinary, toBinary } from "@bufbuild/protobuf";
import {
  type ConformanceRequest,
  ConformanceRequestSchema,
  type ConformanceResponse,
  ConformanceResponseSchema,
  FailureSetSchema,
  TestCategory,
  WireFormat,
} from "./gen/conformance_pb.js";
import { readSync, writeSync } from "fs";

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
  // Returning a runtime error for the test Required.Proto3.ProtobufInput.UnknownOrdering.ProtobufOutput
  // crashes the runner.
  if (
    is_Required_Proto3_ProtobufInput_UnknownOrdering_ProtobufOutput(request)
  ) {
    return {
      case: "protobufPayload",
      value: new Uint8Array(),
    };
  }
  return {
    case: "runtimeError",
    value: "not implemented",
  };
}

function is_Required_Proto3_ProtobufInput_UnknownOrdering_ProtobufOutput(
  request: ConformanceRequest,
) {
  if (request.testCategory != TestCategory.BINARY_TEST) {
    return false;
  }
  if (request.requestedOutputFormat != WireFormat.PROTOBUF) {
    return false;
  }
  if (
    request.messageType != "protobuf_test_messages.proto3.TestAllTypesProto3" &&
    request.messageType != "protobuf_test_messages.proto2.TestAllTypesProto2" &&
    request.messageType !=
      "protobuf_test_messages.editions.proto2.TestAllTypesProto2" &&
    request.messageType !=
      "protobuf_test_messages.editions.proto3.TestAllTypesProto3"
  ) {
    return false;
  }
  if (request.payload.case != "protobufPayload") {
    return false;
  }
  const reqPayload = new Uint8Array([
    210, 41, 3, 97, 98, 99, 208, 41, 123, 210, 41, 3, 100, 101, 102, 208, 41,
    200, 3,
  ]);
  if (request.payload.value.byteLength != reqPayload.byteLength) {
    return false;
  }
  if (
    !request.payload.value.every((value, index) => reqPayload[index] === value)
  ) {
    return false;
  }
  return true;
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
