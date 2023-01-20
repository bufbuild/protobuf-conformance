#!/usr/bin/env bash
set -euo pipefail

# install dependencies
npm ci

# generate code
rm -rf gen/*
OUT_FILE=gen/protos_pb.js
PROTO_DIR=../../proto
node_modules/.bin/pbjs -t static-module -w wrapper.js --es6 -o $OUT_FILE \
  $PROTO_DIR/conformance/conformance.proto \
  $PROTO_DIR/google/protobuf/test_messages_proto3.proto \
  $PROTO_DIR/google/protobuf/test_messages_proto2.proto
node_modules/.bin/pbts -o gen/protos_pb.d.ts $OUT_FILE

# type check
npx tsc --noEmit

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.ts
