# ts-proto

[ts-proto](https://github.com/stephenh/ts-proto)

## Caveats

The `ts-proto` library fails generating the `test_messages_proto2.proto` file in the Conformance Tests due to its
usage of [group fields](https://protobuf.dev/reference/protobuf/proto2-spec/#group_field).  As a result, this file is
intentionally skipped during the generation process, causing all `proto2` tests to fail.
  
In addition, `ts-proto` generates duplicate case statements for the `AliasedEnum` message in the
`test_messages_proto3.proto` file. This is because it uses an `allow_alias` option, which permits duplicate values.
The generated code cannot compile with `tsc`. To circumvent this, the test runner is built with `esbuild` ahead of 
time with a flag set to silence the warnings.
