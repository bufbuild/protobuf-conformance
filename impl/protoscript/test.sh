#!/usr/bin/env bash
set -euo pipefail

# install dependencies, generate code, and type check
# pushd vendor/protoscript && npm run package:build && popd
npm ci

rm -rf gen/

# protoscript 0.0.14 crashes when compiling test_messages_proto2.proto
npx buf generate ../../proto --exclude-path ../../proto/google/protobuf/test_messages_proto2.proto

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
