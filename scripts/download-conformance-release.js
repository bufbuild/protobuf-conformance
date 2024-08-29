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

import os from "node:os";
import { join as joinPath, dirname } from "node:path";
import { writeFileSync, mkdirSync } from "node:fs";
import { unzipSync } from "fflate";

// Version of the conformance test runner / upstream google-protobuf release
const version = "27.4"; // 28.0
const protoDirectory = new URL("../proto", import.meta.url).pathname;
const runnerDirectory = new URL("../node_modules/.bin", import.meta.url)
  .pathname;

// Download
let build;
switch (os.platform()) {
  case "darwin":
    switch (os.arch()) {
      case "arm64":
      case "x64":
        build = "osx-x86_64";
        break;
    }
    break;
  case "linux":
    switch (os.arch()) {
      case "x64":
        build = "linux-x86_64";
        break;
    }
    break;
}
if (typeof build !== "string") {
  throw new Error(
    `Unable to find conformance runner binary release for ${os.platform()} / ${os.arch()}`,
  );
}
const url = `https://github.com/bufbuild/protobuf-conformance/releases/download/v${version}/conformance_test_runner-${version}-${build}.zip`;
const response = await fetch(url);
const body = new Uint8Array(await response.arrayBuffer());
const entries = Object.entries(
  unzipSync(body, {
    filter: (file) =>
      file.name === "bin/conformance_test_runner" ||
      file.name.endsWith(".proto"),
  }),
);

// Extract
for (const [file, content] of entries) {
  if (file.endsWith(".proto")) {
    const path = joinPath(
      protoDirectory,
      file.startsWith("include") ? file.substring("include".length) : file,
    );
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  }
  if (file.endsWith("conformance_test_runner")) {
    const path = joinPath(runnerDirectory, "conformance_test_runner");
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content, {
      mode: 0o755,
    });
  }
}
