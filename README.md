# Protobuf Conformance Tests

A repository which runs the protocol buffers
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various implementations.


## Results

<!--- RESULTS-START -->
| Implementation                          | Language                | Required tests                        | Recommended tests                        | Standard plugin | 
|-----------------------------------------|-------------------------|--------------------------------------:|-----------------------------------------:|----------------:|
| [google-protobuf](impl/google-protobuf) | JavaScript              | 74%&nbsp;passing<br>(383&nbsp;failures) | 62%&nbsp;passing<br>(207&nbsp;failures) |             yes |
| [Protobuf-ES](impl/protobuf-es)         | TypeScript & JavaScript | 100%&nbsp;passing<br>(0&nbsp;failures)     | 100%&nbsp;passing<br>(1&nbsp;failures)     |             yes |
| [protobuf.js](impl/protobuf.js)         | JavaScript & TypeScript | 38%&nbsp;passing<br>(921&nbsp;failures)     | 14%&nbsp;passing<br>(466&nbsp;failures)     |              no |
| [protoc-gen-ts](impl/protoc-gen-ts)     | TypeScript              | 27%&nbsp;passing<br>(1081&nbsp;failures)    | 33%&nbsp;passing<br>(361&nbsp;failures)    |             yes |
| [ts-proto](impl/ts-proto)               | TypeScript              | 43%&nbsp;passing<br>(843&nbsp;failures)        | 4%&nbsp;passing<br>(520&nbsp;failures)        |             yes |
<!--- RESULTS-END -->

Note: None of the libraries tested implement the text format so the results for those test runs are not shown.


## Running the tests

To run the conformance tests, run `make` from the repo root.

