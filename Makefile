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
LICENSE_HEADER_IGNORES := .tmp\/ node_module\/ gen impl\/protobuf.js\/wrapper.js impl\/protobuf.js\/runner.ts impl\/protobuf-es\/runner.ts impl\/google-protobuf\/runner.ts
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
all: license lint test

.PHONY: clean
clean: ## Delete build artifacts and installed dependencies
	@# -X only removes untracked files, -d recurses into directories, -f actually removes files/dirs
	git clean -Xdf

.PHONY: copyproto
copyproto:
	# protobuf.js
	@rm -rf impl/protobuf.js/proto/*
	@mkdir -p impl/protobuf.js/proto/conformance
	@mkdir -p impl/protobuf.js/proto/google/protobuf
	@cp $(PB)/conformance/conformance.proto impl/protobuf.js/proto/conformance
	@cp $(PB)/src/google/protobuf/test_messages*.proto impl/protobuf.js/proto/google/protobuf/
	# protobuf-es
	@rm -rf impl/protobuf-es/proto/*
	@mkdir -p impl/protobuf-es/proto/conformance
	@mkdir -p impl/protobuf-es/proto/google/protobuf
	@cp $(PB)/conformance/conformance.proto impl/protobuf-es/proto/conformance
	@cp $(PB)/src/google/protobuf/test_messages*.proto impl/protobuf-es/proto/google/protobuf/
	# google-protobuf
	@rm -rf impl/google-protobuf/proto/*
	@mkdir -p impl/google-protobuf/proto/conformance
	@mkdir -p impl/google-protobuf/proto/google/protobuf
	@cp $(PB)/conformance/conformance.proto impl/google-protobuf/proto/conformance
	@cp $(PB)/src/google/protobuf/test_messages*.proto impl/google-protobuf/proto/google/protobuf/

JS = protobuf.js \
	   google-protobuf \
	   protobuf-es

define lintfunc
.PHONY: lint$(notdir $(1))
lint$(notdir $(1)): build$(1)
	cd impl/$(1) && npm run lint 

lint:: lint$(notdir $(1))
endef

$(foreach js,$(sort $(JS)),$(eval $(call lintfunc,$(js))))

# .PHONY: lint
# lint: $(BUILD)/javascript 
# 	cd impl/protobuf.js && npm run lint 
# 	cd impl/protobuf-es && npm run lint
# 	cd impl/google-protobuf && npm run lint
#
define buildfunc 
.PHONY: build$(notdir $(1))
build$(notdir $(1)): gen$(1) $(shell find impl -name '*.ts' -o -name '*.js')
	cd impl/$(1) && npm ci && npm run build 

build:: build$(notdir $(1))
endef

$(foreach js,$(sort $(JS)),$(eval $(call buildfunc,$(js))))

# .PHONY: build
# build: $(BUILD)/javascript 

# $(BUILD)/javascript: $(BUILD)/protobuf-es $(BUILD)/protobuf.js $(BUILD)/google-protobuf 

# $(BUILD)/protobuf-es: $(GEN)/protobuf-es $(shell find impl -name '*.ts' -o -name '*.js')
# 	cd impl/protobuf-es && npm ci && npm run build

# $(BUILD)/protobuf.js: $(GEN)/protobuf.js $(shell find impl -name '*.ts' -o -name '*.js')
# 	cd impl/protobuf.js && npm ci && npm run build

# $(BUILD)/google-protobuf: $(GEN)/google-protobuf $(shell find impl -name '*.ts' -o -name '*.js')
# 	cd impl/protobuf.js && npm ci && npm run build
#
define genfunc 
.PHONY: gen$(notdir $(1))
gen$(notdir $(1)): Makefile copyproto impl/$(1)/package-lock.json
	cd impl/$(1) && npm run clean && npm run generate 

gen:: gen$(notdir $(1))
endef

$(foreach js,$(sort $(JS)),$(eval $(call genfunc,$(js))))

# $(GEN)/javascript: $(GEN)/protobuf.js $(GEN)/protobuf-es $(GEN)/google-protobuf

# $(GEN)/protobuf.js: Makefile copyproto impl/protobuf.js/package-lock.json
# 	cd impl/protobuf.js && npm run clean && npm run generate

# $(GEN)/protobuf-es: Makefile copyproto impl/protobuf-es/package-lock.json
# 	cd impl/protobuf-es && npm run clean && npm run generate

# $(GEN)/google-protobuf: Makefile copyproto $(BIN)/protoc-gen-js impl/google-protobuf/package-lock.json
# 	cd impl/google-protobuf && npm run clean && npm run generate

.PHONY: test
test: testjsconformance
	node report.js > ./README.md

.PHONY: testjsconformance
testjsconformance: testconformanceprotobufes testconformancepbjs testconformancegoogleprotobuf

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
