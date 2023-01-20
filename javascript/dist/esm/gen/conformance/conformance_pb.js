// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum conformance.WireFormat
 */
export var WireFormat;
(function (WireFormat) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    WireFormat[WireFormat["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: PROTOBUF = 1;
     */
    WireFormat[WireFormat["PROTOBUF"] = 1] = "PROTOBUF";
    /**
     * @generated from enum value: JSON = 2;
     */
    WireFormat[WireFormat["JSON"] = 2] = "JSON";
    /**
     * Google internal only. Opensource testees just skip it.
     *
     * @generated from enum value: JSPB = 3;
     */
    WireFormat[WireFormat["JSPB"] = 3] = "JSPB";
    /**
     * @generated from enum value: TEXT_FORMAT = 4;
     */
    WireFormat[WireFormat["TEXT_FORMAT"] = 4] = "TEXT_FORMAT";
})(WireFormat || (WireFormat = {}));
// Retrieve enum metadata with: proto3.getEnumType(WireFormat)
proto3.util.setEnumType(WireFormat, "conformance.WireFormat", [
    { no: 0, name: "UNSPECIFIED" },
    { no: 1, name: "PROTOBUF" },
    { no: 2, name: "JSON" },
    { no: 3, name: "JSPB" },
    { no: 4, name: "TEXT_FORMAT" },
]);
/**
 * @generated from enum conformance.TestCategory
 */
export var TestCategory;
(function (TestCategory) {
    /**
     * @generated from enum value: UNSPECIFIED_TEST = 0;
     */
    TestCategory[TestCategory["UNSPECIFIED_TEST"] = 0] = "UNSPECIFIED_TEST";
    /**
     * Test binary wire format.
     *
     * @generated from enum value: BINARY_TEST = 1;
     */
    TestCategory[TestCategory["BINARY_TEST"] = 1] = "BINARY_TEST";
    /**
     * Test json wire format.
     *
     * @generated from enum value: JSON_TEST = 2;
     */
    TestCategory[TestCategory["JSON_TEST"] = 2] = "JSON_TEST";
    /**
     * Similar to JSON_TEST. However, during parsing json, testee should ignore
     * unknown fields. This feature is optional. Each implementation can decide
     * whether to support it.  See
     * https://developers.google.com/protocol-buffers/docs/proto3#json_options
     * for more detail.
     *
     * @generated from enum value: JSON_IGNORE_UNKNOWN_PARSING_TEST = 3;
     */
    TestCategory[TestCategory["JSON_IGNORE_UNKNOWN_PARSING_TEST"] = 3] = "JSON_IGNORE_UNKNOWN_PARSING_TEST";
    /**
     * Test jspb wire format. Google internal only. Opensource testees just skip it.
     *
     * @generated from enum value: JSPB_TEST = 4;
     */
    TestCategory[TestCategory["JSPB_TEST"] = 4] = "JSPB_TEST";
    /**
     * Test text format. For cpp, java and python, testees can already deal with
     * this type. Testees of other languages can simply skip it.
     *
     * @generated from enum value: TEXT_FORMAT_TEST = 5;
     */
    TestCategory[TestCategory["TEXT_FORMAT_TEST"] = 5] = "TEXT_FORMAT_TEST";
})(TestCategory || (TestCategory = {}));
// Retrieve enum metadata with: proto3.getEnumType(TestCategory)
proto3.util.setEnumType(TestCategory, "conformance.TestCategory", [
    { no: 0, name: "UNSPECIFIED_TEST" },
    { no: 1, name: "BINARY_TEST" },
    { no: 2, name: "JSON_TEST" },
    { no: 3, name: "JSON_IGNORE_UNKNOWN_PARSING_TEST" },
    { no: 4, name: "JSPB_TEST" },
    { no: 5, name: "TEXT_FORMAT_TEST" },
]);
/**
 * The conformance runner will request a list of failures as the first request.
 * This will be known by message_type == "conformance.FailureSet", a conformance
 * test should return a serialized FailureSet in protobuf_payload.
 *
 * @generated from message conformance.FailureSet
 */
export class FailureSet extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string failure = 1;
         */
        this.failure = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new FailureSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new FailureSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new FailureSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(FailureSet, a, b);
    }
}
FailureSet.runtime = proto3;
FailureSet.typeName = "conformance.FailureSet";
FailureSet.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "failure", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * Represents a single test case's input.  The testee should:
 *
 *   1. parse this proto (which should always succeed)
 *   2. parse the protobuf or JSON payload in "payload" (which may fail)
 *   3. if the parse succeeded, serialize the message in the requested format.
 *
 * @generated from message conformance.ConformanceRequest
 */
export class ConformanceRequest extends Message {
    constructor(data) {
        super();
        /**
         * The payload (whether protobuf of JSON) is always for a
         * protobuf_test_messages.proto3.TestAllTypes proto (as defined in
         * src/google/protobuf/proto3_test_messages.proto).
         *
         * TODO(haberman): if/when we expand the conformance tests to support proto2,
         * we will want to include a field that lets the payload/response be a
         * protobuf_test_messages.google.protobuf.TestAllTypes message instead.
         *
         * @generated from oneof conformance.ConformanceRequest.payload
         */
        this.payload = { case: undefined };
        /**
         * Which format should the testee serialize its message to?
         *
         * @generated from field: conformance.WireFormat requested_output_format = 3;
         */
        this.requestedOutputFormat = WireFormat.UNSPECIFIED;
        /**
         * The full name for the test message to use; for the moment, either:
         * protobuf_test_messages.proto3.TestAllTypesProto3 or
         * protobuf_test_messages.google.protobuf.TestAllTypesProto2.
         *
         * @generated from field: string message_type = 4;
         */
        this.messageType = "";
        /**
         * Each test is given a specific test category. Some category may need
         * specific support in testee programs. Refer to the definition of TestCategory
         * for more information.
         *
         * @generated from field: conformance.TestCategory test_category = 5;
         */
        this.testCategory = TestCategory.UNSPECIFIED_TEST;
        /**
         * This can be used in json and text format. If true, testee should print
         * unknown fields instead of ignore. This feature is optional.
         *
         * @generated from field: bool print_unknown_fields = 9;
         */
        this.printUnknownFields = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConformanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConformanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConformanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConformanceRequest, a, b);
    }
}
ConformanceRequest.runtime = proto3;
ConformanceRequest.typeName = "conformance.ConformanceRequest";
ConformanceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "protobuf_payload", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "payload" },
    { no: 2, name: "json_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "payload" },
    { no: 7, name: "jspb_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "payload" },
    { no: 8, name: "text_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "payload" },
    { no: 3, name: "requested_output_format", kind: "enum", T: proto3.getEnumType(WireFormat) },
    { no: 4, name: "message_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "test_category", kind: "enum", T: proto3.getEnumType(TestCategory) },
    { no: 6, name: "jspb_encoding_options", kind: "message", T: JspbEncodingConfig },
    { no: 9, name: "print_unknown_fields", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * Represents a single test case's output.
 *
 * @generated from message conformance.ConformanceResponse
 */
export class ConformanceResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof conformance.ConformanceResponse.result
         */
        this.result = { case: undefined };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConformanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConformanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConformanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConformanceResponse, a, b);
    }
}
ConformanceResponse.runtime = proto3;
ConformanceResponse.typeName = "conformance.ConformanceResponse";
ConformanceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "parse_error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 6, name: "serialize_error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 2, name: "runtime_error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 3, name: "protobuf_payload", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "result" },
    { no: 4, name: "json_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 5, name: "skipped", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 7, name: "jspb_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 8, name: "text_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
]);
/**
 * Encoding options for jspb format.
 *
 * @generated from message conformance.JspbEncodingConfig
 */
export class JspbEncodingConfig extends Message {
    constructor(data) {
        super();
        /**
         * Encode the value field of Any as jspb array if true, otherwise binary.
         *
         * @generated from field: bool use_jspb_array_any_format = 1;
         */
        this.useJspbArrayAnyFormat = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new JspbEncodingConfig().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new JspbEncodingConfig().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new JspbEncodingConfig().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(JspbEncodingConfig, a, b);
    }
}
JspbEncodingConfig.runtime = proto3;
JspbEncodingConfig.typeName = "conformance.JspbEncodingConfig";
JspbEncodingConfig.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "use_jspb_array_any_format", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
