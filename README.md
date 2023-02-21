# Protobuf Conformance Tests

A repository which runs the protocol buffers
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various implementations.


## Results

<!--- RESULTS-START -->
| Implementation                          | Language                | Required tests                        | Recommended tests                        | Standard plugin | 
|-----------------------------------------|-------------------------|--------------------------------------:|-----------------------------------------:|----------------:|
| [google-protobuf](impl/google-protobuf) | JavaScript              | 74.1%&nbsp;passing<br>(383&nbsp;failures) | 61.7%&nbsp;passing<br>(207&nbsp;failures) |             yes |
| [Protobuf-ES](impl/protobuf-es)         | TypeScript & JavaScript | 100.0%&nbsp;passing<br>(0&nbsp;failures)     | 99.8%&nbsp;passing<br>(1&nbsp;failures)     |             yes |
| [protobuf.js](impl/protobuf.js)         | JavaScript & TypeScript | 37.6%&nbsp;passing<br>(921&nbsp;failures)     | 13.7%&nbsp;passing<br>(466&nbsp;failures)     |              no |
| [protoc-gen-ts](impl/protoc-gen-ts)     | TypeScript              | 26.8%&nbsp;passing<br>(1081&nbsp;failures)    | 33.1%&nbsp;passing<br>(361&nbsp;failures)    |             yes |
| [ts-proto](impl/ts-proto)               | TypeScript              | 42.9%&nbsp;passing<br>(843&nbsp;failures)        | 3.7%&nbsp;passing<br>(520&nbsp;failures)        |             yes |
<!--- RESULTS-END -->

Note: None of the libraries tested implement the text format so the results for those test runs are not shown.


## Running the tests

To run the conformance tests, run `make` from the repo root.

