#!/usr/bin/env bash
set -euo pipefail

# install dependencies
npm ci

# generate code
rm -rf gen/*
npx buf generate ../../proto

# ts-proto v1.157.0 generates code with type errors - we ignore them to run the conformance suite
#gen/google/protobuf/test_messages_proto2.ts:2792:19 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'boolean'.
#gen/google/protobuf/test_messages_proto2.ts:3190:25 - error TS2538: Type 'boolean' cannot be used as an index type.
#gen/google/protobuf/test_messages_proto3.ts:2922:19 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'boolean'.
#gen/google/protobuf/test_messages_proto3.ts:3368:25 - error TS2538: Type 'boolean' cannot be used as an index type.
npx tsc --noEmit || true

# we use esbuild to transpile and bundle for Node.js
echo > runner.js "#!/usr/bin/env node"
chmod +x runner.js
# esbuild v0.22.0 introduced a breaking change where packages are now omitted from the bundle by default when targeting node.
# see https://github.com/evanw/esbuild/releases/tag/v0.22.0
# To go back to the previous default behavior, users now need to specify packages=bundle
npx esbuild runner.ts --bundle --platform=node --packages=bundle --format=esm --log-override:duplicate-case=silent >>runner.js

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.js
