#!/usr/bin/env bash

set -euo pipefail

PROTO_FILE=gen/protos_pb.js

node_modules/.bin/pbjs -t static-module -w wrapper.js --es6 -o $PROTO_FILE proto/conformance/conformance.proto proto/src/google/protobuf/any.proto proto/google/protobuf/field_mask.proto proto/src/google/protobuf/timestamp.proto proto/src/google/protobuf/duration.proto proto/src/google/protobuf/struct.proto proto/google/protobuf/wrappers.proto proto/google/protobuf/test_messages_proto3.proto proto/google/protobuf/test_messages_proto2.proto

node_modules/.bin/pbts -o gen/protos_pb.d.ts $PROTO_FILE
