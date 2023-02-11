// Copyright 2021-2023 Buf Technologies, Inc.
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

import { existsSync, readFileSync } from "fs";

const libs = {
  "google-protobuf": {
    testRunner: "javascript/google-protobuf/conformance.ts",
    failingTests: {
      fileName: "javascript/google-protobuf/failing_tests_list.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
  "Protobuf-ES (BigInt)": {
    testRunner: "javascript/protobuf-es/conformance.ts",
    failingTests: {
      fileName: "javascript/protobuf-es/failing_tests_with_bigint.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
  "Protobuf-ES (Without BigInt)": {
    testRunner: "javascript/protobuf-es/conformance.ts",
    failingTests: {
      fileName: "javascript/protobuf-es/failing_tests_without_bigint.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
  "protobuf.js": {
    testRunner: "javascript/protobuf.js/conformance.ts",
    failingTests: {
      fileName: "javascript/protobuf.js/failing_tests_list.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
};

let markdown = `<!--- GENERATED.  DO NOT EDIT.  -->

# Protobuf Conformance Tests

A repository which runs the protocol buffers 
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various languages 
and their respective Protobuf libraries. This is intended to test each libraries conformance to the protobuf spec.

Conformance tests are classified based on whether they are \`Required\` or \`Recommended\`. To strictly conform to the
protobuf spec, _all_ tests marked \`Required\` and \`Recommended\` must pass.  To enforce this, the tests are run with 
the flag \`--enforce_recommended\` as specified by the conformance test runner library.

## Running the tests

To run the conformance tests, run \`make\` from the repo root.

## Languages

The following languages and libraries are tested:

### JavaScript

- [Google Protocol Buffers](https://github.com/protocolbuffers/protobuf-javascript)
- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)

#### A note on Protobuf-ES

In environments where \`BigInt\` is not supported, Protobuf-ES will fallback to a string representation. Consequently,
we run the conformance tests against environments with and without support for \`BigInt\`. To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests are run with the environment variable 
\`BUF_BIGINT_DISABLE=1\`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with \`BigInt\` support.  

## Results

The below table lists the total failures for each library, including individual totals for the \`Required\` and
\`Recommended\` failures. Clicking the name of the library will show the test runner implementation for that library.

Note that none of the libraries tested implement the text format so the results for those test runs are not shown.


| library     | failures<br>(required/recommended)  | total     
|-------------|------------------------------------:|-------:|
`;

for (const [key, config] of Object.entries(libs)) {
  if (existsSync(config.failingTests.fileName)) {
    const failures = readFileSync(config.failingTests.fileName)
      .toString()
      .split("\n");

    failures.forEach((line) => {
      let letter = line.charAt(0);
      if (letter !== "#") {
        const type = line.substring(0, line.indexOf("."));
        if (type !== "") {
          if (type === "Required") {
            config.failingTests.requiredFailures.push(line);
          } else if (type === "Recommended") {
            config.failingTests.recommendedFailures.push(line);
          }
        }
      }
    });
  }

  // Failures
  const totalRecFailures = config.failingTests.recommendedFailures.length;
  const totalReqFailures = config.failingTests.requiredFailures.length;
  const totalFailures = totalRecFailures + totalReqFailures;
  let results = "";
  if (totalFailures > 0) {
    results = `[${totalFailures}](${config.failingTests.fileName})`;
  } else {
    results = `${totalFailures}`;
  }

  markdown += `[${key}](${config.testRunner}) | ${totalReqFailures} / ${totalRecFailures} | ${results}\n`;
}

process.stdout.write(markdown);
