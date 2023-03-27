#!/usr/bin/env bash
set -euo pipefail

git diff --relative=impl/protoscript/vendor/ProtoScript-0.0.14/ > vendor/ProtoScript-0.0.14.patch
