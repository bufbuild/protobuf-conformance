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

import { readFileSync, writeFileSync } from "fs";

const templatePath = "README.md";
const baseline = countFailures("impl/baseline/failing_tests.txt");
const googleProtobuf = countFailures("impl/google-protobuf/failing_tests.txt");
const protobufEs = countFailures("impl/protobuf-es/failing_tests.txt");
const protobufJs = countFailures("impl/protobuf.js/failing_tests.txt");
const tsProto = countFailures("impl/ts-proto/failing_tests.txt");
const table = `
| Implementation                          | Language                | Required tests                        | Recommended tests                        | Standard plugin | 
|-----------------------------------------|-------------------------|--------------------------------------:|-----------------------------------------:|----------------:|
| [google-protobuf](impl/google-protobuf) | JavaScript              | ${required(googleProtobuf, baseline)} | ${recommended(googleProtobuf, baseline)} |             yes |
| [Protobuf-ES](impl/protobuf-es)         | TypeScript & JavaScript | ${required(protobufEs, baseline)}     | ${recommended(protobufEs, baseline)}     |             yes |
| [protobuf.js](impl/protobuf.js)         | JavaScript & TypeScript | ${required(protobufJs, baseline)}     | ${recommended(protobufJs, baseline)}     |              no |
| [ts-proto](impl/ts-proto)               | TypeScript              | ${required(tsProto, baseline)}        | ${recommended(tsProto, baseline)}        |             yes |
`;

writeFileSync(templatePath, injectResults(templatePath, table), "utf-8");


function required(failures, base) {
  return `${base.requiredFailures - failures.requiredFailures} / ${base.requiredFailures}`;
}

function recommended(failures, base) {
  return `${base.recommendedFailures - failures.recommendedFailures} / ${base.recommendedFailures}`;
}

function countFailures(failureListPath) {
  const lines = readFileSync(failureListPath, "utf-8")
    .split("\n")
    .filter(line => line.trim().length > 0)
    .filter(line => !line.startsWith("#"));
  return {
    requiredFailures: lines.filter(line => line.startsWith("Required.")).length,
    recommendedFailures: lines.filter(line => line.startsWith("Recommended.")).length,
  };
}


function injectResults(filePath, content) {
  const cStart = "<!--- RESULTS-START -->";
  const cEnd = "<!--- RESULTS-END -->";
  const fileContent = readFileSync(filePath, "utf-8");
  const iStart = fileContent.indexOf(cStart);
  const iEnd = fileContent.indexOf(cEnd);
  if (iStart < 0 || iEnd < 0) throw "missing comment annotations";
  const head = fileContent.substring(0, iStart + cStart.length);
  const foot = fileContent.substring(iEnd);
  return head + content + foot;
}

