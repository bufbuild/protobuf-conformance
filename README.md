# protobuf-conformance
A repository running the Protobuf conformance tests against various languages and their respective Protobuf libraries.

Conformance tests are classified based on whether they are `Required` or `Recommended`. To strictly conform to the
protobuf spec, _all_ tests marked `Required` and `Recommended` must pass.  To enforce this, the tests are run with 
the flag `--enforce_recommended` as specified by the conformance test runner library.

The test suites are divided by language, with various libraries inside each language directory.

### [JavaScript](javascript)


