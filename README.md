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

- [Google Protocol Buffers](https://github.com/protocolbuffers/protobuf-javascript)
- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)

#### A note on Protobuf-ES

In environments where `BigInt` is not supported, Protobuf-ES will fallback to a string representation. Consequently,
we run the conformance tests against environments with and without support for `BigInt`. To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests are run with the environment variable 
`BUF_BIGINT_DISABLE=1`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with `BigInt` support.  

## Results

The below table lists the total failures for each library, including individual totals for the `Required` and
`Recommended` failures. Clicking the name of the library will show the test runner implementation for that library.

Note that none of the libraries tested implement the text format so the results for those test runs are not shown.

### JavaScript

| library     | failures<br>(required/recommended)  | total     
|-------------|------------------------------------:|-------:|
[google-protobuf](javascript/google-protobuf/conformance.cjs) | 383 / 207 | [590](javascript/google-protobuf/failing_tests_list.txt)
[Protobuf-ES (BigInt)](javascript/protobuf-es/conformance.ts) | 0 / 1 | [1](javascript/protobuf-es/failing_tests_with_bigint.txt)
[Protobuf-ES (Without BigInt)](javascript/protobuf-es/conformance.ts) | 9 / 1 | [10](javascript/protobuf-es/failing_tests_without_bigint.txt)
[protobuf.js](javascript/protobuf.js/conformance.ts) | 921 / 466 | [1387](javascript/protobuf.js/failing_tests_list.txt)
