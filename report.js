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

import { readFileSync, writeFileSync } from "fs";

const templatePath = "README.md";
const baseline = countFailures("impl/baseline/failing_tests.txt");
const googleProtobuf = countFailures("impl/google-protobuf/failing_tests.txt");
const protobufEs = countFailures("impl/protobuf-es/failing_tests.txt");
const protobufJs = countFailures("impl/protobuf.js/failing_tests.txt");
const protobufTs = countFailures("impl/protobuf-ts/failing_tests.txt");
const tsProto = countFailures("impl/ts-proto/failing_tests.txt");
const protocGenTs = countFailures("impl/protoc-gen-ts/failing_tests.txt");
const protoscript = countFailures("impl/protoscript/failing_tests.txt");

const percentages = (property) => (failures, base) => {
  const total = base[property];
  const fails = failures[property];
  const passed = total - fails;
  const percentage = (passed / total) * 100;
  const [sig, fra] = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(percentage).split(".");
  const url = new URL(`https://progress-bar.dev/${sig}`);
  url.searchParams.set("width", "100");
  if (fra === undefined) {
    url.searchParams.set("suffix", `% passing`);
  } else {
    url.searchParams.set("suffix", `.${fra}% passing`);
  }
  return `<sub><img src="${url}" height="25" width="125" /></sub><br><sup>(${fails}&nbsp;failures)<sub>`;
};

const required = percentages("requiredFailures");
const recommended = percentages("recommendedFailures");

const table = `
| Implementation                          | JavaScript         | TypeScript         | Standard<br>Plugin | Required tests                        | Recommended tests                        |
|-----------------------------------------|:------------------:|:------------------:|:------------------:|:-------------------------------------:|:----------------------------------------:|
| [Protobuf-ES](impl/protobuf-es)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | ${required(protobufEs, baseline)}     | ${recommended(protobufEs, baseline)}     |
| [protobuf-ts](impl/protobuf-ts)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | ${required(protobufTs, baseline)}     | ${recommended(protobufTs, baseline)}     |
| [protoscript](impl/protoscript)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | ${required(protoscript, baseline)}    | ${recommended(protoscript, baseline)}    |
| [google-protobuf](impl/google-protobuf) | :heavy_check_mark: | :x:                | :heavy_check_mark: | ${required(googleProtobuf, baseline)} | ${recommended(googleProtobuf, baseline)} |
| [protobuf.js](impl/protobuf.js)         | :heavy_check_mark: | :heavy_check_mark: | :x:                | ${required(protobufJs, baseline)}     | ${recommended(protobufJs, baseline)}     |
| [protoc-gen-ts](impl/protoc-gen-ts)     | :x:                | :heavy_check_mark: | :heavy_check_mark: | ${required(protocGenTs, baseline)}    | ${recommended(protocGenTs, baseline)}    |
| [ts-proto](impl/ts-proto)               | :x:                | :heavy_check_mark: | :heavy_check_mark: | ${required(tsProto, baseline)}        | ${recommended(tsProto, baseline)}        |
`;

writeFileSync(templatePath, injectResults(templatePath, table), "utf-8");

function countFailures(failureListPath) {
  const lines = readFileSync(failureListPath, "utf-8")
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .filter((line) => !line.startsWith("#"));
  return {
    requiredFailures: lines.filter((line) => line.startsWith("Required."))
      .length,
    recommendedFailures: lines.filter((line) => line.startsWith("Recommended."))
      .length,
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
