#!/usr/bin/env bash
set -euo pipefail

# protobuf.js does not provide a standard protobuf plugin
node_modules/.bin/pbjs -t static-module -w wrapper.js --es6 -o gen/protos_pb.js ../../proto/conformance/conformance.proto ../../proto/google/protobuf/test_messages_proto3.proto ../../proto/google/protobuf/test_messages_proto2.proto
node_modules/.bin/pbts -o gen/protos_pb.d.ts gen/protos_pb.js
