import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace conformance. */
export namespace conformance {

    /** WireFormat enum. */
    enum WireFormat {
        UNSPECIFIED = 0,
        PROTOBUF = 1,
        JSON = 2,
        JSPB = 3,
        TEXT_FORMAT = 4
    }

    /** TestCategory enum. */
    enum TestCategory {
        UNSPECIFIED_TEST = 0,
        BINARY_TEST = 1,
        JSON_TEST = 2,
        JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,
        JSPB_TEST = 4,
        TEXT_FORMAT_TEST = 5
    }

    /** Properties of a TestStatus. */
    interface ITestStatus {

        /** TestStatus name */
        name?: (string|null);

        /** TestStatus failureMessage */
        failureMessage?: (string|null);

        /** TestStatus matchedName */
        matchedName?: (string|null);
    }

    /** Represents a TestStatus. */
    class TestStatus implements ITestStatus {

        /**
         * Constructs a new TestStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: conformance.ITestStatus);

        /** TestStatus name. */
        public name: string;

        /** TestStatus failureMessage. */
        public failureMessage: string;

        /** TestStatus matchedName. */
        public matchedName: string;

        /**
         * Creates a new TestStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestStatus instance
         */
        public static create(properties?: conformance.ITestStatus): conformance.TestStatus;

        /**
         * Encodes the specified TestStatus message. Does not implicitly {@link conformance.TestStatus.verify|verify} messages.
         * @param message TestStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conformance.ITestStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestStatus message, length delimited. Does not implicitly {@link conformance.TestStatus.verify|verify} messages.
         * @param message TestStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conformance.ITestStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.TestStatus;

        /**
         * Decodes a TestStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.TestStatus;

        /**
         * Verifies a TestStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestStatus
         */
        public static fromObject(object: { [k: string]: any }): conformance.TestStatus;

        /**
         * Creates a plain object from a TestStatus message. Also converts values to other types if specified.
         * @param message TestStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conformance.TestStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TestStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FailureSet. */
    interface IFailureSet {

        /** FailureSet test */
        test?: (conformance.ITestStatus[]|null);
    }

    /** Represents a FailureSet. */
    class FailureSet implements IFailureSet {

        /**
         * Constructs a new FailureSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: conformance.IFailureSet);

        /** FailureSet test. */
        public test: conformance.ITestStatus[];

        /**
         * Creates a new FailureSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FailureSet instance
         */
        public static create(properties?: conformance.IFailureSet): conformance.FailureSet;

        /**
         * Encodes the specified FailureSet message. Does not implicitly {@link conformance.FailureSet.verify|verify} messages.
         * @param message FailureSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conformance.IFailureSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FailureSet message, length delimited. Does not implicitly {@link conformance.FailureSet.verify|verify} messages.
         * @param message FailureSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conformance.IFailureSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FailureSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FailureSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.FailureSet;

        /**
         * Decodes a FailureSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FailureSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.FailureSet;

        /**
         * Verifies a FailureSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FailureSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FailureSet
         */
        public static fromObject(object: { [k: string]: any }): conformance.FailureSet;

        /**
         * Creates a plain object from a FailureSet message. Also converts values to other types if specified.
         * @param message FailureSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conformance.FailureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FailureSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FailureSet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConformanceRequest. */
    interface IConformanceRequest {

        /** ConformanceRequest protobufPayload */
        protobufPayload?: (Uint8Array|null);

        /** ConformanceRequest jsonPayload */
        jsonPayload?: (string|null);

        /** ConformanceRequest jspbPayload */
        jspbPayload?: (string|null);

        /** ConformanceRequest textPayload */
        textPayload?: (string|null);

        /** ConformanceRequest requestedOutputFormat */
        requestedOutputFormat?: (conformance.WireFormat|null);

        /** ConformanceRequest messageType */
        messageType?: (string|null);

        /** ConformanceRequest testCategory */
        testCategory?: (conformance.TestCategory|null);

        /** ConformanceRequest jspbEncodingOptions */
        jspbEncodingOptions?: (conformance.IJspbEncodingConfig|null);

        /** ConformanceRequest printUnknownFields */
        printUnknownFields?: (boolean|null);
    }

    /** Represents a ConformanceRequest. */
    class ConformanceRequest implements IConformanceRequest {

        /**
         * Constructs a new ConformanceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: conformance.IConformanceRequest);

        /** ConformanceRequest protobufPayload. */
        public protobufPayload?: (Uint8Array|null);

        /** ConformanceRequest jsonPayload. */
        public jsonPayload?: (string|null);

        /** ConformanceRequest jspbPayload. */
        public jspbPayload?: (string|null);

        /** ConformanceRequest textPayload. */
        public textPayload?: (string|null);

        /** ConformanceRequest requestedOutputFormat. */
        public requestedOutputFormat: conformance.WireFormat;

        /** ConformanceRequest messageType. */
        public messageType: string;

        /** ConformanceRequest testCategory. */
        public testCategory: conformance.TestCategory;

        /** ConformanceRequest jspbEncodingOptions. */
        public jspbEncodingOptions?: (conformance.IJspbEncodingConfig|null);

        /** ConformanceRequest printUnknownFields. */
        public printUnknownFields: boolean;

        /** ConformanceRequest payload. */
        public payload?: ("protobufPayload"|"jsonPayload"|"jspbPayload"|"textPayload");

        /**
         * Creates a new ConformanceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConformanceRequest instance
         */
        public static create(properties?: conformance.IConformanceRequest): conformance.ConformanceRequest;

        /**
         * Encodes the specified ConformanceRequest message. Does not implicitly {@link conformance.ConformanceRequest.verify|verify} messages.
         * @param message ConformanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conformance.IConformanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConformanceRequest message, length delimited. Does not implicitly {@link conformance.ConformanceRequest.verify|verify} messages.
         * @param message ConformanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conformance.IConformanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConformanceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConformanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.ConformanceRequest;

        /**
         * Decodes a ConformanceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConformanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.ConformanceRequest;

        /**
         * Verifies a ConformanceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConformanceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConformanceRequest
         */
        public static fromObject(object: { [k: string]: any }): conformance.ConformanceRequest;

        /**
         * Creates a plain object from a ConformanceRequest message. Also converts values to other types if specified.
         * @param message ConformanceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conformance.ConformanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConformanceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConformanceRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConformanceResponse. */
    interface IConformanceResponse {

        /** ConformanceResponse parseError */
        parseError?: (string|null);

        /** ConformanceResponse serializeError */
        serializeError?: (string|null);

        /** ConformanceResponse timeoutError */
        timeoutError?: (string|null);

        /** ConformanceResponse runtimeError */
        runtimeError?: (string|null);

        /** ConformanceResponse protobufPayload */
        protobufPayload?: (Uint8Array|null);

        /** ConformanceResponse jsonPayload */
        jsonPayload?: (string|null);

        /** ConformanceResponse skipped */
        skipped?: (string|null);

        /** ConformanceResponse jspbPayload */
        jspbPayload?: (string|null);

        /** ConformanceResponse textPayload */
        textPayload?: (string|null);
    }

    /** Represents a ConformanceResponse. */
    class ConformanceResponse implements IConformanceResponse {

        /**
         * Constructs a new ConformanceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: conformance.IConformanceResponse);

        /** ConformanceResponse parseError. */
        public parseError?: (string|null);

        /** ConformanceResponse serializeError. */
        public serializeError?: (string|null);

        /** ConformanceResponse timeoutError. */
        public timeoutError?: (string|null);

        /** ConformanceResponse runtimeError. */
        public runtimeError?: (string|null);

        /** ConformanceResponse protobufPayload. */
        public protobufPayload?: (Uint8Array|null);

        /** ConformanceResponse jsonPayload. */
        public jsonPayload?: (string|null);

        /** ConformanceResponse skipped. */
        public skipped?: (string|null);

        /** ConformanceResponse jspbPayload. */
        public jspbPayload?: (string|null);

        /** ConformanceResponse textPayload. */
        public textPayload?: (string|null);

        /** ConformanceResponse result. */
        public result?: ("parseError"|"serializeError"|"timeoutError"|"runtimeError"|"protobufPayload"|"jsonPayload"|"skipped"|"jspbPayload"|"textPayload");

        /**
         * Creates a new ConformanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConformanceResponse instance
         */
        public static create(properties?: conformance.IConformanceResponse): conformance.ConformanceResponse;

        /**
         * Encodes the specified ConformanceResponse message. Does not implicitly {@link conformance.ConformanceResponse.verify|verify} messages.
         * @param message ConformanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conformance.IConformanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConformanceResponse message, length delimited. Does not implicitly {@link conformance.ConformanceResponse.verify|verify} messages.
         * @param message ConformanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conformance.IConformanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConformanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConformanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.ConformanceResponse;

        /**
         * Decodes a ConformanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConformanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.ConformanceResponse;

        /**
         * Verifies a ConformanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConformanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConformanceResponse
         */
        public static fromObject(object: { [k: string]: any }): conformance.ConformanceResponse;

        /**
         * Creates a plain object from a ConformanceResponse message. Also converts values to other types if specified.
         * @param message ConformanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conformance.ConformanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConformanceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConformanceResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JspbEncodingConfig. */
    interface IJspbEncodingConfig {

        /** JspbEncodingConfig useJspbArrayAnyFormat */
        useJspbArrayAnyFormat?: (boolean|null);
    }

    /** Represents a JspbEncodingConfig. */
    class JspbEncodingConfig implements IJspbEncodingConfig {

        /**
         * Constructs a new JspbEncodingConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: conformance.IJspbEncodingConfig);

        /** JspbEncodingConfig useJspbArrayAnyFormat. */
        public useJspbArrayAnyFormat: boolean;

        /**
         * Creates a new JspbEncodingConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JspbEncodingConfig instance
         */
        public static create(properties?: conformance.IJspbEncodingConfig): conformance.JspbEncodingConfig;

        /**
         * Encodes the specified JspbEncodingConfig message. Does not implicitly {@link conformance.JspbEncodingConfig.verify|verify} messages.
         * @param message JspbEncodingConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conformance.IJspbEncodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JspbEncodingConfig message, length delimited. Does not implicitly {@link conformance.JspbEncodingConfig.verify|verify} messages.
         * @param message JspbEncodingConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conformance.IJspbEncodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JspbEncodingConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JspbEncodingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.JspbEncodingConfig;

        /**
         * Decodes a JspbEncodingConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JspbEncodingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.JspbEncodingConfig;

        /**
         * Verifies a JspbEncodingConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JspbEncodingConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JspbEncodingConfig
         */
        public static fromObject(object: { [k: string]: any }): conformance.JspbEncodingConfig;

        /**
         * Creates a plain object from a JspbEncodingConfig message. Also converts values to other types if specified.
         * @param message JspbEncodingConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conformance.JspbEncodingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JspbEncodingConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JspbEncodingConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace protobuf_test_messages. */
export namespace protobuf_test_messages {

    /** Namespace proto3. */
    namespace proto3 {

        /** Properties of a TestAllTypesProto3. */
        interface ITestAllTypesProto3 {

            /** TestAllTypesProto3 optionalInt32 */
            optionalInt32?: (number|null);

            /** TestAllTypesProto3 optionalInt64 */
            optionalInt64?: (number|Long|null);

            /** TestAllTypesProto3 optionalUint32 */
            optionalUint32?: (number|null);

            /** TestAllTypesProto3 optionalUint64 */
            optionalUint64?: (number|Long|null);

            /** TestAllTypesProto3 optionalSint32 */
            optionalSint32?: (number|null);

            /** TestAllTypesProto3 optionalSint64 */
            optionalSint64?: (number|Long|null);

            /** TestAllTypesProto3 optionalFixed32 */
            optionalFixed32?: (number|null);

            /** TestAllTypesProto3 optionalFixed64 */
            optionalFixed64?: (number|Long|null);

            /** TestAllTypesProto3 optionalSfixed32 */
            optionalSfixed32?: (number|null);

            /** TestAllTypesProto3 optionalSfixed64 */
            optionalSfixed64?: (number|Long|null);

            /** TestAllTypesProto3 optionalFloat */
            optionalFloat?: (number|null);

            /** TestAllTypesProto3 optionalDouble */
            optionalDouble?: (number|null);

            /** TestAllTypesProto3 optionalBool */
            optionalBool?: (boolean|null);

            /** TestAllTypesProto3 optionalString */
            optionalString?: (string|null);

            /** TestAllTypesProto3 optionalBytes */
            optionalBytes?: (Uint8Array|null);

            /** TestAllTypesProto3 optionalNestedMessage */
            optionalNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null);

            /** TestAllTypesProto3 optionalForeignMessage */
            optionalForeignMessage?: (protobuf_test_messages.proto3.IForeignMessage|null);

            /** TestAllTypesProto3 optionalNestedEnum */
            optionalNestedEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null);

            /** TestAllTypesProto3 optionalForeignEnum */
            optionalForeignEnum?: (protobuf_test_messages.proto3.ForeignEnum|null);

            /** TestAllTypesProto3 optionalAliasedEnum */
            optionalAliasedEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum|null);

            /** TestAllTypesProto3 optionalStringPiece */
            optionalStringPiece?: (string|null);

            /** TestAllTypesProto3 optionalCord */
            optionalCord?: (string|null);

            /** TestAllTypesProto3 recursiveMessage */
            recursiveMessage?: (protobuf_test_messages.proto3.ITestAllTypesProto3|null);

            /** TestAllTypesProto3 repeatedInt32 */
            repeatedInt32?: (number[]|null);

            /** TestAllTypesProto3 repeatedInt64 */
            repeatedInt64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 repeatedUint32 */
            repeatedUint32?: (number[]|null);

            /** TestAllTypesProto3 repeatedUint64 */
            repeatedUint64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 repeatedSint32 */
            repeatedSint32?: (number[]|null);

            /** TestAllTypesProto3 repeatedSint64 */
            repeatedSint64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 repeatedFixed32 */
            repeatedFixed32?: (number[]|null);

            /** TestAllTypesProto3 repeatedFixed64 */
            repeatedFixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 repeatedSfixed32 */
            repeatedSfixed32?: (number[]|null);

            /** TestAllTypesProto3 repeatedSfixed64 */
            repeatedSfixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 repeatedFloat */
            repeatedFloat?: (number[]|null);

            /** TestAllTypesProto3 repeatedDouble */
            repeatedDouble?: (number[]|null);

            /** TestAllTypesProto3 repeatedBool */
            repeatedBool?: (boolean[]|null);

            /** TestAllTypesProto3 repeatedString */
            repeatedString?: (string[]|null);

            /** TestAllTypesProto3 repeatedBytes */
            repeatedBytes?: (Uint8Array[]|null);

            /** TestAllTypesProto3 repeatedNestedMessage */
            repeatedNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage[]|null);

            /** TestAllTypesProto3 repeatedForeignMessage */
            repeatedForeignMessage?: (protobuf_test_messages.proto3.IForeignMessage[]|null);

            /** TestAllTypesProto3 repeatedNestedEnum */
            repeatedNestedEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[]|null);

            /** TestAllTypesProto3 repeatedForeignEnum */
            repeatedForeignEnum?: (protobuf_test_messages.proto3.ForeignEnum[]|null);

            /** TestAllTypesProto3 repeatedStringPiece */
            repeatedStringPiece?: (string[]|null);

            /** TestAllTypesProto3 repeatedCord */
            repeatedCord?: (string[]|null);

            /** TestAllTypesProto3 packedInt32 */
            packedInt32?: (number[]|null);

            /** TestAllTypesProto3 packedInt64 */
            packedInt64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 packedUint32 */
            packedUint32?: (number[]|null);

            /** TestAllTypesProto3 packedUint64 */
            packedUint64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 packedSint32 */
            packedSint32?: (number[]|null);

            /** TestAllTypesProto3 packedSint64 */
            packedSint64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 packedFixed32 */
            packedFixed32?: (number[]|null);

            /** TestAllTypesProto3 packedFixed64 */
            packedFixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 packedSfixed32 */
            packedSfixed32?: (number[]|null);

            /** TestAllTypesProto3 packedSfixed64 */
            packedSfixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 packedFloat */
            packedFloat?: (number[]|null);

            /** TestAllTypesProto3 packedDouble */
            packedDouble?: (number[]|null);

            /** TestAllTypesProto3 packedBool */
            packedBool?: (boolean[]|null);

            /** TestAllTypesProto3 packedNestedEnum */
            packedNestedEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[]|null);

            /** TestAllTypesProto3 unpackedInt32 */
            unpackedInt32?: (number[]|null);

            /** TestAllTypesProto3 unpackedInt64 */
            unpackedInt64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 unpackedUint32 */
            unpackedUint32?: (number[]|null);

            /** TestAllTypesProto3 unpackedUint64 */
            unpackedUint64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 unpackedSint32 */
            unpackedSint32?: (number[]|null);

            /** TestAllTypesProto3 unpackedSint64 */
            unpackedSint64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 unpackedFixed32 */
            unpackedFixed32?: (number[]|null);

            /** TestAllTypesProto3 unpackedFixed64 */
            unpackedFixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 unpackedSfixed32 */
            unpackedSfixed32?: (number[]|null);

            /** TestAllTypesProto3 unpackedSfixed64 */
            unpackedSfixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto3 unpackedFloat */
            unpackedFloat?: (number[]|null);

            /** TestAllTypesProto3 unpackedDouble */
            unpackedDouble?: (number[]|null);

            /** TestAllTypesProto3 unpackedBool */
            unpackedBool?: (boolean[]|null);

            /** TestAllTypesProto3 unpackedNestedEnum */
            unpackedNestedEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[]|null);

            /** TestAllTypesProto3 mapInt32Int32 */
            mapInt32Int32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapInt64Int64 */
            mapInt64Int64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto3 mapUint32Uint32 */
            mapUint32Uint32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapUint64Uint64 */
            mapUint64Uint64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto3 mapSint32Sint32 */
            mapSint32Sint32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapSint64Sint64 */
            mapSint64Sint64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto3 mapFixed32Fixed32 */
            mapFixed32Fixed32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapFixed64Fixed64 */
            mapFixed64Fixed64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto3 mapSfixed32Sfixed32 */
            mapSfixed32Sfixed32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapSfixed64Sfixed64 */
            mapSfixed64Sfixed64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto3 mapInt32Float */
            mapInt32Float?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapInt32Double */
            mapInt32Double?: ({ [k: string]: number }|null);

            /** TestAllTypesProto3 mapBoolBool */
            mapBoolBool?: ({ [k: string]: boolean }|null);

            /** TestAllTypesProto3 mapStringString */
            mapStringString?: ({ [k: string]: string }|null);

            /** TestAllTypesProto3 mapStringBytes */
            mapStringBytes?: ({ [k: string]: Uint8Array }|null);

            /** TestAllTypesProto3 mapStringNestedMessage */
            mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage }|null);

            /** TestAllTypesProto3 mapStringForeignMessage */
            mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.proto3.IForeignMessage }|null);

            /** TestAllTypesProto3 mapStringNestedEnum */
            mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum }|null);

            /** TestAllTypesProto3 mapStringForeignEnum */
            mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.proto3.ForeignEnum }|null);

            /** TestAllTypesProto3 oneofUint32 */
            oneofUint32?: (number|null);

            /** TestAllTypesProto3 oneofNestedMessage */
            oneofNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null);

            /** TestAllTypesProto3 oneofString */
            oneofString?: (string|null);

            /** TestAllTypesProto3 oneofBytes */
            oneofBytes?: (Uint8Array|null);

            /** TestAllTypesProto3 oneofBool */
            oneofBool?: (boolean|null);

            /** TestAllTypesProto3 oneofUint64 */
            oneofUint64?: (number|Long|null);

            /** TestAllTypesProto3 oneofFloat */
            oneofFloat?: (number|null);

            /** TestAllTypesProto3 oneofDouble */
            oneofDouble?: (number|null);

            /** TestAllTypesProto3 oneofEnum */
            oneofEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null);

            /** TestAllTypesProto3 oneofNullValue */
            oneofNullValue?: (google.protobuf.NullValue|null);

            /** TestAllTypesProto3 optionalBoolWrapper */
            optionalBoolWrapper?: (google.protobuf.IBoolValue|null);

            /** TestAllTypesProto3 optionalInt32Wrapper */
            optionalInt32Wrapper?: (google.protobuf.IInt32Value|null);

            /** TestAllTypesProto3 optionalInt64Wrapper */
            optionalInt64Wrapper?: (google.protobuf.IInt64Value|null);

            /** TestAllTypesProto3 optionalUint32Wrapper */
            optionalUint32Wrapper?: (google.protobuf.IUInt32Value|null);

            /** TestAllTypesProto3 optionalUint64Wrapper */
            optionalUint64Wrapper?: (google.protobuf.IUInt64Value|null);

            /** TestAllTypesProto3 optionalFloatWrapper */
            optionalFloatWrapper?: (google.protobuf.IFloatValue|null);

            /** TestAllTypesProto3 optionalDoubleWrapper */
            optionalDoubleWrapper?: (google.protobuf.IDoubleValue|null);

            /** TestAllTypesProto3 optionalStringWrapper */
            optionalStringWrapper?: (google.protobuf.IStringValue|null);

            /** TestAllTypesProto3 optionalBytesWrapper */
            optionalBytesWrapper?: (google.protobuf.IBytesValue|null);

            /** TestAllTypesProto3 repeatedBoolWrapper */
            repeatedBoolWrapper?: (google.protobuf.IBoolValue[]|null);

            /** TestAllTypesProto3 repeatedInt32Wrapper */
            repeatedInt32Wrapper?: (google.protobuf.IInt32Value[]|null);

            /** TestAllTypesProto3 repeatedInt64Wrapper */
            repeatedInt64Wrapper?: (google.protobuf.IInt64Value[]|null);

            /** TestAllTypesProto3 repeatedUint32Wrapper */
            repeatedUint32Wrapper?: (google.protobuf.IUInt32Value[]|null);

            /** TestAllTypesProto3 repeatedUint64Wrapper */
            repeatedUint64Wrapper?: (google.protobuf.IUInt64Value[]|null);

            /** TestAllTypesProto3 repeatedFloatWrapper */
            repeatedFloatWrapper?: (google.protobuf.IFloatValue[]|null);

            /** TestAllTypesProto3 repeatedDoubleWrapper */
            repeatedDoubleWrapper?: (google.protobuf.IDoubleValue[]|null);

            /** TestAllTypesProto3 repeatedStringWrapper */
            repeatedStringWrapper?: (google.protobuf.IStringValue[]|null);

            /** TestAllTypesProto3 repeatedBytesWrapper */
            repeatedBytesWrapper?: (google.protobuf.IBytesValue[]|null);

            /** TestAllTypesProto3 optionalDuration */
            optionalDuration?: (google.protobuf.IDuration|null);

            /** TestAllTypesProto3 optionalTimestamp */
            optionalTimestamp?: (google.protobuf.ITimestamp|null);

            /** TestAllTypesProto3 optionalFieldMask */
            optionalFieldMask?: (google.protobuf.IFieldMask|null);

            /** TestAllTypesProto3 optionalStruct */
            optionalStruct?: (google.protobuf.IStruct|null);

            /** TestAllTypesProto3 optionalAny */
            optionalAny?: (google.protobuf.IAny|null);

            /** TestAllTypesProto3 optionalValue */
            optionalValue?: (google.protobuf.IValue|null);

            /** TestAllTypesProto3 optionalNullValue */
            optionalNullValue?: (google.protobuf.NullValue|null);

            /** TestAllTypesProto3 repeatedDuration */
            repeatedDuration?: (google.protobuf.IDuration[]|null);

            /** TestAllTypesProto3 repeatedTimestamp */
            repeatedTimestamp?: (google.protobuf.ITimestamp[]|null);

            /** TestAllTypesProto3 repeatedFieldmask */
            repeatedFieldmask?: (google.protobuf.IFieldMask[]|null);

            /** TestAllTypesProto3 repeatedStruct */
            repeatedStruct?: (google.protobuf.IStruct[]|null);

            /** TestAllTypesProto3 repeatedAny */
            repeatedAny?: (google.protobuf.IAny[]|null);

            /** TestAllTypesProto3 repeatedValue */
            repeatedValue?: (google.protobuf.IValue[]|null);

            /** TestAllTypesProto3 repeatedListValue */
            repeatedListValue?: (google.protobuf.IListValue[]|null);

            /** TestAllTypesProto3 fieldname1 */
            fieldname1?: (number|null);

            /** TestAllTypesProto3 fieldName2 */
            fieldName2?: (number|null);

            /** TestAllTypesProto3 _fieldName3 */
            _fieldName3?: (number|null);

            /** TestAllTypesProto3 field_Name4_ */
            field_Name4_?: (number|null);

            /** TestAllTypesProto3 field0name5 */
            field0name5?: (number|null);

            /** TestAllTypesProto3 field_0Name6 */
            field_0Name6?: (number|null);

            /** TestAllTypesProto3 fieldName7 */
            fieldName7?: (number|null);

            /** TestAllTypesProto3 FieldName8 */
            FieldName8?: (number|null);

            /** TestAllTypesProto3 field_Name9 */
            field_Name9?: (number|null);

            /** TestAllTypesProto3 Field_Name10 */
            Field_Name10?: (number|null);

            /** TestAllTypesProto3 FIELD_NAME11 */
            FIELD_NAME11?: (number|null);

            /** TestAllTypesProto3 FIELDName12 */
            FIELDName12?: (number|null);

            /** TestAllTypesProto3 _FieldName13 */
            _FieldName13?: (number|null);

            /** TestAllTypesProto3 __FieldName14 */
            __FieldName14?: (number|null);

            /** TestAllTypesProto3 field_Name15 */
            field_Name15?: (number|null);

            /** TestAllTypesProto3 field__Name16 */
            field__Name16?: (number|null);

            /** TestAllTypesProto3 fieldName17__ */
            fieldName17__?: (number|null);

            /** TestAllTypesProto3 FieldName18__ */
            FieldName18__?: (number|null);
        }

        /** Represents a TestAllTypesProto3. */
        class TestAllTypesProto3 implements ITestAllTypesProto3 {

            /**
             * Constructs a new TestAllTypesProto3.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto3.ITestAllTypesProto3);

            /** TestAllTypesProto3 optionalInt32. */
            public optionalInt32: number;

            /** TestAllTypesProto3 optionalInt64. */
            public optionalInt64: (number|Long);

            /** TestAllTypesProto3 optionalUint32. */
            public optionalUint32: number;

            /** TestAllTypesProto3 optionalUint64. */
            public optionalUint64: (number|Long);

            /** TestAllTypesProto3 optionalSint32. */
            public optionalSint32: number;

            /** TestAllTypesProto3 optionalSint64. */
            public optionalSint64: (number|Long);

            /** TestAllTypesProto3 optionalFixed32. */
            public optionalFixed32: number;

            /** TestAllTypesProto3 optionalFixed64. */
            public optionalFixed64: (number|Long);

            /** TestAllTypesProto3 optionalSfixed32. */
            public optionalSfixed32: number;

            /** TestAllTypesProto3 optionalSfixed64. */
            public optionalSfixed64: (number|Long);

            /** TestAllTypesProto3 optionalFloat. */
            public optionalFloat: number;

            /** TestAllTypesProto3 optionalDouble. */
            public optionalDouble: number;

            /** TestAllTypesProto3 optionalBool. */
            public optionalBool: boolean;

            /** TestAllTypesProto3 optionalString. */
            public optionalString: string;

            /** TestAllTypesProto3 optionalBytes. */
            public optionalBytes: Uint8Array;

            /** TestAllTypesProto3 optionalNestedMessage. */
            public optionalNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null);

            /** TestAllTypesProto3 optionalForeignMessage. */
            public optionalForeignMessage?: (protobuf_test_messages.proto3.IForeignMessage|null);

            /** TestAllTypesProto3 optionalNestedEnum. */
            public optionalNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum;

            /** TestAllTypesProto3 optionalForeignEnum. */
            public optionalForeignEnum: protobuf_test_messages.proto3.ForeignEnum;

            /** TestAllTypesProto3 optionalAliasedEnum. */
            public optionalAliasedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum;

            /** TestAllTypesProto3 optionalStringPiece. */
            public optionalStringPiece: string;

            /** TestAllTypesProto3 optionalCord. */
            public optionalCord: string;

            /** TestAllTypesProto3 recursiveMessage. */
            public recursiveMessage?: (protobuf_test_messages.proto3.ITestAllTypesProto3|null);

            /** TestAllTypesProto3 repeatedInt32. */
            public repeatedInt32: number[];

            /** TestAllTypesProto3 repeatedInt64. */
            public repeatedInt64: (number|Long)[];

            /** TestAllTypesProto3 repeatedUint32. */
            public repeatedUint32: number[];

            /** TestAllTypesProto3 repeatedUint64. */
            public repeatedUint64: (number|Long)[];

            /** TestAllTypesProto3 repeatedSint32. */
            public repeatedSint32: number[];

            /** TestAllTypesProto3 repeatedSint64. */
            public repeatedSint64: (number|Long)[];

            /** TestAllTypesProto3 repeatedFixed32. */
            public repeatedFixed32: number[];

            /** TestAllTypesProto3 repeatedFixed64. */
            public repeatedFixed64: (number|Long)[];

            /** TestAllTypesProto3 repeatedSfixed32. */
            public repeatedSfixed32: number[];

            /** TestAllTypesProto3 repeatedSfixed64. */
            public repeatedSfixed64: (number|Long)[];

            /** TestAllTypesProto3 repeatedFloat. */
            public repeatedFloat: number[];

            /** TestAllTypesProto3 repeatedDouble. */
            public repeatedDouble: number[];

            /** TestAllTypesProto3 repeatedBool. */
            public repeatedBool: boolean[];

            /** TestAllTypesProto3 repeatedString. */
            public repeatedString: string[];

            /** TestAllTypesProto3 repeatedBytes. */
            public repeatedBytes: Uint8Array[];

            /** TestAllTypesProto3 repeatedNestedMessage. */
            public repeatedNestedMessage: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage[];

            /** TestAllTypesProto3 repeatedForeignMessage. */
            public repeatedForeignMessage: protobuf_test_messages.proto3.IForeignMessage[];

            /** TestAllTypesProto3 repeatedNestedEnum. */
            public repeatedNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[];

            /** TestAllTypesProto3 repeatedForeignEnum. */
            public repeatedForeignEnum: protobuf_test_messages.proto3.ForeignEnum[];

            /** TestAllTypesProto3 repeatedStringPiece. */
            public repeatedStringPiece: string[];

            /** TestAllTypesProto3 repeatedCord. */
            public repeatedCord: string[];

            /** TestAllTypesProto3 packedInt32. */
            public packedInt32: number[];

            /** TestAllTypesProto3 packedInt64. */
            public packedInt64: (number|Long)[];

            /** TestAllTypesProto3 packedUint32. */
            public packedUint32: number[];

            /** TestAllTypesProto3 packedUint64. */
            public packedUint64: (number|Long)[];

            /** TestAllTypesProto3 packedSint32. */
            public packedSint32: number[];

            /** TestAllTypesProto3 packedSint64. */
            public packedSint64: (number|Long)[];

            /** TestAllTypesProto3 packedFixed32. */
            public packedFixed32: number[];

            /** TestAllTypesProto3 packedFixed64. */
            public packedFixed64: (number|Long)[];

            /** TestAllTypesProto3 packedSfixed32. */
            public packedSfixed32: number[];

            /** TestAllTypesProto3 packedSfixed64. */
            public packedSfixed64: (number|Long)[];

            /** TestAllTypesProto3 packedFloat. */
            public packedFloat: number[];

            /** TestAllTypesProto3 packedDouble. */
            public packedDouble: number[];

            /** TestAllTypesProto3 packedBool. */
            public packedBool: boolean[];

            /** TestAllTypesProto3 packedNestedEnum. */
            public packedNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[];

            /** TestAllTypesProto3 unpackedInt32. */
            public unpackedInt32: number[];

            /** TestAllTypesProto3 unpackedInt64. */
            public unpackedInt64: (number|Long)[];

            /** TestAllTypesProto3 unpackedUint32. */
            public unpackedUint32: number[];

            /** TestAllTypesProto3 unpackedUint64. */
            public unpackedUint64: (number|Long)[];

            /** TestAllTypesProto3 unpackedSint32. */
            public unpackedSint32: number[];

            /** TestAllTypesProto3 unpackedSint64. */
            public unpackedSint64: (number|Long)[];

            /** TestAllTypesProto3 unpackedFixed32. */
            public unpackedFixed32: number[];

            /** TestAllTypesProto3 unpackedFixed64. */
            public unpackedFixed64: (number|Long)[];

            /** TestAllTypesProto3 unpackedSfixed32. */
            public unpackedSfixed32: number[];

            /** TestAllTypesProto3 unpackedSfixed64. */
            public unpackedSfixed64: (number|Long)[];

            /** TestAllTypesProto3 unpackedFloat. */
            public unpackedFloat: number[];

            /** TestAllTypesProto3 unpackedDouble. */
            public unpackedDouble: number[];

            /** TestAllTypesProto3 unpackedBool. */
            public unpackedBool: boolean[];

            /** TestAllTypesProto3 unpackedNestedEnum. */
            public unpackedNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[];

            /** TestAllTypesProto3 mapInt32Int32. */
            public mapInt32Int32: { [k: string]: number };

            /** TestAllTypesProto3 mapInt64Int64. */
            public mapInt64Int64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapUint32Uint32. */
            public mapUint32Uint32: { [k: string]: number };

            /** TestAllTypesProto3 mapUint64Uint64. */
            public mapUint64Uint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapSint32Sint32. */
            public mapSint32Sint32: { [k: string]: number };

            /** TestAllTypesProto3 mapSint64Sint64. */
            public mapSint64Sint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapFixed32Fixed32. */
            public mapFixed32Fixed32: { [k: string]: number };

            /** TestAllTypesProto3 mapFixed64Fixed64. */
            public mapFixed64Fixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapSfixed32Sfixed32. */
            public mapSfixed32Sfixed32: { [k: string]: number };

            /** TestAllTypesProto3 mapSfixed64Sfixed64. */
            public mapSfixed64Sfixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapInt32Float. */
            public mapInt32Float: { [k: string]: number };

            /** TestAllTypesProto3 mapInt32Double. */
            public mapInt32Double: { [k: string]: number };

            /** TestAllTypesProto3 mapBoolBool. */
            public mapBoolBool: { [k: string]: boolean };

            /** TestAllTypesProto3 mapStringString. */
            public mapStringString: { [k: string]: string };

            /** TestAllTypesProto3 mapStringBytes. */
            public mapStringBytes: { [k: string]: Uint8Array };

            /** TestAllTypesProto3 mapStringNestedMessage. */
            public mapStringNestedMessage: { [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage };

            /** TestAllTypesProto3 mapStringForeignMessage. */
            public mapStringForeignMessage: { [k: string]: protobuf_test_messages.proto3.IForeignMessage };

            /** TestAllTypesProto3 mapStringNestedEnum. */
            public mapStringNestedEnum: { [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum };

            /** TestAllTypesProto3 mapStringForeignEnum. */
            public mapStringForeignEnum: { [k: string]: protobuf_test_messages.proto3.ForeignEnum };

            /** TestAllTypesProto3 oneofUint32. */
            public oneofUint32?: (number|null);

            /** TestAllTypesProto3 oneofNestedMessage. */
            public oneofNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null);

            /** TestAllTypesProto3 oneofString. */
            public oneofString?: (string|null);

            /** TestAllTypesProto3 oneofBytes. */
            public oneofBytes?: (Uint8Array|null);

            /** TestAllTypesProto3 oneofBool. */
            public oneofBool?: (boolean|null);

            /** TestAllTypesProto3 oneofUint64. */
            public oneofUint64?: (number|Long|null);

            /** TestAllTypesProto3 oneofFloat. */
            public oneofFloat?: (number|null);

            /** TestAllTypesProto3 oneofDouble. */
            public oneofDouble?: (number|null);

            /** TestAllTypesProto3 oneofEnum. */
            public oneofEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null);

            /** TestAllTypesProto3 oneofNullValue. */
            public oneofNullValue?: (google.protobuf.NullValue|null);

            /** TestAllTypesProto3 optionalBoolWrapper. */
            public optionalBoolWrapper?: (google.protobuf.IBoolValue|null);

            /** TestAllTypesProto3 optionalInt32Wrapper. */
            public optionalInt32Wrapper?: (google.protobuf.IInt32Value|null);

            /** TestAllTypesProto3 optionalInt64Wrapper. */
            public optionalInt64Wrapper?: (google.protobuf.IInt64Value|null);

            /** TestAllTypesProto3 optionalUint32Wrapper. */
            public optionalUint32Wrapper?: (google.protobuf.IUInt32Value|null);

            /** TestAllTypesProto3 optionalUint64Wrapper. */
            public optionalUint64Wrapper?: (google.protobuf.IUInt64Value|null);

            /** TestAllTypesProto3 optionalFloatWrapper. */
            public optionalFloatWrapper?: (google.protobuf.IFloatValue|null);

            /** TestAllTypesProto3 optionalDoubleWrapper. */
            public optionalDoubleWrapper?: (google.protobuf.IDoubleValue|null);

            /** TestAllTypesProto3 optionalStringWrapper. */
            public optionalStringWrapper?: (google.protobuf.IStringValue|null);

            /** TestAllTypesProto3 optionalBytesWrapper. */
            public optionalBytesWrapper?: (google.protobuf.IBytesValue|null);

            /** TestAllTypesProto3 repeatedBoolWrapper. */
            public repeatedBoolWrapper: google.protobuf.IBoolValue[];

            /** TestAllTypesProto3 repeatedInt32Wrapper. */
            public repeatedInt32Wrapper: google.protobuf.IInt32Value[];

            /** TestAllTypesProto3 repeatedInt64Wrapper. */
            public repeatedInt64Wrapper: google.protobuf.IInt64Value[];

            /** TestAllTypesProto3 repeatedUint32Wrapper. */
            public repeatedUint32Wrapper: google.protobuf.IUInt32Value[];

            /** TestAllTypesProto3 repeatedUint64Wrapper. */
            public repeatedUint64Wrapper: google.protobuf.IUInt64Value[];

            /** TestAllTypesProto3 repeatedFloatWrapper. */
            public repeatedFloatWrapper: google.protobuf.IFloatValue[];

            /** TestAllTypesProto3 repeatedDoubleWrapper. */
            public repeatedDoubleWrapper: google.protobuf.IDoubleValue[];

            /** TestAllTypesProto3 repeatedStringWrapper. */
            public repeatedStringWrapper: google.protobuf.IStringValue[];

            /** TestAllTypesProto3 repeatedBytesWrapper. */
            public repeatedBytesWrapper: google.protobuf.IBytesValue[];

            /** TestAllTypesProto3 optionalDuration. */
            public optionalDuration?: (google.protobuf.IDuration|null);

            /** TestAllTypesProto3 optionalTimestamp. */
            public optionalTimestamp?: (google.protobuf.ITimestamp|null);

            /** TestAllTypesProto3 optionalFieldMask. */
            public optionalFieldMask?: (google.protobuf.IFieldMask|null);

            /** TestAllTypesProto3 optionalStruct. */
            public optionalStruct?: (google.protobuf.IStruct|null);

            /** TestAllTypesProto3 optionalAny. */
            public optionalAny?: (google.protobuf.IAny|null);

            /** TestAllTypesProto3 optionalValue. */
            public optionalValue?: (google.protobuf.IValue|null);

            /** TestAllTypesProto3 optionalNullValue. */
            public optionalNullValue: google.protobuf.NullValue;

            /** TestAllTypesProto3 repeatedDuration. */
            public repeatedDuration: google.protobuf.IDuration[];

            /** TestAllTypesProto3 repeatedTimestamp. */
            public repeatedTimestamp: google.protobuf.ITimestamp[];

            /** TestAllTypesProto3 repeatedFieldmask. */
            public repeatedFieldmask: google.protobuf.IFieldMask[];

            /** TestAllTypesProto3 repeatedStruct. */
            public repeatedStruct: google.protobuf.IStruct[];

            /** TestAllTypesProto3 repeatedAny. */
            public repeatedAny: google.protobuf.IAny[];

            /** TestAllTypesProto3 repeatedValue. */
            public repeatedValue: google.protobuf.IValue[];

            /** TestAllTypesProto3 repeatedListValue. */
            public repeatedListValue: google.protobuf.IListValue[];

            /** TestAllTypesProto3 fieldname1. */
            public fieldname1: number;

            /** TestAllTypesProto3 fieldName2. */
            public fieldName2: number;

            /** TestAllTypesProto3 _fieldName3. */
            public _fieldName3: number;

            /** TestAllTypesProto3 field_Name4_. */
            public field_Name4_: number;

            /** TestAllTypesProto3 field0name5. */
            public field0name5: number;

            /** TestAllTypesProto3 field_0Name6. */
            public field_0Name6: number;

            /** TestAllTypesProto3 fieldName7. */
            public fieldName7: number;

            /** TestAllTypesProto3 FieldName8. */
            public FieldName8: number;

            /** TestAllTypesProto3 field_Name9. */
            public field_Name9: number;

            /** TestAllTypesProto3 Field_Name10. */
            public Field_Name10: number;

            /** TestAllTypesProto3 FIELD_NAME11. */
            public FIELD_NAME11: number;

            /** TestAllTypesProto3 FIELDName12. */
            public FIELDName12: number;

            /** TestAllTypesProto3 _FieldName13. */
            public _FieldName13: number;

            /** TestAllTypesProto3 __FieldName14. */
            public __FieldName14: number;

            /** TestAllTypesProto3 field_Name15. */
            public field_Name15: number;

            /** TestAllTypesProto3 field__Name16. */
            public field__Name16: number;

            /** TestAllTypesProto3 fieldName17__. */
            public fieldName17__: number;

            /** TestAllTypesProto3 FieldName18__. */
            public FieldName18__: number;

            /** TestAllTypesProto3 oneofField. */
            public oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|"oneofNullValue");

            /**
             * Creates a new TestAllTypesProto3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestAllTypesProto3 instance
             */
            public static create(properties?: protobuf_test_messages.proto3.ITestAllTypesProto3): protobuf_test_messages.proto3.TestAllTypesProto3;

            /**
             * Encodes the specified TestAllTypesProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.verify|verify} messages.
             * @param message TestAllTypesProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto3.ITestAllTypesProto3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestAllTypesProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.verify|verify} messages.
             * @param message TestAllTypesProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto3.ITestAllTypesProto3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestAllTypesProto3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestAllTypesProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.TestAllTypesProto3;

            /**
             * Decodes a TestAllTypesProto3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestAllTypesProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.TestAllTypesProto3;

            /**
             * Verifies a TestAllTypesProto3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestAllTypesProto3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestAllTypesProto3
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.TestAllTypesProto3;

            /**
             * Creates a plain object from a TestAllTypesProto3 message. Also converts values to other types if specified.
             * @param message TestAllTypesProto3
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto3.TestAllTypesProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestAllTypesProto3 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TestAllTypesProto3
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace TestAllTypesProto3 {

            /** Properties of a NestedMessage. */
            interface INestedMessage {

                /** NestedMessage a */
                a?: (number|null);

                /** NestedMessage corecursive */
                corecursive?: (protobuf_test_messages.proto3.ITestAllTypesProto3|null);
            }

            /** Represents a NestedMessage. */
            class NestedMessage implements INestedMessage {

                /**
                 * Constructs a new NestedMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage);

                /** NestedMessage a. */
                public a: number;

                /** NestedMessage corecursive. */
                public corecursive?: (protobuf_test_messages.proto3.ITestAllTypesProto3|null);

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedMessage instance
                 */
                public static create(properties?: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;

                /**
                 * Verifies a NestedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedMessage
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @param message NestedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NestedMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** NestedEnum enum. */
            enum NestedEnum {
                FOO = 0,
                BAR = 1,
                BAZ = 2,
                NEG = -1
            }

            /** AliasedEnum enum. */
            enum AliasedEnum {
                ALIAS_FOO = 0,
                ALIAS_BAR = 1,
                ALIAS_BAZ = 2,
                MOO = 2,
                moo = 2,
                bAz = 2
            }
        }

        /** Properties of a ForeignMessage. */
        interface IForeignMessage {

            /** ForeignMessage c */
            c?: (number|null);
        }

        /** Represents a ForeignMessage. */
        class ForeignMessage implements IForeignMessage {

            /**
             * Constructs a new ForeignMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto3.IForeignMessage);

            /** ForeignMessage c. */
            public c: number;

            /**
             * Creates a new ForeignMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForeignMessage instance
             */
            public static create(properties?: protobuf_test_messages.proto3.IForeignMessage): protobuf_test_messages.proto3.ForeignMessage;

            /**
             * Encodes the specified ForeignMessage message. Does not implicitly {@link protobuf_test_messages.proto3.ForeignMessage.verify|verify} messages.
             * @param message ForeignMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto3.IForeignMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForeignMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.ForeignMessage.verify|verify} messages.
             * @param message ForeignMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto3.IForeignMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForeignMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForeignMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.ForeignMessage;

            /**
             * Decodes a ForeignMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForeignMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.ForeignMessage;

            /**
             * Verifies a ForeignMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForeignMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForeignMessage
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.ForeignMessage;

            /**
             * Creates a plain object from a ForeignMessage message. Also converts values to other types if specified.
             * @param message ForeignMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto3.ForeignMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForeignMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ForeignMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** ForeignEnum enum. */
        enum ForeignEnum {
            FOREIGN_FOO = 0,
            FOREIGN_BAR = 1,
            FOREIGN_BAZ = 2
        }

        /** Properties of a NullHypothesisProto3. */
        interface INullHypothesisProto3 {
        }

        /** Represents a NullHypothesisProto3. */
        class NullHypothesisProto3 implements INullHypothesisProto3 {

            /**
             * Constructs a new NullHypothesisProto3.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto3.INullHypothesisProto3);

            /**
             * Creates a new NullHypothesisProto3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullHypothesisProto3 instance
             */
            public static create(properties?: protobuf_test_messages.proto3.INullHypothesisProto3): protobuf_test_messages.proto3.NullHypothesisProto3;

            /**
             * Encodes the specified NullHypothesisProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.NullHypothesisProto3.verify|verify} messages.
             * @param message NullHypothesisProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto3.INullHypothesisProto3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullHypothesisProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.NullHypothesisProto3.verify|verify} messages.
             * @param message NullHypothesisProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto3.INullHypothesisProto3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullHypothesisProto3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullHypothesisProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.NullHypothesisProto3;

            /**
             * Decodes a NullHypothesisProto3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullHypothesisProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.NullHypothesisProto3;

            /**
             * Verifies a NullHypothesisProto3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullHypothesisProto3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullHypothesisProto3
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.NullHypothesisProto3;

            /**
             * Creates a plain object from a NullHypothesisProto3 message. Also converts values to other types if specified.
             * @param message NullHypothesisProto3
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto3.NullHypothesisProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullHypothesisProto3 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullHypothesisProto3
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOnlyProto3. */
        interface IEnumOnlyProto3 {
        }

        /** Represents an EnumOnlyProto3. */
        class EnumOnlyProto3 implements IEnumOnlyProto3 {

            /**
             * Constructs a new EnumOnlyProto3.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto3.IEnumOnlyProto3);

            /**
             * Creates a new EnumOnlyProto3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOnlyProto3 instance
             */
            public static create(properties?: protobuf_test_messages.proto3.IEnumOnlyProto3): protobuf_test_messages.proto3.EnumOnlyProto3;

            /**
             * Encodes the specified EnumOnlyProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.EnumOnlyProto3.verify|verify} messages.
             * @param message EnumOnlyProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto3.IEnumOnlyProto3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOnlyProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.EnumOnlyProto3.verify|verify} messages.
             * @param message EnumOnlyProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto3.IEnumOnlyProto3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOnlyProto3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOnlyProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.EnumOnlyProto3;

            /**
             * Decodes an EnumOnlyProto3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOnlyProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.EnumOnlyProto3;

            /**
             * Verifies an EnumOnlyProto3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOnlyProto3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOnlyProto3
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.EnumOnlyProto3;

            /**
             * Creates a plain object from an EnumOnlyProto3 message. Also converts values to other types if specified.
             * @param message EnumOnlyProto3
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto3.EnumOnlyProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOnlyProto3 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOnlyProto3
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumOnlyProto3 {

            /** Bool enum. */
            enum Bool {
                kFalse = 0,
                kTrue = 1
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
