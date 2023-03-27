#!/usr/bin/env -S npx tsx

import {
  ConformanceRequest,
  ConformanceResponse,
  FailureSet,
  WireFormat,
} from "./gen/conformance/conformance.pb.js";
import { TestAllTypesProto2, TestAllTypesProto2JSON } from "./gen/google/protobuf/test_messages_proto2.pb.js";
import { TestAllTypesProto3, TestAllTypesProto3JSON } from "./gen/google/protobuf/test_messages_proto3.pb.js";
import { readSync, writeSync } from "fs";

function timeSync<R>(label: string, fn: () => R, enabled = false): R {
  if (!enabled) return fn();

  let startedAt = new Date();
  try {
    return fn();
  } finally {
    const elapsedMs = new Date().valueOf() - startedAt.valueOf();
    console.error(`${label},time=${elapsedMs}ms`);
  }
}

function timedSync<A extends Array<any>, R>(label: string, fn: (...args: A) => R) {
  return (...args: A) => timeSync(label, () => fn(...args));
}

const proto2serializer = {
  decodeProtobuf: timedSync("TestAllTypesProto2.decode", TestAllTypesProto2.decode.bind(TestAllTypesProto2)),
  decodeJson: timedSync("TestAllTypesProto2JSON.decode", TestAllTypesProto2JSON.decode.bind(TestAllTypesProto2JSON)),
  encodeProtobuf: timedSync("TestAllTypesProto2.encode", TestAllTypesProto2.encode.bind(TestAllTypesProto2)),
  encodeJson: timedSync("TestAllTypesProto2JSON.encode", TestAllTypesProto2JSON.encode.bind(TestAllTypesProto2JSON)),
}

const proto3serializer = {
  decodeProtobuf: timedSync("TestAllTypesProto3.decode", TestAllTypesProto3.decode.bind(TestAllTypesProto3)),
  decodeJson: timedSync("TestAllTypesProto3JSON.decode", TestAllTypesProto3JSON.decode.bind(TestAllTypesProto3JSON)),
  encodeProtobuf: timedSync("TestAllTypesProto3.encode", TestAllTypesProto3.encode.bind(TestAllTypesProto3)),
  encodeJson: timedSync("TestAllTypesProto3JSON.encode", TestAllTypesProto3JSON.encode.bind(TestAllTypesProto3JSON)),
}

function main() {
  let testCount = 0;
  try {
    while (timeSync(`test.${testCount}`, () => testIo(test))) {
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
  if (request.messageType === "conformance.FailureSet") {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    return { protobufPayload: timeSync("encodeFailureSet", () => FailureSet.encode({})) };
  }


  let serializer: typeof proto2serializer | typeof proto3serializer;
  if (request.messageType === "protobuf_test_messages.proto3.TestAllTypesProto3") {
    serializer = proto3serializer;
  } else if (request.messageType === "protobuf_test_messages.proto2.TestAllTypesProto2") {
    serializer = proto2serializer;
  } else {
    return { runtimeError: `unknown request message type ${request.messageType}` };
  }

  let testMessage: any;
  try {
    if (request.protobufPayload) {
      testMessage = serializer.decodeProtobuf(request.protobufPayload);
    } else if (request.jsonPayload) {
      testMessage = serializer.decodeJson(request.jsonPayload);
    } else {
      // We use a failure list instead of skipping, because that is more transparent.
      return { runtimeError: `${request} not supported` };
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    // console.error(err);
    return { parseError: String(err) };
  }

  try {
    console.error(`requestedOutputFormat=${request.requestedOutputFormat}`);
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

  const requestLengthBuf = readBuffer(4);
  if (requestLengthBuf === "EOF") {
    return false;
  }

  const requestLength = requestLengthBuf.readInt32LE(0);
  const serializedRequest = readBuffer(requestLength);
  if (serializedRequest === "EOF") {
    throw "Failed to read request.";
  }

  const request = timeSync("decodeRequest", () => ConformanceRequest.decode(serializedRequest));
  const response = test(request);

  const serializedResponse = timeSync("encodeResponse", () => ConformanceResponse.encode(response));
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
