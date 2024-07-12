#!/usr/bin/env -S npx tsx

// Copyright 2023-2024 Buf Technologies, Inc.
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

import {Message} from "google-protobuf";
import { conformance } from "./gen/conformance/conformance";
import { protobuf_test_messages } from "./gen/google/protobuf/test_messages_proto3";
import { google as googleAny } from "./gen/google/protobuf/any";
import { google as googleDuration } from "./gen/google/protobuf/duration";
import { google as googleFieldMask } from "./gen/google/protobuf/field_mask";
import { google as googleStruct } from "./gen/google/protobuf/struct";
import { google as googleTimestamp } from "./gen/google/protobuf/timestamp";

import { readSync, writeSync } from "fs";

type MessageCtor = {
  new (): Message;
  deserialize(bytes: Uint8Array): Message;
  fromObject(object: unknown): Message;
}

const registry: Record<string, MessageCtor> = {
  "google.protobuf.Any": googleAny.protobuf.Any,
  "google.protobuf.Duration": googleDuration.protobuf.Duration,
  "google.protobuf.FieldMask": googleFieldMask.protobuf.FieldMask,
  "google.protobuf.Struct": googleStruct.protobuf.Struct,
  "google.protobuf.Value": googleStruct.protobuf.Value,
  "google.protobuf.Timestamp": googleTimestamp.protobuf.Timestamp,
  "protobuf_test_messages.proto3.TestAllTypesProto3": protobuf_test_messages.proto3.TestAllTypesProto3
};

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

function test(request: conformance.ConformanceRequest, response: conformance.ConformanceResponse): void {
  if (request.message_type === "conformance.FailureSet") {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    response.protobuf_payload = new conformance.FailureSet().serialize();
    return;
  }

  const payloadType = registry[request.message_type];
  if (!payloadType) {
    response.runtime_error = `unknown request message type ${request.message_type}`;
    return;
  }

  let payload: Message;

  try {
    switch (request.payload) {
      case "protobuf_payload":
        payload = payloadType.deserialize(request.protobuf_payload)
        break;
      case "json_payload":
        payload = payloadType.fromObject(JSON.parse(request.json_payload));
        break;

      default:
        // We use a failure list instead of skipping, because that is more transparent.
        response.runtime_error = `${request.payload} not supported`;
        return;
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    response.parse_error = String(err);
    return;
  }

  try {
    switch (request.requested_output_format) {
      case conformance.WireFormat.PROTOBUF:
        response.protobuf_payload = payload.serializeBinary();
        return;
      case conformance.WireFormat.JSON:
        response.json_payload = JSON.stringify(payload.toObject());
        return;
      default:
        response.runtime_error = `${request.payload} not supported`;
        return;
    }
  } catch (err) {
    // > If the input was successfully parsed but errors occurred when
    // > serializing it to the requested output format, set the error message in
    // > this field.
    response.serialize_error = String(err);
  }
}

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
function testIo(
    test: (request: conformance.ConformanceRequest, response: conformance.ConformanceResponse) => void
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
  const request = conformance.ConformanceRequest.deserialize(serializedRequest);
  const response = new conformance.ConformanceResponse();
  test(request, response);
  const serializedResponse = response.serialize();
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
