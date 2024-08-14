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

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join as joinPath } from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

const implDirectory = new URL("../impl", import.meta.url).pathname;

/**
 * @typedef Impl
 * @property {boolean} baseline
 * @property {string} path
 * @property {ConformanceMeta} conformanceMeta
 * @property {GetFailuresFn} getFailures
 * @property {RunFn} run
 */

/**
 * @callback GetFailuresFn
 * @returns {Failures}
 */

/**
 * @callback RunFn
 * @param {string} command
 */

/**
 * @typedef Failures
 * @property {string[]} lines
 * @property {number} recommended
 * @property {number} required
 */

/**
 * @typedef ConformanceMeta
 * @property {string} name
 * @property {string} githubUrl
 * @property {boolean} editions
 * @property {boolean} javascript
 * @property {boolean} typescript
 * @property {boolean} standardPlugin
 */

/**
 * @return {(Impl)[]}
 */
export function listImpl() {
  const directories = readdirSync(implDirectory, {
    withFileTypes: true,
  })
    .filter((ent) => ent.isDirectory())
    .map((ent) => joinPath(ent.parentPath, ent.name));
  return directories.map((dir) => {
    return {
      baseline: dir.endsWith("baseline"),
      path: dir,
      conformanceMeta: parseImplPackage(joinPath(dir, "package.json")),
      getFailures() {
        return parseFailingTests(joinPath(dir, "failing_tests.txt"));
      },
      run(command) {
        const opt = {
          cwd: this.path,
          stdio: ["pipe", "inherit", "inherit"],
          shell: true,
        };
        console.log(`${this.path}$ ${command}`);
        const r = spawnSync(command, opt);
        if (r.error) {
          throw r.error;
        }
        if (r.status !== 0) {
          process.exit(r.status);
        }
      },
    };
  });
}

/**
 * @param {string} path
 * @return {ConformanceMeta}
 */
function parseImplPackage(path) {
  if (!existsSync(path)) {
    throw new Error(`${path}: missing file`);
  }
  const json = JSON.parse(readFileSync(path));
  if (json === null || typeof json != "object") {
    throw new Error(`${path}: expected object`);
  }
  if (
    json.conformanceMeta === null ||
    typeof json.conformanceMeta != "object"
  ) {
    throw new Error(`${path}: expected conformanceMeta to be object`);
  }
  if (typeof json.conformanceMeta.name != "string") {
    throw new Error(`${path}: expected conformanceMeta.name to be string`);
  }
  if (typeof json.conformanceMeta.githubUrl != "string") {
    throw new Error(`${path}: expected conformanceMeta.githubUrl to be string`);
  }
  if (typeof json.conformanceMeta.editions != "boolean") {
    throw new Error(`${path}: expected conformanceMeta.editions to be boolean`);
  }
  if (typeof json.conformanceMeta.javascript != "boolean") {
    throw new Error(
      `${path}: expected conformanceMeta.javascript to be string`,
    );
  }
  if (typeof json.conformanceMeta.typescript != "boolean") {
    throw new Error(
      `${path}: expected conformanceMeta.typescript to be string`,
    );
  }
  if (typeof json.conformanceMeta.standardPlugin != "boolean") {
    throw new Error(
      `${path}: expected conformanceMeta.standardPlugin to be string`,
    );
  }
  return {
    name: json.conformanceMeta.name,
    githubUrl: json.conformanceMeta.githubUrl,
    editions: json.conformanceMeta.editions,
    javascript: json.conformanceMeta.javascript,
    typescript: json.conformanceMeta.typescript,
    standardPlugin: json.conformanceMeta.standardPlugin,
  };
}

/**
 * @param {string} failureListPath
 * @return {Failures}
 */
function parseFailingTests(failureListPath) {
  const lines = readFileSync(failureListPath, "utf-8")
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .filter((line) => !line.startsWith("#"));
  return {
    lines,
    required: lines.filter((line) => line.startsWith("Required.")).length,
    recommended: lines.filter((line) => line.startsWith("Recommended.")).length,
  };
}

/**
 * @param {string} filePath
 * @param {string} marker
 * @param {string} contents
 */
export function injectMarkdown(filePath, marker, contents) {
  const cStart = `<!-- ${marker}-START -->\n`;
  const cEnd = `<!-- ${marker}-END -->`;
  const fileContent = readFileSync(filePath, "utf-8");
  const iStart = fileContent.indexOf(cStart);
  const iEnd = fileContent.indexOf(cEnd);
  if (iStart < 0 || iEnd < 0)
    throw new Error(`missing marker annotation in ${filePath}`);
  const head = fileContent.substring(0, iStart + cStart.length);
  const foot = fileContent.substring(iEnd);
  const newContent = head + contents + foot;
  if (newContent !== fileContent) {
    writeFileSync(filePath, newContent);
  }
}
