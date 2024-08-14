#!/usr/bin/env bash
set -euo pipefail

# protoc-gen-ts v0.8.6 generates code with type errors - we ignore them to run the conformance suite
tsc --noEmit || true
