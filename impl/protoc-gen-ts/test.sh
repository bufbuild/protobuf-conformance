#!/usr/bin/env bash
set -euo pipefail

# install dependencies, generate code, and type check
npm ci
rm -rf gen/*

# protoc-gen-ts v0.8.5 crashes when compiling test_messages_proto2.proto
npx buf generate ../../proto --exclude-path ../../proto/google/protobuf/test_messages_proto2.proto

# protoc-gen-ts v0.8.5 appears to generate invalid code for repeated enum fields
npx tsc --noEmit || true

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
