# See https://tech.davis-hansson.com/p/make/
SHELL := bash
.DELETE_ON_ERROR:
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := all
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --no-print-directory
TMP   = .tmp
BIN   = .tmp/bin
BUILD = .tmp/build
GEN   = .tmp/gen
PB   =  .tmp/protobuf-$(GOOGLE_PROTOBUF_VERSION)
GOOGLE_PROTOBUF_VERSION = 21.12
BAZEL_VERSION = 5.4.0
LICENSE_HEADER_YEAR_RANGE := 2021-2023
LICENSE_HEADER_IGNORES := .tmp\/ node_module\/ dist\/
GOOGLE_PROTOBUF_JS_VERSION = 3.21.2
GOOGLE_PROTOBUF_JS = .tmp/protobuf-javascript-$(GOOGLE_PROTOBUF_JS_VERSION)

$(PB):
	echo $(PB)
	@mkdir -p $(TMP)
	curl -L https://github.com/protocolbuffers/protobuf/releases/download/v$(GOOGLE_PROTOBUF_VERSION)/protobuf-all-$(GOOGLE_PROTOBUF_VERSION).tar.gz \
		> $(TMP)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz
	tar -xzf $(TMP)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz -C $(TMP)/

$(GOOGLE_PROTOBUF_JS):
	echo $(GOOGLE_PROTOBUF_JS)
	@mkdir -p $(TMP)
	curl -L https://github.com/protocolbuffers/protobuf-javascript/archive/refs/tags/v$(GOOGLE_PROTOBUF_JS_VERSION).tar.gz \
		> $(TMP)/protobuf-javascript-$(GOOGLE_PROTOBUF_JS_VERSION).tar.gz
	tar -xzf $(TMP)/protobuf-javascript-$(GOOGLE_PROTOBUF_JS_VERSION).tar.gz -C $(TMP)/

$(BIN)/protoc-gen-js: $(GOOGLE_PROTOBUF_JS) Makefile
	@mkdir -p $(@D)
	cd $(GOOGLE_PROTOBUF_JS) && USE_BAZEL_VERSION=$(BAZEL_VERSION) bazel build generator:protoc-gen-js
	cp -f $(GOOGLE_PROTOBUF_JS)/bazel-bin/generator/protoc-gen-js $(@D)
	@touch $(@)

$(BIN)/protoc: $(PB)
	@mkdir -p $(@D)
	cd $(PB) && USE_BAZEL_VERSION=$(BAZEL_VERSION) bazel build protoc
	cp -f $(PB)/bazel-bin/protoc $(@D)
	@touch $(@)

$(BIN)/conformance_test_runner: $(PB)
	@mkdir -p $(@D)
	cd $(PB) && USE_BAZEL_VERSION=$(BAZEL_VERSION) bazel build test_messages_proto3_proto conformance:conformance_proto conformance:conformance_test conformance:conformance_test_runner
	cp -f $(PB)/bazel-bin/conformance/conformance_test_runner $(@D)
	@touch $(@)

$(BIN)/license-header: Makefile
	@mkdir -p $(@D)
	GOBIN=$(abspath $(BIN)) go install github.com/bufbuild/buf/private/pkg/licenseheader/cmd/license-header@v1.1.0

$(BIN)/git-ls-files-unstaged: Makefile
	@mkdir -p $(@D)
	GOBIN=$(abspath $(BIN)) go install github.com/bufbuild/buf/private/pkg/git/cmd/git-ls-files-unstaged@v1.1.0

.PHONY: help
help: ## Describe useful make targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "%-30s %s\n", $$1, $$2}'

.PHONY: all
all: test

.PHONY: clean
clean: ## Delete build artifacts and installed dependencies
	@# -X only removes untracked files, -d recurses into directories, -f actually removes files/dirs
	git clean -Xdf

.PHONY: build
build: $(BUILD)/javascript 

$(BUILD)/javascript: $(GEN)/javascript $(shell find javascript -name '*.ts' -o -name '*.js')
	cd javascript/protobuf.js && npm run clean && npm run build
	cd javascript/protobuf-es && npm run clean && npm run build
	cd javascript/google-protobuf && npm run clean && npm run build

$(GEN)/javascript: $(GEN)/protobuf.js $(GEN)/protobuf-es $(GEN)/google-protobuf $(BIN)/protoc

$(GEN)/protobuf.js: $(BIN)/protoc Makefile javascript/protobuf.js/package-lock.json
	@rm -rf javascript/protobuf.js/gen/*
	@mkdir -p javascript/protobuf.js/gen
	cd javascript/protobuf.js && npm ci
	javascript/protobuf.js/node_modules/.bin/pbjs -t static-module -w javascript/protobuf.js/wrapper.js --es6 -o javascript/protobuf.js/gen/protos_pb.js $(PB)/conformance/conformance.proto $(PB)/src/google/protobuf/any.proto $(PB)/src/google/protobuf/field_mask.proto $(PB)/src/google/protobuf/timestamp.proto $(PB)/src/google/protobuf/duration.proto $(PB)/src/google/protobuf/struct.proto $(PB)/src/google/protobuf/wrappers.proto $(PB)/src/google/protobuf/test_messages_proto3.proto $(PB)/src/google/protobuf/test_messages_proto2.proto
	javascript/protobuf.js/node_modules/.bin/pbts -o javascript/protobuf.js/gen/protos_pb.d.ts javascript/protobuf.js/gen/protos_pb.js

$(GEN)/protobuf-es: $(BIN)/protoc Makefile javascript/protobuf-es/package-lock.json
	@rm -rf javascript/protobuf-es/gen/*
	@mkdir -p javascript/protobuf-es/gen
	cd javascript/protobuf-es && npm ci
	$(BIN)/protoc --plugin javascript/protobuf-es/node_modules/.bin/protoc-gen-es --es_out javascript/protobuf-es/gen --es_opt ts_nocheck=false,target=ts \
		--proto_path $(PB) --proto_path $(PB)/src \
		conformance/conformance.proto \
		google/protobuf/test_messages_proto2.proto \
		google/protobuf/test_messages_proto3.proto

$(GEN)/google-protobuf: $(BIN)/protoc Makefile $(BIN)/protoc-gen-js javascript/google-protobuf/package-lock.json
	@rm -rf javascript/google-protobuf/gen/*
	@mkdir -p javascript/google-protobuf/gen
	cd javascript/google-protobuf && npm ci
	$(BIN)/protoc --plugin=$(BIN)/protoc-gen-js --js_out=import_style=commonjs,binary:javascript/google-protobuf/gen --proto_path $(PB) --proto_path $(PB)/src conformance/conformance.proto \
		google/protobuf/test_messages_proto2.proto \
		google/protobuf/test_messages_proto3.proto

.PHONY: test
test: test-js-conformance

.PHONY: test-js-conformance
test-js-conformance: test-conformance-protobuf-es test-conformance-pbjs test-conformance-google-protobuf
	node javascript/main.js > ./README.md

.PHONY: test-conformance-protobuf-es
test-conformance-protobuf-es: $(BIN)/conformance_test_runner $(BUILD)/javascript
	cd javascript \
		&& BUF_BIGINT_DISABLE=0 $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list protobuf-es/failing_tests_with_bigint.txt --text_format_failure_list protobuf-es/failing_tests_text_format.txt --output_dir protobuf-es protobuf-es/bin/conformance_esm.js \
		&& BUF_BIGINT_DISABLE=1 $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list protobuf-es/failing_tests_without_bigint.txt --text_format_failure_list protobuf-es/failing_tests_text_format.txt --output_dir protobuf-es protobuf-es/bin/conformance_esm.js

.PHONY: test-conformance-pbjs
test-conformance-pbjs: $(BIN)/conformance_test_runner $(BUILD)/javascript
	cd javascript \
		&& $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list protobuf.js/failing_tests_list.txt --text_format_failure_list protobuf.js/failing_tests_text_format.txt --output_dir protobuf.js protobuf.js/bin/conformance_esm.js \

.PHONY: test-conformance-google-protobuf
test-conformance-google-protobuf: $(BIN)/conformance_test_runner $(BUILD)/javascript
	cd javascript \
		&& $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list google-protobuf/failing_tests_list.txt --text_format_failure_list google-protobuf/failing_tests_text_format.txt --output_dir google-protobuf google-protobuf/bin/conformance_cjs.js \

