# JavaScript Protobuf Conformance tests

This package implements JavaScript testees for the protocol buffers [conformance test 
suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) and runs the tests against Protobuf-ES as well
as other JavaScript Protobuf libraries for comparison. 

The following libraries are tested:

- [Protobuf-ES](https://github.com/bufbuild/protobuf-es)
- [protobuf.js](https://github.com/protobufjs/protobuf.js)
- [Google Protocol Buffers](https://github.com/protocolbuffers/protobuf-javascript)

To run the JavaScript conformance tests, run `make` from the repo root.

## Expected Test Failures

The conformance test suite allows test runners to specify a list of tests that are expected to fail.  The tests denoted
in this list are not included as part of the final set of failures.  A note on how these expected tests are compiled 
per library:

### Protobuf-ES

In environments where `BigInt` is not supported, Protobuf-ES will fallback to a string representation.  Consequently,
we run the conformance tests against environments with and without support for `BigInt`.  To cover the code path for 
our string-based fallback for 64-bit integers, the conformance tests should be run with the environment variable 
`BUF_BIGINT_DISABLE=1`, which disables our BigInt feature detection. 

As a result of the above, Protobuf-ES specifies two different sets of expected test failures depending on whether
it is running in an environment with `BigInt` support.  If it is not, Protobuf-ES lists approximately 9 `BigInt` 
related tests that are expected to fail.  

However, in environments where there _is_ `BigInt` support, Protobuf-ES 
only expects one test failure, which is related to proto2 extensions.  This is because extensions are not currently 
supported.

Finally, Protobuf-ES also specifies a list of expected failures related to the Protobuf Text Format spec as that is not
supported.  These TextFormat tests are run as a separate run by the conformance runner, so this is why each invocation of the runner
seems to run twice.

### protobuf.js

For protobuf.js conformance tests, we use the same expected failure lists as Protobuf-ES does in its list for
environments without `BigInt` support.  While protobuf.js does claim to support `BigInt` 
by [simply installing](https://github.com/protobufjs/protobuf.js#compatibility) the `long` library alongside 
protobuf.js, it still does not seem to pass the `BigInt` related tests.  However, in the interest of fairness, we
mark these as expected to fail as Protobuf-ES does.

We also mark the same TextFormat tests as expected failures.

### Google Protocol Buffers

For Google Protocol Buffers tests, we use the same list of expected failures for Protobuf-ES.


## Results


| library     | failures<br>(required/recommended)  | total  | text format failures<br>(required/recommended) | total     
|-------------|------------------------------------:|-------:|---------------------------------------:|--------------:|
Protobuf-ES (BigInt) | (0 / 1) | [1](protobuf-es/failing_tests_with_bigint.txt) | 88 / 24 | [24](protobuf-es/failing_tests_text_format.txt)
Protobuf-ES (Without BigInt) | (9 / 1) | [10](protobuf-es/failing_tests_without_bigint.txt) | 88 / 24 | [24](protobuf-es/failing_tests_text_format.txt)
protobuf.js | (921 / 466) | [1387](protobuf.js/failing_tests_list.txt) | 88 / 24 | [24](protobuf.js/failing_tests_text_format.txt)
google-protobuf | (383 / 207) | [590](google-protobuf/failing_tests_list.txt) | 88 / 24 | [24](google-protobuf/failing_tests_text_format.txt)
