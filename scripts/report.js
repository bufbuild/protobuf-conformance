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

import { injectMarkdown, listImpl } from "./util.js";
import { writeFileSync, rmSync, mkdirSync, existsSync } from "node:fs";
import { join as joinPath } from "node:path";

const readmePath = new URL("../README.md", import.meta.url).pathname;
const imgPath = new URL("../.github/genimg", import.meta.url).pathname;
const results = getTestResults();
generateImages(imgPath, results);
injectMarkdown(readmePath, "LIST", generateImplList(results));
injectMarkdown(readmePath, "TABLE", generateMarkdownTable(results));

/**
 * @param {TestResults} results
 * @return {string}
 */
function generateImplList(results) {
  const lines = results.impls.map(
    (i) => `* ${i.conformanceMeta.name}: ${i.conformanceMeta.githubUrl}`,
  );
  return "\n" + lines.join("\n") + "\n\n";
}

/**
 * @param {TestResults} results
 * @return {string}
 */
function generateMarkdownTable(results) {
  const emojYes = ":heavy_check_mark:";
  const emojNo = ":x:";
  const lines = [
    "| Implementation | JavaScript and<br>TypeScript | Standard<br>Plugin | Editions | Required tests | Recommended tests |",
    "|---|:---:|:---:|:---:|:---:|:---:|",
  ];
  for (const impl of results.impls) {
    const failures = impl.getFailures();
    const statsRequired = `<sub><img src=".github/genimg/${impl.conformanceMeta.name}-required.svg" height="25" width="125" /></sub><br><sup>(${failures.required}&nbsp;failures)<sub>`;
    const statsRecommend = `<sub><img src=".github/genimg/${impl.conformanceMeta.name}-recommended.svg" height="25" width="125" /></sub><br><sup>(${failures.recommended}&nbsp;failures)<sub>`;
    const meta = impl.conformanceMeta;
    const link = `[${meta.name}](impl/${impl.path.split("/").pop()})`;
    lines.push(
      `| ${link} | ${meta.javascript && meta.typescript ? emojYes : emojNo} | ${meta.standardPlugin ? emojYes : emojNo} | ${meta.editions ? emojYes : emojNo} | ${statsRequired} | ${statsRecommend} |`,
    );
  }
  return "\n" + lines.join("\n") + "\n\n";
}

/**
 * @param {string} dir
 * @param {TestResults} results
 */
function generateImages(dir, results) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true });
  }
  mkdirSync(dir);
  for (const impl of results.impls) {
    const failures = impl.getFailures();
    const total = results.baseline.getFailures();
    {
      const passed = total.required - failures.required;
      const percentage = (passed / total.required) * 100;
      const svg = generateProgressBarSvg(percentage);
      writeFileSync(
        joinPath(imgPath, `${impl.conformanceMeta.name}-required.svg`),
        svg,
      );
    }
    {
      const passed = total.recommended - failures.recommended;
      const percentage = (passed / total.recommended) * 100;
      const svg = generateProgressBarSvg(percentage);
      writeFileSync(
        joinPath(imgPath, `${impl.conformanceMeta.name}-recommended.svg`),
        svg,
      );
    }
  }
}

/**
 * @param {number} percentage
 */
function generateProgressBarSvg(percentage) {
  const percentageFormatted = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(percentage);
  let color = "#d9534f"; // red
  if (percentage > 66) {
    color = "#5cb85c"; // green
  } else if (percentage > 33) {
    color = "#f0ad4e"; // orange
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="100" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <linearGradient id="a" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <rect rx="4" x="0" width="100" height="20" fill="#428bca"/>
  <rect rx="4" x="0" width="100" height="20" fill="#555" />
  <rect rx="4" x="0" width="${Math.round(percentage)}" height="20" fill="${color}" />
  <rect rx="4" width="100" height="20" fill="url(#a)" />
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="50.0" y="15" fill="#010101" fill-opacity=".3">
      ${percentageFormatted}% passing
    </text>
    <text x="50.0" y="14">
      ${percentageFormatted}% passing
    </text>
  </g>
</svg>`;
}

/**
 * @typedef TestResults
 * @property {import("./util.js").Impl} baseline
 * @property {import("./util.js").Impl[]} impls
 */

/**
 * Implementations are sorted by conformance:
 * - Highest count of required conformance tests passed first
 * - If tied, consider recommended conformance tests
 * - If tied, score features (support for editions, TypeScript and JavaScript, standard plugin)
 *
 * @return {TestResults}
 */
function getTestResults() {
  const all = listImpl();
  const baseline = all.find((i) => i.baseline);
  if (!baseline) {
    throw new Error("missing baseline");
  }
  const impls = all
    .filter((i) => !i.baseline)
    .sort((a, b) => {
      if (a.getFailures().required > b.getFailures().required) {
        return 1;
      }
      if (a.getFailures().required < b.getFailures().required) {
        return -1;
      }
      if (a.getFailures().recommended > b.getFailures().recommended) {
        return 1;
      }
      if (a.getFailures().recommended < b.getFailures().recommended) {
        return -1;
      }
      if (scoreFeatures(a) < scoreFeatures(b)) {
        return -1;
      }
      if (scoreFeatures(a) > scoreFeatures(b)) {
        return 1;
      }
      return a.conformanceMeta.name - b.conformanceMeta.name;
    });
  return {
    baseline,
    impls,
  };
}

/**
 * @param {import("./util.js").Impl} impl
 */
function scoreFeatures(impl) {
  return [
    impl.conformanceMeta.editions,
    impl.conformanceMeta.standardPlugin,
    impl.conformanceMeta.typescript,
    impl.conformanceMeta.javascript,
  ].filter((f) => f === true).length;
}
