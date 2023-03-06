# Protobuf Conformance Tests

A repository which runs the protocol buffers
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various implementations.

## Implementations

The current implementations being tested are:

* Protobuf-ES:  https://github.com/bufbuild/protobuf-es
* google-protobuf:  https://github.com/protocolbuffers/protobuf-javascript
* protobuf.js:  https://github.com/protobufjs/protobuf.js/
* protoc-gen-ts:  https://github.com/thesayyn/protoc-gen-ts
* ts-proto:  https://github.com/stephenh/ts-proto

## Results

<!--- RESULTS-START -->
| Implementation                          | JavaScript         | TypeScript         | Standard<br>Plugin | Required tests                        | Recommended tests                        |
|-----------------------------------------|:------------------:|:------------------:|:------------------:|:-------------------------------------:|:----------------------------------------:|
| [Protobuf-ES](impl/protobuf-es)         | :white_check_mark: | :white_check_mark: | :white_check_mark: | ![](https://progress-bar.dev/100)<br/>100.0%&nbsp;passing<br>(0&nbsp;failures)     | ![](https://progress-bar.dev/99)<br/>99.8%&nbsp;passing<br>(1&nbsp;failures)     |
| [google-protobuf](impl/google-protobuf) | :white_check_mark: | :x:                | :white_check_mark: | ![](https://progress-bar.dev/73)<br/>73.9%&nbsp;passing<br>(387&nbsp;failures) | ![](https://progress-bar.dev/60)<br/>60.6%&nbsp;passing<br>(216&nbsp;failures) |
| [protobuf.js](impl/protobuf.js)         | :white_check_mark: | :white_check_mark: | :x:                | ![](https://progress-bar.dev/37)<br/>37.3%&nbsp;passing<br>(928&nbsp;failures)     | ![](https://progress-bar.dev/14)<br/>14.1%&nbsp;passing<br>(471&nbsp;failures)     |
| [protoc-gen-ts](impl/protoc-gen-ts)     | :x:                | :white_check_mark: | :white_check_mark: | ![](https://progress-bar.dev/26)<br/>26.7%&nbsp;passing<br>(1085&nbsp;failures)    | ![](https://progress-bar.dev/32)<br/>32.7%&nbsp;passing<br>(369&nbsp;failures)    |
| [ts-proto](impl/ts-proto)               | :x:                | :white_check_mark: | :white_check_mark: | ![](https://progress-bar.dev/42)<br/>42.6%&nbsp;passing<br>(850&nbsp;failures)        | ![](https://progress-bar.dev/3)<br/>3.6%&nbsp;passing<br>(528&nbsp;failures)        |
<!--- RESULTS-END -->

Note: None of the libraries tested implement the text format so the results for those test runs are not shown.


## Running the tests

First, verify that Bazel is installed. Using [Bazelisk](https://github.com/bazelbuild/bazelisk) is recommended.

To run the conformance tests, run `make` from the repo root.

## Troubleshooting

If you are on Apple M1 and see the error `symbol not found in flat namespace (_CFRelease)`
when building `protoc`, you may need to install XCode from the Apple App Store.

