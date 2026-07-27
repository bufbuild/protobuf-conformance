import * as $protobuf from "protobufjs/light.js";
import Long = require("long");

/** Namespace conformance. */
export namespace conformance {

    /**
     * Properties of a TestStatus.
     * @deprecated Use conformance.TestStatus.$Properties instead.
     */
    interface ITestStatus extends conformance.TestStatus.$Properties {
    }

    /** Represents a TestStatus. */
    class TestStatus {

        /** Reflection-backed declarations are not constructable. Use TestStatus.create(...) instead. */
        private constructor();

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TestStatus name. */
        name: string;

        /** TestStatus failureMessage. */
        failureMessage: string;

        /** TestStatus matchedName. */
        matchedName: string;

        /**
         * Creates a new TestStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestStatus instance
         */
        static create(properties: conformance.TestStatus.$Shape): conformance.TestStatus & conformance.TestStatus.$Shape;
        static create(properties?: conformance.TestStatus.$Properties): conformance.TestStatus;

        /**
         * Encodes the specified TestStatus message. Does not implicitly {@link conformance.TestStatus.verify|verify} messages.
         * @param message TestStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: conformance.TestStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestStatus message, length delimited. Does not implicitly {@link conformance.TestStatus.verify|verify} messages.
         * @param message TestStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: conformance.TestStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {conformance.TestStatus & conformance.TestStatus.$Shape} TestStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.TestStatus & conformance.TestStatus.$Shape;

        /**
         * Decodes a TestStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {conformance.TestStatus & conformance.TestStatus.$Shape} TestStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.TestStatus & conformance.TestStatus.$Shape;

        /**
         * Verifies a TestStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestStatus
         */
        static fromObject(object: { [k: string]: any }): conformance.TestStatus;

        /**
         * Creates a plain object from a TestStatus message. Also converts values to other types if specified.
         * @param message TestStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: conformance.TestStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TestStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TestStatus {

        /** Properties of a TestStatus. */
        interface $Properties {

            /** TestStatus name */
            name?: (string|null);

            /** TestStatus failureMessage */
            failureMessage?: (string|null);

            /** TestStatus matchedName */
            matchedName?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TestStatus. */
        type $Shape = conformance.TestStatus.$Properties;
    }

    /**
     * Properties of a FailureSet.
     * @deprecated Use conformance.FailureSet.$Properties instead.
     */
    interface IFailureSet extends conformance.FailureSet.$Properties {
    }

    /** Represents a FailureSet. */
    class FailureSet {

        /** Reflection-backed declarations are not constructable. Use FailureSet.create(...) instead. */
        private constructor();

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** FailureSet test. */
        test: conformance.TestStatus.$Properties[];

        /**
         * Creates a new FailureSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FailureSet instance
         */
        static create(properties: conformance.FailureSet.$Shape): conformance.FailureSet & conformance.FailureSet.$Shape;
        static create(properties?: conformance.FailureSet.$Properties): conformance.FailureSet;

        /**
         * Encodes the specified FailureSet message. Does not implicitly {@link conformance.FailureSet.verify|verify} messages.
         * @param message FailureSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: conformance.FailureSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FailureSet message, length delimited. Does not implicitly {@link conformance.FailureSet.verify|verify} messages.
         * @param message FailureSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: conformance.FailureSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FailureSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {conformance.FailureSet & conformance.FailureSet.$Shape} FailureSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.FailureSet & conformance.FailureSet.$Shape;

        /**
         * Decodes a FailureSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {conformance.FailureSet & conformance.FailureSet.$Shape} FailureSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.FailureSet & conformance.FailureSet.$Shape;

        /**
         * Verifies a FailureSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FailureSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FailureSet
         */
        static fromObject(object: { [k: string]: any }): conformance.FailureSet;

        /**
         * Creates a plain object from a FailureSet message. Also converts values to other types if specified.
         * @param message FailureSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: conformance.FailureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FailureSet to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FailureSet
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FailureSet {

        /** Properties of a FailureSet. */
        interface $Properties {

            /** FailureSet test */
            test?: (conformance.TestStatus.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a FailureSet. */
        type $Shape = conformance.FailureSet.$Properties;
    }

    /**
     * Properties of a ConformanceRequest.
     * @deprecated Use conformance.ConformanceRequest.$Properties instead.
     */
    interface IConformanceRequest extends conformance.ConformanceRequest.$Properties {
    }

    /** Represents a ConformanceRequest. */
    class ConformanceRequest {

        /** Reflection-backed declarations are not constructable. Use ConformanceRequest.create(...) instead. */
        private constructor();

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ConformanceRequest protobufPayload. */
        protobufPayload?: (Uint8Array|null);

        /** ConformanceRequest jsonPayload. */
        jsonPayload?: (string|null);

        /** ConformanceRequest jspbPayload. */
        jspbPayload?: (string|null);

        /** ConformanceRequest textPayload. */
        textPayload?: (string|null);

        /** ConformanceRequest requestedOutputFormat. */
        requestedOutputFormat: conformance.WireFormat;

        /** ConformanceRequest messageType. */
        messageType: string;

        /** ConformanceRequest testCategory. */
        testCategory: conformance.TestCategory;

        /** ConformanceRequest jspbEncodingOptions. */
        jspbEncodingOptions?: (conformance.JspbEncodingConfig.$Properties|null);

        /** ConformanceRequest printUnknownFields. */
        printUnknownFields: boolean;

        /** ConformanceRequest payload. */
        payload?: ("protobufPayload"|"jsonPayload"|"jspbPayload"|"textPayload");

        /**
         * Creates a new ConformanceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConformanceRequest instance
         */
        static create(properties: conformance.ConformanceRequest.$Shape): conformance.ConformanceRequest & conformance.ConformanceRequest.$Shape;
        static create(properties?: conformance.ConformanceRequest.$Properties): conformance.ConformanceRequest;

        /**
         * Encodes the specified ConformanceRequest message. Does not implicitly {@link conformance.ConformanceRequest.verify|verify} messages.
         * @param message ConformanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: conformance.ConformanceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConformanceRequest message, length delimited. Does not implicitly {@link conformance.ConformanceRequest.verify|verify} messages.
         * @param message ConformanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: conformance.ConformanceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConformanceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {conformance.ConformanceRequest & conformance.ConformanceRequest.$Shape} ConformanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.ConformanceRequest & conformance.ConformanceRequest.$Shape;

        /**
         * Decodes a ConformanceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {conformance.ConformanceRequest & conformance.ConformanceRequest.$Shape} ConformanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.ConformanceRequest & conformance.ConformanceRequest.$Shape;

        /**
         * Verifies a ConformanceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConformanceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConformanceRequest
         */
        static fromObject(object: { [k: string]: any }): conformance.ConformanceRequest;

        /**
         * Creates a plain object from a ConformanceRequest message. Also converts values to other types if specified.
         * @param message ConformanceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: conformance.ConformanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConformanceRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ConformanceRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ConformanceRequest {

        /** Properties of a ConformanceRequest. */
        interface $Properties {

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
            jspbEncodingOptions?: (conformance.JspbEncodingConfig.$Properties|null);

            /** ConformanceRequest printUnknownFields */
            printUnknownFields?: (boolean|null);

            /** ConformanceRequest payload */
            payload?: ("protobufPayload"|"jsonPayload"|"jspbPayload"|"textPayload");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ConformanceRequest. */
        type $Shape = {
          protobufPayload?: Uint8Array|null;
          jsonPayload?: string|null;
          jspbPayload?: string|null;
          textPayload?: string|null;
          requestedOutputFormat?: conformance.WireFormat|null;
          messageType?: string|null;
          testCategory?: conformance.TestCategory|null;
          jspbEncodingOptions?: conformance.JspbEncodingConfig.$Shape|null;
          printUnknownFields?: boolean|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ payload?: undefined; protobufPayload?: null; jsonPayload?: null; jspbPayload?: null; textPayload?: null }|{ payload?: "protobufPayload"; protobufPayload: Uint8Array; jsonPayload?: null; jspbPayload?: null; textPayload?: null }|{ payload?: "jsonPayload"; protobufPayload?: null; jsonPayload: string; jspbPayload?: null; textPayload?: null }|{ payload?: "jspbPayload"; protobufPayload?: null; jsonPayload?: null; jspbPayload: string; textPayload?: null }|{ payload?: "textPayload"; protobufPayload?: null; jsonPayload?: null; jspbPayload?: null; textPayload: string })
        );
    }

    /**
     * Properties of a ConformanceResponse.
     * @deprecated Use conformance.ConformanceResponse.$Properties instead.
     */
    interface IConformanceResponse extends conformance.ConformanceResponse.$Properties {
    }

    /** Represents a ConformanceResponse. */
    class ConformanceResponse {

        /** Reflection-backed declarations are not constructable. Use ConformanceResponse.create(...) instead. */
        private constructor();

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ConformanceResponse parseError. */
        parseError?: (string|null);

        /** ConformanceResponse serializeError. */
        serializeError?: (string|null);

        /** ConformanceResponse timeoutError. */
        timeoutError?: (string|null);

        /** ConformanceResponse runtimeError. */
        runtimeError?: (string|null);

        /** ConformanceResponse protobufPayload. */
        protobufPayload?: (Uint8Array|null);

        /** ConformanceResponse jsonPayload. */
        jsonPayload?: (string|null);

        /** ConformanceResponse skipped. */
        skipped?: (string|null);

        /** ConformanceResponse jspbPayload. */
        jspbPayload?: (string|null);

        /** ConformanceResponse textPayload. */
        textPayload?: (string|null);

        /** ConformanceResponse result. */
        result?: ("parseError"|"serializeError"|"timeoutError"|"runtimeError"|"protobufPayload"|"jsonPayload"|"skipped"|"jspbPayload"|"textPayload");

        /**
         * Creates a new ConformanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConformanceResponse instance
         */
        static create(properties: conformance.ConformanceResponse.$Shape): conformance.ConformanceResponse & conformance.ConformanceResponse.$Shape;
        static create(properties?: conformance.ConformanceResponse.$Properties): conformance.ConformanceResponse;

        /**
         * Encodes the specified ConformanceResponse message. Does not implicitly {@link conformance.ConformanceResponse.verify|verify} messages.
         * @param message ConformanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: conformance.ConformanceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConformanceResponse message, length delimited. Does not implicitly {@link conformance.ConformanceResponse.verify|verify} messages.
         * @param message ConformanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: conformance.ConformanceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConformanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {conformance.ConformanceResponse & conformance.ConformanceResponse.$Shape} ConformanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.ConformanceResponse & conformance.ConformanceResponse.$Shape;

        /**
         * Decodes a ConformanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {conformance.ConformanceResponse & conformance.ConformanceResponse.$Shape} ConformanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.ConformanceResponse & conformance.ConformanceResponse.$Shape;

        /**
         * Verifies a ConformanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConformanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConformanceResponse
         */
        static fromObject(object: { [k: string]: any }): conformance.ConformanceResponse;

        /**
         * Creates a plain object from a ConformanceResponse message. Also converts values to other types if specified.
         * @param message ConformanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: conformance.ConformanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConformanceResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ConformanceResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ConformanceResponse {

        /** Properties of a ConformanceResponse. */
        interface $Properties {

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

            /** ConformanceResponse result */
            result?: ("parseError"|"serializeError"|"timeoutError"|"runtimeError"|"protobufPayload"|"jsonPayload"|"skipped"|"jspbPayload"|"textPayload");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ConformanceResponse. */
        type $Shape = {
          parseError?: string|null;
          serializeError?: string|null;
          timeoutError?: string|null;
          runtimeError?: string|null;
          protobufPayload?: Uint8Array|null;
          jsonPayload?: string|null;
          skipped?: string|null;
          jspbPayload?: string|null;
          textPayload?: string|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ result?: undefined; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "parseError"; parseError: string; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "serializeError"; parseError?: null; serializeError: string; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "timeoutError"; parseError?: null; serializeError?: null; timeoutError: string; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "runtimeError"; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError: string; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "protobufPayload"; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload: Uint8Array; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "jsonPayload"; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload: string; skipped?: null; jspbPayload?: null; textPayload?: null }|{ result?: "skipped"; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped: string; jspbPayload?: null; textPayload?: null }|{ result?: "jspbPayload"; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload: string; textPayload?: null }|{ result?: "textPayload"; parseError?: null; serializeError?: null; timeoutError?: null; runtimeError?: null; protobufPayload?: null; jsonPayload?: null; skipped?: null; jspbPayload?: null; textPayload: string })
        );
    }

    /**
     * Properties of a JspbEncodingConfig.
     * @deprecated Use conformance.JspbEncodingConfig.$Properties instead.
     */
    interface IJspbEncodingConfig extends conformance.JspbEncodingConfig.$Properties {
    }

    /** Represents a JspbEncodingConfig. */
    class JspbEncodingConfig {

        /** Reflection-backed declarations are not constructable. Use JspbEncodingConfig.create(...) instead. */
        private constructor();

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** JspbEncodingConfig useJspbArrayAnyFormat. */
        useJspbArrayAnyFormat: boolean;

        /**
         * Creates a new JspbEncodingConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JspbEncodingConfig instance
         */
        static create(properties: conformance.JspbEncodingConfig.$Shape): conformance.JspbEncodingConfig & conformance.JspbEncodingConfig.$Shape;
        static create(properties?: conformance.JspbEncodingConfig.$Properties): conformance.JspbEncodingConfig;

        /**
         * Encodes the specified JspbEncodingConfig message. Does not implicitly {@link conformance.JspbEncodingConfig.verify|verify} messages.
         * @param message JspbEncodingConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: conformance.JspbEncodingConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JspbEncodingConfig message, length delimited. Does not implicitly {@link conformance.JspbEncodingConfig.verify|verify} messages.
         * @param message JspbEncodingConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: conformance.JspbEncodingConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JspbEncodingConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {conformance.JspbEncodingConfig & conformance.JspbEncodingConfig.$Shape} JspbEncodingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conformance.JspbEncodingConfig & conformance.JspbEncodingConfig.$Shape;

        /**
         * Decodes a JspbEncodingConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {conformance.JspbEncodingConfig & conformance.JspbEncodingConfig.$Shape} JspbEncodingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conformance.JspbEncodingConfig & conformance.JspbEncodingConfig.$Shape;

        /**
         * Verifies a JspbEncodingConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JspbEncodingConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JspbEncodingConfig
         */
        static fromObject(object: { [k: string]: any }): conformance.JspbEncodingConfig;

        /**
         * Creates a plain object from a JspbEncodingConfig message. Also converts values to other types if specified.
         * @param message JspbEncodingConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: conformance.JspbEncodingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JspbEncodingConfig to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JspbEncodingConfig
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JspbEncodingConfig {

        /** Properties of a JspbEncodingConfig. */
        interface $Properties {

            /** JspbEncodingConfig useJspbArrayAnyFormat */
            useJspbArrayAnyFormat?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JspbEncodingConfig. */
        type $Shape = conformance.JspbEncodingConfig.$Properties;
    }

    /** WireFormat enum. */
    enum WireFormat {

        /** UNSPECIFIED value */
        UNSPECIFIED = 0,

        /** PROTOBUF value */
        PROTOBUF = 1,

        /** JSON value */
        JSON = 2,

        /** JSPB value */
        JSPB = 3,

        /** TEXT_FORMAT value */
        TEXT_FORMAT = 4
    }

    /** TestCategory enum. */
    enum TestCategory {

        /** UNSPECIFIED_TEST value */
        UNSPECIFIED_TEST = 0,

        /** BINARY_TEST value */
        BINARY_TEST = 1,

        /** JSON_TEST value */
        JSON_TEST = 2,

        /** JSON_IGNORE_UNKNOWN_PARSING_TEST value */
        JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,

        /** JSPB_TEST value */
        JSPB_TEST = 4,

        /** TEXT_FORMAT_TEST value */
        TEXT_FORMAT_TEST = 5
    }
}

/** Namespace protobuf_test_messages. */
export namespace protobuf_test_messages {

    /** Namespace editions. */
    namespace editions {

        /**
         * Properties of a ComplexMessage.
         * @deprecated Use protobuf_test_messages.editions.ComplexMessage.$Properties instead.
         */
        interface IComplexMessage extends protobuf_test_messages.editions.ComplexMessage.$Properties {
        }

        /** Represents a ComplexMessage. */
        class ComplexMessage {

            /** Reflection-backed declarations are not constructable. Use ComplexMessage.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ComplexMessage d. */
            d: number;

            /**
             * Creates a new ComplexMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComplexMessage instance
             */
            static create(properties: protobuf_test_messages.editions.ComplexMessage.$Shape): protobuf_test_messages.editions.ComplexMessage & protobuf_test_messages.editions.ComplexMessage.$Shape;
            static create(properties?: protobuf_test_messages.editions.ComplexMessage.$Properties): protobuf_test_messages.editions.ComplexMessage;

            /**
             * Encodes the specified ComplexMessage message. Does not implicitly {@link protobuf_test_messages.editions.ComplexMessage.verify|verify} messages.
             * @param message ComplexMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.editions.ComplexMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ComplexMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.ComplexMessage.verify|verify} messages.
             * @param message ComplexMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.editions.ComplexMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComplexMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.editions.ComplexMessage & protobuf_test_messages.editions.ComplexMessage.$Shape} ComplexMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.ComplexMessage & protobuf_test_messages.editions.ComplexMessage.$Shape;

            /**
             * Decodes a ComplexMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.editions.ComplexMessage & protobuf_test_messages.editions.ComplexMessage.$Shape} ComplexMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.ComplexMessage & protobuf_test_messages.editions.ComplexMessage.$Shape;

            /**
             * Verifies a ComplexMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ComplexMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ComplexMessage
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.ComplexMessage;

            /**
             * Creates a plain object from a ComplexMessage message. Also converts values to other types if specified.
             * @param message ComplexMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.editions.ComplexMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ComplexMessage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ComplexMessage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ComplexMessage {

            /** Properties of a ComplexMessage. */
            interface $Properties {

                /** ComplexMessage d */
                d?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ComplexMessage. */
            type $Shape = protobuf_test_messages.editions.ComplexMessage.$Properties;
        }

        /**
         * Properties of a TestAllTypesEdition2023.
         * @deprecated Use protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties instead.
         */
        interface ITestAllTypesEdition2023 extends protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties {
        }

        /** Represents a TestAllTypesEdition2023. */
        class TestAllTypesEdition2023 {

            /** Reflection-backed declarations are not constructable. Use TestAllTypesEdition2023.create(...) instead. */
            private constructor();

            /** TestAllTypesEdition2023 .protobuf_test_messages.editions.extensionInt32 */
            ".protobuf_test_messages.editions.extensionInt32": number;

            /** TestAllTypesEdition2023 .protobuf_test_messages.editions.groupliketype */
            ".protobuf_test_messages.editions.groupliketype"?: (protobuf_test_messages.editions.GroupLikeType.$Properties|null);

            /** TestAllTypesEdition2023 .protobuf_test_messages.editions.delimitedExt */
            ".protobuf_test_messages.editions.delimitedExt"?: (protobuf_test_messages.editions.GroupLikeType.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TestAllTypesEdition2023 optionalInt32. */
            optionalInt32: number;

            /** TestAllTypesEdition2023 optionalInt64. */
            optionalInt64: (number|Long);

            /** TestAllTypesEdition2023 optionalUint32. */
            optionalUint32: number;

            /** TestAllTypesEdition2023 optionalUint64. */
            optionalUint64: (number|Long);

            /** TestAllTypesEdition2023 optionalSint32. */
            optionalSint32: number;

            /** TestAllTypesEdition2023 optionalSint64. */
            optionalSint64: (number|Long);

            /** TestAllTypesEdition2023 optionalFixed32. */
            optionalFixed32: number;

            /** TestAllTypesEdition2023 optionalFixed64. */
            optionalFixed64: (number|Long);

            /** TestAllTypesEdition2023 optionalSfixed32. */
            optionalSfixed32: number;

            /** TestAllTypesEdition2023 optionalSfixed64. */
            optionalSfixed64: (number|Long);

            /** TestAllTypesEdition2023 optionalFloat. */
            optionalFloat: number;

            /** TestAllTypesEdition2023 optionalDouble. */
            optionalDouble: number;

            /** TestAllTypesEdition2023 optionalBool. */
            optionalBool: boolean;

            /** TestAllTypesEdition2023 optionalString. */
            optionalString: string;

            /** TestAllTypesEdition2023 optionalBytes. */
            optionalBytes: Uint8Array;

            /** TestAllTypesEdition2023 optionalNestedMessage. */
            optionalNestedMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties|null);

            /** TestAllTypesEdition2023 optionalForeignMessage. */
            optionalForeignMessage?: (protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties|null);

            /** TestAllTypesEdition2023 optionalNestedEnum. */
            optionalNestedEnum: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum;

            /** TestAllTypesEdition2023 optionalForeignEnum. */
            optionalForeignEnum: protobuf_test_messages.editions.ForeignEnumEdition2023;

            /** TestAllTypesEdition2023 optionalStringPiece. */
            optionalStringPiece: string;

            /** TestAllTypesEdition2023 optionalCord. */
            optionalCord: string;

            /** TestAllTypesEdition2023 recursiveMessage. */
            recursiveMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties|null);

            /** TestAllTypesEdition2023 repeatedInt32. */
            repeatedInt32: number[];

            /** TestAllTypesEdition2023 repeatedInt64. */
            repeatedInt64: (number|Long)[];

            /** TestAllTypesEdition2023 repeatedUint32. */
            repeatedUint32: number[];

            /** TestAllTypesEdition2023 repeatedUint64. */
            repeatedUint64: (number|Long)[];

            /** TestAllTypesEdition2023 repeatedSint32. */
            repeatedSint32: number[];

            /** TestAllTypesEdition2023 repeatedSint64. */
            repeatedSint64: (number|Long)[];

            /** TestAllTypesEdition2023 repeatedFixed32. */
            repeatedFixed32: number[];

            /** TestAllTypesEdition2023 repeatedFixed64. */
            repeatedFixed64: (number|Long)[];

            /** TestAllTypesEdition2023 repeatedSfixed32. */
            repeatedSfixed32: number[];

            /** TestAllTypesEdition2023 repeatedSfixed64. */
            repeatedSfixed64: (number|Long)[];

            /** TestAllTypesEdition2023 repeatedFloat. */
            repeatedFloat: number[];

            /** TestAllTypesEdition2023 repeatedDouble. */
            repeatedDouble: number[];

            /** TestAllTypesEdition2023 repeatedBool. */
            repeatedBool: boolean[];

            /** TestAllTypesEdition2023 repeatedString. */
            repeatedString: string[];

            /** TestAllTypesEdition2023 repeatedBytes. */
            repeatedBytes: Uint8Array[];

            /** TestAllTypesEdition2023 repeatedNestedMessage. */
            repeatedNestedMessage: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties[];

            /** TestAllTypesEdition2023 repeatedForeignMessage. */
            repeatedForeignMessage: protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties[];

            /** TestAllTypesEdition2023 repeatedNestedEnum. */
            repeatedNestedEnum: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[];

            /** TestAllTypesEdition2023 repeatedForeignEnum. */
            repeatedForeignEnum: protobuf_test_messages.editions.ForeignEnumEdition2023[];

            /** TestAllTypesEdition2023 repeatedStringPiece. */
            repeatedStringPiece: string[];

            /** TestAllTypesEdition2023 repeatedCord. */
            repeatedCord: string[];

            /** TestAllTypesEdition2023 packedInt32. */
            packedInt32: number[];

            /** TestAllTypesEdition2023 packedInt64. */
            packedInt64: (number|Long)[];

            /** TestAllTypesEdition2023 packedUint32. */
            packedUint32: number[];

            /** TestAllTypesEdition2023 packedUint64. */
            packedUint64: (number|Long)[];

            /** TestAllTypesEdition2023 packedSint32. */
            packedSint32: number[];

            /** TestAllTypesEdition2023 packedSint64. */
            packedSint64: (number|Long)[];

            /** TestAllTypesEdition2023 packedFixed32. */
            packedFixed32: number[];

            /** TestAllTypesEdition2023 packedFixed64. */
            packedFixed64: (number|Long)[];

            /** TestAllTypesEdition2023 packedSfixed32. */
            packedSfixed32: number[];

            /** TestAllTypesEdition2023 packedSfixed64. */
            packedSfixed64: (number|Long)[];

            /** TestAllTypesEdition2023 packedFloat. */
            packedFloat: number[];

            /** TestAllTypesEdition2023 packedDouble. */
            packedDouble: number[];

            /** TestAllTypesEdition2023 packedBool. */
            packedBool: boolean[];

            /** TestAllTypesEdition2023 packedNestedEnum. */
            packedNestedEnum: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[];

            /** TestAllTypesEdition2023 unpackedInt32. */
            unpackedInt32: number[];

            /** TestAllTypesEdition2023 unpackedInt64. */
            unpackedInt64: (number|Long)[];

            /** TestAllTypesEdition2023 unpackedUint32. */
            unpackedUint32: number[];

            /** TestAllTypesEdition2023 unpackedUint64. */
            unpackedUint64: (number|Long)[];

            /** TestAllTypesEdition2023 unpackedSint32. */
            unpackedSint32: number[];

            /** TestAllTypesEdition2023 unpackedSint64. */
            unpackedSint64: (number|Long)[];

            /** TestAllTypesEdition2023 unpackedFixed32. */
            unpackedFixed32: number[];

            /** TestAllTypesEdition2023 unpackedFixed64. */
            unpackedFixed64: (number|Long)[];

            /** TestAllTypesEdition2023 unpackedSfixed32. */
            unpackedSfixed32: number[];

            /** TestAllTypesEdition2023 unpackedSfixed64. */
            unpackedSfixed64: (number|Long)[];

            /** TestAllTypesEdition2023 unpackedFloat. */
            unpackedFloat: number[];

            /** TestAllTypesEdition2023 unpackedDouble. */
            unpackedDouble: number[];

            /** TestAllTypesEdition2023 unpackedBool. */
            unpackedBool: boolean[];

            /** TestAllTypesEdition2023 unpackedNestedEnum. */
            unpackedNestedEnum: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[];

            /** TestAllTypesEdition2023 mapInt32Int32. */
            mapInt32Int32: { [k: string]: number };

            /** TestAllTypesEdition2023 mapInt64Int64. */
            mapInt64Int64: { [k: string]: (number|Long) };

            /** TestAllTypesEdition2023 mapUint32Uint32. */
            mapUint32Uint32: { [k: string]: number };

            /** TestAllTypesEdition2023 mapUint64Uint64. */
            mapUint64Uint64: { [k: string]: (number|Long) };

            /** TestAllTypesEdition2023 mapSint32Sint32. */
            mapSint32Sint32: { [k: string]: number };

            /** TestAllTypesEdition2023 mapSint64Sint64. */
            mapSint64Sint64: { [k: string]: (number|Long) };

            /** TestAllTypesEdition2023 mapFixed32Fixed32. */
            mapFixed32Fixed32: { [k: string]: number };

            /** TestAllTypesEdition2023 mapFixed64Fixed64. */
            mapFixed64Fixed64: { [k: string]: (number|Long) };

            /** TestAllTypesEdition2023 mapSfixed32Sfixed32. */
            mapSfixed32Sfixed32: { [k: string]: number };

            /** TestAllTypesEdition2023 mapSfixed64Sfixed64. */
            mapSfixed64Sfixed64: { [k: string]: (number|Long) };

            /** TestAllTypesEdition2023 mapInt32Float. */
            mapInt32Float: { [k: string]: number };

            /** TestAllTypesEdition2023 mapInt32Double. */
            mapInt32Double: { [k: string]: number };

            /** TestAllTypesEdition2023 mapBoolBool. */
            mapBoolBool: { [k: string]: boolean };

            /** TestAllTypesEdition2023 mapStringString. */
            mapStringString: { [k: string]: string };

            /** TestAllTypesEdition2023 mapStringBytes. */
            mapStringBytes: { [k: string]: Uint8Array };

            /** TestAllTypesEdition2023 mapStringNestedMessage. */
            mapStringNestedMessage: { [k: string]: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties };

            /** TestAllTypesEdition2023 mapStringForeignMessage. */
            mapStringForeignMessage: { [k: string]: protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties };

            /** TestAllTypesEdition2023 mapStringNestedEnum. */
            mapStringNestedEnum: { [k: string]: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum };

            /** TestAllTypesEdition2023 mapStringForeignEnum. */
            mapStringForeignEnum: { [k: string]: protobuf_test_messages.editions.ForeignEnumEdition2023 };

            /** TestAllTypesEdition2023 oneofUint32. */
            oneofUint32?: (number|null);

            /** TestAllTypesEdition2023 oneofNestedMessage. */
            oneofNestedMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties|null);

            /** TestAllTypesEdition2023 oneofString. */
            oneofString?: (string|null);

            /** TestAllTypesEdition2023 oneofBytes. */
            oneofBytes?: (Uint8Array|null);

            /** TestAllTypesEdition2023 oneofBool. */
            oneofBool?: (boolean|null);

            /** TestAllTypesEdition2023 oneofUint64. */
            oneofUint64?: (number|Long|null);

            /** TestAllTypesEdition2023 oneofFloat. */
            oneofFloat?: (number|null);

            /** TestAllTypesEdition2023 oneofDouble. */
            oneofDouble?: (number|null);

            /** TestAllTypesEdition2023 oneofEnum. */
            oneofEnum?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum|null);

            /** TestAllTypesEdition2023 groupliketype. */
            groupliketype?: (protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties|null);

            /** TestAllTypesEdition2023 delimitedField. */
            delimitedField?: (protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties|null);

            /** TestAllTypesEdition2023 oneofField. */
            oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

            /**
             * Creates a new TestAllTypesEdition2023 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestAllTypesEdition2023 instance
             */
            static create(properties: protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape): protobuf_test_messages.editions.TestAllTypesEdition2023 & protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape;
            static create(properties?: protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties): protobuf_test_messages.editions.TestAllTypesEdition2023;

            /**
             * Encodes the specified TestAllTypesEdition2023 message. Does not implicitly {@link protobuf_test_messages.editions.TestAllTypesEdition2023.verify|verify} messages.
             * @param message TestAllTypesEdition2023 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestAllTypesEdition2023 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.TestAllTypesEdition2023.verify|verify} messages.
             * @param message TestAllTypesEdition2023 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestAllTypesEdition2023 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.editions.TestAllTypesEdition2023 & protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape} TestAllTypesEdition2023
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.TestAllTypesEdition2023 & protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape;

            /**
             * Decodes a TestAllTypesEdition2023 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.editions.TestAllTypesEdition2023 & protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape} TestAllTypesEdition2023
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.TestAllTypesEdition2023 & protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape;

            /**
             * Verifies a TestAllTypesEdition2023 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestAllTypesEdition2023 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestAllTypesEdition2023
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.TestAllTypesEdition2023;

            /**
             * Creates a plain object from a TestAllTypesEdition2023 message. Also converts values to other types if specified.
             * @param message TestAllTypesEdition2023
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.editions.TestAllTypesEdition2023, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestAllTypesEdition2023 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TestAllTypesEdition2023
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TestAllTypesEdition2023 {

            /** Properties of a TestAllTypesEdition2023. */
            interface $Properties {

                /** TestAllTypesEdition2023 optionalInt32 */
                optionalInt32?: (number|null);

                /** TestAllTypesEdition2023 optionalInt64 */
                optionalInt64?: (number|Long|null);

                /** TestAllTypesEdition2023 optionalUint32 */
                optionalUint32?: (number|null);

                /** TestAllTypesEdition2023 optionalUint64 */
                optionalUint64?: (number|Long|null);

                /** TestAllTypesEdition2023 optionalSint32 */
                optionalSint32?: (number|null);

                /** TestAllTypesEdition2023 optionalSint64 */
                optionalSint64?: (number|Long|null);

                /** TestAllTypesEdition2023 optionalFixed32 */
                optionalFixed32?: (number|null);

                /** TestAllTypesEdition2023 optionalFixed64 */
                optionalFixed64?: (number|Long|null);

                /** TestAllTypesEdition2023 optionalSfixed32 */
                optionalSfixed32?: (number|null);

                /** TestAllTypesEdition2023 optionalSfixed64 */
                optionalSfixed64?: (number|Long|null);

                /** TestAllTypesEdition2023 optionalFloat */
                optionalFloat?: (number|null);

                /** TestAllTypesEdition2023 optionalDouble */
                optionalDouble?: (number|null);

                /** TestAllTypesEdition2023 optionalBool */
                optionalBool?: (boolean|null);

                /** TestAllTypesEdition2023 optionalString */
                optionalString?: (string|null);

                /** TestAllTypesEdition2023 optionalBytes */
                optionalBytes?: (Uint8Array|null);

                /** TestAllTypesEdition2023 optionalNestedMessage */
                optionalNestedMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties|null);

                /** TestAllTypesEdition2023 optionalForeignMessage */
                optionalForeignMessage?: (protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties|null);

                /** TestAllTypesEdition2023 optionalNestedEnum */
                optionalNestedEnum?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum|null);

                /** TestAllTypesEdition2023 optionalForeignEnum */
                optionalForeignEnum?: (protobuf_test_messages.editions.ForeignEnumEdition2023|null);

                /** TestAllTypesEdition2023 optionalStringPiece */
                optionalStringPiece?: (string|null);

                /** TestAllTypesEdition2023 optionalCord */
                optionalCord?: (string|null);

                /** TestAllTypesEdition2023 recursiveMessage */
                recursiveMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties|null);

                /** TestAllTypesEdition2023 repeatedInt32 */
                repeatedInt32?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedInt64 */
                repeatedInt64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 repeatedUint32 */
                repeatedUint32?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedUint64 */
                repeatedUint64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 repeatedSint32 */
                repeatedSint32?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedSint64 */
                repeatedSint64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 repeatedFixed32 */
                repeatedFixed32?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedFixed64 */
                repeatedFixed64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 repeatedSfixed32 */
                repeatedSfixed32?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedSfixed64 */
                repeatedSfixed64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 repeatedFloat */
                repeatedFloat?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedDouble */
                repeatedDouble?: (number[]|null);

                /** TestAllTypesEdition2023 repeatedBool */
                repeatedBool?: (boolean[]|null);

                /** TestAllTypesEdition2023 repeatedString */
                repeatedString?: (string[]|null);

                /** TestAllTypesEdition2023 repeatedBytes */
                repeatedBytes?: (Uint8Array[]|null);

                /** TestAllTypesEdition2023 repeatedNestedMessage */
                repeatedNestedMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties[]|null);

                /** TestAllTypesEdition2023 repeatedForeignMessage */
                repeatedForeignMessage?: (protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties[]|null);

                /** TestAllTypesEdition2023 repeatedNestedEnum */
                repeatedNestedEnum?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[]|null);

                /** TestAllTypesEdition2023 repeatedForeignEnum */
                repeatedForeignEnum?: (protobuf_test_messages.editions.ForeignEnumEdition2023[]|null);

                /** TestAllTypesEdition2023 repeatedStringPiece */
                repeatedStringPiece?: (string[]|null);

                /** TestAllTypesEdition2023 repeatedCord */
                repeatedCord?: (string[]|null);

                /** TestAllTypesEdition2023 packedInt32 */
                packedInt32?: (number[]|null);

                /** TestAllTypesEdition2023 packedInt64 */
                packedInt64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 packedUint32 */
                packedUint32?: (number[]|null);

                /** TestAllTypesEdition2023 packedUint64 */
                packedUint64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 packedSint32 */
                packedSint32?: (number[]|null);

                /** TestAllTypesEdition2023 packedSint64 */
                packedSint64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 packedFixed32 */
                packedFixed32?: (number[]|null);

                /** TestAllTypesEdition2023 packedFixed64 */
                packedFixed64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 packedSfixed32 */
                packedSfixed32?: (number[]|null);

                /** TestAllTypesEdition2023 packedSfixed64 */
                packedSfixed64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 packedFloat */
                packedFloat?: (number[]|null);

                /** TestAllTypesEdition2023 packedDouble */
                packedDouble?: (number[]|null);

                /** TestAllTypesEdition2023 packedBool */
                packedBool?: (boolean[]|null);

                /** TestAllTypesEdition2023 packedNestedEnum */
                packedNestedEnum?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[]|null);

                /** TestAllTypesEdition2023 unpackedInt32 */
                unpackedInt32?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedInt64 */
                unpackedInt64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 unpackedUint32 */
                unpackedUint32?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedUint64 */
                unpackedUint64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 unpackedSint32 */
                unpackedSint32?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedSint64 */
                unpackedSint64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 unpackedFixed32 */
                unpackedFixed32?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedFixed64 */
                unpackedFixed64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 unpackedSfixed32 */
                unpackedSfixed32?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedSfixed64 */
                unpackedSfixed64?: ((number|Long)[]|null);

                /** TestAllTypesEdition2023 unpackedFloat */
                unpackedFloat?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedDouble */
                unpackedDouble?: (number[]|null);

                /** TestAllTypesEdition2023 unpackedBool */
                unpackedBool?: (boolean[]|null);

                /** TestAllTypesEdition2023 unpackedNestedEnum */
                unpackedNestedEnum?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[]|null);

                /** TestAllTypesEdition2023 mapInt32Int32 */
                mapInt32Int32?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapInt64Int64 */
                mapInt64Int64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesEdition2023 mapUint32Uint32 */
                mapUint32Uint32?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapUint64Uint64 */
                mapUint64Uint64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesEdition2023 mapSint32Sint32 */
                mapSint32Sint32?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapSint64Sint64 */
                mapSint64Sint64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesEdition2023 mapFixed32Fixed32 */
                mapFixed32Fixed32?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapFixed64Fixed64 */
                mapFixed64Fixed64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesEdition2023 mapSfixed32Sfixed32 */
                mapSfixed32Sfixed32?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapSfixed64Sfixed64 */
                mapSfixed64Sfixed64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesEdition2023 mapInt32Float */
                mapInt32Float?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapInt32Double */
                mapInt32Double?: ({ [k: string]: number }|null);

                /** TestAllTypesEdition2023 mapBoolBool */
                mapBoolBool?: ({ [k: string]: boolean }|null);

                /** TestAllTypesEdition2023 mapStringString */
                mapStringString?: ({ [k: string]: string }|null);

                /** TestAllTypesEdition2023 mapStringBytes */
                mapStringBytes?: ({ [k: string]: Uint8Array }|null);

                /** TestAllTypesEdition2023 mapStringNestedMessage */
                mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties }|null);

                /** TestAllTypesEdition2023 mapStringForeignMessage */
                mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties }|null);

                /** TestAllTypesEdition2023 mapStringNestedEnum */
                mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum }|null);

                /** TestAllTypesEdition2023 mapStringForeignEnum */
                mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.editions.ForeignEnumEdition2023 }|null);

                /** TestAllTypesEdition2023 oneofUint32 */
                oneofUint32?: (number|null);

                /** TestAllTypesEdition2023 oneofNestedMessage */
                oneofNestedMessage?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties|null);

                /** TestAllTypesEdition2023 oneofString */
                oneofString?: (string|null);

                /** TestAllTypesEdition2023 oneofBytes */
                oneofBytes?: (Uint8Array|null);

                /** TestAllTypesEdition2023 oneofBool */
                oneofBool?: (boolean|null);

                /** TestAllTypesEdition2023 oneofUint64 */
                oneofUint64?: (number|Long|null);

                /** TestAllTypesEdition2023 oneofFloat */
                oneofFloat?: (number|null);

                /** TestAllTypesEdition2023 oneofDouble */
                oneofDouble?: (number|null);

                /** TestAllTypesEdition2023 oneofEnum */
                oneofEnum?: (protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum|null);

                /** TestAllTypesEdition2023 groupliketype */
                groupliketype?: (protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties|null);

                /** TestAllTypesEdition2023 delimitedField */
                delimitedField?: (protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties|null);

                /** TestAllTypesEdition2023 .protobuf_test_messages.editions.extensionInt32 */
                ".protobuf_test_messages.editions.extensionInt32"?: (number|null);

                /** TestAllTypesEdition2023 .protobuf_test_messages.editions.groupliketype */
                ".protobuf_test_messages.editions.groupliketype"?: (protobuf_test_messages.editions.GroupLikeType.$Properties|null);

                /** TestAllTypesEdition2023 .protobuf_test_messages.editions.delimitedExt */
                ".protobuf_test_messages.editions.delimitedExt"?: (protobuf_test_messages.editions.GroupLikeType.$Properties|null);

                /** TestAllTypesEdition2023 oneofField */
                oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a TestAllTypesEdition2023. */
            type $Shape = {
              optionalInt32?: number|null;
              optionalInt64?: number|Long|null;
              optionalUint32?: number|null;
              optionalUint64?: number|Long|null;
              optionalSint32?: number|null;
              optionalSint64?: number|Long|null;
              optionalFixed32?: number|null;
              optionalFixed64?: number|Long|null;
              optionalSfixed32?: number|null;
              optionalSfixed64?: number|Long|null;
              optionalFloat?: number|null;
              optionalDouble?: number|null;
              optionalBool?: boolean|null;
              optionalString?: string|null;
              optionalBytes?: Uint8Array|null;
              optionalNestedMessage?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape|null;
              optionalForeignMessage?: protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape|null;
              optionalNestedEnum?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum|null;
              optionalForeignEnum?: protobuf_test_messages.editions.ForeignEnumEdition2023|null;
              optionalStringPiece?: string|null;
              optionalCord?: string|null;
              recursiveMessage?: protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape|null;
              repeatedInt32?: number[]|null;
              repeatedInt64?: (number|Long)[]|null;
              repeatedUint32?: number[]|null;
              repeatedUint64?: (number|Long)[]|null;
              repeatedSint32?: number[]|null;
              repeatedSint64?: (number|Long)[]|null;
              repeatedFixed32?: number[]|null;
              repeatedFixed64?: (number|Long)[]|null;
              repeatedSfixed32?: number[]|null;
              repeatedSfixed64?: (number|Long)[]|null;
              repeatedFloat?: number[]|null;
              repeatedDouble?: number[]|null;
              repeatedBool?: boolean[]|null;
              repeatedString?: string[]|null;
              repeatedBytes?: Uint8Array[]|null;
              repeatedNestedMessage?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape[]|null;
              repeatedForeignMessage?: protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape[]|null;
              repeatedNestedEnum?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[]|null;
              repeatedForeignEnum?: protobuf_test_messages.editions.ForeignEnumEdition2023[]|null;
              repeatedStringPiece?: string[]|null;
              repeatedCord?: string[]|null;
              packedInt32?: number[]|null;
              packedInt64?: (number|Long)[]|null;
              packedUint32?: number[]|null;
              packedUint64?: (number|Long)[]|null;
              packedSint32?: number[]|null;
              packedSint64?: (number|Long)[]|null;
              packedFixed32?: number[]|null;
              packedFixed64?: (number|Long)[]|null;
              packedSfixed32?: number[]|null;
              packedSfixed64?: (number|Long)[]|null;
              packedFloat?: number[]|null;
              packedDouble?: number[]|null;
              packedBool?: boolean[]|null;
              packedNestedEnum?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[]|null;
              unpackedInt32?: number[]|null;
              unpackedInt64?: (number|Long)[]|null;
              unpackedUint32?: number[]|null;
              unpackedUint64?: (number|Long)[]|null;
              unpackedSint32?: number[]|null;
              unpackedSint64?: (number|Long)[]|null;
              unpackedFixed32?: number[]|null;
              unpackedFixed64?: (number|Long)[]|null;
              unpackedSfixed32?: number[]|null;
              unpackedSfixed64?: (number|Long)[]|null;
              unpackedFloat?: number[]|null;
              unpackedDouble?: number[]|null;
              unpackedBool?: boolean[]|null;
              unpackedNestedEnum?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum[]|null;
              mapInt32Int32?: { [k: string]: number }|null;
              mapInt64Int64?: { [k: string]: number|Long }|null;
              mapUint32Uint32?: { [k: string]: number }|null;
              mapUint64Uint64?: { [k: string]: number|Long }|null;
              mapSint32Sint32?: { [k: string]: number }|null;
              mapSint64Sint64?: { [k: string]: number|Long }|null;
              mapFixed32Fixed32?: { [k: string]: number }|null;
              mapFixed64Fixed64?: { [k: string]: number|Long }|null;
              mapSfixed32Sfixed32?: { [k: string]: number }|null;
              mapSfixed64Sfixed64?: { [k: string]: number|Long }|null;
              mapInt32Float?: { [k: string]: number }|null;
              mapInt32Double?: { [k: string]: number }|null;
              mapBoolBool?: { [k: string]: boolean }|null;
              mapStringString?: { [k: string]: string }|null;
              mapStringBytes?: { [k: string]: Uint8Array }|null;
              mapStringNestedMessage?: { [k: string]: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape }|null;
              mapStringForeignMessage?: { [k: string]: protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape }|null;
              mapStringNestedEnum?: { [k: string]: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum }|null;
              mapStringForeignEnum?: { [k: string]: protobuf_test_messages.editions.ForeignEnumEdition2023 }|null;
              oneofUint32?: number|null;
              oneofNestedMessage?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape|null;
              oneofString?: string|null;
              oneofBytes?: Uint8Array|null;
              oneofBool?: boolean|null;
              oneofUint64?: number|Long|null;
              oneofFloat?: number|null;
              oneofDouble?: number|null;
              oneofEnum?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum|null;
              groupliketype?: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape|null;
              delimitedField?: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape|null;
              ".protobuf_test_messages.editions.extensionInt32"?: number|null;
              ".protobuf_test_messages.editions.groupliketype"?: protobuf_test_messages.editions.GroupLikeType.$Shape|null;
              ".protobuf_test_messages.editions.delimitedExt"?: protobuf_test_messages.editions.GroupLikeType.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ oneofField?: undefined; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofUint32"; oneofUint32: number; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofNestedMessage"; oneofUint32?: null; oneofNestedMessage: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofString"; oneofUint32?: null; oneofNestedMessage?: null; oneofString: string; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofBytes"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes: Uint8Array; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofBool"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool: boolean; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofUint64"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64: number|Long; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofFloat"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat: number; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofDouble"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble: number; oneofEnum?: null }|{ oneofField?: "oneofEnum"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum })
            );

            /**
             * Properties of a NestedMessage.
             * @deprecated Use protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties instead.
             */
            interface INestedMessage extends protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties {
            }

            /** Represents a NestedMessage. */
            class NestedMessage {

                /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** NestedMessage a. */
                a: number;

                /** NestedMessage corecursive. */
                corecursive?: (protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties|null);

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedMessage instance
                 */
                static create(properties: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape): protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage & protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape;
                static create(properties?: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties): protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage;

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage & protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage & protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage & protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage & protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage.$Shape;

                /**
                 * Verifies a NestedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedMessage
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage;

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @param message NestedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedMessage to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NestedMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NestedMessage {

                /** Properties of a NestedMessage. */
                interface $Properties {

                    /** NestedMessage a */
                    a?: (number|null);

                    /** NestedMessage corecursive */
                    corecursive?: (protobuf_test_messages.editions.TestAllTypesEdition2023.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NestedMessage. */
                type $Shape = {
                  a?: number|null;
                  corecursive?: protobuf_test_messages.editions.TestAllTypesEdition2023.$Shape|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a GroupLikeType.
             * @deprecated Use protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties instead.
             */
            interface IGroupLikeType extends protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties {
            }

            /** Represents a GroupLikeType. */
            class GroupLikeType {

                /** Reflection-backed declarations are not constructable. Use GroupLikeType.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** GroupLikeType groupInt32. */
                groupInt32: number;

                /** GroupLikeType groupUint32. */
                groupUint32: number;

                /**
                 * Creates a new GroupLikeType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupLikeType instance
                 */
                static create(properties: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape): protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType & protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape;
                static create(properties?: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties): protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType;

                /**
                 * Encodes the specified GroupLikeType message. Does not implicitly {@link protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.verify|verify} messages.
                 * @param message GroupLikeType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupLikeType message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.verify|verify} messages.
                 * @param message GroupLikeType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupLikeType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType & protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape} GroupLikeType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType & protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape;

                /**
                 * Decodes a GroupLikeType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType & protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape} GroupLikeType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType & protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Shape;

                /**
                 * Verifies a GroupLikeType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupLikeType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupLikeType
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType;

                /**
                 * Creates a plain object from a GroupLikeType message. Also converts values to other types if specified.
                 * @param message GroupLikeType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupLikeType to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for GroupLikeType
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace GroupLikeType {

                /** Properties of a GroupLikeType. */
                interface $Properties {

                    /** GroupLikeType groupInt32 */
                    groupInt32?: (number|null);

                    /** GroupLikeType groupUint32 */
                    groupUint32?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a GroupLikeType. */
                type $Shape = protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType.$Properties;
            }

            /** NestedEnum enum. */
            enum NestedEnum {

                /** FOO value */
                FOO = 0,

                /** BAR value */
                BAR = 1,

                /** BAZ value */
                BAZ = 2,

                /** NEG value */
                NEG = -1
            }
        }

        /**
         * Properties of a ForeignMessageEdition2023.
         * @deprecated Use protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties instead.
         */
        interface IForeignMessageEdition2023 extends protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties {
        }

        /** Represents a ForeignMessageEdition2023. */
        class ForeignMessageEdition2023 {

            /** Reflection-backed declarations are not constructable. Use ForeignMessageEdition2023.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ForeignMessageEdition2023 c. */
            c: number;

            /**
             * Creates a new ForeignMessageEdition2023 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForeignMessageEdition2023 instance
             */
            static create(properties: protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape): protobuf_test_messages.editions.ForeignMessageEdition2023 & protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape;
            static create(properties?: protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties): protobuf_test_messages.editions.ForeignMessageEdition2023;

            /**
             * Encodes the specified ForeignMessageEdition2023 message. Does not implicitly {@link protobuf_test_messages.editions.ForeignMessageEdition2023.verify|verify} messages.
             * @param message ForeignMessageEdition2023 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForeignMessageEdition2023 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.ForeignMessageEdition2023.verify|verify} messages.
             * @param message ForeignMessageEdition2023 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForeignMessageEdition2023 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.editions.ForeignMessageEdition2023 & protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape} ForeignMessageEdition2023
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.ForeignMessageEdition2023 & protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape;

            /**
             * Decodes a ForeignMessageEdition2023 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.editions.ForeignMessageEdition2023 & protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape} ForeignMessageEdition2023
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.ForeignMessageEdition2023 & protobuf_test_messages.editions.ForeignMessageEdition2023.$Shape;

            /**
             * Verifies a ForeignMessageEdition2023 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForeignMessageEdition2023 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForeignMessageEdition2023
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.ForeignMessageEdition2023;

            /**
             * Creates a plain object from a ForeignMessageEdition2023 message. Also converts values to other types if specified.
             * @param message ForeignMessageEdition2023
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.editions.ForeignMessageEdition2023, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForeignMessageEdition2023 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ForeignMessageEdition2023
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ForeignMessageEdition2023 {

            /** Properties of a ForeignMessageEdition2023. */
            interface $Properties {

                /** ForeignMessageEdition2023 c */
                c?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ForeignMessageEdition2023. */
            type $Shape = protobuf_test_messages.editions.ForeignMessageEdition2023.$Properties;
        }

        /**
         * Properties of a GroupLikeType.
         * @deprecated Use protobuf_test_messages.editions.GroupLikeType.$Properties instead.
         */
        interface IGroupLikeType extends protobuf_test_messages.editions.GroupLikeType.$Properties {
        }

        /** Represents a GroupLikeType. */
        class GroupLikeType {

            /** Reflection-backed declarations are not constructable. Use GroupLikeType.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GroupLikeType c. */
            c: number;

            /**
             * Creates a new GroupLikeType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupLikeType instance
             */
            static create(properties: protobuf_test_messages.editions.GroupLikeType.$Shape): protobuf_test_messages.editions.GroupLikeType & protobuf_test_messages.editions.GroupLikeType.$Shape;
            static create(properties?: protobuf_test_messages.editions.GroupLikeType.$Properties): protobuf_test_messages.editions.GroupLikeType;

            /**
             * Encodes the specified GroupLikeType message. Does not implicitly {@link protobuf_test_messages.editions.GroupLikeType.verify|verify} messages.
             * @param message GroupLikeType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.editions.GroupLikeType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupLikeType message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.GroupLikeType.verify|verify} messages.
             * @param message GroupLikeType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.editions.GroupLikeType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupLikeType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.editions.GroupLikeType & protobuf_test_messages.editions.GroupLikeType.$Shape} GroupLikeType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.GroupLikeType & protobuf_test_messages.editions.GroupLikeType.$Shape;

            /**
             * Decodes a GroupLikeType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.editions.GroupLikeType & protobuf_test_messages.editions.GroupLikeType.$Shape} GroupLikeType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.GroupLikeType & protobuf_test_messages.editions.GroupLikeType.$Shape;

            /**
             * Verifies a GroupLikeType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupLikeType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupLikeType
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.GroupLikeType;

            /**
             * Creates a plain object from a GroupLikeType message. Also converts values to other types if specified.
             * @param message GroupLikeType
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.editions.GroupLikeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupLikeType to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GroupLikeType
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GroupLikeType {

            /** Properties of a GroupLikeType. */
            interface $Properties {

                /** GroupLikeType c */
                c?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GroupLikeType. */
            type $Shape = protobuf_test_messages.editions.GroupLikeType.$Properties;
        }

        /** ForeignEnumEdition2023 enum. */
        enum ForeignEnumEdition2023 {

            /** FOREIGN_FOO value */
            FOREIGN_FOO = 0,

            /** FOREIGN_BAR value */
            FOREIGN_BAR = 1,

            /** FOREIGN_BAZ value */
            FOREIGN_BAZ = 2
        }

        /** Namespace proto2. */
        namespace proto2 {

            /**
             * Properties of a TestAllTypesProto2.
             * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties instead.
             */
            interface ITestAllTypesProto2 extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties {
            }

            /** Represents a TestAllTypesProto2. */
            class TestAllTypesProto2 {

                /** Reflection-backed declarations are not constructable. Use TestAllTypesProto2.create(...) instead. */
                private constructor();

                /** TestAllTypesProto2 .protobuf_test_messages.editions.proto2.extensionInt32 */
                ".protobuf_test_messages.editions.proto2.extensionInt32": number;

                /** TestAllTypesProto2 .protobuf_test_messages.editions.proto2.groupfield */
                ".protobuf_test_messages.editions.proto2.groupfield"?: (protobuf_test_messages.editions.proto2.GroupField.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TestAllTypesProto2 optionalInt32. */
                optionalInt32: number;

                /** TestAllTypesProto2 optionalInt64. */
                optionalInt64: (number|Long);

                /** TestAllTypesProto2 optionalUint32. */
                optionalUint32: number;

                /** TestAllTypesProto2 optionalUint64. */
                optionalUint64: (number|Long);

                /** TestAllTypesProto2 optionalSint32. */
                optionalSint32: number;

                /** TestAllTypesProto2 optionalSint64. */
                optionalSint64: (number|Long);

                /** TestAllTypesProto2 optionalFixed32. */
                optionalFixed32: number;

                /** TestAllTypesProto2 optionalFixed64. */
                optionalFixed64: (number|Long);

                /** TestAllTypesProto2 optionalSfixed32. */
                optionalSfixed32: number;

                /** TestAllTypesProto2 optionalSfixed64. */
                optionalSfixed64: (number|Long);

                /** TestAllTypesProto2 optionalFloat. */
                optionalFloat: number;

                /** TestAllTypesProto2 optionalDouble. */
                optionalDouble: number;

                /** TestAllTypesProto2 optionalBool. */
                optionalBool: boolean;

                /** TestAllTypesProto2 optionalString. */
                optionalString: string;

                /** TestAllTypesProto2 optionalBytes. */
                optionalBytes: Uint8Array;

                /** TestAllTypesProto2 optionalNestedMessage. */
                optionalNestedMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

                /** TestAllTypesProto2 optionalForeignMessage. */
                optionalForeignMessage?: (protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties|null);

                /** TestAllTypesProto2 optionalNestedEnum. */
                optionalNestedEnum: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum;

                /** TestAllTypesProto2 optionalForeignEnum. */
                optionalForeignEnum: protobuf_test_messages.editions.proto2.ForeignEnumProto2;

                /** TestAllTypesProto2 optionalStringPiece. */
                optionalStringPiece: string;

                /** TestAllTypesProto2 optionalCord. */
                optionalCord: string;

                /** TestAllTypesProto2 recursiveMessage. */
                recursiveMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties|null);

                /** TestAllTypesProto2 repeatedInt32. */
                repeatedInt32: number[];

                /** TestAllTypesProto2 repeatedInt64. */
                repeatedInt64: (number|Long)[];

                /** TestAllTypesProto2 repeatedUint32. */
                repeatedUint32: number[];

                /** TestAllTypesProto2 repeatedUint64. */
                repeatedUint64: (number|Long)[];

                /** TestAllTypesProto2 repeatedSint32. */
                repeatedSint32: number[];

                /** TestAllTypesProto2 repeatedSint64. */
                repeatedSint64: (number|Long)[];

                /** TestAllTypesProto2 repeatedFixed32. */
                repeatedFixed32: number[];

                /** TestAllTypesProto2 repeatedFixed64. */
                repeatedFixed64: (number|Long)[];

                /** TestAllTypesProto2 repeatedSfixed32. */
                repeatedSfixed32: number[];

                /** TestAllTypesProto2 repeatedSfixed64. */
                repeatedSfixed64: (number|Long)[];

                /** TestAllTypesProto2 repeatedFloat. */
                repeatedFloat: number[];

                /** TestAllTypesProto2 repeatedDouble. */
                repeatedDouble: number[];

                /** TestAllTypesProto2 repeatedBool. */
                repeatedBool: boolean[];

                /** TestAllTypesProto2 repeatedString. */
                repeatedString: string[];

                /** TestAllTypesProto2 repeatedBytes. */
                repeatedBytes: Uint8Array[];

                /** TestAllTypesProto2 repeatedNestedMessage. */
                repeatedNestedMessage: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties[];

                /** TestAllTypesProto2 repeatedForeignMessage. */
                repeatedForeignMessage: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties[];

                /** TestAllTypesProto2 repeatedNestedEnum. */
                repeatedNestedEnum: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[];

                /** TestAllTypesProto2 repeatedForeignEnum. */
                repeatedForeignEnum: protobuf_test_messages.editions.proto2.ForeignEnumProto2[];

                /** TestAllTypesProto2 repeatedStringPiece. */
                repeatedStringPiece: string[];

                /** TestAllTypesProto2 repeatedCord. */
                repeatedCord: string[];

                /** TestAllTypesProto2 packedInt32. */
                packedInt32: number[];

                /** TestAllTypesProto2 packedInt64. */
                packedInt64: (number|Long)[];

                /** TestAllTypesProto2 packedUint32. */
                packedUint32: number[];

                /** TestAllTypesProto2 packedUint64. */
                packedUint64: (number|Long)[];

                /** TestAllTypesProto2 packedSint32. */
                packedSint32: number[];

                /** TestAllTypesProto2 packedSint64. */
                packedSint64: (number|Long)[];

                /** TestAllTypesProto2 packedFixed32. */
                packedFixed32: number[];

                /** TestAllTypesProto2 packedFixed64. */
                packedFixed64: (number|Long)[];

                /** TestAllTypesProto2 packedSfixed32. */
                packedSfixed32: number[];

                /** TestAllTypesProto2 packedSfixed64. */
                packedSfixed64: (number|Long)[];

                /** TestAllTypesProto2 packedFloat. */
                packedFloat: number[];

                /** TestAllTypesProto2 packedDouble. */
                packedDouble: number[];

                /** TestAllTypesProto2 packedBool. */
                packedBool: boolean[];

                /** TestAllTypesProto2 packedNestedEnum. */
                packedNestedEnum: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[];

                /** TestAllTypesProto2 unpackedInt32. */
                unpackedInt32: number[];

                /** TestAllTypesProto2 unpackedInt64. */
                unpackedInt64: (number|Long)[];

                /** TestAllTypesProto2 unpackedUint32. */
                unpackedUint32: number[];

                /** TestAllTypesProto2 unpackedUint64. */
                unpackedUint64: (number|Long)[];

                /** TestAllTypesProto2 unpackedSint32. */
                unpackedSint32: number[];

                /** TestAllTypesProto2 unpackedSint64. */
                unpackedSint64: (number|Long)[];

                /** TestAllTypesProto2 unpackedFixed32. */
                unpackedFixed32: number[];

                /** TestAllTypesProto2 unpackedFixed64. */
                unpackedFixed64: (number|Long)[];

                /** TestAllTypesProto2 unpackedSfixed32. */
                unpackedSfixed32: number[];

                /** TestAllTypesProto2 unpackedSfixed64. */
                unpackedSfixed64: (number|Long)[];

                /** TestAllTypesProto2 unpackedFloat. */
                unpackedFloat: number[];

                /** TestAllTypesProto2 unpackedDouble. */
                unpackedDouble: number[];

                /** TestAllTypesProto2 unpackedBool. */
                unpackedBool: boolean[];

                /** TestAllTypesProto2 unpackedNestedEnum. */
                unpackedNestedEnum: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[];

                /** TestAllTypesProto2 mapInt32Int32. */
                mapInt32Int32: { [k: string]: number };

                /** TestAllTypesProto2 mapInt64Int64. */
                mapInt64Int64: { [k: string]: (number|Long) };

                /** TestAllTypesProto2 mapUint32Uint32. */
                mapUint32Uint32: { [k: string]: number };

                /** TestAllTypesProto2 mapUint64Uint64. */
                mapUint64Uint64: { [k: string]: (number|Long) };

                /** TestAllTypesProto2 mapSint32Sint32. */
                mapSint32Sint32: { [k: string]: number };

                /** TestAllTypesProto2 mapSint64Sint64. */
                mapSint64Sint64: { [k: string]: (number|Long) };

                /** TestAllTypesProto2 mapFixed32Fixed32. */
                mapFixed32Fixed32: { [k: string]: number };

                /** TestAllTypesProto2 mapFixed64Fixed64. */
                mapFixed64Fixed64: { [k: string]: (number|Long) };

                /** TestAllTypesProto2 mapSfixed32Sfixed32. */
                mapSfixed32Sfixed32: { [k: string]: number };

                /** TestAllTypesProto2 mapSfixed64Sfixed64. */
                mapSfixed64Sfixed64: { [k: string]: (number|Long) };

                /** TestAllTypesProto2 mapInt32Bool. */
                mapInt32Bool: { [k: string]: boolean };

                /** TestAllTypesProto2 mapInt32Float. */
                mapInt32Float: { [k: string]: number };

                /** TestAllTypesProto2 mapInt32Double. */
                mapInt32Double: { [k: string]: number };

                /** TestAllTypesProto2 mapInt32NestedMessage. */
                mapInt32NestedMessage: { [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties };

                /** TestAllTypesProto2 mapBoolBool. */
                mapBoolBool: { [k: string]: boolean };

                /** TestAllTypesProto2 mapStringString. */
                mapStringString: { [k: string]: string };

                /** TestAllTypesProto2 mapStringBytes. */
                mapStringBytes: { [k: string]: Uint8Array };

                /** TestAllTypesProto2 mapStringNestedMessage. */
                mapStringNestedMessage: { [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties };

                /** TestAllTypesProto2 mapStringForeignMessage. */
                mapStringForeignMessage: { [k: string]: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties };

                /** TestAllTypesProto2 mapStringNestedEnum. */
                mapStringNestedEnum: { [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum };

                /** TestAllTypesProto2 mapStringForeignEnum. */
                mapStringForeignEnum: { [k: string]: protobuf_test_messages.editions.proto2.ForeignEnumProto2 };

                /** TestAllTypesProto2 oneofUint32. */
                oneofUint32?: (number|null);

                /** TestAllTypesProto2 oneofNestedMessage. */
                oneofNestedMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

                /** TestAllTypesProto2 oneofString. */
                oneofString?: (string|null);

                /** TestAllTypesProto2 oneofBytes. */
                oneofBytes?: (Uint8Array|null);

                /** TestAllTypesProto2 oneofBool. */
                oneofBool?: (boolean|null);

                /** TestAllTypesProto2 oneofUint64. */
                oneofUint64?: (number|Long|null);

                /** TestAllTypesProto2 oneofFloat. */
                oneofFloat?: (number|null);

                /** TestAllTypesProto2 oneofDouble. */
                oneofDouble?: (number|null);

                /** TestAllTypesProto2 oneofEnum. */
                oneofEnum?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum|null);

                /** TestAllTypesProto2 data. */
                data?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties|null);

                /** TestAllTypesProto2 multiwordgroupfield. */
                multiwordgroupfield?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties|null);

                /** TestAllTypesProto2 defaultInt32. */
                defaultInt32: number;

                /** TestAllTypesProto2 defaultInt64. */
                defaultInt64: (number|Long);

                /** TestAllTypesProto2 defaultUint32. */
                defaultUint32: number;

                /** TestAllTypesProto2 defaultUint64. */
                defaultUint64: (number|Long);

                /** TestAllTypesProto2 defaultSint32. */
                defaultSint32: number;

                /** TestAllTypesProto2 defaultSint64. */
                defaultSint64: (number|Long);

                /** TestAllTypesProto2 defaultFixed32. */
                defaultFixed32: number;

                /** TestAllTypesProto2 defaultFixed64. */
                defaultFixed64: (number|Long);

                /** TestAllTypesProto2 defaultSfixed32. */
                defaultSfixed32: number;

                /** TestAllTypesProto2 defaultSfixed64. */
                defaultSfixed64: (number|Long);

                /** TestAllTypesProto2 defaultFloat. */
                defaultFloat: number;

                /** TestAllTypesProto2 defaultDouble. */
                defaultDouble: number;

                /** TestAllTypesProto2 defaultBool. */
                defaultBool: boolean;

                /** TestAllTypesProto2 defaultString. */
                defaultString: string;

                /** TestAllTypesProto2 defaultBytes. */
                defaultBytes: Uint8Array;

                /** TestAllTypesProto2 fieldname1. */
                fieldname1: number;

                /** TestAllTypesProto2 fieldName2. */
                fieldName2: number;

                /** TestAllTypesProto2 FieldName3. */
                FieldName3: number;

                /** TestAllTypesProto2 fieldName4. */
                fieldName4: number;

                /** TestAllTypesProto2 field0name5. */
                field0name5: number;

                /** TestAllTypesProto2 field0Name6. */
                field0Name6: number;

                /** TestAllTypesProto2 fieldName7. */
                fieldName7: number;

                /** TestAllTypesProto2 FieldName8. */
                FieldName8: number;

                /** TestAllTypesProto2 fieldName9. */
                fieldName9: number;

                /** TestAllTypesProto2 FieldName10. */
                FieldName10: number;

                /** TestAllTypesProto2 FIELDNAME11. */
                FIELDNAME11: number;

                /** TestAllTypesProto2 FIELDName12. */
                FIELDName12: number;

                /** TestAllTypesProto2 FieldName13. */
                FieldName13: number;

                /** TestAllTypesProto2 FieldName14. */
                FieldName14: number;

                /** TestAllTypesProto2 fieldName15. */
                fieldName15: number;

                /** TestAllTypesProto2 fieldName16. */
                fieldName16: number;

                /** TestAllTypesProto2 fieldName17. */
                fieldName17: number;

                /** TestAllTypesProto2 FieldName18. */
                FieldName18: number;

                /** TestAllTypesProto2 messageSetCorrect. */
                messageSetCorrect?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties|null);

                /** TestAllTypesProto2 oneofField. */
                oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

                /**
                 * Creates a new TestAllTypesProto2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestAllTypesProto2 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2;

                /**
                 * Encodes the specified TestAllTypesProto2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.verify|verify} messages.
                 * @param message TestAllTypesProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestAllTypesProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.verify|verify} messages.
                 * @param message TestAllTypesProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestAllTypesProto2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape} TestAllTypesProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape;

                /**
                 * Decodes a TestAllTypesProto2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape} TestAllTypesProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape;

                /**
                 * Verifies a TestAllTypesProto2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestAllTypesProto2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestAllTypesProto2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2;

                /**
                 * Creates a plain object from a TestAllTypesProto2 message. Also converts values to other types if specified.
                 * @param message TestAllTypesProto2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestAllTypesProto2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for TestAllTypesProto2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TestAllTypesProto2 {

                /** Properties of a TestAllTypesProto2. */
                interface $Properties {

                    /** TestAllTypesProto2 optionalInt32 */
                    optionalInt32?: (number|null);

                    /** TestAllTypesProto2 optionalInt64 */
                    optionalInt64?: (number|Long|null);

                    /** TestAllTypesProto2 optionalUint32 */
                    optionalUint32?: (number|null);

                    /** TestAllTypesProto2 optionalUint64 */
                    optionalUint64?: (number|Long|null);

                    /** TestAllTypesProto2 optionalSint32 */
                    optionalSint32?: (number|null);

                    /** TestAllTypesProto2 optionalSint64 */
                    optionalSint64?: (number|Long|null);

                    /** TestAllTypesProto2 optionalFixed32 */
                    optionalFixed32?: (number|null);

                    /** TestAllTypesProto2 optionalFixed64 */
                    optionalFixed64?: (number|Long|null);

                    /** TestAllTypesProto2 optionalSfixed32 */
                    optionalSfixed32?: (number|null);

                    /** TestAllTypesProto2 optionalSfixed64 */
                    optionalSfixed64?: (number|Long|null);

                    /** TestAllTypesProto2 optionalFloat */
                    optionalFloat?: (number|null);

                    /** TestAllTypesProto2 optionalDouble */
                    optionalDouble?: (number|null);

                    /** TestAllTypesProto2 optionalBool */
                    optionalBool?: (boolean|null);

                    /** TestAllTypesProto2 optionalString */
                    optionalString?: (string|null);

                    /** TestAllTypesProto2 optionalBytes */
                    optionalBytes?: (Uint8Array|null);

                    /** TestAllTypesProto2 optionalNestedMessage */
                    optionalNestedMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

                    /** TestAllTypesProto2 optionalForeignMessage */
                    optionalForeignMessage?: (protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties|null);

                    /** TestAllTypesProto2 optionalNestedEnum */
                    optionalNestedEnum?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum|null);

                    /** TestAllTypesProto2 optionalForeignEnum */
                    optionalForeignEnum?: (protobuf_test_messages.editions.proto2.ForeignEnumProto2|null);

                    /** TestAllTypesProto2 optionalStringPiece */
                    optionalStringPiece?: (string|null);

                    /** TestAllTypesProto2 optionalCord */
                    optionalCord?: (string|null);

                    /** TestAllTypesProto2 recursiveMessage */
                    recursiveMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties|null);

                    /** TestAllTypesProto2 repeatedInt32 */
                    repeatedInt32?: (number[]|null);

                    /** TestAllTypesProto2 repeatedInt64 */
                    repeatedInt64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 repeatedUint32 */
                    repeatedUint32?: (number[]|null);

                    /** TestAllTypesProto2 repeatedUint64 */
                    repeatedUint64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 repeatedSint32 */
                    repeatedSint32?: (number[]|null);

                    /** TestAllTypesProto2 repeatedSint64 */
                    repeatedSint64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 repeatedFixed32 */
                    repeatedFixed32?: (number[]|null);

                    /** TestAllTypesProto2 repeatedFixed64 */
                    repeatedFixed64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 repeatedSfixed32 */
                    repeatedSfixed32?: (number[]|null);

                    /** TestAllTypesProto2 repeatedSfixed64 */
                    repeatedSfixed64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 repeatedFloat */
                    repeatedFloat?: (number[]|null);

                    /** TestAllTypesProto2 repeatedDouble */
                    repeatedDouble?: (number[]|null);

                    /** TestAllTypesProto2 repeatedBool */
                    repeatedBool?: (boolean[]|null);

                    /** TestAllTypesProto2 repeatedString */
                    repeatedString?: (string[]|null);

                    /** TestAllTypesProto2 repeatedBytes */
                    repeatedBytes?: (Uint8Array[]|null);

                    /** TestAllTypesProto2 repeatedNestedMessage */
                    repeatedNestedMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties[]|null);

                    /** TestAllTypesProto2 repeatedForeignMessage */
                    repeatedForeignMessage?: (protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties[]|null);

                    /** TestAllTypesProto2 repeatedNestedEnum */
                    repeatedNestedEnum?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[]|null);

                    /** TestAllTypesProto2 repeatedForeignEnum */
                    repeatedForeignEnum?: (protobuf_test_messages.editions.proto2.ForeignEnumProto2[]|null);

                    /** TestAllTypesProto2 repeatedStringPiece */
                    repeatedStringPiece?: (string[]|null);

                    /** TestAllTypesProto2 repeatedCord */
                    repeatedCord?: (string[]|null);

                    /** TestAllTypesProto2 packedInt32 */
                    packedInt32?: (number[]|null);

                    /** TestAllTypesProto2 packedInt64 */
                    packedInt64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 packedUint32 */
                    packedUint32?: (number[]|null);

                    /** TestAllTypesProto2 packedUint64 */
                    packedUint64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 packedSint32 */
                    packedSint32?: (number[]|null);

                    /** TestAllTypesProto2 packedSint64 */
                    packedSint64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 packedFixed32 */
                    packedFixed32?: (number[]|null);

                    /** TestAllTypesProto2 packedFixed64 */
                    packedFixed64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 packedSfixed32 */
                    packedSfixed32?: (number[]|null);

                    /** TestAllTypesProto2 packedSfixed64 */
                    packedSfixed64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 packedFloat */
                    packedFloat?: (number[]|null);

                    /** TestAllTypesProto2 packedDouble */
                    packedDouble?: (number[]|null);

                    /** TestAllTypesProto2 packedBool */
                    packedBool?: (boolean[]|null);

                    /** TestAllTypesProto2 packedNestedEnum */
                    packedNestedEnum?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[]|null);

                    /** TestAllTypesProto2 unpackedInt32 */
                    unpackedInt32?: (number[]|null);

                    /** TestAllTypesProto2 unpackedInt64 */
                    unpackedInt64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 unpackedUint32 */
                    unpackedUint32?: (number[]|null);

                    /** TestAllTypesProto2 unpackedUint64 */
                    unpackedUint64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 unpackedSint32 */
                    unpackedSint32?: (number[]|null);

                    /** TestAllTypesProto2 unpackedSint64 */
                    unpackedSint64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 unpackedFixed32 */
                    unpackedFixed32?: (number[]|null);

                    /** TestAllTypesProto2 unpackedFixed64 */
                    unpackedFixed64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 unpackedSfixed32 */
                    unpackedSfixed32?: (number[]|null);

                    /** TestAllTypesProto2 unpackedSfixed64 */
                    unpackedSfixed64?: ((number|Long)[]|null);

                    /** TestAllTypesProto2 unpackedFloat */
                    unpackedFloat?: (number[]|null);

                    /** TestAllTypesProto2 unpackedDouble */
                    unpackedDouble?: (number[]|null);

                    /** TestAllTypesProto2 unpackedBool */
                    unpackedBool?: (boolean[]|null);

                    /** TestAllTypesProto2 unpackedNestedEnum */
                    unpackedNestedEnum?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[]|null);

                    /** TestAllTypesProto2 mapInt32Int32 */
                    mapInt32Int32?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapInt64Int64 */
                    mapInt64Int64?: ({ [k: string]: (number|Long) }|null);

                    /** TestAllTypesProto2 mapUint32Uint32 */
                    mapUint32Uint32?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapUint64Uint64 */
                    mapUint64Uint64?: ({ [k: string]: (number|Long) }|null);

                    /** TestAllTypesProto2 mapSint32Sint32 */
                    mapSint32Sint32?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapSint64Sint64 */
                    mapSint64Sint64?: ({ [k: string]: (number|Long) }|null);

                    /** TestAllTypesProto2 mapFixed32Fixed32 */
                    mapFixed32Fixed32?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapFixed64Fixed64 */
                    mapFixed64Fixed64?: ({ [k: string]: (number|Long) }|null);

                    /** TestAllTypesProto2 mapSfixed32Sfixed32 */
                    mapSfixed32Sfixed32?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapSfixed64Sfixed64 */
                    mapSfixed64Sfixed64?: ({ [k: string]: (number|Long) }|null);

                    /** TestAllTypesProto2 mapInt32Bool */
                    mapInt32Bool?: ({ [k: string]: boolean }|null);

                    /** TestAllTypesProto2 mapInt32Float */
                    mapInt32Float?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapInt32Double */
                    mapInt32Double?: ({ [k: string]: number }|null);

                    /** TestAllTypesProto2 mapInt32NestedMessage */
                    mapInt32NestedMessage?: ({ [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties }|null);

                    /** TestAllTypesProto2 mapBoolBool */
                    mapBoolBool?: ({ [k: string]: boolean }|null);

                    /** TestAllTypesProto2 mapStringString */
                    mapStringString?: ({ [k: string]: string }|null);

                    /** TestAllTypesProto2 mapStringBytes */
                    mapStringBytes?: ({ [k: string]: Uint8Array }|null);

                    /** TestAllTypesProto2 mapStringNestedMessage */
                    mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties }|null);

                    /** TestAllTypesProto2 mapStringForeignMessage */
                    mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties }|null);

                    /** TestAllTypesProto2 mapStringNestedEnum */
                    mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum }|null);

                    /** TestAllTypesProto2 mapStringForeignEnum */
                    mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.editions.proto2.ForeignEnumProto2 }|null);

                    /** TestAllTypesProto2 oneofUint32 */
                    oneofUint32?: (number|null);

                    /** TestAllTypesProto2 oneofNestedMessage */
                    oneofNestedMessage?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

                    /** TestAllTypesProto2 oneofString */
                    oneofString?: (string|null);

                    /** TestAllTypesProto2 oneofBytes */
                    oneofBytes?: (Uint8Array|null);

                    /** TestAllTypesProto2 oneofBool */
                    oneofBool?: (boolean|null);

                    /** TestAllTypesProto2 oneofUint64 */
                    oneofUint64?: (number|Long|null);

                    /** TestAllTypesProto2 oneofFloat */
                    oneofFloat?: (number|null);

                    /** TestAllTypesProto2 oneofDouble */
                    oneofDouble?: (number|null);

                    /** TestAllTypesProto2 oneofEnum */
                    oneofEnum?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum|null);

                    /** TestAllTypesProto2 data */
                    data?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties|null);

                    /** TestAllTypesProto2 multiwordgroupfield */
                    multiwordgroupfield?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties|null);

                    /** TestAllTypesProto2 defaultInt32 */
                    defaultInt32?: (number|null);

                    /** TestAllTypesProto2 defaultInt64 */
                    defaultInt64?: (number|Long|null);

                    /** TestAllTypesProto2 defaultUint32 */
                    defaultUint32?: (number|null);

                    /** TestAllTypesProto2 defaultUint64 */
                    defaultUint64?: (number|Long|null);

                    /** TestAllTypesProto2 defaultSint32 */
                    defaultSint32?: (number|null);

                    /** TestAllTypesProto2 defaultSint64 */
                    defaultSint64?: (number|Long|null);

                    /** TestAllTypesProto2 defaultFixed32 */
                    defaultFixed32?: (number|null);

                    /** TestAllTypesProto2 defaultFixed64 */
                    defaultFixed64?: (number|Long|null);

                    /** TestAllTypesProto2 defaultSfixed32 */
                    defaultSfixed32?: (number|null);

                    /** TestAllTypesProto2 defaultSfixed64 */
                    defaultSfixed64?: (number|Long|null);

                    /** TestAllTypesProto2 defaultFloat */
                    defaultFloat?: (number|null);

                    /** TestAllTypesProto2 defaultDouble */
                    defaultDouble?: (number|null);

                    /** TestAllTypesProto2 defaultBool */
                    defaultBool?: (boolean|null);

                    /** TestAllTypesProto2 defaultString */
                    defaultString?: (string|null);

                    /** TestAllTypesProto2 defaultBytes */
                    defaultBytes?: (Uint8Array|null);

                    /** TestAllTypesProto2 fieldname1 */
                    fieldname1?: (number|null);

                    /** TestAllTypesProto2 fieldName2 */
                    fieldName2?: (number|null);

                    /** TestAllTypesProto2 FieldName3 */
                    FieldName3?: (number|null);

                    /** TestAllTypesProto2 fieldName4 */
                    fieldName4?: (number|null);

                    /** TestAllTypesProto2 field0name5 */
                    field0name5?: (number|null);

                    /** TestAllTypesProto2 field0Name6 */
                    field0Name6?: (number|null);

                    /** TestAllTypesProto2 fieldName7 */
                    fieldName7?: (number|null);

                    /** TestAllTypesProto2 FieldName8 */
                    FieldName8?: (number|null);

                    /** TestAllTypesProto2 fieldName9 */
                    fieldName9?: (number|null);

                    /** TestAllTypesProto2 FieldName10 */
                    FieldName10?: (number|null);

                    /** TestAllTypesProto2 FIELDNAME11 */
                    FIELDNAME11?: (number|null);

                    /** TestAllTypesProto2 FIELDName12 */
                    FIELDName12?: (number|null);

                    /** TestAllTypesProto2 FieldName13 */
                    FieldName13?: (number|null);

                    /** TestAllTypesProto2 FieldName14 */
                    FieldName14?: (number|null);

                    /** TestAllTypesProto2 fieldName15 */
                    fieldName15?: (number|null);

                    /** TestAllTypesProto2 fieldName16 */
                    fieldName16?: (number|null);

                    /** TestAllTypesProto2 fieldName17 */
                    fieldName17?: (number|null);

                    /** TestAllTypesProto2 FieldName18 */
                    FieldName18?: (number|null);

                    /** TestAllTypesProto2 messageSetCorrect */
                    messageSetCorrect?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties|null);

                    /** TestAllTypesProto2 .protobuf_test_messages.editions.proto2.extensionInt32 */
                    ".protobuf_test_messages.editions.proto2.extensionInt32"?: (number|null);

                    /** TestAllTypesProto2 .protobuf_test_messages.editions.proto2.groupfield */
                    ".protobuf_test_messages.editions.proto2.groupfield"?: (protobuf_test_messages.editions.proto2.GroupField.$Properties|null);

                    /** TestAllTypesProto2 oneofField */
                    oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a TestAllTypesProto2. */
                type $Shape = {
                  optionalInt32?: number|null;
                  optionalInt64?: number|Long|null;
                  optionalUint32?: number|null;
                  optionalUint64?: number|Long|null;
                  optionalSint32?: number|null;
                  optionalSint64?: number|Long|null;
                  optionalFixed32?: number|null;
                  optionalFixed64?: number|Long|null;
                  optionalSfixed32?: number|null;
                  optionalSfixed64?: number|Long|null;
                  optionalFloat?: number|null;
                  optionalDouble?: number|null;
                  optionalBool?: boolean|null;
                  optionalString?: string|null;
                  optionalBytes?: Uint8Array|null;
                  optionalNestedMessage?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape|null;
                  optionalForeignMessage?: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape|null;
                  optionalNestedEnum?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum|null;
                  optionalForeignEnum?: protobuf_test_messages.editions.proto2.ForeignEnumProto2|null;
                  optionalStringPiece?: string|null;
                  optionalCord?: string|null;
                  recursiveMessage?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape|null;
                  repeatedInt32?: number[]|null;
                  repeatedInt64?: (number|Long)[]|null;
                  repeatedUint32?: number[]|null;
                  repeatedUint64?: (number|Long)[]|null;
                  repeatedSint32?: number[]|null;
                  repeatedSint64?: (number|Long)[]|null;
                  repeatedFixed32?: number[]|null;
                  repeatedFixed64?: (number|Long)[]|null;
                  repeatedSfixed32?: number[]|null;
                  repeatedSfixed64?: (number|Long)[]|null;
                  repeatedFloat?: number[]|null;
                  repeatedDouble?: number[]|null;
                  repeatedBool?: boolean[]|null;
                  repeatedString?: string[]|null;
                  repeatedBytes?: Uint8Array[]|null;
                  repeatedNestedMessage?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape[]|null;
                  repeatedForeignMessage?: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape[]|null;
                  repeatedNestedEnum?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[]|null;
                  repeatedForeignEnum?: protobuf_test_messages.editions.proto2.ForeignEnumProto2[]|null;
                  repeatedStringPiece?: string[]|null;
                  repeatedCord?: string[]|null;
                  packedInt32?: number[]|null;
                  packedInt64?: (number|Long)[]|null;
                  packedUint32?: number[]|null;
                  packedUint64?: (number|Long)[]|null;
                  packedSint32?: number[]|null;
                  packedSint64?: (number|Long)[]|null;
                  packedFixed32?: number[]|null;
                  packedFixed64?: (number|Long)[]|null;
                  packedSfixed32?: number[]|null;
                  packedSfixed64?: (number|Long)[]|null;
                  packedFloat?: number[]|null;
                  packedDouble?: number[]|null;
                  packedBool?: boolean[]|null;
                  packedNestedEnum?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[]|null;
                  unpackedInt32?: number[]|null;
                  unpackedInt64?: (number|Long)[]|null;
                  unpackedUint32?: number[]|null;
                  unpackedUint64?: (number|Long)[]|null;
                  unpackedSint32?: number[]|null;
                  unpackedSint64?: (number|Long)[]|null;
                  unpackedFixed32?: number[]|null;
                  unpackedFixed64?: (number|Long)[]|null;
                  unpackedSfixed32?: number[]|null;
                  unpackedSfixed64?: (number|Long)[]|null;
                  unpackedFloat?: number[]|null;
                  unpackedDouble?: number[]|null;
                  unpackedBool?: boolean[]|null;
                  unpackedNestedEnum?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum[]|null;
                  mapInt32Int32?: { [k: string]: number }|null;
                  mapInt64Int64?: { [k: string]: number|Long }|null;
                  mapUint32Uint32?: { [k: string]: number }|null;
                  mapUint64Uint64?: { [k: string]: number|Long }|null;
                  mapSint32Sint32?: { [k: string]: number }|null;
                  mapSint64Sint64?: { [k: string]: number|Long }|null;
                  mapFixed32Fixed32?: { [k: string]: number }|null;
                  mapFixed64Fixed64?: { [k: string]: number|Long }|null;
                  mapSfixed32Sfixed32?: { [k: string]: number }|null;
                  mapSfixed64Sfixed64?: { [k: string]: number|Long }|null;
                  mapInt32Bool?: { [k: string]: boolean }|null;
                  mapInt32Float?: { [k: string]: number }|null;
                  mapInt32Double?: { [k: string]: number }|null;
                  mapInt32NestedMessage?: { [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape }|null;
                  mapBoolBool?: { [k: string]: boolean }|null;
                  mapStringString?: { [k: string]: string }|null;
                  mapStringBytes?: { [k: string]: Uint8Array }|null;
                  mapStringNestedMessage?: { [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape }|null;
                  mapStringForeignMessage?: { [k: string]: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape }|null;
                  mapStringNestedEnum?: { [k: string]: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum }|null;
                  mapStringForeignEnum?: { [k: string]: protobuf_test_messages.editions.proto2.ForeignEnumProto2 }|null;
                  oneofUint32?: number|null;
                  oneofNestedMessage?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape|null;
                  oneofString?: string|null;
                  oneofBytes?: Uint8Array|null;
                  oneofBool?: boolean|null;
                  oneofUint64?: number|Long|null;
                  oneofFloat?: number|null;
                  oneofDouble?: number|null;
                  oneofEnum?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum|null;
                  data?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape|null;
                  multiwordgroupfield?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape|null;
                  defaultInt32?: number|null;
                  defaultInt64?: number|Long|null;
                  defaultUint32?: number|null;
                  defaultUint64?: number|Long|null;
                  defaultSint32?: number|null;
                  defaultSint64?: number|Long|null;
                  defaultFixed32?: number|null;
                  defaultFixed64?: number|Long|null;
                  defaultSfixed32?: number|null;
                  defaultSfixed64?: number|Long|null;
                  defaultFloat?: number|null;
                  defaultDouble?: number|null;
                  defaultBool?: boolean|null;
                  defaultString?: string|null;
                  defaultBytes?: Uint8Array|null;
                  fieldname1?: number|null;
                  fieldName2?: number|null;
                  FieldName3?: number|null;
                  fieldName4?: number|null;
                  field0name5?: number|null;
                  field0Name6?: number|null;
                  fieldName7?: number|null;
                  FieldName8?: number|null;
                  fieldName9?: number|null;
                  FieldName10?: number|null;
                  FIELDNAME11?: number|null;
                  FIELDName12?: number|null;
                  FieldName13?: number|null;
                  FieldName14?: number|null;
                  fieldName15?: number|null;
                  fieldName16?: number|null;
                  fieldName17?: number|null;
                  FieldName18?: number|null;
                  messageSetCorrect?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape|null;
                  ".protobuf_test_messages.editions.proto2.extensionInt32"?: number|null;
                  ".protobuf_test_messages.editions.proto2.groupfield"?: protobuf_test_messages.editions.proto2.GroupField.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ oneofField?: undefined; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofUint32"; oneofUint32: number; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofNestedMessage"; oneofUint32?: null; oneofNestedMessage: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofString"; oneofUint32?: null; oneofNestedMessage?: null; oneofString: string; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofBytes"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes: Uint8Array; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofBool"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool: boolean; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofUint64"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64: number|Long; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofFloat"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat: number; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofDouble"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble: number; oneofEnum?: null }|{ oneofField?: "oneofEnum"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum })
                );

                /**
                 * Properties of a NestedMessage.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties instead.
                 */
                interface INestedMessage extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties {
                }

                /** Represents a NestedMessage. */
                class NestedMessage {

                    /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** NestedMessage a. */
                    a: number;

                    /** NestedMessage corecursive. */
                    corecursive?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties|null);

                    /**
                     * Creates a new NestedMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NestedMessage instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage;

                    /**
                     * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                     * @param message NestedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                     * @param message NestedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape;

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage.$Shape;

                    /**
                     * Verifies a NestedMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NestedMessage
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage;

                    /**
                     * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                     * @param message NestedMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NestedMessage to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for NestedMessage
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace NestedMessage {

                    /** Properties of a NestedMessage. */
                    interface $Properties {

                        /** NestedMessage a */
                        a?: (number|null);

                        /** NestedMessage corecursive */
                        corecursive?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a NestedMessage. */
                    type $Shape = {
                      a?: number|null;
                      corecursive?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.$Shape|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a Data.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties instead.
                 */
                interface IData extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties {
                }

                /** Represents a Data. */
                class Data {

                    /** Reflection-backed declarations are not constructable. Use Data.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Data groupInt32. */
                    groupInt32: number;

                    /** Data groupUint32. */
                    groupUint32: number;

                    /**
                     * Creates a new Data instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Data instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data;

                    /**
                     * Encodes the specified Data message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                     * @param message Data message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Data message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                     * @param message Data message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Data message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape;

                    /**
                     * Decodes a Data message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Shape;

                    /**
                     * Verifies a Data message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Data message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Data
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data;

                    /**
                     * Creates a plain object from a Data message. Also converts values to other types if specified.
                     * @param message Data
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Data to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Data
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Data {

                    /** Properties of a Data. */
                    interface $Properties {

                        /** Data groupInt32 */
                        groupInt32?: (number|null);

                        /** Data groupUint32 */
                        groupUint32?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Data. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data.$Properties;
                }

                /**
                 * Properties of a MultiWordGroupField.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties instead.
                 */
                interface IMultiWordGroupField extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties {
                }

                /** Represents a MultiWordGroupField. */
                class MultiWordGroupField {

                    /** Reflection-backed declarations are not constructable. Use MultiWordGroupField.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MultiWordGroupField groupInt32. */
                    groupInt32: number;

                    /** MultiWordGroupField groupUint32. */
                    groupUint32: number;

                    /**
                     * Creates a new MultiWordGroupField instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MultiWordGroupField instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField;

                    /**
                     * Encodes the specified MultiWordGroupField message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.verify|verify} messages.
                     * @param message MultiWordGroupField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MultiWordGroupField message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.verify|verify} messages.
                     * @param message MultiWordGroupField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MultiWordGroupField message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape} MultiWordGroupField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape;

                    /**
                     * Decodes a MultiWordGroupField message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape} MultiWordGroupField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape;

                    /**
                     * Verifies a MultiWordGroupField message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MultiWordGroupField message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MultiWordGroupField
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField;

                    /**
                     * Creates a plain object from a MultiWordGroupField message. Also converts values to other types if specified.
                     * @param message MultiWordGroupField
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MultiWordGroupField to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MultiWordGroupField
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MultiWordGroupField {

                    /** Properties of a MultiWordGroupField. */
                    interface $Properties {

                        /** MultiWordGroupField groupInt32 */
                        groupInt32?: (number|null);

                        /** MultiWordGroupField groupUint32 */
                        groupUint32?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MultiWordGroupField. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties;
                }

                /**
                 * Properties of a MessageSetCorrect.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties instead.
                 */
                interface IMessageSetCorrect extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties {
                }

                /** Represents a MessageSetCorrect. */
                class MessageSetCorrect {

                    /** Reflection-backed declarations are not constructable. Use MessageSetCorrect.create(...) instead. */
                    private constructor();

                    /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                    ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                    /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                    ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                    /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof */
                    ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof"?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new MessageSetCorrect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageSetCorrect instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect;

                    /**
                     * Encodes the specified MessageSetCorrect message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                     * @param message MessageSetCorrect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageSetCorrect message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                     * @param message MessageSetCorrect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageSetCorrect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape;

                    /**
                     * Decodes a MessageSetCorrect message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape;

                    /**
                     * Verifies a MessageSetCorrect message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageSetCorrect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageSetCorrect
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect;

                    /**
                     * Creates a plain object from a MessageSetCorrect message. Also converts values to other types if specified.
                     * @param message MessageSetCorrect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageSetCorrect to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MessageSetCorrect
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageSetCorrect {

                    /** Properties of a MessageSetCorrect. */
                    interface $Properties {

                        /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                        ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                        /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                        ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                        /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof */
                        ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof"?: (protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageSetCorrect. */
                    type $Shape = {
                      ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape|null;
                      ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape|null;
                      ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof"?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a MessageSetCorrectExtension1.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties instead.
                 */
                interface IMessageSetCorrectExtension1 extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties {
                }

                /** Represents a MessageSetCorrectExtension1. */
                class MessageSetCorrectExtension1 {

                    /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension1.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageSetCorrectExtension1 str. */
                    str: string;

                    /**
                     * Creates a new MessageSetCorrectExtension1 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageSetCorrectExtension1 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                    /**
                     * Encodes the specified MessageSetCorrectExtension1 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                     * @param message MessageSetCorrectExtension1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageSetCorrectExtension1 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                     * @param message MessageSetCorrectExtension1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape;

                    /**
                     * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape;

                    /**
                     * Verifies a MessageSetCorrectExtension1 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageSetCorrectExtension1 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageSetCorrectExtension1
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                    /**
                     * Creates a plain object from a MessageSetCorrectExtension1 message. Also converts values to other types if specified.
                     * @param message MessageSetCorrectExtension1
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageSetCorrectExtension1 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MessageSetCorrectExtension1
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageSetCorrectExtension1 {

                    /** Properties of a MessageSetCorrectExtension1. */
                    interface $Properties {

                        /** MessageSetCorrectExtension1 str */
                        str?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageSetCorrectExtension1. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties;
                }

                /**
                 * Properties of a MessageSetCorrectExtension2.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties instead.
                 */
                interface IMessageSetCorrectExtension2 extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties {
                }

                /** Represents a MessageSetCorrectExtension2. */
                class MessageSetCorrectExtension2 {

                    /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension2.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageSetCorrectExtension2 i. */
                    i: number;

                    /**
                     * Creates a new MessageSetCorrectExtension2 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageSetCorrectExtension2 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                    /**
                     * Encodes the specified MessageSetCorrectExtension2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                     * @param message MessageSetCorrectExtension2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageSetCorrectExtension2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                     * @param message MessageSetCorrectExtension2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape;

                    /**
                     * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape;

                    /**
                     * Verifies a MessageSetCorrectExtension2 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageSetCorrectExtension2 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageSetCorrectExtension2
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                    /**
                     * Creates a plain object from a MessageSetCorrectExtension2 message. Also converts values to other types if specified.
                     * @param message MessageSetCorrectExtension2
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageSetCorrectExtension2 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MessageSetCorrectExtension2
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageSetCorrectExtension2 {

                    /** Properties of a MessageSetCorrectExtension2. */
                    interface $Properties {

                        /** MessageSetCorrectExtension2 i */
                        i?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageSetCorrectExtension2. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties;
                }

                /**
                 * Properties of an ExtensionWithOneof.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties instead.
                 */
                interface IExtensionWithOneof extends protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties {
                }

                /** Represents an ExtensionWithOneof. */
                class ExtensionWithOneof {

                    /** Reflection-backed declarations are not constructable. Use ExtensionWithOneof.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ExtensionWithOneof a. */
                    a?: (number|null);

                    /** ExtensionWithOneof b. */
                    b?: (number|null);

                    /** ExtensionWithOneof oneofField. */
                    oneofField?: ("a"|"b");

                    /**
                     * Creates a new ExtensionWithOneof instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExtensionWithOneof instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape): protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties): protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof;

                    /**
                     * Encodes the specified ExtensionWithOneof message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.verify|verify} messages.
                     * @param message ExtensionWithOneof message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExtensionWithOneof message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.verify|verify} messages.
                     * @param message ExtensionWithOneof message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExtensionWithOneof message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape} ExtensionWithOneof
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape;

                    /**
                     * Decodes an ExtensionWithOneof message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape} ExtensionWithOneof
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape;

                    /**
                     * Verifies an ExtensionWithOneof message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExtensionWithOneof message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExtensionWithOneof
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof;

                    /**
                     * Creates a plain object from an ExtensionWithOneof message. Also converts values to other types if specified.
                     * @param message ExtensionWithOneof
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExtensionWithOneof to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ExtensionWithOneof
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ExtensionWithOneof {

                    /** Properties of an ExtensionWithOneof. */
                    interface $Properties {

                        /** ExtensionWithOneof a */
                        a?: (number|null);

                        /** ExtensionWithOneof b */
                        b?: (number|null);

                        /** ExtensionWithOneof oneofField */
                        oneofField?: ("a"|"b");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of an ExtensionWithOneof. */
                    type $Shape = {
                      a?: number|null;
                      b?: number|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ oneofField?: undefined; a?: null; b?: null }|{ oneofField?: "a"; a: number; b?: null }|{ oneofField?: "b"; a?: null; b: number })
                    );
                }

                /** NestedEnum enum. */
                enum NestedEnum {

                    /** FOO value */
                    FOO = 0,

                    /** BAR value */
                    BAR = 1,

                    /** BAZ value */
                    BAZ = 2,

                    /** NEG value */
                    NEG = -1
                }
            }

            /**
             * Properties of a ForeignMessageProto2.
             * @deprecated Use protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties instead.
             */
            interface IForeignMessageProto2 extends protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties {
            }

            /** Represents a ForeignMessageProto2. */
            class ForeignMessageProto2 {

                /** Reflection-backed declarations are not constructable. Use ForeignMessageProto2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ForeignMessageProto2 c. */
                c: number;

                /**
                 * Creates a new ForeignMessageProto2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ForeignMessageProto2 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape): protobuf_test_messages.editions.proto2.ForeignMessageProto2 & protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties): protobuf_test_messages.editions.proto2.ForeignMessageProto2;

                /**
                 * Encodes the specified ForeignMessageProto2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.ForeignMessageProto2.verify|verify} messages.
                 * @param message ForeignMessageProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ForeignMessageProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.ForeignMessageProto2.verify|verify} messages.
                 * @param message ForeignMessageProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ForeignMessageProto2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.ForeignMessageProto2 & protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape} ForeignMessageProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.ForeignMessageProto2 & protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape;

                /**
                 * Decodes a ForeignMessageProto2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.ForeignMessageProto2 & protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape} ForeignMessageProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.ForeignMessageProto2 & protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Shape;

                /**
                 * Verifies a ForeignMessageProto2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ForeignMessageProto2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ForeignMessageProto2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.ForeignMessageProto2;

                /**
                 * Creates a plain object from a ForeignMessageProto2 message. Also converts values to other types if specified.
                 * @param message ForeignMessageProto2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.ForeignMessageProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ForeignMessageProto2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ForeignMessageProto2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ForeignMessageProto2 {

                /** Properties of a ForeignMessageProto2. */
                interface $Properties {

                    /** ForeignMessageProto2 c */
                    c?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ForeignMessageProto2. */
                type $Shape = protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties;
            }

            /**
             * Properties of a GroupField.
             * @deprecated Use protobuf_test_messages.editions.proto2.GroupField.$Properties instead.
             */
            interface IGroupField extends protobuf_test_messages.editions.proto2.GroupField.$Properties {
            }

            /** Represents a GroupField. */
            class GroupField {

                /** Reflection-backed declarations are not constructable. Use GroupField.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** GroupField groupInt32. */
                groupInt32: number;

                /** GroupField groupUint32. */
                groupUint32: number;

                /**
                 * Creates a new GroupField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupField instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.GroupField.$Shape): protobuf_test_messages.editions.proto2.GroupField & protobuf_test_messages.editions.proto2.GroupField.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.GroupField.$Properties): protobuf_test_messages.editions.proto2.GroupField;

                /**
                 * Encodes the specified GroupField message. Does not implicitly {@link protobuf_test_messages.editions.proto2.GroupField.verify|verify} messages.
                 * @param message GroupField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.GroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupField message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.GroupField.verify|verify} messages.
                 * @param message GroupField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.GroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.GroupField & protobuf_test_messages.editions.proto2.GroupField.$Shape} GroupField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.GroupField & protobuf_test_messages.editions.proto2.GroupField.$Shape;

                /**
                 * Decodes a GroupField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.GroupField & protobuf_test_messages.editions.proto2.GroupField.$Shape} GroupField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.GroupField & protobuf_test_messages.editions.proto2.GroupField.$Shape;

                /**
                 * Verifies a GroupField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupField
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.GroupField;

                /**
                 * Creates a plain object from a GroupField message. Also converts values to other types if specified.
                 * @param message GroupField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.GroupField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupField to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for GroupField
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace GroupField {

                /** Properties of a GroupField. */
                interface $Properties {

                    /** GroupField groupInt32 */
                    groupInt32?: (number|null);

                    /** GroupField groupUint32 */
                    groupUint32?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a GroupField. */
                type $Shape = protobuf_test_messages.editions.proto2.GroupField.$Properties;
            }

            /**
             * Properties of an UnknownToTestAllTypes.
             * @deprecated Use protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Properties instead.
             */
            interface IUnknownToTestAllTypes extends protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Properties {
            }

            /** Represents an UnknownToTestAllTypes. */
            class UnknownToTestAllTypes {

                /** Reflection-backed declarations are not constructable. Use UnknownToTestAllTypes.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UnknownToTestAllTypes optionalInt32. */
                optionalInt32: number;

                /** UnknownToTestAllTypes optionalString. */
                optionalString: string;

                /** UnknownToTestAllTypes nestedMessage. */
                nestedMessage?: (protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties|null);

                /** UnknownToTestAllTypes optionalgroup. */
                optionalgroup?: (protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties|null);

                /** UnknownToTestAllTypes optionalBool. */
                optionalBool: boolean;

                /** UnknownToTestAllTypes repeatedInt32. */
                repeatedInt32: number[];

                /**
                 * Creates a new UnknownToTestAllTypes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnknownToTestAllTypes instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Shape): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Properties): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes;

                /**
                 * Encodes the specified UnknownToTestAllTypes message. Does not implicitly {@link protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.verify|verify} messages.
                 * @param message UnknownToTestAllTypes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UnknownToTestAllTypes message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.verify|verify} messages.
                 * @param message UnknownToTestAllTypes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnknownToTestAllTypes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.UnknownToTestAllTypes & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Shape} UnknownToTestAllTypes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Shape;

                /**
                 * Decodes an UnknownToTestAllTypes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.UnknownToTestAllTypes & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Shape} UnknownToTestAllTypes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Shape;

                /**
                 * Verifies an UnknownToTestAllTypes message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UnknownToTestAllTypes message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UnknownToTestAllTypes
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes;

                /**
                 * Creates a plain object from an UnknownToTestAllTypes message. Also converts values to other types if specified.
                 * @param message UnknownToTestAllTypes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UnknownToTestAllTypes to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for UnknownToTestAllTypes
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UnknownToTestAllTypes {

                /** Properties of an UnknownToTestAllTypes. */
                interface $Properties {

                    /** UnknownToTestAllTypes optionalInt32 */
                    optionalInt32?: (number|null);

                    /** UnknownToTestAllTypes optionalString */
                    optionalString?: (string|null);

                    /** UnknownToTestAllTypes nestedMessage */
                    nestedMessage?: (protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties|null);

                    /** UnknownToTestAllTypes optionalgroup */
                    optionalgroup?: (protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties|null);

                    /** UnknownToTestAllTypes optionalBool */
                    optionalBool?: (boolean|null);

                    /** UnknownToTestAllTypes repeatedInt32 */
                    repeatedInt32?: (number[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an UnknownToTestAllTypes. */
                type $Shape = protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.$Properties;

                /**
                 * Properties of an OptionalGroup.
                 * @deprecated Use protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties instead.
                 */
                interface IOptionalGroup extends protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties {
                }

                /** Represents an OptionalGroup. */
                class OptionalGroup {

                    /** Reflection-backed declarations are not constructable. Use OptionalGroup.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** OptionalGroup a. */
                    a: number;

                    /**
                     * Creates a new OptionalGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OptionalGroup instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup;

                    /**
                     * Encodes the specified OptionalGroup message. Does not implicitly {@link protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                     * @param message OptionalGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                     * @param message OptionalGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OptionalGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape} OptionalGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape;

                    /**
                     * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape} OptionalGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape;

                    /**
                     * Verifies an OptionalGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OptionalGroup
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup;

                    /**
                     * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                     * @param message OptionalGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OptionalGroup to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for OptionalGroup
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace OptionalGroup {

                    /** Properties of an OptionalGroup. */
                    interface $Properties {

                        /** OptionalGroup a */
                        a?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an OptionalGroup. */
                    type $Shape = protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties;
                }
            }

            /**
             * Properties of a NullHypothesisProto2.
             * @deprecated Use protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Properties instead.
             */
            interface INullHypothesisProto2 extends protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Properties {
            }

            /** Represents a NullHypothesisProto2. */
            class NullHypothesisProto2 {

                /** Reflection-backed declarations are not constructable. Use NullHypothesisProto2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new NullHypothesisProto2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NullHypothesisProto2 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Shape): protobuf_test_messages.editions.proto2.NullHypothesisProto2 & protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Properties): protobuf_test_messages.editions.proto2.NullHypothesisProto2;

                /**
                 * Encodes the specified NullHypothesisProto2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.NullHypothesisProto2.verify|verify} messages.
                 * @param message NullHypothesisProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NullHypothesisProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.NullHypothesisProto2.verify|verify} messages.
                 * @param message NullHypothesisProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NullHypothesisProto2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.NullHypothesisProto2 & protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Shape} NullHypothesisProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.NullHypothesisProto2 & protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Shape;

                /**
                 * Decodes a NullHypothesisProto2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.NullHypothesisProto2 & protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Shape} NullHypothesisProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.NullHypothesisProto2 & protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Shape;

                /**
                 * Verifies a NullHypothesisProto2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NullHypothesisProto2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NullHypothesisProto2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.NullHypothesisProto2;

                /**
                 * Creates a plain object from a NullHypothesisProto2 message. Also converts values to other types if specified.
                 * @param message NullHypothesisProto2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.NullHypothesisProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NullHypothesisProto2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NullHypothesisProto2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NullHypothesisProto2 {

                /** Properties of a NullHypothesisProto2. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NullHypothesisProto2. */
                type $Shape = protobuf_test_messages.editions.proto2.NullHypothesisProto2.$Properties;
            }

            /**
             * Properties of an EnumOnlyProto2.
             * @deprecated Use protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Properties instead.
             */
            interface IEnumOnlyProto2 extends protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Properties {
            }

            /** Represents an EnumOnlyProto2. */
            class EnumOnlyProto2 {

                /** Reflection-backed declarations are not constructable. Use EnumOnlyProto2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new EnumOnlyProto2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumOnlyProto2 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Shape): protobuf_test_messages.editions.proto2.EnumOnlyProto2 & protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Properties): protobuf_test_messages.editions.proto2.EnumOnlyProto2;

                /**
                 * Encodes the specified EnumOnlyProto2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.EnumOnlyProto2.verify|verify} messages.
                 * @param message EnumOnlyProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumOnlyProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.EnumOnlyProto2.verify|verify} messages.
                 * @param message EnumOnlyProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumOnlyProto2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.EnumOnlyProto2 & protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Shape} EnumOnlyProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.EnumOnlyProto2 & protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Shape;

                /**
                 * Decodes an EnumOnlyProto2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.EnumOnlyProto2 & protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Shape} EnumOnlyProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.EnumOnlyProto2 & protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Shape;

                /**
                 * Verifies an EnumOnlyProto2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumOnlyProto2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumOnlyProto2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.EnumOnlyProto2;

                /**
                 * Creates a plain object from an EnumOnlyProto2 message. Also converts values to other types if specified.
                 * @param message EnumOnlyProto2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.EnumOnlyProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumOnlyProto2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for EnumOnlyProto2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace EnumOnlyProto2 {

                /** Properties of an EnumOnlyProto2. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an EnumOnlyProto2. */
                type $Shape = protobuf_test_messages.editions.proto2.EnumOnlyProto2.$Properties;

                /** Bool enum. */
                enum Bool {

                    /** kFalse value */
                    kFalse = 0,

                    /** kTrue value */
                    kTrue = 1
                }
            }

            /**
             * Properties of a OneStringProto2.
             * @deprecated Use protobuf_test_messages.editions.proto2.OneStringProto2.$Properties instead.
             */
            interface IOneStringProto2 extends protobuf_test_messages.editions.proto2.OneStringProto2.$Properties {
            }

            /** Represents a OneStringProto2. */
            class OneStringProto2 {

                /** Reflection-backed declarations are not constructable. Use OneStringProto2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OneStringProto2 data. */
                data: string;

                /**
                 * Creates a new OneStringProto2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OneStringProto2 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.OneStringProto2.$Shape): protobuf_test_messages.editions.proto2.OneStringProto2 & protobuf_test_messages.editions.proto2.OneStringProto2.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.OneStringProto2.$Properties): protobuf_test_messages.editions.proto2.OneStringProto2;

                /**
                 * Encodes the specified OneStringProto2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.OneStringProto2.verify|verify} messages.
                 * @param message OneStringProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.OneStringProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OneStringProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.OneStringProto2.verify|verify} messages.
                 * @param message OneStringProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.OneStringProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a OneStringProto2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.OneStringProto2 & protobuf_test_messages.editions.proto2.OneStringProto2.$Shape} OneStringProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.OneStringProto2 & protobuf_test_messages.editions.proto2.OneStringProto2.$Shape;

                /**
                 * Decodes a OneStringProto2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.OneStringProto2 & protobuf_test_messages.editions.proto2.OneStringProto2.$Shape} OneStringProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.OneStringProto2 & protobuf_test_messages.editions.proto2.OneStringProto2.$Shape;

                /**
                 * Verifies a OneStringProto2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a OneStringProto2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OneStringProto2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.OneStringProto2;

                /**
                 * Creates a plain object from a OneStringProto2 message. Also converts values to other types if specified.
                 * @param message OneStringProto2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.OneStringProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OneStringProto2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for OneStringProto2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OneStringProto2 {

                /** Properties of a OneStringProto2. */
                interface $Properties {

                    /** OneStringProto2 data */
                    data?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a OneStringProto2. */
                type $Shape = protobuf_test_messages.editions.proto2.OneStringProto2.$Properties;
            }

            /**
             * Properties of a ProtoWithKeywords.
             * @deprecated Use protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Properties instead.
             */
            interface IProtoWithKeywords extends protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Properties {
            }

            /** Represents a ProtoWithKeywords. */
            class ProtoWithKeywords {

                /** Reflection-backed declarations are not constructable. Use ProtoWithKeywords.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ProtoWithKeywords inline. */
                inline: number;

                /** ProtoWithKeywords concept. */
                concept: string;

                /** ProtoWithKeywords requires. */
                requires: string[];

                /**
                 * Creates a new ProtoWithKeywords instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProtoWithKeywords instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Shape): protobuf_test_messages.editions.proto2.ProtoWithKeywords & protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Properties): protobuf_test_messages.editions.proto2.ProtoWithKeywords;

                /**
                 * Encodes the specified ProtoWithKeywords message. Does not implicitly {@link protobuf_test_messages.editions.proto2.ProtoWithKeywords.verify|verify} messages.
                 * @param message ProtoWithKeywords message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProtoWithKeywords message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.ProtoWithKeywords.verify|verify} messages.
                 * @param message ProtoWithKeywords message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProtoWithKeywords message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.ProtoWithKeywords & protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Shape} ProtoWithKeywords
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.ProtoWithKeywords & protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Shape;

                /**
                 * Decodes a ProtoWithKeywords message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.ProtoWithKeywords & protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Shape} ProtoWithKeywords
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.ProtoWithKeywords & protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Shape;

                /**
                 * Verifies a ProtoWithKeywords message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProtoWithKeywords message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProtoWithKeywords
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.ProtoWithKeywords;

                /**
                 * Creates a plain object from a ProtoWithKeywords message. Also converts values to other types if specified.
                 * @param message ProtoWithKeywords
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.ProtoWithKeywords, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProtoWithKeywords to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ProtoWithKeywords
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ProtoWithKeywords {

                /** Properties of a ProtoWithKeywords. */
                interface $Properties {

                    /** ProtoWithKeywords inline */
                    inline?: (number|null);

                    /** ProtoWithKeywords concept */
                    concept?: (string|null);

                    /** ProtoWithKeywords requires */
                    requires?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ProtoWithKeywords. */
                type $Shape = protobuf_test_messages.editions.proto2.ProtoWithKeywords.$Properties;
            }

            /**
             * Properties of a TestAllRequiredTypesProto2.
             * @deprecated Use protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties instead.
             */
            interface ITestAllRequiredTypesProto2 extends protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties {
            }

            /** Represents a TestAllRequiredTypesProto2. */
            class TestAllRequiredTypesProto2 {

                /** Reflection-backed declarations are not constructable. Use TestAllRequiredTypesProto2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TestAllRequiredTypesProto2 requiredInt32. */
                requiredInt32: number;

                /** TestAllRequiredTypesProto2 requiredInt64. */
                requiredInt64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredUint32. */
                requiredUint32: number;

                /** TestAllRequiredTypesProto2 requiredUint64. */
                requiredUint64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredSint32. */
                requiredSint32: number;

                /** TestAllRequiredTypesProto2 requiredSint64. */
                requiredSint64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredFixed32. */
                requiredFixed32: number;

                /** TestAllRequiredTypesProto2 requiredFixed64. */
                requiredFixed64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredSfixed32. */
                requiredSfixed32: number;

                /** TestAllRequiredTypesProto2 requiredSfixed64. */
                requiredSfixed64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredFloat. */
                requiredFloat: number;

                /** TestAllRequiredTypesProto2 requiredDouble. */
                requiredDouble: number;

                /** TestAllRequiredTypesProto2 requiredBool. */
                requiredBool: boolean;

                /** TestAllRequiredTypesProto2 requiredString. */
                requiredString: string;

                /** TestAllRequiredTypesProto2 requiredBytes. */
                requiredBytes: Uint8Array;

                /** TestAllRequiredTypesProto2 requiredNestedMessage. */
                requiredNestedMessage: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties;

                /** TestAllRequiredTypesProto2 requiredForeignMessage. */
                requiredForeignMessage: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties;

                /** TestAllRequiredTypesProto2 requiredNestedEnum. */
                requiredNestedEnum: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedEnum;

                /** TestAllRequiredTypesProto2 requiredForeignEnum. */
                requiredForeignEnum: protobuf_test_messages.editions.proto2.ForeignEnumProto2;

                /** TestAllRequiredTypesProto2 requiredStringPiece. */
                requiredStringPiece: string;

                /** TestAllRequiredTypesProto2 requiredCord. */
                requiredCord: string;

                /** TestAllRequiredTypesProto2 recursiveMessage. */
                recursiveMessage: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties;

                /** TestAllRequiredTypesProto2 optionalRecursiveMessage. */
                optionalRecursiveMessage?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties|null);

                /** TestAllRequiredTypesProto2 data. */
                data: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties;

                /** TestAllRequiredTypesProto2 defaultInt32. */
                defaultInt32: number;

                /** TestAllRequiredTypesProto2 defaultInt64. */
                defaultInt64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultUint32. */
                defaultUint32: number;

                /** TestAllRequiredTypesProto2 defaultUint64. */
                defaultUint64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultSint32. */
                defaultSint32: number;

                /** TestAllRequiredTypesProto2 defaultSint64. */
                defaultSint64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultFixed32. */
                defaultFixed32: number;

                /** TestAllRequiredTypesProto2 defaultFixed64. */
                defaultFixed64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultSfixed32. */
                defaultSfixed32: number;

                /** TestAllRequiredTypesProto2 defaultSfixed64. */
                defaultSfixed64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultFloat. */
                defaultFloat: number;

                /** TestAllRequiredTypesProto2 defaultDouble. */
                defaultDouble: number;

                /** TestAllRequiredTypesProto2 defaultBool. */
                defaultBool: boolean;

                /** TestAllRequiredTypesProto2 defaultString. */
                defaultString: string;

                /** TestAllRequiredTypesProto2 defaultBytes. */
                defaultBytes: Uint8Array;

                /**
                 * Creates a new TestAllRequiredTypesProto2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestAllRequiredTypesProto2 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Shape): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2;

                /**
                 * Encodes the specified TestAllRequiredTypesProto2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.verify|verify} messages.
                 * @param message TestAllRequiredTypesProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestAllRequiredTypesProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.verify|verify} messages.
                 * @param message TestAllRequiredTypesProto2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestAllRequiredTypesProto2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Shape} TestAllRequiredTypesProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Shape;

                /**
                 * Decodes a TestAllRequiredTypesProto2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Shape} TestAllRequiredTypesProto2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Shape;

                /**
                 * Verifies a TestAllRequiredTypesProto2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestAllRequiredTypesProto2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestAllRequiredTypesProto2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2;

                /**
                 * Creates a plain object from a TestAllRequiredTypesProto2 message. Also converts values to other types if specified.
                 * @param message TestAllRequiredTypesProto2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestAllRequiredTypesProto2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for TestAllRequiredTypesProto2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TestAllRequiredTypesProto2 {

                /** Properties of a TestAllRequiredTypesProto2. */
                interface $Properties {

                    /** TestAllRequiredTypesProto2 requiredInt32 */
                    requiredInt32: number;

                    /** TestAllRequiredTypesProto2 requiredInt64 */
                    requiredInt64: (number|Long);

                    /** TestAllRequiredTypesProto2 requiredUint32 */
                    requiredUint32: number;

                    /** TestAllRequiredTypesProto2 requiredUint64 */
                    requiredUint64: (number|Long);

                    /** TestAllRequiredTypesProto2 requiredSint32 */
                    requiredSint32: number;

                    /** TestAllRequiredTypesProto2 requiredSint64 */
                    requiredSint64: (number|Long);

                    /** TestAllRequiredTypesProto2 requiredFixed32 */
                    requiredFixed32: number;

                    /** TestAllRequiredTypesProto2 requiredFixed64 */
                    requiredFixed64: (number|Long);

                    /** TestAllRequiredTypesProto2 requiredSfixed32 */
                    requiredSfixed32: number;

                    /** TestAllRequiredTypesProto2 requiredSfixed64 */
                    requiredSfixed64: (number|Long);

                    /** TestAllRequiredTypesProto2 requiredFloat */
                    requiredFloat: number;

                    /** TestAllRequiredTypesProto2 requiredDouble */
                    requiredDouble: number;

                    /** TestAllRequiredTypesProto2 requiredBool */
                    requiredBool: boolean;

                    /** TestAllRequiredTypesProto2 requiredString */
                    requiredString: string;

                    /** TestAllRequiredTypesProto2 requiredBytes */
                    requiredBytes: Uint8Array;

                    /** TestAllRequiredTypesProto2 requiredNestedMessage */
                    requiredNestedMessage: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties;

                    /** TestAllRequiredTypesProto2 requiredForeignMessage */
                    requiredForeignMessage: protobuf_test_messages.editions.proto2.ForeignMessageProto2.$Properties;

                    /** TestAllRequiredTypesProto2 requiredNestedEnum */
                    requiredNestedEnum: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedEnum;

                    /** TestAllRequiredTypesProto2 requiredForeignEnum */
                    requiredForeignEnum: protobuf_test_messages.editions.proto2.ForeignEnumProto2;

                    /** TestAllRequiredTypesProto2 requiredStringPiece */
                    requiredStringPiece: string;

                    /** TestAllRequiredTypesProto2 requiredCord */
                    requiredCord: string;

                    /** TestAllRequiredTypesProto2 recursiveMessage */
                    recursiveMessage: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties;

                    /** TestAllRequiredTypesProto2 optionalRecursiveMessage */
                    optionalRecursiveMessage?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties|null);

                    /** TestAllRequiredTypesProto2 data */
                    data: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties;

                    /** TestAllRequiredTypesProto2 defaultInt32 */
                    defaultInt32: number;

                    /** TestAllRequiredTypesProto2 defaultInt64 */
                    defaultInt64: (number|Long);

                    /** TestAllRequiredTypesProto2 defaultUint32 */
                    defaultUint32: number;

                    /** TestAllRequiredTypesProto2 defaultUint64 */
                    defaultUint64: (number|Long);

                    /** TestAllRequiredTypesProto2 defaultSint32 */
                    defaultSint32: number;

                    /** TestAllRequiredTypesProto2 defaultSint64 */
                    defaultSint64: (number|Long);

                    /** TestAllRequiredTypesProto2 defaultFixed32 */
                    defaultFixed32: number;

                    /** TestAllRequiredTypesProto2 defaultFixed64 */
                    defaultFixed64: (number|Long);

                    /** TestAllRequiredTypesProto2 defaultSfixed32 */
                    defaultSfixed32: number;

                    /** TestAllRequiredTypesProto2 defaultSfixed64 */
                    defaultSfixed64: (number|Long);

                    /** TestAllRequiredTypesProto2 defaultFloat */
                    defaultFloat: number;

                    /** TestAllRequiredTypesProto2 defaultDouble */
                    defaultDouble: number;

                    /** TestAllRequiredTypesProto2 defaultBool */
                    defaultBool: boolean;

                    /** TestAllRequiredTypesProto2 defaultString */
                    defaultString: string;

                    /** TestAllRequiredTypesProto2 defaultBytes */
                    defaultBytes: Uint8Array;

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TestAllRequiredTypesProto2. */
                type $Shape = protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties;

                /**
                 * Properties of a NestedMessage.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties instead.
                 */
                interface INestedMessage extends protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties {
                }

                /** Represents a NestedMessage. */
                class NestedMessage {

                    /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** NestedMessage a. */
                    a: number;

                    /** NestedMessage corecursive. */
                    corecursive: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties;

                    /** NestedMessage optionalCorecursive. */
                    optionalCorecursive?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties|null);

                    /**
                     * Creates a new NestedMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NestedMessage instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage;

                    /**
                     * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.verify|verify} messages.
                     * @param message NestedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.verify|verify} messages.
                     * @param message NestedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape;

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape;

                    /**
                     * Verifies a NestedMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NestedMessage
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage;

                    /**
                     * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                     * @param message NestedMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NestedMessage to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for NestedMessage
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace NestedMessage {

                    /** Properties of a NestedMessage. */
                    interface $Properties {

                        /** NestedMessage a */
                        a: number;

                        /** NestedMessage corecursive */
                        corecursive: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties;

                        /** NestedMessage optionalCorecursive */
                        optionalCorecursive?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a NestedMessage. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties;
                }

                /**
                 * Properties of a Data.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties instead.
                 */
                interface IData extends protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties {
                }

                /** Represents a Data. */
                class Data {

                    /** Reflection-backed declarations are not constructable. Use Data.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Data groupInt32. */
                    groupInt32: number;

                    /** Data groupUint32. */
                    groupUint32: number;

                    /**
                     * Creates a new Data instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Data instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Shape): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data;

                    /**
                     * Encodes the specified Data message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.verify|verify} messages.
                     * @param message Data message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Data message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.verify|verify} messages.
                     * @param message Data message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Data message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Shape} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Shape;

                    /**
                     * Decodes a Data message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Shape} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Shape;

                    /**
                     * Verifies a Data message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Data message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Data
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data;

                    /**
                     * Creates a plain object from a Data message. Also converts values to other types if specified.
                     * @param message Data
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Data to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Data
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Data {

                    /** Properties of a Data. */
                    interface $Properties {

                        /** Data groupInt32 */
                        groupInt32: number;

                        /** Data groupUint32 */
                        groupUint32: number;

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Data. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data.$Properties;
                }

                /**
                 * Properties of a MessageSetCorrect.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties instead.
                 */
                interface IMessageSetCorrect extends protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties {
                }

                /** Represents a MessageSetCorrect. */
                class MessageSetCorrect {

                    /** Reflection-backed declarations are not constructable. Use MessageSetCorrect.create(...) instead. */
                    private constructor();

                    /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                    ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                    /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                    ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new MessageSetCorrect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageSetCorrect instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect;

                    /**
                     * Encodes the specified MessageSetCorrect message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.verify|verify} messages.
                     * @param message MessageSetCorrect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageSetCorrect message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.verify|verify} messages.
                     * @param message MessageSetCorrect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageSetCorrect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape;

                    /**
                     * Decodes a MessageSetCorrect message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape;

                    /**
                     * Verifies a MessageSetCorrect message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageSetCorrect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageSetCorrect
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect;

                    /**
                     * Creates a plain object from a MessageSetCorrect message. Also converts values to other types if specified.
                     * @param message MessageSetCorrect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageSetCorrect to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MessageSetCorrect
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageSetCorrect {

                    /** Properties of a MessageSetCorrect. */
                    interface $Properties {

                        /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                        ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                        /** MessageSetCorrect .protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                        ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageSetCorrect. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties;
                }

                /**
                 * Properties of a MessageSetCorrectExtension1.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties instead.
                 */
                interface IMessageSetCorrectExtension1 extends protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties {
                }

                /** Represents a MessageSetCorrectExtension1. */
                class MessageSetCorrectExtension1 {

                    /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension1.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageSetCorrectExtension1 str. */
                    str: string;

                    /**
                     * Creates a new MessageSetCorrectExtension1 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageSetCorrectExtension1 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1;

                    /**
                     * Encodes the specified MessageSetCorrectExtension1 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                     * @param message MessageSetCorrectExtension1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageSetCorrectExtension1 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                     * @param message MessageSetCorrectExtension1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape;

                    /**
                     * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape;

                    /**
                     * Verifies a MessageSetCorrectExtension1 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageSetCorrectExtension1 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageSetCorrectExtension1
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1;

                    /**
                     * Creates a plain object from a MessageSetCorrectExtension1 message. Also converts values to other types if specified.
                     * @param message MessageSetCorrectExtension1
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageSetCorrectExtension1 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MessageSetCorrectExtension1
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageSetCorrectExtension1 {

                    /** Properties of a MessageSetCorrectExtension1. */
                    interface $Properties {

                        /** MessageSetCorrectExtension1 str */
                        str: string;

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageSetCorrectExtension1. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties;
                }

                /**
                 * Properties of a MessageSetCorrectExtension2.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties instead.
                 */
                interface IMessageSetCorrectExtension2 extends protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties {
                }

                /** Represents a MessageSetCorrectExtension2. */
                class MessageSetCorrectExtension2 {

                    /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension2.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageSetCorrectExtension2 i. */
                    i: number;

                    /**
                     * Creates a new MessageSetCorrectExtension2 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageSetCorrectExtension2 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2;

                    /**
                     * Encodes the specified MessageSetCorrectExtension2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                     * @param message MessageSetCorrectExtension2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageSetCorrectExtension2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                     * @param message MessageSetCorrectExtension2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape;

                    /**
                     * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape;

                    /**
                     * Verifies a MessageSetCorrectExtension2 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageSetCorrectExtension2 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageSetCorrectExtension2
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2;

                    /**
                     * Creates a plain object from a MessageSetCorrectExtension2 message. Also converts values to other types if specified.
                     * @param message MessageSetCorrectExtension2
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageSetCorrectExtension2 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MessageSetCorrectExtension2
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageSetCorrectExtension2 {

                    /** Properties of a MessageSetCorrectExtension2. */
                    interface $Properties {

                        /** MessageSetCorrectExtension2 i */
                        i: number;

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageSetCorrectExtension2. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties;
                }

                /** NestedEnum enum. */
                enum NestedEnum {

                    /** FOO value */
                    FOO = 0,

                    /** BAR value */
                    BAR = 1,

                    /** BAZ value */
                    BAZ = 2,

                    /** NEG value */
                    NEG = -1
                }
            }

            /**
             * Properties of a TestLargeOneof.
             * @deprecated Use protobuf_test_messages.editions.proto2.TestLargeOneof.$Properties instead.
             */
            interface ITestLargeOneof extends protobuf_test_messages.editions.proto2.TestLargeOneof.$Properties {
            }

            /** Represents a TestLargeOneof. */
            class TestLargeOneof {

                /** Reflection-backed declarations are not constructable. Use TestLargeOneof.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TestLargeOneof a1. */
                a1?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties|null);

                /** TestLargeOneof a2. */
                a2?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties|null);

                /** TestLargeOneof a3. */
                a3?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties|null);

                /** TestLargeOneof a4. */
                a4?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties|null);

                /** TestLargeOneof a5. */
                a5?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties|null);

                /** TestLargeOneof largeOneof. */
                largeOneof?: ("a1"|"a2"|"a3"|"a4"|"a5");

                /**
                 * Creates a new TestLargeOneof instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestLargeOneof instance
                 */
                static create(properties: protobuf_test_messages.editions.proto2.TestLargeOneof.$Shape): protobuf_test_messages.editions.proto2.TestLargeOneof & protobuf_test_messages.editions.proto2.TestLargeOneof.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto2.TestLargeOneof.$Properties): protobuf_test_messages.editions.proto2.TestLargeOneof;

                /**
                 * Encodes the specified TestLargeOneof message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.verify|verify} messages.
                 * @param message TestLargeOneof message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto2.TestLargeOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestLargeOneof message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.verify|verify} messages.
                 * @param message TestLargeOneof message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestLargeOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestLargeOneof message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof & protobuf_test_messages.editions.proto2.TestLargeOneof.$Shape} TestLargeOneof
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestLargeOneof & protobuf_test_messages.editions.proto2.TestLargeOneof.$Shape;

                /**
                 * Decodes a TestLargeOneof message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof & protobuf_test_messages.editions.proto2.TestLargeOneof.$Shape} TestLargeOneof
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestLargeOneof & protobuf_test_messages.editions.proto2.TestLargeOneof.$Shape;

                /**
                 * Verifies a TestLargeOneof message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestLargeOneof message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestLargeOneof
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestLargeOneof;

                /**
                 * Creates a plain object from a TestLargeOneof message. Also converts values to other types if specified.
                 * @param message TestLargeOneof
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto2.TestLargeOneof, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestLargeOneof to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for TestLargeOneof
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TestLargeOneof {

                /** Properties of a TestLargeOneof. */
                interface $Properties {

                    /** TestLargeOneof a1 */
                    a1?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties|null);

                    /** TestLargeOneof a2 */
                    a2?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties|null);

                    /** TestLargeOneof a3 */
                    a3?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties|null);

                    /** TestLargeOneof a4 */
                    a4?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties|null);

                    /** TestLargeOneof a5 */
                    a5?: (protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties|null);

                    /** TestLargeOneof largeOneof */
                    largeOneof?: ("a1"|"a2"|"a3"|"a4"|"a5");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a TestLargeOneof. */
                type $Shape = {
                  a1?: protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape|null;
                  a2?: protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape|null;
                  a3?: protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape|null;
                  a4?: protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape|null;
                  a5?: protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ largeOneof?: undefined; a1?: null; a2?: null; a3?: null; a4?: null; a5?: null }|{ largeOneof?: "a1"; a1: protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape; a2?: null; a3?: null; a4?: null; a5?: null }|{ largeOneof?: "a2"; a1?: null; a2: protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape; a3?: null; a4?: null; a5?: null }|{ largeOneof?: "a3"; a1?: null; a2?: null; a3: protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape; a4?: null; a5?: null }|{ largeOneof?: "a4"; a1?: null; a2?: null; a3?: null; a4: protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape; a5?: null }|{ largeOneof?: "a5"; a1?: null; a2?: null; a3?: null; a4?: null; a5: protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape })
                );

                /**
                 * Properties of a A1.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties instead.
                 */
                interface IA1 extends protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties {
                }

                /** Represents a A1. */
                class A1 {

                    /** Reflection-backed declarations are not constructable. Use A1.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new A1 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns A1 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape): protobuf_test_messages.editions.proto2.TestLargeOneof.A1 & protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties): protobuf_test_messages.editions.proto2.TestLargeOneof.A1;

                    /**
                     * Encodes the specified A1 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A1.verify|verify} messages.
                     * @param message A1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified A1 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A1.verify|verify} messages.
                     * @param message A1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a A1 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A1 & protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape} A1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestLargeOneof.A1 & protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape;

                    /**
                     * Decodes a A1 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A1 & protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape} A1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestLargeOneof.A1 & protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Shape;

                    /**
                     * Verifies a A1 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a A1 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns A1
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestLargeOneof.A1;

                    /**
                     * Creates a plain object from a A1 message. Also converts values to other types if specified.
                     * @param message A1
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this A1 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for A1
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace A1 {

                    /** Properties of a A1. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a A1. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestLargeOneof.A1.$Properties;
                }

                /**
                 * Properties of a A2.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties instead.
                 */
                interface IA2 extends protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties {
                }

                /** Represents a A2. */
                class A2 {

                    /** Reflection-backed declarations are not constructable. Use A2.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new A2 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns A2 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape): protobuf_test_messages.editions.proto2.TestLargeOneof.A2 & protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties): protobuf_test_messages.editions.proto2.TestLargeOneof.A2;

                    /**
                     * Encodes the specified A2 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A2.verify|verify} messages.
                     * @param message A2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified A2 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A2.verify|verify} messages.
                     * @param message A2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a A2 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A2 & protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape} A2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestLargeOneof.A2 & protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape;

                    /**
                     * Decodes a A2 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A2 & protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape} A2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestLargeOneof.A2 & protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Shape;

                    /**
                     * Verifies a A2 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a A2 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns A2
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestLargeOneof.A2;

                    /**
                     * Creates a plain object from a A2 message. Also converts values to other types if specified.
                     * @param message A2
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this A2 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for A2
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace A2 {

                    /** Properties of a A2. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a A2. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestLargeOneof.A2.$Properties;
                }

                /**
                 * Properties of a A3.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties instead.
                 */
                interface IA3 extends protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties {
                }

                /** Represents a A3. */
                class A3 {

                    /** Reflection-backed declarations are not constructable. Use A3.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new A3 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns A3 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape): protobuf_test_messages.editions.proto2.TestLargeOneof.A3 & protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties): protobuf_test_messages.editions.proto2.TestLargeOneof.A3;

                    /**
                     * Encodes the specified A3 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A3.verify|verify} messages.
                     * @param message A3 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified A3 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A3.verify|verify} messages.
                     * @param message A3 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a A3 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A3 & protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape} A3
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestLargeOneof.A3 & protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape;

                    /**
                     * Decodes a A3 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A3 & protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape} A3
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestLargeOneof.A3 & protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Shape;

                    /**
                     * Verifies a A3 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a A3 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns A3
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestLargeOneof.A3;

                    /**
                     * Creates a plain object from a A3 message. Also converts values to other types if specified.
                     * @param message A3
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A3, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this A3 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for A3
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace A3 {

                    /** Properties of a A3. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a A3. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestLargeOneof.A3.$Properties;
                }

                /**
                 * Properties of a A4.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties instead.
                 */
                interface IA4 extends protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties {
                }

                /** Represents a A4. */
                class A4 {

                    /** Reflection-backed declarations are not constructable. Use A4.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new A4 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns A4 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape): protobuf_test_messages.editions.proto2.TestLargeOneof.A4 & protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties): protobuf_test_messages.editions.proto2.TestLargeOneof.A4;

                    /**
                     * Encodes the specified A4 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A4.verify|verify} messages.
                     * @param message A4 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified A4 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A4.verify|verify} messages.
                     * @param message A4 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a A4 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A4 & protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape} A4
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestLargeOneof.A4 & protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape;

                    /**
                     * Decodes a A4 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A4 & protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape} A4
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestLargeOneof.A4 & protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Shape;

                    /**
                     * Verifies a A4 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a A4 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns A4
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestLargeOneof.A4;

                    /**
                     * Creates a plain object from a A4 message. Also converts values to other types if specified.
                     * @param message A4
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A4, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this A4 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for A4
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace A4 {

                    /** Properties of a A4. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a A4. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestLargeOneof.A4.$Properties;
                }

                /**
                 * Properties of a A5.
                 * @deprecated Use protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties instead.
                 */
                interface IA5 extends protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties {
                }

                /** Represents a A5. */
                class A5 {

                    /** Reflection-backed declarations are not constructable. Use A5.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new A5 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns A5 instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape): protobuf_test_messages.editions.proto2.TestLargeOneof.A5 & protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties): protobuf_test_messages.editions.proto2.TestLargeOneof.A5;

                    /**
                     * Encodes the specified A5 message. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A5.verify|verify} messages.
                     * @param message A5 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified A5 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto2.TestLargeOneof.A5.verify|verify} messages.
                     * @param message A5 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a A5 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A5 & protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape} A5
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto2.TestLargeOneof.A5 & protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape;

                    /**
                     * Decodes a A5 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto2.TestLargeOneof.A5 & protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape} A5
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto2.TestLargeOneof.A5 & protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Shape;

                    /**
                     * Verifies a A5 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a A5 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns A5
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto2.TestLargeOneof.A5;

                    /**
                     * Creates a plain object from a A5 message. Also converts values to other types if specified.
                     * @param message A5
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto2.TestLargeOneof.A5, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this A5 to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for A5
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace A5 {

                    /** Properties of a A5. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a A5. */
                    type $Shape = protobuf_test_messages.editions.proto2.TestLargeOneof.A5.$Properties;
                }
            }

            /** ForeignEnumProto2 enum. */
            enum ForeignEnumProto2 {

                /** FOREIGN_FOO value */
                FOREIGN_FOO = 0,

                /** FOREIGN_BAR value */
                FOREIGN_BAR = 1,

                /** FOREIGN_BAZ value */
                FOREIGN_BAZ = 2
            }
        }

        /** Namespace proto3. */
        namespace proto3 {

            /**
             * Properties of a TestAllTypesProto3.
             * @deprecated Use protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties instead.
             */
            interface ITestAllTypesProto3 extends protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties {
            }

            /** Represents a TestAllTypesProto3. */
            class TestAllTypesProto3 {

                /** Reflection-backed declarations are not constructable. Use TestAllTypesProto3.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TestAllTypesProto3 optionalInt32. */
                optionalInt32: number;

                /** TestAllTypesProto3 optionalInt64. */
                optionalInt64: (number|Long);

                /** TestAllTypesProto3 optionalUint32. */
                optionalUint32: number;

                /** TestAllTypesProto3 optionalUint64. */
                optionalUint64: (number|Long);

                /** TestAllTypesProto3 optionalSint32. */
                optionalSint32: number;

                /** TestAllTypesProto3 optionalSint64. */
                optionalSint64: (number|Long);

                /** TestAllTypesProto3 optionalFixed32. */
                optionalFixed32: number;

                /** TestAllTypesProto3 optionalFixed64. */
                optionalFixed64: (number|Long);

                /** TestAllTypesProto3 optionalSfixed32. */
                optionalSfixed32: number;

                /** TestAllTypesProto3 optionalSfixed64. */
                optionalSfixed64: (number|Long);

                /** TestAllTypesProto3 optionalFloat. */
                optionalFloat: number;

                /** TestAllTypesProto3 optionalDouble. */
                optionalDouble: number;

                /** TestAllTypesProto3 optionalBool. */
                optionalBool: boolean;

                /** TestAllTypesProto3 optionalString. */
                optionalString: string;

                /** TestAllTypesProto3 optionalBytes. */
                optionalBytes: Uint8Array;

                /** TestAllTypesProto3 optionalNestedMessage. */
                optionalNestedMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

                /** TestAllTypesProto3 optionalForeignMessage. */
                optionalForeignMessage?: (protobuf_test_messages.editions.proto3.ForeignMessage.$Properties|null);

                /** TestAllTypesProto3 optionalNestedEnum. */
                optionalNestedEnum: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum;

                /** TestAllTypesProto3 optionalForeignEnum. */
                optionalForeignEnum: protobuf_test_messages.editions.proto3.ForeignEnum;

                /** TestAllTypesProto3 optionalAliasedEnum. */
                optionalAliasedEnum: protobuf_test_messages.editions.proto3.TestAllTypesProto3.AliasedEnum;

                /** TestAllTypesProto3 optionalStringPiece. */
                optionalStringPiece: string;

                /** TestAllTypesProto3 optionalCord. */
                optionalCord: string;

                /** TestAllTypesProto3 recursiveMessage. */
                recursiveMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties|null);

                /** TestAllTypesProto3 repeatedInt32. */
                repeatedInt32: number[];

                /** TestAllTypesProto3 repeatedInt64. */
                repeatedInt64: (number|Long)[];

                /** TestAllTypesProto3 repeatedUint32. */
                repeatedUint32: number[];

                /** TestAllTypesProto3 repeatedUint64. */
                repeatedUint64: (number|Long)[];

                /** TestAllTypesProto3 repeatedSint32. */
                repeatedSint32: number[];

                /** TestAllTypesProto3 repeatedSint64. */
                repeatedSint64: (number|Long)[];

                /** TestAllTypesProto3 repeatedFixed32. */
                repeatedFixed32: number[];

                /** TestAllTypesProto3 repeatedFixed64. */
                repeatedFixed64: (number|Long)[];

                /** TestAllTypesProto3 repeatedSfixed32. */
                repeatedSfixed32: number[];

                /** TestAllTypesProto3 repeatedSfixed64. */
                repeatedSfixed64: (number|Long)[];

                /** TestAllTypesProto3 repeatedFloat. */
                repeatedFloat: number[];

                /** TestAllTypesProto3 repeatedDouble. */
                repeatedDouble: number[];

                /** TestAllTypesProto3 repeatedBool. */
                repeatedBool: boolean[];

                /** TestAllTypesProto3 repeatedString. */
                repeatedString: string[];

                /** TestAllTypesProto3 repeatedBytes. */
                repeatedBytes: Uint8Array[];

                /** TestAllTypesProto3 repeatedNestedMessage. */
                repeatedNestedMessage: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties[];

                /** TestAllTypesProto3 repeatedForeignMessage. */
                repeatedForeignMessage: protobuf_test_messages.editions.proto3.ForeignMessage.$Properties[];

                /** TestAllTypesProto3 repeatedNestedEnum. */
                repeatedNestedEnum: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[];

                /** TestAllTypesProto3 repeatedForeignEnum. */
                repeatedForeignEnum: protobuf_test_messages.editions.proto3.ForeignEnum[];

                /** TestAllTypesProto3 repeatedStringPiece. */
                repeatedStringPiece: string[];

                /** TestAllTypesProto3 repeatedCord. */
                repeatedCord: string[];

                /** TestAllTypesProto3 packedInt32. */
                packedInt32: number[];

                /** TestAllTypesProto3 packedInt64. */
                packedInt64: (number|Long)[];

                /** TestAllTypesProto3 packedUint32. */
                packedUint32: number[];

                /** TestAllTypesProto3 packedUint64. */
                packedUint64: (number|Long)[];

                /** TestAllTypesProto3 packedSint32. */
                packedSint32: number[];

                /** TestAllTypesProto3 packedSint64. */
                packedSint64: (number|Long)[];

                /** TestAllTypesProto3 packedFixed32. */
                packedFixed32: number[];

                /** TestAllTypesProto3 packedFixed64. */
                packedFixed64: (number|Long)[];

                /** TestAllTypesProto3 packedSfixed32. */
                packedSfixed32: number[];

                /** TestAllTypesProto3 packedSfixed64. */
                packedSfixed64: (number|Long)[];

                /** TestAllTypesProto3 packedFloat. */
                packedFloat: number[];

                /** TestAllTypesProto3 packedDouble. */
                packedDouble: number[];

                /** TestAllTypesProto3 packedBool. */
                packedBool: boolean[];

                /** TestAllTypesProto3 packedNestedEnum. */
                packedNestedEnum: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[];

                /** TestAllTypesProto3 unpackedInt32. */
                unpackedInt32: number[];

                /** TestAllTypesProto3 unpackedInt64. */
                unpackedInt64: (number|Long)[];

                /** TestAllTypesProto3 unpackedUint32. */
                unpackedUint32: number[];

                /** TestAllTypesProto3 unpackedUint64. */
                unpackedUint64: (number|Long)[];

                /** TestAllTypesProto3 unpackedSint32. */
                unpackedSint32: number[];

                /** TestAllTypesProto3 unpackedSint64. */
                unpackedSint64: (number|Long)[];

                /** TestAllTypesProto3 unpackedFixed32. */
                unpackedFixed32: number[];

                /** TestAllTypesProto3 unpackedFixed64. */
                unpackedFixed64: (number|Long)[];

                /** TestAllTypesProto3 unpackedSfixed32. */
                unpackedSfixed32: number[];

                /** TestAllTypesProto3 unpackedSfixed64. */
                unpackedSfixed64: (number|Long)[];

                /** TestAllTypesProto3 unpackedFloat. */
                unpackedFloat: number[];

                /** TestAllTypesProto3 unpackedDouble. */
                unpackedDouble: number[];

                /** TestAllTypesProto3 unpackedBool. */
                unpackedBool: boolean[];

                /** TestAllTypesProto3 unpackedNestedEnum. */
                unpackedNestedEnum: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[];

                /** TestAllTypesProto3 mapInt32Int32. */
                mapInt32Int32: { [k: string]: number };

                /** TestAllTypesProto3 mapInt64Int64. */
                mapInt64Int64: { [k: string]: (number|Long) };

                /** TestAllTypesProto3 mapUint32Uint32. */
                mapUint32Uint32: { [k: string]: number };

                /** TestAllTypesProto3 mapUint64Uint64. */
                mapUint64Uint64: { [k: string]: (number|Long) };

                /** TestAllTypesProto3 mapSint32Sint32. */
                mapSint32Sint32: { [k: string]: number };

                /** TestAllTypesProto3 mapSint64Sint64. */
                mapSint64Sint64: { [k: string]: (number|Long) };

                /** TestAllTypesProto3 mapFixed32Fixed32. */
                mapFixed32Fixed32: { [k: string]: number };

                /** TestAllTypesProto3 mapFixed64Fixed64. */
                mapFixed64Fixed64: { [k: string]: (number|Long) };

                /** TestAllTypesProto3 mapSfixed32Sfixed32. */
                mapSfixed32Sfixed32: { [k: string]: number };

                /** TestAllTypesProto3 mapSfixed64Sfixed64. */
                mapSfixed64Sfixed64: { [k: string]: (number|Long) };

                /** TestAllTypesProto3 mapInt32Float. */
                mapInt32Float: { [k: string]: number };

                /** TestAllTypesProto3 mapInt32Double. */
                mapInt32Double: { [k: string]: number };

                /** TestAllTypesProto3 mapBoolBool. */
                mapBoolBool: { [k: string]: boolean };

                /** TestAllTypesProto3 mapStringString. */
                mapStringString: { [k: string]: string };

                /** TestAllTypesProto3 mapStringBytes. */
                mapStringBytes: { [k: string]: Uint8Array };

                /** TestAllTypesProto3 mapStringNestedMessage. */
                mapStringNestedMessage: { [k: string]: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties };

                /** TestAllTypesProto3 mapStringForeignMessage. */
                mapStringForeignMessage: { [k: string]: protobuf_test_messages.editions.proto3.ForeignMessage.$Properties };

                /** TestAllTypesProto3 mapStringNestedEnum. */
                mapStringNestedEnum: { [k: string]: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum };

                /** TestAllTypesProto3 mapStringForeignEnum. */
                mapStringForeignEnum: { [k: string]: protobuf_test_messages.editions.proto3.ForeignEnum };

                /** TestAllTypesProto3 oneofUint32. */
                oneofUint32?: (number|null);

                /** TestAllTypesProto3 oneofNestedMessage. */
                oneofNestedMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

                /** TestAllTypesProto3 oneofString. */
                oneofString?: (string|null);

                /** TestAllTypesProto3 oneofBytes. */
                oneofBytes?: (Uint8Array|null);

                /** TestAllTypesProto3 oneofBool. */
                oneofBool?: (boolean|null);

                /** TestAllTypesProto3 oneofUint64. */
                oneofUint64?: (number|Long|null);

                /** TestAllTypesProto3 oneofFloat. */
                oneofFloat?: (number|null);

                /** TestAllTypesProto3 oneofDouble. */
                oneofDouble?: (number|null);

                /** TestAllTypesProto3 oneofEnum. */
                oneofEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum|null);

                /** TestAllTypesProto3 oneofNullValue. */
                oneofNullValue?: (google.protobuf.NullValue|null);

                /** TestAllTypesProto3 optionalBoolWrapper. */
                optionalBoolWrapper?: (google.protobuf.BoolValue.$Properties|null);

                /** TestAllTypesProto3 optionalInt32Wrapper. */
                optionalInt32Wrapper?: (google.protobuf.Int32Value.$Properties|null);

                /** TestAllTypesProto3 optionalInt64Wrapper. */
                optionalInt64Wrapper?: (google.protobuf.Int64Value.$Properties|null);

                /** TestAllTypesProto3 optionalUint32Wrapper. */
                optionalUint32Wrapper?: (google.protobuf.UInt32Value.$Properties|null);

                /** TestAllTypesProto3 optionalUint64Wrapper. */
                optionalUint64Wrapper?: (google.protobuf.UInt64Value.$Properties|null);

                /** TestAllTypesProto3 optionalFloatWrapper. */
                optionalFloatWrapper?: (google.protobuf.FloatValue.$Properties|null);

                /** TestAllTypesProto3 optionalDoubleWrapper. */
                optionalDoubleWrapper?: (google.protobuf.DoubleValue.$Properties|null);

                /** TestAllTypesProto3 optionalStringWrapper. */
                optionalStringWrapper?: (google.protobuf.StringValue.$Properties|null);

                /** TestAllTypesProto3 optionalBytesWrapper. */
                optionalBytesWrapper?: (google.protobuf.BytesValue.$Properties|null);

                /** TestAllTypesProto3 repeatedBoolWrapper. */
                repeatedBoolWrapper: google.protobuf.BoolValue.$Properties[];

                /** TestAllTypesProto3 repeatedInt32Wrapper. */
                repeatedInt32Wrapper: google.protobuf.Int32Value.$Properties[];

                /** TestAllTypesProto3 repeatedInt64Wrapper. */
                repeatedInt64Wrapper: google.protobuf.Int64Value.$Properties[];

                /** TestAllTypesProto3 repeatedUint32Wrapper. */
                repeatedUint32Wrapper: google.protobuf.UInt32Value.$Properties[];

                /** TestAllTypesProto3 repeatedUint64Wrapper. */
                repeatedUint64Wrapper: google.protobuf.UInt64Value.$Properties[];

                /** TestAllTypesProto3 repeatedFloatWrapper. */
                repeatedFloatWrapper: google.protobuf.FloatValue.$Properties[];

                /** TestAllTypesProto3 repeatedDoubleWrapper. */
                repeatedDoubleWrapper: google.protobuf.DoubleValue.$Properties[];

                /** TestAllTypesProto3 repeatedStringWrapper. */
                repeatedStringWrapper: google.protobuf.StringValue.$Properties[];

                /** TestAllTypesProto3 repeatedBytesWrapper. */
                repeatedBytesWrapper: google.protobuf.BytesValue.$Properties[];

                /** TestAllTypesProto3 optionalDuration. */
                optionalDuration?: (google.protobuf.Duration.$Properties|null);

                /** TestAllTypesProto3 optionalTimestamp. */
                optionalTimestamp?: (google.protobuf.Timestamp.$Properties|null);

                /** TestAllTypesProto3 optionalFieldMask. */
                optionalFieldMask?: (google.protobuf.FieldMask.$Properties|null);

                /** TestAllTypesProto3 optionalStruct. */
                optionalStruct?: (google.protobuf.Struct.$Properties|null);

                /** TestAllTypesProto3 optionalAny. */
                optionalAny?: (google.protobuf.Any.$Properties|null);

                /** TestAllTypesProto3 optionalValue. */
                optionalValue?: (google.protobuf.Value.$Properties|null);

                /** TestAllTypesProto3 optionalNullValue. */
                optionalNullValue: google.protobuf.NullValue;

                /** TestAllTypesProto3 repeatedDuration. */
                repeatedDuration: google.protobuf.Duration.$Properties[];

                /** TestAllTypesProto3 repeatedTimestamp. */
                repeatedTimestamp: google.protobuf.Timestamp.$Properties[];

                /** TestAllTypesProto3 repeatedFieldmask. */
                repeatedFieldmask: google.protobuf.FieldMask.$Properties[];

                /** TestAllTypesProto3 repeatedStruct. */
                repeatedStruct: google.protobuf.Struct.$Properties[];

                /** TestAllTypesProto3 repeatedAny. */
                repeatedAny: google.protobuf.Any.$Properties[];

                /** TestAllTypesProto3 repeatedValue. */
                repeatedValue: google.protobuf.Value.$Properties[];

                /** TestAllTypesProto3 repeatedListValue. */
                repeatedListValue: google.protobuf.ListValue.$Properties[];

                /** TestAllTypesProto3 fieldname1. */
                fieldname1: number;

                /** TestAllTypesProto3 fieldName2. */
                fieldName2: number;

                /** TestAllTypesProto3 FieldName3. */
                FieldName3: number;

                /** TestAllTypesProto3 fieldName4. */
                fieldName4: number;

                /** TestAllTypesProto3 field0name5. */
                field0name5: number;

                /** TestAllTypesProto3 field0Name6. */
                field0Name6: number;

                /** TestAllTypesProto3 fieldName7. */
                fieldName7: number;

                /** TestAllTypesProto3 FieldName8. */
                FieldName8: number;

                /** TestAllTypesProto3 fieldName9. */
                fieldName9: number;

                /** TestAllTypesProto3 FieldName10. */
                FieldName10: number;

                /** TestAllTypesProto3 FIELDNAME11. */
                FIELDNAME11: number;

                /** TestAllTypesProto3 FIELDName12. */
                FIELDName12: number;

                /** TestAllTypesProto3 FieldName13. */
                FieldName13: number;

                /** TestAllTypesProto3 FieldName14. */
                FieldName14: number;

                /** TestAllTypesProto3 fieldName15. */
                fieldName15: number;

                /** TestAllTypesProto3 fieldName16. */
                fieldName16: number;

                /** TestAllTypesProto3 fieldName17. */
                fieldName17: number;

                /** TestAllTypesProto3 FieldName18. */
                FieldName18: number;

                /** TestAllTypesProto3 oneofField. */
                oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|"oneofNullValue");

                /**
                 * Creates a new TestAllTypesProto3 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestAllTypesProto3 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape): protobuf_test_messages.editions.proto3.TestAllTypesProto3 & protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties): protobuf_test_messages.editions.proto3.TestAllTypesProto3;

                /**
                 * Encodes the specified TestAllTypesProto3 message. Does not implicitly {@link protobuf_test_messages.editions.proto3.TestAllTypesProto3.verify|verify} messages.
                 * @param message TestAllTypesProto3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestAllTypesProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto3.TestAllTypesProto3.verify|verify} messages.
                 * @param message TestAllTypesProto3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestAllTypesProto3 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto3.TestAllTypesProto3 & protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape} TestAllTypesProto3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto3.TestAllTypesProto3 & protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape;

                /**
                 * Decodes a TestAllTypesProto3 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto3.TestAllTypesProto3 & protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape} TestAllTypesProto3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto3.TestAllTypesProto3 & protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape;

                /**
                 * Verifies a TestAllTypesProto3 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestAllTypesProto3 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestAllTypesProto3
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto3.TestAllTypesProto3;

                /**
                 * Creates a plain object from a TestAllTypesProto3 message. Also converts values to other types if specified.
                 * @param message TestAllTypesProto3
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto3.TestAllTypesProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestAllTypesProto3 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for TestAllTypesProto3
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TestAllTypesProto3 {

                /** Properties of a TestAllTypesProto3. */
                interface $Properties {

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
                    optionalNestedMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

                    /** TestAllTypesProto3 optionalForeignMessage */
                    optionalForeignMessage?: (protobuf_test_messages.editions.proto3.ForeignMessage.$Properties|null);

                    /** TestAllTypesProto3 optionalNestedEnum */
                    optionalNestedEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum|null);

                    /** TestAllTypesProto3 optionalForeignEnum */
                    optionalForeignEnum?: (protobuf_test_messages.editions.proto3.ForeignEnum|null);

                    /** TestAllTypesProto3 optionalAliasedEnum */
                    optionalAliasedEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.AliasedEnum|null);

                    /** TestAllTypesProto3 optionalStringPiece */
                    optionalStringPiece?: (string|null);

                    /** TestAllTypesProto3 optionalCord */
                    optionalCord?: (string|null);

                    /** TestAllTypesProto3 recursiveMessage */
                    recursiveMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties|null);

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
                    repeatedNestedMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedForeignMessage */
                    repeatedForeignMessage?: (protobuf_test_messages.editions.proto3.ForeignMessage.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedNestedEnum */
                    repeatedNestedEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[]|null);

                    /** TestAllTypesProto3 repeatedForeignEnum */
                    repeatedForeignEnum?: (protobuf_test_messages.editions.proto3.ForeignEnum[]|null);

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
                    packedNestedEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[]|null);

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
                    unpackedNestedEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[]|null);

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
                    mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties }|null);

                    /** TestAllTypesProto3 mapStringForeignMessage */
                    mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.editions.proto3.ForeignMessage.$Properties }|null);

                    /** TestAllTypesProto3 mapStringNestedEnum */
                    mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum }|null);

                    /** TestAllTypesProto3 mapStringForeignEnum */
                    mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.editions.proto3.ForeignEnum }|null);

                    /** TestAllTypesProto3 oneofUint32 */
                    oneofUint32?: (number|null);

                    /** TestAllTypesProto3 oneofNestedMessage */
                    oneofNestedMessage?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

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
                    oneofEnum?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum|null);

                    /** TestAllTypesProto3 oneofNullValue */
                    oneofNullValue?: (google.protobuf.NullValue|null);

                    /** TestAllTypesProto3 optionalBoolWrapper */
                    optionalBoolWrapper?: (google.protobuf.BoolValue.$Properties|null);

                    /** TestAllTypesProto3 optionalInt32Wrapper */
                    optionalInt32Wrapper?: (google.protobuf.Int32Value.$Properties|null);

                    /** TestAllTypesProto3 optionalInt64Wrapper */
                    optionalInt64Wrapper?: (google.protobuf.Int64Value.$Properties|null);

                    /** TestAllTypesProto3 optionalUint32Wrapper */
                    optionalUint32Wrapper?: (google.protobuf.UInt32Value.$Properties|null);

                    /** TestAllTypesProto3 optionalUint64Wrapper */
                    optionalUint64Wrapper?: (google.protobuf.UInt64Value.$Properties|null);

                    /** TestAllTypesProto3 optionalFloatWrapper */
                    optionalFloatWrapper?: (google.protobuf.FloatValue.$Properties|null);

                    /** TestAllTypesProto3 optionalDoubleWrapper */
                    optionalDoubleWrapper?: (google.protobuf.DoubleValue.$Properties|null);

                    /** TestAllTypesProto3 optionalStringWrapper */
                    optionalStringWrapper?: (google.protobuf.StringValue.$Properties|null);

                    /** TestAllTypesProto3 optionalBytesWrapper */
                    optionalBytesWrapper?: (google.protobuf.BytesValue.$Properties|null);

                    /** TestAllTypesProto3 repeatedBoolWrapper */
                    repeatedBoolWrapper?: (google.protobuf.BoolValue.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedInt32Wrapper */
                    repeatedInt32Wrapper?: (google.protobuf.Int32Value.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedInt64Wrapper */
                    repeatedInt64Wrapper?: (google.protobuf.Int64Value.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedUint32Wrapper */
                    repeatedUint32Wrapper?: (google.protobuf.UInt32Value.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedUint64Wrapper */
                    repeatedUint64Wrapper?: (google.protobuf.UInt64Value.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedFloatWrapper */
                    repeatedFloatWrapper?: (google.protobuf.FloatValue.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedDoubleWrapper */
                    repeatedDoubleWrapper?: (google.protobuf.DoubleValue.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedStringWrapper */
                    repeatedStringWrapper?: (google.protobuf.StringValue.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedBytesWrapper */
                    repeatedBytesWrapper?: (google.protobuf.BytesValue.$Properties[]|null);

                    /** TestAllTypesProto3 optionalDuration */
                    optionalDuration?: (google.protobuf.Duration.$Properties|null);

                    /** TestAllTypesProto3 optionalTimestamp */
                    optionalTimestamp?: (google.protobuf.Timestamp.$Properties|null);

                    /** TestAllTypesProto3 optionalFieldMask */
                    optionalFieldMask?: (google.protobuf.FieldMask.$Properties|null);

                    /** TestAllTypesProto3 optionalStruct */
                    optionalStruct?: (google.protobuf.Struct.$Properties|null);

                    /** TestAllTypesProto3 optionalAny */
                    optionalAny?: (google.protobuf.Any.$Properties|null);

                    /** TestAllTypesProto3 optionalValue */
                    optionalValue?: (google.protobuf.Value.$Properties|null);

                    /** TestAllTypesProto3 optionalNullValue */
                    optionalNullValue?: (google.protobuf.NullValue|null);

                    /** TestAllTypesProto3 repeatedDuration */
                    repeatedDuration?: (google.protobuf.Duration.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedTimestamp */
                    repeatedTimestamp?: (google.protobuf.Timestamp.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedFieldmask */
                    repeatedFieldmask?: (google.protobuf.FieldMask.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedStruct */
                    repeatedStruct?: (google.protobuf.Struct.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedAny */
                    repeatedAny?: (google.protobuf.Any.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedValue */
                    repeatedValue?: (google.protobuf.Value.$Properties[]|null);

                    /** TestAllTypesProto3 repeatedListValue */
                    repeatedListValue?: (google.protobuf.ListValue.$Properties[]|null);

                    /** TestAllTypesProto3 fieldname1 */
                    fieldname1?: (number|null);

                    /** TestAllTypesProto3 fieldName2 */
                    fieldName2?: (number|null);

                    /** TestAllTypesProto3 FieldName3 */
                    FieldName3?: (number|null);

                    /** TestAllTypesProto3 fieldName4 */
                    fieldName4?: (number|null);

                    /** TestAllTypesProto3 field0name5 */
                    field0name5?: (number|null);

                    /** TestAllTypesProto3 field0Name6 */
                    field0Name6?: (number|null);

                    /** TestAllTypesProto3 fieldName7 */
                    fieldName7?: (number|null);

                    /** TestAllTypesProto3 FieldName8 */
                    FieldName8?: (number|null);

                    /** TestAllTypesProto3 fieldName9 */
                    fieldName9?: (number|null);

                    /** TestAllTypesProto3 FieldName10 */
                    FieldName10?: (number|null);

                    /** TestAllTypesProto3 FIELDNAME11 */
                    FIELDNAME11?: (number|null);

                    /** TestAllTypesProto3 FIELDName12 */
                    FIELDName12?: (number|null);

                    /** TestAllTypesProto3 FieldName13 */
                    FieldName13?: (number|null);

                    /** TestAllTypesProto3 FieldName14 */
                    FieldName14?: (number|null);

                    /** TestAllTypesProto3 fieldName15 */
                    fieldName15?: (number|null);

                    /** TestAllTypesProto3 fieldName16 */
                    fieldName16?: (number|null);

                    /** TestAllTypesProto3 fieldName17 */
                    fieldName17?: (number|null);

                    /** TestAllTypesProto3 FieldName18 */
                    FieldName18?: (number|null);

                    /** TestAllTypesProto3 oneofField */
                    oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|"oneofNullValue");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a TestAllTypesProto3. */
                type $Shape = {
                  optionalInt32?: number|null;
                  optionalInt64?: number|Long|null;
                  optionalUint32?: number|null;
                  optionalUint64?: number|Long|null;
                  optionalSint32?: number|null;
                  optionalSint64?: number|Long|null;
                  optionalFixed32?: number|null;
                  optionalFixed64?: number|Long|null;
                  optionalSfixed32?: number|null;
                  optionalSfixed64?: number|Long|null;
                  optionalFloat?: number|null;
                  optionalDouble?: number|null;
                  optionalBool?: boolean|null;
                  optionalString?: string|null;
                  optionalBytes?: Uint8Array|null;
                  optionalNestedMessage?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape|null;
                  optionalForeignMessage?: protobuf_test_messages.editions.proto3.ForeignMessage.$Shape|null;
                  optionalNestedEnum?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum|null;
                  optionalForeignEnum?: protobuf_test_messages.editions.proto3.ForeignEnum|null;
                  optionalAliasedEnum?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.AliasedEnum|null;
                  optionalStringPiece?: string|null;
                  optionalCord?: string|null;
                  recursiveMessage?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape|null;
                  repeatedInt32?: number[]|null;
                  repeatedInt64?: (number|Long)[]|null;
                  repeatedUint32?: number[]|null;
                  repeatedUint64?: (number|Long)[]|null;
                  repeatedSint32?: number[]|null;
                  repeatedSint64?: (number|Long)[]|null;
                  repeatedFixed32?: number[]|null;
                  repeatedFixed64?: (number|Long)[]|null;
                  repeatedSfixed32?: number[]|null;
                  repeatedSfixed64?: (number|Long)[]|null;
                  repeatedFloat?: number[]|null;
                  repeatedDouble?: number[]|null;
                  repeatedBool?: boolean[]|null;
                  repeatedString?: string[]|null;
                  repeatedBytes?: Uint8Array[]|null;
                  repeatedNestedMessage?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape[]|null;
                  repeatedForeignMessage?: protobuf_test_messages.editions.proto3.ForeignMessage.$Shape[]|null;
                  repeatedNestedEnum?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[]|null;
                  repeatedForeignEnum?: protobuf_test_messages.editions.proto3.ForeignEnum[]|null;
                  repeatedStringPiece?: string[]|null;
                  repeatedCord?: string[]|null;
                  packedInt32?: number[]|null;
                  packedInt64?: (number|Long)[]|null;
                  packedUint32?: number[]|null;
                  packedUint64?: (number|Long)[]|null;
                  packedSint32?: number[]|null;
                  packedSint64?: (number|Long)[]|null;
                  packedFixed32?: number[]|null;
                  packedFixed64?: (number|Long)[]|null;
                  packedSfixed32?: number[]|null;
                  packedSfixed64?: (number|Long)[]|null;
                  packedFloat?: number[]|null;
                  packedDouble?: number[]|null;
                  packedBool?: boolean[]|null;
                  packedNestedEnum?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[]|null;
                  unpackedInt32?: number[]|null;
                  unpackedInt64?: (number|Long)[]|null;
                  unpackedUint32?: number[]|null;
                  unpackedUint64?: (number|Long)[]|null;
                  unpackedSint32?: number[]|null;
                  unpackedSint64?: (number|Long)[]|null;
                  unpackedFixed32?: number[]|null;
                  unpackedFixed64?: (number|Long)[]|null;
                  unpackedSfixed32?: number[]|null;
                  unpackedSfixed64?: (number|Long)[]|null;
                  unpackedFloat?: number[]|null;
                  unpackedDouble?: number[]|null;
                  unpackedBool?: boolean[]|null;
                  unpackedNestedEnum?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum[]|null;
                  mapInt32Int32?: { [k: string]: number }|null;
                  mapInt64Int64?: { [k: string]: number|Long }|null;
                  mapUint32Uint32?: { [k: string]: number }|null;
                  mapUint64Uint64?: { [k: string]: number|Long }|null;
                  mapSint32Sint32?: { [k: string]: number }|null;
                  mapSint64Sint64?: { [k: string]: number|Long }|null;
                  mapFixed32Fixed32?: { [k: string]: number }|null;
                  mapFixed64Fixed64?: { [k: string]: number|Long }|null;
                  mapSfixed32Sfixed32?: { [k: string]: number }|null;
                  mapSfixed64Sfixed64?: { [k: string]: number|Long }|null;
                  mapInt32Float?: { [k: string]: number }|null;
                  mapInt32Double?: { [k: string]: number }|null;
                  mapBoolBool?: { [k: string]: boolean }|null;
                  mapStringString?: { [k: string]: string }|null;
                  mapStringBytes?: { [k: string]: Uint8Array }|null;
                  mapStringNestedMessage?: { [k: string]: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape }|null;
                  mapStringForeignMessage?: { [k: string]: protobuf_test_messages.editions.proto3.ForeignMessage.$Shape }|null;
                  mapStringNestedEnum?: { [k: string]: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum }|null;
                  mapStringForeignEnum?: { [k: string]: protobuf_test_messages.editions.proto3.ForeignEnum }|null;
                  oneofUint32?: number|null;
                  oneofNestedMessage?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape|null;
                  oneofString?: string|null;
                  oneofBytes?: Uint8Array|null;
                  oneofBool?: boolean|null;
                  oneofUint64?: number|Long|null;
                  oneofFloat?: number|null;
                  oneofDouble?: number|null;
                  oneofEnum?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum|null;
                  oneofNullValue?: google.protobuf.NullValue|null;
                  optionalBoolWrapper?: google.protobuf.BoolValue.$Shape|null;
                  optionalInt32Wrapper?: google.protobuf.Int32Value.$Shape|null;
                  optionalInt64Wrapper?: google.protobuf.Int64Value.$Shape|null;
                  optionalUint32Wrapper?: google.protobuf.UInt32Value.$Shape|null;
                  optionalUint64Wrapper?: google.protobuf.UInt64Value.$Shape|null;
                  optionalFloatWrapper?: google.protobuf.FloatValue.$Shape|null;
                  optionalDoubleWrapper?: google.protobuf.DoubleValue.$Shape|null;
                  optionalStringWrapper?: google.protobuf.StringValue.$Shape|null;
                  optionalBytesWrapper?: google.protobuf.BytesValue.$Shape|null;
                  repeatedBoolWrapper?: google.protobuf.BoolValue.$Shape[]|null;
                  repeatedInt32Wrapper?: google.protobuf.Int32Value.$Shape[]|null;
                  repeatedInt64Wrapper?: google.protobuf.Int64Value.$Shape[]|null;
                  repeatedUint32Wrapper?: google.protobuf.UInt32Value.$Shape[]|null;
                  repeatedUint64Wrapper?: google.protobuf.UInt64Value.$Shape[]|null;
                  repeatedFloatWrapper?: google.protobuf.FloatValue.$Shape[]|null;
                  repeatedDoubleWrapper?: google.protobuf.DoubleValue.$Shape[]|null;
                  repeatedStringWrapper?: google.protobuf.StringValue.$Shape[]|null;
                  repeatedBytesWrapper?: google.protobuf.BytesValue.$Shape[]|null;
                  optionalDuration?: google.protobuf.Duration.$Shape|null;
                  optionalTimestamp?: google.protobuf.Timestamp.$Shape|null;
                  optionalFieldMask?: google.protobuf.FieldMask.$Shape|null;
                  optionalStruct?: google.protobuf.Struct.$Shape|null;
                  optionalAny?: google.protobuf.Any.$Shape|null;
                  optionalValue?: google.protobuf.Value.$Shape|null;
                  optionalNullValue?: google.protobuf.NullValue|null;
                  repeatedDuration?: google.protobuf.Duration.$Shape[]|null;
                  repeatedTimestamp?: google.protobuf.Timestamp.$Shape[]|null;
                  repeatedFieldmask?: google.protobuf.FieldMask.$Shape[]|null;
                  repeatedStruct?: google.protobuf.Struct.$Shape[]|null;
                  repeatedAny?: google.protobuf.Any.$Shape[]|null;
                  repeatedValue?: google.protobuf.Value.$Shape[]|null;
                  repeatedListValue?: google.protobuf.ListValue.$Shape[]|null;
                  fieldname1?: number|null;
                  fieldName2?: number|null;
                  FieldName3?: number|null;
                  fieldName4?: number|null;
                  field0name5?: number|null;
                  field0Name6?: number|null;
                  fieldName7?: number|null;
                  FieldName8?: number|null;
                  fieldName9?: number|null;
                  FieldName10?: number|null;
                  FIELDNAME11?: number|null;
                  FIELDName12?: number|null;
                  FieldName13?: number|null;
                  FieldName14?: number|null;
                  fieldName15?: number|null;
                  fieldName16?: number|null;
                  fieldName17?: number|null;
                  FieldName18?: number|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ oneofField?: undefined; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofUint32"; oneofUint32: number; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofNestedMessage"; oneofUint32?: null; oneofNestedMessage: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofString"; oneofUint32?: null; oneofNestedMessage?: null; oneofString: string; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofBytes"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes: Uint8Array; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofBool"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool: boolean; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofUint64"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64: number|Long; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofFloat"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat: number; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofDouble"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble: number; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofEnum"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum; oneofNullValue?: null }|{ oneofField?: "oneofNullValue"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue: google.protobuf.NullValue })
                );

                /**
                 * Properties of a NestedMessage.
                 * @deprecated Use protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties instead.
                 */
                interface INestedMessage extends protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties {
                }

                /** Represents a NestedMessage. */
                class NestedMessage {

                    /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                    private constructor();

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** NestedMessage a. */
                    a: number;

                    /** NestedMessage corecursive. */
                    corecursive?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties|null);

                    /**
                     * Creates a new NestedMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NestedMessage instance
                     */
                    static create(properties: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape): protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape;
                    static create(properties?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties): protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage;

                    /**
                     * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                     * @param message NestedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                     * @param message NestedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape;

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.$Shape;

                    /**
                     * Verifies a NestedMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NestedMessage
                     */
                    static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage;

                    /**
                     * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                     * @param message NestedMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NestedMessage to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for NestedMessage
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace NestedMessage {

                    /** Properties of a NestedMessage. */
                    interface $Properties {

                        /** NestedMessage a */
                        a?: (number|null);

                        /** NestedMessage corecursive */
                        corecursive?: (protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a NestedMessage. */
                    type $Shape = {
                      a?: number|null;
                      corecursive?: protobuf_test_messages.editions.proto3.TestAllTypesProto3.$Shape|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /** NestedEnum enum. */
                enum NestedEnum {

                    /** FOO value */
                    FOO = 0,

                    /** BAR value */
                    BAR = 1,

                    /** BAZ value */
                    BAZ = 2,

                    /** NEG value */
                    NEG = -1
                }

                /** AliasedEnum enum. */
                enum AliasedEnum {

                    /** ALIAS_FOO value */
                    ALIAS_FOO = 0,

                    /** ALIAS_BAR value */
                    ALIAS_BAR = 1,

                    /** ALIAS_BAZ value */
                    ALIAS_BAZ = 2,

                    /** MOO value */
                    MOO = 2,

                    /** moo value */
                    moo = 2,

                    /** bAz value */
                    bAz = 2
                }
            }

            /**
             * Properties of a ForeignMessage.
             * @deprecated Use protobuf_test_messages.editions.proto3.ForeignMessage.$Properties instead.
             */
            interface IForeignMessage extends protobuf_test_messages.editions.proto3.ForeignMessage.$Properties {
            }

            /** Represents a ForeignMessage. */
            class ForeignMessage {

                /** Reflection-backed declarations are not constructable. Use ForeignMessage.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ForeignMessage c. */
                c: number;

                /**
                 * Creates a new ForeignMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ForeignMessage instance
                 */
                static create(properties: protobuf_test_messages.editions.proto3.ForeignMessage.$Shape): protobuf_test_messages.editions.proto3.ForeignMessage & protobuf_test_messages.editions.proto3.ForeignMessage.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto3.ForeignMessage.$Properties): protobuf_test_messages.editions.proto3.ForeignMessage;

                /**
                 * Encodes the specified ForeignMessage message. Does not implicitly {@link protobuf_test_messages.editions.proto3.ForeignMessage.verify|verify} messages.
                 * @param message ForeignMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto3.ForeignMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ForeignMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto3.ForeignMessage.verify|verify} messages.
                 * @param message ForeignMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto3.ForeignMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ForeignMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto3.ForeignMessage & protobuf_test_messages.editions.proto3.ForeignMessage.$Shape} ForeignMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto3.ForeignMessage & protobuf_test_messages.editions.proto3.ForeignMessage.$Shape;

                /**
                 * Decodes a ForeignMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto3.ForeignMessage & protobuf_test_messages.editions.proto3.ForeignMessage.$Shape} ForeignMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto3.ForeignMessage & protobuf_test_messages.editions.proto3.ForeignMessage.$Shape;

                /**
                 * Verifies a ForeignMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ForeignMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ForeignMessage
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto3.ForeignMessage;

                /**
                 * Creates a plain object from a ForeignMessage message. Also converts values to other types if specified.
                 * @param message ForeignMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto3.ForeignMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ForeignMessage to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ForeignMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ForeignMessage {

                /** Properties of a ForeignMessage. */
                interface $Properties {

                    /** ForeignMessage c */
                    c?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ForeignMessage. */
                type $Shape = protobuf_test_messages.editions.proto3.ForeignMessage.$Properties;
            }

            /**
             * Properties of a NullHypothesisProto3.
             * @deprecated Use protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Properties instead.
             */
            interface INullHypothesisProto3 extends protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Properties {
            }

            /** Represents a NullHypothesisProto3. */
            class NullHypothesisProto3 {

                /** Reflection-backed declarations are not constructable. Use NullHypothesisProto3.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new NullHypothesisProto3 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NullHypothesisProto3 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Shape): protobuf_test_messages.editions.proto3.NullHypothesisProto3 & protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Properties): protobuf_test_messages.editions.proto3.NullHypothesisProto3;

                /**
                 * Encodes the specified NullHypothesisProto3 message. Does not implicitly {@link protobuf_test_messages.editions.proto3.NullHypothesisProto3.verify|verify} messages.
                 * @param message NullHypothesisProto3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NullHypothesisProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto3.NullHypothesisProto3.verify|verify} messages.
                 * @param message NullHypothesisProto3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NullHypothesisProto3 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto3.NullHypothesisProto3 & protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Shape} NullHypothesisProto3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto3.NullHypothesisProto3 & protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Shape;

                /**
                 * Decodes a NullHypothesisProto3 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto3.NullHypothesisProto3 & protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Shape} NullHypothesisProto3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto3.NullHypothesisProto3 & protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Shape;

                /**
                 * Verifies a NullHypothesisProto3 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NullHypothesisProto3 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NullHypothesisProto3
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto3.NullHypothesisProto3;

                /**
                 * Creates a plain object from a NullHypothesisProto3 message. Also converts values to other types if specified.
                 * @param message NullHypothesisProto3
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto3.NullHypothesisProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NullHypothesisProto3 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NullHypothesisProto3
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NullHypothesisProto3 {

                /** Properties of a NullHypothesisProto3. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NullHypothesisProto3. */
                type $Shape = protobuf_test_messages.editions.proto3.NullHypothesisProto3.$Properties;
            }

            /**
             * Properties of an EnumOnlyProto3.
             * @deprecated Use protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Properties instead.
             */
            interface IEnumOnlyProto3 extends protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Properties {
            }

            /** Represents an EnumOnlyProto3. */
            class EnumOnlyProto3 {

                /** Reflection-backed declarations are not constructable. Use EnumOnlyProto3.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new EnumOnlyProto3 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumOnlyProto3 instance
                 */
                static create(properties: protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Shape): protobuf_test_messages.editions.proto3.EnumOnlyProto3 & protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Shape;
                static create(properties?: protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Properties): protobuf_test_messages.editions.proto3.EnumOnlyProto3;

                /**
                 * Encodes the specified EnumOnlyProto3 message. Does not implicitly {@link protobuf_test_messages.editions.proto3.EnumOnlyProto3.verify|verify} messages.
                 * @param message EnumOnlyProto3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumOnlyProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.editions.proto3.EnumOnlyProto3.verify|verify} messages.
                 * @param message EnumOnlyProto3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumOnlyProto3 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.editions.proto3.EnumOnlyProto3 & protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Shape} EnumOnlyProto3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.editions.proto3.EnumOnlyProto3 & protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Shape;

                /**
                 * Decodes an EnumOnlyProto3 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.editions.proto3.EnumOnlyProto3 & protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Shape} EnumOnlyProto3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.editions.proto3.EnumOnlyProto3 & protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Shape;

                /**
                 * Verifies an EnumOnlyProto3 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumOnlyProto3 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumOnlyProto3
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.editions.proto3.EnumOnlyProto3;

                /**
                 * Creates a plain object from an EnumOnlyProto3 message. Also converts values to other types if specified.
                 * @param message EnumOnlyProto3
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.editions.proto3.EnumOnlyProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumOnlyProto3 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for EnumOnlyProto3
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace EnumOnlyProto3 {

                /** Properties of an EnumOnlyProto3. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an EnumOnlyProto3. */
                type $Shape = protobuf_test_messages.editions.proto3.EnumOnlyProto3.$Properties;

                /** Bool enum. */
                enum Bool {

                    /** kFalse value */
                    kFalse = 0,

                    /** kTrue value */
                    kTrue = 1
                }
            }

            /** ForeignEnum enum. */
            enum ForeignEnum {

                /** FOREIGN_FOO value */
                FOREIGN_FOO = 0,

                /** FOREIGN_BAR value */
                FOREIGN_BAR = 1,

                /** FOREIGN_BAZ value */
                FOREIGN_BAZ = 2
            }
        }
    }

    /** Namespace proto2. */
    namespace proto2 {

        /**
         * Properties of a TestAllTypesProto2.
         * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.$Properties instead.
         */
        interface ITestAllTypesProto2 extends protobuf_test_messages.proto2.TestAllTypesProto2.$Properties {
        }

        /** Represents a TestAllTypesProto2. */
        class TestAllTypesProto2 {

            /** Reflection-backed declarations are not constructable. Use TestAllTypesProto2.create(...) instead. */
            private constructor();

            /** TestAllTypesProto2 .protobuf_test_messages.proto2.extensionInt32 */
            ".protobuf_test_messages.proto2.extensionInt32": number;

            /** TestAllTypesProto2 .protobuf_test_messages.proto2.groupfield */
            ".protobuf_test_messages.proto2.groupfield"?: (protobuf_test_messages.proto2.GroupField.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TestAllTypesProto2 optionalInt32. */
            optionalInt32: number;

            /** TestAllTypesProto2 optionalInt64. */
            optionalInt64: (number|Long);

            /** TestAllTypesProto2 optionalUint32. */
            optionalUint32: number;

            /** TestAllTypesProto2 optionalUint64. */
            optionalUint64: (number|Long);

            /** TestAllTypesProto2 optionalSint32. */
            optionalSint32: number;

            /** TestAllTypesProto2 optionalSint64. */
            optionalSint64: (number|Long);

            /** TestAllTypesProto2 optionalFixed32. */
            optionalFixed32: number;

            /** TestAllTypesProto2 optionalFixed64. */
            optionalFixed64: (number|Long);

            /** TestAllTypesProto2 optionalSfixed32. */
            optionalSfixed32: number;

            /** TestAllTypesProto2 optionalSfixed64. */
            optionalSfixed64: (number|Long);

            /** TestAllTypesProto2 optionalFloat. */
            optionalFloat: number;

            /** TestAllTypesProto2 optionalDouble. */
            optionalDouble: number;

            /** TestAllTypesProto2 optionalBool. */
            optionalBool: boolean;

            /** TestAllTypesProto2 optionalString. */
            optionalString: string;

            /** TestAllTypesProto2 optionalBytes. */
            optionalBytes: Uint8Array;

            /** TestAllTypesProto2 optionalNestedMessage. */
            optionalNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

            /** TestAllTypesProto2 optionalForeignMessage. */
            optionalForeignMessage?: (protobuf_test_messages.proto2.ForeignMessageProto2.$Properties|null);

            /** TestAllTypesProto2 optionalNestedEnum. */
            optionalNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum;

            /** TestAllTypesProto2 optionalForeignEnum. */
            optionalForeignEnum: protobuf_test_messages.proto2.ForeignEnumProto2;

            /** TestAllTypesProto2 optionalStringPiece. */
            optionalStringPiece: string;

            /** TestAllTypesProto2 optionalCord. */
            optionalCord: string;

            /** TestAllTypesProto2 recursiveMessage. */
            recursiveMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.$Properties|null);

            /** TestAllTypesProto2 repeatedInt32. */
            repeatedInt32: number[];

            /** TestAllTypesProto2 repeatedInt64. */
            repeatedInt64: (number|Long)[];

            /** TestAllTypesProto2 repeatedUint32. */
            repeatedUint32: number[];

            /** TestAllTypesProto2 repeatedUint64. */
            repeatedUint64: (number|Long)[];

            /** TestAllTypesProto2 repeatedSint32. */
            repeatedSint32: number[];

            /** TestAllTypesProto2 repeatedSint64. */
            repeatedSint64: (number|Long)[];

            /** TestAllTypesProto2 repeatedFixed32. */
            repeatedFixed32: number[];

            /** TestAllTypesProto2 repeatedFixed64. */
            repeatedFixed64: (number|Long)[];

            /** TestAllTypesProto2 repeatedSfixed32. */
            repeatedSfixed32: number[];

            /** TestAllTypesProto2 repeatedSfixed64. */
            repeatedSfixed64: (number|Long)[];

            /** TestAllTypesProto2 repeatedFloat. */
            repeatedFloat: number[];

            /** TestAllTypesProto2 repeatedDouble. */
            repeatedDouble: number[];

            /** TestAllTypesProto2 repeatedBool. */
            repeatedBool: boolean[];

            /** TestAllTypesProto2 repeatedString. */
            repeatedString: string[];

            /** TestAllTypesProto2 repeatedBytes. */
            repeatedBytes: Uint8Array[];

            /** TestAllTypesProto2 repeatedNestedMessage. */
            repeatedNestedMessage: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties[];

            /** TestAllTypesProto2 repeatedForeignMessage. */
            repeatedForeignMessage: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties[];

            /** TestAllTypesProto2 repeatedNestedEnum. */
            repeatedNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[];

            /** TestAllTypesProto2 repeatedForeignEnum. */
            repeatedForeignEnum: protobuf_test_messages.proto2.ForeignEnumProto2[];

            /** TestAllTypesProto2 repeatedStringPiece. */
            repeatedStringPiece: string[];

            /** TestAllTypesProto2 repeatedCord. */
            repeatedCord: string[];

            /** TestAllTypesProto2 packedInt32. */
            packedInt32: number[];

            /** TestAllTypesProto2 packedInt64. */
            packedInt64: (number|Long)[];

            /** TestAllTypesProto2 packedUint32. */
            packedUint32: number[];

            /** TestAllTypesProto2 packedUint64. */
            packedUint64: (number|Long)[];

            /** TestAllTypesProto2 packedSint32. */
            packedSint32: number[];

            /** TestAllTypesProto2 packedSint64. */
            packedSint64: (number|Long)[];

            /** TestAllTypesProto2 packedFixed32. */
            packedFixed32: number[];

            /** TestAllTypesProto2 packedFixed64. */
            packedFixed64: (number|Long)[];

            /** TestAllTypesProto2 packedSfixed32. */
            packedSfixed32: number[];

            /** TestAllTypesProto2 packedSfixed64. */
            packedSfixed64: (number|Long)[];

            /** TestAllTypesProto2 packedFloat. */
            packedFloat: number[];

            /** TestAllTypesProto2 packedDouble. */
            packedDouble: number[];

            /** TestAllTypesProto2 packedBool. */
            packedBool: boolean[];

            /** TestAllTypesProto2 packedNestedEnum. */
            packedNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[];

            /** TestAllTypesProto2 unpackedInt32. */
            unpackedInt32: number[];

            /** TestAllTypesProto2 unpackedInt64. */
            unpackedInt64: (number|Long)[];

            /** TestAllTypesProto2 unpackedUint32. */
            unpackedUint32: number[];

            /** TestAllTypesProto2 unpackedUint64. */
            unpackedUint64: (number|Long)[];

            /** TestAllTypesProto2 unpackedSint32. */
            unpackedSint32: number[];

            /** TestAllTypesProto2 unpackedSint64. */
            unpackedSint64: (number|Long)[];

            /** TestAllTypesProto2 unpackedFixed32. */
            unpackedFixed32: number[];

            /** TestAllTypesProto2 unpackedFixed64. */
            unpackedFixed64: (number|Long)[];

            /** TestAllTypesProto2 unpackedSfixed32. */
            unpackedSfixed32: number[];

            /** TestAllTypesProto2 unpackedSfixed64. */
            unpackedSfixed64: (number|Long)[];

            /** TestAllTypesProto2 unpackedFloat. */
            unpackedFloat: number[];

            /** TestAllTypesProto2 unpackedDouble. */
            unpackedDouble: number[];

            /** TestAllTypesProto2 unpackedBool. */
            unpackedBool: boolean[];

            /** TestAllTypesProto2 unpackedNestedEnum. */
            unpackedNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[];

            /** TestAllTypesProto2 mapInt32Int32. */
            mapInt32Int32: { [k: string]: number };

            /** TestAllTypesProto2 mapInt64Int64. */
            mapInt64Int64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapUint32Uint32. */
            mapUint32Uint32: { [k: string]: number };

            /** TestAllTypesProto2 mapUint64Uint64. */
            mapUint64Uint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapSint32Sint32. */
            mapSint32Sint32: { [k: string]: number };

            /** TestAllTypesProto2 mapSint64Sint64. */
            mapSint64Sint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapFixed32Fixed32. */
            mapFixed32Fixed32: { [k: string]: number };

            /** TestAllTypesProto2 mapFixed64Fixed64. */
            mapFixed64Fixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapSfixed32Sfixed32. */
            mapSfixed32Sfixed32: { [k: string]: number };

            /** TestAllTypesProto2 mapSfixed64Sfixed64. */
            mapSfixed64Sfixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapInt32Bool. */
            mapInt32Bool: { [k: string]: boolean };

            /** TestAllTypesProto2 mapInt32Float. */
            mapInt32Float: { [k: string]: number };

            /** TestAllTypesProto2 mapInt32Double. */
            mapInt32Double: { [k: string]: number };

            /** TestAllTypesProto2 mapInt32NestedMessage. */
            mapInt32NestedMessage: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties };

            /** TestAllTypesProto2 mapBoolBool. */
            mapBoolBool: { [k: string]: boolean };

            /** TestAllTypesProto2 mapStringString. */
            mapStringString: { [k: string]: string };

            /** TestAllTypesProto2 mapStringBytes. */
            mapStringBytes: { [k: string]: Uint8Array };

            /** TestAllTypesProto2 mapStringNestedMessage. */
            mapStringNestedMessage: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties };

            /** TestAllTypesProto2 mapStringForeignMessage. */
            mapStringForeignMessage: { [k: string]: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties };

            /** TestAllTypesProto2 mapStringNestedEnum. */
            mapStringNestedEnum: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum };

            /** TestAllTypesProto2 mapStringForeignEnum. */
            mapStringForeignEnum: { [k: string]: protobuf_test_messages.proto2.ForeignEnumProto2 };

            /** TestAllTypesProto2 oneofUint32. */
            oneofUint32?: (number|null);

            /** TestAllTypesProto2 oneofNestedMessage. */
            oneofNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

            /** TestAllTypesProto2 oneofString. */
            oneofString?: (string|null);

            /** TestAllTypesProto2 oneofBytes. */
            oneofBytes?: (Uint8Array|null);

            /** TestAllTypesProto2 oneofBool. */
            oneofBool?: (boolean|null);

            /** TestAllTypesProto2 oneofUint64. */
            oneofUint64?: (number|Long|null);

            /** TestAllTypesProto2 oneofFloat. */
            oneofFloat?: (number|null);

            /** TestAllTypesProto2 oneofDouble. */
            oneofDouble?: (number|null);

            /** TestAllTypesProto2 oneofEnum. */
            oneofEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null);

            /** TestAllTypesProto2 data. */
            data?: (protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties|null);

            /** TestAllTypesProto2 multiwordgroupfield. */
            multiwordgroupfield?: (protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties|null);

            /** TestAllTypesProto2 defaultInt32. */
            defaultInt32: number;

            /** TestAllTypesProto2 defaultInt64. */
            defaultInt64: (number|Long);

            /** TestAllTypesProto2 defaultUint32. */
            defaultUint32: number;

            /** TestAllTypesProto2 defaultUint64. */
            defaultUint64: (number|Long);

            /** TestAllTypesProto2 defaultSint32. */
            defaultSint32: number;

            /** TestAllTypesProto2 defaultSint64. */
            defaultSint64: (number|Long);

            /** TestAllTypesProto2 defaultFixed32. */
            defaultFixed32: number;

            /** TestAllTypesProto2 defaultFixed64. */
            defaultFixed64: (number|Long);

            /** TestAllTypesProto2 defaultSfixed32. */
            defaultSfixed32: number;

            /** TestAllTypesProto2 defaultSfixed64. */
            defaultSfixed64: (number|Long);

            /** TestAllTypesProto2 defaultFloat. */
            defaultFloat: number;

            /** TestAllTypesProto2 defaultDouble. */
            defaultDouble: number;

            /** TestAllTypesProto2 defaultBool. */
            defaultBool: boolean;

            /** TestAllTypesProto2 defaultString. */
            defaultString: string;

            /** TestAllTypesProto2 defaultBytes. */
            defaultBytes: Uint8Array;

            /** TestAllTypesProto2 fieldname1. */
            fieldname1: number;

            /** TestAllTypesProto2 fieldName2. */
            fieldName2: number;

            /** TestAllTypesProto2 FieldName3. */
            FieldName3: number;

            /** TestAllTypesProto2 fieldName4. */
            fieldName4: number;

            /** TestAllTypesProto2 field0name5. */
            field0name5: number;

            /** TestAllTypesProto2 field0Name6. */
            field0Name6: number;

            /** TestAllTypesProto2 fieldName7. */
            fieldName7: number;

            /** TestAllTypesProto2 FieldName8. */
            FieldName8: number;

            /** TestAllTypesProto2 fieldName9. */
            fieldName9: number;

            /** TestAllTypesProto2 FieldName10. */
            FieldName10: number;

            /** TestAllTypesProto2 FIELDNAME11. */
            FIELDNAME11: number;

            /** TestAllTypesProto2 FIELDName12. */
            FIELDName12: number;

            /** TestAllTypesProto2 FieldName13. */
            FieldName13: number;

            /** TestAllTypesProto2 FieldName14. */
            FieldName14: number;

            /** TestAllTypesProto2 fieldName15. */
            fieldName15: number;

            /** TestAllTypesProto2 fieldName16. */
            fieldName16: number;

            /** TestAllTypesProto2 fieldName17. */
            fieldName17: number;

            /** TestAllTypesProto2 FieldName18. */
            FieldName18: number;

            /** TestAllTypesProto2 messageSetCorrect. */
            messageSetCorrect?: (protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties|null);

            /** TestAllTypesProto2 oneofField. */
            oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

            /**
             * Creates a new TestAllTypesProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestAllTypesProto2 instance
             */
            static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2 & protobuf_test_messages.proto2.TestAllTypesProto2.$Shape;
            static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2;

            /**
             * Encodes the specified TestAllTypesProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.verify|verify} messages.
             * @param message TestAllTypesProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestAllTypesProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.verify|verify} messages.
             * @param message TestAllTypesProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestAllTypesProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.TestAllTypesProto2 & protobuf_test_messages.proto2.TestAllTypesProto2.$Shape} TestAllTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2 & protobuf_test_messages.proto2.TestAllTypesProto2.$Shape;

            /**
             * Decodes a TestAllTypesProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.TestAllTypesProto2 & protobuf_test_messages.proto2.TestAllTypesProto2.$Shape} TestAllTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2 & protobuf_test_messages.proto2.TestAllTypesProto2.$Shape;

            /**
             * Verifies a TestAllTypesProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestAllTypesProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestAllTypesProto2
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2;

            /**
             * Creates a plain object from a TestAllTypesProto2 message. Also converts values to other types if specified.
             * @param message TestAllTypesProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestAllTypesProto2 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TestAllTypesProto2
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TestAllTypesProto2 {

            /** Properties of a TestAllTypesProto2. */
            interface $Properties {

                /** TestAllTypesProto2 optionalInt32 */
                optionalInt32?: (number|null);

                /** TestAllTypesProto2 optionalInt64 */
                optionalInt64?: (number|Long|null);

                /** TestAllTypesProto2 optionalUint32 */
                optionalUint32?: (number|null);

                /** TestAllTypesProto2 optionalUint64 */
                optionalUint64?: (number|Long|null);

                /** TestAllTypesProto2 optionalSint32 */
                optionalSint32?: (number|null);

                /** TestAllTypesProto2 optionalSint64 */
                optionalSint64?: (number|Long|null);

                /** TestAllTypesProto2 optionalFixed32 */
                optionalFixed32?: (number|null);

                /** TestAllTypesProto2 optionalFixed64 */
                optionalFixed64?: (number|Long|null);

                /** TestAllTypesProto2 optionalSfixed32 */
                optionalSfixed32?: (number|null);

                /** TestAllTypesProto2 optionalSfixed64 */
                optionalSfixed64?: (number|Long|null);

                /** TestAllTypesProto2 optionalFloat */
                optionalFloat?: (number|null);

                /** TestAllTypesProto2 optionalDouble */
                optionalDouble?: (number|null);

                /** TestAllTypesProto2 optionalBool */
                optionalBool?: (boolean|null);

                /** TestAllTypesProto2 optionalString */
                optionalString?: (string|null);

                /** TestAllTypesProto2 optionalBytes */
                optionalBytes?: (Uint8Array|null);

                /** TestAllTypesProto2 optionalNestedMessage */
                optionalNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

                /** TestAllTypesProto2 optionalForeignMessage */
                optionalForeignMessage?: (protobuf_test_messages.proto2.ForeignMessageProto2.$Properties|null);

                /** TestAllTypesProto2 optionalNestedEnum */
                optionalNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null);

                /** TestAllTypesProto2 optionalForeignEnum */
                optionalForeignEnum?: (protobuf_test_messages.proto2.ForeignEnumProto2|null);

                /** TestAllTypesProto2 optionalStringPiece */
                optionalStringPiece?: (string|null);

                /** TestAllTypesProto2 optionalCord */
                optionalCord?: (string|null);

                /** TestAllTypesProto2 recursiveMessage */
                recursiveMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.$Properties|null);

                /** TestAllTypesProto2 repeatedInt32 */
                repeatedInt32?: (number[]|null);

                /** TestAllTypesProto2 repeatedInt64 */
                repeatedInt64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 repeatedUint32 */
                repeatedUint32?: (number[]|null);

                /** TestAllTypesProto2 repeatedUint64 */
                repeatedUint64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 repeatedSint32 */
                repeatedSint32?: (number[]|null);

                /** TestAllTypesProto2 repeatedSint64 */
                repeatedSint64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 repeatedFixed32 */
                repeatedFixed32?: (number[]|null);

                /** TestAllTypesProto2 repeatedFixed64 */
                repeatedFixed64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 repeatedSfixed32 */
                repeatedSfixed32?: (number[]|null);

                /** TestAllTypesProto2 repeatedSfixed64 */
                repeatedSfixed64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 repeatedFloat */
                repeatedFloat?: (number[]|null);

                /** TestAllTypesProto2 repeatedDouble */
                repeatedDouble?: (number[]|null);

                /** TestAllTypesProto2 repeatedBool */
                repeatedBool?: (boolean[]|null);

                /** TestAllTypesProto2 repeatedString */
                repeatedString?: (string[]|null);

                /** TestAllTypesProto2 repeatedBytes */
                repeatedBytes?: (Uint8Array[]|null);

                /** TestAllTypesProto2 repeatedNestedMessage */
                repeatedNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties[]|null);

                /** TestAllTypesProto2 repeatedForeignMessage */
                repeatedForeignMessage?: (protobuf_test_messages.proto2.ForeignMessageProto2.$Properties[]|null);

                /** TestAllTypesProto2 repeatedNestedEnum */
                repeatedNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null);

                /** TestAllTypesProto2 repeatedForeignEnum */
                repeatedForeignEnum?: (protobuf_test_messages.proto2.ForeignEnumProto2[]|null);

                /** TestAllTypesProto2 repeatedStringPiece */
                repeatedStringPiece?: (string[]|null);

                /** TestAllTypesProto2 repeatedCord */
                repeatedCord?: (string[]|null);

                /** TestAllTypesProto2 packedInt32 */
                packedInt32?: (number[]|null);

                /** TestAllTypesProto2 packedInt64 */
                packedInt64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 packedUint32 */
                packedUint32?: (number[]|null);

                /** TestAllTypesProto2 packedUint64 */
                packedUint64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 packedSint32 */
                packedSint32?: (number[]|null);

                /** TestAllTypesProto2 packedSint64 */
                packedSint64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 packedFixed32 */
                packedFixed32?: (number[]|null);

                /** TestAllTypesProto2 packedFixed64 */
                packedFixed64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 packedSfixed32 */
                packedSfixed32?: (number[]|null);

                /** TestAllTypesProto2 packedSfixed64 */
                packedSfixed64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 packedFloat */
                packedFloat?: (number[]|null);

                /** TestAllTypesProto2 packedDouble */
                packedDouble?: (number[]|null);

                /** TestAllTypesProto2 packedBool */
                packedBool?: (boolean[]|null);

                /** TestAllTypesProto2 packedNestedEnum */
                packedNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null);

                /** TestAllTypesProto2 unpackedInt32 */
                unpackedInt32?: (number[]|null);

                /** TestAllTypesProto2 unpackedInt64 */
                unpackedInt64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 unpackedUint32 */
                unpackedUint32?: (number[]|null);

                /** TestAllTypesProto2 unpackedUint64 */
                unpackedUint64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 unpackedSint32 */
                unpackedSint32?: (number[]|null);

                /** TestAllTypesProto2 unpackedSint64 */
                unpackedSint64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 unpackedFixed32 */
                unpackedFixed32?: (number[]|null);

                /** TestAllTypesProto2 unpackedFixed64 */
                unpackedFixed64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 unpackedSfixed32 */
                unpackedSfixed32?: (number[]|null);

                /** TestAllTypesProto2 unpackedSfixed64 */
                unpackedSfixed64?: ((number|Long)[]|null);

                /** TestAllTypesProto2 unpackedFloat */
                unpackedFloat?: (number[]|null);

                /** TestAllTypesProto2 unpackedDouble */
                unpackedDouble?: (number[]|null);

                /** TestAllTypesProto2 unpackedBool */
                unpackedBool?: (boolean[]|null);

                /** TestAllTypesProto2 unpackedNestedEnum */
                unpackedNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null);

                /** TestAllTypesProto2 mapInt32Int32 */
                mapInt32Int32?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapInt64Int64 */
                mapInt64Int64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesProto2 mapUint32Uint32 */
                mapUint32Uint32?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapUint64Uint64 */
                mapUint64Uint64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesProto2 mapSint32Sint32 */
                mapSint32Sint32?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapSint64Sint64 */
                mapSint64Sint64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesProto2 mapFixed32Fixed32 */
                mapFixed32Fixed32?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapFixed64Fixed64 */
                mapFixed64Fixed64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesProto2 mapSfixed32Sfixed32 */
                mapSfixed32Sfixed32?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapSfixed64Sfixed64 */
                mapSfixed64Sfixed64?: ({ [k: string]: (number|Long) }|null);

                /** TestAllTypesProto2 mapInt32Bool */
                mapInt32Bool?: ({ [k: string]: boolean }|null);

                /** TestAllTypesProto2 mapInt32Float */
                mapInt32Float?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapInt32Double */
                mapInt32Double?: ({ [k: string]: number }|null);

                /** TestAllTypesProto2 mapInt32NestedMessage */
                mapInt32NestedMessage?: ({ [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties }|null);

                /** TestAllTypesProto2 mapBoolBool */
                mapBoolBool?: ({ [k: string]: boolean }|null);

                /** TestAllTypesProto2 mapStringString */
                mapStringString?: ({ [k: string]: string }|null);

                /** TestAllTypesProto2 mapStringBytes */
                mapStringBytes?: ({ [k: string]: Uint8Array }|null);

                /** TestAllTypesProto2 mapStringNestedMessage */
                mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties }|null);

                /** TestAllTypesProto2 mapStringForeignMessage */
                mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties }|null);

                /** TestAllTypesProto2 mapStringNestedEnum */
                mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum }|null);

                /** TestAllTypesProto2 mapStringForeignEnum */
                mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.proto2.ForeignEnumProto2 }|null);

                /** TestAllTypesProto2 oneofUint32 */
                oneofUint32?: (number|null);

                /** TestAllTypesProto2 oneofNestedMessage */
                oneofNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties|null);

                /** TestAllTypesProto2 oneofString */
                oneofString?: (string|null);

                /** TestAllTypesProto2 oneofBytes */
                oneofBytes?: (Uint8Array|null);

                /** TestAllTypesProto2 oneofBool */
                oneofBool?: (boolean|null);

                /** TestAllTypesProto2 oneofUint64 */
                oneofUint64?: (number|Long|null);

                /** TestAllTypesProto2 oneofFloat */
                oneofFloat?: (number|null);

                /** TestAllTypesProto2 oneofDouble */
                oneofDouble?: (number|null);

                /** TestAllTypesProto2 oneofEnum */
                oneofEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null);

                /** TestAllTypesProto2 data */
                data?: (protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties|null);

                /** TestAllTypesProto2 multiwordgroupfield */
                multiwordgroupfield?: (protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties|null);

                /** TestAllTypesProto2 defaultInt32 */
                defaultInt32?: (number|null);

                /** TestAllTypesProto2 defaultInt64 */
                defaultInt64?: (number|Long|null);

                /** TestAllTypesProto2 defaultUint32 */
                defaultUint32?: (number|null);

                /** TestAllTypesProto2 defaultUint64 */
                defaultUint64?: (number|Long|null);

                /** TestAllTypesProto2 defaultSint32 */
                defaultSint32?: (number|null);

                /** TestAllTypesProto2 defaultSint64 */
                defaultSint64?: (number|Long|null);

                /** TestAllTypesProto2 defaultFixed32 */
                defaultFixed32?: (number|null);

                /** TestAllTypesProto2 defaultFixed64 */
                defaultFixed64?: (number|Long|null);

                /** TestAllTypesProto2 defaultSfixed32 */
                defaultSfixed32?: (number|null);

                /** TestAllTypesProto2 defaultSfixed64 */
                defaultSfixed64?: (number|Long|null);

                /** TestAllTypesProto2 defaultFloat */
                defaultFloat?: (number|null);

                /** TestAllTypesProto2 defaultDouble */
                defaultDouble?: (number|null);

                /** TestAllTypesProto2 defaultBool */
                defaultBool?: (boolean|null);

                /** TestAllTypesProto2 defaultString */
                defaultString?: (string|null);

                /** TestAllTypesProto2 defaultBytes */
                defaultBytes?: (Uint8Array|null);

                /** TestAllTypesProto2 fieldname1 */
                fieldname1?: (number|null);

                /** TestAllTypesProto2 fieldName2 */
                fieldName2?: (number|null);

                /** TestAllTypesProto2 FieldName3 */
                FieldName3?: (number|null);

                /** TestAllTypesProto2 fieldName4 */
                fieldName4?: (number|null);

                /** TestAllTypesProto2 field0name5 */
                field0name5?: (number|null);

                /** TestAllTypesProto2 field0Name6 */
                field0Name6?: (number|null);

                /** TestAllTypesProto2 fieldName7 */
                fieldName7?: (number|null);

                /** TestAllTypesProto2 FieldName8 */
                FieldName8?: (number|null);

                /** TestAllTypesProto2 fieldName9 */
                fieldName9?: (number|null);

                /** TestAllTypesProto2 FieldName10 */
                FieldName10?: (number|null);

                /** TestAllTypesProto2 FIELDNAME11 */
                FIELDNAME11?: (number|null);

                /** TestAllTypesProto2 FIELDName12 */
                FIELDName12?: (number|null);

                /** TestAllTypesProto2 FieldName13 */
                FieldName13?: (number|null);

                /** TestAllTypesProto2 FieldName14 */
                FieldName14?: (number|null);

                /** TestAllTypesProto2 fieldName15 */
                fieldName15?: (number|null);

                /** TestAllTypesProto2 fieldName16 */
                fieldName16?: (number|null);

                /** TestAllTypesProto2 fieldName17 */
                fieldName17?: (number|null);

                /** TestAllTypesProto2 FieldName18 */
                FieldName18?: (number|null);

                /** TestAllTypesProto2 messageSetCorrect */
                messageSetCorrect?: (protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties|null);

                /** TestAllTypesProto2 .protobuf_test_messages.proto2.extensionInt32 */
                ".protobuf_test_messages.proto2.extensionInt32"?: (number|null);

                /** TestAllTypesProto2 .protobuf_test_messages.proto2.groupfield */
                ".protobuf_test_messages.proto2.groupfield"?: (protobuf_test_messages.proto2.GroupField.$Properties|null);

                /** TestAllTypesProto2 oneofField */
                oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a TestAllTypesProto2. */
            type $Shape = {
              optionalInt32?: number|null;
              optionalInt64?: number|Long|null;
              optionalUint32?: number|null;
              optionalUint64?: number|Long|null;
              optionalSint32?: number|null;
              optionalSint64?: number|Long|null;
              optionalFixed32?: number|null;
              optionalFixed64?: number|Long|null;
              optionalSfixed32?: number|null;
              optionalSfixed64?: number|Long|null;
              optionalFloat?: number|null;
              optionalDouble?: number|null;
              optionalBool?: boolean|null;
              optionalString?: string|null;
              optionalBytes?: Uint8Array|null;
              optionalNestedMessage?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape|null;
              optionalForeignMessage?: protobuf_test_messages.proto2.ForeignMessageProto2.$Shape|null;
              optionalNestedEnum?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null;
              optionalForeignEnum?: protobuf_test_messages.proto2.ForeignEnumProto2|null;
              optionalStringPiece?: string|null;
              optionalCord?: string|null;
              recursiveMessage?: protobuf_test_messages.proto2.TestAllTypesProto2.$Shape|null;
              repeatedInt32?: number[]|null;
              repeatedInt64?: (number|Long)[]|null;
              repeatedUint32?: number[]|null;
              repeatedUint64?: (number|Long)[]|null;
              repeatedSint32?: number[]|null;
              repeatedSint64?: (number|Long)[]|null;
              repeatedFixed32?: number[]|null;
              repeatedFixed64?: (number|Long)[]|null;
              repeatedSfixed32?: number[]|null;
              repeatedSfixed64?: (number|Long)[]|null;
              repeatedFloat?: number[]|null;
              repeatedDouble?: number[]|null;
              repeatedBool?: boolean[]|null;
              repeatedString?: string[]|null;
              repeatedBytes?: Uint8Array[]|null;
              repeatedNestedMessage?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape[]|null;
              repeatedForeignMessage?: protobuf_test_messages.proto2.ForeignMessageProto2.$Shape[]|null;
              repeatedNestedEnum?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null;
              repeatedForeignEnum?: protobuf_test_messages.proto2.ForeignEnumProto2[]|null;
              repeatedStringPiece?: string[]|null;
              repeatedCord?: string[]|null;
              packedInt32?: number[]|null;
              packedInt64?: (number|Long)[]|null;
              packedUint32?: number[]|null;
              packedUint64?: (number|Long)[]|null;
              packedSint32?: number[]|null;
              packedSint64?: (number|Long)[]|null;
              packedFixed32?: number[]|null;
              packedFixed64?: (number|Long)[]|null;
              packedSfixed32?: number[]|null;
              packedSfixed64?: (number|Long)[]|null;
              packedFloat?: number[]|null;
              packedDouble?: number[]|null;
              packedBool?: boolean[]|null;
              packedNestedEnum?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null;
              unpackedInt32?: number[]|null;
              unpackedInt64?: (number|Long)[]|null;
              unpackedUint32?: number[]|null;
              unpackedUint64?: (number|Long)[]|null;
              unpackedSint32?: number[]|null;
              unpackedSint64?: (number|Long)[]|null;
              unpackedFixed32?: number[]|null;
              unpackedFixed64?: (number|Long)[]|null;
              unpackedSfixed32?: number[]|null;
              unpackedSfixed64?: (number|Long)[]|null;
              unpackedFloat?: number[]|null;
              unpackedDouble?: number[]|null;
              unpackedBool?: boolean[]|null;
              unpackedNestedEnum?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null;
              mapInt32Int32?: { [k: string]: number }|null;
              mapInt64Int64?: { [k: string]: number|Long }|null;
              mapUint32Uint32?: { [k: string]: number }|null;
              mapUint64Uint64?: { [k: string]: number|Long }|null;
              mapSint32Sint32?: { [k: string]: number }|null;
              mapSint64Sint64?: { [k: string]: number|Long }|null;
              mapFixed32Fixed32?: { [k: string]: number }|null;
              mapFixed64Fixed64?: { [k: string]: number|Long }|null;
              mapSfixed32Sfixed32?: { [k: string]: number }|null;
              mapSfixed64Sfixed64?: { [k: string]: number|Long }|null;
              mapInt32Bool?: { [k: string]: boolean }|null;
              mapInt32Float?: { [k: string]: number }|null;
              mapInt32Double?: { [k: string]: number }|null;
              mapInt32NestedMessage?: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape }|null;
              mapBoolBool?: { [k: string]: boolean }|null;
              mapStringString?: { [k: string]: string }|null;
              mapStringBytes?: { [k: string]: Uint8Array }|null;
              mapStringNestedMessage?: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape }|null;
              mapStringForeignMessage?: { [k: string]: protobuf_test_messages.proto2.ForeignMessageProto2.$Shape }|null;
              mapStringNestedEnum?: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum }|null;
              mapStringForeignEnum?: { [k: string]: protobuf_test_messages.proto2.ForeignEnumProto2 }|null;
              oneofUint32?: number|null;
              oneofNestedMessage?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape|null;
              oneofString?: string|null;
              oneofBytes?: Uint8Array|null;
              oneofBool?: boolean|null;
              oneofUint64?: number|Long|null;
              oneofFloat?: number|null;
              oneofDouble?: number|null;
              oneofEnum?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null;
              data?: protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape|null;
              multiwordgroupfield?: protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape|null;
              defaultInt32?: number|null;
              defaultInt64?: number|Long|null;
              defaultUint32?: number|null;
              defaultUint64?: number|Long|null;
              defaultSint32?: number|null;
              defaultSint64?: number|Long|null;
              defaultFixed32?: number|null;
              defaultFixed64?: number|Long|null;
              defaultSfixed32?: number|null;
              defaultSfixed64?: number|Long|null;
              defaultFloat?: number|null;
              defaultDouble?: number|null;
              defaultBool?: boolean|null;
              defaultString?: string|null;
              defaultBytes?: Uint8Array|null;
              fieldname1?: number|null;
              fieldName2?: number|null;
              FieldName3?: number|null;
              fieldName4?: number|null;
              field0name5?: number|null;
              field0Name6?: number|null;
              fieldName7?: number|null;
              FieldName8?: number|null;
              fieldName9?: number|null;
              FieldName10?: number|null;
              FIELDNAME11?: number|null;
              FIELDName12?: number|null;
              FieldName13?: number|null;
              FieldName14?: number|null;
              fieldName15?: number|null;
              fieldName16?: number|null;
              fieldName17?: number|null;
              FieldName18?: number|null;
              messageSetCorrect?: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape|null;
              ".protobuf_test_messages.proto2.extensionInt32"?: number|null;
              ".protobuf_test_messages.proto2.groupfield"?: protobuf_test_messages.proto2.GroupField.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ oneofField?: undefined; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofUint32"; oneofUint32: number; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofNestedMessage"; oneofUint32?: null; oneofNestedMessage: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofString"; oneofUint32?: null; oneofNestedMessage?: null; oneofString: string; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofBytes"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes: Uint8Array; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofBool"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool: boolean; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofUint64"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64: number|Long; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofFloat"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat: number; oneofDouble?: null; oneofEnum?: null }|{ oneofField?: "oneofDouble"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble: number; oneofEnum?: null }|{ oneofField?: "oneofEnum"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum })
            );

            /**
             * Properties of a NestedMessage.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties instead.
             */
            interface INestedMessage extends protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties {
            }

            /** Represents a NestedMessage. */
            class NestedMessage {

                /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** NestedMessage a. */
                a: number;

                /** NestedMessage corecursive. */
                corecursive?: (protobuf_test_messages.proto2.TestAllTypesProto2.$Properties|null);

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedMessage instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage;

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.$Shape;

                /**
                 * Verifies a NestedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedMessage
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage;

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @param message NestedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedMessage to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NestedMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NestedMessage {

                /** Properties of a NestedMessage. */
                interface $Properties {

                    /** NestedMessage a */
                    a?: (number|null);

                    /** NestedMessage corecursive */
                    corecursive?: (protobuf_test_messages.proto2.TestAllTypesProto2.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NestedMessage. */
                type $Shape = {
                  a?: number|null;
                  corecursive?: protobuf_test_messages.proto2.TestAllTypesProto2.$Shape|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a Data.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties instead.
             */
            interface IData extends protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties {
            }

            /** Represents a Data. */
            class Data {

                /** Reflection-backed declarations are not constructable. Use Data.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Data groupInt32. */
                groupInt32: number;

                /** Data groupUint32. */
                groupUint32: number;

                /**
                 * Creates a new Data instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Data instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.Data & protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.Data;

                /**
                 * Encodes the specified Data message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                 * @param message Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Data message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                 * @param message Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Data message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.Data & protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape} Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.Data & protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape;

                /**
                 * Decodes a Data message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.Data & protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape} Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.Data & protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Shape;

                /**
                 * Verifies a Data message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Data message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Data
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.Data;

                /**
                 * Creates a plain object from a Data message. Also converts values to other types if specified.
                 * @param message Data
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Data to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Data
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Data {

                /** Properties of a Data. */
                interface $Properties {

                    /** Data groupInt32 */
                    groupInt32?: (number|null);

                    /** Data groupUint32 */
                    groupUint32?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Data. */
                type $Shape = protobuf_test_messages.proto2.TestAllTypesProto2.Data.$Properties;
            }

            /**
             * Properties of a MultiWordGroupField.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties instead.
             */
            interface IMultiWordGroupField extends protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties {
            }

            /** Represents a MultiWordGroupField. */
            class MultiWordGroupField {

                /** Reflection-backed declarations are not constructable. Use MultiWordGroupField.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MultiWordGroupField groupInt32. */
                groupInt32: number;

                /** MultiWordGroupField groupUint32. */
                groupUint32: number;

                /**
                 * Creates a new MultiWordGroupField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiWordGroupField instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField;

                /**
                 * Encodes the specified MultiWordGroupField message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.verify|verify} messages.
                 * @param message MultiWordGroupField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiWordGroupField message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.verify|verify} messages.
                 * @param message MultiWordGroupField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiWordGroupField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape} MultiWordGroupField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape;

                /**
                 * Decodes a MultiWordGroupField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape} MultiWordGroupField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField & protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Shape;

                /**
                 * Verifies a MultiWordGroupField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiWordGroupField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiWordGroupField
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField;

                /**
                 * Creates a plain object from a MultiWordGroupField message. Also converts values to other types if specified.
                 * @param message MultiWordGroupField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiWordGroupField to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MultiWordGroupField
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MultiWordGroupField {

                /** Properties of a MultiWordGroupField. */
                interface $Properties {

                    /** MultiWordGroupField groupInt32 */
                    groupInt32?: (number|null);

                    /** MultiWordGroupField groupUint32 */
                    groupUint32?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MultiWordGroupField. */
                type $Shape = protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField.$Properties;
            }

            /**
             * Properties of a MessageSetCorrect.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties instead.
             */
            interface IMessageSetCorrect extends protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties {
            }

            /** Represents a MessageSetCorrect. */
            class MessageSetCorrect {

                /** Reflection-backed declarations are not constructable. Use MessageSetCorrect.create(...) instead. */
                private constructor();

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof */
                ".protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof"?: (protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new MessageSetCorrect instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrect instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect;

                /**
                 * Encodes the specified MessageSetCorrect message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @param message MessageSetCorrect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrect message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @param message MessageSetCorrect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape;

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.$Shape;

                /**
                 * Verifies a MessageSetCorrect message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrect message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrect
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect;

                /**
                 * Creates a plain object from a MessageSetCorrect message. Also converts values to other types if specified.
                 * @param message MessageSetCorrect
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrect to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MessageSetCorrect
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSetCorrect {

                /** Properties of a MessageSetCorrect. */
                interface $Properties {

                    /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                    ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                    /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                    ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                    /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof */
                    ".protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof"?: (protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSetCorrect. */
                type $Shape = {
                  ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape|null;
                  ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape|null;
                  ".protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.extensionWithOneof"?: protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a MessageSetCorrectExtension1.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties instead.
             */
            interface IMessageSetCorrectExtension1 extends protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties {
            }

            /** Represents a MessageSetCorrectExtension1. */
            class MessageSetCorrectExtension1 {

                /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension1.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSetCorrectExtension1 str. */
                str: string;

                /**
                 * Creates a new MessageSetCorrectExtension1 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrectExtension1 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @param message MessageSetCorrectExtension1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @param message MessageSetCorrectExtension1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape;

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Shape;

                /**
                 * Verifies a MessageSetCorrectExtension1 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrectExtension1 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrectExtension1
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Creates a plain object from a MessageSetCorrectExtension1 message. Also converts values to other types if specified.
                 * @param message MessageSetCorrectExtension1
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrectExtension1 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MessageSetCorrectExtension1
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSetCorrectExtension1 {

                /** Properties of a MessageSetCorrectExtension1. */
                interface $Properties {

                    /** MessageSetCorrectExtension1 str */
                    str?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSetCorrectExtension1. */
                type $Shape = protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.$Properties;
            }

            /**
             * Properties of a MessageSetCorrectExtension2.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties instead.
             */
            interface IMessageSetCorrectExtension2 extends protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties {
            }

            /** Represents a MessageSetCorrectExtension2. */
            class MessageSetCorrectExtension2 {

                /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSetCorrectExtension2 i. */
                i: number;

                /**
                 * Creates a new MessageSetCorrectExtension2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrectExtension2 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @param message MessageSetCorrectExtension2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @param message MessageSetCorrectExtension2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape;

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Shape;

                /**
                 * Verifies a MessageSetCorrectExtension2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrectExtension2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrectExtension2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Creates a plain object from a MessageSetCorrectExtension2 message. Also converts values to other types if specified.
                 * @param message MessageSetCorrectExtension2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrectExtension2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MessageSetCorrectExtension2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSetCorrectExtension2 {

                /** Properties of a MessageSetCorrectExtension2. */
                interface $Properties {

                    /** MessageSetCorrectExtension2 i */
                    i?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSetCorrectExtension2. */
                type $Shape = protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.$Properties;
            }

            /**
             * Properties of an ExtensionWithOneof.
             * @deprecated Use protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties instead.
             */
            interface IExtensionWithOneof extends protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties {
            }

            /** Represents an ExtensionWithOneof. */
            class ExtensionWithOneof {

                /** Reflection-backed declarations are not constructable. Use ExtensionWithOneof.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ExtensionWithOneof a. */
                a?: (number|null);

                /** ExtensionWithOneof b. */
                b?: (number|null);

                /** ExtensionWithOneof oneofField. */
                oneofField?: ("a"|"b");

                /**
                 * Creates a new ExtensionWithOneof instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionWithOneof instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape): protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties): protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof;

                /**
                 * Encodes the specified ExtensionWithOneof message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.verify|verify} messages.
                 * @param message ExtensionWithOneof message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionWithOneof message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.verify|verify} messages.
                 * @param message ExtensionWithOneof message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionWithOneof message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape} ExtensionWithOneof
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape;

                /**
                 * Decodes an ExtensionWithOneof message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape} ExtensionWithOneof
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof & protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof.$Shape;

                /**
                 * Verifies an ExtensionWithOneof message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionWithOneof message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionWithOneof
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof;

                /**
                 * Creates a plain object from an ExtensionWithOneof message. Also converts values to other types if specified.
                 * @param message ExtensionWithOneof
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionWithOneof to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ExtensionWithOneof
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ExtensionWithOneof {

                /** Properties of an ExtensionWithOneof. */
                interface $Properties {

                    /** ExtensionWithOneof a */
                    a?: (number|null);

                    /** ExtensionWithOneof b */
                    b?: (number|null);

                    /** ExtensionWithOneof oneofField */
                    oneofField?: ("a"|"b");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of an ExtensionWithOneof. */
                type $Shape = {
                  a?: number|null;
                  b?: number|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ oneofField?: undefined; a?: null; b?: null }|{ oneofField?: "a"; a: number; b?: null }|{ oneofField?: "b"; a?: null; b: number })
                );
            }

            /** NestedEnum enum. */
            enum NestedEnum {

                /** FOO value */
                FOO = 0,

                /** BAR value */
                BAR = 1,

                /** BAZ value */
                BAZ = 2,

                /** NEG value */
                NEG = -1
            }
        }

        /**
         * Properties of a ForeignMessageProto2.
         * @deprecated Use protobuf_test_messages.proto2.ForeignMessageProto2.$Properties instead.
         */
        interface IForeignMessageProto2 extends protobuf_test_messages.proto2.ForeignMessageProto2.$Properties {
        }

        /** Represents a ForeignMessageProto2. */
        class ForeignMessageProto2 {

            /** Reflection-backed declarations are not constructable. Use ForeignMessageProto2.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ForeignMessageProto2 c. */
            c: number;

            /**
             * Creates a new ForeignMessageProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForeignMessageProto2 instance
             */
            static create(properties: protobuf_test_messages.proto2.ForeignMessageProto2.$Shape): protobuf_test_messages.proto2.ForeignMessageProto2 & protobuf_test_messages.proto2.ForeignMessageProto2.$Shape;
            static create(properties?: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties): protobuf_test_messages.proto2.ForeignMessageProto2;

            /**
             * Encodes the specified ForeignMessageProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.ForeignMessageProto2.verify|verify} messages.
             * @param message ForeignMessageProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForeignMessageProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.ForeignMessageProto2.verify|verify} messages.
             * @param message ForeignMessageProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForeignMessageProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.ForeignMessageProto2 & protobuf_test_messages.proto2.ForeignMessageProto2.$Shape} ForeignMessageProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.ForeignMessageProto2 & protobuf_test_messages.proto2.ForeignMessageProto2.$Shape;

            /**
             * Decodes a ForeignMessageProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.ForeignMessageProto2 & protobuf_test_messages.proto2.ForeignMessageProto2.$Shape} ForeignMessageProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.ForeignMessageProto2 & protobuf_test_messages.proto2.ForeignMessageProto2.$Shape;

            /**
             * Verifies a ForeignMessageProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForeignMessageProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForeignMessageProto2
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.ForeignMessageProto2;

            /**
             * Creates a plain object from a ForeignMessageProto2 message. Also converts values to other types if specified.
             * @param message ForeignMessageProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.ForeignMessageProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForeignMessageProto2 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ForeignMessageProto2
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ForeignMessageProto2 {

            /** Properties of a ForeignMessageProto2. */
            interface $Properties {

                /** ForeignMessageProto2 c */
                c?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ForeignMessageProto2. */
            type $Shape = protobuf_test_messages.proto2.ForeignMessageProto2.$Properties;
        }

        /**
         * Properties of a GroupField.
         * @deprecated Use protobuf_test_messages.proto2.GroupField.$Properties instead.
         */
        interface IGroupField extends protobuf_test_messages.proto2.GroupField.$Properties {
        }

        /** Represents a GroupField. */
        class GroupField {

            /** Reflection-backed declarations are not constructable. Use GroupField.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GroupField groupInt32. */
            groupInt32: number;

            /** GroupField groupUint32. */
            groupUint32: number;

            /**
             * Creates a new GroupField instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupField instance
             */
            static create(properties: protobuf_test_messages.proto2.GroupField.$Shape): protobuf_test_messages.proto2.GroupField & protobuf_test_messages.proto2.GroupField.$Shape;
            static create(properties?: protobuf_test_messages.proto2.GroupField.$Properties): protobuf_test_messages.proto2.GroupField;

            /**
             * Encodes the specified GroupField message. Does not implicitly {@link protobuf_test_messages.proto2.GroupField.verify|verify} messages.
             * @param message GroupField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.GroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupField message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.GroupField.verify|verify} messages.
             * @param message GroupField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.GroupField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupField message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.GroupField & protobuf_test_messages.proto2.GroupField.$Shape} GroupField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.GroupField & protobuf_test_messages.proto2.GroupField.$Shape;

            /**
             * Decodes a GroupField message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.GroupField & protobuf_test_messages.proto2.GroupField.$Shape} GroupField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.GroupField & protobuf_test_messages.proto2.GroupField.$Shape;

            /**
             * Verifies a GroupField message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupField message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupField
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.GroupField;

            /**
             * Creates a plain object from a GroupField message. Also converts values to other types if specified.
             * @param message GroupField
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.GroupField, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupField to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GroupField
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GroupField {

            /** Properties of a GroupField. */
            interface $Properties {

                /** GroupField groupInt32 */
                groupInt32?: (number|null);

                /** GroupField groupUint32 */
                groupUint32?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GroupField. */
            type $Shape = protobuf_test_messages.proto2.GroupField.$Properties;
        }

        /**
         * Properties of an UnknownToTestAllTypes.
         * @deprecated Use protobuf_test_messages.proto2.UnknownToTestAllTypes.$Properties instead.
         */
        interface IUnknownToTestAllTypes extends protobuf_test_messages.proto2.UnknownToTestAllTypes.$Properties {
        }

        /** Represents an UnknownToTestAllTypes. */
        class UnknownToTestAllTypes {

            /** Reflection-backed declarations are not constructable. Use UnknownToTestAllTypes.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UnknownToTestAllTypes optionalInt32. */
            optionalInt32: number;

            /** UnknownToTestAllTypes optionalString. */
            optionalString: string;

            /** UnknownToTestAllTypes nestedMessage. */
            nestedMessage?: (protobuf_test_messages.proto2.ForeignMessageProto2.$Properties|null);

            /** UnknownToTestAllTypes optionalgroup. */
            optionalgroup?: (protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties|null);

            /** UnknownToTestAllTypes optionalBool. */
            optionalBool: boolean;

            /** UnknownToTestAllTypes repeatedInt32. */
            repeatedInt32: number[];

            /**
             * Creates a new UnknownToTestAllTypes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnknownToTestAllTypes instance
             */
            static create(properties: protobuf_test_messages.proto2.UnknownToTestAllTypes.$Shape): protobuf_test_messages.proto2.UnknownToTestAllTypes & protobuf_test_messages.proto2.UnknownToTestAllTypes.$Shape;
            static create(properties?: protobuf_test_messages.proto2.UnknownToTestAllTypes.$Properties): protobuf_test_messages.proto2.UnknownToTestAllTypes;

            /**
             * Encodes the specified UnknownToTestAllTypes message. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.verify|verify} messages.
             * @param message UnknownToTestAllTypes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnknownToTestAllTypes message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.verify|verify} messages.
             * @param message UnknownToTestAllTypes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnknownToTestAllTypes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes & protobuf_test_messages.proto2.UnknownToTestAllTypes.$Shape} UnknownToTestAllTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.UnknownToTestAllTypes & protobuf_test_messages.proto2.UnknownToTestAllTypes.$Shape;

            /**
             * Decodes an UnknownToTestAllTypes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes & protobuf_test_messages.proto2.UnknownToTestAllTypes.$Shape} UnknownToTestAllTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.UnknownToTestAllTypes & protobuf_test_messages.proto2.UnknownToTestAllTypes.$Shape;

            /**
             * Verifies an UnknownToTestAllTypes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnknownToTestAllTypes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnknownToTestAllTypes
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.UnknownToTestAllTypes;

            /**
             * Creates a plain object from an UnknownToTestAllTypes message. Also converts values to other types if specified.
             * @param message UnknownToTestAllTypes
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.UnknownToTestAllTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnknownToTestAllTypes to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UnknownToTestAllTypes
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UnknownToTestAllTypes {

            /** Properties of an UnknownToTestAllTypes. */
            interface $Properties {

                /** UnknownToTestAllTypes optionalInt32 */
                optionalInt32?: (number|null);

                /** UnknownToTestAllTypes optionalString */
                optionalString?: (string|null);

                /** UnknownToTestAllTypes nestedMessage */
                nestedMessage?: (protobuf_test_messages.proto2.ForeignMessageProto2.$Properties|null);

                /** UnknownToTestAllTypes optionalgroup */
                optionalgroup?: (protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties|null);

                /** UnknownToTestAllTypes optionalBool */
                optionalBool?: (boolean|null);

                /** UnknownToTestAllTypes repeatedInt32 */
                repeatedInt32?: (number[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an UnknownToTestAllTypes. */
            type $Shape = protobuf_test_messages.proto2.UnknownToTestAllTypes.$Properties;

            /**
             * Properties of an OptionalGroup.
             * @deprecated Use protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties instead.
             */
            interface IOptionalGroup extends protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties {
            }

            /** Represents an OptionalGroup. */
            class OptionalGroup {

                /** Reflection-backed declarations are not constructable. Use OptionalGroup.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OptionalGroup a. */
                a: number;

                /**
                 * Creates a new OptionalGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OptionalGroup instance
                 */
                static create(properties: protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape;
                static create(properties?: protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup;

                /**
                 * Encodes the specified OptionalGroup message. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                 * @param message OptionalGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                 * @param message OptionalGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape} OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape;

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape} OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup & protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Shape;

                /**
                 * Verifies an OptionalGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OptionalGroup
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup;

                /**
                 * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                 * @param message OptionalGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OptionalGroup to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for OptionalGroup
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OptionalGroup {

                /** Properties of an OptionalGroup. */
                interface $Properties {

                    /** OptionalGroup a */
                    a?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OptionalGroup. */
                type $Shape = protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.$Properties;
            }
        }

        /**
         * Properties of a NullHypothesisProto2.
         * @deprecated Use protobuf_test_messages.proto2.NullHypothesisProto2.$Properties instead.
         */
        interface INullHypothesisProto2 extends protobuf_test_messages.proto2.NullHypothesisProto2.$Properties {
        }

        /** Represents a NullHypothesisProto2. */
        class NullHypothesisProto2 {

            /** Reflection-backed declarations are not constructable. Use NullHypothesisProto2.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new NullHypothesisProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullHypothesisProto2 instance
             */
            static create(properties: protobuf_test_messages.proto2.NullHypothesisProto2.$Shape): protobuf_test_messages.proto2.NullHypothesisProto2 & protobuf_test_messages.proto2.NullHypothesisProto2.$Shape;
            static create(properties?: protobuf_test_messages.proto2.NullHypothesisProto2.$Properties): protobuf_test_messages.proto2.NullHypothesisProto2;

            /**
             * Encodes the specified NullHypothesisProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.NullHypothesisProto2.verify|verify} messages.
             * @param message NullHypothesisProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.NullHypothesisProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullHypothesisProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.NullHypothesisProto2.verify|verify} messages.
             * @param message NullHypothesisProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.NullHypothesisProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullHypothesisProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.NullHypothesisProto2 & protobuf_test_messages.proto2.NullHypothesisProto2.$Shape} NullHypothesisProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.NullHypothesisProto2 & protobuf_test_messages.proto2.NullHypothesisProto2.$Shape;

            /**
             * Decodes a NullHypothesisProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.NullHypothesisProto2 & protobuf_test_messages.proto2.NullHypothesisProto2.$Shape} NullHypothesisProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.NullHypothesisProto2 & protobuf_test_messages.proto2.NullHypothesisProto2.$Shape;

            /**
             * Verifies a NullHypothesisProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullHypothesisProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullHypothesisProto2
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.NullHypothesisProto2;

            /**
             * Creates a plain object from a NullHypothesisProto2 message. Also converts values to other types if specified.
             * @param message NullHypothesisProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.NullHypothesisProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullHypothesisProto2 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NullHypothesisProto2
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NullHypothesisProto2 {

            /** Properties of a NullHypothesisProto2. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NullHypothesisProto2. */
            type $Shape = protobuf_test_messages.proto2.NullHypothesisProto2.$Properties;
        }

        /**
         * Properties of an EnumOnlyProto2.
         * @deprecated Use protobuf_test_messages.proto2.EnumOnlyProto2.$Properties instead.
         */
        interface IEnumOnlyProto2 extends protobuf_test_messages.proto2.EnumOnlyProto2.$Properties {
        }

        /** Represents an EnumOnlyProto2. */
        class EnumOnlyProto2 {

            /** Reflection-backed declarations are not constructable. Use EnumOnlyProto2.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new EnumOnlyProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOnlyProto2 instance
             */
            static create(properties: protobuf_test_messages.proto2.EnumOnlyProto2.$Shape): protobuf_test_messages.proto2.EnumOnlyProto2 & protobuf_test_messages.proto2.EnumOnlyProto2.$Shape;
            static create(properties?: protobuf_test_messages.proto2.EnumOnlyProto2.$Properties): protobuf_test_messages.proto2.EnumOnlyProto2;

            /**
             * Encodes the specified EnumOnlyProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.EnumOnlyProto2.verify|verify} messages.
             * @param message EnumOnlyProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.EnumOnlyProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOnlyProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.EnumOnlyProto2.verify|verify} messages.
             * @param message EnumOnlyProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.EnumOnlyProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOnlyProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.EnumOnlyProto2 & protobuf_test_messages.proto2.EnumOnlyProto2.$Shape} EnumOnlyProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.EnumOnlyProto2 & protobuf_test_messages.proto2.EnumOnlyProto2.$Shape;

            /**
             * Decodes an EnumOnlyProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.EnumOnlyProto2 & protobuf_test_messages.proto2.EnumOnlyProto2.$Shape} EnumOnlyProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.EnumOnlyProto2 & protobuf_test_messages.proto2.EnumOnlyProto2.$Shape;

            /**
             * Verifies an EnumOnlyProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOnlyProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOnlyProto2
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.EnumOnlyProto2;

            /**
             * Creates a plain object from an EnumOnlyProto2 message. Also converts values to other types if specified.
             * @param message EnumOnlyProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.EnumOnlyProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOnlyProto2 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumOnlyProto2
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumOnlyProto2 {

            /** Properties of an EnumOnlyProto2. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumOnlyProto2. */
            type $Shape = protobuf_test_messages.proto2.EnumOnlyProto2.$Properties;

            /** Bool enum. */
            enum Bool {

                /** kFalse value */
                kFalse = 0,

                /** kTrue value */
                kTrue = 1
            }
        }

        /**
         * Properties of a OneStringProto2.
         * @deprecated Use protobuf_test_messages.proto2.OneStringProto2.$Properties instead.
         */
        interface IOneStringProto2 extends protobuf_test_messages.proto2.OneStringProto2.$Properties {
        }

        /** Represents a OneStringProto2. */
        class OneStringProto2 {

            /** Reflection-backed declarations are not constructable. Use OneStringProto2.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** OneStringProto2 data. */
            data: string;

            /**
             * Creates a new OneStringProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneStringProto2 instance
             */
            static create(properties: protobuf_test_messages.proto2.OneStringProto2.$Shape): protobuf_test_messages.proto2.OneStringProto2 & protobuf_test_messages.proto2.OneStringProto2.$Shape;
            static create(properties?: protobuf_test_messages.proto2.OneStringProto2.$Properties): protobuf_test_messages.proto2.OneStringProto2;

            /**
             * Encodes the specified OneStringProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.OneStringProto2.verify|verify} messages.
             * @param message OneStringProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.OneStringProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneStringProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.OneStringProto2.verify|verify} messages.
             * @param message OneStringProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.OneStringProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a OneStringProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.OneStringProto2 & protobuf_test_messages.proto2.OneStringProto2.$Shape} OneStringProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.OneStringProto2 & protobuf_test_messages.proto2.OneStringProto2.$Shape;

            /**
             * Decodes a OneStringProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.OneStringProto2 & protobuf_test_messages.proto2.OneStringProto2.$Shape} OneStringProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.OneStringProto2 & protobuf_test_messages.proto2.OneStringProto2.$Shape;

            /**
             * Verifies a OneStringProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a OneStringProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneStringProto2
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.OneStringProto2;

            /**
             * Creates a plain object from a OneStringProto2 message. Also converts values to other types if specified.
             * @param message OneStringProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.OneStringProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneStringProto2 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for OneStringProto2
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace OneStringProto2 {

            /** Properties of a OneStringProto2. */
            interface $Properties {

                /** OneStringProto2 data */
                data?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a OneStringProto2. */
            type $Shape = protobuf_test_messages.proto2.OneStringProto2.$Properties;
        }

        /**
         * Properties of a ProtoWithKeywords.
         * @deprecated Use protobuf_test_messages.proto2.ProtoWithKeywords.$Properties instead.
         */
        interface IProtoWithKeywords extends protobuf_test_messages.proto2.ProtoWithKeywords.$Properties {
        }

        /** Represents a ProtoWithKeywords. */
        class ProtoWithKeywords {

            /** Reflection-backed declarations are not constructable. Use ProtoWithKeywords.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ProtoWithKeywords inline. */
            inline: number;

            /** ProtoWithKeywords concept. */
            concept: string;

            /** ProtoWithKeywords requires. */
            requires: string[];

            /**
             * Creates a new ProtoWithKeywords instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoWithKeywords instance
             */
            static create(properties: protobuf_test_messages.proto2.ProtoWithKeywords.$Shape): protobuf_test_messages.proto2.ProtoWithKeywords & protobuf_test_messages.proto2.ProtoWithKeywords.$Shape;
            static create(properties?: protobuf_test_messages.proto2.ProtoWithKeywords.$Properties): protobuf_test_messages.proto2.ProtoWithKeywords;

            /**
             * Encodes the specified ProtoWithKeywords message. Does not implicitly {@link protobuf_test_messages.proto2.ProtoWithKeywords.verify|verify} messages.
             * @param message ProtoWithKeywords message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.ProtoWithKeywords.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoWithKeywords message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.ProtoWithKeywords.verify|verify} messages.
             * @param message ProtoWithKeywords message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.ProtoWithKeywords.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoWithKeywords message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.ProtoWithKeywords & protobuf_test_messages.proto2.ProtoWithKeywords.$Shape} ProtoWithKeywords
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.ProtoWithKeywords & protobuf_test_messages.proto2.ProtoWithKeywords.$Shape;

            /**
             * Decodes a ProtoWithKeywords message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.ProtoWithKeywords & protobuf_test_messages.proto2.ProtoWithKeywords.$Shape} ProtoWithKeywords
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.ProtoWithKeywords & protobuf_test_messages.proto2.ProtoWithKeywords.$Shape;

            /**
             * Verifies a ProtoWithKeywords message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoWithKeywords message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoWithKeywords
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.ProtoWithKeywords;

            /**
             * Creates a plain object from a ProtoWithKeywords message. Also converts values to other types if specified.
             * @param message ProtoWithKeywords
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.ProtoWithKeywords, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoWithKeywords to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ProtoWithKeywords
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ProtoWithKeywords {

            /** Properties of a ProtoWithKeywords. */
            interface $Properties {

                /** ProtoWithKeywords inline */
                inline?: (number|null);

                /** ProtoWithKeywords concept */
                concept?: (string|null);

                /** ProtoWithKeywords requires */
                requires?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ProtoWithKeywords. */
            type $Shape = protobuf_test_messages.proto2.ProtoWithKeywords.$Properties;
        }

        /**
         * Properties of a TestAllRequiredTypesProto2.
         * @deprecated Use protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties instead.
         */
        interface ITestAllRequiredTypesProto2 extends protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties {
        }

        /** Represents a TestAllRequiredTypesProto2. */
        class TestAllRequiredTypesProto2 {

            /** Reflection-backed declarations are not constructable. Use TestAllRequiredTypesProto2.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TestAllRequiredTypesProto2 requiredInt32. */
            requiredInt32: number;

            /** TestAllRequiredTypesProto2 requiredInt64. */
            requiredInt64: (number|Long);

            /** TestAllRequiredTypesProto2 requiredUint32. */
            requiredUint32: number;

            /** TestAllRequiredTypesProto2 requiredUint64. */
            requiredUint64: (number|Long);

            /** TestAllRequiredTypesProto2 requiredSint32. */
            requiredSint32: number;

            /** TestAllRequiredTypesProto2 requiredSint64. */
            requiredSint64: (number|Long);

            /** TestAllRequiredTypesProto2 requiredFixed32. */
            requiredFixed32: number;

            /** TestAllRequiredTypesProto2 requiredFixed64. */
            requiredFixed64: (number|Long);

            /** TestAllRequiredTypesProto2 requiredSfixed32. */
            requiredSfixed32: number;

            /** TestAllRequiredTypesProto2 requiredSfixed64. */
            requiredSfixed64: (number|Long);

            /** TestAllRequiredTypesProto2 requiredFloat. */
            requiredFloat: number;

            /** TestAllRequiredTypesProto2 requiredDouble. */
            requiredDouble: number;

            /** TestAllRequiredTypesProto2 requiredBool. */
            requiredBool: boolean;

            /** TestAllRequiredTypesProto2 requiredString. */
            requiredString: string;

            /** TestAllRequiredTypesProto2 requiredBytes. */
            requiredBytes: Uint8Array;

            /** TestAllRequiredTypesProto2 requiredNestedMessage. */
            requiredNestedMessage: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties;

            /** TestAllRequiredTypesProto2 requiredForeignMessage. */
            requiredForeignMessage: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties;

            /** TestAllRequiredTypesProto2 requiredNestedEnum. */
            requiredNestedEnum: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedEnum;

            /** TestAllRequiredTypesProto2 requiredForeignEnum. */
            requiredForeignEnum: protobuf_test_messages.proto2.ForeignEnumProto2;

            /** TestAllRequiredTypesProto2 requiredStringPiece. */
            requiredStringPiece: string;

            /** TestAllRequiredTypesProto2 requiredCord. */
            requiredCord: string;

            /** TestAllRequiredTypesProto2 recursiveMessage. */
            recursiveMessage: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties;

            /** TestAllRequiredTypesProto2 optionalRecursiveMessage. */
            optionalRecursiveMessage?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties|null);

            /** TestAllRequiredTypesProto2 data. */
            data: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties;

            /** TestAllRequiredTypesProto2 defaultInt32. */
            defaultInt32: number;

            /** TestAllRequiredTypesProto2 defaultInt64. */
            defaultInt64: (number|Long);

            /** TestAllRequiredTypesProto2 defaultUint32. */
            defaultUint32: number;

            /** TestAllRequiredTypesProto2 defaultUint64. */
            defaultUint64: (number|Long);

            /** TestAllRequiredTypesProto2 defaultSint32. */
            defaultSint32: number;

            /** TestAllRequiredTypesProto2 defaultSint64. */
            defaultSint64: (number|Long);

            /** TestAllRequiredTypesProto2 defaultFixed32. */
            defaultFixed32: number;

            /** TestAllRequiredTypesProto2 defaultFixed64. */
            defaultFixed64: (number|Long);

            /** TestAllRequiredTypesProto2 defaultSfixed32. */
            defaultSfixed32: number;

            /** TestAllRequiredTypesProto2 defaultSfixed64. */
            defaultSfixed64: (number|Long);

            /** TestAllRequiredTypesProto2 defaultFloat. */
            defaultFloat: number;

            /** TestAllRequiredTypesProto2 defaultDouble. */
            defaultDouble: number;

            /** TestAllRequiredTypesProto2 defaultBool. */
            defaultBool: boolean;

            /** TestAllRequiredTypesProto2 defaultString. */
            defaultString: string;

            /** TestAllRequiredTypesProto2 defaultBytes. */
            defaultBytes: Uint8Array;

            /**
             * Creates a new TestAllRequiredTypesProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestAllRequiredTypesProto2 instance
             */
            static create(properties: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Shape): protobuf_test_messages.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Shape;
            static create(properties?: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties): protobuf_test_messages.proto2.TestAllRequiredTypesProto2;

            /**
             * Encodes the specified TestAllRequiredTypesProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.verify|verify} messages.
             * @param message TestAllRequiredTypesProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestAllRequiredTypesProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.verify|verify} messages.
             * @param message TestAllRequiredTypesProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestAllRequiredTypesProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Shape} TestAllRequiredTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Shape;

            /**
             * Decodes a TestAllRequiredTypesProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Shape} TestAllRequiredTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllRequiredTypesProto2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Shape;

            /**
             * Verifies a TestAllRequiredTypesProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestAllRequiredTypesProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestAllRequiredTypesProto2
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllRequiredTypesProto2;

            /**
             * Creates a plain object from a TestAllRequiredTypesProto2 message. Also converts values to other types if specified.
             * @param message TestAllRequiredTypesProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestAllRequiredTypesProto2 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TestAllRequiredTypesProto2
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TestAllRequiredTypesProto2 {

            /** Properties of a TestAllRequiredTypesProto2. */
            interface $Properties {

                /** TestAllRequiredTypesProto2 requiredInt32 */
                requiredInt32: number;

                /** TestAllRequiredTypesProto2 requiredInt64 */
                requiredInt64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredUint32 */
                requiredUint32: number;

                /** TestAllRequiredTypesProto2 requiredUint64 */
                requiredUint64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredSint32 */
                requiredSint32: number;

                /** TestAllRequiredTypesProto2 requiredSint64 */
                requiredSint64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredFixed32 */
                requiredFixed32: number;

                /** TestAllRequiredTypesProto2 requiredFixed64 */
                requiredFixed64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredSfixed32 */
                requiredSfixed32: number;

                /** TestAllRequiredTypesProto2 requiredSfixed64 */
                requiredSfixed64: (number|Long);

                /** TestAllRequiredTypesProto2 requiredFloat */
                requiredFloat: number;

                /** TestAllRequiredTypesProto2 requiredDouble */
                requiredDouble: number;

                /** TestAllRequiredTypesProto2 requiredBool */
                requiredBool: boolean;

                /** TestAllRequiredTypesProto2 requiredString */
                requiredString: string;

                /** TestAllRequiredTypesProto2 requiredBytes */
                requiredBytes: Uint8Array;

                /** TestAllRequiredTypesProto2 requiredNestedMessage */
                requiredNestedMessage: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties;

                /** TestAllRequiredTypesProto2 requiredForeignMessage */
                requiredForeignMessage: protobuf_test_messages.proto2.ForeignMessageProto2.$Properties;

                /** TestAllRequiredTypesProto2 requiredNestedEnum */
                requiredNestedEnum: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedEnum;

                /** TestAllRequiredTypesProto2 requiredForeignEnum */
                requiredForeignEnum: protobuf_test_messages.proto2.ForeignEnumProto2;

                /** TestAllRequiredTypesProto2 requiredStringPiece */
                requiredStringPiece: string;

                /** TestAllRequiredTypesProto2 requiredCord */
                requiredCord: string;

                /** TestAllRequiredTypesProto2 recursiveMessage */
                recursiveMessage: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties;

                /** TestAllRequiredTypesProto2 optionalRecursiveMessage */
                optionalRecursiveMessage?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties|null);

                /** TestAllRequiredTypesProto2 data */
                data: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties;

                /** TestAllRequiredTypesProto2 defaultInt32 */
                defaultInt32: number;

                /** TestAllRequiredTypesProto2 defaultInt64 */
                defaultInt64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultUint32 */
                defaultUint32: number;

                /** TestAllRequiredTypesProto2 defaultUint64 */
                defaultUint64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultSint32 */
                defaultSint32: number;

                /** TestAllRequiredTypesProto2 defaultSint64 */
                defaultSint64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultFixed32 */
                defaultFixed32: number;

                /** TestAllRequiredTypesProto2 defaultFixed64 */
                defaultFixed64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultSfixed32 */
                defaultSfixed32: number;

                /** TestAllRequiredTypesProto2 defaultSfixed64 */
                defaultSfixed64: (number|Long);

                /** TestAllRequiredTypesProto2 defaultFloat */
                defaultFloat: number;

                /** TestAllRequiredTypesProto2 defaultDouble */
                defaultDouble: number;

                /** TestAllRequiredTypesProto2 defaultBool */
                defaultBool: boolean;

                /** TestAllRequiredTypesProto2 defaultString */
                defaultString: string;

                /** TestAllRequiredTypesProto2 defaultBytes */
                defaultBytes: Uint8Array;

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a TestAllRequiredTypesProto2. */
            type $Shape = protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties;

            /**
             * Properties of a NestedMessage.
             * @deprecated Use protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties instead.
             */
            interface INestedMessage extends protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties {
            }

            /** Represents a NestedMessage. */
            class NestedMessage {

                /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** NestedMessage a. */
                a: number;

                /** NestedMessage corecursive. */
                corecursive: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties;

                /** NestedMessage optionalCorecursive. */
                optionalCorecursive?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties|null);

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedMessage instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage;

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Shape;

                /**
                 * Verifies a NestedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedMessage
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage;

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @param message NestedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedMessage to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NestedMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NestedMessage {

                /** Properties of a NestedMessage. */
                interface $Properties {

                    /** NestedMessage a */
                    a: number;

                    /** NestedMessage corecursive */
                    corecursive: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties;

                    /** NestedMessage optionalCorecursive */
                    optionalCorecursive?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NestedMessage. */
                type $Shape = protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage.$Properties;
            }

            /**
             * Properties of a Data.
             * @deprecated Use protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties instead.
             */
            interface IData extends protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties {
            }

            /** Represents a Data. */
            class Data {

                /** Reflection-backed declarations are not constructable. Use Data.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Data groupInt32. */
                groupInt32: number;

                /** Data groupUint32. */
                groupUint32: number;

                /**
                 * Creates a new Data instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Data instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Shape): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data;

                /**
                 * Encodes the specified Data message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.verify|verify} messages.
                 * @param message Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Data message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.verify|verify} messages.
                 * @param message Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Data message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Shape} Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Shape;

                /**
                 * Decodes a Data message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Shape} Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Shape;

                /**
                 * Verifies a Data message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Data message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Data
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data;

                /**
                 * Creates a plain object from a Data message. Also converts values to other types if specified.
                 * @param message Data
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Data to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Data
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Data {

                /** Properties of a Data. */
                interface $Properties {

                    /** Data groupInt32 */
                    groupInt32: number;

                    /** Data groupUint32 */
                    groupUint32: number;

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Data. */
                type $Shape = protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data.$Properties;
            }

            /**
             * Properties of a MessageSetCorrect.
             * @deprecated Use protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties instead.
             */
            interface IMessageSetCorrect extends protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties {
            }

            /** Represents a MessageSetCorrect. */
            class MessageSetCorrect {

                /** Reflection-backed declarations are not constructable. Use MessageSetCorrect.create(...) instead. */
                private constructor();

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new MessageSetCorrect instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrect instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect;

                /**
                 * Encodes the specified MessageSetCorrect message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @param message MessageSetCorrect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrect message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @param message MessageSetCorrect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape;

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape} MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Shape;

                /**
                 * Verifies a MessageSetCorrect message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrect message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrect
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect;

                /**
                 * Creates a plain object from a MessageSetCorrect message. Also converts values to other types if specified.
                 * @param message MessageSetCorrect
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrect to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MessageSetCorrect
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSetCorrect {

                /** Properties of a MessageSetCorrect. */
                interface $Properties {

                    /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                    ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties|null);

                    /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                    ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSetCorrect. */
                type $Shape = protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect.$Properties;
            }

            /**
             * Properties of a MessageSetCorrectExtension1.
             * @deprecated Use protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties instead.
             */
            interface IMessageSetCorrectExtension1 extends protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties {
            }

            /** Represents a MessageSetCorrectExtension1. */
            class MessageSetCorrectExtension1 {

                /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension1.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSetCorrectExtension1 str. */
                str: string;

                /**
                 * Creates a new MessageSetCorrectExtension1 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrectExtension1 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @param message MessageSetCorrectExtension1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @param message MessageSetCorrectExtension1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape;

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape} MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Shape;

                /**
                 * Verifies a MessageSetCorrectExtension1 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrectExtension1 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrectExtension1
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Creates a plain object from a MessageSetCorrectExtension1 message. Also converts values to other types if specified.
                 * @param message MessageSetCorrectExtension1
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrectExtension1 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MessageSetCorrectExtension1
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSetCorrectExtension1 {

                /** Properties of a MessageSetCorrectExtension1. */
                interface $Properties {

                    /** MessageSetCorrectExtension1 str */
                    str: string;

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSetCorrectExtension1. */
                type $Shape = protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1.$Properties;
            }

            /**
             * Properties of a MessageSetCorrectExtension2.
             * @deprecated Use protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties instead.
             */
            interface IMessageSetCorrectExtension2 extends protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties {
            }

            /** Represents a MessageSetCorrectExtension2. */
            class MessageSetCorrectExtension2 {

                /** Reflection-backed declarations are not constructable. Use MessageSetCorrectExtension2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSetCorrectExtension2 i. */
                i: number;

                /**
                 * Creates a new MessageSetCorrectExtension2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrectExtension2 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @param message MessageSetCorrectExtension2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @param message MessageSetCorrectExtension2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape;

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape} MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2 & protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Shape;

                /**
                 * Verifies a MessageSetCorrectExtension2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrectExtension2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrectExtension2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Creates a plain object from a MessageSetCorrectExtension2 message. Also converts values to other types if specified.
                 * @param message MessageSetCorrectExtension2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrectExtension2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for MessageSetCorrectExtension2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSetCorrectExtension2 {

                /** Properties of a MessageSetCorrectExtension2. */
                interface $Properties {

                    /** MessageSetCorrectExtension2 i */
                    i: number;

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSetCorrectExtension2. */
                type $Shape = protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2.$Properties;
            }

            /** NestedEnum enum. */
            enum NestedEnum {

                /** FOO value */
                FOO = 0,

                /** BAR value */
                BAR = 1,

                /** BAZ value */
                BAZ = 2,

                /** NEG value */
                NEG = -1
            }
        }

        /**
         * Properties of a TestLargeOneof.
         * @deprecated Use protobuf_test_messages.proto2.TestLargeOneof.$Properties instead.
         */
        interface ITestLargeOneof extends protobuf_test_messages.proto2.TestLargeOneof.$Properties {
        }

        /** Represents a TestLargeOneof. */
        class TestLargeOneof {

            /** Reflection-backed declarations are not constructable. Use TestLargeOneof.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TestLargeOneof a1. */
            a1?: (protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties|null);

            /** TestLargeOneof a2. */
            a2?: (protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties|null);

            /** TestLargeOneof a3. */
            a3?: (protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties|null);

            /** TestLargeOneof a4. */
            a4?: (protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties|null);

            /** TestLargeOneof a5. */
            a5?: (protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties|null);

            /** TestLargeOneof largeOneof. */
            largeOneof?: ("a1"|"a2"|"a3"|"a4"|"a5");

            /**
             * Creates a new TestLargeOneof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestLargeOneof instance
             */
            static create(properties: protobuf_test_messages.proto2.TestLargeOneof.$Shape): protobuf_test_messages.proto2.TestLargeOneof & protobuf_test_messages.proto2.TestLargeOneof.$Shape;
            static create(properties?: protobuf_test_messages.proto2.TestLargeOneof.$Properties): protobuf_test_messages.proto2.TestLargeOneof;

            /**
             * Encodes the specified TestLargeOneof message. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.verify|verify} messages.
             * @param message TestLargeOneof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto2.TestLargeOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestLargeOneof message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.verify|verify} messages.
             * @param message TestLargeOneof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto2.TestLargeOneof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestLargeOneof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.TestLargeOneof & protobuf_test_messages.proto2.TestLargeOneof.$Shape} TestLargeOneof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestLargeOneof & protobuf_test_messages.proto2.TestLargeOneof.$Shape;

            /**
             * Decodes a TestLargeOneof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.TestLargeOneof & protobuf_test_messages.proto2.TestLargeOneof.$Shape} TestLargeOneof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestLargeOneof & protobuf_test_messages.proto2.TestLargeOneof.$Shape;

            /**
             * Verifies a TestLargeOneof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestLargeOneof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestLargeOneof
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestLargeOneof;

            /**
             * Creates a plain object from a TestLargeOneof message. Also converts values to other types if specified.
             * @param message TestLargeOneof
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto2.TestLargeOneof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestLargeOneof to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TestLargeOneof
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TestLargeOneof {

            /** Properties of a TestLargeOneof. */
            interface $Properties {

                /** TestLargeOneof a1 */
                a1?: (protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties|null);

                /** TestLargeOneof a2 */
                a2?: (protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties|null);

                /** TestLargeOneof a3 */
                a3?: (protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties|null);

                /** TestLargeOneof a4 */
                a4?: (protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties|null);

                /** TestLargeOneof a5 */
                a5?: (protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties|null);

                /** TestLargeOneof largeOneof */
                largeOneof?: ("a1"|"a2"|"a3"|"a4"|"a5");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a TestLargeOneof. */
            type $Shape = {
              a1?: protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape|null;
              a2?: protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape|null;
              a3?: protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape|null;
              a4?: protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape|null;
              a5?: protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ largeOneof?: undefined; a1?: null; a2?: null; a3?: null; a4?: null; a5?: null }|{ largeOneof?: "a1"; a1: protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape; a2?: null; a3?: null; a4?: null; a5?: null }|{ largeOneof?: "a2"; a1?: null; a2: protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape; a3?: null; a4?: null; a5?: null }|{ largeOneof?: "a3"; a1?: null; a2?: null; a3: protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape; a4?: null; a5?: null }|{ largeOneof?: "a4"; a1?: null; a2?: null; a3?: null; a4: protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape; a5?: null }|{ largeOneof?: "a5"; a1?: null; a2?: null; a3?: null; a4?: null; a5: protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape })
            );

            /**
             * Properties of a A1.
             * @deprecated Use protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties instead.
             */
            interface IA1 extends protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties {
            }

            /** Represents a A1. */
            class A1 {

                /** Reflection-backed declarations are not constructable. Use A1.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new A1 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns A1 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape): protobuf_test_messages.proto2.TestLargeOneof.A1 & protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties): protobuf_test_messages.proto2.TestLargeOneof.A1;

                /**
                 * Encodes the specified A1 message. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A1.verify|verify} messages.
                 * @param message A1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified A1 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A1.verify|verify} messages.
                 * @param message A1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a A1 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A1 & protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape} A1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestLargeOneof.A1 & protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape;

                /**
                 * Decodes a A1 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A1 & protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape} A1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestLargeOneof.A1 & protobuf_test_messages.proto2.TestLargeOneof.A1.$Shape;

                /**
                 * Verifies a A1 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a A1 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns A1
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestLargeOneof.A1;

                /**
                 * Creates a plain object from a A1 message. Also converts values to other types if specified.
                 * @param message A1
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestLargeOneof.A1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this A1 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for A1
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace A1 {

                /** Properties of a A1. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a A1. */
                type $Shape = protobuf_test_messages.proto2.TestLargeOneof.A1.$Properties;
            }

            /**
             * Properties of a A2.
             * @deprecated Use protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties instead.
             */
            interface IA2 extends protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties {
            }

            /** Represents a A2. */
            class A2 {

                /** Reflection-backed declarations are not constructable. Use A2.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new A2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns A2 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape): protobuf_test_messages.proto2.TestLargeOneof.A2 & protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties): protobuf_test_messages.proto2.TestLargeOneof.A2;

                /**
                 * Encodes the specified A2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A2.verify|verify} messages.
                 * @param message A2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified A2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A2.verify|verify} messages.
                 * @param message A2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a A2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A2 & protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape} A2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestLargeOneof.A2 & protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape;

                /**
                 * Decodes a A2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A2 & protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape} A2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestLargeOneof.A2 & protobuf_test_messages.proto2.TestLargeOneof.A2.$Shape;

                /**
                 * Verifies a A2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a A2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns A2
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestLargeOneof.A2;

                /**
                 * Creates a plain object from a A2 message. Also converts values to other types if specified.
                 * @param message A2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestLargeOneof.A2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this A2 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for A2
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace A2 {

                /** Properties of a A2. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a A2. */
                type $Shape = protobuf_test_messages.proto2.TestLargeOneof.A2.$Properties;
            }

            /**
             * Properties of a A3.
             * @deprecated Use protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties instead.
             */
            interface IA3 extends protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties {
            }

            /** Represents a A3. */
            class A3 {

                /** Reflection-backed declarations are not constructable. Use A3.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new A3 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns A3 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape): protobuf_test_messages.proto2.TestLargeOneof.A3 & protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties): protobuf_test_messages.proto2.TestLargeOneof.A3;

                /**
                 * Encodes the specified A3 message. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A3.verify|verify} messages.
                 * @param message A3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified A3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A3.verify|verify} messages.
                 * @param message A3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a A3 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A3 & protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape} A3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestLargeOneof.A3 & protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape;

                /**
                 * Decodes a A3 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A3 & protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape} A3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestLargeOneof.A3 & protobuf_test_messages.proto2.TestLargeOneof.A3.$Shape;

                /**
                 * Verifies a A3 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a A3 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns A3
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestLargeOneof.A3;

                /**
                 * Creates a plain object from a A3 message. Also converts values to other types if specified.
                 * @param message A3
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestLargeOneof.A3, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this A3 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for A3
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace A3 {

                /** Properties of a A3. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a A3. */
                type $Shape = protobuf_test_messages.proto2.TestLargeOneof.A3.$Properties;
            }

            /**
             * Properties of a A4.
             * @deprecated Use protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties instead.
             */
            interface IA4 extends protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties {
            }

            /** Represents a A4. */
            class A4 {

                /** Reflection-backed declarations are not constructable. Use A4.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new A4 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns A4 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape): protobuf_test_messages.proto2.TestLargeOneof.A4 & protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties): protobuf_test_messages.proto2.TestLargeOneof.A4;

                /**
                 * Encodes the specified A4 message. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A4.verify|verify} messages.
                 * @param message A4 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified A4 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A4.verify|verify} messages.
                 * @param message A4 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a A4 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A4 & protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape} A4
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestLargeOneof.A4 & protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape;

                /**
                 * Decodes a A4 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A4 & protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape} A4
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestLargeOneof.A4 & protobuf_test_messages.proto2.TestLargeOneof.A4.$Shape;

                /**
                 * Verifies a A4 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a A4 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns A4
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestLargeOneof.A4;

                /**
                 * Creates a plain object from a A4 message. Also converts values to other types if specified.
                 * @param message A4
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestLargeOneof.A4, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this A4 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for A4
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace A4 {

                /** Properties of a A4. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a A4. */
                type $Shape = protobuf_test_messages.proto2.TestLargeOneof.A4.$Properties;
            }

            /**
             * Properties of a A5.
             * @deprecated Use protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties instead.
             */
            interface IA5 extends protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties {
            }

            /** Represents a A5. */
            class A5 {

                /** Reflection-backed declarations are not constructable. Use A5.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new A5 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns A5 instance
                 */
                static create(properties: protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape): protobuf_test_messages.proto2.TestLargeOneof.A5 & protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape;
                static create(properties?: protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties): protobuf_test_messages.proto2.TestLargeOneof.A5;

                /**
                 * Encodes the specified A5 message. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A5.verify|verify} messages.
                 * @param message A5 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified A5 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestLargeOneof.A5.verify|verify} messages.
                 * @param message A5 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a A5 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A5 & protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape} A5
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestLargeOneof.A5 & protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape;

                /**
                 * Decodes a A5 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestLargeOneof.A5 & protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape} A5
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestLargeOneof.A5 & protobuf_test_messages.proto2.TestLargeOneof.A5.$Shape;

                /**
                 * Verifies a A5 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a A5 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns A5
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestLargeOneof.A5;

                /**
                 * Creates a plain object from a A5 message. Also converts values to other types if specified.
                 * @param message A5
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto2.TestLargeOneof.A5, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this A5 to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for A5
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace A5 {

                /** Properties of a A5. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a A5. */
                type $Shape = protobuf_test_messages.proto2.TestLargeOneof.A5.$Properties;
            }
        }

        /** ForeignEnumProto2 enum. */
        enum ForeignEnumProto2 {

            /** FOREIGN_FOO value */
            FOREIGN_FOO = 0,

            /** FOREIGN_BAR value */
            FOREIGN_BAR = 1,

            /** FOREIGN_BAZ value */
            FOREIGN_BAZ = 2
        }
    }

    /** Namespace proto3. */
    namespace proto3 {

        /**
         * Properties of a TestAllTypesProto3.
         * @deprecated Use protobuf_test_messages.proto3.TestAllTypesProto3.$Properties instead.
         */
        interface ITestAllTypesProto3 extends protobuf_test_messages.proto3.TestAllTypesProto3.$Properties {
        }

        /** Represents a TestAllTypesProto3. */
        class TestAllTypesProto3 {

            /** Reflection-backed declarations are not constructable. Use TestAllTypesProto3.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TestAllTypesProto3 optionalInt32. */
            optionalInt32: number;

            /** TestAllTypesProto3 optionalInt64. */
            optionalInt64: (number|Long);

            /** TestAllTypesProto3 optionalUint32. */
            optionalUint32: number;

            /** TestAllTypesProto3 optionalUint64. */
            optionalUint64: (number|Long);

            /** TestAllTypesProto3 optionalSint32. */
            optionalSint32: number;

            /** TestAllTypesProto3 optionalSint64. */
            optionalSint64: (number|Long);

            /** TestAllTypesProto3 optionalFixed32. */
            optionalFixed32: number;

            /** TestAllTypesProto3 optionalFixed64. */
            optionalFixed64: (number|Long);

            /** TestAllTypesProto3 optionalSfixed32. */
            optionalSfixed32: number;

            /** TestAllTypesProto3 optionalSfixed64. */
            optionalSfixed64: (number|Long);

            /** TestAllTypesProto3 optionalFloat. */
            optionalFloat: number;

            /** TestAllTypesProto3 optionalDouble. */
            optionalDouble: number;

            /** TestAllTypesProto3 optionalBool. */
            optionalBool: boolean;

            /** TestAllTypesProto3 optionalString. */
            optionalString: string;

            /** TestAllTypesProto3 optionalBytes. */
            optionalBytes: Uint8Array;

            /** TestAllTypesProto3 optionalNestedMessage. */
            optionalNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

            /** TestAllTypesProto3 optionalForeignMessage. */
            optionalForeignMessage?: (protobuf_test_messages.proto3.ForeignMessage.$Properties|null);

            /** TestAllTypesProto3 optionalNestedEnum. */
            optionalNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum;

            /** TestAllTypesProto3 optionalForeignEnum. */
            optionalForeignEnum: protobuf_test_messages.proto3.ForeignEnum;

            /** TestAllTypesProto3 optionalAliasedEnum. */
            optionalAliasedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum;

            /** TestAllTypesProto3 optionalStringPiece. */
            optionalStringPiece: string;

            /** TestAllTypesProto3 optionalCord. */
            optionalCord: string;

            /** TestAllTypesProto3 recursiveMessage. */
            recursiveMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.$Properties|null);

            /** TestAllTypesProto3 repeatedInt32. */
            repeatedInt32: number[];

            /** TestAllTypesProto3 repeatedInt64. */
            repeatedInt64: (number|Long)[];

            /** TestAllTypesProto3 repeatedUint32. */
            repeatedUint32: number[];

            /** TestAllTypesProto3 repeatedUint64. */
            repeatedUint64: (number|Long)[];

            /** TestAllTypesProto3 repeatedSint32. */
            repeatedSint32: number[];

            /** TestAllTypesProto3 repeatedSint64. */
            repeatedSint64: (number|Long)[];

            /** TestAllTypesProto3 repeatedFixed32. */
            repeatedFixed32: number[];

            /** TestAllTypesProto3 repeatedFixed64. */
            repeatedFixed64: (number|Long)[];

            /** TestAllTypesProto3 repeatedSfixed32. */
            repeatedSfixed32: number[];

            /** TestAllTypesProto3 repeatedSfixed64. */
            repeatedSfixed64: (number|Long)[];

            /** TestAllTypesProto3 repeatedFloat. */
            repeatedFloat: number[];

            /** TestAllTypesProto3 repeatedDouble. */
            repeatedDouble: number[];

            /** TestAllTypesProto3 repeatedBool. */
            repeatedBool: boolean[];

            /** TestAllTypesProto3 repeatedString. */
            repeatedString: string[];

            /** TestAllTypesProto3 repeatedBytes. */
            repeatedBytes: Uint8Array[];

            /** TestAllTypesProto3 repeatedNestedMessage. */
            repeatedNestedMessage: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties[];

            /** TestAllTypesProto3 repeatedForeignMessage. */
            repeatedForeignMessage: protobuf_test_messages.proto3.ForeignMessage.$Properties[];

            /** TestAllTypesProto3 repeatedNestedEnum. */
            repeatedNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[];

            /** TestAllTypesProto3 repeatedForeignEnum. */
            repeatedForeignEnum: protobuf_test_messages.proto3.ForeignEnum[];

            /** TestAllTypesProto3 repeatedStringPiece. */
            repeatedStringPiece: string[];

            /** TestAllTypesProto3 repeatedCord. */
            repeatedCord: string[];

            /** TestAllTypesProto3 packedInt32. */
            packedInt32: number[];

            /** TestAllTypesProto3 packedInt64. */
            packedInt64: (number|Long)[];

            /** TestAllTypesProto3 packedUint32. */
            packedUint32: number[];

            /** TestAllTypesProto3 packedUint64. */
            packedUint64: (number|Long)[];

            /** TestAllTypesProto3 packedSint32. */
            packedSint32: number[];

            /** TestAllTypesProto3 packedSint64. */
            packedSint64: (number|Long)[];

            /** TestAllTypesProto3 packedFixed32. */
            packedFixed32: number[];

            /** TestAllTypesProto3 packedFixed64. */
            packedFixed64: (number|Long)[];

            /** TestAllTypesProto3 packedSfixed32. */
            packedSfixed32: number[];

            /** TestAllTypesProto3 packedSfixed64. */
            packedSfixed64: (number|Long)[];

            /** TestAllTypesProto3 packedFloat. */
            packedFloat: number[];

            /** TestAllTypesProto3 packedDouble. */
            packedDouble: number[];

            /** TestAllTypesProto3 packedBool. */
            packedBool: boolean[];

            /** TestAllTypesProto3 packedNestedEnum. */
            packedNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[];

            /** TestAllTypesProto3 unpackedInt32. */
            unpackedInt32: number[];

            /** TestAllTypesProto3 unpackedInt64. */
            unpackedInt64: (number|Long)[];

            /** TestAllTypesProto3 unpackedUint32. */
            unpackedUint32: number[];

            /** TestAllTypesProto3 unpackedUint64. */
            unpackedUint64: (number|Long)[];

            /** TestAllTypesProto3 unpackedSint32. */
            unpackedSint32: number[];

            /** TestAllTypesProto3 unpackedSint64. */
            unpackedSint64: (number|Long)[];

            /** TestAllTypesProto3 unpackedFixed32. */
            unpackedFixed32: number[];

            /** TestAllTypesProto3 unpackedFixed64. */
            unpackedFixed64: (number|Long)[];

            /** TestAllTypesProto3 unpackedSfixed32. */
            unpackedSfixed32: number[];

            /** TestAllTypesProto3 unpackedSfixed64. */
            unpackedSfixed64: (number|Long)[];

            /** TestAllTypesProto3 unpackedFloat. */
            unpackedFloat: number[];

            /** TestAllTypesProto3 unpackedDouble. */
            unpackedDouble: number[];

            /** TestAllTypesProto3 unpackedBool. */
            unpackedBool: boolean[];

            /** TestAllTypesProto3 unpackedNestedEnum. */
            unpackedNestedEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[];

            /** TestAllTypesProto3 mapInt32Int32. */
            mapInt32Int32: { [k: string]: number };

            /** TestAllTypesProto3 mapInt64Int64. */
            mapInt64Int64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapUint32Uint32. */
            mapUint32Uint32: { [k: string]: number };

            /** TestAllTypesProto3 mapUint64Uint64. */
            mapUint64Uint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapSint32Sint32. */
            mapSint32Sint32: { [k: string]: number };

            /** TestAllTypesProto3 mapSint64Sint64. */
            mapSint64Sint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapFixed32Fixed32. */
            mapFixed32Fixed32: { [k: string]: number };

            /** TestAllTypesProto3 mapFixed64Fixed64. */
            mapFixed64Fixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapSfixed32Sfixed32. */
            mapSfixed32Sfixed32: { [k: string]: number };

            /** TestAllTypesProto3 mapSfixed64Sfixed64. */
            mapSfixed64Sfixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto3 mapInt32Float. */
            mapInt32Float: { [k: string]: number };

            /** TestAllTypesProto3 mapInt32Double. */
            mapInt32Double: { [k: string]: number };

            /** TestAllTypesProto3 mapBoolBool. */
            mapBoolBool: { [k: string]: boolean };

            /** TestAllTypesProto3 mapStringString. */
            mapStringString: { [k: string]: string };

            /** TestAllTypesProto3 mapStringBytes. */
            mapStringBytes: { [k: string]: Uint8Array };

            /** TestAllTypesProto3 mapStringNestedMessage. */
            mapStringNestedMessage: { [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties };

            /** TestAllTypesProto3 mapStringForeignMessage. */
            mapStringForeignMessage: { [k: string]: protobuf_test_messages.proto3.ForeignMessage.$Properties };

            /** TestAllTypesProto3 mapStringNestedEnum. */
            mapStringNestedEnum: { [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum };

            /** TestAllTypesProto3 mapStringForeignEnum. */
            mapStringForeignEnum: { [k: string]: protobuf_test_messages.proto3.ForeignEnum };

            /** TestAllTypesProto3 oneofUint32. */
            oneofUint32?: (number|null);

            /** TestAllTypesProto3 oneofNestedMessage. */
            oneofNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

            /** TestAllTypesProto3 oneofString. */
            oneofString?: (string|null);

            /** TestAllTypesProto3 oneofBytes. */
            oneofBytes?: (Uint8Array|null);

            /** TestAllTypesProto3 oneofBool. */
            oneofBool?: (boolean|null);

            /** TestAllTypesProto3 oneofUint64. */
            oneofUint64?: (number|Long|null);

            /** TestAllTypesProto3 oneofFloat. */
            oneofFloat?: (number|null);

            /** TestAllTypesProto3 oneofDouble. */
            oneofDouble?: (number|null);

            /** TestAllTypesProto3 oneofEnum. */
            oneofEnum?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null);

            /** TestAllTypesProto3 oneofNullValue. */
            oneofNullValue?: (google.protobuf.NullValue|null);

            /** TestAllTypesProto3 optionalBoolWrapper. */
            optionalBoolWrapper?: (google.protobuf.BoolValue.$Properties|null);

            /** TestAllTypesProto3 optionalInt32Wrapper. */
            optionalInt32Wrapper?: (google.protobuf.Int32Value.$Properties|null);

            /** TestAllTypesProto3 optionalInt64Wrapper. */
            optionalInt64Wrapper?: (google.protobuf.Int64Value.$Properties|null);

            /** TestAllTypesProto3 optionalUint32Wrapper. */
            optionalUint32Wrapper?: (google.protobuf.UInt32Value.$Properties|null);

            /** TestAllTypesProto3 optionalUint64Wrapper. */
            optionalUint64Wrapper?: (google.protobuf.UInt64Value.$Properties|null);

            /** TestAllTypesProto3 optionalFloatWrapper. */
            optionalFloatWrapper?: (google.protobuf.FloatValue.$Properties|null);

            /** TestAllTypesProto3 optionalDoubleWrapper. */
            optionalDoubleWrapper?: (google.protobuf.DoubleValue.$Properties|null);

            /** TestAllTypesProto3 optionalStringWrapper. */
            optionalStringWrapper?: (google.protobuf.StringValue.$Properties|null);

            /** TestAllTypesProto3 optionalBytesWrapper. */
            optionalBytesWrapper?: (google.protobuf.BytesValue.$Properties|null);

            /** TestAllTypesProto3 repeatedBoolWrapper. */
            repeatedBoolWrapper: google.protobuf.BoolValue.$Properties[];

            /** TestAllTypesProto3 repeatedInt32Wrapper. */
            repeatedInt32Wrapper: google.protobuf.Int32Value.$Properties[];

            /** TestAllTypesProto3 repeatedInt64Wrapper. */
            repeatedInt64Wrapper: google.protobuf.Int64Value.$Properties[];

            /** TestAllTypesProto3 repeatedUint32Wrapper. */
            repeatedUint32Wrapper: google.protobuf.UInt32Value.$Properties[];

            /** TestAllTypesProto3 repeatedUint64Wrapper. */
            repeatedUint64Wrapper: google.protobuf.UInt64Value.$Properties[];

            /** TestAllTypesProto3 repeatedFloatWrapper. */
            repeatedFloatWrapper: google.protobuf.FloatValue.$Properties[];

            /** TestAllTypesProto3 repeatedDoubleWrapper. */
            repeatedDoubleWrapper: google.protobuf.DoubleValue.$Properties[];

            /** TestAllTypesProto3 repeatedStringWrapper. */
            repeatedStringWrapper: google.protobuf.StringValue.$Properties[];

            /** TestAllTypesProto3 repeatedBytesWrapper. */
            repeatedBytesWrapper: google.protobuf.BytesValue.$Properties[];

            /** TestAllTypesProto3 optionalDuration. */
            optionalDuration?: (google.protobuf.Duration.$Properties|null);

            /** TestAllTypesProto3 optionalTimestamp. */
            optionalTimestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** TestAllTypesProto3 optionalFieldMask. */
            optionalFieldMask?: (google.protobuf.FieldMask.$Properties|null);

            /** TestAllTypesProto3 optionalStruct. */
            optionalStruct?: (google.protobuf.Struct.$Properties|null);

            /** TestAllTypesProto3 optionalAny. */
            optionalAny?: (google.protobuf.Any.$Properties|null);

            /** TestAllTypesProto3 optionalValue. */
            optionalValue?: (google.protobuf.Value.$Properties|null);

            /** TestAllTypesProto3 optionalNullValue. */
            optionalNullValue: google.protobuf.NullValue;

            /** TestAllTypesProto3 repeatedDuration. */
            repeatedDuration: google.protobuf.Duration.$Properties[];

            /** TestAllTypesProto3 repeatedTimestamp. */
            repeatedTimestamp: google.protobuf.Timestamp.$Properties[];

            /** TestAllTypesProto3 repeatedFieldmask. */
            repeatedFieldmask: google.protobuf.FieldMask.$Properties[];

            /** TestAllTypesProto3 repeatedStruct. */
            repeatedStruct: google.protobuf.Struct.$Properties[];

            /** TestAllTypesProto3 repeatedAny. */
            repeatedAny: google.protobuf.Any.$Properties[];

            /** TestAllTypesProto3 repeatedValue. */
            repeatedValue: google.protobuf.Value.$Properties[];

            /** TestAllTypesProto3 repeatedListValue. */
            repeatedListValue: google.protobuf.ListValue.$Properties[];

            /** TestAllTypesProto3 fieldname1. */
            fieldname1: number;

            /** TestAllTypesProto3 fieldName2. */
            fieldName2: number;

            /** TestAllTypesProto3 FieldName3. */
            FieldName3: number;

            /** TestAllTypesProto3 fieldName4. */
            fieldName4: number;

            /** TestAllTypesProto3 field0name5. */
            field0name5: number;

            /** TestAllTypesProto3 field0Name6. */
            field0Name6: number;

            /** TestAllTypesProto3 fieldName7. */
            fieldName7: number;

            /** TestAllTypesProto3 FieldName8. */
            FieldName8: number;

            /** TestAllTypesProto3 fieldName9. */
            fieldName9: number;

            /** TestAllTypesProto3 FieldName10. */
            FieldName10: number;

            /** TestAllTypesProto3 FIELDNAME11. */
            FIELDNAME11: number;

            /** TestAllTypesProto3 FIELDName12. */
            FIELDName12: number;

            /** TestAllTypesProto3 FieldName13. */
            FieldName13: number;

            /** TestAllTypesProto3 FieldName14. */
            FieldName14: number;

            /** TestAllTypesProto3 fieldName15. */
            fieldName15: number;

            /** TestAllTypesProto3 fieldName16. */
            fieldName16: number;

            /** TestAllTypesProto3 fieldName17. */
            fieldName17: number;

            /** TestAllTypesProto3 FieldName18. */
            FieldName18: number;

            /** TestAllTypesProto3 oneofField. */
            oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|"oneofNullValue");

            /**
             * Creates a new TestAllTypesProto3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestAllTypesProto3 instance
             */
            static create(properties: protobuf_test_messages.proto3.TestAllTypesProto3.$Shape): protobuf_test_messages.proto3.TestAllTypesProto3 & protobuf_test_messages.proto3.TestAllTypesProto3.$Shape;
            static create(properties?: protobuf_test_messages.proto3.TestAllTypesProto3.$Properties): protobuf_test_messages.proto3.TestAllTypesProto3;

            /**
             * Encodes the specified TestAllTypesProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.verify|verify} messages.
             * @param message TestAllTypesProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto3.TestAllTypesProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestAllTypesProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.verify|verify} messages.
             * @param message TestAllTypesProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto3.TestAllTypesProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestAllTypesProto3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.TestAllTypesProto3 & protobuf_test_messages.proto3.TestAllTypesProto3.$Shape} TestAllTypesProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.TestAllTypesProto3 & protobuf_test_messages.proto3.TestAllTypesProto3.$Shape;

            /**
             * Decodes a TestAllTypesProto3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.TestAllTypesProto3 & protobuf_test_messages.proto3.TestAllTypesProto3.$Shape} TestAllTypesProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.TestAllTypesProto3 & protobuf_test_messages.proto3.TestAllTypesProto3.$Shape;

            /**
             * Verifies a TestAllTypesProto3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestAllTypesProto3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestAllTypesProto3
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.TestAllTypesProto3;

            /**
             * Creates a plain object from a TestAllTypesProto3 message. Also converts values to other types if specified.
             * @param message TestAllTypesProto3
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto3.TestAllTypesProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestAllTypesProto3 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TestAllTypesProto3
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TestAllTypesProto3 {

            /** Properties of a TestAllTypesProto3. */
            interface $Properties {

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
                optionalNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

                /** TestAllTypesProto3 optionalForeignMessage */
                optionalForeignMessage?: (protobuf_test_messages.proto3.ForeignMessage.$Properties|null);

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
                recursiveMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.$Properties|null);

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
                repeatedNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties[]|null);

                /** TestAllTypesProto3 repeatedForeignMessage */
                repeatedForeignMessage?: (protobuf_test_messages.proto3.ForeignMessage.$Properties[]|null);

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
                mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties }|null);

                /** TestAllTypesProto3 mapStringForeignMessage */
                mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.proto3.ForeignMessage.$Properties }|null);

                /** TestAllTypesProto3 mapStringNestedEnum */
                mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum }|null);

                /** TestAllTypesProto3 mapStringForeignEnum */
                mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.proto3.ForeignEnum }|null);

                /** TestAllTypesProto3 oneofUint32 */
                oneofUint32?: (number|null);

                /** TestAllTypesProto3 oneofNestedMessage */
                oneofNestedMessage?: (protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties|null);

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
                optionalBoolWrapper?: (google.protobuf.BoolValue.$Properties|null);

                /** TestAllTypesProto3 optionalInt32Wrapper */
                optionalInt32Wrapper?: (google.protobuf.Int32Value.$Properties|null);

                /** TestAllTypesProto3 optionalInt64Wrapper */
                optionalInt64Wrapper?: (google.protobuf.Int64Value.$Properties|null);

                /** TestAllTypesProto3 optionalUint32Wrapper */
                optionalUint32Wrapper?: (google.protobuf.UInt32Value.$Properties|null);

                /** TestAllTypesProto3 optionalUint64Wrapper */
                optionalUint64Wrapper?: (google.protobuf.UInt64Value.$Properties|null);

                /** TestAllTypesProto3 optionalFloatWrapper */
                optionalFloatWrapper?: (google.protobuf.FloatValue.$Properties|null);

                /** TestAllTypesProto3 optionalDoubleWrapper */
                optionalDoubleWrapper?: (google.protobuf.DoubleValue.$Properties|null);

                /** TestAllTypesProto3 optionalStringWrapper */
                optionalStringWrapper?: (google.protobuf.StringValue.$Properties|null);

                /** TestAllTypesProto3 optionalBytesWrapper */
                optionalBytesWrapper?: (google.protobuf.BytesValue.$Properties|null);

                /** TestAllTypesProto3 repeatedBoolWrapper */
                repeatedBoolWrapper?: (google.protobuf.BoolValue.$Properties[]|null);

                /** TestAllTypesProto3 repeatedInt32Wrapper */
                repeatedInt32Wrapper?: (google.protobuf.Int32Value.$Properties[]|null);

                /** TestAllTypesProto3 repeatedInt64Wrapper */
                repeatedInt64Wrapper?: (google.protobuf.Int64Value.$Properties[]|null);

                /** TestAllTypesProto3 repeatedUint32Wrapper */
                repeatedUint32Wrapper?: (google.protobuf.UInt32Value.$Properties[]|null);

                /** TestAllTypesProto3 repeatedUint64Wrapper */
                repeatedUint64Wrapper?: (google.protobuf.UInt64Value.$Properties[]|null);

                /** TestAllTypesProto3 repeatedFloatWrapper */
                repeatedFloatWrapper?: (google.protobuf.FloatValue.$Properties[]|null);

                /** TestAllTypesProto3 repeatedDoubleWrapper */
                repeatedDoubleWrapper?: (google.protobuf.DoubleValue.$Properties[]|null);

                /** TestAllTypesProto3 repeatedStringWrapper */
                repeatedStringWrapper?: (google.protobuf.StringValue.$Properties[]|null);

                /** TestAllTypesProto3 repeatedBytesWrapper */
                repeatedBytesWrapper?: (google.protobuf.BytesValue.$Properties[]|null);

                /** TestAllTypesProto3 optionalDuration */
                optionalDuration?: (google.protobuf.Duration.$Properties|null);

                /** TestAllTypesProto3 optionalTimestamp */
                optionalTimestamp?: (google.protobuf.Timestamp.$Properties|null);

                /** TestAllTypesProto3 optionalFieldMask */
                optionalFieldMask?: (google.protobuf.FieldMask.$Properties|null);

                /** TestAllTypesProto3 optionalStruct */
                optionalStruct?: (google.protobuf.Struct.$Properties|null);

                /** TestAllTypesProto3 optionalAny */
                optionalAny?: (google.protobuf.Any.$Properties|null);

                /** TestAllTypesProto3 optionalValue */
                optionalValue?: (google.protobuf.Value.$Properties|null);

                /** TestAllTypesProto3 optionalNullValue */
                optionalNullValue?: (google.protobuf.NullValue|null);

                /** TestAllTypesProto3 repeatedDuration */
                repeatedDuration?: (google.protobuf.Duration.$Properties[]|null);

                /** TestAllTypesProto3 repeatedTimestamp */
                repeatedTimestamp?: (google.protobuf.Timestamp.$Properties[]|null);

                /** TestAllTypesProto3 repeatedFieldmask */
                repeatedFieldmask?: (google.protobuf.FieldMask.$Properties[]|null);

                /** TestAllTypesProto3 repeatedStruct */
                repeatedStruct?: (google.protobuf.Struct.$Properties[]|null);

                /** TestAllTypesProto3 repeatedAny */
                repeatedAny?: (google.protobuf.Any.$Properties[]|null);

                /** TestAllTypesProto3 repeatedValue */
                repeatedValue?: (google.protobuf.Value.$Properties[]|null);

                /** TestAllTypesProto3 repeatedListValue */
                repeatedListValue?: (google.protobuf.ListValue.$Properties[]|null);

                /** TestAllTypesProto3 fieldname1 */
                fieldname1?: (number|null);

                /** TestAllTypesProto3 fieldName2 */
                fieldName2?: (number|null);

                /** TestAllTypesProto3 FieldName3 */
                FieldName3?: (number|null);

                /** TestAllTypesProto3 fieldName4 */
                fieldName4?: (number|null);

                /** TestAllTypesProto3 field0name5 */
                field0name5?: (number|null);

                /** TestAllTypesProto3 field0Name6 */
                field0Name6?: (number|null);

                /** TestAllTypesProto3 fieldName7 */
                fieldName7?: (number|null);

                /** TestAllTypesProto3 FieldName8 */
                FieldName8?: (number|null);

                /** TestAllTypesProto3 fieldName9 */
                fieldName9?: (number|null);

                /** TestAllTypesProto3 FieldName10 */
                FieldName10?: (number|null);

                /** TestAllTypesProto3 FIELDNAME11 */
                FIELDNAME11?: (number|null);

                /** TestAllTypesProto3 FIELDName12 */
                FIELDName12?: (number|null);

                /** TestAllTypesProto3 FieldName13 */
                FieldName13?: (number|null);

                /** TestAllTypesProto3 FieldName14 */
                FieldName14?: (number|null);

                /** TestAllTypesProto3 fieldName15 */
                fieldName15?: (number|null);

                /** TestAllTypesProto3 fieldName16 */
                fieldName16?: (number|null);

                /** TestAllTypesProto3 fieldName17 */
                fieldName17?: (number|null);

                /** TestAllTypesProto3 FieldName18 */
                FieldName18?: (number|null);

                /** TestAllTypesProto3 oneofField */
                oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|"oneofNullValue");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a TestAllTypesProto3. */
            type $Shape = {
              optionalInt32?: number|null;
              optionalInt64?: number|Long|null;
              optionalUint32?: number|null;
              optionalUint64?: number|Long|null;
              optionalSint32?: number|null;
              optionalSint64?: number|Long|null;
              optionalFixed32?: number|null;
              optionalFixed64?: number|Long|null;
              optionalSfixed32?: number|null;
              optionalSfixed64?: number|Long|null;
              optionalFloat?: number|null;
              optionalDouble?: number|null;
              optionalBool?: boolean|null;
              optionalString?: string|null;
              optionalBytes?: Uint8Array|null;
              optionalNestedMessage?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape|null;
              optionalForeignMessage?: protobuf_test_messages.proto3.ForeignMessage.$Shape|null;
              optionalNestedEnum?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null;
              optionalForeignEnum?: protobuf_test_messages.proto3.ForeignEnum|null;
              optionalAliasedEnum?: protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum|null;
              optionalStringPiece?: string|null;
              optionalCord?: string|null;
              recursiveMessage?: protobuf_test_messages.proto3.TestAllTypesProto3.$Shape|null;
              repeatedInt32?: number[]|null;
              repeatedInt64?: (number|Long)[]|null;
              repeatedUint32?: number[]|null;
              repeatedUint64?: (number|Long)[]|null;
              repeatedSint32?: number[]|null;
              repeatedSint64?: (number|Long)[]|null;
              repeatedFixed32?: number[]|null;
              repeatedFixed64?: (number|Long)[]|null;
              repeatedSfixed32?: number[]|null;
              repeatedSfixed64?: (number|Long)[]|null;
              repeatedFloat?: number[]|null;
              repeatedDouble?: number[]|null;
              repeatedBool?: boolean[]|null;
              repeatedString?: string[]|null;
              repeatedBytes?: Uint8Array[]|null;
              repeatedNestedMessage?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape[]|null;
              repeatedForeignMessage?: protobuf_test_messages.proto3.ForeignMessage.$Shape[]|null;
              repeatedNestedEnum?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[]|null;
              repeatedForeignEnum?: protobuf_test_messages.proto3.ForeignEnum[]|null;
              repeatedStringPiece?: string[]|null;
              repeatedCord?: string[]|null;
              packedInt32?: number[]|null;
              packedInt64?: (number|Long)[]|null;
              packedUint32?: number[]|null;
              packedUint64?: (number|Long)[]|null;
              packedSint32?: number[]|null;
              packedSint64?: (number|Long)[]|null;
              packedFixed32?: number[]|null;
              packedFixed64?: (number|Long)[]|null;
              packedSfixed32?: number[]|null;
              packedSfixed64?: (number|Long)[]|null;
              packedFloat?: number[]|null;
              packedDouble?: number[]|null;
              packedBool?: boolean[]|null;
              packedNestedEnum?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[]|null;
              unpackedInt32?: number[]|null;
              unpackedInt64?: (number|Long)[]|null;
              unpackedUint32?: number[]|null;
              unpackedUint64?: (number|Long)[]|null;
              unpackedSint32?: number[]|null;
              unpackedSint64?: (number|Long)[]|null;
              unpackedFixed32?: number[]|null;
              unpackedFixed64?: (number|Long)[]|null;
              unpackedSfixed32?: number[]|null;
              unpackedSfixed64?: (number|Long)[]|null;
              unpackedFloat?: number[]|null;
              unpackedDouble?: number[]|null;
              unpackedBool?: boolean[]|null;
              unpackedNestedEnum?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[]|null;
              mapInt32Int32?: { [k: string]: number }|null;
              mapInt64Int64?: { [k: string]: number|Long }|null;
              mapUint32Uint32?: { [k: string]: number }|null;
              mapUint64Uint64?: { [k: string]: number|Long }|null;
              mapSint32Sint32?: { [k: string]: number }|null;
              mapSint64Sint64?: { [k: string]: number|Long }|null;
              mapFixed32Fixed32?: { [k: string]: number }|null;
              mapFixed64Fixed64?: { [k: string]: number|Long }|null;
              mapSfixed32Sfixed32?: { [k: string]: number }|null;
              mapSfixed64Sfixed64?: { [k: string]: number|Long }|null;
              mapInt32Float?: { [k: string]: number }|null;
              mapInt32Double?: { [k: string]: number }|null;
              mapBoolBool?: { [k: string]: boolean }|null;
              mapStringString?: { [k: string]: string }|null;
              mapStringBytes?: { [k: string]: Uint8Array }|null;
              mapStringNestedMessage?: { [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape }|null;
              mapStringForeignMessage?: { [k: string]: protobuf_test_messages.proto3.ForeignMessage.$Shape }|null;
              mapStringNestedEnum?: { [k: string]: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum }|null;
              mapStringForeignEnum?: { [k: string]: protobuf_test_messages.proto3.ForeignEnum }|null;
              oneofUint32?: number|null;
              oneofNestedMessage?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape|null;
              oneofString?: string|null;
              oneofBytes?: Uint8Array|null;
              oneofBool?: boolean|null;
              oneofUint64?: number|Long|null;
              oneofFloat?: number|null;
              oneofDouble?: number|null;
              oneofEnum?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null;
              oneofNullValue?: google.protobuf.NullValue|null;
              optionalBoolWrapper?: google.protobuf.BoolValue.$Shape|null;
              optionalInt32Wrapper?: google.protobuf.Int32Value.$Shape|null;
              optionalInt64Wrapper?: google.protobuf.Int64Value.$Shape|null;
              optionalUint32Wrapper?: google.protobuf.UInt32Value.$Shape|null;
              optionalUint64Wrapper?: google.protobuf.UInt64Value.$Shape|null;
              optionalFloatWrapper?: google.protobuf.FloatValue.$Shape|null;
              optionalDoubleWrapper?: google.protobuf.DoubleValue.$Shape|null;
              optionalStringWrapper?: google.protobuf.StringValue.$Shape|null;
              optionalBytesWrapper?: google.protobuf.BytesValue.$Shape|null;
              repeatedBoolWrapper?: google.protobuf.BoolValue.$Shape[]|null;
              repeatedInt32Wrapper?: google.protobuf.Int32Value.$Shape[]|null;
              repeatedInt64Wrapper?: google.protobuf.Int64Value.$Shape[]|null;
              repeatedUint32Wrapper?: google.protobuf.UInt32Value.$Shape[]|null;
              repeatedUint64Wrapper?: google.protobuf.UInt64Value.$Shape[]|null;
              repeatedFloatWrapper?: google.protobuf.FloatValue.$Shape[]|null;
              repeatedDoubleWrapper?: google.protobuf.DoubleValue.$Shape[]|null;
              repeatedStringWrapper?: google.protobuf.StringValue.$Shape[]|null;
              repeatedBytesWrapper?: google.protobuf.BytesValue.$Shape[]|null;
              optionalDuration?: google.protobuf.Duration.$Shape|null;
              optionalTimestamp?: google.protobuf.Timestamp.$Shape|null;
              optionalFieldMask?: google.protobuf.FieldMask.$Shape|null;
              optionalStruct?: google.protobuf.Struct.$Shape|null;
              optionalAny?: google.protobuf.Any.$Shape|null;
              optionalValue?: google.protobuf.Value.$Shape|null;
              optionalNullValue?: google.protobuf.NullValue|null;
              repeatedDuration?: google.protobuf.Duration.$Shape[]|null;
              repeatedTimestamp?: google.protobuf.Timestamp.$Shape[]|null;
              repeatedFieldmask?: google.protobuf.FieldMask.$Shape[]|null;
              repeatedStruct?: google.protobuf.Struct.$Shape[]|null;
              repeatedAny?: google.protobuf.Any.$Shape[]|null;
              repeatedValue?: google.protobuf.Value.$Shape[]|null;
              repeatedListValue?: google.protobuf.ListValue.$Shape[]|null;
              fieldname1?: number|null;
              fieldName2?: number|null;
              FieldName3?: number|null;
              fieldName4?: number|null;
              field0name5?: number|null;
              field0Name6?: number|null;
              fieldName7?: number|null;
              FieldName8?: number|null;
              fieldName9?: number|null;
              FieldName10?: number|null;
              FIELDNAME11?: number|null;
              FIELDName12?: number|null;
              FieldName13?: number|null;
              FieldName14?: number|null;
              fieldName15?: number|null;
              fieldName16?: number|null;
              fieldName17?: number|null;
              FieldName18?: number|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ oneofField?: undefined; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofUint32"; oneofUint32: number; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofNestedMessage"; oneofUint32?: null; oneofNestedMessage: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofString"; oneofUint32?: null; oneofNestedMessage?: null; oneofString: string; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofBytes"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes: Uint8Array; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofBool"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool: boolean; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofUint64"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64: number|Long; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofFloat"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat: number; oneofDouble?: null; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofDouble"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble: number; oneofEnum?: null; oneofNullValue?: null }|{ oneofField?: "oneofEnum"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum; oneofNullValue?: null }|{ oneofField?: "oneofNullValue"; oneofUint32?: null; oneofNestedMessage?: null; oneofString?: null; oneofBytes?: null; oneofBool?: null; oneofUint64?: null; oneofFloat?: null; oneofDouble?: null; oneofEnum?: null; oneofNullValue: google.protobuf.NullValue })
            );

            /**
             * Properties of a NestedMessage.
             * @deprecated Use protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties instead.
             */
            interface INestedMessage extends protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties {
            }

            /** Represents a NestedMessage. */
            class NestedMessage {

                /** Reflection-backed declarations are not constructable. Use NestedMessage.create(...) instead. */
                private constructor();

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** NestedMessage a. */
                a: number;

                /** NestedMessage corecursive. */
                corecursive?: (protobuf_test_messages.proto3.TestAllTypesProto3.$Properties|null);

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedMessage instance
                 */
                static create(properties: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape;
                static create(properties?: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage & protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.$Shape;

                /**
                 * Verifies a NestedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedMessage
                 */
                static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage;

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @param message NestedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedMessage to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NestedMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NestedMessage {

                /** Properties of a NestedMessage. */
                interface $Properties {

                    /** NestedMessage a */
                    a?: (number|null);

                    /** NestedMessage corecursive */
                    corecursive?: (protobuf_test_messages.proto3.TestAllTypesProto3.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NestedMessage. */
                type $Shape = {
                  a?: number|null;
                  corecursive?: protobuf_test_messages.proto3.TestAllTypesProto3.$Shape|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /** NestedEnum enum. */
            enum NestedEnum {

                /** FOO value */
                FOO = 0,

                /** BAR value */
                BAR = 1,

                /** BAZ value */
                BAZ = 2,

                /** NEG value */
                NEG = -1
            }

            /** AliasedEnum enum. */
            enum AliasedEnum {

                /** ALIAS_FOO value */
                ALIAS_FOO = 0,

                /** ALIAS_BAR value */
                ALIAS_BAR = 1,

                /** ALIAS_BAZ value */
                ALIAS_BAZ = 2,

                /** MOO value */
                MOO = 2,

                /** moo value */
                moo = 2,

                /** bAz value */
                bAz = 2
            }
        }

        /**
         * Properties of a ForeignMessage.
         * @deprecated Use protobuf_test_messages.proto3.ForeignMessage.$Properties instead.
         */
        interface IForeignMessage extends protobuf_test_messages.proto3.ForeignMessage.$Properties {
        }

        /** Represents a ForeignMessage. */
        class ForeignMessage {

            /** Reflection-backed declarations are not constructable. Use ForeignMessage.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ForeignMessage c. */
            c: number;

            /**
             * Creates a new ForeignMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForeignMessage instance
             */
            static create(properties: protobuf_test_messages.proto3.ForeignMessage.$Shape): protobuf_test_messages.proto3.ForeignMessage & protobuf_test_messages.proto3.ForeignMessage.$Shape;
            static create(properties?: protobuf_test_messages.proto3.ForeignMessage.$Properties): protobuf_test_messages.proto3.ForeignMessage;

            /**
             * Encodes the specified ForeignMessage message. Does not implicitly {@link protobuf_test_messages.proto3.ForeignMessage.verify|verify} messages.
             * @param message ForeignMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto3.ForeignMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForeignMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.ForeignMessage.verify|verify} messages.
             * @param message ForeignMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto3.ForeignMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForeignMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.ForeignMessage & protobuf_test_messages.proto3.ForeignMessage.$Shape} ForeignMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.ForeignMessage & protobuf_test_messages.proto3.ForeignMessage.$Shape;

            /**
             * Decodes a ForeignMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.ForeignMessage & protobuf_test_messages.proto3.ForeignMessage.$Shape} ForeignMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.ForeignMessage & protobuf_test_messages.proto3.ForeignMessage.$Shape;

            /**
             * Verifies a ForeignMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForeignMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForeignMessage
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.ForeignMessage;

            /**
             * Creates a plain object from a ForeignMessage message. Also converts values to other types if specified.
             * @param message ForeignMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto3.ForeignMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForeignMessage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ForeignMessage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ForeignMessage {

            /** Properties of a ForeignMessage. */
            interface $Properties {

                /** ForeignMessage c */
                c?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ForeignMessage. */
            type $Shape = protobuf_test_messages.proto3.ForeignMessage.$Properties;
        }

        /**
         * Properties of a NullHypothesisProto3.
         * @deprecated Use protobuf_test_messages.proto3.NullHypothesisProto3.$Properties instead.
         */
        interface INullHypothesisProto3 extends protobuf_test_messages.proto3.NullHypothesisProto3.$Properties {
        }

        /** Represents a NullHypothesisProto3. */
        class NullHypothesisProto3 {

            /** Reflection-backed declarations are not constructable. Use NullHypothesisProto3.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new NullHypothesisProto3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullHypothesisProto3 instance
             */
            static create(properties: protobuf_test_messages.proto3.NullHypothesisProto3.$Shape): protobuf_test_messages.proto3.NullHypothesisProto3 & protobuf_test_messages.proto3.NullHypothesisProto3.$Shape;
            static create(properties?: protobuf_test_messages.proto3.NullHypothesisProto3.$Properties): protobuf_test_messages.proto3.NullHypothesisProto3;

            /**
             * Encodes the specified NullHypothesisProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.NullHypothesisProto3.verify|verify} messages.
             * @param message NullHypothesisProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto3.NullHypothesisProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullHypothesisProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.NullHypothesisProto3.verify|verify} messages.
             * @param message NullHypothesisProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto3.NullHypothesisProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullHypothesisProto3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.NullHypothesisProto3 & protobuf_test_messages.proto3.NullHypothesisProto3.$Shape} NullHypothesisProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.NullHypothesisProto3 & protobuf_test_messages.proto3.NullHypothesisProto3.$Shape;

            /**
             * Decodes a NullHypothesisProto3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.NullHypothesisProto3 & protobuf_test_messages.proto3.NullHypothesisProto3.$Shape} NullHypothesisProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.NullHypothesisProto3 & protobuf_test_messages.proto3.NullHypothesisProto3.$Shape;

            /**
             * Verifies a NullHypothesisProto3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullHypothesisProto3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullHypothesisProto3
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.NullHypothesisProto3;

            /**
             * Creates a plain object from a NullHypothesisProto3 message. Also converts values to other types if specified.
             * @param message NullHypothesisProto3
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto3.NullHypothesisProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullHypothesisProto3 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NullHypothesisProto3
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NullHypothesisProto3 {

            /** Properties of a NullHypothesisProto3. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NullHypothesisProto3. */
            type $Shape = protobuf_test_messages.proto3.NullHypothesisProto3.$Properties;
        }

        /**
         * Properties of an EnumOnlyProto3.
         * @deprecated Use protobuf_test_messages.proto3.EnumOnlyProto3.$Properties instead.
         */
        interface IEnumOnlyProto3 extends protobuf_test_messages.proto3.EnumOnlyProto3.$Properties {
        }

        /** Represents an EnumOnlyProto3. */
        class EnumOnlyProto3 {

            /** Reflection-backed declarations are not constructable. Use EnumOnlyProto3.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new EnumOnlyProto3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOnlyProto3 instance
             */
            static create(properties: protobuf_test_messages.proto3.EnumOnlyProto3.$Shape): protobuf_test_messages.proto3.EnumOnlyProto3 & protobuf_test_messages.proto3.EnumOnlyProto3.$Shape;
            static create(properties?: protobuf_test_messages.proto3.EnumOnlyProto3.$Properties): protobuf_test_messages.proto3.EnumOnlyProto3;

            /**
             * Encodes the specified EnumOnlyProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.EnumOnlyProto3.verify|verify} messages.
             * @param message EnumOnlyProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: protobuf_test_messages.proto3.EnumOnlyProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOnlyProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.EnumOnlyProto3.verify|verify} messages.
             * @param message EnumOnlyProto3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: protobuf_test_messages.proto3.EnumOnlyProto3.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOnlyProto3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.EnumOnlyProto3 & protobuf_test_messages.proto3.EnumOnlyProto3.$Shape} EnumOnlyProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto3.EnumOnlyProto3 & protobuf_test_messages.proto3.EnumOnlyProto3.$Shape;

            /**
             * Decodes an EnumOnlyProto3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.EnumOnlyProto3 & protobuf_test_messages.proto3.EnumOnlyProto3.$Shape} EnumOnlyProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto3.EnumOnlyProto3 & protobuf_test_messages.proto3.EnumOnlyProto3.$Shape;

            /**
             * Verifies an EnumOnlyProto3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOnlyProto3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOnlyProto3
             */
            static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto3.EnumOnlyProto3;

            /**
             * Creates a plain object from an EnumOnlyProto3 message. Also converts values to other types if specified.
             * @param message EnumOnlyProto3
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: protobuf_test_messages.proto3.EnumOnlyProto3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOnlyProto3 to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumOnlyProto3
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumOnlyProto3 {

            /** Properties of an EnumOnlyProto3. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumOnlyProto3. */
            type $Shape = protobuf_test_messages.proto3.EnumOnlyProto3.$Properties;

            /** Bool enum. */
            enum Bool {

                /** kFalse value */
                kFalse = 0,

                /** kTrue value */
                kTrue = 1
            }
        }

        /** ForeignEnum enum. */
        enum ForeignEnum {

            /** FOREIGN_FOO value */
            FOREIGN_FOO = 0,

            /** FOREIGN_BAR value */
            FOREIGN_BAR = 1,

            /** FOREIGN_BAZ value */
            FOREIGN_BAZ = 2
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of an Any.
         * @deprecated Use google.protobuf.Any.$Properties instead.
         */
        interface IAny extends google.protobuf.Any.$Properties {
        }

        /** Represents an Any. */
        class Any {

            /** Reflection-backed declarations are not constructable. Use Any.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Any typeUrl. */
            typeUrl: string;

            /** Any value. */
            value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            static create(properties: google.protobuf.Any.$Shape): google.protobuf.Any & google.protobuf.Any.$Shape;
            static create(properties?: google.protobuf.Any.$Properties): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Any.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Any.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Any & google.protobuf.Any.$Shape} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any & google.protobuf.Any.$Shape;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Any & google.protobuf.Any.$Shape} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any & google.protobuf.Any.$Shape;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Any
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Any {

            /** Properties of an Any. */
            interface $Properties {

                /** Any typeUrl */
                typeUrl?: (string|null);

                /** Any value */
                value?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Any. */
            type $Shape = google.protobuf.Any.$Properties;
        }

        /**
         * Properties of a Duration.
         * @deprecated Use google.protobuf.Duration.$Properties instead.
         */
        interface IDuration extends google.protobuf.Duration.$Properties {
        }

        /** Represents a Duration. */
        class Duration {

            /** Reflection-backed declarations are not constructable. Use Duration.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Duration seconds. */
            seconds: (number|Long);

            /** Duration nanos. */
            nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            static create(properties: google.protobuf.Duration.$Shape): google.protobuf.Duration & google.protobuf.Duration.$Shape;
            static create(properties?: google.protobuf.Duration.$Properties): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Duration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Duration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Duration & google.protobuf.Duration.$Shape} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration & google.protobuf.Duration.$Shape;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration & google.protobuf.Duration.$Shape} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration & google.protobuf.Duration.$Shape;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Duration
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Duration {

            /** Properties of a Duration. */
            interface $Properties {

                /** Duration seconds */
                seconds?: (number|Long|null);

                /** Duration nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Duration. */
            type $Shape = google.protobuf.Duration.$Properties;
        }

        /**
         * Properties of a FieldMask.
         * @deprecated Use google.protobuf.FieldMask.$Properties instead.
         */
        interface IFieldMask extends google.protobuf.FieldMask.$Properties {
        }

        /** Represents a FieldMask. */
        class FieldMask {

            /** Reflection-backed declarations are not constructable. Use FieldMask.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FieldMask paths. */
            paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            static create(properties: google.protobuf.FieldMask.$Shape): google.protobuf.FieldMask & google.protobuf.FieldMask.$Shape;
            static create(properties?: google.protobuf.FieldMask.$Properties): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FieldMask.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FieldMask.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FieldMask & google.protobuf.FieldMask.$Shape} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask & google.protobuf.FieldMask.$Shape;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldMask & google.protobuf.FieldMask.$Shape} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask & google.protobuf.FieldMask.$Shape;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FieldMask
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FieldMask {

            /** Properties of a FieldMask. */
            interface $Properties {

                /** FieldMask paths */
                paths?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FieldMask. */
            type $Shape = google.protobuf.FieldMask.$Properties;
        }

        /**
         * Properties of a Struct.
         * @deprecated Use google.protobuf.Struct.$Properties instead.
         */
        interface IStruct extends google.protobuf.Struct.$Properties {
        }

        /** Represents a Struct. */
        class Struct {

            /** Reflection-backed declarations are not constructable. Use Struct.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Struct fields. */
            fields: { [k: string]: google.protobuf.Value.$Properties };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            static create(properties: google.protobuf.Struct.$Shape): google.protobuf.Struct & google.protobuf.Struct.$Shape;
            static create(properties?: google.protobuf.Struct.$Properties): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Struct.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Struct.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Struct & google.protobuf.Struct.$Shape} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct & google.protobuf.Struct.$Shape;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct & google.protobuf.Struct.$Shape} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct & google.protobuf.Struct.$Shape;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Struct
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Struct {

            /** Properties of a Struct. */
            interface $Properties {

                /** Struct fields */
                fields?: ({ [k: string]: google.protobuf.Value.$Properties }|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Struct. */
            type $Shape = {
              fields?: { [k: string]: google.protobuf.Value.$Shape }|null;
              $unknowns?: Uint8Array[];
            };
        }

        /**
         * Properties of a Value.
         * @deprecated Use google.protobuf.Value.$Properties instead.
         */
        interface IValue extends google.protobuf.Value.$Properties {
        }

        /** Represents a Value. */
        class Value {

            /** Reflection-backed declarations are not constructable. Use Value.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Value nullValue. */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            numberValue?: (number|null);

            /** Value stringValue. */
            stringValue?: (string|null);

            /** Value boolValue. */
            boolValue?: (boolean|null);

            /** Value structValue. */
            structValue?: (google.protobuf.Struct.$Properties|null);

            /** Value listValue. */
            listValue?: (google.protobuf.ListValue.$Properties|null);

            /** Value kind. */
            kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            static create(properties: google.protobuf.Value.$Shape): google.protobuf.Value & google.protobuf.Value.$Shape;
            static create(properties?: google.protobuf.Value.$Properties): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Value & google.protobuf.Value.$Shape} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value & google.protobuf.Value.$Shape;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Value & google.protobuf.Value.$Shape} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value & google.protobuf.Value.$Shape;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Value
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Value {

            /** Properties of a Value. */
            interface $Properties {

                /** Value nullValue */
                nullValue?: (google.protobuf.NullValue|null);

                /** Value numberValue */
                numberValue?: (number|null);

                /** Value stringValue */
                stringValue?: (string|null);

                /** Value boolValue */
                boolValue?: (boolean|null);

                /** Value structValue */
                structValue?: (google.protobuf.Struct.$Properties|null);

                /** Value listValue */
                listValue?: (google.protobuf.ListValue.$Properties|null);

                /** Value kind */
                kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Value. */
            type $Shape = {
              nullValue?: google.protobuf.NullValue|null;
              numberValue?: number|null;
              stringValue?: string|null;
              boolValue?: boolean|null;
              structValue?: google.protobuf.Struct.$Shape|null;
              listValue?: google.protobuf.ListValue.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ kind?: undefined; nullValue?: null; numberValue?: null; stringValue?: null; boolValue?: null; structValue?: null; listValue?: null }|{ kind?: "nullValue"; nullValue: google.protobuf.NullValue; numberValue?: null; stringValue?: null; boolValue?: null; structValue?: null; listValue?: null }|{ kind?: "numberValue"; nullValue?: null; numberValue: number; stringValue?: null; boolValue?: null; structValue?: null; listValue?: null }|{ kind?: "stringValue"; nullValue?: null; numberValue?: null; stringValue: string; boolValue?: null; structValue?: null; listValue?: null }|{ kind?: "boolValue"; nullValue?: null; numberValue?: null; stringValue?: null; boolValue: boolean; structValue?: null; listValue?: null }|{ kind?: "structValue"; nullValue?: null; numberValue?: null; stringValue?: null; boolValue?: null; structValue: google.protobuf.Struct.$Shape; listValue?: null }|{ kind?: "listValue"; nullValue?: null; numberValue?: null; stringValue?: null; boolValue?: null; structValue?: null; listValue: google.protobuf.ListValue.$Shape })
            );
        }

        /**
         * Properties of a ListValue.
         * @deprecated Use google.protobuf.ListValue.$Properties instead.
         */
        interface IListValue extends google.protobuf.ListValue.$Properties {
        }

        /** Represents a ListValue. */
        class ListValue {

            /** Reflection-backed declarations are not constructable. Use ListValue.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ListValue values. */
            values: google.protobuf.Value.$Properties[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            static create(properties: google.protobuf.ListValue.$Shape): google.protobuf.ListValue & google.protobuf.ListValue.$Shape;
            static create(properties?: google.protobuf.ListValue.$Properties): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ListValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ListValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue & google.protobuf.ListValue.$Shape} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue & google.protobuf.ListValue.$Shape;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue & google.protobuf.ListValue.$Shape} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue & google.protobuf.ListValue.$Shape;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ListValue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ListValue {

            /** Properties of a ListValue. */
            interface $Properties {

                /** ListValue values */
                values?: (google.protobuf.Value.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ListValue. */
            type $Shape = {
              values?: google.protobuf.Value.$Shape[]|null;
              $unknowns?: Uint8Array[];
            };
        }

        /** NullValue enum. */
        enum NullValue {

            /** NULL_VALUE value */
            NULL_VALUE = 0
        }

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /** Reflection-backed declarations are not constructable. Use Timestamp.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: (number|Long);

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            static create(properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
            static create(properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|Long|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }

        /**
         * Properties of a DoubleValue.
         * @deprecated Use google.protobuf.DoubleValue.$Properties instead.
         */
        interface IDoubleValue extends google.protobuf.DoubleValue.$Properties {
        }

        /** Represents a DoubleValue. */
        class DoubleValue {

            /** Reflection-backed declarations are not constructable. Use DoubleValue.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DoubleValue value. */
            value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            static create(properties: google.protobuf.DoubleValue.$Shape): google.protobuf.DoubleValue & google.protobuf.DoubleValue.$Shape;
            static create(properties?: google.protobuf.DoubleValue.$Properties): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.DoubleValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.DoubleValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue & google.protobuf.DoubleValue.$Shape} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue & google.protobuf.DoubleValue.$Shape;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue & google.protobuf.DoubleValue.$Shape} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue & google.protobuf.DoubleValue.$Shape;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DoubleValue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DoubleValue {

            /** Properties of a DoubleValue. */
            interface $Properties {

                /** DoubleValue value */
                value?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DoubleValue. */
            type $Shape = google.protobuf.DoubleValue.$Properties;
        }

        /**
         * Properties of a FloatValue.
         * @deprecated Use google.protobuf.FloatValue.$Properties instead.
         */
        interface IFloatValue extends google.protobuf.FloatValue.$Properties {
        }

        /** Represents a FloatValue. */
        class FloatValue {

            /** Reflection-backed declarations are not constructable. Use FloatValue.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FloatValue value. */
            value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            static create(properties: google.protobuf.FloatValue.$Shape): google.protobuf.FloatValue & google.protobuf.FloatValue.$Shape;
            static create(properties?: google.protobuf.FloatValue.$Properties): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FloatValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FloatValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue & google.protobuf.FloatValue.$Shape} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue & google.protobuf.FloatValue.$Shape;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue & google.protobuf.FloatValue.$Shape} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue & google.protobuf.FloatValue.$Shape;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FloatValue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FloatValue {

            /** Properties of a FloatValue. */
            interface $Properties {

                /** FloatValue value */
                value?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FloatValue. */
            type $Shape = google.protobuf.FloatValue.$Properties;
        }

        /**
         * Properties of an Int64Value.
         * @deprecated Use google.protobuf.Int64Value.$Properties instead.
         */
        interface IInt64Value extends google.protobuf.Int64Value.$Properties {
        }

        /** Represents an Int64Value. */
        class Int64Value {

            /** Reflection-backed declarations are not constructable. Use Int64Value.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Int64Value value. */
            value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            static create(properties: google.protobuf.Int64Value.$Shape): google.protobuf.Int64Value & google.protobuf.Int64Value.$Shape;
            static create(properties?: google.protobuf.Int64Value.$Properties): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Int64Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Int64Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value & google.protobuf.Int64Value.$Shape} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value & google.protobuf.Int64Value.$Shape;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value & google.protobuf.Int64Value.$Shape} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value & google.protobuf.Int64Value.$Shape;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Int64Value
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Int64Value {

            /** Properties of an Int64Value. */
            interface $Properties {

                /** Int64Value value */
                value?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Int64Value. */
            type $Shape = google.protobuf.Int64Value.$Properties;
        }

        /**
         * Properties of a UInt64Value.
         * @deprecated Use google.protobuf.UInt64Value.$Properties instead.
         */
        interface IUInt64Value extends google.protobuf.UInt64Value.$Properties {
        }

        /** Represents a UInt64Value. */
        class UInt64Value {

            /** Reflection-backed declarations are not constructable. Use UInt64Value.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UInt64Value value. */
            value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            static create(properties: google.protobuf.UInt64Value.$Shape): google.protobuf.UInt64Value & google.protobuf.UInt64Value.$Shape;
            static create(properties?: google.protobuf.UInt64Value.$Properties): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.UInt64Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.UInt64Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value & google.protobuf.UInt64Value.$Shape} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value & google.protobuf.UInt64Value.$Shape;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value & google.protobuf.UInt64Value.$Shape} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value & google.protobuf.UInt64Value.$Shape;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UInt64Value
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UInt64Value {

            /** Properties of a UInt64Value. */
            interface $Properties {

                /** UInt64Value value */
                value?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UInt64Value. */
            type $Shape = google.protobuf.UInt64Value.$Properties;
        }

        /**
         * Properties of an Int32Value.
         * @deprecated Use google.protobuf.Int32Value.$Properties instead.
         */
        interface IInt32Value extends google.protobuf.Int32Value.$Properties {
        }

        /** Represents an Int32Value. */
        class Int32Value {

            /** Reflection-backed declarations are not constructable. Use Int32Value.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Int32Value value. */
            value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            static create(properties: google.protobuf.Int32Value.$Shape): google.protobuf.Int32Value & google.protobuf.Int32Value.$Shape;
            static create(properties?: google.protobuf.Int32Value.$Properties): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Int32Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Int32Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value & google.protobuf.Int32Value.$Shape} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value & google.protobuf.Int32Value.$Shape;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value & google.protobuf.Int32Value.$Shape} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value & google.protobuf.Int32Value.$Shape;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Int32Value
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Int32Value {

            /** Properties of an Int32Value. */
            interface $Properties {

                /** Int32Value value */
                value?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Int32Value. */
            type $Shape = google.protobuf.Int32Value.$Properties;
        }

        /**
         * Properties of a UInt32Value.
         * @deprecated Use google.protobuf.UInt32Value.$Properties instead.
         */
        interface IUInt32Value extends google.protobuf.UInt32Value.$Properties {
        }

        /** Represents a UInt32Value. */
        class UInt32Value {

            /** Reflection-backed declarations are not constructable. Use UInt32Value.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UInt32Value value. */
            value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            static create(properties: google.protobuf.UInt32Value.$Shape): google.protobuf.UInt32Value & google.protobuf.UInt32Value.$Shape;
            static create(properties?: google.protobuf.UInt32Value.$Properties): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.UInt32Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.UInt32Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value & google.protobuf.UInt32Value.$Shape} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value & google.protobuf.UInt32Value.$Shape;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value & google.protobuf.UInt32Value.$Shape} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value & google.protobuf.UInt32Value.$Shape;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UInt32Value
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UInt32Value {

            /** Properties of a UInt32Value. */
            interface $Properties {

                /** UInt32Value value */
                value?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UInt32Value. */
            type $Shape = google.protobuf.UInt32Value.$Properties;
        }

        /**
         * Properties of a BoolValue.
         * @deprecated Use google.protobuf.BoolValue.$Properties instead.
         */
        interface IBoolValue extends google.protobuf.BoolValue.$Properties {
        }

        /** Represents a BoolValue. */
        class BoolValue {

            /** Reflection-backed declarations are not constructable. Use BoolValue.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BoolValue value. */
            value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            static create(properties: google.protobuf.BoolValue.$Shape): google.protobuf.BoolValue & google.protobuf.BoolValue.$Shape;
            static create(properties?: google.protobuf.BoolValue.$Properties): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.BoolValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.BoolValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue & google.protobuf.BoolValue.$Shape} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue & google.protobuf.BoolValue.$Shape;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue & google.protobuf.BoolValue.$Shape} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue & google.protobuf.BoolValue.$Shape;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BoolValue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BoolValue {

            /** Properties of a BoolValue. */
            interface $Properties {

                /** BoolValue value */
                value?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BoolValue. */
            type $Shape = google.protobuf.BoolValue.$Properties;
        }

        /**
         * Properties of a StringValue.
         * @deprecated Use google.protobuf.StringValue.$Properties instead.
         */
        interface IStringValue extends google.protobuf.StringValue.$Properties {
        }

        /** Represents a StringValue. */
        class StringValue {

            /** Reflection-backed declarations are not constructable. Use StringValue.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StringValue value. */
            value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            static create(properties: google.protobuf.StringValue.$Shape): google.protobuf.StringValue & google.protobuf.StringValue.$Shape;
            static create(properties?: google.protobuf.StringValue.$Properties): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.StringValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.StringValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue & google.protobuf.StringValue.$Shape} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue & google.protobuf.StringValue.$Shape;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue & google.protobuf.StringValue.$Shape} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue & google.protobuf.StringValue.$Shape;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StringValue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StringValue {

            /** Properties of a StringValue. */
            interface $Properties {

                /** StringValue value */
                value?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StringValue. */
            type $Shape = google.protobuf.StringValue.$Properties;
        }

        /**
         * Properties of a BytesValue.
         * @deprecated Use google.protobuf.BytesValue.$Properties instead.
         */
        interface IBytesValue extends google.protobuf.BytesValue.$Properties {
        }

        /** Represents a BytesValue. */
        class BytesValue {

            /** Reflection-backed declarations are not constructable. Use BytesValue.create(...) instead. */
            private constructor();

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BytesValue value. */
            value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            static create(properties: google.protobuf.BytesValue.$Shape): google.protobuf.BytesValue & google.protobuf.BytesValue.$Shape;
            static create(properties?: google.protobuf.BytesValue.$Properties): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.BytesValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.BytesValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue & google.protobuf.BytesValue.$Shape} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue & google.protobuf.BytesValue.$Shape;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue & google.protobuf.BytesValue.$Shape} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue & google.protobuf.BytesValue.$Shape;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BytesValue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BytesValue {

            /** Properties of a BytesValue. */
            interface $Properties {

                /** BytesValue value */
                value?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BytesValue. */
            type $Shape = google.protobuf.BytesValue.$Properties;
        }
    }
}

/** Reflected root namespace. */
declare const _default: $protobuf.Root;
export default _default;
