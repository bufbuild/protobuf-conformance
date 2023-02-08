var jspb = require('google-protobuf');
var goog = jspb;
const ConformanceRequest = goog.require('proto.conformance.ConformanceRequest');
const {doTest} = goog.require('javascript.protobuf.conformance');

import { readSync, writeSync } from "fs";


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
  const request = ConformanceRequest.deserialize(array.buffer);
  const response = doTest(request);

  const serializedResponse = response.serialize();

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
