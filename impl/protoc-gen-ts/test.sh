#!/usr/bin/env bash
set -euo pipefail

# install dependencies, generate code, and type check
npm ci
rm -rf gen/*

# protoc-gen-ts v0.8.x crashes when compiling test_messages_proto2.proto
npx buf generate ../../proto --exclude-path ../../proto/google/protobuf/test_messages_proto2.proto

# protoc-gen-ts v0.8.6 generates code with type errors - we ignore them to run the conformance suite
#gen/conformance/conformance.ts:86:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/conformance/conformance.ts:380:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/conformance/conformance.ts:755:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/conformance/conformance.ts:822:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/any.ts:94:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/duration.ts:94:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/field_mask.ts:71:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/struct.ts:88:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/struct.ts:337:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/struct.ts:404:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/test_messages_proto3.ts:1888:18 - error TS1268: An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
#gen/google/protobuf/test_messages_proto3.ts:2536:22 - error TS1268: An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
#gen/google/protobuf/test_messages_proto3.ts:3932:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/test_messages_proto3.ts:4040:20 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/test_messages_proto3.ts:4108:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/test_messages_proto3.ts:4148:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/test_messages_proto3.ts:4188:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/timestamp.ts:94:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:71:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:138:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:205:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:272:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:339:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:406:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:473:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:540:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
#gen/google/protobuf/wrappers.ts:607:16 - error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'Message'.
npx tsc --noEmit || true

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
