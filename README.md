# Protobuf Conformance Tests

A repository which runs the protocol buffers
[conformance test suite](https://github.com/protocolbuffers/protobuf/tree/main/conformance) against various implementations.

## Implementations

The current implementations being tested are:

<!-- LIST-START -->

* Protobuf-ES: https://github.com/bufbuild/protobuf-es
* protobuf-ts: https://github.com/timostamm/protobuf-ts
* google-protobuf: https://github.com/protocolbuffers/protobuf-javascript
* ts-proto: https://github.com/stephenh/ts-proto
* protoscript: https://github.com/TateThurston/protoscript
* protoc-gen-ts: https://github.com/thesayyn/protoc-gen-ts
* protobuf.js: https://github.com/protobufjs/protobuf.js

<!-- LIST-END -->

## Results

<!-- TABLE-START -->

| Implementation | JavaScript and<br>TypeScript | Standard<br>Plugin | Editions | Required tests | Recommended tests |
|---|:---:|:---:|:---:|:---:|:---:|
| [Protobuf-ES](impl/protobuf-es) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | <sub><img src=".github/genimg/Protobuf-ES-required.svg" height="25" width="125" /></sub><br><sup>(0&nbsp;failures)<sub> | <sub><img src=".github/genimg/Protobuf-ES-recommended.svg" height="25" width="125" /></sub><br><sup>(0&nbsp;failures)<sub> |
| [protobuf-ts](impl/protobuf-ts) | :heavy_check_mark: | :heavy_check_mark: | :x: | <sub><img src=".github/genimg/protobuf-ts-required.svg" height="25" width="125" /></sub><br><sup>(3&nbsp;failures)<sub> | <sub><img src=".github/genimg/protobuf-ts-recommended.svg" height="25" width="125" /></sub><br><sup>(1&nbsp;failures)<sub> |
| [google-protobuf](impl/google-protobuf) | :x: | :heavy_check_mark: | :x: | <sub><img src=".github/genimg/google-protobuf-required.svg" height="25" width="125" /></sub><br><sup>(646&nbsp;failures)<sub> | <sub><img src=".github/genimg/google-protobuf-recommended.svg" height="25" width="125" /></sub><br><sup>(304&nbsp;failures)<sub> |
| [ts-proto](impl/ts-proto) | :x: | :heavy_check_mark: | :x: | <sub><img src=".github/genimg/ts-proto-required.svg" height="25" width="125" /></sub><br><sup>(737&nbsp;failures)<sub> | <sub><img src=".github/genimg/ts-proto-recommended.svg" height="25" width="125" /></sub><br><sup>(611&nbsp;failures)<sub> |
| [protoscript](impl/protoscript) | :heavy_check_mark: | :heavy_check_mark: | :x: | <sub><img src=".github/genimg/protoscript-required.svg" height="25" width="125" /></sub><br><sup>(1137&nbsp;failures)<sub> | <sub><img src=".github/genimg/protoscript-recommended.svg" height="25" width="125" /></sub><br><sup>(533&nbsp;failures)<sub> |
| [protoc-gen-ts](impl/protoc-gen-ts) | :x: | :heavy_check_mark: | :x: | <sub><img src=".github/genimg/protoc-gen-ts-required.svg" height="25" width="125" /></sub><br><sup>(1675&nbsp;failures)<sub> | <sub><img src=".github/genimg/protoc-gen-ts-recommended.svg" height="25" width="125" /></sub><br><sup>(470&nbsp;failures)<sub> |
| [protobuf.js](impl/protobuf.js) | :heavy_check_mark: | :x: | :heavy_check_mark: | <sub><img src=".github/genimg/protobuf.js-required.svg" height="25" width="125" /></sub><br><sup>(1827&nbsp;failures)<sub> | <sub><img src=".github/genimg/protobuf.js-recommended.svg" height="25" width="125" /></sub><br><sup>(568&nbsp;failures)<sub> |

<!-- TABLE-END -->

Since Editions are relatively new, only implementations that advertise support are tested with Editions. 

Note: None of the libraries tested implement the text format, so the results for those test runs are not shown.

## Running the tests

To run the conformance tests, run `npm test` from the repo root.

Note that only Linux and OSX operating systems are supported.
