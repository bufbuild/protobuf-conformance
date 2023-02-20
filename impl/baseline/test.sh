#!/usr/bin/env bash
set -euo pipefail

# install dependencies, generate code, and type check
npm ci
rm -rf gen/*
npx buf generate ../../proto
npx tsc --noEmit

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
