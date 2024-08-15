#!/usr/bin/env bash
set -euo pipefail

# protoscript cannot generate code for editions
buf generate \
  --exclude-path ../../proto/google/protobuf/test_messages_edition2023.proto \
  --exclude-path ../../proto/google/protobuf/test_messages_proto2_editions.proto \
  --exclude-path ../../proto/google/protobuf/test_messages_proto3_editions.proto
