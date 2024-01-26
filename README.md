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
| [Protobuf-ES](impl/protobuf-es)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/99?width=100&suffix=.9%25+passing" height="25" width="125" /></sub><br><sup>(2&nbsp;failures)<sub>     | <sub><img src="https://progress-bar.dev/100?width=100&suffix=%25+passing" height="25" width="125" /></sub><br><sup>(0&nbsp;failures)<sub>     |
| [protobuf-ts](impl/protobuf-ts)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/99?width=100&suffix=.9%25+passing" height="25" width="125" /></sub><br><sup>(2&nbsp;failures)<sub>     | <sub><img src="https://progress-bar.dev/99?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(1&nbsp;failures)<sub>     |
| [protoscript](impl/protoscript)         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/44?width=100&suffix=.7%25+passing" height="25" width="125" /></sub><br><sup>(1084&nbsp;failures)<sub>    | <sub><img src="https://progress-bar.dev/18?width=100&suffix=%25+passing" height="25" width="125" /></sub><br><sup>(529&nbsp;failures)<sub>    |
| [google-protobuf](impl/google-protobuf) | :heavy_check_mark: | :x:                | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/70?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(572&nbsp;failures)<sub> | <sub><img src="https://progress-bar.dev/53?width=100&suffix=.5%25+passing" height="25" width="125" /></sub><br><sup>(300&nbsp;failures)<sub> |
| [protobuf.js](impl/protobuf.js)         | :heavy_check_mark: | :heavy_check_mark: | :x:                | <sub><img src="https://progress-bar.dev/73?width=100&suffix=.3%25+passing" height="25" width="125" /></sub><br><sup>(523&nbsp;failures)<sub>     | <sub><img src="https://progress-bar.dev/73?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(169&nbsp;failures)<sub>     |
| [protoc-gen-ts](impl/protoc-gen-ts)     | :x:                | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/20?width=100&suffix=.2%25+passing" height="25" width="125" /></sub><br><sup>(1564&nbsp;failures)<sub>    | <sub><img src="https://progress-bar.dev/27?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(466&nbsp;failures)<sub>    |
| [ts-proto](impl/ts-proto)               | :x:                | :heavy_check_mark: | :heavy_check_mark: | <sub><img src="https://progress-bar.dev/62?width=100&suffix=.8%25+passing" height="25" width="125" /></sub><br><sup>(730&nbsp;failures)<sub>        | <sub><img src="https://progress-bar.dev/5?width=100&suffix=.89%25+passing" height="25" width="125" /></sub><br><sup>(607&nbsp;failures)<sub>        |
<!--- RESULTS-END -->

Note: None of the libraries tested implement the text format so the results for those test runs are not shown.


## Running the tests

To run the conformance tests, run `make` from the repo root.

Note that only Linux and OSX operating systems are supported.
