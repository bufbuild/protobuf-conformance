# JavaScript Protobuf Conformance tests

This package implements JavaScript testees for the protocol buffers [conformance test 
suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) and runs the tests against Protobuf-ES as well
as other JavaScript Protobuf libraries for comparison. 

The following libraries are tested:

- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)
- [Google Protocol Buffers](https://github.com/protocolbuffers/protobuf-javascript)

To run the JavaScript conformance tests, run `make` from the repo root.

## Results Summary

Conformance tests are classified based on whether they are `Required` or `Recommended`. To strictly conform to the
protobuf spec, _all_ tests marked `Required` and `Recommended` must pass.  To enforce this, the tests are run with 
the flag `--enforce_recommended` as specified by the conformance test runner library.

The below table lists the total failures for each library, including individual totals for the `Required` and
`Recommended` failures.

### A note on Protobuf-ES

In environments where `BigInt` is not supported, Protobuf-ES will fallback to a string representation.  Consequently,
we run the conformance tests against environments with and without support for `BigInt`.  To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests are run with the environment variable 
`BUF_BIGINT_DISABLE=1`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with `BigInt` support.  

## Results


| library     | failures<br>(required/recommended)  | total  | text format failures<br>(required/recommended) | total     
|-------------|------------------------------------:|-------:|---------------------------------------:|--------------:|
Protobuf-ES (BigInt) | 0 / 1 | [1](protobuf-es/failing_tests_with_bigint.txt) | 88 / 24 | [112](protobuf-es/failing_tests_text_format.txt)
Protobuf-ES (Without BigInt) | 9 / 1 | [10](protobuf-es/failing_tests_without_bigint.txt) | 88 / 24 | [112](protobuf-es/failing_tests_text_format.txt)
protobuf.js | 921 / 466 | [1387](protobuf.js/failing_tests_list.txt) | 88 / 24 | [112](protobuf.js/failing_tests_text_format.txt)
google-protobuf | 383 / 207 | [590](google-protobuf/failing_tests_list.txt) | 88 / 24 | [112](google-protobuf/failing_tests_text_format.txt)
