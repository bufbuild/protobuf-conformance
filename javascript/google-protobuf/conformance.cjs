const {
  ConformanceRequest,
  ConformanceResponse,
  WireFormat,
} = require("./gen/conformance/conformance_pb.cjs");

const {
  TestAllTypesProto2,
} = require("./gen/google/protobuf/test_messages_proto2_pb.cjs");
const {
  TestAllTypesProto3,
} = require("./gen/google/protobuf/test_messages_proto3_pb.cjs");

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
    response.setSkipped("Json is not supported as input format.");
    return response;
  }

  if (
    request.getPayloadCase() === ConformanceRequest.PayloadCase.TEXT_PAYLOAD
  ) {
    response.setSkipped("Text format is not supported as input format.");
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
      response.setParseError(err.toString());
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
      response.setParseError(err.toString());
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

while (true) {
  if (!runConformanceTest()) {
    break;
  }
}
