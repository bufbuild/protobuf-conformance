# Protobuf Conformance Tests

A repository which runs the protocol buffers
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various implementations.

## Implementations

The current implementations being tested are:

* Protobuf-ES:  https://github.com/bufbuild/protobuf-es
* protobuf-ts:  https://github.com/timostamm/protobuf-ts
* google-protobuf:  https://github.com/protocolbuffers/protobuf-javascript
* protobuf.js:  https://github.com/protobufjs/protobuf.js/
* protoc-gen-ts:  https://github.com/thesayyn/protoc-gen-ts
* ts-proto:  https://github.com/stephenh/ts-proto
* protoscript:  https://github.com/TateThurston/protoscript

## Results

<!--- RESULTS-START -->
| Implementation                          | JavaScript         | TypeScript         | Standard<br>Plugin | Required tests                        | Recommended tests                        |
|-----------------------------------------|:------------------:|:------------------:|:------------------:|:-------------------------------------:|:----------------------------------------:|
| [Protobuf-ES](impl/protobuf-es)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/100?width=100&suffix=%25+passing" height="25" width="125" /></sub><br><sup>(0&nbsp;failures)<sub>     | <sub><img src="https://progress-bar.dev/99?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(1&nbsp;failures)<sub>     |
| [protobuf-ts](impl/protobuf-ts)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/100?width=100&suffix=%25+passing" height="25" width="125" /></sub><br><sup>(0&nbsp;failures)<sub>     | <sub><img src="https://progress-bar.dev/99?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(1&nbsp;failures)<sub>     |
| [protoscript](impl/protoscript)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/39?width=100&suffix=.9%25+passing" height="25" width="125" /></sub><br><sup>(890&nbsp;failures)<sub>    | <sub><img src="https://progress-bar.dev/10?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(489&nbsp;failures)<sub>    |
| [google-protobuf](impl/google-protobuf) | :heavy_check_mark: | :x:                | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/73?width=100&suffix=.9%25+passing" height="25" width="125" /></sub><br><sup>(387&nbsp;failures)<sub> | <sub><img src="https://progress-bar.dev/60?width=100&suffix=.6%25+passing" height="25" width="125" /></sub><br><sup>(216&nbsp;failures)<sub> |
| [protobuf.js](impl/protobuf.js)         | :heavy_check_mark: | :heavy_check_mark: | :x:                | <sub><img src="https://progress-bar.dev/74?width=100&suffix=.7%25+passing" height="25" width="125" /></sub><br><sup>(375&nbsp;failures)<sub>     | <sub><img src="https://progress-bar.dev/73?width=100&suffix=.7%25+passing" height="25" width="125" /></sub><br><sup>(144&nbsp;failures)<sub>     |
| [protoc-gen-ts](impl/protoc-gen-ts)     | :x:                | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/26?width=100&suffix=.7%25+passing" height="25" width="125" /></sub><br><sup>(1085&nbsp;failures)<sub>    | <sub><img src="https://progress-bar.dev/32?width=100&suffix=.7%25+passing" height="25" width="125" /></sub><br><sup>(369&nbsp;failures)<sub>    |
| [ts-proto](impl/ts-proto)               | :x:                | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/67?width=100&suffix=.7%25+passing" height="25" width="125" /></sub><br><sup>(478&nbsp;failures)<sub>        | <sub><img src="https://progress-bar.dev/5?width=100&suffix=.29%25+passing" height="25" width="125" /></sub><br><sup>(519&nbsp;failures)<sub>        |
<!--- RESULTS-END -->

Note: None of the libraries tested implement the text format so the results for those test runs are not shown.


## Running the tests

First, verify that Bazel is installed. Using [Bazelisk](https://github.com/bazelbuild/bazelisk) is recommended.

To run the conformance tests, run `make` from the repo root.

## Troubleshooting

If you are on Apple M1 and see the error `symbol not found in flat namespace (_CFRelease)`
when building `protoc`, you may need to install XCode from the Apple App Store.

