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

include make/js.mk

$(PB):
	echo $(PB)
	@mkdir -p $(TMP)
	curl -L https://github.com/protocolbuffers/protobuf/releases/download/v$(GOOGLE_PROTOBUF_VERSION)/protobuf-all-$(GOOGLE_PROTOBUF_VERSION).tar.gz \
		> $(TMP)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz
	tar -xzf $(TMP)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz -C $(TMP)/

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

.PHONY: test
test: test-js-conformance

