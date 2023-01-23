# Protobuf Conformance tests

This package implements a testee for the protocol buffers [conformance test 
suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) and runs the tests against Protobuf-ES as well
as ProtobufJS for comparison.  The conformance tests run on code transpiled to ECMAScript modules.

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

### ProtobufJS

For ProtobufJS conformance tests, we use the same expected failure lists as Protobuf-ES does in its list for
environments without `BigInt` support.  

--- Related to above:
The purpose of the failure list is to be able to run the conformance tests with a success status code, even 
when there are known problems. This is used to catch regressions in an implementation. We can use the failure
lists to show the list of failures.
We should not run protobuf.js with the failure list of protobuf-es. 
protobuf.js should have its own failure list.
Looks like javascript/protobufjs/failing_tests_list.txt should be deleted.
---


While ProtobufJS does claim to support `BigInt` 
by [simply installing](https://github.com/protobufjs/protobuf.js#compatibility) the `long` library alongside 
ProtobufJS, it still does not seem to pass the `BigInt` related tests.  However, in the interest of fairness, we
mark these as expected to fail as Protobuf-ES does.

--- Related to above:
I don't believe protobuf.js claims to support `BigInt`. They do support 64-bit integral values. Yes, we should 
have long.js installed in the tests. 
---


We also mark the same TextFormat tests as expected failures.

## Results

Looks like protobuf-es with BigInt is missing the one recommended failure it has. And without BigInt, it has 
9 required failures. I don't think we can just ignore them here. We could just leave out conformance tests without
BigInt support though.

| library      | recommended failures             | required failures               | total         |
|---------------------|------------------------:|-----------------------:|-------------------:|
Protobuf-ES (BigInt) | 0 | 0 | 0
Protobuf-ES (Without BigInt) | 0 | 0 | 0
ProtobufJS | 465 | 912 | 1377
