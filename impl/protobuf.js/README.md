# protobuf.js

[protobuf.js](https://github.com/protobufjs/protobuf.js)

## Caveats

- Fails to generate `test_messages_proto2.proto` because of extensions with groups, causing _all_ `proto2` tests to fail.
- Cannot generate code for Editions.
- Does not provide a standard code generator plugin. That's why we run the `pbjs` and `pbts` commands to generate code
  instead of `buf` or `protoc`.
- TypeScript must be configured with `skipLibChecks: true` because of a mismatch between generated interface and
  generated class, see [this issue](https://github.com/protobufjs/protobuf.js/issues/1559) for more context.
- Generated imports are incorrect for `static-module` and `es6`. A custom wrapper is used in accordance with the `pbjs`
  docs. See [this issue](https://github.com/protobufjs/protobuf.js/issues/1657) for more details.
