# Protobuf Conformance Tests

A repository which runs the protocol buffers
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various \
implementations.


## Results

<!--- RESULTS-START -->
| Implementation                          | Language                | Required tests                        | Recommended tests                        | Standard plugin | 
|-----------------------------------------|-------------------------|--------------------------------------:|-----------------------------------------:|----------------:|
| [google-protobuf](impl/google-protobuf) | JavaScript              | 1094 / 1477 | 333 / 540 |             yes |
| [Protobuf-ES](impl/protobuf-es)         | TypeScript & JavaScript | 1477 / 1477     | 539 / 540     |             yes |
| [protobuf.js](impl/protobuf.js)         | JavaScript & TypeScript | 556 / 1477     | 74 / 540     |              no |
| [ts-proto](impl/ts-proto)               | TypeScript              | 634 / 1477        | 20 / 540        |             yes |
<!--- RESULTS-END -->

Note: None of the libraries tested implement the text format so the results for those test runs are not shown.


## Running the tests

To run the conformance tests, run `make` from the repo root.

