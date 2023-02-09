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

const obj = {
  "Protobuf-ES (BigInt)": {
    resultsFile: "protobuf-es/failing_tests.txt",
    recommendedFailures: [],
    requiredFailures: [],
  },
  "Protobuf-ES (Without BigInt)": {
    resultsFile: "protobuf-es/failing_tests.txt",
    recommendedFailures: [],
    requiredFailures: [],
  },
  "protobuf.js": {
    resultsFile: "protobuf.js/failing_tests.txt",
    recommendedFailures: [],
    requiredFailures: [],
  },
  "google-protobuf": {
    resultsFile: "google-protobuf/failing_tests.txt",
    recommendedFailures: [],
    requiredFailures: [],
  },
};

for (const config of Object.values(obj)) {
  if (existsSync(config.resultsFile)) {
    const failures = readFileSync(config.resultsFile).toString().split("\n");

    failures.forEach((line) => {
      let letter = line.charAt(0);
      if (letter !== "#") {
        const type = line.substring(0, line.indexOf("."));
        if (type !== "") {
          if (type === "Required") {
            config.requiredFailures.push(line);
          } else if (type === "Recommended") {
            config.recommendedFailures.push(line);
          }
        }
      }
    });
  }
}

let markdown = `# JavaScript Protobuf Conformance tests

This package implements JavaScript testees for the protocol buffers [conformance test 
suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) and runs the tests against Protobuf-ES as well
as other JavaScript Protobuf libraries for comparison. 

The following libraries are tested:

- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)
- [Google Protocol Buffers](https://github.com/protocolbuffers/protobuf-javascript)

To run the JavaScript conformance tests, run \`make\` from the repo root.

## Expected Test Failures

The conformance test suite allows test runners to specify a list of tests that are expected to fail.  The tests denoted
in this list are not included as part of the final set of failures.  A note on how these expected tests are compiled 
per library:

### Protobuf-ES

In environments where \`BigInt\` is not supported, Protobuf-ES will fallback to a string representation.  Consequently,
we run the conformance tests against environments with and without support for \`BigInt\`.  To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests should be run with the environment variable 
\`BUF_BIGINT_DISABLE=1\`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with \`BigInt\` support.  If it is not, Protobuf-ES lists approximately 9 \`BigInt\` 
related tests that are expected to fail.  

However, in environments where there _is_ \`BigInt\` support, Protobuf-ES 
only expects one test failure, which is related to proto2 extensions.  This is because extensions are not currently 
supported.

Finally, Protobuf-ES also specifies a list of expected failures related to the Protobuf Text Format spec as that is not
supported.  These TextFormat tests are run as a separate run by the conformance runner, so this is why each invocation of the runner
seems to run twice.

### protobuf.js

For protobuf.js conformance tests, we use the same expected failure lists as Protobuf-ES does in its list for
environments without \`BigInt\` support.  While protobuf.js does claim to support \`BigInt\` 
by [simply installing](https://github.com/protobufjs/protobuf.js#compatibility) the \`long\` library alongside 
protobuf.js, it still does not seem to pass the \`BigInt\` related tests.  However, in the interest of fairness, we
mark these as expected to fail as Protobuf-ES does.

We also mark the same TextFormat tests as expected failures.

## Google Protocol Buffers

For Google Protocol Buffers tests, we use the same list of expected failures for Protobuf-ES.


## Results

| library      | recommended failures             | required failures               | total         | results list   
|---------------------|------------------------:|-----------------------:|-------------------:|--------------------:|
`;

for (const [key, config] of Object.entries(obj)) {
  const totalRecFailures = config.recommendedFailures.length;
  const totalReqFailures = config.requiredFailures.length;
  const totalFailures = totalRecFailures + totalReqFailures;
  let results = "";
  if (totalFailures > 0) {
    results = `[View results](${config.resultsFile})`;
  }

  markdown += `${key} | ${totalRecFailures} | ${totalReqFailures} | ${totalFailures} | ${results}\n`;
}

process.stdout.write(markdown);
