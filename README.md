<!--- GENERATED.  DO NOT EDIT.  -->

# Protobuf Conformance Tests

A repository which runs the protocol buffers 
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various languages 
and their respective Protobuf libraries. This is intended to test each libraries conformance to the protobuf spec.

Conformance tests are classified based on whether they are `Required` or `Recommended`. To strictly conform to the
protobuf spec, _all_ tests marked `Required` and `Recommended` must pass.  To enforce this, the tests are run with 
the flag `--enforce_recommended` as specified by the conformance test runner library.

## Running the tests

To run the conformance tests, run `make` from the repo root.

## Languages

The following languages and libraries are tested:

### JavaScript

- [google-protobuf](https://github.com/protocolbuffers/protobuf-javascript)
- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)
- [ts-proto](https://github.com/stephenh/ts-proto)

All JavaScript libraries are run using `tsx` except where noted below.

Items of note related to the testing setup of the above libraries:

#### google-protobuf

The google-protobuf test runner was mostly copied directly from the 
[google-protobuf repository](https://github.com/protocolbuffers/protobuf-javascript/tree/main/experimental/runtime/kernel/conformance). 

A few modifications were made to the file to get it to run in this environment.  Those changes are listed in the
[file header](impl/google-protobuf/runner.ts).

#### Protobuf-ES

In environments where `BigInt` is not supported, Protobuf-ES will fallback to a string representation. Consequently,
we run the conformance tests against environments with and without support for `BigInt`. To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests are run with the environment variable 
`BUF_BIGINT_DISABLE=1`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with `BigInt` support.  

#### protobuf.js

`protobuf.js` generates a weak type for an interface in the `test_messages_proto2.proto` file, which another class
then implements. However, the implementing class adds its own properties, so the lack of overlap causes TypeScript weak
type detection to fail. Therefore, `skipLibChecks` is set to `true` in the TypeScript config file. See 
[this issue](https://github.com/protobufjs/protobuf.js/issues/1559) for more context.

In addition, generated imports are incorrect for `static-module` and `es6` so to generate files, a custom wrapper 
is used in accordance with the `pbjs` docs. See [this issue](https://github.com/protobufjs/protobuf.js/issues/1657)
for more details.


#### ts-proto

The `ts-proto` library fails generating the `test_messages_proto2.proto` file in the Conformance Tests due to its
usage of [group fields](https://protobuf.dev/reference/protobuf/proto2-spec/#group_field).  As a result, this file is
intentionally skipped during the generation process, causing all `proto2` tests to fail.

In addition, `ts-proto` generates duplicate case statements for the `AliasedEnum` message in the 
`test_messages_proto3.proto` file. This is because it uses an `allow_alias` option, which permits duplicate values. 
Because `tsx` uses `esbuild` under the hood, this causes `tsx` to issue warnings.  This, in turn, results in the 
test runner hanging.  To circumvent this, the `ts-proto` suite does not use `tsx`. The files are built with 
`esbuild` ahead of time and the warnings are silenced.


## Results

The below table lists the total failures for each library, including individual totals for the `Required` and
`Recommended` failures. Clicking the name of the library will show the test runner implementation for that library.

Note that none of the libraries tested implement the text format so the results for those test runs are not shown.



### JavaScript

| library     | failures<br>(required/recommended)  | total     
|-------------|------------------------------------:|-------:|
[google-protobuf](impl/google-protobuf/runner.ts) | 383 / 207 | [590](impl/google-protobuf/failing_tests_list.txt)
[Protobuf-ES (BigInt)](impl/protobuf-es/runner.ts) | 0 / 1 | [1](impl/protobuf-es/failing_tests_with_bigint.txt)
[Protobuf-ES (Without BigInt)](impl/protobuf-es/runner.ts) | 9 / 1 | [10](impl/protobuf-es/failing_tests_without_bigint.txt)
[protobuf.js](impl/protobuf.js/runner.ts) | 921 / 466 | [1387](impl/protobuf.js/failing_tests_list.txt)
[ts-proto](impl/ts-proto/runner.ts) | 843 / 520 | [1363](impl/ts-proto/failing_tests_list.txt)
