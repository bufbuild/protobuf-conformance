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
UNAME_OS := $(shell uname -s)
LICENSE_HEADER_YEAR_RANGE := 2023-2024
# Version 27.1
GOOGLE_PROTOBUF_VERSION = 26.1

ifeq ($(UNAME_OS),Darwin)
	PLATFORM := osx-x86_64
else ifeq ($(UNAME_OS),Linux)
	PLATFORM := linux-x86_64
endif

$(BIN)/conformance_test_runner: Makefile
	@mkdir -p $(@D)
	curl -L https://github.com/bufbuild/protobuf-conformance/releases/download/v$(GOOGLE_PROTOBUF_VERSION)/conformance_test_runner-$(GOOGLE_PROTOBUF_VERSION)-$(PLATFORM).zip > $(TMP)/conformance-test-runner-$(GOOGLE_PROTOBUF_VERSION).zip
	unzip -o $(TMP)/conformance-test-runner-$(GOOGLE_PROTOBUF_VERSION).zip -d $(TMP)/conformance_test_runner-$(GOOGLE_PROTOBUF_VERSION)
	cp -f $(TMP)/conformance_test_runner-$(GOOGLE_PROTOBUF_VERSION)/bin/conformance_test_runner $(@D)
	cp -f $(TMP)/conformance_test_runner-$(GOOGLE_PROTOBUF_VERSION)/include/conformance/conformance.proto proto/conformance
	cp -f $(TMP)/conformance_test_runner-$(GOOGLE_PROTOBUF_VERSION)/include/google/protobuf/test_messages*.proto proto/google/protobuf

.PHONY: all
all: test license  ## Run conformance tests and update license headers

.PHONY: help
help: ## Describe useful make targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "%-30s %s\n", $$1, $$2}'

.PHONY: test
test: $(BIN)/conformance_test_runner  ## Run conformance tests
	cd impl/ts-proto;        PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protobuf.js;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/google-protobuf; PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protobuf-es;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protobuf-ts;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protoc-gen-ts;   PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protoscript;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/baseline;        PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	node report.js

.PHONY: license
license: Makefile ## Updates license headers
	GOBIN=$(abspath $(BIN)) go install github.com/bufbuild/buf/private/pkg/licenseheader/cmd/license-header@v1.1.0
	$(BIN)/license-header \
		--license-type "apache" \
		--copyright-holder "Buf Technologies, Inc." \
		--year-range "$(LICENSE_HEADER_YEAR_RANGE)" \
		report.js

.PHONY: checkdiff
checkdiff:
	@# Used in CI to verify that `make` doesn't produce a diff
	test -z "$$(git status --porcelain | tee /dev/stderr)"

