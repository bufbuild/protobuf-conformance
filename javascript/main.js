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
    failingTests: {
      fileName: "protobuf-es/failing_tests_with_bigint.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
    failingTextFormatTests: {
      fileName: "protobuf-es/failing_tests_text_format.txt",
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
    failingTextFormatTests: {
      fileName: "protobuf-es/failing_tests_text_format.txt",
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
    failingTextFormatTests: {
      fileName: "protobuf.js/failing_tests_text_format.txt",
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
    failingTextFormatTests: {
      fileName: "google-protobuf/failing_tests_text_format.txt",
      recommendedFailures: [],
      requiredFailures: [],
    },
  },
};

function calc(config, testType) {
  if (existsSync(config[testType].fileName)) {
    const failures = readFileSync(config[testType].fileName)
      .toString()
      .split("\n");

    failures.forEach((line) => {
      let letter = line.charAt(0);
      if (letter !== "#") {
        const type = line.substring(0, line.indexOf("."));
        if (type !== "") {
          if (type === "Required") {
            config[testType].requiredFailures.push(line);
          } else if (type === "Recommended") {
            config[testType].recommendedFailures.push(line);
          }
        }
      }
    });
  }
  return config;
}

function calc2(tests, failures) {
  failures.forEach((line) => {
    let letter = line.charAt(0);
    if (letter !== "#") {
      const type = line.substring(0, line.indexOf("."));
      if (type !== "") {
        if (type === "Required") {
          tests.requiredFailures.push(line);
        } else if (type === "Recommended") {
          tests.recommendedFailures.push(line);
        }
      }
    }
  });
  return tests;
}

for (let config of Object.values(obj)) {
  // config = calc(config, "failingTests");
  // config = calc(config, "failingTextFormatTests");

  if (existsSync(config.failingTests.fileName)) {
    const failures = readFileSync(config.failingTests.fileName)
      .toString()
      .split("\n");

    calc2(config.failingTests, failures);

    // failures.forEach((line) => {
    //   let letter = line.charAt(0);
    //   if (letter !== "#") {
    //     const type = line.substring(0, line.indexOf("."));
    //     if (type !== "") {
    //       if (type === "Required") {
    //         config.failingTests.requiredFailures.push(line);
    //       } else if (type === "Recommended") {
    //         config.failingTests.recommendedFailures.push(line);
    //       }
    //     }
    //   }
    // });
  }

  if (existsSync(config.failingTextFormatTests.fileName)) {
    const failures = readFileSync(config.failingTextFormatTests.fileName)
      .toString()
      .split("\n");

    calc2(config.failingTextFormatTests, failures);
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

### Google Protocol Buffers

For Google Protocol Buffers tests, we use the same list of expected failures for Protobuf-ES.


## Results


| library     | failures<br>(required/recommended)  | total  | text format failures<br>(required/recommended) | total     
|-------------|------------------------------------:|-------:|---------------------------------------:|--------------:|
`;

for (const [key, config] of Object.entries(obj)) {
  const totalRecFailures = config.failingTests.recommendedFailures.length;
  const totalReqFailures = config.failingTests.requiredFailures.length;
  const totalFailures = totalRecFailures + totalReqFailures;

  // Text Format
  const totalTextFormatRecFailures =
    config.failingTextFormatTests.recommendedFailures.length;
  const totalTextFormatReqFailures =
    config.failingTextFormatTests.requiredFailures.length;
  const totalTextFormatFailures =
    totalTextFormatRecFailures + totalTextFormatReqFailures;
  let results = "";
  if (totalFailures > 0) {
    results = `[${totalFailures}](${config.failingTests.fileName})`;
  } else {
    results = `${totalFailures}`;
  }
  let textFormatResults = "";
  if (totalTextFormatFailures > 0) {
    textFormatResults = `[${totalTextFormatRecFailures}](${config.failingTextFormatTests.fileName})`;
  } else {
    textFormatResults = `${totalTextFormatRecFailures}`;
  }

  markdown += `${key} | (${totalReqFailures} / ${totalRecFailures}) | ${results} | ${totalTextFormatReqFailures} / ${totalTextFormatRecFailures} | ${textFormatResults}\n`;
}

process.stdout.write(markdown);
