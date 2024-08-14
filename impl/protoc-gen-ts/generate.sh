#!/usr/bin/env bash
set -euo pipefail

# protoc-gen-ts v0.8.x crashes when compiling test_messages_proto2.proto
buf generate --exclude-path ../../proto/google/protobuf/test_messages_proto2.proto
