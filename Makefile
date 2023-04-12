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
LICENSE_HEADER_YEAR_RANGE := 2023
GOOGLE_PROTOBUF_VERSION = 22.2
BAZEL_VERSION = 5.4.0

$(PB): Makefile
	echo $(PB)
	@mkdir -p $(TMP)
	curl -L https://github.com/protocolbuffers/protobuf/releases/download/v$(GOOGLE_PROTOBUF_VERSION)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz \
		> $(TMP)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz
	tar -xzf $(TMP)/protobuf-$(GOOGLE_PROTOBUF_VERSION).tar.gz -C $(TMP)/

$(BIN)/conformance_test_runner: $(PB) Makefile
	@mkdir -p $(@D)
	cd $(PB) && USE_BAZEL_VERSION=$(BAZEL_VERSION) bazel build test_messages_proto3_cc_proto conformance:conformance_proto conformance:conformance_test conformance:conformance_test_runner
	cp -f $(PB)/bazel-bin/conformance/conformance_test_runner $(@D)
	@cp $(PB)/conformance/conformance.proto proto/conformance
	@cp $(PB)/src/google/protobuf/test_messages*.proto proto/google/protobuf/
	@touch $(@)

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
	cd impl/baseline;        PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	node report.js

.PHONY: testci
testci: ## Run conformance tests in CI
	cd impl/ts-proto;        PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protobuf.js;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/google-protobuf; PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protobuf-es;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protobuf-ts;     PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
	cd impl/protoc-gen-ts;   PATH="$(abspath $(BIN)):$(PATH)" ./test.sh
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

