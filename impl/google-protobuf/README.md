# google-protobuf

[google-protobuf](https://github.com/protocolbuffers/protobuf-javascript)

The google-protobuf test runner was mostly copied directly from the
[google-protobuf repository](https://github.com/protocolbuffers/protobuf-javascript/tree/main/experimental/runtime/kernel/conformance).

A few modifications were made to the file to enable it to run in this environment. Those changes are listed in the
[file header](./runner.js).

## Caveats

- Does not support ESM.
- Requires community-maintained typings and separate code generators for TypeScript.
