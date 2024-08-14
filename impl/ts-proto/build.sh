#!/usr/bin/env bash
set -euo pipefail

tsc --noEmit

# we use esbuild to transpile and bundle for Node.js
# esbuild v0.22.0 introduced a breaking change where packages are now omitted from the bundle by default when targeting node.
# see https://github.com/evanw/esbuild/releases/tag/v0.22.0
# To go back to the previous default behavior, users now need to specify packages=bundle
esbuild runner.ts --bundle --platform=node --packages=bundle --format=esm --log-override:duplicate-case=silent --outfile=runner.js
chmod +x runner.js
