#!/usr/bin/env bash
set -euo pipefail

# install dependencies
npm ci

# generate code
rm -rf gen/
npx buf generate ../../proto

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
