#!/usr/bin/env -S node

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

// This file is mostly copied from the conformance testee files located at:
// https://github.com/protocolbuffers/protobuf-javascript/blob/main/experimental/runtime/kernel/conformance/
// - conformance_testee.js
// - conformance_testee_runner_node.js
//
// The main differences between this file and the above are:
// - The above files were combined into this one file
// - The test runners in the protobuf-javascript repo use handwritten code instead of generated code for the Protobuf
//   files used in the test.  These tests generate the code from the Protobuf files using protoc-gen-js.
// - This file uses CommonJS instead of the Closure Compiler
// - err.toString was converted to String(err)
// - Any unsupported input formats (JSON, TextFormat) that were skipped in the original test runner files have been
//   modified to instead fail the tests just for transparency.  Output formats that were skipped were left as skipped
//   to match Protobuf-ES.
const {
  ConformanceRequest,
  ConformanceResponse,
  WireFormat,
} = require("./gen/conformance/conformance_pb.js");

const {
  TestAllTypesProto2,
} = require("./gen/google/protobuf/test_messages_proto2_pb.js");
const {
  TestAllTypesProto3,
} = require("./gen/google/protobuf/test_messages_proto3_pb.js");

const { readSync, writeSync } = require("fs");

function readBuffer(bytes) {
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
function writeBuffer(buffer) {
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

function doTest(request) {
  const response = new ConformanceResponse(new ArrayBuffer(0));

  if (
    request.getPayloadCase() === ConformanceRequest.PayloadCase.JSON_PAYLOAD
  ) {
    response.setRuntimeError("Json is not supported as input format.");
    return response;
  }

  if (
    request.getPayloadCase() === ConformanceRequest.PayloadCase.TEXT_PAYLOAD
  ) {
    response.setRuntimeError("Text format is not supported as input format.");
    return response;
  }

  if (
    request.getPayloadCase() === ConformanceRequest.PayloadCase.PAYLOAD_NOT_SET
  ) {
    response.setRuntimeError("Request didn't have payload.");
    return response;
  }

  if (
    request.getPayloadCase() !== ConformanceRequest.PayloadCase.PROTOBUF_PAYLOAD
  ) {
    throw new Error("Request didn't have accepted input format.");
  }

  if (request.getRequestedOutputFormat() === WireFormat.JSON) {
    response.setSkipped("Json is not supported as output format.");
    return response;
  }

  if (request.getRequestedOutputFormat() === WireFormat.TEXT_FORMAT) {
    response.setSkipped("Text format is not supported as output format.");
    return response;
  }

  if (request.getRequestedOutputFormat() === WireFormat.TEXT_FORMAT) {
    response.setRuntimeError("Unspecified output format");
    return response;
  }

  if (request.getRequestedOutputFormat() !== WireFormat.PROTOBUF) {
    throw new Error("Request didn't have accepted output format.");
  }

  if (request.getMessageType() === "conformance.FailureSet") {
    response.setProtobufPayload(new ArrayBuffer(0));
  } else if (
    request.getMessageType() ===
    "protobuf_test_messages.proto2.TestAllTypesProto2"
  ) {
    try {
      const testMessage = TestAllTypesProto2.deserializeBinary(
        request.getProtobufPayload()
      );
      response.setProtobufPayload(testMessage.serializeBinary());
    } catch (err) {
      response.setParseError(String(err));
    }
  } else if (
    request.getMessageType() ===
    "protobuf_test_messages.proto3.TestAllTypesProto3"
  ) {
    try {
      const testMessage = TestAllTypesProto3.deserializeBinary(
        request.getProtobufPayload()
      );
      response.setProtobufPayload(testMessage.serializeBinary());
    } catch (err) {
      response.setParseError(String(err));
    }
  } else {
    throw new Error(
      `Payload message not supported: ${request.getMessageType()}.`
    );
  }

  return response;
}

function runConformanceTest() {
  const requestLengthBuf = readBuffer(4);
  if (requestLengthBuf === "EOF") {
    return false;
  }
  const requestLength = requestLengthBuf.readInt32LE(0);
  const serializedRequest = readBuffer(requestLength);
  if (serializedRequest === "EOF") {
    throw "Failed to read request.";
  }
  const array = new Uint8Array(serializedRequest);
  const request = ConformanceRequest.deserializeBinary(array.buffer);
  const response = doTest(request);

  const serializedResponse = response.serializeBinary();

  const responseLengthBuf = Buffer.alloc(4);
  responseLengthBuf.writeInt32LE(serializedResponse.byteLength, 0);
  writeBuffer(responseLengthBuf);
  writeBuffer(Buffer.from(serializedResponse));

  return true;
}

// eslint-disable-next-line no-constant-condition
while (true) {
  if (!runConformanceTest()) {
    break;
  }
}
