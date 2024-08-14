#!/usr/bin/env bash
set -euo pipefail

# clean src/gen
rm -rf gen/*

# protoc-gen-js is not available via NPM. we download it from the GitHub
# release page https://github.com/protocolbuffers/protobuf-javascript/releases
version="3.21.2"
platform=""
case $(uname -s) in
  Darwin) platform="osx";;
  Linux)  platform="linux";;
  *) >&2 echo "unknown OS $(uname -s) - don't know how to get protoc-gen-js"; exit 1
esac
case $(uname -m) in
  arm64)
      platform="${platform}-aarch_64"
      ;;
  x86_64)
      platform="${platform}-x86_64"
      ;;
  *)
    >&2 echo "unknown architecture $(uname -m) - don't know how to get protoc-gen-js"
    exit 1
esac

curl -sSL \
  "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v${version}/protobuf-javascript-${version}-${platform}.tar.gz" \
  | tar xz -C . --strip-components 1 bin/protoc-gen-js
