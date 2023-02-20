#!/usr/bin/env bash
set -euo pipefail

# install dependencies
npm ci

# protoc-gen-js is not available via NPM. we download it from the GitHub
# release page https://github.com/protocolbuffers/protobuf-javascript/releases
version="3.21.2"
platform=""
case $(uname -s) in
  Darwin) platform="osx";;
  Linux)  platform="linux";;
  *) >&2 echo "unknown OS - don't known how to get protoc-gen-js"; exit 1
esac
case $(uname -m) in
  arm64)
      platform="${platform}-aarch_64"
      ;;
  *)
    >&2 echo "unknown architecture - don't known how to get protoc-gen-js"
    exit 1
esac
curl -sSL \
  "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v${version}/protobuf-javascript-${version}-${platform}.tar.gz" \
  | tar xJ -C . --strip-components 1

# generate code
rm -rf gen/*
npx buf generate ../../proto

# finally, run the tests
conformance_test_runner --enforce_recommended \
  --failure_list failing_tests.txt \
  --text_format_failure_list failing_tests_text_format.txt \
  --output_dir . runner.js
