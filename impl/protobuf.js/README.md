# protobuf.js

[protobuf.js](https://github.com/protobufjs/protobuf.js)

## Caveats

`protobuf.js` generates a weak type for an interface in the `test_messages_proto2.proto` file, which another class
then implements. However, the implementing class adds its own properties, so the lack of overlap causes TypeScript weak
type detection to fail. Therefore, `skipLibChecks` is set to `true` in the TypeScript config file. See
[this issue](https://github.com/protobufjs/protobuf.js/issues/1559) for more context.

In addition, generated imports are incorrect for `static-module` and `es6` so to generate files, a custom wrapper
is used in accordance with the `pbjs` docs. See [this issue](https://github.com/protobufjs/protobuf.js/issues/1657)
for more details.

`protobuf.js` does not provide a standard code generator plugin. That's why we run the `pbjs` and `pbts` commands to
generate code instead of `buf` or `protoc`.
