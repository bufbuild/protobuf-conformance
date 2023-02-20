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
PB   =  .tmp/protobuf-$(GOOGLE_PROTOBUF_VERSION)
GOOGLE_PROTOBUF_VERSION = 21.12
BAZEL_VERSION = 5.4.0
LICENSE_HEADER_YEAR_RANGE := 2021-2023
LICENSE_HEADER_IGNORES := .tmp\/ node_module\/ proto gen impl\/protobuf.js\/wrapper.js impl\/protobuf.js\/runner.ts impl\/protobuf-es\/runner.ts impl\/google-protobuf\/runner.ts
GOOGLE_PROTOBUF_JS_VERSION = 3.21.2
GOOGLE_PROTOBUF_JS = .tmp/protobuf-javascript-$(GOOGLE_PROTOBUF_JS_VERSION)

JS_LIBS = google-protobuf \
	   protobuf-es \
	   protobuf.js \
	   ts-proto

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

$(BIN)/conformance_test_runner: $(PB) Makefile
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

.PHONY: license
license: $(BIN)/git-ls-files-unstaged $(BIN)/license-header ## Adds license headers
	$(BIN)/git-ls-files-unstaged | \
		grep -v $(patsubst %,-e %,$(sort $(LICENSE_HEADER_IGNORES))) | \
		xargs $(BIN)/license-header \
			--license-type "apache" \
			--copyright-holder "Buf Technologies, Inc." \
			--year-range "$(LICENSE_HEADER_YEAR_RANGE)"

.PHONY: help
help: ## Describe useful make targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "%-30s %s\n", $$1, $$2}'

.PHONY: all
all: build lint test

define copyprotofunc
.PHONY: copyproto$(notdir $(1))
copyproto$(notdir $(1)): $(PB)
	@rm -rf impl/$(1)/proto/*
	@mkdir -p impl/$(1)/proto/conformance
	@mkdir -p impl/$(1)/proto/google/protobuf
	@cp $(PB)/conformance/conformance.proto impl/$(1)/proto/conformance
	@cp $(PB)/src/google/protobuf/test_messages*.proto impl/$(1)/proto/google/protobuf/

copyproto:: copyproto$(notdir $(1))
endef

$(foreach js,$(sort $(JS_LIBS)),$(eval $(call copyprotofunc,$(js))))

define jslintfunc
.PHONY: lint$(notdir $(1))
lint$(notdir $(1)): build$(1)
	cd impl/$(1) && npm run lint 

lint:: lint$(notdir $(1))
endef

$(foreach js,$(sort $(JS_LIBS)),$(eval $(call jslintfunc,$(js))))

define jsbuildfunc 
.PHONY: build$(notdir $(1))
build$(notdir $(1)): gen$(1) $(shell find impl -name '*.ts' -o -name '*.js') license
	cd impl/$(1) && npm run build

build:: build$(notdir $(1))
endef

$(foreach js,$(sort $(JS_LIBS)),$(eval $(call jsbuildfunc,$(js))))

define jsgenfunc 
.PHONY: gen$(notdir $(1))
gen$(notdir $(1)): Makefile copyproto$(1) impl/$(1)/package-lock.json $(BIN)/protoc-gen-js
	cd impl/$(1) && npm ci && npm run clean && npm run generate 

gen:: gen$(notdir $(1))
endef

$(foreach js,$(sort $(JS_LIBS)),$(eval $(call jsgenfunc,$(js))))

.PHONY: test
test: testjsconformance
	node report.js > ./README.md

.PHONY: testjsconformance
testjsconformance: testconformanceprotobufes testconformancepbjs testconformancegoogleprotobuf testconformancetsproto

.PHONY: testconformanceprotobufes
testconformanceprotobufes: $(BIN)/conformance_test_runner buildprotobuf-es
	cd impl \
		&& BUF_BIGINT_DISABLE=0 $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list protobuf-es/failing_tests_with_bigint.txt --text_format_failure_list protobuf-es/failing_tests_text_format.txt --output_dir protobuf-es protobuf-es/runner.ts \
		&& BUF_BIGINT_DISABLE=1 $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list protobuf-es/failing_tests_without_bigint.txt --text_format_failure_list protobuf-es/failing_tests_text_format.txt --output_dir protobuf-es protobuf-es/runner.ts

.PHONY: testconformancepbjs
testconformancepbjs: $(BIN)/conformance_test_runner buildprotobuf.js
	cd impl \
		&& $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list protobuf.js/failing_tests_list.txt --text_format_failure_list protobuf.js/failing_tests_text_format.txt --output_dir protobuf.js protobuf.js/runner.ts \

.PHONY: testconformancegoogleprotobuf
testconformancegoogleprotobuf: $(BIN)/conformance_test_runner buildgoogle-protobuf
	cd impl \
		&& $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list google-protobuf/failing_tests_list.txt --text_format_failure_list google-protobuf/failing_tests_text_format.txt --output_dir google-protobuf google-protobuf/runner.ts \

.PHONY: testconformancetsproto
testconformancetsproto: $(BIN)/conformance_test_runner buildts-proto
	cd impl \
		&& $(abspath $(BIN)/conformance_test_runner) --enforce_recommended --failure_list ts-proto/failing_tests_list.txt --text_format_failure_list ts-proto/failing_tests_text_format.txt --output_dir ts-proto ts-proto/bin/conformance.js
