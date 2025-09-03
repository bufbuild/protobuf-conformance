// Copyright 2023-2025 Buf Technologies, Inc.
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
 * @property {string} path
 * @property {ConformanceMeta} conformanceMeta
 * @property {GetFailuresFn} getFailures
 * @property {RunFn} run
 * @property {Impl} baseline
 * @property {Stats} required
 * @property {Stats} recommended
 * @property {number} featureScore
 */

/**
 * @typedef ImplBase
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
 * @typedef Stats
 * @property {number} passing
 * @property {number} total
 * @property {number} percentPassing
 */

/**
 * @typedef ConformanceMeta
 * @property {string} name
 * @property {boolean} baseline
 * @property {string} githubUrl
 * @property {string} maximumEdition
 * @property {boolean} javascript
 * @property {boolean} typescript
 * @property {boolean} standardPlugin
 */

/**
 * Implementations are sorted by conformance:
 * - Highest count of required conformance tests passed first
 * - If tied, consider recommended conformance tests
 * - If tied, score features (support for editions, TypeScript and JavaScript, standard plugin)
 *
 * @param {string[]} knownEditions
 * @return {Impl[]}
 */
export function listImpl(knownEditions) {
  const all = listAll();
  for (const impl of all) {
    if (!knownEditions.includes(impl.conformanceMeta.maximumEdition)) {
      throw new Error(
        `${impl.path}: expected conformanceMeta.maximumEdition to be one of ${knownEditions.join(", ")}`,
      );
    }
  }
  const baselines = all.filter((i) => i.conformanceMeta.baseline);
  const missingBaselines = knownEditions.filter(
    (e) => !baselines.find((b) => b.conformanceMeta.maximumEdition === e),
  );
  if (missingBaselines.length > 0) {
    throw new Error(`missing baseline for ${missingBaselines.join(", ")}`);
  }
  return all
    .filter((i) => !i.conformanceMeta.baseline)
    .map((i) => {
      const baseline = baselines.find(
        (b) =>
          b.conformanceMeta.maximumEdition === i.conformanceMeta.maximumEdition,
      );
      if (!baseline) {
        throw new Error(
          `missing baseline for ${i.conformanceMeta.maximumEdition}`,
        );
      }
      let featureScore = knownEditions.indexOf(
        i.conformanceMeta.maximumEdition,
      );
      if (i.conformanceMeta.standardPlugin) {
        featureScore++;
      }
      if (i.conformanceMeta.typescript) {
        featureScore++;
      }
      if (i.conformanceMeta.javascript) {
        featureScore++;
      }
      const thisFailures = i.getFailures();
      const baseFailures = baseline.getFailures();
      return {
        ...i,
        baseline,
        required: {
          passing: baseFailures.required - thisFailures.required,
          total: baseFailures.required,
          percentPassing:
            ((baseFailures.required - thisFailures.required) /
              baseFailures.required) *
            100,
        },
        recommended: {
          passing: baseFailures.recommended - thisFailures.recommended,
          total: baseFailures.recommended,
          percentPassing:
            ((baseFailures.recommended - thisFailures.recommended) /
              baseFailures.recommended) *
            100,
        },
        featureScore,
      };
    })
    .sort((a, b) => {
      if (a.required.percentPassing < b.required.percentPassing) {
        return 1;
      }
      if (a.required.percentPassing > b.required.percentPassing) {
        return -1;
      }
      if (a.recommended.percentPassing < b.recommended.percentPassing) {
        return 1;
      }
      if (a.recommended.percentPassing > b.recommended.percentPassing) {
        return -1;
      }
      if (a.featureScore < b.featureScore) {
        return 1;
      }
      if (a.featureScore > b.featureScore) {
        return -1;
      }
      return a.conformanceMeta.name - b.conformanceMeta.name;
    });
}

/**
 * @return {(ImplBase)[]}
 */
export function listAll() {
  const directories = readdirSync(implDirectory, {
    withFileTypes: true,
  })
    .filter((ent) => ent.isDirectory())
    .map((ent) => joinPath(ent.parentPath, ent.name));
  return directories.map((dir) => {
    return {
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
  const baseline = json.conformanceMeta.baseline ?? false;
  if (typeof baseline != "boolean") {
    throw new Error(`${path}: expected conformanceMeta.baseline to be boolean`);
  }
  if (typeof json.conformanceMeta.githubUrl != "string") {
    throw new Error(`${path}: expected conformanceMeta.githubUrl to be string`);
  }
  if (typeof json.conformanceMeta.maximumEdition != "string") {
    throw new Error(
      `${path}: expected conformanceMeta.maximumEdition to be string`,
    );
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
    baseline,
    githubUrl: json.conformanceMeta.githubUrl,
    maximumEdition: json.conformanceMeta.maximumEdition,
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
  const required = lines.filter((line) => line.startsWith("Required.")).length;
  const recommended = lines.filter((line) =>
    line.startsWith("Recommended."),
  ).length;
  if (required + recommended !== lines.length) {
    throw new Error(
      `error parsing failure list: required (${required}) + recommended (${recommended}) does not match total (${lines.length}) lines`,
    );
  }
  return { lines, required, recommended };
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
