#!/usr/bin/env -S npx tsx

import {
  ConformanceRequest,
  ConformanceResponse,
  FailureSet,
  WireFormat,
} from "./gen/conformance/conformance.pb";
import { TestAllTypesProto3, TestAllTypesProto3JSON } from "./gen/google/protobuf/test_messages_proto3.pb";
import { readSync, writeSync } from "fs";
// import {
//   Any,
//   Duration,
//   FieldMask,
//   Int32Value,
//   Struct,
//   Timestamp,
//   Value,
// } from "protoscript";


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

function test(request: ConformanceRequest): ConformanceResponse {
  console.trace(request);
  if (request.messageType === "conformance.FailureSet") {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    return {
      // Failing, serializes to empty byte array
      protobufPayload: FailureSet.encode({ failure: [] })
    };
  }

  let testMessage: object;
  let serializer = {
    decodeProtobuf: TestAllTypesProto3.decode.bind(TestAllTypesProto3),
    decodeJson: TestAllTypesProto3JSON.decode.bind(TestAllTypesProto3JSON),
    encodeProtobuf: TestAllTypesProto3.encode.bind(TestAllTypesProto3),
    encodeJson: TestAllTypesProto3JSON.encode.bind(TestAllTypesProto3JSON),
  };

  console.trace(request.messageType);
  switch (request.messageType) {
    case "google.protobuf.TestAllTypesProto3":
      break;

    // case "google.protobuf.TestAllTypesProto2":
    //   testMessageType = TestAllTypesProto2;
    //   break;

    default:
      return {
        runtimeError: `unknown request message type ${request.messageType}`,
      };
  }

  try {
    if (request.protobufPayload) {
      testMessage = serializer.decodeProtobuf(
        request.protobufPayload
      );
    } else if (request.jsonPayload) {
      testMessage = serializer.decodeJson(
        request.jsonPayload
      );
    } else {
      // We use a failure list instead of skipping, because that is more transparent.
      return {
        runtimeError: `${request} not supported`,
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
      case WireFormat.PROTOBUF:
        return { protobufPayload: serializer.encodeProtobuf(testMessage) };

      case WireFormat.JSON:
        return { jsonPayload: serializer.encodeJson(testMessage) };

      case WireFormat.JSPB:
        return { skipped: "JSPB not supported." };

      case WireFormat.TEXT_FORMAT:
        return { skipped: "Text format not supported." };

      default:
        return { runtimeError: `unknown requested output format ${request.requestedOutputFormat}` };
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
  test: (request: ConformanceRequest) => ConformanceResponse
): boolean {
  setBlockingStdout();

  console.error(`readBuffer(4)...`);
  const requestLengthBuf = readBuffer(1);
  console.error(`buffer=`, requestLengthBuf);
  readBuffer(3); // DELETEME
  if (requestLengthBuf === "EOF") {
    return false;
  }

  console.error(`readInt32LE(0)...`);
  const requestLength = 28; // DELETEME
  // const requestLength = requestLengthBuf.readInt32LE(0);
  console.error(`reading request, length=${requestLength}...`);
  const serializedRequest = readBuffer(requestLength);
  if (serializedRequest === "EOF") {
    throw "Failed to read request.";
  }

  console.error(`decoding request...`);
  const request = ConformanceRequest.decode(serializedRequest);
  if (request.messageType === "conformance.FailureSet") {
    // HACKS
    const serializedResponse = new Uint8Array([26, 0]);
    const responseLengthBuf = Buffer.alloc(4);
    console.error(`writing response=${serializedResponse}, length=${serializedResponse.length}...`);
    responseLengthBuf.writeInt32LE(serializedResponse.length, 0);
    writeBuffer(responseLengthBuf);
    writeBuffer(Buffer.from(serializedResponse));
    return true;
  }

  const response = test(request);

  const serializedResponse = ConformanceResponse.encode(response);
  const responseLengthBuf = Buffer.alloc(4);
  console.error(`writing response=${serializedResponse}, length=${serializedResponse.length}...`);
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
