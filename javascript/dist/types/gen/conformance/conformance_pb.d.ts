import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from enum conformance.WireFormat
 */
export declare enum WireFormat {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROTOBUF = 1;
     */
    PROTOBUF = 1,
    /**
     * @generated from enum value: JSON = 2;
     */
    JSON = 2,
    /**
     * Google internal only. Opensource testees just skip it.
     *
     * @generated from enum value: JSPB = 3;
     */
    JSPB = 3,
    /**
     * @generated from enum value: TEXT_FORMAT = 4;
     */
    TEXT_FORMAT = 4
}
/**
 * @generated from enum conformance.TestCategory
 */
export declare enum TestCategory {
    /**
     * @generated from enum value: UNSPECIFIED_TEST = 0;
     */
    UNSPECIFIED_TEST = 0,
    /**
     * Test binary wire format.
     *
     * @generated from enum value: BINARY_TEST = 1;
     */
    BINARY_TEST = 1,
    /**
     * Test json wire format.
     *
     * @generated from enum value: JSON_TEST = 2;
     */
    JSON_TEST = 2,
    /**
     * Similar to JSON_TEST. However, during parsing json, testee should ignore
     * unknown fields. This feature is optional. Each implementation can decide
     * whether to support it.  See
     * https://developers.google.com/protocol-buffers/docs/proto3#json_options
     * for more detail.
     *
     * @generated from enum value: JSON_IGNORE_UNKNOWN_PARSING_TEST = 3;
     */
    JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,
    /**
     * Test jspb wire format. Google internal only. Opensource testees just skip it.
     *
     * @generated from enum value: JSPB_TEST = 4;
     */
    JSPB_TEST = 4,
    /**
     * Test text format. For cpp, java and python, testees can already deal with
     * this type. Testees of other languages can simply skip it.
     *
     * @generated from enum value: TEXT_FORMAT_TEST = 5;
     */
    TEXT_FORMAT_TEST = 5
}
/**
 * The conformance runner will request a list of failures as the first request.
 * This will be known by message_type == "conformance.FailureSet", a conformance
 * test should return a serialized FailureSet in protobuf_payload.
 *
 * @generated from message conformance.FailureSet
 */
export declare class FailureSet extends Message<FailureSet> {
    /**
     * @generated from field: repeated string failure = 1;
     */
    failure: string[];
    constructor(data?: PartialMessage<FailureSet>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "conformance.FailureSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FailureSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FailureSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FailureSet;
    static equals(a: FailureSet | PlainMessage<FailureSet> | undefined, b: FailureSet | PlainMessage<FailureSet> | undefined): boolean;
}
/**
 * Represents a single test case's input.  The testee should:
 *
 *   1. parse this proto (which should always succeed)
 *   2. parse the protobuf or JSON payload in "payload" (which may fail)
 *   3. if the parse succeeded, serialize the message in the requested format.
 *
 * @generated from message conformance.ConformanceRequest
 */
export declare class ConformanceRequest extends Message<ConformanceRequest> {
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
    payload: {
        /**
         * @generated from field: bytes protobuf_payload = 1;
         */
        value: Uint8Array;
        case: "protobufPayload";
    } | {
        /**
         * @generated from field: string json_payload = 2;
         */
        value: string;
        case: "jsonPayload";
    } | {
        /**
         * Google internal only.  Opensource testees just skip it.
         *
         * @generated from field: string jspb_payload = 7;
         */
        value: string;
        case: "jspbPayload";
    } | {
        /**
         * @generated from field: string text_payload = 8;
         */
        value: string;
        case: "textPayload";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Which format should the testee serialize its message to?
     *
     * @generated from field: conformance.WireFormat requested_output_format = 3;
     */
    requestedOutputFormat: WireFormat;
    /**
     * The full name for the test message to use; for the moment, either:
     * protobuf_test_messages.proto3.TestAllTypesProto3 or
     * protobuf_test_messages.google.protobuf.TestAllTypesProto2.
     *
     * @generated from field: string message_type = 4;
     */
    messageType: string;
    /**
     * Each test is given a specific test category. Some category may need
     * specific support in testee programs. Refer to the definition of TestCategory
     * for more information.
     *
     * @generated from field: conformance.TestCategory test_category = 5;
     */
    testCategory: TestCategory;
    /**
     * Specify details for how to encode jspb.
     *
     * @generated from field: conformance.JspbEncodingConfig jspb_encoding_options = 6;
     */
    jspbEncodingOptions?: JspbEncodingConfig;
    /**
     * This can be used in json and text format. If true, testee should print
     * unknown fields instead of ignore. This feature is optional.
     *
     * @generated from field: bool print_unknown_fields = 9;
     */
    printUnknownFields: boolean;
    constructor(data?: PartialMessage<ConformanceRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "conformance.ConformanceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConformanceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConformanceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConformanceRequest;
    static equals(a: ConformanceRequest | PlainMessage<ConformanceRequest> | undefined, b: ConformanceRequest | PlainMessage<ConformanceRequest> | undefined): boolean;
}
/**
 * Represents a single test case's output.
 *
 * @generated from message conformance.ConformanceResponse
 */
export declare class ConformanceResponse extends Message<ConformanceResponse> {
    /**
     * @generated from oneof conformance.ConformanceResponse.result
     */
    result: {
        /**
         * This string should be set to indicate parsing failed.  The string can
         * provide more information about the parse error if it is available.
         *
         * Setting this string does not necessarily mean the testee failed the
         * test.  Some of the test cases are intentionally invalid input.
         *
         * @generated from field: string parse_error = 1;
         */
        value: string;
        case: "parseError";
    } | {
        /**
         * If the input was successfully parsed but errors occurred when
         * serializing it to the requested output format, set the error message in
         * this field.
         *
         * @generated from field: string serialize_error = 6;
         */
        value: string;
        case: "serializeError";
    } | {
        /**
         * This should be set if some other error occurred.  This will always
         * indicate that the test failed.  The string can provide more information
         * about the failure.
         *
         * @generated from field: string runtime_error = 2;
         */
        value: string;
        case: "runtimeError";
    } | {
        /**
         * If the input was successfully parsed and the requested output was
         * protobuf, serialize it to protobuf and set it in this field.
         *
         * @generated from field: bytes protobuf_payload = 3;
         */
        value: Uint8Array;
        case: "protobufPayload";
    } | {
        /**
         * If the input was successfully parsed and the requested output was JSON,
         * serialize to JSON and set it in this field.
         *
         * @generated from field: string json_payload = 4;
         */
        value: string;
        case: "jsonPayload";
    } | {
        /**
         * For when the testee skipped the test, likely because a certain feature
         * wasn't supported, like JSON input/output.
         *
         * @generated from field: string skipped = 5;
         */
        value: string;
        case: "skipped";
    } | {
        /**
         * If the input was successfully parsed and the requested output was JSPB,
         * serialize to JSPB and set it in this field. JSPB is google internal only
         * format. Opensource testees can just skip it.
         *
         * @generated from field: string jspb_payload = 7;
         */
        value: string;
        case: "jspbPayload";
    } | {
        /**
         * If the input was successfully parsed and the requested output was
         * TEXT_FORMAT, serialize to TEXT_FORMAT and set it in this field.
         *
         * @generated from field: string text_payload = 8;
         */
        value: string;
        case: "textPayload";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ConformanceResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "conformance.ConformanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConformanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConformanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConformanceResponse;
    static equals(a: ConformanceResponse | PlainMessage<ConformanceResponse> | undefined, b: ConformanceResponse | PlainMessage<ConformanceResponse> | undefined): boolean;
}
/**
 * Encoding options for jspb format.
 *
 * @generated from message conformance.JspbEncodingConfig
 */
export declare class JspbEncodingConfig extends Message<JspbEncodingConfig> {
    /**
     * Encode the value field of Any as jspb array if true, otherwise binary.
     *
     * @generated from field: bool use_jspb_array_any_format = 1;
     */
    useJspbArrayAnyFormat: boolean;
    constructor(data?: PartialMessage<JspbEncodingConfig>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "conformance.JspbEncodingConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JspbEncodingConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JspbEncodingConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JspbEncodingConfig;
    static equals(a: JspbEncodingConfig | PlainMessage<JspbEncodingConfig> | undefined, b: JspbEncodingConfig | PlainMessage<JspbEncodingConfig> | undefined): boolean;
}
