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
  "Protobuf-ES (BigInt)": {
    failingTests: {
      fileName: "protobuf-es/failing_tests_with_bigint.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
  "Protobuf-ES (Without BigInt)": {
    failingTests: {
      fileName: "protobuf-es/failing_tests_without_bigint.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
  "protobuf.js": {
    failingTests: {
      fileName: "protobuf.js/failing_tests_list.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
  "google-protobuf": {
    failingTests: {
      fileName: "google-protobuf/failing_tests_list.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
};

let markdown = `<!--- GENERATED.  DO NOT EDIT.  -->

# JavaScript Protobuf Conformance tests

This package implements JavaScript testees for the protocol buffers [conformance test 
suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) and runs the tests against Protobuf-ES as well
as other JavaScript Protobuf libraries for comparison. 

The following libraries are tested:

- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)
- [Google Protocol Buffers](https://github.com/protocolbuffers/protobuf-javascript)

To run the JavaScript conformance tests, run \`make\` from the repo root.

## Results Summary

The below table lists the total failures for each library, including individual totals for the \`Required\` and
\`Recommended\` failures.

### A note on Protobuf-ES

In environments where \`BigInt\` is not supported, Protobuf-ES will fallback to a string representation.  Consequently,
we run the conformance tests against environments with and without support for \`BigInt\`.  To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests are run with the environment variable 
\`BUF_BIGINT_DISABLE=1\`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with \`BigInt\` support.  

### Text Format Tests 

Note that none of the libraries tested implement the text format so the results for those test runs are not shown.

## Results


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

  markdown += `${key} | ${totalReqFailures} / ${totalRecFailures} | ${results}\n`;
}

process.stdout.write(markdown);
