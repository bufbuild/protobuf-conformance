# thesayyn/protoc-gen-ts

[protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts)


## Caveats

The library fails generating the `test_messages_proto2.proto` file in the Conformance Tests due to its
usage of [group fields](https://protobuf.dev/reference/protobuf/proto2-spec/#group_field).  As a result, this file is
intentionally skipped during the generation process, causing all `proto2` tests to fail.

We are relaxing the default TypeScript configuration, but the code generated for `test_messages_proto3.proto` still 
fails to compile without errors.

According to the documentation, the plugin option `json_names` helps to conform to the JSON mapping.
Unfortunately, the conformance runner crashes on invalid input if we set it. 
