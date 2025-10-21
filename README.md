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
* protobuf.js: https://github.com/protobufjs/protobuf.js
* protoscript: https://github.com/TateThurston/protoscript
* protoc-gen-ts: https://github.com/thesayyn/protoc-gen-ts

<!-- LIST-END -->

## Results

<!-- TABLE-START -->

| Implementation | JavaScript and<br>TypeScript | Standard<br>Plugin | Supported Edition | Required tests | Recommended tests |
|---|:---:|:---:|:---:|:---:|:---:|
| [Protobuf-ES](impl/protobuf-es) | :heavy_check_mark: | :heavy_check_mark: | 2024 | <sub><img src=".github/genimg/Protobuf-ES-required.svg" height="25" width="125" /></sub><br><sup>(0&nbsp;failures)<sub> | <sub><img src=".github/genimg/Protobuf-ES-recommended.svg" height="25" width="125" /></sub><br><sup>(12&nbsp;failures)<sub> |
| [protobuf-ts](impl/protobuf-ts) | :heavy_check_mark: | :heavy_check_mark: | proto3 | <sub><img src=".github/genimg/protobuf-ts-required.svg" height="25" width="125" /></sub><br><sup>(6&nbsp;failures)<sub> | <sub><img src=".github/genimg/protobuf-ts-recommended.svg" height="25" width="125" /></sub><br><sup>(7&nbsp;failures)<sub> |
| [google-protobuf](impl/google-protobuf) | :x: | :heavy_check_mark: | 2023 | <sub><img src=".github/genimg/google-protobuf-required.svg" height="25" width="125" /></sub><br><sup>(1169&nbsp;failures)<sub> | <sub><img src=".github/genimg/google-protobuf-recommended.svg" height="25" width="125" /></sub><br><sup>(389&nbsp;failures)<sub> |
| [ts-proto](impl/ts-proto) | :x: | :heavy_check_mark: | proto3 | <sub><img src=".github/genimg/ts-proto-required.svg" height="25" width="125" /></sub><br><sup>(751&nbsp;failures)<sub> | <sub><img src=".github/genimg/ts-proto-recommended.svg" height="25" width="125" /></sub><br><sup>(613&nbsp;failures)<sub> |
| [protobuf.js](impl/protobuf.js) | :heavy_check_mark: | :x: | 2023 | <sub><img src=".github/genimg/protobuf.js-required.svg" height="25" width="125" /></sub><br><sup>(1847&nbsp;failures)<sub> | <sub><img src=".github/genimg/protobuf.js-recommended.svg" height="25" width="125" /></sub><br><sup>(579&nbsp;failures)<sub> |
| [protoscript](impl/protoscript) | :heavy_check_mark: | :heavy_check_mark: | proto3 | <sub><img src=".github/genimg/protoscript-required.svg" height="25" width="125" /></sub><br><sup>(1151&nbsp;failures)<sub> | <sub><img src=".github/genimg/protoscript-recommended.svg" height="25" width="125" /></sub><br><sup>(541&nbsp;failures)<sub> |
| [protoc-gen-ts](impl/protoc-gen-ts) | :x: | :heavy_check_mark: | proto3 | <sub><img src=".github/genimg/protoc-gen-ts-required.svg" height="25" width="125" /></sub><br><sup>(1690&nbsp;failures)<sub> | <sub><img src=".github/genimg/protoc-gen-ts-recommended.svg" height="25" width="125" /></sub><br><sup>(475&nbsp;failures)<sub> |

<!-- TABLE-END -->

Implementations are tested with proto2, proto3, and the maximum Edition they advertise to support.

Note: None of the libraries tested implement the text format, so the results for those test runs are not shown.

## Running the tests

To run the conformance tests, run `npm test` from the repo root.

Note that only Linux and OSX operating systems are supported.

> [!NOTE]
>
> Beginning with the v32.0 release of Protobuf, this repository will no longer be publishing releases
> of the conformance runner. Users can instead install the conformance runner (and protoc if desired)
> via the [protobuf-conformance](https://www.npmjs.com/package/protobuf-conformance) package on npm.
