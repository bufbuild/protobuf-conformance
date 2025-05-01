#!/usr/bin/env bash
set -euo pipefail

# protobuf.js does not provide a standard protobuf plugin
# protobuf.js fails to compile test_messages_proto2.proto, which includes group extensions since v27.0

node_modules/.bin/pbjs -t static-module -w wrapper.js --es6 -o gen/protos_pb.js \
  ../../proto/conformance/conformance.proto \
  ../../proto/google/protobuf/test_messages_proto3.proto \
  ../../proto/google/protobuf/test_messages_edition2023.proto \
  ../../proto/google/protobuf/test_messages_proto2_editions.proto \
  ../../proto/google/protobuf/test_messages_proto3_editions.proto
node_modules/.bin/pbts -o gen/protos_pb.d.ts gen/protos_pb.js
