#!/usr/bin/env bash
set -euo pipefail

# install dependencies
npm ci

# ts-proto v1.139 crashes when compiling test_messages_proto2.proto
rm -rf gen/*
npx buf generate ../../proto --exclude-path ../../proto/google/protobuf/test_messages_proto2.proto

# ts-proto v1.139 generates duplicate case statements for AliasedEnum
npx tsc --noEmit || true

# we use esbuild to transpile and bundle for Node.js, silencing the warnings
echo > runner.js "#!/usr/bin/env node"
chmod +x runner.js
npx esbuild runner.ts --bundle --platform=node --format=esm --log-override:duplicate-case=silent >>runner.js

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.js
