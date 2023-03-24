# Protobuf-ES

[Protobuf-ES](https://github.com/bufbuild/protobuf-es)


## Caveats

- Proto2 extensions are not supported.
- `BigInt` is required to pass all tests. In environments where `BigInt` is not supported, Protobuf-ES will fall back
  to a string representation that can not cover some edge cases.
