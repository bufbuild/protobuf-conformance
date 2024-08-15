# thesayyn/protoc-gen-ts

[protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts)

## Caveats

- Fails to generate `test_messages_proto2.proto` because of groups, causing _all_ `proto2` tests to fail.
- Cannot generate code for Editions.
- The code generated for `test_messages_proto3.proto` compiles with errors.
- According to the documentation, the plugin option `json_names` helps to conform to the JSON mapping.
  Unfortunately, the conformance runner crashes on invalid input if we set it.
