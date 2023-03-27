#!/usr/bin/env bash
set -euo pipefail

# patch and install dependencies
curl -sL https://github.com/tatethurston/ProtoScript/archive/refs/tags/v0.0.14.tar.gz | tar -xz -C vendor
patch -d vendor/ProtoScript-0.0.14 < vendor/ProtoScript-0.0.14.patch
pushd vendor/ProtoScript-0.0.14 && npm run package:build --ignore-scripts && popd
npm ci

# generate code
rm -rf gen/
npx buf generate ../../proto

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
