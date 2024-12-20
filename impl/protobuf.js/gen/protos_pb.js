/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
// Generated imports are incorrect for static-module and es6 so we use a custom wrapper according to the pbjs docs.
// See https://github.com/protobufjs/protobuf.js/issues/1657
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const conformance = $root.conformance = (() => {

    /**
     * Namespace conformance.
     * @exports conformance
     * @namespace
     */
    const conformance = {};

    /**
     * WireFormat enum.
     * @name conformance.WireFormat
     * @enum {number}
     * @property {number} UNSPECIFIED=0 UNSPECIFIED value
     * @property {number} PROTOBUF=1 PROTOBUF value
     * @property {number} JSON=2 JSON value
     * @property {number} JSPB=3 JSPB value
     * @property {number} TEXT_FORMAT=4 TEXT_FORMAT value
     */
    conformance.WireFormat = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSPECIFIED"] = 0;
        values[valuesById[1] = "PROTOBUF"] = 1;
        values[valuesById[2] = "JSON"] = 2;
        values[valuesById[3] = "JSPB"] = 3;
        values[valuesById[4] = "TEXT_FORMAT"] = 4;
        return values;
    })();

    /**
     * TestCategory enum.
     * @name conformance.TestCategory
     * @enum {number}
     * @property {number} UNSPECIFIED_TEST=0 UNSPECIFIED_TEST value
     * @property {number} BINARY_TEST=1 BINARY_TEST value
     * @property {number} JSON_TEST=2 JSON_TEST value
     * @property {number} JSON_IGNORE_UNKNOWN_PARSING_TEST=3 JSON_IGNORE_UNKNOWN_PARSING_TEST value
     * @property {number} JSPB_TEST=4 JSPB_TEST value
     * @property {number} TEXT_FORMAT_TEST=5 TEXT_FORMAT_TEST value
     */
    conformance.TestCategory = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSPECIFIED_TEST"] = 0;
        values[valuesById[1] = "BINARY_TEST"] = 1;
        values[valuesById[2] = "JSON_TEST"] = 2;
        values[valuesById[3] = "JSON_IGNORE_UNKNOWN_PARSING_TEST"] = 3;
        values[valuesById[4] = "JSPB_TEST"] = 4;
        values[valuesById[5] = "TEXT_FORMAT_TEST"] = 5;
        return values;
    })();

    conformance.TestStatus = (function() {

        /**
         * Properties of a TestStatus.
         * @memberof conformance
         * @interface ITestStatus
         * @property {string|null} [name] TestStatus name
         * @property {string|null} [failureMessage] TestStatus failureMessage
         * @property {string|null} [matchedName] TestStatus matchedName
         */

        /**
         * Constructs a new TestStatus.
         * @memberof conformance
         * @classdesc Represents a TestStatus.
         * @implements ITestStatus
         * @constructor
         * @param {conformance.ITestStatus=} [properties] Properties to set
         */
        function TestStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestStatus name.
         * @member {string} name
         * @memberof conformance.TestStatus
         * @instance
         */
        TestStatus.prototype.name = "";

        /**
         * TestStatus failureMessage.
         * @member {string} failureMessage
         * @memberof conformance.TestStatus
         * @instance
         */
        TestStatus.prototype.failureMessage = "";

        /**
         * TestStatus matchedName.
         * @member {string} matchedName
         * @memberof conformance.TestStatus
         * @instance
         */
        TestStatus.prototype.matchedName = "";

        /**
         * Creates a new TestStatus instance using the specified properties.
         * @function create
         * @memberof conformance.TestStatus
         * @static
         * @param {conformance.ITestStatus=} [properties] Properties to set
         * @returns {conformance.TestStatus} TestStatus instance
         */
        TestStatus.create = function create(properties) {
            return new TestStatus(properties);
        };

        /**
         * Encodes the specified TestStatus message. Does not implicitly {@link conformance.TestStatus.verify|verify} messages.
         * @function encode
         * @memberof conformance.TestStatus
         * @static
         * @param {conformance.ITestStatus} message TestStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.failureMessage != null && Object.hasOwnProperty.call(message, "failureMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.failureMessage);
            if (message.matchedName != null && Object.hasOwnProperty.call(message, "matchedName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.matchedName);
            return writer;
        };

        /**
         * Encodes the specified TestStatus message, length delimited. Does not implicitly {@link conformance.TestStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conformance.TestStatus
         * @static
         * @param {conformance.ITestStatus} message TestStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestStatus message from the specified reader or buffer.
         * @function decode
         * @memberof conformance.TestStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conformance.TestStatus} TestStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conformance.TestStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.failureMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.matchedName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conformance.TestStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conformance.TestStatus} TestStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestStatus message.
         * @function verify
         * @memberof conformance.TestStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.failureMessage != null && message.hasOwnProperty("failureMessage"))
                if (!$util.isString(message.failureMessage))
                    return "failureMessage: string expected";
            if (message.matchedName != null && message.hasOwnProperty("matchedName"))
                if (!$util.isString(message.matchedName))
                    return "matchedName: string expected";
            return null;
        };

        /**
         * Creates a TestStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conformance.TestStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conformance.TestStatus} TestStatus
         */
        TestStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.conformance.TestStatus)
                return object;
            let message = new $root.conformance.TestStatus();
            if (object.name != null)
                message.name = String(object.name);
            if (object.failureMessage != null)
                message.failureMessage = String(object.failureMessage);
            if (object.matchedName != null)
                message.matchedName = String(object.matchedName);
            return message;
        };

        /**
         * Creates a plain object from a TestStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conformance.TestStatus
         * @static
         * @param {conformance.TestStatus} message TestStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.failureMessage = "";
                object.matchedName = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.failureMessage != null && message.hasOwnProperty("failureMessage"))
                object.failureMessage = message.failureMessage;
            if (message.matchedName != null && message.hasOwnProperty("matchedName"))
                object.matchedName = message.matchedName;
            return object;
        };

        /**
         * Converts this TestStatus to JSON.
         * @function toJSON
         * @memberof conformance.TestStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TestStatus
         * @function getTypeUrl
         * @memberof conformance.TestStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TestStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conformance.TestStatus";
        };

        return TestStatus;
    })();

    conformance.FailureSet = (function() {

        /**
         * Properties of a FailureSet.
         * @memberof conformance
         * @interface IFailureSet
         * @property {Array.<conformance.ITestStatus>|null} [test] FailureSet test
         */

        /**
         * Constructs a new FailureSet.
         * @memberof conformance
         * @classdesc Represents a FailureSet.
         * @implements IFailureSet
         * @constructor
         * @param {conformance.IFailureSet=} [properties] Properties to set
         */
        function FailureSet(properties) {
            this.test = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FailureSet test.
         * @member {Array.<conformance.ITestStatus>} test
         * @memberof conformance.FailureSet
         * @instance
         */
        FailureSet.prototype.test = $util.emptyArray;

        /**
         * Creates a new FailureSet instance using the specified properties.
         * @function create
         * @memberof conformance.FailureSet
         * @static
         * @param {conformance.IFailureSet=} [properties] Properties to set
         * @returns {conformance.FailureSet} FailureSet instance
         */
        FailureSet.create = function create(properties) {
            return new FailureSet(properties);
        };

        /**
         * Encodes the specified FailureSet message. Does not implicitly {@link conformance.FailureSet.verify|verify} messages.
         * @function encode
         * @memberof conformance.FailureSet
         * @static
         * @param {conformance.IFailureSet} message FailureSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FailureSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.test != null && message.test.length)
                for (let i = 0; i < message.test.length; ++i)
                    $root.conformance.TestStatus.encode(message.test[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FailureSet message, length delimited. Does not implicitly {@link conformance.FailureSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conformance.FailureSet
         * @static
         * @param {conformance.IFailureSet} message FailureSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FailureSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FailureSet message from the specified reader or buffer.
         * @function decode
         * @memberof conformance.FailureSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conformance.FailureSet} FailureSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FailureSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conformance.FailureSet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.test && message.test.length))
                            message.test = [];
                        message.test.push($root.conformance.TestStatus.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FailureSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conformance.FailureSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conformance.FailureSet} FailureSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FailureSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FailureSet message.
         * @function verify
         * @memberof conformance.FailureSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FailureSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.test != null && message.hasOwnProperty("test")) {
                if (!Array.isArray(message.test))
                    return "test: array expected";
                for (let i = 0; i < message.test.length; ++i) {
                    let error = $root.conformance.TestStatus.verify(message.test[i]);
                    if (error)
                        return "test." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FailureSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conformance.FailureSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conformance.FailureSet} FailureSet
         */
        FailureSet.fromObject = function fromObject(object) {
            if (object instanceof $root.conformance.FailureSet)
                return object;
            let message = new $root.conformance.FailureSet();
            if (object.test) {
                if (!Array.isArray(object.test))
                    throw TypeError(".conformance.FailureSet.test: array expected");
                message.test = [];
                for (let i = 0; i < object.test.length; ++i) {
                    if (typeof object.test[i] !== "object")
                        throw TypeError(".conformance.FailureSet.test: object expected");
                    message.test[i] = $root.conformance.TestStatus.fromObject(object.test[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FailureSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conformance.FailureSet
         * @static
         * @param {conformance.FailureSet} message FailureSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FailureSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.test = [];
            if (message.test && message.test.length) {
                object.test = [];
                for (let j = 0; j < message.test.length; ++j)
                    object.test[j] = $root.conformance.TestStatus.toObject(message.test[j], options);
            }
            return object;
        };

        /**
         * Converts this FailureSet to JSON.
         * @function toJSON
         * @memberof conformance.FailureSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FailureSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FailureSet
         * @function getTypeUrl
         * @memberof conformance.FailureSet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FailureSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conformance.FailureSet";
        };

        return FailureSet;
    })();

    conformance.ConformanceRequest = (function() {

        /**
         * Properties of a ConformanceRequest.
         * @memberof conformance
         * @interface IConformanceRequest
         * @property {Uint8Array|null} [protobufPayload] ConformanceRequest protobufPayload
         * @property {string|null} [jsonPayload] ConformanceRequest jsonPayload
         * @property {string|null} [jspbPayload] ConformanceRequest jspbPayload
         * @property {string|null} [textPayload] ConformanceRequest textPayload
         * @property {conformance.WireFormat|null} [requestedOutputFormat] ConformanceRequest requestedOutputFormat
         * @property {string|null} [messageType] ConformanceRequest messageType
         * @property {conformance.TestCategory|null} [testCategory] ConformanceRequest testCategory
         * @property {conformance.IJspbEncodingConfig|null} [jspbEncodingOptions] ConformanceRequest jspbEncodingOptions
         * @property {boolean|null} [printUnknownFields] ConformanceRequest printUnknownFields
         */

        /**
         * Constructs a new ConformanceRequest.
         * @memberof conformance
         * @classdesc Represents a ConformanceRequest.
         * @implements IConformanceRequest
         * @constructor
         * @param {conformance.IConformanceRequest=} [properties] Properties to set
         */
        function ConformanceRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConformanceRequest protobufPayload.
         * @member {Uint8Array|null|undefined} protobufPayload
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.protobufPayload = null;

        /**
         * ConformanceRequest jsonPayload.
         * @member {string|null|undefined} jsonPayload
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.jsonPayload = null;

        /**
         * ConformanceRequest jspbPayload.
         * @member {string|null|undefined} jspbPayload
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.jspbPayload = null;

        /**
         * ConformanceRequest textPayload.
         * @member {string|null|undefined} textPayload
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.textPayload = null;

        /**
         * ConformanceRequest requestedOutputFormat.
         * @member {conformance.WireFormat} requestedOutputFormat
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.requestedOutputFormat = 0;

        /**
         * ConformanceRequest messageType.
         * @member {string} messageType
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.messageType = "";

        /**
         * ConformanceRequest testCategory.
         * @member {conformance.TestCategory} testCategory
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.testCategory = 0;

        /**
         * ConformanceRequest jspbEncodingOptions.
         * @member {conformance.IJspbEncodingConfig|null|undefined} jspbEncodingOptions
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.jspbEncodingOptions = null;

        /**
         * ConformanceRequest printUnknownFields.
         * @member {boolean} printUnknownFields
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        ConformanceRequest.prototype.printUnknownFields = false;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ConformanceRequest payload.
         * @member {"protobufPayload"|"jsonPayload"|"jspbPayload"|"textPayload"|undefined} payload
         * @memberof conformance.ConformanceRequest
         * @instance
         */
        Object.defineProperty(ConformanceRequest.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["protobufPayload", "jsonPayload", "jspbPayload", "textPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ConformanceRequest instance using the specified properties.
         * @function create
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {conformance.IConformanceRequest=} [properties] Properties to set
         * @returns {conformance.ConformanceRequest} ConformanceRequest instance
         */
        ConformanceRequest.create = function create(properties) {
            return new ConformanceRequest(properties);
        };

        /**
         * Encodes the specified ConformanceRequest message. Does not implicitly {@link conformance.ConformanceRequest.verify|verify} messages.
         * @function encode
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {conformance.IConformanceRequest} message ConformanceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConformanceRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protobufPayload != null && Object.hasOwnProperty.call(message, "protobufPayload"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.protobufPayload);
            if (message.jsonPayload != null && Object.hasOwnProperty.call(message, "jsonPayload"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.jsonPayload);
            if (message.requestedOutputFormat != null && Object.hasOwnProperty.call(message, "requestedOutputFormat"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.requestedOutputFormat);
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.messageType);
            if (message.testCategory != null && Object.hasOwnProperty.call(message, "testCategory"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.testCategory);
            if (message.jspbEncodingOptions != null && Object.hasOwnProperty.call(message, "jspbEncodingOptions"))
                $root.conformance.JspbEncodingConfig.encode(message.jspbEncodingOptions, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.jspbPayload != null && Object.hasOwnProperty.call(message, "jspbPayload"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.jspbPayload);
            if (message.textPayload != null && Object.hasOwnProperty.call(message, "textPayload"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.textPayload);
            if (message.printUnknownFields != null && Object.hasOwnProperty.call(message, "printUnknownFields"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.printUnknownFields);
            return writer;
        };

        /**
         * Encodes the specified ConformanceRequest message, length delimited. Does not implicitly {@link conformance.ConformanceRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {conformance.IConformanceRequest} message ConformanceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConformanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConformanceRequest message from the specified reader or buffer.
         * @function decode
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conformance.ConformanceRequest} ConformanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConformanceRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conformance.ConformanceRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.protobufPayload = reader.bytes();
                        break;
                    }
                case 2: {
                        message.jsonPayload = reader.string();
                        break;
                    }
                case 7: {
                        message.jspbPayload = reader.string();
                        break;
                    }
                case 8: {
                        message.textPayload = reader.string();
                        break;
                    }
                case 3: {
                        message.requestedOutputFormat = reader.int32();
                        break;
                    }
                case 4: {
                        message.messageType = reader.string();
                        break;
                    }
                case 5: {
                        message.testCategory = reader.int32();
                        break;
                    }
                case 6: {
                        message.jspbEncodingOptions = $root.conformance.JspbEncodingConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.printUnknownFields = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConformanceRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conformance.ConformanceRequest} ConformanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConformanceRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConformanceRequest message.
         * @function verify
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConformanceRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.protobufPayload != null && message.hasOwnProperty("protobufPayload")) {
                properties.payload = 1;
                if (!(message.protobufPayload && typeof message.protobufPayload.length === "number" || $util.isString(message.protobufPayload)))
                    return "protobufPayload: buffer expected";
            }
            if (message.jsonPayload != null && message.hasOwnProperty("jsonPayload")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                if (!$util.isString(message.jsonPayload))
                    return "jsonPayload: string expected";
            }
            if (message.jspbPayload != null && message.hasOwnProperty("jspbPayload")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                if (!$util.isString(message.jspbPayload))
                    return "jspbPayload: string expected";
            }
            if (message.textPayload != null && message.hasOwnProperty("textPayload")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                if (!$util.isString(message.textPayload))
                    return "textPayload: string expected";
            }
            if (message.requestedOutputFormat != null && message.hasOwnProperty("requestedOutputFormat"))
                switch (message.requestedOutputFormat) {
                default:
                    return "requestedOutputFormat: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            if (message.testCategory != null && message.hasOwnProperty("testCategory"))
                switch (message.testCategory) {
                default:
                    return "testCategory: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.jspbEncodingOptions != null && message.hasOwnProperty("jspbEncodingOptions")) {
                let error = $root.conformance.JspbEncodingConfig.verify(message.jspbEncodingOptions);
                if (error)
                    return "jspbEncodingOptions." + error;
            }
            if (message.printUnknownFields != null && message.hasOwnProperty("printUnknownFields"))
                if (typeof message.printUnknownFields !== "boolean")
                    return "printUnknownFields: boolean expected";
            return null;
        };

        /**
         * Creates a ConformanceRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conformance.ConformanceRequest} ConformanceRequest
         */
        ConformanceRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.conformance.ConformanceRequest)
                return object;
            let message = new $root.conformance.ConformanceRequest();
            if (object.protobufPayload != null)
                if (typeof object.protobufPayload === "string")
                    $util.base64.decode(object.protobufPayload, message.protobufPayload = $util.newBuffer($util.base64.length(object.protobufPayload)), 0);
                else if (object.protobufPayload.length >= 0)
                    message.protobufPayload = object.protobufPayload;
            if (object.jsonPayload != null)
                message.jsonPayload = String(object.jsonPayload);
            if (object.jspbPayload != null)
                message.jspbPayload = String(object.jspbPayload);
            if (object.textPayload != null)
                message.textPayload = String(object.textPayload);
            switch (object.requestedOutputFormat) {
            default:
                if (typeof object.requestedOutputFormat === "number") {
                    message.requestedOutputFormat = object.requestedOutputFormat;
                    break;
                }
                break;
            case "UNSPECIFIED":
            case 0:
                message.requestedOutputFormat = 0;
                break;
            case "PROTOBUF":
            case 1:
                message.requestedOutputFormat = 1;
                break;
            case "JSON":
            case 2:
                message.requestedOutputFormat = 2;
                break;
            case "JSPB":
            case 3:
                message.requestedOutputFormat = 3;
                break;
            case "TEXT_FORMAT":
            case 4:
                message.requestedOutputFormat = 4;
                break;
            }
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            switch (object.testCategory) {
            default:
                if (typeof object.testCategory === "number") {
                    message.testCategory = object.testCategory;
                    break;
                }
                break;
            case "UNSPECIFIED_TEST":
            case 0:
                message.testCategory = 0;
                break;
            case "BINARY_TEST":
            case 1:
                message.testCategory = 1;
                break;
            case "JSON_TEST":
            case 2:
                message.testCategory = 2;
                break;
            case "JSON_IGNORE_UNKNOWN_PARSING_TEST":
            case 3:
                message.testCategory = 3;
                break;
            case "JSPB_TEST":
            case 4:
                message.testCategory = 4;
                break;
            case "TEXT_FORMAT_TEST":
            case 5:
                message.testCategory = 5;
                break;
            }
            if (object.jspbEncodingOptions != null) {
                if (typeof object.jspbEncodingOptions !== "object")
                    throw TypeError(".conformance.ConformanceRequest.jspbEncodingOptions: object expected");
                message.jspbEncodingOptions = $root.conformance.JspbEncodingConfig.fromObject(object.jspbEncodingOptions);
            }
            if (object.printUnknownFields != null)
                message.printUnknownFields = Boolean(object.printUnknownFields);
            return message;
        };

        /**
         * Creates a plain object from a ConformanceRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {conformance.ConformanceRequest} message ConformanceRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConformanceRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestedOutputFormat = options.enums === String ? "UNSPECIFIED" : 0;
                object.messageType = "";
                object.testCategory = options.enums === String ? "UNSPECIFIED_TEST" : 0;
                object.jspbEncodingOptions = null;
                object.printUnknownFields = false;
            }
            if (message.protobufPayload != null && message.hasOwnProperty("protobufPayload")) {
                object.protobufPayload = options.bytes === String ? $util.base64.encode(message.protobufPayload, 0, message.protobufPayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.protobufPayload) : message.protobufPayload;
                if (options.oneofs)
                    object.payload = "protobufPayload";
            }
            if (message.jsonPayload != null && message.hasOwnProperty("jsonPayload")) {
                object.jsonPayload = message.jsonPayload;
                if (options.oneofs)
                    object.payload = "jsonPayload";
            }
            if (message.requestedOutputFormat != null && message.hasOwnProperty("requestedOutputFormat"))
                object.requestedOutputFormat = options.enums === String ? $root.conformance.WireFormat[message.requestedOutputFormat] === undefined ? message.requestedOutputFormat : $root.conformance.WireFormat[message.requestedOutputFormat] : message.requestedOutputFormat;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.testCategory != null && message.hasOwnProperty("testCategory"))
                object.testCategory = options.enums === String ? $root.conformance.TestCategory[message.testCategory] === undefined ? message.testCategory : $root.conformance.TestCategory[message.testCategory] : message.testCategory;
            if (message.jspbEncodingOptions != null && message.hasOwnProperty("jspbEncodingOptions"))
                object.jspbEncodingOptions = $root.conformance.JspbEncodingConfig.toObject(message.jspbEncodingOptions, options);
            if (message.jspbPayload != null && message.hasOwnProperty("jspbPayload")) {
                object.jspbPayload = message.jspbPayload;
                if (options.oneofs)
                    object.payload = "jspbPayload";
            }
            if (message.textPayload != null && message.hasOwnProperty("textPayload")) {
                object.textPayload = message.textPayload;
                if (options.oneofs)
                    object.payload = "textPayload";
            }
            if (message.printUnknownFields != null && message.hasOwnProperty("printUnknownFields"))
                object.printUnknownFields = message.printUnknownFields;
            return object;
        };

        /**
         * Converts this ConformanceRequest to JSON.
         * @function toJSON
         * @memberof conformance.ConformanceRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConformanceRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConformanceRequest
         * @function getTypeUrl
         * @memberof conformance.ConformanceRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConformanceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conformance.ConformanceRequest";
        };

        return ConformanceRequest;
    })();

    conformance.ConformanceResponse = (function() {

        /**
         * Properties of a ConformanceResponse.
         * @memberof conformance
         * @interface IConformanceResponse
         * @property {string|null} [parseError] ConformanceResponse parseError
         * @property {string|null} [serializeError] ConformanceResponse serializeError
         * @property {string|null} [timeoutError] ConformanceResponse timeoutError
         * @property {string|null} [runtimeError] ConformanceResponse runtimeError
         * @property {Uint8Array|null} [protobufPayload] ConformanceResponse protobufPayload
         * @property {string|null} [jsonPayload] ConformanceResponse jsonPayload
         * @property {string|null} [skipped] ConformanceResponse skipped
         * @property {string|null} [jspbPayload] ConformanceResponse jspbPayload
         * @property {string|null} [textPayload] ConformanceResponse textPayload
         */

        /**
         * Constructs a new ConformanceResponse.
         * @memberof conformance
         * @classdesc Represents a ConformanceResponse.
         * @implements IConformanceResponse
         * @constructor
         * @param {conformance.IConformanceResponse=} [properties] Properties to set
         */
        function ConformanceResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConformanceResponse parseError.
         * @member {string|null|undefined} parseError
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.parseError = null;

        /**
         * ConformanceResponse serializeError.
         * @member {string|null|undefined} serializeError
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.serializeError = null;

        /**
         * ConformanceResponse timeoutError.
         * @member {string|null|undefined} timeoutError
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.timeoutError = null;

        /**
         * ConformanceResponse runtimeError.
         * @member {string|null|undefined} runtimeError
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.runtimeError = null;

        /**
         * ConformanceResponse protobufPayload.
         * @member {Uint8Array|null|undefined} protobufPayload
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.protobufPayload = null;

        /**
         * ConformanceResponse jsonPayload.
         * @member {string|null|undefined} jsonPayload
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.jsonPayload = null;

        /**
         * ConformanceResponse skipped.
         * @member {string|null|undefined} skipped
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.skipped = null;

        /**
         * ConformanceResponse jspbPayload.
         * @member {string|null|undefined} jspbPayload
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.jspbPayload = null;

        /**
         * ConformanceResponse textPayload.
         * @member {string|null|undefined} textPayload
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        ConformanceResponse.prototype.textPayload = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ConformanceResponse result.
         * @member {"parseError"|"serializeError"|"timeoutError"|"runtimeError"|"protobufPayload"|"jsonPayload"|"skipped"|"jspbPayload"|"textPayload"|undefined} result
         * @memberof conformance.ConformanceResponse
         * @instance
         */
        Object.defineProperty(ConformanceResponse.prototype, "result", {
            get: $util.oneOfGetter($oneOfFields = ["parseError", "serializeError", "timeoutError", "runtimeError", "protobufPayload", "jsonPayload", "skipped", "jspbPayload", "textPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ConformanceResponse instance using the specified properties.
         * @function create
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {conformance.IConformanceResponse=} [properties] Properties to set
         * @returns {conformance.ConformanceResponse} ConformanceResponse instance
         */
        ConformanceResponse.create = function create(properties) {
            return new ConformanceResponse(properties);
        };

        /**
         * Encodes the specified ConformanceResponse message. Does not implicitly {@link conformance.ConformanceResponse.verify|verify} messages.
         * @function encode
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {conformance.IConformanceResponse} message ConformanceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConformanceResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.parseError != null && Object.hasOwnProperty.call(message, "parseError"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parseError);
            if (message.runtimeError != null && Object.hasOwnProperty.call(message, "runtimeError"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.runtimeError);
            if (message.protobufPayload != null && Object.hasOwnProperty.call(message, "protobufPayload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.protobufPayload);
            if (message.jsonPayload != null && Object.hasOwnProperty.call(message, "jsonPayload"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.jsonPayload);
            if (message.skipped != null && Object.hasOwnProperty.call(message, "skipped"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.skipped);
            if (message.serializeError != null && Object.hasOwnProperty.call(message, "serializeError"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.serializeError);
            if (message.jspbPayload != null && Object.hasOwnProperty.call(message, "jspbPayload"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.jspbPayload);
            if (message.textPayload != null && Object.hasOwnProperty.call(message, "textPayload"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.textPayload);
            if (message.timeoutError != null && Object.hasOwnProperty.call(message, "timeoutError"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.timeoutError);
            return writer;
        };

        /**
         * Encodes the specified ConformanceResponse message, length delimited. Does not implicitly {@link conformance.ConformanceResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {conformance.IConformanceResponse} message ConformanceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConformanceResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConformanceResponse message from the specified reader or buffer.
         * @function decode
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conformance.ConformanceResponse} ConformanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConformanceResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conformance.ConformanceResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.parseError = reader.string();
                        break;
                    }
                case 6: {
                        message.serializeError = reader.string();
                        break;
                    }
                case 9: {
                        message.timeoutError = reader.string();
                        break;
                    }
                case 2: {
                        message.runtimeError = reader.string();
                        break;
                    }
                case 3: {
                        message.protobufPayload = reader.bytes();
                        break;
                    }
                case 4: {
                        message.jsonPayload = reader.string();
                        break;
                    }
                case 5: {
                        message.skipped = reader.string();
                        break;
                    }
                case 7: {
                        message.jspbPayload = reader.string();
                        break;
                    }
                case 8: {
                        message.textPayload = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConformanceResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conformance.ConformanceResponse} ConformanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConformanceResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConformanceResponse message.
         * @function verify
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConformanceResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.parseError != null && message.hasOwnProperty("parseError")) {
                properties.result = 1;
                if (!$util.isString(message.parseError))
                    return "parseError: string expected";
            }
            if (message.serializeError != null && message.hasOwnProperty("serializeError")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.serializeError))
                    return "serializeError: string expected";
            }
            if (message.timeoutError != null && message.hasOwnProperty("timeoutError")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.timeoutError))
                    return "timeoutError: string expected";
            }
            if (message.runtimeError != null && message.hasOwnProperty("runtimeError")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.runtimeError))
                    return "runtimeError: string expected";
            }
            if (message.protobufPayload != null && message.hasOwnProperty("protobufPayload")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!(message.protobufPayload && typeof message.protobufPayload.length === "number" || $util.isString(message.protobufPayload)))
                    return "protobufPayload: buffer expected";
            }
            if (message.jsonPayload != null && message.hasOwnProperty("jsonPayload")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.jsonPayload))
                    return "jsonPayload: string expected";
            }
            if (message.skipped != null && message.hasOwnProperty("skipped")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.skipped))
                    return "skipped: string expected";
            }
            if (message.jspbPayload != null && message.hasOwnProperty("jspbPayload")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.jspbPayload))
                    return "jspbPayload: string expected";
            }
            if (message.textPayload != null && message.hasOwnProperty("textPayload")) {
                if (properties.result === 1)
                    return "result: multiple values";
                properties.result = 1;
                if (!$util.isString(message.textPayload))
                    return "textPayload: string expected";
            }
            return null;
        };

        /**
         * Creates a ConformanceResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conformance.ConformanceResponse} ConformanceResponse
         */
        ConformanceResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.conformance.ConformanceResponse)
                return object;
            let message = new $root.conformance.ConformanceResponse();
            if (object.parseError != null)
                message.parseError = String(object.parseError);
            if (object.serializeError != null)
                message.serializeError = String(object.serializeError);
            if (object.timeoutError != null)
                message.timeoutError = String(object.timeoutError);
            if (object.runtimeError != null)
                message.runtimeError = String(object.runtimeError);
            if (object.protobufPayload != null)
                if (typeof object.protobufPayload === "string")
                    $util.base64.decode(object.protobufPayload, message.protobufPayload = $util.newBuffer($util.base64.length(object.protobufPayload)), 0);
                else if (object.protobufPayload.length >= 0)
                    message.protobufPayload = object.protobufPayload;
            if (object.jsonPayload != null)
                message.jsonPayload = String(object.jsonPayload);
            if (object.skipped != null)
                message.skipped = String(object.skipped);
            if (object.jspbPayload != null)
                message.jspbPayload = String(object.jspbPayload);
            if (object.textPayload != null)
                message.textPayload = String(object.textPayload);
            return message;
        };

        /**
         * Creates a plain object from a ConformanceResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {conformance.ConformanceResponse} message ConformanceResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConformanceResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.parseError != null && message.hasOwnProperty("parseError")) {
                object.parseError = message.parseError;
                if (options.oneofs)
                    object.result = "parseError";
            }
            if (message.runtimeError != null && message.hasOwnProperty("runtimeError")) {
                object.runtimeError = message.runtimeError;
                if (options.oneofs)
                    object.result = "runtimeError";
            }
            if (message.protobufPayload != null && message.hasOwnProperty("protobufPayload")) {
                object.protobufPayload = options.bytes === String ? $util.base64.encode(message.protobufPayload, 0, message.protobufPayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.protobufPayload) : message.protobufPayload;
                if (options.oneofs)
                    object.result = "protobufPayload";
            }
            if (message.jsonPayload != null && message.hasOwnProperty("jsonPayload")) {
                object.jsonPayload = message.jsonPayload;
                if (options.oneofs)
                    object.result = "jsonPayload";
            }
            if (message.skipped != null && message.hasOwnProperty("skipped")) {
                object.skipped = message.skipped;
                if (options.oneofs)
                    object.result = "skipped";
            }
            if (message.serializeError != null && message.hasOwnProperty("serializeError")) {
                object.serializeError = message.serializeError;
                if (options.oneofs)
                    object.result = "serializeError";
            }
            if (message.jspbPayload != null && message.hasOwnProperty("jspbPayload")) {
                object.jspbPayload = message.jspbPayload;
                if (options.oneofs)
                    object.result = "jspbPayload";
            }
            if (message.textPayload != null && message.hasOwnProperty("textPayload")) {
                object.textPayload = message.textPayload;
                if (options.oneofs)
                    object.result = "textPayload";
            }
            if (message.timeoutError != null && message.hasOwnProperty("timeoutError")) {
                object.timeoutError = message.timeoutError;
                if (options.oneofs)
                    object.result = "timeoutError";
            }
            return object;
        };

        /**
         * Converts this ConformanceResponse to JSON.
         * @function toJSON
         * @memberof conformance.ConformanceResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConformanceResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConformanceResponse
         * @function getTypeUrl
         * @memberof conformance.ConformanceResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConformanceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conformance.ConformanceResponse";
        };

        return ConformanceResponse;
    })();

    conformance.JspbEncodingConfig = (function() {

        /**
         * Properties of a JspbEncodingConfig.
         * @memberof conformance
         * @interface IJspbEncodingConfig
         * @property {boolean|null} [useJspbArrayAnyFormat] JspbEncodingConfig useJspbArrayAnyFormat
         */

        /**
         * Constructs a new JspbEncodingConfig.
         * @memberof conformance
         * @classdesc Represents a JspbEncodingConfig.
         * @implements IJspbEncodingConfig
         * @constructor
         * @param {conformance.IJspbEncodingConfig=} [properties] Properties to set
         */
        function JspbEncodingConfig(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JspbEncodingConfig useJspbArrayAnyFormat.
         * @member {boolean} useJspbArrayAnyFormat
         * @memberof conformance.JspbEncodingConfig
         * @instance
         */
        JspbEncodingConfig.prototype.useJspbArrayAnyFormat = false;

        /**
         * Creates a new JspbEncodingConfig instance using the specified properties.
         * @function create
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {conformance.IJspbEncodingConfig=} [properties] Properties to set
         * @returns {conformance.JspbEncodingConfig} JspbEncodingConfig instance
         */
        JspbEncodingConfig.create = function create(properties) {
            return new JspbEncodingConfig(properties);
        };

        /**
         * Encodes the specified JspbEncodingConfig message. Does not implicitly {@link conformance.JspbEncodingConfig.verify|verify} messages.
         * @function encode
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {conformance.IJspbEncodingConfig} message JspbEncodingConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JspbEncodingConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.useJspbArrayAnyFormat != null && Object.hasOwnProperty.call(message, "useJspbArrayAnyFormat"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.useJspbArrayAnyFormat);
            return writer;
        };

        /**
         * Encodes the specified JspbEncodingConfig message, length delimited. Does not implicitly {@link conformance.JspbEncodingConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {conformance.IJspbEncodingConfig} message JspbEncodingConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JspbEncodingConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JspbEncodingConfig message from the specified reader or buffer.
         * @function decode
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conformance.JspbEncodingConfig} JspbEncodingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JspbEncodingConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conformance.JspbEncodingConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.useJspbArrayAnyFormat = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JspbEncodingConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conformance.JspbEncodingConfig} JspbEncodingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JspbEncodingConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JspbEncodingConfig message.
         * @function verify
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JspbEncodingConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.useJspbArrayAnyFormat != null && message.hasOwnProperty("useJspbArrayAnyFormat"))
                if (typeof message.useJspbArrayAnyFormat !== "boolean")
                    return "useJspbArrayAnyFormat: boolean expected";
            return null;
        };

        /**
         * Creates a JspbEncodingConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conformance.JspbEncodingConfig} JspbEncodingConfig
         */
        JspbEncodingConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.conformance.JspbEncodingConfig)
                return object;
            let message = new $root.conformance.JspbEncodingConfig();
            if (object.useJspbArrayAnyFormat != null)
                message.useJspbArrayAnyFormat = Boolean(object.useJspbArrayAnyFormat);
            return message;
        };

        /**
         * Creates a plain object from a JspbEncodingConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {conformance.JspbEncodingConfig} message JspbEncodingConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JspbEncodingConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.useJspbArrayAnyFormat = false;
            if (message.useJspbArrayAnyFormat != null && message.hasOwnProperty("useJspbArrayAnyFormat"))
                object.useJspbArrayAnyFormat = message.useJspbArrayAnyFormat;
            return object;
        };

        /**
         * Converts this JspbEncodingConfig to JSON.
         * @function toJSON
         * @memberof conformance.JspbEncodingConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JspbEncodingConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JspbEncodingConfig
         * @function getTypeUrl
         * @memberof conformance.JspbEncodingConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JspbEncodingConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conformance.JspbEncodingConfig";
        };

        return JspbEncodingConfig;
    })();

    return conformance;
})();

export const protobuf_test_messages = $root.protobuf_test_messages = (() => {

    /**
     * Namespace protobuf_test_messages.
     * @exports protobuf_test_messages
     * @namespace
     */
    const protobuf_test_messages = {};

    protobuf_test_messages.proto3 = (function() {

        /**
         * Namespace proto3.
         * @memberof protobuf_test_messages
         * @namespace
         */
        const proto3 = {};

        proto3.TestAllTypesProto3 = (function() {

            /**
             * Properties of a TestAllTypesProto3.
             * @memberof protobuf_test_messages.proto3
             * @interface ITestAllTypesProto3
             * @property {number|null} [optionalInt32] TestAllTypesProto3 optionalInt32
             * @property {number|Long|null} [optionalInt64] TestAllTypesProto3 optionalInt64
             * @property {number|null} [optionalUint32] TestAllTypesProto3 optionalUint32
             * @property {number|Long|null} [optionalUint64] TestAllTypesProto3 optionalUint64
             * @property {number|null} [optionalSint32] TestAllTypesProto3 optionalSint32
             * @property {number|Long|null} [optionalSint64] TestAllTypesProto3 optionalSint64
             * @property {number|null} [optionalFixed32] TestAllTypesProto3 optionalFixed32
             * @property {number|Long|null} [optionalFixed64] TestAllTypesProto3 optionalFixed64
             * @property {number|null} [optionalSfixed32] TestAllTypesProto3 optionalSfixed32
             * @property {number|Long|null} [optionalSfixed64] TestAllTypesProto3 optionalSfixed64
             * @property {number|null} [optionalFloat] TestAllTypesProto3 optionalFloat
             * @property {number|null} [optionalDouble] TestAllTypesProto3 optionalDouble
             * @property {boolean|null} [optionalBool] TestAllTypesProto3 optionalBool
             * @property {string|null} [optionalString] TestAllTypesProto3 optionalString
             * @property {Uint8Array|null} [optionalBytes] TestAllTypesProto3 optionalBytes
             * @property {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null} [optionalNestedMessage] TestAllTypesProto3 optionalNestedMessage
             * @property {protobuf_test_messages.proto3.IForeignMessage|null} [optionalForeignMessage] TestAllTypesProto3 optionalForeignMessage
             * @property {protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null} [optionalNestedEnum] TestAllTypesProto3 optionalNestedEnum
             * @property {protobuf_test_messages.proto3.ForeignEnum|null} [optionalForeignEnum] TestAllTypesProto3 optionalForeignEnum
             * @property {protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum|null} [optionalAliasedEnum] TestAllTypesProto3 optionalAliasedEnum
             * @property {string|null} [optionalStringPiece] TestAllTypesProto3 optionalStringPiece
             * @property {string|null} [optionalCord] TestAllTypesProto3 optionalCord
             * @property {protobuf_test_messages.proto3.ITestAllTypesProto3|null} [recursiveMessage] TestAllTypesProto3 recursiveMessage
             * @property {Array.<number>|null} [repeatedInt32] TestAllTypesProto3 repeatedInt32
             * @property {Array.<number|Long>|null} [repeatedInt64] TestAllTypesProto3 repeatedInt64
             * @property {Array.<number>|null} [repeatedUint32] TestAllTypesProto3 repeatedUint32
             * @property {Array.<number|Long>|null} [repeatedUint64] TestAllTypesProto3 repeatedUint64
             * @property {Array.<number>|null} [repeatedSint32] TestAllTypesProto3 repeatedSint32
             * @property {Array.<number|Long>|null} [repeatedSint64] TestAllTypesProto3 repeatedSint64
             * @property {Array.<number>|null} [repeatedFixed32] TestAllTypesProto3 repeatedFixed32
             * @property {Array.<number|Long>|null} [repeatedFixed64] TestAllTypesProto3 repeatedFixed64
             * @property {Array.<number>|null} [repeatedSfixed32] TestAllTypesProto3 repeatedSfixed32
             * @property {Array.<number|Long>|null} [repeatedSfixed64] TestAllTypesProto3 repeatedSfixed64
             * @property {Array.<number>|null} [repeatedFloat] TestAllTypesProto3 repeatedFloat
             * @property {Array.<number>|null} [repeatedDouble] TestAllTypesProto3 repeatedDouble
             * @property {Array.<boolean>|null} [repeatedBool] TestAllTypesProto3 repeatedBool
             * @property {Array.<string>|null} [repeatedString] TestAllTypesProto3 repeatedString
             * @property {Array.<Uint8Array>|null} [repeatedBytes] TestAllTypesProto3 repeatedBytes
             * @property {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage>|null} [repeatedNestedMessage] TestAllTypesProto3 repeatedNestedMessage
             * @property {Array.<protobuf_test_messages.proto3.IForeignMessage>|null} [repeatedForeignMessage] TestAllTypesProto3 repeatedForeignMessage
             * @property {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>|null} [repeatedNestedEnum] TestAllTypesProto3 repeatedNestedEnum
             * @property {Array.<protobuf_test_messages.proto3.ForeignEnum>|null} [repeatedForeignEnum] TestAllTypesProto3 repeatedForeignEnum
             * @property {Array.<string>|null} [repeatedStringPiece] TestAllTypesProto3 repeatedStringPiece
             * @property {Array.<string>|null} [repeatedCord] TestAllTypesProto3 repeatedCord
             * @property {Array.<number>|null} [packedInt32] TestAllTypesProto3 packedInt32
             * @property {Array.<number|Long>|null} [packedInt64] TestAllTypesProto3 packedInt64
             * @property {Array.<number>|null} [packedUint32] TestAllTypesProto3 packedUint32
             * @property {Array.<number|Long>|null} [packedUint64] TestAllTypesProto3 packedUint64
             * @property {Array.<number>|null} [packedSint32] TestAllTypesProto3 packedSint32
             * @property {Array.<number|Long>|null} [packedSint64] TestAllTypesProto3 packedSint64
             * @property {Array.<number>|null} [packedFixed32] TestAllTypesProto3 packedFixed32
             * @property {Array.<number|Long>|null} [packedFixed64] TestAllTypesProto3 packedFixed64
             * @property {Array.<number>|null} [packedSfixed32] TestAllTypesProto3 packedSfixed32
             * @property {Array.<number|Long>|null} [packedSfixed64] TestAllTypesProto3 packedSfixed64
             * @property {Array.<number>|null} [packedFloat] TestAllTypesProto3 packedFloat
             * @property {Array.<number>|null} [packedDouble] TestAllTypesProto3 packedDouble
             * @property {Array.<boolean>|null} [packedBool] TestAllTypesProto3 packedBool
             * @property {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>|null} [packedNestedEnum] TestAllTypesProto3 packedNestedEnum
             * @property {Array.<number>|null} [unpackedInt32] TestAllTypesProto3 unpackedInt32
             * @property {Array.<number|Long>|null} [unpackedInt64] TestAllTypesProto3 unpackedInt64
             * @property {Array.<number>|null} [unpackedUint32] TestAllTypesProto3 unpackedUint32
             * @property {Array.<number|Long>|null} [unpackedUint64] TestAllTypesProto3 unpackedUint64
             * @property {Array.<number>|null} [unpackedSint32] TestAllTypesProto3 unpackedSint32
             * @property {Array.<number|Long>|null} [unpackedSint64] TestAllTypesProto3 unpackedSint64
             * @property {Array.<number>|null} [unpackedFixed32] TestAllTypesProto3 unpackedFixed32
             * @property {Array.<number|Long>|null} [unpackedFixed64] TestAllTypesProto3 unpackedFixed64
             * @property {Array.<number>|null} [unpackedSfixed32] TestAllTypesProto3 unpackedSfixed32
             * @property {Array.<number|Long>|null} [unpackedSfixed64] TestAllTypesProto3 unpackedSfixed64
             * @property {Array.<number>|null} [unpackedFloat] TestAllTypesProto3 unpackedFloat
             * @property {Array.<number>|null} [unpackedDouble] TestAllTypesProto3 unpackedDouble
             * @property {Array.<boolean>|null} [unpackedBool] TestAllTypesProto3 unpackedBool
             * @property {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>|null} [unpackedNestedEnum] TestAllTypesProto3 unpackedNestedEnum
             * @property {Object.<string,number>|null} [mapInt32Int32] TestAllTypesProto3 mapInt32Int32
             * @property {Object.<string,number|Long>|null} [mapInt64Int64] TestAllTypesProto3 mapInt64Int64
             * @property {Object.<string,number>|null} [mapUint32Uint32] TestAllTypesProto3 mapUint32Uint32
             * @property {Object.<string,number|Long>|null} [mapUint64Uint64] TestAllTypesProto3 mapUint64Uint64
             * @property {Object.<string,number>|null} [mapSint32Sint32] TestAllTypesProto3 mapSint32Sint32
             * @property {Object.<string,number|Long>|null} [mapSint64Sint64] TestAllTypesProto3 mapSint64Sint64
             * @property {Object.<string,number>|null} [mapFixed32Fixed32] TestAllTypesProto3 mapFixed32Fixed32
             * @property {Object.<string,number|Long>|null} [mapFixed64Fixed64] TestAllTypesProto3 mapFixed64Fixed64
             * @property {Object.<string,number>|null} [mapSfixed32Sfixed32] TestAllTypesProto3 mapSfixed32Sfixed32
             * @property {Object.<string,number|Long>|null} [mapSfixed64Sfixed64] TestAllTypesProto3 mapSfixed64Sfixed64
             * @property {Object.<string,number>|null} [mapInt32Float] TestAllTypesProto3 mapInt32Float
             * @property {Object.<string,number>|null} [mapInt32Double] TestAllTypesProto3 mapInt32Double
             * @property {Object.<string,boolean>|null} [mapBoolBool] TestAllTypesProto3 mapBoolBool
             * @property {Object.<string,string>|null} [mapStringString] TestAllTypesProto3 mapStringString
             * @property {Object.<string,Uint8Array>|null} [mapStringBytes] TestAllTypesProto3 mapStringBytes
             * @property {Object.<string,protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage>|null} [mapStringNestedMessage] TestAllTypesProto3 mapStringNestedMessage
             * @property {Object.<string,protobuf_test_messages.proto3.IForeignMessage>|null} [mapStringForeignMessage] TestAllTypesProto3 mapStringForeignMessage
             * @property {Object.<string,protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>|null} [mapStringNestedEnum] TestAllTypesProto3 mapStringNestedEnum
             * @property {Object.<string,protobuf_test_messages.proto3.ForeignEnum>|null} [mapStringForeignEnum] TestAllTypesProto3 mapStringForeignEnum
             * @property {number|null} [oneofUint32] TestAllTypesProto3 oneofUint32
             * @property {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null} [oneofNestedMessage] TestAllTypesProto3 oneofNestedMessage
             * @property {string|null} [oneofString] TestAllTypesProto3 oneofString
             * @property {Uint8Array|null} [oneofBytes] TestAllTypesProto3 oneofBytes
             * @property {boolean|null} [oneofBool] TestAllTypesProto3 oneofBool
             * @property {number|Long|null} [oneofUint64] TestAllTypesProto3 oneofUint64
             * @property {number|null} [oneofFloat] TestAllTypesProto3 oneofFloat
             * @property {number|null} [oneofDouble] TestAllTypesProto3 oneofDouble
             * @property {protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null} [oneofEnum] TestAllTypesProto3 oneofEnum
             * @property {google.protobuf.NullValue|null} [oneofNullValue] TestAllTypesProto3 oneofNullValue
             * @property {google.protobuf.IBoolValue|null} [optionalBoolWrapper] TestAllTypesProto3 optionalBoolWrapper
             * @property {google.protobuf.IInt32Value|null} [optionalInt32Wrapper] TestAllTypesProto3 optionalInt32Wrapper
             * @property {google.protobuf.IInt64Value|null} [optionalInt64Wrapper] TestAllTypesProto3 optionalInt64Wrapper
             * @property {google.protobuf.IUInt32Value|null} [optionalUint32Wrapper] TestAllTypesProto3 optionalUint32Wrapper
             * @property {google.protobuf.IUInt64Value|null} [optionalUint64Wrapper] TestAllTypesProto3 optionalUint64Wrapper
             * @property {google.protobuf.IFloatValue|null} [optionalFloatWrapper] TestAllTypesProto3 optionalFloatWrapper
             * @property {google.protobuf.IDoubleValue|null} [optionalDoubleWrapper] TestAllTypesProto3 optionalDoubleWrapper
             * @property {google.protobuf.IStringValue|null} [optionalStringWrapper] TestAllTypesProto3 optionalStringWrapper
             * @property {google.protobuf.IBytesValue|null} [optionalBytesWrapper] TestAllTypesProto3 optionalBytesWrapper
             * @property {Array.<google.protobuf.IBoolValue>|null} [repeatedBoolWrapper] TestAllTypesProto3 repeatedBoolWrapper
             * @property {Array.<google.protobuf.IInt32Value>|null} [repeatedInt32Wrapper] TestAllTypesProto3 repeatedInt32Wrapper
             * @property {Array.<google.protobuf.IInt64Value>|null} [repeatedInt64Wrapper] TestAllTypesProto3 repeatedInt64Wrapper
             * @property {Array.<google.protobuf.IUInt32Value>|null} [repeatedUint32Wrapper] TestAllTypesProto3 repeatedUint32Wrapper
             * @property {Array.<google.protobuf.IUInt64Value>|null} [repeatedUint64Wrapper] TestAllTypesProto3 repeatedUint64Wrapper
             * @property {Array.<google.protobuf.IFloatValue>|null} [repeatedFloatWrapper] TestAllTypesProto3 repeatedFloatWrapper
             * @property {Array.<google.protobuf.IDoubleValue>|null} [repeatedDoubleWrapper] TestAllTypesProto3 repeatedDoubleWrapper
             * @property {Array.<google.protobuf.IStringValue>|null} [repeatedStringWrapper] TestAllTypesProto3 repeatedStringWrapper
             * @property {Array.<google.protobuf.IBytesValue>|null} [repeatedBytesWrapper] TestAllTypesProto3 repeatedBytesWrapper
             * @property {google.protobuf.IDuration|null} [optionalDuration] TestAllTypesProto3 optionalDuration
             * @property {google.protobuf.ITimestamp|null} [optionalTimestamp] TestAllTypesProto3 optionalTimestamp
             * @property {google.protobuf.IFieldMask|null} [optionalFieldMask] TestAllTypesProto3 optionalFieldMask
             * @property {google.protobuf.IStruct|null} [optionalStruct] TestAllTypesProto3 optionalStruct
             * @property {google.protobuf.IAny|null} [optionalAny] TestAllTypesProto3 optionalAny
             * @property {google.protobuf.IValue|null} [optionalValue] TestAllTypesProto3 optionalValue
             * @property {google.protobuf.NullValue|null} [optionalNullValue] TestAllTypesProto3 optionalNullValue
             * @property {Array.<google.protobuf.IDuration>|null} [repeatedDuration] TestAllTypesProto3 repeatedDuration
             * @property {Array.<google.protobuf.ITimestamp>|null} [repeatedTimestamp] TestAllTypesProto3 repeatedTimestamp
             * @property {Array.<google.protobuf.IFieldMask>|null} [repeatedFieldmask] TestAllTypesProto3 repeatedFieldmask
             * @property {Array.<google.protobuf.IStruct>|null} [repeatedStruct] TestAllTypesProto3 repeatedStruct
             * @property {Array.<google.protobuf.IAny>|null} [repeatedAny] TestAllTypesProto3 repeatedAny
             * @property {Array.<google.protobuf.IValue>|null} [repeatedValue] TestAllTypesProto3 repeatedValue
             * @property {Array.<google.protobuf.IListValue>|null} [repeatedListValue] TestAllTypesProto3 repeatedListValue
             * @property {number|null} [fieldname1] TestAllTypesProto3 fieldname1
             * @property {number|null} [fieldName2] TestAllTypesProto3 fieldName2
             * @property {number|null} [_fieldName3] TestAllTypesProto3 _fieldName3
             * @property {number|null} [field_Name4_] TestAllTypesProto3 field_Name4_
             * @property {number|null} [field0name5] TestAllTypesProto3 field0name5
             * @property {number|null} [field_0Name6] TestAllTypesProto3 field_0Name6
             * @property {number|null} [fieldName7] TestAllTypesProto3 fieldName7
             * @property {number|null} [FieldName8] TestAllTypesProto3 FieldName8
             * @property {number|null} [field_Name9] TestAllTypesProto3 field_Name9
             * @property {number|null} [Field_Name10] TestAllTypesProto3 Field_Name10
             * @property {number|null} [FIELD_NAME11] TestAllTypesProto3 FIELD_NAME11
             * @property {number|null} [FIELDName12] TestAllTypesProto3 FIELDName12
             * @property {number|null} [_FieldName13] TestAllTypesProto3 _FieldName13
             * @property {number|null} [__FieldName14] TestAllTypesProto3 __FieldName14
             * @property {number|null} [field_Name15] TestAllTypesProto3 field_Name15
             * @property {number|null} [field__Name16] TestAllTypesProto3 field__Name16
             * @property {number|null} [fieldName17__] TestAllTypesProto3 fieldName17__
             * @property {number|null} [FieldName18__] TestAllTypesProto3 FieldName18__
             */

            /**
             * Constructs a new TestAllTypesProto3.
             * @memberof protobuf_test_messages.proto3
             * @classdesc Represents a TestAllTypesProto3.
             * @implements ITestAllTypesProto3
             * @constructor
             * @param {protobuf_test_messages.proto3.ITestAllTypesProto3=} [properties] Properties to set
             */
            function TestAllTypesProto3(properties) {
                this.repeatedInt32 = [];
                this.repeatedInt64 = [];
                this.repeatedUint32 = [];
                this.repeatedUint64 = [];
                this.repeatedSint32 = [];
                this.repeatedSint64 = [];
                this.repeatedFixed32 = [];
                this.repeatedFixed64 = [];
                this.repeatedSfixed32 = [];
                this.repeatedSfixed64 = [];
                this.repeatedFloat = [];
                this.repeatedDouble = [];
                this.repeatedBool = [];
                this.repeatedString = [];
                this.repeatedBytes = [];
                this.repeatedNestedMessage = [];
                this.repeatedForeignMessage = [];
                this.repeatedNestedEnum = [];
                this.repeatedForeignEnum = [];
                this.repeatedStringPiece = [];
                this.repeatedCord = [];
                this.packedInt32 = [];
                this.packedInt64 = [];
                this.packedUint32 = [];
                this.packedUint64 = [];
                this.packedSint32 = [];
                this.packedSint64 = [];
                this.packedFixed32 = [];
                this.packedFixed64 = [];
                this.packedSfixed32 = [];
                this.packedSfixed64 = [];
                this.packedFloat = [];
                this.packedDouble = [];
                this.packedBool = [];
                this.packedNestedEnum = [];
                this.unpackedInt32 = [];
                this.unpackedInt64 = [];
                this.unpackedUint32 = [];
                this.unpackedUint64 = [];
                this.unpackedSint32 = [];
                this.unpackedSint64 = [];
                this.unpackedFixed32 = [];
                this.unpackedFixed64 = [];
                this.unpackedSfixed32 = [];
                this.unpackedSfixed64 = [];
                this.unpackedFloat = [];
                this.unpackedDouble = [];
                this.unpackedBool = [];
                this.unpackedNestedEnum = [];
                this.mapInt32Int32 = {};
                this.mapInt64Int64 = {};
                this.mapUint32Uint32 = {};
                this.mapUint64Uint64 = {};
                this.mapSint32Sint32 = {};
                this.mapSint64Sint64 = {};
                this.mapFixed32Fixed32 = {};
                this.mapFixed64Fixed64 = {};
                this.mapSfixed32Sfixed32 = {};
                this.mapSfixed64Sfixed64 = {};
                this.mapInt32Float = {};
                this.mapInt32Double = {};
                this.mapBoolBool = {};
                this.mapStringString = {};
                this.mapStringBytes = {};
                this.mapStringNestedMessage = {};
                this.mapStringForeignMessage = {};
                this.mapStringNestedEnum = {};
                this.mapStringForeignEnum = {};
                this.repeatedBoolWrapper = [];
                this.repeatedInt32Wrapper = [];
                this.repeatedInt64Wrapper = [];
                this.repeatedUint32Wrapper = [];
                this.repeatedUint64Wrapper = [];
                this.repeatedFloatWrapper = [];
                this.repeatedDoubleWrapper = [];
                this.repeatedStringWrapper = [];
                this.repeatedBytesWrapper = [];
                this.repeatedDuration = [];
                this.repeatedTimestamp = [];
                this.repeatedFieldmask = [];
                this.repeatedStruct = [];
                this.repeatedAny = [];
                this.repeatedValue = [];
                this.repeatedListValue = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestAllTypesProto3 optionalInt32.
             * @member {number} optionalInt32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalInt32 = 0;

            /**
             * TestAllTypesProto3 optionalInt64.
             * @member {number|Long} optionalInt64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalInt64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto3 optionalUint32.
             * @member {number} optionalUint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalUint32 = 0;

            /**
             * TestAllTypesProto3 optionalUint64.
             * @member {number|Long} optionalUint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalUint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * TestAllTypesProto3 optionalSint32.
             * @member {number} optionalSint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalSint32 = 0;

            /**
             * TestAllTypesProto3 optionalSint64.
             * @member {number|Long} optionalSint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalSint64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto3 optionalFixed32.
             * @member {number} optionalFixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalFixed32 = 0;

            /**
             * TestAllTypesProto3 optionalFixed64.
             * @member {number|Long} optionalFixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalFixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto3 optionalSfixed32.
             * @member {number} optionalSfixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalSfixed32 = 0;

            /**
             * TestAllTypesProto3 optionalSfixed64.
             * @member {number|Long} optionalSfixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalSfixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto3 optionalFloat.
             * @member {number} optionalFloat
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalFloat = 0;

            /**
             * TestAllTypesProto3 optionalDouble.
             * @member {number} optionalDouble
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalDouble = 0;

            /**
             * TestAllTypesProto3 optionalBool.
             * @member {boolean} optionalBool
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalBool = false;

            /**
             * TestAllTypesProto3 optionalString.
             * @member {string} optionalString
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalString = "";

            /**
             * TestAllTypesProto3 optionalBytes.
             * @member {Uint8Array} optionalBytes
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalBytes = $util.newBuffer([]);

            /**
             * TestAllTypesProto3 optionalNestedMessage.
             * @member {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null|undefined} optionalNestedMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalNestedMessage = null;

            /**
             * TestAllTypesProto3 optionalForeignMessage.
             * @member {protobuf_test_messages.proto3.IForeignMessage|null|undefined} optionalForeignMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalForeignMessage = null;

            /**
             * TestAllTypesProto3 optionalNestedEnum.
             * @member {protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum} optionalNestedEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalNestedEnum = 0;

            /**
             * TestAllTypesProto3 optionalForeignEnum.
             * @member {protobuf_test_messages.proto3.ForeignEnum} optionalForeignEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalForeignEnum = 0;

            /**
             * TestAllTypesProto3 optionalAliasedEnum.
             * @member {protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum} optionalAliasedEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalAliasedEnum = 0;

            /**
             * TestAllTypesProto3 optionalStringPiece.
             * @member {string} optionalStringPiece
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalStringPiece = "";

            /**
             * TestAllTypesProto3 optionalCord.
             * @member {string} optionalCord
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalCord = "";

            /**
             * TestAllTypesProto3 recursiveMessage.
             * @member {protobuf_test_messages.proto3.ITestAllTypesProto3|null|undefined} recursiveMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.recursiveMessage = null;

            /**
             * TestAllTypesProto3 repeatedInt32.
             * @member {Array.<number>} repeatedInt32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedInt32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedInt64.
             * @member {Array.<number|Long>} repeatedInt64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedInt64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedUint32.
             * @member {Array.<number>} repeatedUint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedUint32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedUint64.
             * @member {Array.<number|Long>} repeatedUint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedUint64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedSint32.
             * @member {Array.<number>} repeatedSint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedSint32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedSint64.
             * @member {Array.<number|Long>} repeatedSint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedSint64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedFixed32.
             * @member {Array.<number>} repeatedFixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedFixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedFixed64.
             * @member {Array.<number|Long>} repeatedFixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedFixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedSfixed32.
             * @member {Array.<number>} repeatedSfixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedSfixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedSfixed64.
             * @member {Array.<number|Long>} repeatedSfixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedSfixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedFloat.
             * @member {Array.<number>} repeatedFloat
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedFloat = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedDouble.
             * @member {Array.<number>} repeatedDouble
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedDouble = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedBool.
             * @member {Array.<boolean>} repeatedBool
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedBool = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedString.
             * @member {Array.<string>} repeatedString
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedString = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedBytes.
             * @member {Array.<Uint8Array>} repeatedBytes
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedBytes = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedNestedMessage.
             * @member {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage>} repeatedNestedMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedNestedMessage = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedForeignMessage.
             * @member {Array.<protobuf_test_messages.proto3.IForeignMessage>} repeatedForeignMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedForeignMessage = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedNestedEnum.
             * @member {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>} repeatedNestedEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedNestedEnum = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedForeignEnum.
             * @member {Array.<protobuf_test_messages.proto3.ForeignEnum>} repeatedForeignEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedForeignEnum = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedStringPiece.
             * @member {Array.<string>} repeatedStringPiece
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedStringPiece = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedCord.
             * @member {Array.<string>} repeatedCord
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedCord = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedInt32.
             * @member {Array.<number>} packedInt32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedInt32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedInt64.
             * @member {Array.<number|Long>} packedInt64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedInt64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedUint32.
             * @member {Array.<number>} packedUint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedUint32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedUint64.
             * @member {Array.<number|Long>} packedUint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedUint64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedSint32.
             * @member {Array.<number>} packedSint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedSint32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedSint64.
             * @member {Array.<number|Long>} packedSint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedSint64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedFixed32.
             * @member {Array.<number>} packedFixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedFixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedFixed64.
             * @member {Array.<number|Long>} packedFixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedFixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedSfixed32.
             * @member {Array.<number>} packedSfixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedSfixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedSfixed64.
             * @member {Array.<number|Long>} packedSfixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedSfixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedFloat.
             * @member {Array.<number>} packedFloat
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedFloat = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedDouble.
             * @member {Array.<number>} packedDouble
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedDouble = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedBool.
             * @member {Array.<boolean>} packedBool
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedBool = $util.emptyArray;

            /**
             * TestAllTypesProto3 packedNestedEnum.
             * @member {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>} packedNestedEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.packedNestedEnum = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedInt32.
             * @member {Array.<number>} unpackedInt32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedInt32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedInt64.
             * @member {Array.<number|Long>} unpackedInt64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedInt64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedUint32.
             * @member {Array.<number>} unpackedUint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedUint32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedUint64.
             * @member {Array.<number|Long>} unpackedUint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedUint64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedSint32.
             * @member {Array.<number>} unpackedSint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedSint32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedSint64.
             * @member {Array.<number|Long>} unpackedSint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedSint64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedFixed32.
             * @member {Array.<number>} unpackedFixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedFixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedFixed64.
             * @member {Array.<number|Long>} unpackedFixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedFixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedSfixed32.
             * @member {Array.<number>} unpackedSfixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedSfixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedSfixed64.
             * @member {Array.<number|Long>} unpackedSfixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedSfixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedFloat.
             * @member {Array.<number>} unpackedFloat
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedFloat = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedDouble.
             * @member {Array.<number>} unpackedDouble
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedDouble = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedBool.
             * @member {Array.<boolean>} unpackedBool
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedBool = $util.emptyArray;

            /**
             * TestAllTypesProto3 unpackedNestedEnum.
             * @member {Array.<protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>} unpackedNestedEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.unpackedNestedEnum = $util.emptyArray;

            /**
             * TestAllTypesProto3 mapInt32Int32.
             * @member {Object.<string,number>} mapInt32Int32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapInt32Int32 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapInt64Int64.
             * @member {Object.<string,number|Long>} mapInt64Int64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapInt64Int64 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapUint32Uint32.
             * @member {Object.<string,number>} mapUint32Uint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapUint32Uint32 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapUint64Uint64.
             * @member {Object.<string,number|Long>} mapUint64Uint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapUint64Uint64 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapSint32Sint32.
             * @member {Object.<string,number>} mapSint32Sint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapSint32Sint32 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapSint64Sint64.
             * @member {Object.<string,number|Long>} mapSint64Sint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapSint64Sint64 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapFixed32Fixed32.
             * @member {Object.<string,number>} mapFixed32Fixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapFixed32Fixed32 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapFixed64Fixed64.
             * @member {Object.<string,number|Long>} mapFixed64Fixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapFixed64Fixed64 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapSfixed32Sfixed32.
             * @member {Object.<string,number>} mapSfixed32Sfixed32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapSfixed32Sfixed32 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapSfixed64Sfixed64.
             * @member {Object.<string,number|Long>} mapSfixed64Sfixed64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapSfixed64Sfixed64 = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapInt32Float.
             * @member {Object.<string,number>} mapInt32Float
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapInt32Float = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapInt32Double.
             * @member {Object.<string,number>} mapInt32Double
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapInt32Double = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapBoolBool.
             * @member {Object.<string,boolean>} mapBoolBool
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapBoolBool = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapStringString.
             * @member {Object.<string,string>} mapStringString
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapStringString = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapStringBytes.
             * @member {Object.<string,Uint8Array>} mapStringBytes
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapStringBytes = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapStringNestedMessage.
             * @member {Object.<string,protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage>} mapStringNestedMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapStringNestedMessage = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapStringForeignMessage.
             * @member {Object.<string,protobuf_test_messages.proto3.IForeignMessage>} mapStringForeignMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapStringForeignMessage = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapStringNestedEnum.
             * @member {Object.<string,protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum>} mapStringNestedEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapStringNestedEnum = $util.emptyObject;

            /**
             * TestAllTypesProto3 mapStringForeignEnum.
             * @member {Object.<string,protobuf_test_messages.proto3.ForeignEnum>} mapStringForeignEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.mapStringForeignEnum = $util.emptyObject;

            /**
             * TestAllTypesProto3 oneofUint32.
             * @member {number|null|undefined} oneofUint32
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofUint32 = null;

            /**
             * TestAllTypesProto3 oneofNestedMessage.
             * @member {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage|null|undefined} oneofNestedMessage
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofNestedMessage = null;

            /**
             * TestAllTypesProto3 oneofString.
             * @member {string|null|undefined} oneofString
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofString = null;

            /**
             * TestAllTypesProto3 oneofBytes.
             * @member {Uint8Array|null|undefined} oneofBytes
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofBytes = null;

            /**
             * TestAllTypesProto3 oneofBool.
             * @member {boolean|null|undefined} oneofBool
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofBool = null;

            /**
             * TestAllTypesProto3 oneofUint64.
             * @member {number|Long|null|undefined} oneofUint64
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofUint64 = null;

            /**
             * TestAllTypesProto3 oneofFloat.
             * @member {number|null|undefined} oneofFloat
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofFloat = null;

            /**
             * TestAllTypesProto3 oneofDouble.
             * @member {number|null|undefined} oneofDouble
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofDouble = null;

            /**
             * TestAllTypesProto3 oneofEnum.
             * @member {protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum|null|undefined} oneofEnum
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofEnum = null;

            /**
             * TestAllTypesProto3 oneofNullValue.
             * @member {google.protobuf.NullValue|null|undefined} oneofNullValue
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.oneofNullValue = null;

            /**
             * TestAllTypesProto3 optionalBoolWrapper.
             * @member {google.protobuf.IBoolValue|null|undefined} optionalBoolWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalBoolWrapper = null;

            /**
             * TestAllTypesProto3 optionalInt32Wrapper.
             * @member {google.protobuf.IInt32Value|null|undefined} optionalInt32Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalInt32Wrapper = null;

            /**
             * TestAllTypesProto3 optionalInt64Wrapper.
             * @member {google.protobuf.IInt64Value|null|undefined} optionalInt64Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalInt64Wrapper = null;

            /**
             * TestAllTypesProto3 optionalUint32Wrapper.
             * @member {google.protobuf.IUInt32Value|null|undefined} optionalUint32Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalUint32Wrapper = null;

            /**
             * TestAllTypesProto3 optionalUint64Wrapper.
             * @member {google.protobuf.IUInt64Value|null|undefined} optionalUint64Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalUint64Wrapper = null;

            /**
             * TestAllTypesProto3 optionalFloatWrapper.
             * @member {google.protobuf.IFloatValue|null|undefined} optionalFloatWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalFloatWrapper = null;

            /**
             * TestAllTypesProto3 optionalDoubleWrapper.
             * @member {google.protobuf.IDoubleValue|null|undefined} optionalDoubleWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalDoubleWrapper = null;

            /**
             * TestAllTypesProto3 optionalStringWrapper.
             * @member {google.protobuf.IStringValue|null|undefined} optionalStringWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalStringWrapper = null;

            /**
             * TestAllTypesProto3 optionalBytesWrapper.
             * @member {google.protobuf.IBytesValue|null|undefined} optionalBytesWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalBytesWrapper = null;

            /**
             * TestAllTypesProto3 repeatedBoolWrapper.
             * @member {Array.<google.protobuf.IBoolValue>} repeatedBoolWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedBoolWrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedInt32Wrapper.
             * @member {Array.<google.protobuf.IInt32Value>} repeatedInt32Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedInt32Wrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedInt64Wrapper.
             * @member {Array.<google.protobuf.IInt64Value>} repeatedInt64Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedInt64Wrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedUint32Wrapper.
             * @member {Array.<google.protobuf.IUInt32Value>} repeatedUint32Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedUint32Wrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedUint64Wrapper.
             * @member {Array.<google.protobuf.IUInt64Value>} repeatedUint64Wrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedUint64Wrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedFloatWrapper.
             * @member {Array.<google.protobuf.IFloatValue>} repeatedFloatWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedFloatWrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedDoubleWrapper.
             * @member {Array.<google.protobuf.IDoubleValue>} repeatedDoubleWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedDoubleWrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedStringWrapper.
             * @member {Array.<google.protobuf.IStringValue>} repeatedStringWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedStringWrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedBytesWrapper.
             * @member {Array.<google.protobuf.IBytesValue>} repeatedBytesWrapper
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedBytesWrapper = $util.emptyArray;

            /**
             * TestAllTypesProto3 optionalDuration.
             * @member {google.protobuf.IDuration|null|undefined} optionalDuration
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalDuration = null;

            /**
             * TestAllTypesProto3 optionalTimestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} optionalTimestamp
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalTimestamp = null;

            /**
             * TestAllTypesProto3 optionalFieldMask.
             * @member {google.protobuf.IFieldMask|null|undefined} optionalFieldMask
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalFieldMask = null;

            /**
             * TestAllTypesProto3 optionalStruct.
             * @member {google.protobuf.IStruct|null|undefined} optionalStruct
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalStruct = null;

            /**
             * TestAllTypesProto3 optionalAny.
             * @member {google.protobuf.IAny|null|undefined} optionalAny
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalAny = null;

            /**
             * TestAllTypesProto3 optionalValue.
             * @member {google.protobuf.IValue|null|undefined} optionalValue
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalValue = null;

            /**
             * TestAllTypesProto3 optionalNullValue.
             * @member {google.protobuf.NullValue} optionalNullValue
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.optionalNullValue = 0;

            /**
             * TestAllTypesProto3 repeatedDuration.
             * @member {Array.<google.protobuf.IDuration>} repeatedDuration
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedDuration = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedTimestamp.
             * @member {Array.<google.protobuf.ITimestamp>} repeatedTimestamp
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedTimestamp = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedFieldmask.
             * @member {Array.<google.protobuf.IFieldMask>} repeatedFieldmask
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedFieldmask = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedStruct.
             * @member {Array.<google.protobuf.IStruct>} repeatedStruct
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedStruct = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedAny.
             * @member {Array.<google.protobuf.IAny>} repeatedAny
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedAny = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedValue.
             * @member {Array.<google.protobuf.IValue>} repeatedValue
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedValue = $util.emptyArray;

            /**
             * TestAllTypesProto3 repeatedListValue.
             * @member {Array.<google.protobuf.IListValue>} repeatedListValue
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.repeatedListValue = $util.emptyArray;

            /**
             * TestAllTypesProto3 fieldname1.
             * @member {number} fieldname1
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.fieldname1 = 0;

            /**
             * TestAllTypesProto3 fieldName2.
             * @member {number} fieldName2
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.fieldName2 = 0;

            /**
             * TestAllTypesProto3 _fieldName3.
             * @member {number} _fieldName3
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype._fieldName3 = 0;

            /**
             * TestAllTypesProto3 field_Name4_.
             * @member {number} field_Name4_
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.field_Name4_ = 0;

            /**
             * TestAllTypesProto3 field0name5.
             * @member {number} field0name5
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.field0name5 = 0;

            /**
             * TestAllTypesProto3 field_0Name6.
             * @member {number} field_0Name6
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.field_0Name6 = 0;

            /**
             * TestAllTypesProto3 fieldName7.
             * @member {number} fieldName7
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.fieldName7 = 0;

            /**
             * TestAllTypesProto3 FieldName8.
             * @member {number} FieldName8
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.FieldName8 = 0;

            /**
             * TestAllTypesProto3 field_Name9.
             * @member {number} field_Name9
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.field_Name9 = 0;

            /**
             * TestAllTypesProto3 Field_Name10.
             * @member {number} Field_Name10
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.Field_Name10 = 0;

            /**
             * TestAllTypesProto3 FIELD_NAME11.
             * @member {number} FIELD_NAME11
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.FIELD_NAME11 = 0;

            /**
             * TestAllTypesProto3 FIELDName12.
             * @member {number} FIELDName12
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.FIELDName12 = 0;

            /**
             * TestAllTypesProto3 _FieldName13.
             * @member {number} _FieldName13
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype._FieldName13 = 0;

            /**
             * TestAllTypesProto3 __FieldName14.
             * @member {number} __FieldName14
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.__FieldName14 = 0;

            /**
             * TestAllTypesProto3 field_Name15.
             * @member {number} field_Name15
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.field_Name15 = 0;

            /**
             * TestAllTypesProto3 field__Name16.
             * @member {number} field__Name16
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.field__Name16 = 0;

            /**
             * TestAllTypesProto3 fieldName17__.
             * @member {number} fieldName17__
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.fieldName17__ = 0;

            /**
             * TestAllTypesProto3 FieldName18__.
             * @member {number} FieldName18__
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            TestAllTypesProto3.prototype.FieldName18__ = 0;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TestAllTypesProto3 oneofField.
             * @member {"oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|"oneofNullValue"|undefined} oneofField
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             */
            Object.defineProperty(TestAllTypesProto3.prototype, "oneofField", {
                get: $util.oneOfGetter($oneOfFields = ["oneofUint32", "oneofNestedMessage", "oneofString", "oneofBytes", "oneofBool", "oneofUint64", "oneofFloat", "oneofDouble", "oneofEnum", "oneofNullValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TestAllTypesProto3 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {protobuf_test_messages.proto3.ITestAllTypesProto3=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto3.TestAllTypesProto3} TestAllTypesProto3 instance
             */
            TestAllTypesProto3.create = function create(properties) {
                return new TestAllTypesProto3(properties);
            };

            /**
             * Encodes the specified TestAllTypesProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {protobuf_test_messages.proto3.ITestAllTypesProto3} message TestAllTypesProto3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestAllTypesProto3.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.optionalInt32 != null && Object.hasOwnProperty.call(message, "optionalInt32"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.optionalInt32);
                if (message.optionalInt64 != null && Object.hasOwnProperty.call(message, "optionalInt64"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.optionalInt64);
                if (message.optionalUint32 != null && Object.hasOwnProperty.call(message, "optionalUint32"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.optionalUint32);
                if (message.optionalUint64 != null && Object.hasOwnProperty.call(message, "optionalUint64"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.optionalUint64);
                if (message.optionalSint32 != null && Object.hasOwnProperty.call(message, "optionalSint32"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.optionalSint32);
                if (message.optionalSint64 != null && Object.hasOwnProperty.call(message, "optionalSint64"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.optionalSint64);
                if (message.optionalFixed32 != null && Object.hasOwnProperty.call(message, "optionalFixed32"))
                    writer.uint32(/* id 7, wireType 5 =*/61).fixed32(message.optionalFixed32);
                if (message.optionalFixed64 != null && Object.hasOwnProperty.call(message, "optionalFixed64"))
                    writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.optionalFixed64);
                if (message.optionalSfixed32 != null && Object.hasOwnProperty.call(message, "optionalSfixed32"))
                    writer.uint32(/* id 9, wireType 5 =*/77).sfixed32(message.optionalSfixed32);
                if (message.optionalSfixed64 != null && Object.hasOwnProperty.call(message, "optionalSfixed64"))
                    writer.uint32(/* id 10, wireType 1 =*/81).sfixed64(message.optionalSfixed64);
                if (message.optionalFloat != null && Object.hasOwnProperty.call(message, "optionalFloat"))
                    writer.uint32(/* id 11, wireType 5 =*/93).float(message.optionalFloat);
                if (message.optionalDouble != null && Object.hasOwnProperty.call(message, "optionalDouble"))
                    writer.uint32(/* id 12, wireType 1 =*/97).double(message.optionalDouble);
                if (message.optionalBool != null && Object.hasOwnProperty.call(message, "optionalBool"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.optionalBool);
                if (message.optionalString != null && Object.hasOwnProperty.call(message, "optionalString"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.optionalString);
                if (message.optionalBytes != null && Object.hasOwnProperty.call(message, "optionalBytes"))
                    writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.optionalBytes);
                if (message.optionalNestedMessage != null && Object.hasOwnProperty.call(message, "optionalNestedMessage"))
                    $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.encode(message.optionalNestedMessage, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.optionalForeignMessage != null && Object.hasOwnProperty.call(message, "optionalForeignMessage"))
                    $root.protobuf_test_messages.proto3.ForeignMessage.encode(message.optionalForeignMessage, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.optionalNestedEnum != null && Object.hasOwnProperty.call(message, "optionalNestedEnum"))
                    writer.uint32(/* id 21, wireType 0 =*/168).int32(message.optionalNestedEnum);
                if (message.optionalForeignEnum != null && Object.hasOwnProperty.call(message, "optionalForeignEnum"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.optionalForeignEnum);
                if (message.optionalAliasedEnum != null && Object.hasOwnProperty.call(message, "optionalAliasedEnum"))
                    writer.uint32(/* id 23, wireType 0 =*/184).int32(message.optionalAliasedEnum);
                if (message.optionalStringPiece != null && Object.hasOwnProperty.call(message, "optionalStringPiece"))
                    writer.uint32(/* id 24, wireType 2 =*/194).string(message.optionalStringPiece);
                if (message.optionalCord != null && Object.hasOwnProperty.call(message, "optionalCord"))
                    writer.uint32(/* id 25, wireType 2 =*/202).string(message.optionalCord);
                if (message.recursiveMessage != null && Object.hasOwnProperty.call(message, "recursiveMessage"))
                    $root.protobuf_test_messages.proto3.TestAllTypesProto3.encode(message.recursiveMessage, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                if (message.repeatedInt32 != null && message.repeatedInt32.length) {
                    writer.uint32(/* id 31, wireType 2 =*/250).fork();
                    for (let i = 0; i < message.repeatedInt32.length; ++i)
                        writer.int32(message.repeatedInt32[i]);
                    writer.ldelim();
                }
                if (message.repeatedInt64 != null && message.repeatedInt64.length) {
                    writer.uint32(/* id 32, wireType 2 =*/258).fork();
                    for (let i = 0; i < message.repeatedInt64.length; ++i)
                        writer.int64(message.repeatedInt64[i]);
                    writer.ldelim();
                }
                if (message.repeatedUint32 != null && message.repeatedUint32.length) {
                    writer.uint32(/* id 33, wireType 2 =*/266).fork();
                    for (let i = 0; i < message.repeatedUint32.length; ++i)
                        writer.uint32(message.repeatedUint32[i]);
                    writer.ldelim();
                }
                if (message.repeatedUint64 != null && message.repeatedUint64.length) {
                    writer.uint32(/* id 34, wireType 2 =*/274).fork();
                    for (let i = 0; i < message.repeatedUint64.length; ++i)
                        writer.uint64(message.repeatedUint64[i]);
                    writer.ldelim();
                }
                if (message.repeatedSint32 != null && message.repeatedSint32.length) {
                    writer.uint32(/* id 35, wireType 2 =*/282).fork();
                    for (let i = 0; i < message.repeatedSint32.length; ++i)
                        writer.sint32(message.repeatedSint32[i]);
                    writer.ldelim();
                }
                if (message.repeatedSint64 != null && message.repeatedSint64.length) {
                    writer.uint32(/* id 36, wireType 2 =*/290).fork();
                    for (let i = 0; i < message.repeatedSint64.length; ++i)
                        writer.sint64(message.repeatedSint64[i]);
                    writer.ldelim();
                }
                if (message.repeatedFixed32 != null && message.repeatedFixed32.length) {
                    writer.uint32(/* id 37, wireType 2 =*/298).fork();
                    for (let i = 0; i < message.repeatedFixed32.length; ++i)
                        writer.fixed32(message.repeatedFixed32[i]);
                    writer.ldelim();
                }
                if (message.repeatedFixed64 != null && message.repeatedFixed64.length) {
                    writer.uint32(/* id 38, wireType 2 =*/306).fork();
                    for (let i = 0; i < message.repeatedFixed64.length; ++i)
                        writer.fixed64(message.repeatedFixed64[i]);
                    writer.ldelim();
                }
                if (message.repeatedSfixed32 != null && message.repeatedSfixed32.length) {
                    writer.uint32(/* id 39, wireType 2 =*/314).fork();
                    for (let i = 0; i < message.repeatedSfixed32.length; ++i)
                        writer.sfixed32(message.repeatedSfixed32[i]);
                    writer.ldelim();
                }
                if (message.repeatedSfixed64 != null && message.repeatedSfixed64.length) {
                    writer.uint32(/* id 40, wireType 2 =*/322).fork();
                    for (let i = 0; i < message.repeatedSfixed64.length; ++i)
                        writer.sfixed64(message.repeatedSfixed64[i]);
                    writer.ldelim();
                }
                if (message.repeatedFloat != null && message.repeatedFloat.length) {
                    writer.uint32(/* id 41, wireType 2 =*/330).fork();
                    for (let i = 0; i < message.repeatedFloat.length; ++i)
                        writer.float(message.repeatedFloat[i]);
                    writer.ldelim();
                }
                if (message.repeatedDouble != null && message.repeatedDouble.length) {
                    writer.uint32(/* id 42, wireType 2 =*/338).fork();
                    for (let i = 0; i < message.repeatedDouble.length; ++i)
                        writer.double(message.repeatedDouble[i]);
                    writer.ldelim();
                }
                if (message.repeatedBool != null && message.repeatedBool.length) {
                    writer.uint32(/* id 43, wireType 2 =*/346).fork();
                    for (let i = 0; i < message.repeatedBool.length; ++i)
                        writer.bool(message.repeatedBool[i]);
                    writer.ldelim();
                }
                if (message.repeatedString != null && message.repeatedString.length)
                    for (let i = 0; i < message.repeatedString.length; ++i)
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.repeatedString[i]);
                if (message.repeatedBytes != null && message.repeatedBytes.length)
                    for (let i = 0; i < message.repeatedBytes.length; ++i)
                        writer.uint32(/* id 45, wireType 2 =*/362).bytes(message.repeatedBytes[i]);
                if (message.repeatedNestedMessage != null && message.repeatedNestedMessage.length)
                    for (let i = 0; i < message.repeatedNestedMessage.length; ++i)
                        $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.encode(message.repeatedNestedMessage[i], writer.uint32(/* id 48, wireType 2 =*/386).fork()).ldelim();
                if (message.repeatedForeignMessage != null && message.repeatedForeignMessage.length)
                    for (let i = 0; i < message.repeatedForeignMessage.length; ++i)
                        $root.protobuf_test_messages.proto3.ForeignMessage.encode(message.repeatedForeignMessage[i], writer.uint32(/* id 49, wireType 2 =*/394).fork()).ldelim();
                if (message.repeatedNestedEnum != null && message.repeatedNestedEnum.length) {
                    writer.uint32(/* id 51, wireType 2 =*/410).fork();
                    for (let i = 0; i < message.repeatedNestedEnum.length; ++i)
                        writer.int32(message.repeatedNestedEnum[i]);
                    writer.ldelim();
                }
                if (message.repeatedForeignEnum != null && message.repeatedForeignEnum.length) {
                    writer.uint32(/* id 52, wireType 2 =*/418).fork();
                    for (let i = 0; i < message.repeatedForeignEnum.length; ++i)
                        writer.int32(message.repeatedForeignEnum[i]);
                    writer.ldelim();
                }
                if (message.repeatedStringPiece != null && message.repeatedStringPiece.length)
                    for (let i = 0; i < message.repeatedStringPiece.length; ++i)
                        writer.uint32(/* id 54, wireType 2 =*/434).string(message.repeatedStringPiece[i]);
                if (message.repeatedCord != null && message.repeatedCord.length)
                    for (let i = 0; i < message.repeatedCord.length; ++i)
                        writer.uint32(/* id 55, wireType 2 =*/442).string(message.repeatedCord[i]);
                if (message.mapInt32Int32 != null && Object.hasOwnProperty.call(message, "mapInt32Int32"))
                    for (let keys = Object.keys(message.mapInt32Int32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 56, wireType 2 =*/450).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapInt32Int32[keys[i]]).ldelim();
                if (message.mapInt64Int64 != null && Object.hasOwnProperty.call(message, "mapInt64Int64"))
                    for (let keys = Object.keys(message.mapInt64Int64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 57, wireType 2 =*/458).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.mapInt64Int64[keys[i]]).ldelim();
                if (message.mapUint32Uint32 != null && Object.hasOwnProperty.call(message, "mapUint32Uint32"))
                    for (let keys = Object.keys(message.mapUint32Uint32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 58, wireType 2 =*/466).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.mapUint32Uint32[keys[i]]).ldelim();
                if (message.mapUint64Uint64 != null && Object.hasOwnProperty.call(message, "mapUint64Uint64"))
                    for (let keys = Object.keys(message.mapUint64Uint64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 59, wireType 2 =*/474).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.mapUint64Uint64[keys[i]]).ldelim();
                if (message.mapSint32Sint32 != null && Object.hasOwnProperty.call(message, "mapSint32Sint32"))
                    for (let keys = Object.keys(message.mapSint32Sint32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 60, wireType 2 =*/482).fork().uint32(/* id 1, wireType 0 =*/8).sint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).sint32(message.mapSint32Sint32[keys[i]]).ldelim();
                if (message.mapSint64Sint64 != null && Object.hasOwnProperty.call(message, "mapSint64Sint64"))
                    for (let keys = Object.keys(message.mapSint64Sint64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 61, wireType 2 =*/490).fork().uint32(/* id 1, wireType 0 =*/8).sint64(keys[i]).uint32(/* id 2, wireType 0 =*/16).sint64(message.mapSint64Sint64[keys[i]]).ldelim();
                if (message.mapFixed32Fixed32 != null && Object.hasOwnProperty.call(message, "mapFixed32Fixed32"))
                    for (let keys = Object.keys(message.mapFixed32Fixed32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 62, wireType 2 =*/498).fork().uint32(/* id 1, wireType 5 =*/13).fixed32(keys[i]).uint32(/* id 2, wireType 5 =*/21).fixed32(message.mapFixed32Fixed32[keys[i]]).ldelim();
                if (message.mapFixed64Fixed64 != null && Object.hasOwnProperty.call(message, "mapFixed64Fixed64"))
                    for (let keys = Object.keys(message.mapFixed64Fixed64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 63, wireType 2 =*/506).fork().uint32(/* id 1, wireType 1 =*/9).fixed64(keys[i]).uint32(/* id 2, wireType 1 =*/17).fixed64(message.mapFixed64Fixed64[keys[i]]).ldelim();
                if (message.mapSfixed32Sfixed32 != null && Object.hasOwnProperty.call(message, "mapSfixed32Sfixed32"))
                    for (let keys = Object.keys(message.mapSfixed32Sfixed32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 64, wireType 2 =*/514).fork().uint32(/* id 1, wireType 5 =*/13).sfixed32(keys[i]).uint32(/* id 2, wireType 5 =*/21).sfixed32(message.mapSfixed32Sfixed32[keys[i]]).ldelim();
                if (message.mapSfixed64Sfixed64 != null && Object.hasOwnProperty.call(message, "mapSfixed64Sfixed64"))
                    for (let keys = Object.keys(message.mapSfixed64Sfixed64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 65, wireType 2 =*/522).fork().uint32(/* id 1, wireType 1 =*/9).sfixed64(keys[i]).uint32(/* id 2, wireType 1 =*/17).sfixed64(message.mapSfixed64Sfixed64[keys[i]]).ldelim();
                if (message.mapInt32Float != null && Object.hasOwnProperty.call(message, "mapInt32Float"))
                    for (let keys = Object.keys(message.mapInt32Float), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 66, wireType 2 =*/530).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 5 =*/21).float(message.mapInt32Float[keys[i]]).ldelim();
                if (message.mapInt32Double != null && Object.hasOwnProperty.call(message, "mapInt32Double"))
                    for (let keys = Object.keys(message.mapInt32Double), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 67, wireType 2 =*/538).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.mapInt32Double[keys[i]]).ldelim();
                if (message.mapBoolBool != null && Object.hasOwnProperty.call(message, "mapBoolBool"))
                    for (let keys = Object.keys(message.mapBoolBool), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 68, wireType 2 =*/546).fork().uint32(/* id 1, wireType 0 =*/8).bool(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.mapBoolBool[keys[i]]).ldelim();
                if (message.mapStringString != null && Object.hasOwnProperty.call(message, "mapStringString"))
                    for (let keys = Object.keys(message.mapStringString), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 69, wireType 2 =*/554).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapStringString[keys[i]]).ldelim();
                if (message.mapStringBytes != null && Object.hasOwnProperty.call(message, "mapStringBytes"))
                    for (let keys = Object.keys(message.mapStringBytes), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 70, wireType 2 =*/562).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.mapStringBytes[keys[i]]).ldelim();
                if (message.mapStringNestedMessage != null && Object.hasOwnProperty.call(message, "mapStringNestedMessage"))
                    for (let keys = Object.keys(message.mapStringNestedMessage), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 71, wireType 2 =*/570).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.encode(message.mapStringNestedMessage[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.mapStringForeignMessage != null && Object.hasOwnProperty.call(message, "mapStringForeignMessage"))
                    for (let keys = Object.keys(message.mapStringForeignMessage), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 72, wireType 2 =*/578).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.protobuf_test_messages.proto3.ForeignMessage.encode(message.mapStringForeignMessage[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.mapStringNestedEnum != null && Object.hasOwnProperty.call(message, "mapStringNestedEnum"))
                    for (let keys = Object.keys(message.mapStringNestedEnum), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 73, wireType 2 =*/586).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringNestedEnum[keys[i]]).ldelim();
                if (message.mapStringForeignEnum != null && Object.hasOwnProperty.call(message, "mapStringForeignEnum"))
                    for (let keys = Object.keys(message.mapStringForeignEnum), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 74, wireType 2 =*/594).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringForeignEnum[keys[i]]).ldelim();
                if (message.packedInt32 != null && message.packedInt32.length) {
                    writer.uint32(/* id 75, wireType 2 =*/602).fork();
                    for (let i = 0; i < message.packedInt32.length; ++i)
                        writer.int32(message.packedInt32[i]);
                    writer.ldelim();
                }
                if (message.packedInt64 != null && message.packedInt64.length) {
                    writer.uint32(/* id 76, wireType 2 =*/610).fork();
                    for (let i = 0; i < message.packedInt64.length; ++i)
                        writer.int64(message.packedInt64[i]);
                    writer.ldelim();
                }
                if (message.packedUint32 != null && message.packedUint32.length) {
                    writer.uint32(/* id 77, wireType 2 =*/618).fork();
                    for (let i = 0; i < message.packedUint32.length; ++i)
                        writer.uint32(message.packedUint32[i]);
                    writer.ldelim();
                }
                if (message.packedUint64 != null && message.packedUint64.length) {
                    writer.uint32(/* id 78, wireType 2 =*/626).fork();
                    for (let i = 0; i < message.packedUint64.length; ++i)
                        writer.uint64(message.packedUint64[i]);
                    writer.ldelim();
                }
                if (message.packedSint32 != null && message.packedSint32.length) {
                    writer.uint32(/* id 79, wireType 2 =*/634).fork();
                    for (let i = 0; i < message.packedSint32.length; ++i)
                        writer.sint32(message.packedSint32[i]);
                    writer.ldelim();
                }
                if (message.packedSint64 != null && message.packedSint64.length) {
                    writer.uint32(/* id 80, wireType 2 =*/642).fork();
                    for (let i = 0; i < message.packedSint64.length; ++i)
                        writer.sint64(message.packedSint64[i]);
                    writer.ldelim();
                }
                if (message.packedFixed32 != null && message.packedFixed32.length) {
                    writer.uint32(/* id 81, wireType 2 =*/650).fork();
                    for (let i = 0; i < message.packedFixed32.length; ++i)
                        writer.fixed32(message.packedFixed32[i]);
                    writer.ldelim();
                }
                if (message.packedFixed64 != null && message.packedFixed64.length) {
                    writer.uint32(/* id 82, wireType 2 =*/658).fork();
                    for (let i = 0; i < message.packedFixed64.length; ++i)
                        writer.fixed64(message.packedFixed64[i]);
                    writer.ldelim();
                }
                if (message.packedSfixed32 != null && message.packedSfixed32.length) {
                    writer.uint32(/* id 83, wireType 2 =*/666).fork();
                    for (let i = 0; i < message.packedSfixed32.length; ++i)
                        writer.sfixed32(message.packedSfixed32[i]);
                    writer.ldelim();
                }
                if (message.packedSfixed64 != null && message.packedSfixed64.length) {
                    writer.uint32(/* id 84, wireType 2 =*/674).fork();
                    for (let i = 0; i < message.packedSfixed64.length; ++i)
                        writer.sfixed64(message.packedSfixed64[i]);
                    writer.ldelim();
                }
                if (message.packedFloat != null && message.packedFloat.length) {
                    writer.uint32(/* id 85, wireType 2 =*/682).fork();
                    for (let i = 0; i < message.packedFloat.length; ++i)
                        writer.float(message.packedFloat[i]);
                    writer.ldelim();
                }
                if (message.packedDouble != null && message.packedDouble.length) {
                    writer.uint32(/* id 86, wireType 2 =*/690).fork();
                    for (let i = 0; i < message.packedDouble.length; ++i)
                        writer.double(message.packedDouble[i]);
                    writer.ldelim();
                }
                if (message.packedBool != null && message.packedBool.length) {
                    writer.uint32(/* id 87, wireType 2 =*/698).fork();
                    for (let i = 0; i < message.packedBool.length; ++i)
                        writer.bool(message.packedBool[i]);
                    writer.ldelim();
                }
                if (message.packedNestedEnum != null && message.packedNestedEnum.length) {
                    writer.uint32(/* id 88, wireType 2 =*/706).fork();
                    for (let i = 0; i < message.packedNestedEnum.length; ++i)
                        writer.int32(message.packedNestedEnum[i]);
                    writer.ldelim();
                }
                if (message.unpackedInt32 != null && message.unpackedInt32.length)
                    for (let i = 0; i < message.unpackedInt32.length; ++i)
                        writer.uint32(/* id 89, wireType 0 =*/712).int32(message.unpackedInt32[i]);
                if (message.unpackedInt64 != null && message.unpackedInt64.length)
                    for (let i = 0; i < message.unpackedInt64.length; ++i)
                        writer.uint32(/* id 90, wireType 0 =*/720).int64(message.unpackedInt64[i]);
                if (message.unpackedUint32 != null && message.unpackedUint32.length)
                    for (let i = 0; i < message.unpackedUint32.length; ++i)
                        writer.uint32(/* id 91, wireType 0 =*/728).uint32(message.unpackedUint32[i]);
                if (message.unpackedUint64 != null && message.unpackedUint64.length)
                    for (let i = 0; i < message.unpackedUint64.length; ++i)
                        writer.uint32(/* id 92, wireType 0 =*/736).uint64(message.unpackedUint64[i]);
                if (message.unpackedSint32 != null && message.unpackedSint32.length)
                    for (let i = 0; i < message.unpackedSint32.length; ++i)
                        writer.uint32(/* id 93, wireType 0 =*/744).sint32(message.unpackedSint32[i]);
                if (message.unpackedSint64 != null && message.unpackedSint64.length)
                    for (let i = 0; i < message.unpackedSint64.length; ++i)
                        writer.uint32(/* id 94, wireType 0 =*/752).sint64(message.unpackedSint64[i]);
                if (message.unpackedFixed32 != null && message.unpackedFixed32.length)
                    for (let i = 0; i < message.unpackedFixed32.length; ++i)
                        writer.uint32(/* id 95, wireType 5 =*/765).fixed32(message.unpackedFixed32[i]);
                if (message.unpackedFixed64 != null && message.unpackedFixed64.length)
                    for (let i = 0; i < message.unpackedFixed64.length; ++i)
                        writer.uint32(/* id 96, wireType 1 =*/769).fixed64(message.unpackedFixed64[i]);
                if (message.unpackedSfixed32 != null && message.unpackedSfixed32.length)
                    for (let i = 0; i < message.unpackedSfixed32.length; ++i)
                        writer.uint32(/* id 97, wireType 5 =*/781).sfixed32(message.unpackedSfixed32[i]);
                if (message.unpackedSfixed64 != null && message.unpackedSfixed64.length)
                    for (let i = 0; i < message.unpackedSfixed64.length; ++i)
                        writer.uint32(/* id 98, wireType 1 =*/785).sfixed64(message.unpackedSfixed64[i]);
                if (message.unpackedFloat != null && message.unpackedFloat.length)
                    for (let i = 0; i < message.unpackedFloat.length; ++i)
                        writer.uint32(/* id 99, wireType 5 =*/797).float(message.unpackedFloat[i]);
                if (message.unpackedDouble != null && message.unpackedDouble.length)
                    for (let i = 0; i < message.unpackedDouble.length; ++i)
                        writer.uint32(/* id 100, wireType 1 =*/801).double(message.unpackedDouble[i]);
                if (message.unpackedBool != null && message.unpackedBool.length)
                    for (let i = 0; i < message.unpackedBool.length; ++i)
                        writer.uint32(/* id 101, wireType 0 =*/808).bool(message.unpackedBool[i]);
                if (message.unpackedNestedEnum != null && message.unpackedNestedEnum.length)
                    for (let i = 0; i < message.unpackedNestedEnum.length; ++i)
                        writer.uint32(/* id 102, wireType 0 =*/816).int32(message.unpackedNestedEnum[i]);
                if (message.oneofUint32 != null && Object.hasOwnProperty.call(message, "oneofUint32"))
                    writer.uint32(/* id 111, wireType 0 =*/888).uint32(message.oneofUint32);
                if (message.oneofNestedMessage != null && Object.hasOwnProperty.call(message, "oneofNestedMessage"))
                    $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.encode(message.oneofNestedMessage, writer.uint32(/* id 112, wireType 2 =*/898).fork()).ldelim();
                if (message.oneofString != null && Object.hasOwnProperty.call(message, "oneofString"))
                    writer.uint32(/* id 113, wireType 2 =*/906).string(message.oneofString);
                if (message.oneofBytes != null && Object.hasOwnProperty.call(message, "oneofBytes"))
                    writer.uint32(/* id 114, wireType 2 =*/914).bytes(message.oneofBytes);
                if (message.oneofBool != null && Object.hasOwnProperty.call(message, "oneofBool"))
                    writer.uint32(/* id 115, wireType 0 =*/920).bool(message.oneofBool);
                if (message.oneofUint64 != null && Object.hasOwnProperty.call(message, "oneofUint64"))
                    writer.uint32(/* id 116, wireType 0 =*/928).uint64(message.oneofUint64);
                if (message.oneofFloat != null && Object.hasOwnProperty.call(message, "oneofFloat"))
                    writer.uint32(/* id 117, wireType 5 =*/941).float(message.oneofFloat);
                if (message.oneofDouble != null && Object.hasOwnProperty.call(message, "oneofDouble"))
                    writer.uint32(/* id 118, wireType 1 =*/945).double(message.oneofDouble);
                if (message.oneofEnum != null && Object.hasOwnProperty.call(message, "oneofEnum"))
                    writer.uint32(/* id 119, wireType 0 =*/952).int32(message.oneofEnum);
                if (message.oneofNullValue != null && Object.hasOwnProperty.call(message, "oneofNullValue"))
                    writer.uint32(/* id 120, wireType 0 =*/960).int32(message.oneofNullValue);
                if (message.optionalBoolWrapper != null && Object.hasOwnProperty.call(message, "optionalBoolWrapper"))
                    $root.google.protobuf.BoolValue.encode(message.optionalBoolWrapper, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
                if (message.optionalInt32Wrapper != null && Object.hasOwnProperty.call(message, "optionalInt32Wrapper"))
                    $root.google.protobuf.Int32Value.encode(message.optionalInt32Wrapper, writer.uint32(/* id 202, wireType 2 =*/1618).fork()).ldelim();
                if (message.optionalInt64Wrapper != null && Object.hasOwnProperty.call(message, "optionalInt64Wrapper"))
                    $root.google.protobuf.Int64Value.encode(message.optionalInt64Wrapper, writer.uint32(/* id 203, wireType 2 =*/1626).fork()).ldelim();
                if (message.optionalUint32Wrapper != null && Object.hasOwnProperty.call(message, "optionalUint32Wrapper"))
                    $root.google.protobuf.UInt32Value.encode(message.optionalUint32Wrapper, writer.uint32(/* id 204, wireType 2 =*/1634).fork()).ldelim();
                if (message.optionalUint64Wrapper != null && Object.hasOwnProperty.call(message, "optionalUint64Wrapper"))
                    $root.google.protobuf.UInt64Value.encode(message.optionalUint64Wrapper, writer.uint32(/* id 205, wireType 2 =*/1642).fork()).ldelim();
                if (message.optionalFloatWrapper != null && Object.hasOwnProperty.call(message, "optionalFloatWrapper"))
                    $root.google.protobuf.FloatValue.encode(message.optionalFloatWrapper, writer.uint32(/* id 206, wireType 2 =*/1650).fork()).ldelim();
                if (message.optionalDoubleWrapper != null && Object.hasOwnProperty.call(message, "optionalDoubleWrapper"))
                    $root.google.protobuf.DoubleValue.encode(message.optionalDoubleWrapper, writer.uint32(/* id 207, wireType 2 =*/1658).fork()).ldelim();
                if (message.optionalStringWrapper != null && Object.hasOwnProperty.call(message, "optionalStringWrapper"))
                    $root.google.protobuf.StringValue.encode(message.optionalStringWrapper, writer.uint32(/* id 208, wireType 2 =*/1666).fork()).ldelim();
                if (message.optionalBytesWrapper != null && Object.hasOwnProperty.call(message, "optionalBytesWrapper"))
                    $root.google.protobuf.BytesValue.encode(message.optionalBytesWrapper, writer.uint32(/* id 209, wireType 2 =*/1674).fork()).ldelim();
                if (message.repeatedBoolWrapper != null && message.repeatedBoolWrapper.length)
                    for (let i = 0; i < message.repeatedBoolWrapper.length; ++i)
                        $root.google.protobuf.BoolValue.encode(message.repeatedBoolWrapper[i], writer.uint32(/* id 211, wireType 2 =*/1690).fork()).ldelim();
                if (message.repeatedInt32Wrapper != null && message.repeatedInt32Wrapper.length)
                    for (let i = 0; i < message.repeatedInt32Wrapper.length; ++i)
                        $root.google.protobuf.Int32Value.encode(message.repeatedInt32Wrapper[i], writer.uint32(/* id 212, wireType 2 =*/1698).fork()).ldelim();
                if (message.repeatedInt64Wrapper != null && message.repeatedInt64Wrapper.length)
                    for (let i = 0; i < message.repeatedInt64Wrapper.length; ++i)
                        $root.google.protobuf.Int64Value.encode(message.repeatedInt64Wrapper[i], writer.uint32(/* id 213, wireType 2 =*/1706).fork()).ldelim();
                if (message.repeatedUint32Wrapper != null && message.repeatedUint32Wrapper.length)
                    for (let i = 0; i < message.repeatedUint32Wrapper.length; ++i)
                        $root.google.protobuf.UInt32Value.encode(message.repeatedUint32Wrapper[i], writer.uint32(/* id 214, wireType 2 =*/1714).fork()).ldelim();
                if (message.repeatedUint64Wrapper != null && message.repeatedUint64Wrapper.length)
                    for (let i = 0; i < message.repeatedUint64Wrapper.length; ++i)
                        $root.google.protobuf.UInt64Value.encode(message.repeatedUint64Wrapper[i], writer.uint32(/* id 215, wireType 2 =*/1722).fork()).ldelim();
                if (message.repeatedFloatWrapper != null && message.repeatedFloatWrapper.length)
                    for (let i = 0; i < message.repeatedFloatWrapper.length; ++i)
                        $root.google.protobuf.FloatValue.encode(message.repeatedFloatWrapper[i], writer.uint32(/* id 216, wireType 2 =*/1730).fork()).ldelim();
                if (message.repeatedDoubleWrapper != null && message.repeatedDoubleWrapper.length)
                    for (let i = 0; i < message.repeatedDoubleWrapper.length; ++i)
                        $root.google.protobuf.DoubleValue.encode(message.repeatedDoubleWrapper[i], writer.uint32(/* id 217, wireType 2 =*/1738).fork()).ldelim();
                if (message.repeatedStringWrapper != null && message.repeatedStringWrapper.length)
                    for (let i = 0; i < message.repeatedStringWrapper.length; ++i)
                        $root.google.protobuf.StringValue.encode(message.repeatedStringWrapper[i], writer.uint32(/* id 218, wireType 2 =*/1746).fork()).ldelim();
                if (message.repeatedBytesWrapper != null && message.repeatedBytesWrapper.length)
                    for (let i = 0; i < message.repeatedBytesWrapper.length; ++i)
                        $root.google.protobuf.BytesValue.encode(message.repeatedBytesWrapper[i], writer.uint32(/* id 219, wireType 2 =*/1754).fork()).ldelim();
                if (message.optionalDuration != null && Object.hasOwnProperty.call(message, "optionalDuration"))
                    $root.google.protobuf.Duration.encode(message.optionalDuration, writer.uint32(/* id 301, wireType 2 =*/2410).fork()).ldelim();
                if (message.optionalTimestamp != null && Object.hasOwnProperty.call(message, "optionalTimestamp"))
                    $root.google.protobuf.Timestamp.encode(message.optionalTimestamp, writer.uint32(/* id 302, wireType 2 =*/2418).fork()).ldelim();
                if (message.optionalFieldMask != null && Object.hasOwnProperty.call(message, "optionalFieldMask"))
                    $root.google.protobuf.FieldMask.encode(message.optionalFieldMask, writer.uint32(/* id 303, wireType 2 =*/2426).fork()).ldelim();
                if (message.optionalStruct != null && Object.hasOwnProperty.call(message, "optionalStruct"))
                    $root.google.protobuf.Struct.encode(message.optionalStruct, writer.uint32(/* id 304, wireType 2 =*/2434).fork()).ldelim();
                if (message.optionalAny != null && Object.hasOwnProperty.call(message, "optionalAny"))
                    $root.google.protobuf.Any.encode(message.optionalAny, writer.uint32(/* id 305, wireType 2 =*/2442).fork()).ldelim();
                if (message.optionalValue != null && Object.hasOwnProperty.call(message, "optionalValue"))
                    $root.google.protobuf.Value.encode(message.optionalValue, writer.uint32(/* id 306, wireType 2 =*/2450).fork()).ldelim();
                if (message.optionalNullValue != null && Object.hasOwnProperty.call(message, "optionalNullValue"))
                    writer.uint32(/* id 307, wireType 0 =*/2456).int32(message.optionalNullValue);
                if (message.repeatedDuration != null && message.repeatedDuration.length)
                    for (let i = 0; i < message.repeatedDuration.length; ++i)
                        $root.google.protobuf.Duration.encode(message.repeatedDuration[i], writer.uint32(/* id 311, wireType 2 =*/2490).fork()).ldelim();
                if (message.repeatedTimestamp != null && message.repeatedTimestamp.length)
                    for (let i = 0; i < message.repeatedTimestamp.length; ++i)
                        $root.google.protobuf.Timestamp.encode(message.repeatedTimestamp[i], writer.uint32(/* id 312, wireType 2 =*/2498).fork()).ldelim();
                if (message.repeatedFieldmask != null && message.repeatedFieldmask.length)
                    for (let i = 0; i < message.repeatedFieldmask.length; ++i)
                        $root.google.protobuf.FieldMask.encode(message.repeatedFieldmask[i], writer.uint32(/* id 313, wireType 2 =*/2506).fork()).ldelim();
                if (message.repeatedAny != null && message.repeatedAny.length)
                    for (let i = 0; i < message.repeatedAny.length; ++i)
                        $root.google.protobuf.Any.encode(message.repeatedAny[i], writer.uint32(/* id 315, wireType 2 =*/2522).fork()).ldelim();
                if (message.repeatedValue != null && message.repeatedValue.length)
                    for (let i = 0; i < message.repeatedValue.length; ++i)
                        $root.google.protobuf.Value.encode(message.repeatedValue[i], writer.uint32(/* id 316, wireType 2 =*/2530).fork()).ldelim();
                if (message.repeatedListValue != null && message.repeatedListValue.length)
                    for (let i = 0; i < message.repeatedListValue.length; ++i)
                        $root.google.protobuf.ListValue.encode(message.repeatedListValue[i], writer.uint32(/* id 317, wireType 2 =*/2538).fork()).ldelim();
                if (message.repeatedStruct != null && message.repeatedStruct.length)
                    for (let i = 0; i < message.repeatedStruct.length; ++i)
                        $root.google.protobuf.Struct.encode(message.repeatedStruct[i], writer.uint32(/* id 324, wireType 2 =*/2594).fork()).ldelim();
                if (message.fieldname1 != null && Object.hasOwnProperty.call(message, "fieldname1"))
                    writer.uint32(/* id 401, wireType 0 =*/3208).int32(message.fieldname1);
                if (message.fieldName2 != null && Object.hasOwnProperty.call(message, "fieldName2"))
                    writer.uint32(/* id 402, wireType 0 =*/3216).int32(message.fieldName2);
                if (message._fieldName3 != null && Object.hasOwnProperty.call(message, "_fieldName3"))
                    writer.uint32(/* id 403, wireType 0 =*/3224).int32(message._fieldName3);
                if (message.field_Name4_ != null && Object.hasOwnProperty.call(message, "field_Name4_"))
                    writer.uint32(/* id 404, wireType 0 =*/3232).int32(message.field_Name4_);
                if (message.field0name5 != null && Object.hasOwnProperty.call(message, "field0name5"))
                    writer.uint32(/* id 405, wireType 0 =*/3240).int32(message.field0name5);
                if (message.field_0Name6 != null && Object.hasOwnProperty.call(message, "field_0Name6"))
                    writer.uint32(/* id 406, wireType 0 =*/3248).int32(message.field_0Name6);
                if (message.fieldName7 != null && Object.hasOwnProperty.call(message, "fieldName7"))
                    writer.uint32(/* id 407, wireType 0 =*/3256).int32(message.fieldName7);
                if (message.FieldName8 != null && Object.hasOwnProperty.call(message, "FieldName8"))
                    writer.uint32(/* id 408, wireType 0 =*/3264).int32(message.FieldName8);
                if (message.field_Name9 != null && Object.hasOwnProperty.call(message, "field_Name9"))
                    writer.uint32(/* id 409, wireType 0 =*/3272).int32(message.field_Name9);
                if (message.Field_Name10 != null && Object.hasOwnProperty.call(message, "Field_Name10"))
                    writer.uint32(/* id 410, wireType 0 =*/3280).int32(message.Field_Name10);
                if (message.FIELD_NAME11 != null && Object.hasOwnProperty.call(message, "FIELD_NAME11"))
                    writer.uint32(/* id 411, wireType 0 =*/3288).int32(message.FIELD_NAME11);
                if (message.FIELDName12 != null && Object.hasOwnProperty.call(message, "FIELDName12"))
                    writer.uint32(/* id 412, wireType 0 =*/3296).int32(message.FIELDName12);
                if (message._FieldName13 != null && Object.hasOwnProperty.call(message, "_FieldName13"))
                    writer.uint32(/* id 413, wireType 0 =*/3304).int32(message._FieldName13);
                if (message.__FieldName14 != null && Object.hasOwnProperty.call(message, "__FieldName14"))
                    writer.uint32(/* id 414, wireType 0 =*/3312).int32(message.__FieldName14);
                if (message.field_Name15 != null && Object.hasOwnProperty.call(message, "field_Name15"))
                    writer.uint32(/* id 415, wireType 0 =*/3320).int32(message.field_Name15);
                if (message.field__Name16 != null && Object.hasOwnProperty.call(message, "field__Name16"))
                    writer.uint32(/* id 416, wireType 0 =*/3328).int32(message.field__Name16);
                if (message.fieldName17__ != null && Object.hasOwnProperty.call(message, "fieldName17__"))
                    writer.uint32(/* id 417, wireType 0 =*/3336).int32(message.fieldName17__);
                if (message.FieldName18__ != null && Object.hasOwnProperty.call(message, "FieldName18__"))
                    writer.uint32(/* id 418, wireType 0 =*/3344).int32(message.FieldName18__);
                return writer;
            };

            /**
             * Encodes the specified TestAllTypesProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {protobuf_test_messages.proto3.ITestAllTypesProto3} message TestAllTypesProto3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestAllTypesProto3.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestAllTypesProto3 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.TestAllTypesProto3} TestAllTypesProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestAllTypesProto3.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto3.TestAllTypesProto3(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.optionalInt32 = reader.int32();
                            break;
                        }
                    case 2: {
                            message.optionalInt64 = reader.int64();
                            break;
                        }
                    case 3: {
                            message.optionalUint32 = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.optionalUint64 = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.optionalSint32 = reader.sint32();
                            break;
                        }
                    case 6: {
                            message.optionalSint64 = reader.sint64();
                            break;
                        }
                    case 7: {
                            message.optionalFixed32 = reader.fixed32();
                            break;
                        }
                    case 8: {
                            message.optionalFixed64 = reader.fixed64();
                            break;
                        }
                    case 9: {
                            message.optionalSfixed32 = reader.sfixed32();
                            break;
                        }
                    case 10: {
                            message.optionalSfixed64 = reader.sfixed64();
                            break;
                        }
                    case 11: {
                            message.optionalFloat = reader.float();
                            break;
                        }
                    case 12: {
                            message.optionalDouble = reader.double();
                            break;
                        }
                    case 13: {
                            message.optionalBool = reader.bool();
                            break;
                        }
                    case 14: {
                            message.optionalString = reader.string();
                            break;
                        }
                    case 15: {
                            message.optionalBytes = reader.bytes();
                            break;
                        }
                    case 18: {
                            message.optionalNestedMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 19: {
                            message.optionalForeignMessage = $root.protobuf_test_messages.proto3.ForeignMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 21: {
                            message.optionalNestedEnum = reader.int32();
                            break;
                        }
                    case 22: {
                            message.optionalForeignEnum = reader.int32();
                            break;
                        }
                    case 23: {
                            message.optionalAliasedEnum = reader.int32();
                            break;
                        }
                    case 24: {
                            message.optionalStringPiece = reader.string();
                            break;
                        }
                    case 25: {
                            message.optionalCord = reader.string();
                            break;
                        }
                    case 27: {
                            message.recursiveMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.decode(reader, reader.uint32());
                            break;
                        }
                    case 31: {
                            if (!(message.repeatedInt32 && message.repeatedInt32.length))
                                message.repeatedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedInt32.push(reader.int32());
                            } else
                                message.repeatedInt32.push(reader.int32());
                            break;
                        }
                    case 32: {
                            if (!(message.repeatedInt64 && message.repeatedInt64.length))
                                message.repeatedInt64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedInt64.push(reader.int64());
                            } else
                                message.repeatedInt64.push(reader.int64());
                            break;
                        }
                    case 33: {
                            if (!(message.repeatedUint32 && message.repeatedUint32.length))
                                message.repeatedUint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedUint32.push(reader.uint32());
                            } else
                                message.repeatedUint32.push(reader.uint32());
                            break;
                        }
                    case 34: {
                            if (!(message.repeatedUint64 && message.repeatedUint64.length))
                                message.repeatedUint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedUint64.push(reader.uint64());
                            } else
                                message.repeatedUint64.push(reader.uint64());
                            break;
                        }
                    case 35: {
                            if (!(message.repeatedSint32 && message.repeatedSint32.length))
                                message.repeatedSint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSint32.push(reader.sint32());
                            } else
                                message.repeatedSint32.push(reader.sint32());
                            break;
                        }
                    case 36: {
                            if (!(message.repeatedSint64 && message.repeatedSint64.length))
                                message.repeatedSint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSint64.push(reader.sint64());
                            } else
                                message.repeatedSint64.push(reader.sint64());
                            break;
                        }
                    case 37: {
                            if (!(message.repeatedFixed32 && message.repeatedFixed32.length))
                                message.repeatedFixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFixed32.push(reader.fixed32());
                            } else
                                message.repeatedFixed32.push(reader.fixed32());
                            break;
                        }
                    case 38: {
                            if (!(message.repeatedFixed64 && message.repeatedFixed64.length))
                                message.repeatedFixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFixed64.push(reader.fixed64());
                            } else
                                message.repeatedFixed64.push(reader.fixed64());
                            break;
                        }
                    case 39: {
                            if (!(message.repeatedSfixed32 && message.repeatedSfixed32.length))
                                message.repeatedSfixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSfixed32.push(reader.sfixed32());
                            } else
                                message.repeatedSfixed32.push(reader.sfixed32());
                            break;
                        }
                    case 40: {
                            if (!(message.repeatedSfixed64 && message.repeatedSfixed64.length))
                                message.repeatedSfixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSfixed64.push(reader.sfixed64());
                            } else
                                message.repeatedSfixed64.push(reader.sfixed64());
                            break;
                        }
                    case 41: {
                            if (!(message.repeatedFloat && message.repeatedFloat.length))
                                message.repeatedFloat = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFloat.push(reader.float());
                            } else
                                message.repeatedFloat.push(reader.float());
                            break;
                        }
                    case 42: {
                            if (!(message.repeatedDouble && message.repeatedDouble.length))
                                message.repeatedDouble = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedDouble.push(reader.double());
                            } else
                                message.repeatedDouble.push(reader.double());
                            break;
                        }
                    case 43: {
                            if (!(message.repeatedBool && message.repeatedBool.length))
                                message.repeatedBool = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedBool.push(reader.bool());
                            } else
                                message.repeatedBool.push(reader.bool());
                            break;
                        }
                    case 44: {
                            if (!(message.repeatedString && message.repeatedString.length))
                                message.repeatedString = [];
                            message.repeatedString.push(reader.string());
                            break;
                        }
                    case 45: {
                            if (!(message.repeatedBytes && message.repeatedBytes.length))
                                message.repeatedBytes = [];
                            message.repeatedBytes.push(reader.bytes());
                            break;
                        }
                    case 48: {
                            if (!(message.repeatedNestedMessage && message.repeatedNestedMessage.length))
                                message.repeatedNestedMessage = [];
                            message.repeatedNestedMessage.push($root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.decode(reader, reader.uint32()));
                            break;
                        }
                    case 49: {
                            if (!(message.repeatedForeignMessage && message.repeatedForeignMessage.length))
                                message.repeatedForeignMessage = [];
                            message.repeatedForeignMessage.push($root.protobuf_test_messages.proto3.ForeignMessage.decode(reader, reader.uint32()));
                            break;
                        }
                    case 51: {
                            if (!(message.repeatedNestedEnum && message.repeatedNestedEnum.length))
                                message.repeatedNestedEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedNestedEnum.push(reader.int32());
                            } else
                                message.repeatedNestedEnum.push(reader.int32());
                            break;
                        }
                    case 52: {
                            if (!(message.repeatedForeignEnum && message.repeatedForeignEnum.length))
                                message.repeatedForeignEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedForeignEnum.push(reader.int32());
                            } else
                                message.repeatedForeignEnum.push(reader.int32());
                            break;
                        }
                    case 54: {
                            if (!(message.repeatedStringPiece && message.repeatedStringPiece.length))
                                message.repeatedStringPiece = [];
                            message.repeatedStringPiece.push(reader.string());
                            break;
                        }
                    case 55: {
                            if (!(message.repeatedCord && message.repeatedCord.length))
                                message.repeatedCord = [];
                            message.repeatedCord.push(reader.string());
                            break;
                        }
                    case 75: {
                            if (!(message.packedInt32 && message.packedInt32.length))
                                message.packedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedInt32.push(reader.int32());
                            } else
                                message.packedInt32.push(reader.int32());
                            break;
                        }
                    case 76: {
                            if (!(message.packedInt64 && message.packedInt64.length))
                                message.packedInt64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedInt64.push(reader.int64());
                            } else
                                message.packedInt64.push(reader.int64());
                            break;
                        }
                    case 77: {
                            if (!(message.packedUint32 && message.packedUint32.length))
                                message.packedUint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedUint32.push(reader.uint32());
                            } else
                                message.packedUint32.push(reader.uint32());
                            break;
                        }
                    case 78: {
                            if (!(message.packedUint64 && message.packedUint64.length))
                                message.packedUint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedUint64.push(reader.uint64());
                            } else
                                message.packedUint64.push(reader.uint64());
                            break;
                        }
                    case 79: {
                            if (!(message.packedSint32 && message.packedSint32.length))
                                message.packedSint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSint32.push(reader.sint32());
                            } else
                                message.packedSint32.push(reader.sint32());
                            break;
                        }
                    case 80: {
                            if (!(message.packedSint64 && message.packedSint64.length))
                                message.packedSint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSint64.push(reader.sint64());
                            } else
                                message.packedSint64.push(reader.sint64());
                            break;
                        }
                    case 81: {
                            if (!(message.packedFixed32 && message.packedFixed32.length))
                                message.packedFixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedFixed32.push(reader.fixed32());
                            } else
                                message.packedFixed32.push(reader.fixed32());
                            break;
                        }
                    case 82: {
                            if (!(message.packedFixed64 && message.packedFixed64.length))
                                message.packedFixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedFixed64.push(reader.fixed64());
                            } else
                                message.packedFixed64.push(reader.fixed64());
                            break;
                        }
                    case 83: {
                            if (!(message.packedSfixed32 && message.packedSfixed32.length))
                                message.packedSfixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSfixed32.push(reader.sfixed32());
                            } else
                                message.packedSfixed32.push(reader.sfixed32());
                            break;
                        }
                    case 84: {
                            if (!(message.packedSfixed64 && message.packedSfixed64.length))
                                message.packedSfixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSfixed64.push(reader.sfixed64());
                            } else
                                message.packedSfixed64.push(reader.sfixed64());
                            break;
                        }
                    case 85: {
                            if (!(message.packedFloat && message.packedFloat.length))
                                message.packedFloat = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedFloat.push(reader.float());
                            } else
                                message.packedFloat.push(reader.float());
                            break;
                        }
                    case 86: {
                            if (!(message.packedDouble && message.packedDouble.length))
                                message.packedDouble = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedDouble.push(reader.double());
                            } else
                                message.packedDouble.push(reader.double());
                            break;
                        }
                    case 87: {
                            if (!(message.packedBool && message.packedBool.length))
                                message.packedBool = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedBool.push(reader.bool());
                            } else
                                message.packedBool.push(reader.bool());
                            break;
                        }
                    case 88: {
                            if (!(message.packedNestedEnum && message.packedNestedEnum.length))
                                message.packedNestedEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedNestedEnum.push(reader.int32());
                            } else
                                message.packedNestedEnum.push(reader.int32());
                            break;
                        }
                    case 89: {
                            if (!(message.unpackedInt32 && message.unpackedInt32.length))
                                message.unpackedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedInt32.push(reader.int32());
                            } else
                                message.unpackedInt32.push(reader.int32());
                            break;
                        }
                    case 90: {
                            if (!(message.unpackedInt64 && message.unpackedInt64.length))
                                message.unpackedInt64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedInt64.push(reader.int64());
                            } else
                                message.unpackedInt64.push(reader.int64());
                            break;
                        }
                    case 91: {
                            if (!(message.unpackedUint32 && message.unpackedUint32.length))
                                message.unpackedUint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedUint32.push(reader.uint32());
                            } else
                                message.unpackedUint32.push(reader.uint32());
                            break;
                        }
                    case 92: {
                            if (!(message.unpackedUint64 && message.unpackedUint64.length))
                                message.unpackedUint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedUint64.push(reader.uint64());
                            } else
                                message.unpackedUint64.push(reader.uint64());
                            break;
                        }
                    case 93: {
                            if (!(message.unpackedSint32 && message.unpackedSint32.length))
                                message.unpackedSint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSint32.push(reader.sint32());
                            } else
                                message.unpackedSint32.push(reader.sint32());
                            break;
                        }
                    case 94: {
                            if (!(message.unpackedSint64 && message.unpackedSint64.length))
                                message.unpackedSint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSint64.push(reader.sint64());
                            } else
                                message.unpackedSint64.push(reader.sint64());
                            break;
                        }
                    case 95: {
                            if (!(message.unpackedFixed32 && message.unpackedFixed32.length))
                                message.unpackedFixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedFixed32.push(reader.fixed32());
                            } else
                                message.unpackedFixed32.push(reader.fixed32());
                            break;
                        }
                    case 96: {
                            if (!(message.unpackedFixed64 && message.unpackedFixed64.length))
                                message.unpackedFixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedFixed64.push(reader.fixed64());
                            } else
                                message.unpackedFixed64.push(reader.fixed64());
                            break;
                        }
                    case 97: {
                            if (!(message.unpackedSfixed32 && message.unpackedSfixed32.length))
                                message.unpackedSfixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSfixed32.push(reader.sfixed32());
                            } else
                                message.unpackedSfixed32.push(reader.sfixed32());
                            break;
                        }
                    case 98: {
                            if (!(message.unpackedSfixed64 && message.unpackedSfixed64.length))
                                message.unpackedSfixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSfixed64.push(reader.sfixed64());
                            } else
                                message.unpackedSfixed64.push(reader.sfixed64());
                            break;
                        }
                    case 99: {
                            if (!(message.unpackedFloat && message.unpackedFloat.length))
                                message.unpackedFloat = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedFloat.push(reader.float());
                            } else
                                message.unpackedFloat.push(reader.float());
                            break;
                        }
                    case 100: {
                            if (!(message.unpackedDouble && message.unpackedDouble.length))
                                message.unpackedDouble = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedDouble.push(reader.double());
                            } else
                                message.unpackedDouble.push(reader.double());
                            break;
                        }
                    case 101: {
                            if (!(message.unpackedBool && message.unpackedBool.length))
                                message.unpackedBool = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedBool.push(reader.bool());
                            } else
                                message.unpackedBool.push(reader.bool());
                            break;
                        }
                    case 102: {
                            if (!(message.unpackedNestedEnum && message.unpackedNestedEnum.length))
                                message.unpackedNestedEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedNestedEnum.push(reader.int32());
                            } else
                                message.unpackedNestedEnum.push(reader.int32());
                            break;
                        }
                    case 56: {
                            if (message.mapInt32Int32 === $util.emptyObject)
                                message.mapInt32Int32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32Int32[key] = value;
                            break;
                        }
                    case 57: {
                            if (message.mapInt64Int64 === $util.emptyObject)
                                message.mapInt64Int64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt64Int64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 58: {
                            if (message.mapUint32Uint32 === $util.emptyObject)
                                message.mapUint32Uint32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.uint32();
                                    break;
                                case 2:
                                    value = reader.uint32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapUint32Uint32[key] = value;
                            break;
                        }
                    case 59: {
                            if (message.mapUint64Uint64 === $util.emptyObject)
                                message.mapUint64Uint64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.uint64();
                                    break;
                                case 2:
                                    value = reader.uint64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapUint64Uint64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 60: {
                            if (message.mapSint32Sint32 === $util.emptyObject)
                                message.mapSint32Sint32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sint32();
                                    break;
                                case 2:
                                    value = reader.sint32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSint32Sint32[key] = value;
                            break;
                        }
                    case 61: {
                            if (message.mapSint64Sint64 === $util.emptyObject)
                                message.mapSint64Sint64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sint64();
                                    break;
                                case 2:
                                    value = reader.sint64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSint64Sint64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 62: {
                            if (message.mapFixed32Fixed32 === $util.emptyObject)
                                message.mapFixed32Fixed32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.fixed32();
                                    break;
                                case 2:
                                    value = reader.fixed32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapFixed32Fixed32[key] = value;
                            break;
                        }
                    case 63: {
                            if (message.mapFixed64Fixed64 === $util.emptyObject)
                                message.mapFixed64Fixed64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.fixed64();
                                    break;
                                case 2:
                                    value = reader.fixed64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapFixed64Fixed64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 64: {
                            if (message.mapSfixed32Sfixed32 === $util.emptyObject)
                                message.mapSfixed32Sfixed32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sfixed32();
                                    break;
                                case 2:
                                    value = reader.sfixed32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSfixed32Sfixed32[key] = value;
                            break;
                        }
                    case 65: {
                            if (message.mapSfixed64Sfixed64 === $util.emptyObject)
                                message.mapSfixed64Sfixed64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sfixed64();
                                    break;
                                case 2:
                                    value = reader.sfixed64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSfixed64Sfixed64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 66: {
                            if (message.mapInt32Float === $util.emptyObject)
                                message.mapInt32Float = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32Float[key] = value;
                            break;
                        }
                    case 67: {
                            if (message.mapInt32Double === $util.emptyObject)
                                message.mapInt32Double = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.double();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32Double[key] = value;
                            break;
                        }
                    case 68: {
                            if (message.mapBoolBool === $util.emptyObject)
                                message.mapBoolBool = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = false;
                            value = false;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.bool();
                                    break;
                                case 2:
                                    value = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapBoolBool[key] = value;
                            break;
                        }
                    case 69: {
                            if (message.mapStringString === $util.emptyObject)
                                message.mapStringString = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringString[key] = value;
                            break;
                        }
                    case 70: {
                            if (message.mapStringBytes === $util.emptyObject)
                                message.mapStringBytes = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = [];
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.bytes();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringBytes[key] = value;
                            break;
                        }
                    case 71: {
                            if (message.mapStringNestedMessage === $util.emptyObject)
                                message.mapStringNestedMessage = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringNestedMessage[key] = value;
                            break;
                        }
                    case 72: {
                            if (message.mapStringForeignMessage === $util.emptyObject)
                                message.mapStringForeignMessage = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.protobuf_test_messages.proto3.ForeignMessage.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringForeignMessage[key] = value;
                            break;
                        }
                    case 73: {
                            if (message.mapStringNestedEnum === $util.emptyObject)
                                message.mapStringNestedEnum = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringNestedEnum[key] = value;
                            break;
                        }
                    case 74: {
                            if (message.mapStringForeignEnum === $util.emptyObject)
                                message.mapStringForeignEnum = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringForeignEnum[key] = value;
                            break;
                        }
                    case 111: {
                            message.oneofUint32 = reader.uint32();
                            break;
                        }
                    case 112: {
                            message.oneofNestedMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 113: {
                            message.oneofString = reader.string();
                            break;
                        }
                    case 114: {
                            message.oneofBytes = reader.bytes();
                            break;
                        }
                    case 115: {
                            message.oneofBool = reader.bool();
                            break;
                        }
                    case 116: {
                            message.oneofUint64 = reader.uint64();
                            break;
                        }
                    case 117: {
                            message.oneofFloat = reader.float();
                            break;
                        }
                    case 118: {
                            message.oneofDouble = reader.double();
                            break;
                        }
                    case 119: {
                            message.oneofEnum = reader.int32();
                            break;
                        }
                    case 120: {
                            message.oneofNullValue = reader.int32();
                            break;
                        }
                    case 201: {
                            message.optionalBoolWrapper = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 202: {
                            message.optionalInt32Wrapper = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        }
                    case 203: {
                            message.optionalInt64Wrapper = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        }
                    case 204: {
                            message.optionalUint32Wrapper = $root.google.protobuf.UInt32Value.decode(reader, reader.uint32());
                            break;
                        }
                    case 205: {
                            message.optionalUint64Wrapper = $root.google.protobuf.UInt64Value.decode(reader, reader.uint32());
                            break;
                        }
                    case 206: {
                            message.optionalFloatWrapper = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 207: {
                            message.optionalDoubleWrapper = $root.google.protobuf.DoubleValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 208: {
                            message.optionalStringWrapper = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 209: {
                            message.optionalBytesWrapper = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 211: {
                            if (!(message.repeatedBoolWrapper && message.repeatedBoolWrapper.length))
                                message.repeatedBoolWrapper = [];
                            message.repeatedBoolWrapper.push($root.google.protobuf.BoolValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 212: {
                            if (!(message.repeatedInt32Wrapper && message.repeatedInt32Wrapper.length))
                                message.repeatedInt32Wrapper = [];
                            message.repeatedInt32Wrapper.push($root.google.protobuf.Int32Value.decode(reader, reader.uint32()));
                            break;
                        }
                    case 213: {
                            if (!(message.repeatedInt64Wrapper && message.repeatedInt64Wrapper.length))
                                message.repeatedInt64Wrapper = [];
                            message.repeatedInt64Wrapper.push($root.google.protobuf.Int64Value.decode(reader, reader.uint32()));
                            break;
                        }
                    case 214: {
                            if (!(message.repeatedUint32Wrapper && message.repeatedUint32Wrapper.length))
                                message.repeatedUint32Wrapper = [];
                            message.repeatedUint32Wrapper.push($root.google.protobuf.UInt32Value.decode(reader, reader.uint32()));
                            break;
                        }
                    case 215: {
                            if (!(message.repeatedUint64Wrapper && message.repeatedUint64Wrapper.length))
                                message.repeatedUint64Wrapper = [];
                            message.repeatedUint64Wrapper.push($root.google.protobuf.UInt64Value.decode(reader, reader.uint32()));
                            break;
                        }
                    case 216: {
                            if (!(message.repeatedFloatWrapper && message.repeatedFloatWrapper.length))
                                message.repeatedFloatWrapper = [];
                            message.repeatedFloatWrapper.push($root.google.protobuf.FloatValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 217: {
                            if (!(message.repeatedDoubleWrapper && message.repeatedDoubleWrapper.length))
                                message.repeatedDoubleWrapper = [];
                            message.repeatedDoubleWrapper.push($root.google.protobuf.DoubleValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 218: {
                            if (!(message.repeatedStringWrapper && message.repeatedStringWrapper.length))
                                message.repeatedStringWrapper = [];
                            message.repeatedStringWrapper.push($root.google.protobuf.StringValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 219: {
                            if (!(message.repeatedBytesWrapper && message.repeatedBytesWrapper.length))
                                message.repeatedBytesWrapper = [];
                            message.repeatedBytesWrapper.push($root.google.protobuf.BytesValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 301: {
                            message.optionalDuration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                            break;
                        }
                    case 302: {
                            message.optionalTimestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 303: {
                            message.optionalFieldMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                            break;
                        }
                    case 304: {
                            message.optionalStruct = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                            break;
                        }
                    case 305: {
                            message.optionalAny = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        }
                    case 306: {
                            message.optionalValue = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        }
                    case 307: {
                            message.optionalNullValue = reader.int32();
                            break;
                        }
                    case 311: {
                            if (!(message.repeatedDuration && message.repeatedDuration.length))
                                message.repeatedDuration = [];
                            message.repeatedDuration.push($root.google.protobuf.Duration.decode(reader, reader.uint32()));
                            break;
                        }
                    case 312: {
                            if (!(message.repeatedTimestamp && message.repeatedTimestamp.length))
                                message.repeatedTimestamp = [];
                            message.repeatedTimestamp.push($root.google.protobuf.Timestamp.decode(reader, reader.uint32()));
                            break;
                        }
                    case 313: {
                            if (!(message.repeatedFieldmask && message.repeatedFieldmask.length))
                                message.repeatedFieldmask = [];
                            message.repeatedFieldmask.push($root.google.protobuf.FieldMask.decode(reader, reader.uint32()));
                            break;
                        }
                    case 324: {
                            if (!(message.repeatedStruct && message.repeatedStruct.length))
                                message.repeatedStruct = [];
                            message.repeatedStruct.push($root.google.protobuf.Struct.decode(reader, reader.uint32()));
                            break;
                        }
                    case 315: {
                            if (!(message.repeatedAny && message.repeatedAny.length))
                                message.repeatedAny = [];
                            message.repeatedAny.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                            break;
                        }
                    case 316: {
                            if (!(message.repeatedValue && message.repeatedValue.length))
                                message.repeatedValue = [];
                            message.repeatedValue.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                            break;
                        }
                    case 317: {
                            if (!(message.repeatedListValue && message.repeatedListValue.length))
                                message.repeatedListValue = [];
                            message.repeatedListValue.push($root.google.protobuf.ListValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 401: {
                            message.fieldname1 = reader.int32();
                            break;
                        }
                    case 402: {
                            message.fieldName2 = reader.int32();
                            break;
                        }
                    case 403: {
                            message._fieldName3 = reader.int32();
                            break;
                        }
                    case 404: {
                            message.field_Name4_ = reader.int32();
                            break;
                        }
                    case 405: {
                            message.field0name5 = reader.int32();
                            break;
                        }
                    case 406: {
                            message.field_0Name6 = reader.int32();
                            break;
                        }
                    case 407: {
                            message.fieldName7 = reader.int32();
                            break;
                        }
                    case 408: {
                            message.FieldName8 = reader.int32();
                            break;
                        }
                    case 409: {
                            message.field_Name9 = reader.int32();
                            break;
                        }
                    case 410: {
                            message.Field_Name10 = reader.int32();
                            break;
                        }
                    case 411: {
                            message.FIELD_NAME11 = reader.int32();
                            break;
                        }
                    case 412: {
                            message.FIELDName12 = reader.int32();
                            break;
                        }
                    case 413: {
                            message._FieldName13 = reader.int32();
                            break;
                        }
                    case 414: {
                            message.__FieldName14 = reader.int32();
                            break;
                        }
                    case 415: {
                            message.field_Name15 = reader.int32();
                            break;
                        }
                    case 416: {
                            message.field__Name16 = reader.int32();
                            break;
                        }
                    case 417: {
                            message.fieldName17__ = reader.int32();
                            break;
                        }
                    case 418: {
                            message.FieldName18__ = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestAllTypesProto3 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.TestAllTypesProto3} TestAllTypesProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestAllTypesProto3.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestAllTypesProto3 message.
             * @function verify
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestAllTypesProto3.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.optionalInt32 != null && message.hasOwnProperty("optionalInt32"))
                    if (!$util.isInteger(message.optionalInt32))
                        return "optionalInt32: integer expected";
                if (message.optionalInt64 != null && message.hasOwnProperty("optionalInt64"))
                    if (!$util.isInteger(message.optionalInt64) && !(message.optionalInt64 && $util.isInteger(message.optionalInt64.low) && $util.isInteger(message.optionalInt64.high)))
                        return "optionalInt64: integer|Long expected";
                if (message.optionalUint32 != null && message.hasOwnProperty("optionalUint32"))
                    if (!$util.isInteger(message.optionalUint32))
                        return "optionalUint32: integer expected";
                if (message.optionalUint64 != null && message.hasOwnProperty("optionalUint64"))
                    if (!$util.isInteger(message.optionalUint64) && !(message.optionalUint64 && $util.isInteger(message.optionalUint64.low) && $util.isInteger(message.optionalUint64.high)))
                        return "optionalUint64: integer|Long expected";
                if (message.optionalSint32 != null && message.hasOwnProperty("optionalSint32"))
                    if (!$util.isInteger(message.optionalSint32))
                        return "optionalSint32: integer expected";
                if (message.optionalSint64 != null && message.hasOwnProperty("optionalSint64"))
                    if (!$util.isInteger(message.optionalSint64) && !(message.optionalSint64 && $util.isInteger(message.optionalSint64.low) && $util.isInteger(message.optionalSint64.high)))
                        return "optionalSint64: integer|Long expected";
                if (message.optionalFixed32 != null && message.hasOwnProperty("optionalFixed32"))
                    if (!$util.isInteger(message.optionalFixed32))
                        return "optionalFixed32: integer expected";
                if (message.optionalFixed64 != null && message.hasOwnProperty("optionalFixed64"))
                    if (!$util.isInteger(message.optionalFixed64) && !(message.optionalFixed64 && $util.isInteger(message.optionalFixed64.low) && $util.isInteger(message.optionalFixed64.high)))
                        return "optionalFixed64: integer|Long expected";
                if (message.optionalSfixed32 != null && message.hasOwnProperty("optionalSfixed32"))
                    if (!$util.isInteger(message.optionalSfixed32))
                        return "optionalSfixed32: integer expected";
                if (message.optionalSfixed64 != null && message.hasOwnProperty("optionalSfixed64"))
                    if (!$util.isInteger(message.optionalSfixed64) && !(message.optionalSfixed64 && $util.isInteger(message.optionalSfixed64.low) && $util.isInteger(message.optionalSfixed64.high)))
                        return "optionalSfixed64: integer|Long expected";
                if (message.optionalFloat != null && message.hasOwnProperty("optionalFloat"))
                    if (typeof message.optionalFloat !== "number")
                        return "optionalFloat: number expected";
                if (message.optionalDouble != null && message.hasOwnProperty("optionalDouble"))
                    if (typeof message.optionalDouble !== "number")
                        return "optionalDouble: number expected";
                if (message.optionalBool != null && message.hasOwnProperty("optionalBool"))
                    if (typeof message.optionalBool !== "boolean")
                        return "optionalBool: boolean expected";
                if (message.optionalString != null && message.hasOwnProperty("optionalString"))
                    if (!$util.isString(message.optionalString))
                        return "optionalString: string expected";
                if (message.optionalBytes != null && message.hasOwnProperty("optionalBytes"))
                    if (!(message.optionalBytes && typeof message.optionalBytes.length === "number" || $util.isString(message.optionalBytes)))
                        return "optionalBytes: buffer expected";
                if (message.optionalNestedMessage != null && message.hasOwnProperty("optionalNestedMessage")) {
                    let error = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify(message.optionalNestedMessage);
                    if (error)
                        return "optionalNestedMessage." + error;
                }
                if (message.optionalForeignMessage != null && message.hasOwnProperty("optionalForeignMessage")) {
                    let error = $root.protobuf_test_messages.proto3.ForeignMessage.verify(message.optionalForeignMessage);
                    if (error)
                        return "optionalForeignMessage." + error;
                }
                if (message.optionalNestedEnum != null && message.hasOwnProperty("optionalNestedEnum"))
                    switch (message.optionalNestedEnum) {
                    default:
                        return "optionalNestedEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case -1:
                        break;
                    }
                if (message.optionalForeignEnum != null && message.hasOwnProperty("optionalForeignEnum"))
                    switch (message.optionalForeignEnum) {
                    default:
                        return "optionalForeignEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.optionalAliasedEnum != null && message.hasOwnProperty("optionalAliasedEnum"))
                    switch (message.optionalAliasedEnum) {
                    default:
                        return "optionalAliasedEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 2:
                    case 2:
                    case 2:
                        break;
                    }
                if (message.optionalStringPiece != null && message.hasOwnProperty("optionalStringPiece"))
                    if (!$util.isString(message.optionalStringPiece))
                        return "optionalStringPiece: string expected";
                if (message.optionalCord != null && message.hasOwnProperty("optionalCord"))
                    if (!$util.isString(message.optionalCord))
                        return "optionalCord: string expected";
                if (message.recursiveMessage != null && message.hasOwnProperty("recursiveMessage")) {
                    let error = $root.protobuf_test_messages.proto3.TestAllTypesProto3.verify(message.recursiveMessage);
                    if (error)
                        return "recursiveMessage." + error;
                }
                if (message.repeatedInt32 != null && message.hasOwnProperty("repeatedInt32")) {
                    if (!Array.isArray(message.repeatedInt32))
                        return "repeatedInt32: array expected";
                    for (let i = 0; i < message.repeatedInt32.length; ++i)
                        if (!$util.isInteger(message.repeatedInt32[i]))
                            return "repeatedInt32: integer[] expected";
                }
                if (message.repeatedInt64 != null && message.hasOwnProperty("repeatedInt64")) {
                    if (!Array.isArray(message.repeatedInt64))
                        return "repeatedInt64: array expected";
                    for (let i = 0; i < message.repeatedInt64.length; ++i)
                        if (!$util.isInteger(message.repeatedInt64[i]) && !(message.repeatedInt64[i] && $util.isInteger(message.repeatedInt64[i].low) && $util.isInteger(message.repeatedInt64[i].high)))
                            return "repeatedInt64: integer|Long[] expected";
                }
                if (message.repeatedUint32 != null && message.hasOwnProperty("repeatedUint32")) {
                    if (!Array.isArray(message.repeatedUint32))
                        return "repeatedUint32: array expected";
                    for (let i = 0; i < message.repeatedUint32.length; ++i)
                        if (!$util.isInteger(message.repeatedUint32[i]))
                            return "repeatedUint32: integer[] expected";
                }
                if (message.repeatedUint64 != null && message.hasOwnProperty("repeatedUint64")) {
                    if (!Array.isArray(message.repeatedUint64))
                        return "repeatedUint64: array expected";
                    for (let i = 0; i < message.repeatedUint64.length; ++i)
                        if (!$util.isInteger(message.repeatedUint64[i]) && !(message.repeatedUint64[i] && $util.isInteger(message.repeatedUint64[i].low) && $util.isInteger(message.repeatedUint64[i].high)))
                            return "repeatedUint64: integer|Long[] expected";
                }
                if (message.repeatedSint32 != null && message.hasOwnProperty("repeatedSint32")) {
                    if (!Array.isArray(message.repeatedSint32))
                        return "repeatedSint32: array expected";
                    for (let i = 0; i < message.repeatedSint32.length; ++i)
                        if (!$util.isInteger(message.repeatedSint32[i]))
                            return "repeatedSint32: integer[] expected";
                }
                if (message.repeatedSint64 != null && message.hasOwnProperty("repeatedSint64")) {
                    if (!Array.isArray(message.repeatedSint64))
                        return "repeatedSint64: array expected";
                    for (let i = 0; i < message.repeatedSint64.length; ++i)
                        if (!$util.isInteger(message.repeatedSint64[i]) && !(message.repeatedSint64[i] && $util.isInteger(message.repeatedSint64[i].low) && $util.isInteger(message.repeatedSint64[i].high)))
                            return "repeatedSint64: integer|Long[] expected";
                }
                if (message.repeatedFixed32 != null && message.hasOwnProperty("repeatedFixed32")) {
                    if (!Array.isArray(message.repeatedFixed32))
                        return "repeatedFixed32: array expected";
                    for (let i = 0; i < message.repeatedFixed32.length; ++i)
                        if (!$util.isInteger(message.repeatedFixed32[i]))
                            return "repeatedFixed32: integer[] expected";
                }
                if (message.repeatedFixed64 != null && message.hasOwnProperty("repeatedFixed64")) {
                    if (!Array.isArray(message.repeatedFixed64))
                        return "repeatedFixed64: array expected";
                    for (let i = 0; i < message.repeatedFixed64.length; ++i)
                        if (!$util.isInteger(message.repeatedFixed64[i]) && !(message.repeatedFixed64[i] && $util.isInteger(message.repeatedFixed64[i].low) && $util.isInteger(message.repeatedFixed64[i].high)))
                            return "repeatedFixed64: integer|Long[] expected";
                }
                if (message.repeatedSfixed32 != null && message.hasOwnProperty("repeatedSfixed32")) {
                    if (!Array.isArray(message.repeatedSfixed32))
                        return "repeatedSfixed32: array expected";
                    for (let i = 0; i < message.repeatedSfixed32.length; ++i)
                        if (!$util.isInteger(message.repeatedSfixed32[i]))
                            return "repeatedSfixed32: integer[] expected";
                }
                if (message.repeatedSfixed64 != null && message.hasOwnProperty("repeatedSfixed64")) {
                    if (!Array.isArray(message.repeatedSfixed64))
                        return "repeatedSfixed64: array expected";
                    for (let i = 0; i < message.repeatedSfixed64.length; ++i)
                        if (!$util.isInteger(message.repeatedSfixed64[i]) && !(message.repeatedSfixed64[i] && $util.isInteger(message.repeatedSfixed64[i].low) && $util.isInteger(message.repeatedSfixed64[i].high)))
                            return "repeatedSfixed64: integer|Long[] expected";
                }
                if (message.repeatedFloat != null && message.hasOwnProperty("repeatedFloat")) {
                    if (!Array.isArray(message.repeatedFloat))
                        return "repeatedFloat: array expected";
                    for (let i = 0; i < message.repeatedFloat.length; ++i)
                        if (typeof message.repeatedFloat[i] !== "number")
                            return "repeatedFloat: number[] expected";
                }
                if (message.repeatedDouble != null && message.hasOwnProperty("repeatedDouble")) {
                    if (!Array.isArray(message.repeatedDouble))
                        return "repeatedDouble: array expected";
                    for (let i = 0; i < message.repeatedDouble.length; ++i)
                        if (typeof message.repeatedDouble[i] !== "number")
                            return "repeatedDouble: number[] expected";
                }
                if (message.repeatedBool != null && message.hasOwnProperty("repeatedBool")) {
                    if (!Array.isArray(message.repeatedBool))
                        return "repeatedBool: array expected";
                    for (let i = 0; i < message.repeatedBool.length; ++i)
                        if (typeof message.repeatedBool[i] !== "boolean")
                            return "repeatedBool: boolean[] expected";
                }
                if (message.repeatedString != null && message.hasOwnProperty("repeatedString")) {
                    if (!Array.isArray(message.repeatedString))
                        return "repeatedString: array expected";
                    for (let i = 0; i < message.repeatedString.length; ++i)
                        if (!$util.isString(message.repeatedString[i]))
                            return "repeatedString: string[] expected";
                }
                if (message.repeatedBytes != null && message.hasOwnProperty("repeatedBytes")) {
                    if (!Array.isArray(message.repeatedBytes))
                        return "repeatedBytes: array expected";
                    for (let i = 0; i < message.repeatedBytes.length; ++i)
                        if (!(message.repeatedBytes[i] && typeof message.repeatedBytes[i].length === "number" || $util.isString(message.repeatedBytes[i])))
                            return "repeatedBytes: buffer[] expected";
                }
                if (message.repeatedNestedMessage != null && message.hasOwnProperty("repeatedNestedMessage")) {
                    if (!Array.isArray(message.repeatedNestedMessage))
                        return "repeatedNestedMessage: array expected";
                    for (let i = 0; i < message.repeatedNestedMessage.length; ++i) {
                        let error = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify(message.repeatedNestedMessage[i]);
                        if (error)
                            return "repeatedNestedMessage." + error;
                    }
                }
                if (message.repeatedForeignMessage != null && message.hasOwnProperty("repeatedForeignMessage")) {
                    if (!Array.isArray(message.repeatedForeignMessage))
                        return "repeatedForeignMessage: array expected";
                    for (let i = 0; i < message.repeatedForeignMessage.length; ++i) {
                        let error = $root.protobuf_test_messages.proto3.ForeignMessage.verify(message.repeatedForeignMessage[i]);
                        if (error)
                            return "repeatedForeignMessage." + error;
                    }
                }
                if (message.repeatedNestedEnum != null && message.hasOwnProperty("repeatedNestedEnum")) {
                    if (!Array.isArray(message.repeatedNestedEnum))
                        return "repeatedNestedEnum: array expected";
                    for (let i = 0; i < message.repeatedNestedEnum.length; ++i)
                        switch (message.repeatedNestedEnum[i]) {
                        default:
                            return "repeatedNestedEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.repeatedForeignEnum != null && message.hasOwnProperty("repeatedForeignEnum")) {
                    if (!Array.isArray(message.repeatedForeignEnum))
                        return "repeatedForeignEnum: array expected";
                    for (let i = 0; i < message.repeatedForeignEnum.length; ++i)
                        switch (message.repeatedForeignEnum[i]) {
                        default:
                            return "repeatedForeignEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                }
                if (message.repeatedStringPiece != null && message.hasOwnProperty("repeatedStringPiece")) {
                    if (!Array.isArray(message.repeatedStringPiece))
                        return "repeatedStringPiece: array expected";
                    for (let i = 0; i < message.repeatedStringPiece.length; ++i)
                        if (!$util.isString(message.repeatedStringPiece[i]))
                            return "repeatedStringPiece: string[] expected";
                }
                if (message.repeatedCord != null && message.hasOwnProperty("repeatedCord")) {
                    if (!Array.isArray(message.repeatedCord))
                        return "repeatedCord: array expected";
                    for (let i = 0; i < message.repeatedCord.length; ++i)
                        if (!$util.isString(message.repeatedCord[i]))
                            return "repeatedCord: string[] expected";
                }
                if (message.packedInt32 != null && message.hasOwnProperty("packedInt32")) {
                    if (!Array.isArray(message.packedInt32))
                        return "packedInt32: array expected";
                    for (let i = 0; i < message.packedInt32.length; ++i)
                        if (!$util.isInteger(message.packedInt32[i]))
                            return "packedInt32: integer[] expected";
                }
                if (message.packedInt64 != null && message.hasOwnProperty("packedInt64")) {
                    if (!Array.isArray(message.packedInt64))
                        return "packedInt64: array expected";
                    for (let i = 0; i < message.packedInt64.length; ++i)
                        if (!$util.isInteger(message.packedInt64[i]) && !(message.packedInt64[i] && $util.isInteger(message.packedInt64[i].low) && $util.isInteger(message.packedInt64[i].high)))
                            return "packedInt64: integer|Long[] expected";
                }
                if (message.packedUint32 != null && message.hasOwnProperty("packedUint32")) {
                    if (!Array.isArray(message.packedUint32))
                        return "packedUint32: array expected";
                    for (let i = 0; i < message.packedUint32.length; ++i)
                        if (!$util.isInteger(message.packedUint32[i]))
                            return "packedUint32: integer[] expected";
                }
                if (message.packedUint64 != null && message.hasOwnProperty("packedUint64")) {
                    if (!Array.isArray(message.packedUint64))
                        return "packedUint64: array expected";
                    for (let i = 0; i < message.packedUint64.length; ++i)
                        if (!$util.isInteger(message.packedUint64[i]) && !(message.packedUint64[i] && $util.isInteger(message.packedUint64[i].low) && $util.isInteger(message.packedUint64[i].high)))
                            return "packedUint64: integer|Long[] expected";
                }
                if (message.packedSint32 != null && message.hasOwnProperty("packedSint32")) {
                    if (!Array.isArray(message.packedSint32))
                        return "packedSint32: array expected";
                    for (let i = 0; i < message.packedSint32.length; ++i)
                        if (!$util.isInteger(message.packedSint32[i]))
                            return "packedSint32: integer[] expected";
                }
                if (message.packedSint64 != null && message.hasOwnProperty("packedSint64")) {
                    if (!Array.isArray(message.packedSint64))
                        return "packedSint64: array expected";
                    for (let i = 0; i < message.packedSint64.length; ++i)
                        if (!$util.isInteger(message.packedSint64[i]) && !(message.packedSint64[i] && $util.isInteger(message.packedSint64[i].low) && $util.isInteger(message.packedSint64[i].high)))
                            return "packedSint64: integer|Long[] expected";
                }
                if (message.packedFixed32 != null && message.hasOwnProperty("packedFixed32")) {
                    if (!Array.isArray(message.packedFixed32))
                        return "packedFixed32: array expected";
                    for (let i = 0; i < message.packedFixed32.length; ++i)
                        if (!$util.isInteger(message.packedFixed32[i]))
                            return "packedFixed32: integer[] expected";
                }
                if (message.packedFixed64 != null && message.hasOwnProperty("packedFixed64")) {
                    if (!Array.isArray(message.packedFixed64))
                        return "packedFixed64: array expected";
                    for (let i = 0; i < message.packedFixed64.length; ++i)
                        if (!$util.isInteger(message.packedFixed64[i]) && !(message.packedFixed64[i] && $util.isInteger(message.packedFixed64[i].low) && $util.isInteger(message.packedFixed64[i].high)))
                            return "packedFixed64: integer|Long[] expected";
                }
                if (message.packedSfixed32 != null && message.hasOwnProperty("packedSfixed32")) {
                    if (!Array.isArray(message.packedSfixed32))
                        return "packedSfixed32: array expected";
                    for (let i = 0; i < message.packedSfixed32.length; ++i)
                        if (!$util.isInteger(message.packedSfixed32[i]))
                            return "packedSfixed32: integer[] expected";
                }
                if (message.packedSfixed64 != null && message.hasOwnProperty("packedSfixed64")) {
                    if (!Array.isArray(message.packedSfixed64))
                        return "packedSfixed64: array expected";
                    for (let i = 0; i < message.packedSfixed64.length; ++i)
                        if (!$util.isInteger(message.packedSfixed64[i]) && !(message.packedSfixed64[i] && $util.isInteger(message.packedSfixed64[i].low) && $util.isInteger(message.packedSfixed64[i].high)))
                            return "packedSfixed64: integer|Long[] expected";
                }
                if (message.packedFloat != null && message.hasOwnProperty("packedFloat")) {
                    if (!Array.isArray(message.packedFloat))
                        return "packedFloat: array expected";
                    for (let i = 0; i < message.packedFloat.length; ++i)
                        if (typeof message.packedFloat[i] !== "number")
                            return "packedFloat: number[] expected";
                }
                if (message.packedDouble != null && message.hasOwnProperty("packedDouble")) {
                    if (!Array.isArray(message.packedDouble))
                        return "packedDouble: array expected";
                    for (let i = 0; i < message.packedDouble.length; ++i)
                        if (typeof message.packedDouble[i] !== "number")
                            return "packedDouble: number[] expected";
                }
                if (message.packedBool != null && message.hasOwnProperty("packedBool")) {
                    if (!Array.isArray(message.packedBool))
                        return "packedBool: array expected";
                    for (let i = 0; i < message.packedBool.length; ++i)
                        if (typeof message.packedBool[i] !== "boolean")
                            return "packedBool: boolean[] expected";
                }
                if (message.packedNestedEnum != null && message.hasOwnProperty("packedNestedEnum")) {
                    if (!Array.isArray(message.packedNestedEnum))
                        return "packedNestedEnum: array expected";
                    for (let i = 0; i < message.packedNestedEnum.length; ++i)
                        switch (message.packedNestedEnum[i]) {
                        default:
                            return "packedNestedEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.unpackedInt32 != null && message.hasOwnProperty("unpackedInt32")) {
                    if (!Array.isArray(message.unpackedInt32))
                        return "unpackedInt32: array expected";
                    for (let i = 0; i < message.unpackedInt32.length; ++i)
                        if (!$util.isInteger(message.unpackedInt32[i]))
                            return "unpackedInt32: integer[] expected";
                }
                if (message.unpackedInt64 != null && message.hasOwnProperty("unpackedInt64")) {
                    if (!Array.isArray(message.unpackedInt64))
                        return "unpackedInt64: array expected";
                    for (let i = 0; i < message.unpackedInt64.length; ++i)
                        if (!$util.isInteger(message.unpackedInt64[i]) && !(message.unpackedInt64[i] && $util.isInteger(message.unpackedInt64[i].low) && $util.isInteger(message.unpackedInt64[i].high)))
                            return "unpackedInt64: integer|Long[] expected";
                }
                if (message.unpackedUint32 != null && message.hasOwnProperty("unpackedUint32")) {
                    if (!Array.isArray(message.unpackedUint32))
                        return "unpackedUint32: array expected";
                    for (let i = 0; i < message.unpackedUint32.length; ++i)
                        if (!$util.isInteger(message.unpackedUint32[i]))
                            return "unpackedUint32: integer[] expected";
                }
                if (message.unpackedUint64 != null && message.hasOwnProperty("unpackedUint64")) {
                    if (!Array.isArray(message.unpackedUint64))
                        return "unpackedUint64: array expected";
                    for (let i = 0; i < message.unpackedUint64.length; ++i)
                        if (!$util.isInteger(message.unpackedUint64[i]) && !(message.unpackedUint64[i] && $util.isInteger(message.unpackedUint64[i].low) && $util.isInteger(message.unpackedUint64[i].high)))
                            return "unpackedUint64: integer|Long[] expected";
                }
                if (message.unpackedSint32 != null && message.hasOwnProperty("unpackedSint32")) {
                    if (!Array.isArray(message.unpackedSint32))
                        return "unpackedSint32: array expected";
                    for (let i = 0; i < message.unpackedSint32.length; ++i)
                        if (!$util.isInteger(message.unpackedSint32[i]))
                            return "unpackedSint32: integer[] expected";
                }
                if (message.unpackedSint64 != null && message.hasOwnProperty("unpackedSint64")) {
                    if (!Array.isArray(message.unpackedSint64))
                        return "unpackedSint64: array expected";
                    for (let i = 0; i < message.unpackedSint64.length; ++i)
                        if (!$util.isInteger(message.unpackedSint64[i]) && !(message.unpackedSint64[i] && $util.isInteger(message.unpackedSint64[i].low) && $util.isInteger(message.unpackedSint64[i].high)))
                            return "unpackedSint64: integer|Long[] expected";
                }
                if (message.unpackedFixed32 != null && message.hasOwnProperty("unpackedFixed32")) {
                    if (!Array.isArray(message.unpackedFixed32))
                        return "unpackedFixed32: array expected";
                    for (let i = 0; i < message.unpackedFixed32.length; ++i)
                        if (!$util.isInteger(message.unpackedFixed32[i]))
                            return "unpackedFixed32: integer[] expected";
                }
                if (message.unpackedFixed64 != null && message.hasOwnProperty("unpackedFixed64")) {
                    if (!Array.isArray(message.unpackedFixed64))
                        return "unpackedFixed64: array expected";
                    for (let i = 0; i < message.unpackedFixed64.length; ++i)
                        if (!$util.isInteger(message.unpackedFixed64[i]) && !(message.unpackedFixed64[i] && $util.isInteger(message.unpackedFixed64[i].low) && $util.isInteger(message.unpackedFixed64[i].high)))
                            return "unpackedFixed64: integer|Long[] expected";
                }
                if (message.unpackedSfixed32 != null && message.hasOwnProperty("unpackedSfixed32")) {
                    if (!Array.isArray(message.unpackedSfixed32))
                        return "unpackedSfixed32: array expected";
                    for (let i = 0; i < message.unpackedSfixed32.length; ++i)
                        if (!$util.isInteger(message.unpackedSfixed32[i]))
                            return "unpackedSfixed32: integer[] expected";
                }
                if (message.unpackedSfixed64 != null && message.hasOwnProperty("unpackedSfixed64")) {
                    if (!Array.isArray(message.unpackedSfixed64))
                        return "unpackedSfixed64: array expected";
                    for (let i = 0; i < message.unpackedSfixed64.length; ++i)
                        if (!$util.isInteger(message.unpackedSfixed64[i]) && !(message.unpackedSfixed64[i] && $util.isInteger(message.unpackedSfixed64[i].low) && $util.isInteger(message.unpackedSfixed64[i].high)))
                            return "unpackedSfixed64: integer|Long[] expected";
                }
                if (message.unpackedFloat != null && message.hasOwnProperty("unpackedFloat")) {
                    if (!Array.isArray(message.unpackedFloat))
                        return "unpackedFloat: array expected";
                    for (let i = 0; i < message.unpackedFloat.length; ++i)
                        if (typeof message.unpackedFloat[i] !== "number")
                            return "unpackedFloat: number[] expected";
                }
                if (message.unpackedDouble != null && message.hasOwnProperty("unpackedDouble")) {
                    if (!Array.isArray(message.unpackedDouble))
                        return "unpackedDouble: array expected";
                    for (let i = 0; i < message.unpackedDouble.length; ++i)
                        if (typeof message.unpackedDouble[i] !== "number")
                            return "unpackedDouble: number[] expected";
                }
                if (message.unpackedBool != null && message.hasOwnProperty("unpackedBool")) {
                    if (!Array.isArray(message.unpackedBool))
                        return "unpackedBool: array expected";
                    for (let i = 0; i < message.unpackedBool.length; ++i)
                        if (typeof message.unpackedBool[i] !== "boolean")
                            return "unpackedBool: boolean[] expected";
                }
                if (message.unpackedNestedEnum != null && message.hasOwnProperty("unpackedNestedEnum")) {
                    if (!Array.isArray(message.unpackedNestedEnum))
                        return "unpackedNestedEnum: array expected";
                    for (let i = 0; i < message.unpackedNestedEnum.length; ++i)
                        switch (message.unpackedNestedEnum[i]) {
                        default:
                            return "unpackedNestedEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.mapInt32Int32 != null && message.hasOwnProperty("mapInt32Int32")) {
                    if (!$util.isObject(message.mapInt32Int32))
                        return "mapInt32Int32: object expected";
                    let key = Object.keys(message.mapInt32Int32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32Int32: integer key{k:int32} expected";
                        if (!$util.isInteger(message.mapInt32Int32[key[i]]))
                            return "mapInt32Int32: integer{k:int32} expected";
                    }
                }
                if (message.mapInt64Int64 != null && message.hasOwnProperty("mapInt64Int64")) {
                    if (!$util.isObject(message.mapInt64Int64))
                        return "mapInt64Int64: object expected";
                    let key = Object.keys(message.mapInt64Int64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapInt64Int64: integer|Long key{k:int64} expected";
                        if (!$util.isInteger(message.mapInt64Int64[key[i]]) && !(message.mapInt64Int64[key[i]] && $util.isInteger(message.mapInt64Int64[key[i]].low) && $util.isInteger(message.mapInt64Int64[key[i]].high)))
                            return "mapInt64Int64: integer|Long{k:int64} expected";
                    }
                }
                if (message.mapUint32Uint32 != null && message.hasOwnProperty("mapUint32Uint32")) {
                    if (!$util.isObject(message.mapUint32Uint32))
                        return "mapUint32Uint32: object expected";
                    let key = Object.keys(message.mapUint32Uint32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapUint32Uint32: integer key{k:uint32} expected";
                        if (!$util.isInteger(message.mapUint32Uint32[key[i]]))
                            return "mapUint32Uint32: integer{k:uint32} expected";
                    }
                }
                if (message.mapUint64Uint64 != null && message.hasOwnProperty("mapUint64Uint64")) {
                    if (!$util.isObject(message.mapUint64Uint64))
                        return "mapUint64Uint64: object expected";
                    let key = Object.keys(message.mapUint64Uint64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapUint64Uint64: integer|Long key{k:uint64} expected";
                        if (!$util.isInteger(message.mapUint64Uint64[key[i]]) && !(message.mapUint64Uint64[key[i]] && $util.isInteger(message.mapUint64Uint64[key[i]].low) && $util.isInteger(message.mapUint64Uint64[key[i]].high)))
                            return "mapUint64Uint64: integer|Long{k:uint64} expected";
                    }
                }
                if (message.mapSint32Sint32 != null && message.hasOwnProperty("mapSint32Sint32")) {
                    if (!$util.isObject(message.mapSint32Sint32))
                        return "mapSint32Sint32: object expected";
                    let key = Object.keys(message.mapSint32Sint32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapSint32Sint32: integer key{k:sint32} expected";
                        if (!$util.isInteger(message.mapSint32Sint32[key[i]]))
                            return "mapSint32Sint32: integer{k:sint32} expected";
                    }
                }
                if (message.mapSint64Sint64 != null && message.hasOwnProperty("mapSint64Sint64")) {
                    if (!$util.isObject(message.mapSint64Sint64))
                        return "mapSint64Sint64: object expected";
                    let key = Object.keys(message.mapSint64Sint64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapSint64Sint64: integer|Long key{k:sint64} expected";
                        if (!$util.isInteger(message.mapSint64Sint64[key[i]]) && !(message.mapSint64Sint64[key[i]] && $util.isInteger(message.mapSint64Sint64[key[i]].low) && $util.isInteger(message.mapSint64Sint64[key[i]].high)))
                            return "mapSint64Sint64: integer|Long{k:sint64} expected";
                    }
                }
                if (message.mapFixed32Fixed32 != null && message.hasOwnProperty("mapFixed32Fixed32")) {
                    if (!$util.isObject(message.mapFixed32Fixed32))
                        return "mapFixed32Fixed32: object expected";
                    let key = Object.keys(message.mapFixed32Fixed32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapFixed32Fixed32: integer key{k:fixed32} expected";
                        if (!$util.isInteger(message.mapFixed32Fixed32[key[i]]))
                            return "mapFixed32Fixed32: integer{k:fixed32} expected";
                    }
                }
                if (message.mapFixed64Fixed64 != null && message.hasOwnProperty("mapFixed64Fixed64")) {
                    if (!$util.isObject(message.mapFixed64Fixed64))
                        return "mapFixed64Fixed64: object expected";
                    let key = Object.keys(message.mapFixed64Fixed64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapFixed64Fixed64: integer|Long key{k:fixed64} expected";
                        if (!$util.isInteger(message.mapFixed64Fixed64[key[i]]) && !(message.mapFixed64Fixed64[key[i]] && $util.isInteger(message.mapFixed64Fixed64[key[i]].low) && $util.isInteger(message.mapFixed64Fixed64[key[i]].high)))
                            return "mapFixed64Fixed64: integer|Long{k:fixed64} expected";
                    }
                }
                if (message.mapSfixed32Sfixed32 != null && message.hasOwnProperty("mapSfixed32Sfixed32")) {
                    if (!$util.isObject(message.mapSfixed32Sfixed32))
                        return "mapSfixed32Sfixed32: object expected";
                    let key = Object.keys(message.mapSfixed32Sfixed32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapSfixed32Sfixed32: integer key{k:sfixed32} expected";
                        if (!$util.isInteger(message.mapSfixed32Sfixed32[key[i]]))
                            return "mapSfixed32Sfixed32: integer{k:sfixed32} expected";
                    }
                }
                if (message.mapSfixed64Sfixed64 != null && message.hasOwnProperty("mapSfixed64Sfixed64")) {
                    if (!$util.isObject(message.mapSfixed64Sfixed64))
                        return "mapSfixed64Sfixed64: object expected";
                    let key = Object.keys(message.mapSfixed64Sfixed64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapSfixed64Sfixed64: integer|Long key{k:sfixed64} expected";
                        if (!$util.isInteger(message.mapSfixed64Sfixed64[key[i]]) && !(message.mapSfixed64Sfixed64[key[i]] && $util.isInteger(message.mapSfixed64Sfixed64[key[i]].low) && $util.isInteger(message.mapSfixed64Sfixed64[key[i]].high)))
                            return "mapSfixed64Sfixed64: integer|Long{k:sfixed64} expected";
                    }
                }
                if (message.mapInt32Float != null && message.hasOwnProperty("mapInt32Float")) {
                    if (!$util.isObject(message.mapInt32Float))
                        return "mapInt32Float: object expected";
                    let key = Object.keys(message.mapInt32Float);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32Float: integer key{k:int32} expected";
                        if (typeof message.mapInt32Float[key[i]] !== "number")
                            return "mapInt32Float: number{k:int32} expected";
                    }
                }
                if (message.mapInt32Double != null && message.hasOwnProperty("mapInt32Double")) {
                    if (!$util.isObject(message.mapInt32Double))
                        return "mapInt32Double: object expected";
                    let key = Object.keys(message.mapInt32Double);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32Double: integer key{k:int32} expected";
                        if (typeof message.mapInt32Double[key[i]] !== "number")
                            return "mapInt32Double: number{k:int32} expected";
                    }
                }
                if (message.mapBoolBool != null && message.hasOwnProperty("mapBoolBool")) {
                    if (!$util.isObject(message.mapBoolBool))
                        return "mapBoolBool: object expected";
                    let key = Object.keys(message.mapBoolBool);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key2Re.test(key[i]))
                            return "mapBoolBool: boolean key{k:bool} expected";
                        if (typeof message.mapBoolBool[key[i]] !== "boolean")
                            return "mapBoolBool: boolean{k:bool} expected";
                    }
                }
                if (message.mapStringString != null && message.hasOwnProperty("mapStringString")) {
                    if (!$util.isObject(message.mapStringString))
                        return "mapStringString: object expected";
                    let key = Object.keys(message.mapStringString);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.mapStringString[key[i]]))
                            return "mapStringString: string{k:string} expected";
                }
                if (message.mapStringBytes != null && message.hasOwnProperty("mapStringBytes")) {
                    if (!$util.isObject(message.mapStringBytes))
                        return "mapStringBytes: object expected";
                    let key = Object.keys(message.mapStringBytes);
                    for (let i = 0; i < key.length; ++i)
                        if (!(message.mapStringBytes[key[i]] && typeof message.mapStringBytes[key[i]].length === "number" || $util.isString(message.mapStringBytes[key[i]])))
                            return "mapStringBytes: buffer{k:string} expected";
                }
                if (message.mapStringNestedMessage != null && message.hasOwnProperty("mapStringNestedMessage")) {
                    if (!$util.isObject(message.mapStringNestedMessage))
                        return "mapStringNestedMessage: object expected";
                    let key = Object.keys(message.mapStringNestedMessage);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify(message.mapStringNestedMessage[key[i]]);
                        if (error)
                            return "mapStringNestedMessage." + error;
                    }
                }
                if (message.mapStringForeignMessage != null && message.hasOwnProperty("mapStringForeignMessage")) {
                    if (!$util.isObject(message.mapStringForeignMessage))
                        return "mapStringForeignMessage: object expected";
                    let key = Object.keys(message.mapStringForeignMessage);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.protobuf_test_messages.proto3.ForeignMessage.verify(message.mapStringForeignMessage[key[i]]);
                        if (error)
                            return "mapStringForeignMessage." + error;
                    }
                }
                if (message.mapStringNestedEnum != null && message.hasOwnProperty("mapStringNestedEnum")) {
                    if (!$util.isObject(message.mapStringNestedEnum))
                        return "mapStringNestedEnum: object expected";
                    let key = Object.keys(message.mapStringNestedEnum);
                    for (let i = 0; i < key.length; ++i)
                        switch (message.mapStringNestedEnum[key[i]]) {
                        default:
                            return "mapStringNestedEnum: enum value{k:string} expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.mapStringForeignEnum != null && message.hasOwnProperty("mapStringForeignEnum")) {
                    if (!$util.isObject(message.mapStringForeignEnum))
                        return "mapStringForeignEnum: object expected";
                    let key = Object.keys(message.mapStringForeignEnum);
                    for (let i = 0; i < key.length; ++i)
                        switch (message.mapStringForeignEnum[key[i]]) {
                        default:
                            return "mapStringForeignEnum: enum value{k:string} expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                }
                if (message.oneofUint32 != null && message.hasOwnProperty("oneofUint32")) {
                    properties.oneofField = 1;
                    if (!$util.isInteger(message.oneofUint32))
                        return "oneofUint32: integer expected";
                }
                if (message.oneofNestedMessage != null && message.hasOwnProperty("oneofNestedMessage")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    {
                        let error = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify(message.oneofNestedMessage);
                        if (error)
                            return "oneofNestedMessage." + error;
                    }
                }
                if (message.oneofString != null && message.hasOwnProperty("oneofString")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (!$util.isString(message.oneofString))
                        return "oneofString: string expected";
                }
                if (message.oneofBytes != null && message.hasOwnProperty("oneofBytes")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (!(message.oneofBytes && typeof message.oneofBytes.length === "number" || $util.isString(message.oneofBytes)))
                        return "oneofBytes: buffer expected";
                }
                if (message.oneofBool != null && message.hasOwnProperty("oneofBool")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (typeof message.oneofBool !== "boolean")
                        return "oneofBool: boolean expected";
                }
                if (message.oneofUint64 != null && message.hasOwnProperty("oneofUint64")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (!$util.isInteger(message.oneofUint64) && !(message.oneofUint64 && $util.isInteger(message.oneofUint64.low) && $util.isInteger(message.oneofUint64.high)))
                        return "oneofUint64: integer|Long expected";
                }
                if (message.oneofFloat != null && message.hasOwnProperty("oneofFloat")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (typeof message.oneofFloat !== "number")
                        return "oneofFloat: number expected";
                }
                if (message.oneofDouble != null && message.hasOwnProperty("oneofDouble")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (typeof message.oneofDouble !== "number")
                        return "oneofDouble: number expected";
                }
                if (message.oneofEnum != null && message.hasOwnProperty("oneofEnum")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    switch (message.oneofEnum) {
                    default:
                        return "oneofEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case -1:
                        break;
                    }
                }
                if (message.oneofNullValue != null && message.hasOwnProperty("oneofNullValue")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    switch (message.oneofNullValue) {
                    default:
                        return "oneofNullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.optionalBoolWrapper != null && message.hasOwnProperty("optionalBoolWrapper")) {
                    let error = $root.google.protobuf.BoolValue.verify(message.optionalBoolWrapper);
                    if (error)
                        return "optionalBoolWrapper." + error;
                }
                if (message.optionalInt32Wrapper != null && message.hasOwnProperty("optionalInt32Wrapper")) {
                    let error = $root.google.protobuf.Int32Value.verify(message.optionalInt32Wrapper);
                    if (error)
                        return "optionalInt32Wrapper." + error;
                }
                if (message.optionalInt64Wrapper != null && message.hasOwnProperty("optionalInt64Wrapper")) {
                    let error = $root.google.protobuf.Int64Value.verify(message.optionalInt64Wrapper);
                    if (error)
                        return "optionalInt64Wrapper." + error;
                }
                if (message.optionalUint32Wrapper != null && message.hasOwnProperty("optionalUint32Wrapper")) {
                    let error = $root.google.protobuf.UInt32Value.verify(message.optionalUint32Wrapper);
                    if (error)
                        return "optionalUint32Wrapper." + error;
                }
                if (message.optionalUint64Wrapper != null && message.hasOwnProperty("optionalUint64Wrapper")) {
                    let error = $root.google.protobuf.UInt64Value.verify(message.optionalUint64Wrapper);
                    if (error)
                        return "optionalUint64Wrapper." + error;
                }
                if (message.optionalFloatWrapper != null && message.hasOwnProperty("optionalFloatWrapper")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.optionalFloatWrapper);
                    if (error)
                        return "optionalFloatWrapper." + error;
                }
                if (message.optionalDoubleWrapper != null && message.hasOwnProperty("optionalDoubleWrapper")) {
                    let error = $root.google.protobuf.DoubleValue.verify(message.optionalDoubleWrapper);
                    if (error)
                        return "optionalDoubleWrapper." + error;
                }
                if (message.optionalStringWrapper != null && message.hasOwnProperty("optionalStringWrapper")) {
                    let error = $root.google.protobuf.StringValue.verify(message.optionalStringWrapper);
                    if (error)
                        return "optionalStringWrapper." + error;
                }
                if (message.optionalBytesWrapper != null && message.hasOwnProperty("optionalBytesWrapper")) {
                    let error = $root.google.protobuf.BytesValue.verify(message.optionalBytesWrapper);
                    if (error)
                        return "optionalBytesWrapper." + error;
                }
                if (message.repeatedBoolWrapper != null && message.hasOwnProperty("repeatedBoolWrapper")) {
                    if (!Array.isArray(message.repeatedBoolWrapper))
                        return "repeatedBoolWrapper: array expected";
                    for (let i = 0; i < message.repeatedBoolWrapper.length; ++i) {
                        let error = $root.google.protobuf.BoolValue.verify(message.repeatedBoolWrapper[i]);
                        if (error)
                            return "repeatedBoolWrapper." + error;
                    }
                }
                if (message.repeatedInt32Wrapper != null && message.hasOwnProperty("repeatedInt32Wrapper")) {
                    if (!Array.isArray(message.repeatedInt32Wrapper))
                        return "repeatedInt32Wrapper: array expected";
                    for (let i = 0; i < message.repeatedInt32Wrapper.length; ++i) {
                        let error = $root.google.protobuf.Int32Value.verify(message.repeatedInt32Wrapper[i]);
                        if (error)
                            return "repeatedInt32Wrapper." + error;
                    }
                }
                if (message.repeatedInt64Wrapper != null && message.hasOwnProperty("repeatedInt64Wrapper")) {
                    if (!Array.isArray(message.repeatedInt64Wrapper))
                        return "repeatedInt64Wrapper: array expected";
                    for (let i = 0; i < message.repeatedInt64Wrapper.length; ++i) {
                        let error = $root.google.protobuf.Int64Value.verify(message.repeatedInt64Wrapper[i]);
                        if (error)
                            return "repeatedInt64Wrapper." + error;
                    }
                }
                if (message.repeatedUint32Wrapper != null && message.hasOwnProperty("repeatedUint32Wrapper")) {
                    if (!Array.isArray(message.repeatedUint32Wrapper))
                        return "repeatedUint32Wrapper: array expected";
                    for (let i = 0; i < message.repeatedUint32Wrapper.length; ++i) {
                        let error = $root.google.protobuf.UInt32Value.verify(message.repeatedUint32Wrapper[i]);
                        if (error)
                            return "repeatedUint32Wrapper." + error;
                    }
                }
                if (message.repeatedUint64Wrapper != null && message.hasOwnProperty("repeatedUint64Wrapper")) {
                    if (!Array.isArray(message.repeatedUint64Wrapper))
                        return "repeatedUint64Wrapper: array expected";
                    for (let i = 0; i < message.repeatedUint64Wrapper.length; ++i) {
                        let error = $root.google.protobuf.UInt64Value.verify(message.repeatedUint64Wrapper[i]);
                        if (error)
                            return "repeatedUint64Wrapper." + error;
                    }
                }
                if (message.repeatedFloatWrapper != null && message.hasOwnProperty("repeatedFloatWrapper")) {
                    if (!Array.isArray(message.repeatedFloatWrapper))
                        return "repeatedFloatWrapper: array expected";
                    for (let i = 0; i < message.repeatedFloatWrapper.length; ++i) {
                        let error = $root.google.protobuf.FloatValue.verify(message.repeatedFloatWrapper[i]);
                        if (error)
                            return "repeatedFloatWrapper." + error;
                    }
                }
                if (message.repeatedDoubleWrapper != null && message.hasOwnProperty("repeatedDoubleWrapper")) {
                    if (!Array.isArray(message.repeatedDoubleWrapper))
                        return "repeatedDoubleWrapper: array expected";
                    for (let i = 0; i < message.repeatedDoubleWrapper.length; ++i) {
                        let error = $root.google.protobuf.DoubleValue.verify(message.repeatedDoubleWrapper[i]);
                        if (error)
                            return "repeatedDoubleWrapper." + error;
                    }
                }
                if (message.repeatedStringWrapper != null && message.hasOwnProperty("repeatedStringWrapper")) {
                    if (!Array.isArray(message.repeatedStringWrapper))
                        return "repeatedStringWrapper: array expected";
                    for (let i = 0; i < message.repeatedStringWrapper.length; ++i) {
                        let error = $root.google.protobuf.StringValue.verify(message.repeatedStringWrapper[i]);
                        if (error)
                            return "repeatedStringWrapper." + error;
                    }
                }
                if (message.repeatedBytesWrapper != null && message.hasOwnProperty("repeatedBytesWrapper")) {
                    if (!Array.isArray(message.repeatedBytesWrapper))
                        return "repeatedBytesWrapper: array expected";
                    for (let i = 0; i < message.repeatedBytesWrapper.length; ++i) {
                        let error = $root.google.protobuf.BytesValue.verify(message.repeatedBytesWrapper[i]);
                        if (error)
                            return "repeatedBytesWrapper." + error;
                    }
                }
                if (message.optionalDuration != null && message.hasOwnProperty("optionalDuration")) {
                    let error = $root.google.protobuf.Duration.verify(message.optionalDuration);
                    if (error)
                        return "optionalDuration." + error;
                }
                if (message.optionalTimestamp != null && message.hasOwnProperty("optionalTimestamp")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.optionalTimestamp);
                    if (error)
                        return "optionalTimestamp." + error;
                }
                if (message.optionalFieldMask != null && message.hasOwnProperty("optionalFieldMask")) {
                    let error = $root.google.protobuf.FieldMask.verify(message.optionalFieldMask);
                    if (error)
                        return "optionalFieldMask." + error;
                }
                if (message.optionalStruct != null && message.hasOwnProperty("optionalStruct")) {
                    let error = $root.google.protobuf.Struct.verify(message.optionalStruct);
                    if (error)
                        return "optionalStruct." + error;
                }
                if (message.optionalAny != null && message.hasOwnProperty("optionalAny")) {
                    let error = $root.google.protobuf.Any.verify(message.optionalAny);
                    if (error)
                        return "optionalAny." + error;
                }
                if (message.optionalValue != null && message.hasOwnProperty("optionalValue")) {
                    let error = $root.google.protobuf.Value.verify(message.optionalValue);
                    if (error)
                        return "optionalValue." + error;
                }
                if (message.optionalNullValue != null && message.hasOwnProperty("optionalNullValue"))
                    switch (message.optionalNullValue) {
                    default:
                        return "optionalNullValue: enum value expected";
                    case 0:
                        break;
                    }
                if (message.repeatedDuration != null && message.hasOwnProperty("repeatedDuration")) {
                    if (!Array.isArray(message.repeatedDuration))
                        return "repeatedDuration: array expected";
                    for (let i = 0; i < message.repeatedDuration.length; ++i) {
                        let error = $root.google.protobuf.Duration.verify(message.repeatedDuration[i]);
                        if (error)
                            return "repeatedDuration." + error;
                    }
                }
                if (message.repeatedTimestamp != null && message.hasOwnProperty("repeatedTimestamp")) {
                    if (!Array.isArray(message.repeatedTimestamp))
                        return "repeatedTimestamp: array expected";
                    for (let i = 0; i < message.repeatedTimestamp.length; ++i) {
                        let error = $root.google.protobuf.Timestamp.verify(message.repeatedTimestamp[i]);
                        if (error)
                            return "repeatedTimestamp." + error;
                    }
                }
                if (message.repeatedFieldmask != null && message.hasOwnProperty("repeatedFieldmask")) {
                    if (!Array.isArray(message.repeatedFieldmask))
                        return "repeatedFieldmask: array expected";
                    for (let i = 0; i < message.repeatedFieldmask.length; ++i) {
                        let error = $root.google.protobuf.FieldMask.verify(message.repeatedFieldmask[i]);
                        if (error)
                            return "repeatedFieldmask." + error;
                    }
                }
                if (message.repeatedStruct != null && message.hasOwnProperty("repeatedStruct")) {
                    if (!Array.isArray(message.repeatedStruct))
                        return "repeatedStruct: array expected";
                    for (let i = 0; i < message.repeatedStruct.length; ++i) {
                        let error = $root.google.protobuf.Struct.verify(message.repeatedStruct[i]);
                        if (error)
                            return "repeatedStruct." + error;
                    }
                }
                if (message.repeatedAny != null && message.hasOwnProperty("repeatedAny")) {
                    if (!Array.isArray(message.repeatedAny))
                        return "repeatedAny: array expected";
                    for (let i = 0; i < message.repeatedAny.length; ++i) {
                        let error = $root.google.protobuf.Any.verify(message.repeatedAny[i]);
                        if (error)
                            return "repeatedAny." + error;
                    }
                }
                if (message.repeatedValue != null && message.hasOwnProperty("repeatedValue")) {
                    if (!Array.isArray(message.repeatedValue))
                        return "repeatedValue: array expected";
                    for (let i = 0; i < message.repeatedValue.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.repeatedValue[i]);
                        if (error)
                            return "repeatedValue." + error;
                    }
                }
                if (message.repeatedListValue != null && message.hasOwnProperty("repeatedListValue")) {
                    if (!Array.isArray(message.repeatedListValue))
                        return "repeatedListValue: array expected";
                    for (let i = 0; i < message.repeatedListValue.length; ++i) {
                        let error = $root.google.protobuf.ListValue.verify(message.repeatedListValue[i]);
                        if (error)
                            return "repeatedListValue." + error;
                    }
                }
                if (message.fieldname1 != null && message.hasOwnProperty("fieldname1"))
                    if (!$util.isInteger(message.fieldname1))
                        return "fieldname1: integer expected";
                if (message.fieldName2 != null && message.hasOwnProperty("fieldName2"))
                    if (!$util.isInteger(message.fieldName2))
                        return "fieldName2: integer expected";
                if (message._fieldName3 != null && message.hasOwnProperty("_fieldName3"))
                    if (!$util.isInteger(message._fieldName3))
                        return "_fieldName3: integer expected";
                if (message.field_Name4_ != null && message.hasOwnProperty("field_Name4_"))
                    if (!$util.isInteger(message.field_Name4_))
                        return "field_Name4_: integer expected";
                if (message.field0name5 != null && message.hasOwnProperty("field0name5"))
                    if (!$util.isInteger(message.field0name5))
                        return "field0name5: integer expected";
                if (message.field_0Name6 != null && message.hasOwnProperty("field_0Name6"))
                    if (!$util.isInteger(message.field_0Name6))
                        return "field_0Name6: integer expected";
                if (message.fieldName7 != null && message.hasOwnProperty("fieldName7"))
                    if (!$util.isInteger(message.fieldName7))
                        return "fieldName7: integer expected";
                if (message.FieldName8 != null && message.hasOwnProperty("FieldName8"))
                    if (!$util.isInteger(message.FieldName8))
                        return "FieldName8: integer expected";
                if (message.field_Name9 != null && message.hasOwnProperty("field_Name9"))
                    if (!$util.isInteger(message.field_Name9))
                        return "field_Name9: integer expected";
                if (message.Field_Name10 != null && message.hasOwnProperty("Field_Name10"))
                    if (!$util.isInteger(message.Field_Name10))
                        return "Field_Name10: integer expected";
                if (message.FIELD_NAME11 != null && message.hasOwnProperty("FIELD_NAME11"))
                    if (!$util.isInteger(message.FIELD_NAME11))
                        return "FIELD_NAME11: integer expected";
                if (message.FIELDName12 != null && message.hasOwnProperty("FIELDName12"))
                    if (!$util.isInteger(message.FIELDName12))
                        return "FIELDName12: integer expected";
                if (message._FieldName13 != null && message.hasOwnProperty("_FieldName13"))
                    if (!$util.isInteger(message._FieldName13))
                        return "_FieldName13: integer expected";
                if (message.__FieldName14 != null && message.hasOwnProperty("__FieldName14"))
                    if (!$util.isInteger(message.__FieldName14))
                        return "__FieldName14: integer expected";
                if (message.field_Name15 != null && message.hasOwnProperty("field_Name15"))
                    if (!$util.isInteger(message.field_Name15))
                        return "field_Name15: integer expected";
                if (message.field__Name16 != null && message.hasOwnProperty("field__Name16"))
                    if (!$util.isInteger(message.field__Name16))
                        return "field__Name16: integer expected";
                if (message.fieldName17__ != null && message.hasOwnProperty("fieldName17__"))
                    if (!$util.isInteger(message.fieldName17__))
                        return "fieldName17__: integer expected";
                if (message.FieldName18__ != null && message.hasOwnProperty("FieldName18__"))
                    if (!$util.isInteger(message.FieldName18__))
                        return "FieldName18__: integer expected";
                return null;
            };

            /**
             * Creates a TestAllTypesProto3 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto3.TestAllTypesProto3} TestAllTypesProto3
             */
            TestAllTypesProto3.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto3.TestAllTypesProto3)
                    return object;
                let message = new $root.protobuf_test_messages.proto3.TestAllTypesProto3();
                if (object.optionalInt32 != null)
                    message.optionalInt32 = object.optionalInt32 | 0;
                if (object.optionalInt64 != null)
                    if ($util.Long)
                        (message.optionalInt64 = $util.Long.fromValue(object.optionalInt64)).unsigned = false;
                    else if (typeof object.optionalInt64 === "string")
                        message.optionalInt64 = parseInt(object.optionalInt64, 10);
                    else if (typeof object.optionalInt64 === "number")
                        message.optionalInt64 = object.optionalInt64;
                    else if (typeof object.optionalInt64 === "object")
                        message.optionalInt64 = new $util.LongBits(object.optionalInt64.low >>> 0, object.optionalInt64.high >>> 0).toNumber();
                if (object.optionalUint32 != null)
                    message.optionalUint32 = object.optionalUint32 >>> 0;
                if (object.optionalUint64 != null)
                    if ($util.Long)
                        (message.optionalUint64 = $util.Long.fromValue(object.optionalUint64)).unsigned = true;
                    else if (typeof object.optionalUint64 === "string")
                        message.optionalUint64 = parseInt(object.optionalUint64, 10);
                    else if (typeof object.optionalUint64 === "number")
                        message.optionalUint64 = object.optionalUint64;
                    else if (typeof object.optionalUint64 === "object")
                        message.optionalUint64 = new $util.LongBits(object.optionalUint64.low >>> 0, object.optionalUint64.high >>> 0).toNumber(true);
                if (object.optionalSint32 != null)
                    message.optionalSint32 = object.optionalSint32 | 0;
                if (object.optionalSint64 != null)
                    if ($util.Long)
                        (message.optionalSint64 = $util.Long.fromValue(object.optionalSint64)).unsigned = false;
                    else if (typeof object.optionalSint64 === "string")
                        message.optionalSint64 = parseInt(object.optionalSint64, 10);
                    else if (typeof object.optionalSint64 === "number")
                        message.optionalSint64 = object.optionalSint64;
                    else if (typeof object.optionalSint64 === "object")
                        message.optionalSint64 = new $util.LongBits(object.optionalSint64.low >>> 0, object.optionalSint64.high >>> 0).toNumber();
                if (object.optionalFixed32 != null)
                    message.optionalFixed32 = object.optionalFixed32 >>> 0;
                if (object.optionalFixed64 != null)
                    if ($util.Long)
                        (message.optionalFixed64 = $util.Long.fromValue(object.optionalFixed64)).unsigned = false;
                    else if (typeof object.optionalFixed64 === "string")
                        message.optionalFixed64 = parseInt(object.optionalFixed64, 10);
                    else if (typeof object.optionalFixed64 === "number")
                        message.optionalFixed64 = object.optionalFixed64;
                    else if (typeof object.optionalFixed64 === "object")
                        message.optionalFixed64 = new $util.LongBits(object.optionalFixed64.low >>> 0, object.optionalFixed64.high >>> 0).toNumber();
                if (object.optionalSfixed32 != null)
                    message.optionalSfixed32 = object.optionalSfixed32 | 0;
                if (object.optionalSfixed64 != null)
                    if ($util.Long)
                        (message.optionalSfixed64 = $util.Long.fromValue(object.optionalSfixed64)).unsigned = false;
                    else if (typeof object.optionalSfixed64 === "string")
                        message.optionalSfixed64 = parseInt(object.optionalSfixed64, 10);
                    else if (typeof object.optionalSfixed64 === "number")
                        message.optionalSfixed64 = object.optionalSfixed64;
                    else if (typeof object.optionalSfixed64 === "object")
                        message.optionalSfixed64 = new $util.LongBits(object.optionalSfixed64.low >>> 0, object.optionalSfixed64.high >>> 0).toNumber();
                if (object.optionalFloat != null)
                    message.optionalFloat = Number(object.optionalFloat);
                if (object.optionalDouble != null)
                    message.optionalDouble = Number(object.optionalDouble);
                if (object.optionalBool != null)
                    message.optionalBool = Boolean(object.optionalBool);
                if (object.optionalString != null)
                    message.optionalString = String(object.optionalString);
                if (object.optionalBytes != null)
                    if (typeof object.optionalBytes === "string")
                        $util.base64.decode(object.optionalBytes, message.optionalBytes = $util.newBuffer($util.base64.length(object.optionalBytes)), 0);
                    else if (object.optionalBytes.length >= 0)
                        message.optionalBytes = object.optionalBytes;
                if (object.optionalNestedMessage != null) {
                    if (typeof object.optionalNestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalNestedMessage: object expected");
                    message.optionalNestedMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.fromObject(object.optionalNestedMessage);
                }
                if (object.optionalForeignMessage != null) {
                    if (typeof object.optionalForeignMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalForeignMessage: object expected");
                    message.optionalForeignMessage = $root.protobuf_test_messages.proto3.ForeignMessage.fromObject(object.optionalForeignMessage);
                }
                switch (object.optionalNestedEnum) {
                default:
                    if (typeof object.optionalNestedEnum === "number") {
                        message.optionalNestedEnum = object.optionalNestedEnum;
                        break;
                    }
                    break;
                case "FOO":
                case 0:
                    message.optionalNestedEnum = 0;
                    break;
                case "BAR":
                case 1:
                    message.optionalNestedEnum = 1;
                    break;
                case "BAZ":
                case 2:
                    message.optionalNestedEnum = 2;
                    break;
                case "NEG":
                case -1:
                    message.optionalNestedEnum = -1;
                    break;
                }
                switch (object.optionalForeignEnum) {
                default:
                    if (typeof object.optionalForeignEnum === "number") {
                        message.optionalForeignEnum = object.optionalForeignEnum;
                        break;
                    }
                    break;
                case "FOREIGN_FOO":
                case 0:
                    message.optionalForeignEnum = 0;
                    break;
                case "FOREIGN_BAR":
                case 1:
                    message.optionalForeignEnum = 1;
                    break;
                case "FOREIGN_BAZ":
                case 2:
                    message.optionalForeignEnum = 2;
                    break;
                }
                switch (object.optionalAliasedEnum) {
                default:
                    if (typeof object.optionalAliasedEnum === "number") {
                        message.optionalAliasedEnum = object.optionalAliasedEnum;
                        break;
                    }
                    break;
                case "ALIAS_FOO":
                case 0:
                    message.optionalAliasedEnum = 0;
                    break;
                case "ALIAS_BAR":
                case 1:
                    message.optionalAliasedEnum = 1;
                    break;
                case "ALIAS_BAZ":
                case 2:
                    message.optionalAliasedEnum = 2;
                    break;
                case "MOO":
                case 2:
                    message.optionalAliasedEnum = 2;
                    break;
                case "moo":
                case 2:
                    message.optionalAliasedEnum = 2;
                    break;
                case "bAz":
                case 2:
                    message.optionalAliasedEnum = 2;
                    break;
                }
                if (object.optionalStringPiece != null)
                    message.optionalStringPiece = String(object.optionalStringPiece);
                if (object.optionalCord != null)
                    message.optionalCord = String(object.optionalCord);
                if (object.recursiveMessage != null) {
                    if (typeof object.recursiveMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.recursiveMessage: object expected");
                    message.recursiveMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.fromObject(object.recursiveMessage);
                }
                if (object.repeatedInt32) {
                    if (!Array.isArray(object.repeatedInt32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedInt32: array expected");
                    message.repeatedInt32 = [];
                    for (let i = 0; i < object.repeatedInt32.length; ++i)
                        message.repeatedInt32[i] = object.repeatedInt32[i] | 0;
                }
                if (object.repeatedInt64) {
                    if (!Array.isArray(object.repeatedInt64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedInt64: array expected");
                    message.repeatedInt64 = [];
                    for (let i = 0; i < object.repeatedInt64.length; ++i)
                        if ($util.Long)
                            (message.repeatedInt64[i] = $util.Long.fromValue(object.repeatedInt64[i])).unsigned = false;
                        else if (typeof object.repeatedInt64[i] === "string")
                            message.repeatedInt64[i] = parseInt(object.repeatedInt64[i], 10);
                        else if (typeof object.repeatedInt64[i] === "number")
                            message.repeatedInt64[i] = object.repeatedInt64[i];
                        else if (typeof object.repeatedInt64[i] === "object")
                            message.repeatedInt64[i] = new $util.LongBits(object.repeatedInt64[i].low >>> 0, object.repeatedInt64[i].high >>> 0).toNumber();
                }
                if (object.repeatedUint32) {
                    if (!Array.isArray(object.repeatedUint32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedUint32: array expected");
                    message.repeatedUint32 = [];
                    for (let i = 0; i < object.repeatedUint32.length; ++i)
                        message.repeatedUint32[i] = object.repeatedUint32[i] >>> 0;
                }
                if (object.repeatedUint64) {
                    if (!Array.isArray(object.repeatedUint64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedUint64: array expected");
                    message.repeatedUint64 = [];
                    for (let i = 0; i < object.repeatedUint64.length; ++i)
                        if ($util.Long)
                            (message.repeatedUint64[i] = $util.Long.fromValue(object.repeatedUint64[i])).unsigned = true;
                        else if (typeof object.repeatedUint64[i] === "string")
                            message.repeatedUint64[i] = parseInt(object.repeatedUint64[i], 10);
                        else if (typeof object.repeatedUint64[i] === "number")
                            message.repeatedUint64[i] = object.repeatedUint64[i];
                        else if (typeof object.repeatedUint64[i] === "object")
                            message.repeatedUint64[i] = new $util.LongBits(object.repeatedUint64[i].low >>> 0, object.repeatedUint64[i].high >>> 0).toNumber(true);
                }
                if (object.repeatedSint32) {
                    if (!Array.isArray(object.repeatedSint32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedSint32: array expected");
                    message.repeatedSint32 = [];
                    for (let i = 0; i < object.repeatedSint32.length; ++i)
                        message.repeatedSint32[i] = object.repeatedSint32[i] | 0;
                }
                if (object.repeatedSint64) {
                    if (!Array.isArray(object.repeatedSint64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedSint64: array expected");
                    message.repeatedSint64 = [];
                    for (let i = 0; i < object.repeatedSint64.length; ++i)
                        if ($util.Long)
                            (message.repeatedSint64[i] = $util.Long.fromValue(object.repeatedSint64[i])).unsigned = false;
                        else if (typeof object.repeatedSint64[i] === "string")
                            message.repeatedSint64[i] = parseInt(object.repeatedSint64[i], 10);
                        else if (typeof object.repeatedSint64[i] === "number")
                            message.repeatedSint64[i] = object.repeatedSint64[i];
                        else if (typeof object.repeatedSint64[i] === "object")
                            message.repeatedSint64[i] = new $util.LongBits(object.repeatedSint64[i].low >>> 0, object.repeatedSint64[i].high >>> 0).toNumber();
                }
                if (object.repeatedFixed32) {
                    if (!Array.isArray(object.repeatedFixed32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFixed32: array expected");
                    message.repeatedFixed32 = [];
                    for (let i = 0; i < object.repeatedFixed32.length; ++i)
                        message.repeatedFixed32[i] = object.repeatedFixed32[i] >>> 0;
                }
                if (object.repeatedFixed64) {
                    if (!Array.isArray(object.repeatedFixed64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFixed64: array expected");
                    message.repeatedFixed64 = [];
                    for (let i = 0; i < object.repeatedFixed64.length; ++i)
                        if ($util.Long)
                            (message.repeatedFixed64[i] = $util.Long.fromValue(object.repeatedFixed64[i])).unsigned = false;
                        else if (typeof object.repeatedFixed64[i] === "string")
                            message.repeatedFixed64[i] = parseInt(object.repeatedFixed64[i], 10);
                        else if (typeof object.repeatedFixed64[i] === "number")
                            message.repeatedFixed64[i] = object.repeatedFixed64[i];
                        else if (typeof object.repeatedFixed64[i] === "object")
                            message.repeatedFixed64[i] = new $util.LongBits(object.repeatedFixed64[i].low >>> 0, object.repeatedFixed64[i].high >>> 0).toNumber();
                }
                if (object.repeatedSfixed32) {
                    if (!Array.isArray(object.repeatedSfixed32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedSfixed32: array expected");
                    message.repeatedSfixed32 = [];
                    for (let i = 0; i < object.repeatedSfixed32.length; ++i)
                        message.repeatedSfixed32[i] = object.repeatedSfixed32[i] | 0;
                }
                if (object.repeatedSfixed64) {
                    if (!Array.isArray(object.repeatedSfixed64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedSfixed64: array expected");
                    message.repeatedSfixed64 = [];
                    for (let i = 0; i < object.repeatedSfixed64.length; ++i)
                        if ($util.Long)
                            (message.repeatedSfixed64[i] = $util.Long.fromValue(object.repeatedSfixed64[i])).unsigned = false;
                        else if (typeof object.repeatedSfixed64[i] === "string")
                            message.repeatedSfixed64[i] = parseInt(object.repeatedSfixed64[i], 10);
                        else if (typeof object.repeatedSfixed64[i] === "number")
                            message.repeatedSfixed64[i] = object.repeatedSfixed64[i];
                        else if (typeof object.repeatedSfixed64[i] === "object")
                            message.repeatedSfixed64[i] = new $util.LongBits(object.repeatedSfixed64[i].low >>> 0, object.repeatedSfixed64[i].high >>> 0).toNumber();
                }
                if (object.repeatedFloat) {
                    if (!Array.isArray(object.repeatedFloat))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFloat: array expected");
                    message.repeatedFloat = [];
                    for (let i = 0; i < object.repeatedFloat.length; ++i)
                        message.repeatedFloat[i] = Number(object.repeatedFloat[i]);
                }
                if (object.repeatedDouble) {
                    if (!Array.isArray(object.repeatedDouble))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedDouble: array expected");
                    message.repeatedDouble = [];
                    for (let i = 0; i < object.repeatedDouble.length; ++i)
                        message.repeatedDouble[i] = Number(object.repeatedDouble[i]);
                }
                if (object.repeatedBool) {
                    if (!Array.isArray(object.repeatedBool))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedBool: array expected");
                    message.repeatedBool = [];
                    for (let i = 0; i < object.repeatedBool.length; ++i)
                        message.repeatedBool[i] = Boolean(object.repeatedBool[i]);
                }
                if (object.repeatedString) {
                    if (!Array.isArray(object.repeatedString))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedString: array expected");
                    message.repeatedString = [];
                    for (let i = 0; i < object.repeatedString.length; ++i)
                        message.repeatedString[i] = String(object.repeatedString[i]);
                }
                if (object.repeatedBytes) {
                    if (!Array.isArray(object.repeatedBytes))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedBytes: array expected");
                    message.repeatedBytes = [];
                    for (let i = 0; i < object.repeatedBytes.length; ++i)
                        if (typeof object.repeatedBytes[i] === "string")
                            $util.base64.decode(object.repeatedBytes[i], message.repeatedBytes[i] = $util.newBuffer($util.base64.length(object.repeatedBytes[i])), 0);
                        else if (object.repeatedBytes[i].length >= 0)
                            message.repeatedBytes[i] = object.repeatedBytes[i];
                }
                if (object.repeatedNestedMessage) {
                    if (!Array.isArray(object.repeatedNestedMessage))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedNestedMessage: array expected");
                    message.repeatedNestedMessage = [];
                    for (let i = 0; i < object.repeatedNestedMessage.length; ++i) {
                        if (typeof object.repeatedNestedMessage[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedNestedMessage: object expected");
                        message.repeatedNestedMessage[i] = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.fromObject(object.repeatedNestedMessage[i]);
                    }
                }
                if (object.repeatedForeignMessage) {
                    if (!Array.isArray(object.repeatedForeignMessage))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedForeignMessage: array expected");
                    message.repeatedForeignMessage = [];
                    for (let i = 0; i < object.repeatedForeignMessage.length; ++i) {
                        if (typeof object.repeatedForeignMessage[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedForeignMessage: object expected");
                        message.repeatedForeignMessage[i] = $root.protobuf_test_messages.proto3.ForeignMessage.fromObject(object.repeatedForeignMessage[i]);
                    }
                }
                if (object.repeatedNestedEnum) {
                    if (!Array.isArray(object.repeatedNestedEnum))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedNestedEnum: array expected");
                    message.repeatedNestedEnum = [];
                    for (let i = 0; i < object.repeatedNestedEnum.length; ++i)
                        switch (object.repeatedNestedEnum[i]) {
                        default:
                            if (typeof object.repeatedNestedEnum[i] === "number") {
                                message.repeatedNestedEnum[i] = object.repeatedNestedEnum[i];
                                break;
                            }
                        case "FOO":
                        case 0:
                            message.repeatedNestedEnum[i] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.repeatedNestedEnum[i] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.repeatedNestedEnum[i] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.repeatedNestedEnum[i] = -1;
                            break;
                        }
                }
                if (object.repeatedForeignEnum) {
                    if (!Array.isArray(object.repeatedForeignEnum))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedForeignEnum: array expected");
                    message.repeatedForeignEnum = [];
                    for (let i = 0; i < object.repeatedForeignEnum.length; ++i)
                        switch (object.repeatedForeignEnum[i]) {
                        default:
                            if (typeof object.repeatedForeignEnum[i] === "number") {
                                message.repeatedForeignEnum[i] = object.repeatedForeignEnum[i];
                                break;
                            }
                        case "FOREIGN_FOO":
                        case 0:
                            message.repeatedForeignEnum[i] = 0;
                            break;
                        case "FOREIGN_BAR":
                        case 1:
                            message.repeatedForeignEnum[i] = 1;
                            break;
                        case "FOREIGN_BAZ":
                        case 2:
                            message.repeatedForeignEnum[i] = 2;
                            break;
                        }
                }
                if (object.repeatedStringPiece) {
                    if (!Array.isArray(object.repeatedStringPiece))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedStringPiece: array expected");
                    message.repeatedStringPiece = [];
                    for (let i = 0; i < object.repeatedStringPiece.length; ++i)
                        message.repeatedStringPiece[i] = String(object.repeatedStringPiece[i]);
                }
                if (object.repeatedCord) {
                    if (!Array.isArray(object.repeatedCord))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedCord: array expected");
                    message.repeatedCord = [];
                    for (let i = 0; i < object.repeatedCord.length; ++i)
                        message.repeatedCord[i] = String(object.repeatedCord[i]);
                }
                if (object.packedInt32) {
                    if (!Array.isArray(object.packedInt32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedInt32: array expected");
                    message.packedInt32 = [];
                    for (let i = 0; i < object.packedInt32.length; ++i)
                        message.packedInt32[i] = object.packedInt32[i] | 0;
                }
                if (object.packedInt64) {
                    if (!Array.isArray(object.packedInt64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedInt64: array expected");
                    message.packedInt64 = [];
                    for (let i = 0; i < object.packedInt64.length; ++i)
                        if ($util.Long)
                            (message.packedInt64[i] = $util.Long.fromValue(object.packedInt64[i])).unsigned = false;
                        else if (typeof object.packedInt64[i] === "string")
                            message.packedInt64[i] = parseInt(object.packedInt64[i], 10);
                        else if (typeof object.packedInt64[i] === "number")
                            message.packedInt64[i] = object.packedInt64[i];
                        else if (typeof object.packedInt64[i] === "object")
                            message.packedInt64[i] = new $util.LongBits(object.packedInt64[i].low >>> 0, object.packedInt64[i].high >>> 0).toNumber();
                }
                if (object.packedUint32) {
                    if (!Array.isArray(object.packedUint32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedUint32: array expected");
                    message.packedUint32 = [];
                    for (let i = 0; i < object.packedUint32.length; ++i)
                        message.packedUint32[i] = object.packedUint32[i] >>> 0;
                }
                if (object.packedUint64) {
                    if (!Array.isArray(object.packedUint64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedUint64: array expected");
                    message.packedUint64 = [];
                    for (let i = 0; i < object.packedUint64.length; ++i)
                        if ($util.Long)
                            (message.packedUint64[i] = $util.Long.fromValue(object.packedUint64[i])).unsigned = true;
                        else if (typeof object.packedUint64[i] === "string")
                            message.packedUint64[i] = parseInt(object.packedUint64[i], 10);
                        else if (typeof object.packedUint64[i] === "number")
                            message.packedUint64[i] = object.packedUint64[i];
                        else if (typeof object.packedUint64[i] === "object")
                            message.packedUint64[i] = new $util.LongBits(object.packedUint64[i].low >>> 0, object.packedUint64[i].high >>> 0).toNumber(true);
                }
                if (object.packedSint32) {
                    if (!Array.isArray(object.packedSint32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedSint32: array expected");
                    message.packedSint32 = [];
                    for (let i = 0; i < object.packedSint32.length; ++i)
                        message.packedSint32[i] = object.packedSint32[i] | 0;
                }
                if (object.packedSint64) {
                    if (!Array.isArray(object.packedSint64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedSint64: array expected");
                    message.packedSint64 = [];
                    for (let i = 0; i < object.packedSint64.length; ++i)
                        if ($util.Long)
                            (message.packedSint64[i] = $util.Long.fromValue(object.packedSint64[i])).unsigned = false;
                        else if (typeof object.packedSint64[i] === "string")
                            message.packedSint64[i] = parseInt(object.packedSint64[i], 10);
                        else if (typeof object.packedSint64[i] === "number")
                            message.packedSint64[i] = object.packedSint64[i];
                        else if (typeof object.packedSint64[i] === "object")
                            message.packedSint64[i] = new $util.LongBits(object.packedSint64[i].low >>> 0, object.packedSint64[i].high >>> 0).toNumber();
                }
                if (object.packedFixed32) {
                    if (!Array.isArray(object.packedFixed32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedFixed32: array expected");
                    message.packedFixed32 = [];
                    for (let i = 0; i < object.packedFixed32.length; ++i)
                        message.packedFixed32[i] = object.packedFixed32[i] >>> 0;
                }
                if (object.packedFixed64) {
                    if (!Array.isArray(object.packedFixed64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedFixed64: array expected");
                    message.packedFixed64 = [];
                    for (let i = 0; i < object.packedFixed64.length; ++i)
                        if ($util.Long)
                            (message.packedFixed64[i] = $util.Long.fromValue(object.packedFixed64[i])).unsigned = false;
                        else if (typeof object.packedFixed64[i] === "string")
                            message.packedFixed64[i] = parseInt(object.packedFixed64[i], 10);
                        else if (typeof object.packedFixed64[i] === "number")
                            message.packedFixed64[i] = object.packedFixed64[i];
                        else if (typeof object.packedFixed64[i] === "object")
                            message.packedFixed64[i] = new $util.LongBits(object.packedFixed64[i].low >>> 0, object.packedFixed64[i].high >>> 0).toNumber();
                }
                if (object.packedSfixed32) {
                    if (!Array.isArray(object.packedSfixed32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedSfixed32: array expected");
                    message.packedSfixed32 = [];
                    for (let i = 0; i < object.packedSfixed32.length; ++i)
                        message.packedSfixed32[i] = object.packedSfixed32[i] | 0;
                }
                if (object.packedSfixed64) {
                    if (!Array.isArray(object.packedSfixed64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedSfixed64: array expected");
                    message.packedSfixed64 = [];
                    for (let i = 0; i < object.packedSfixed64.length; ++i)
                        if ($util.Long)
                            (message.packedSfixed64[i] = $util.Long.fromValue(object.packedSfixed64[i])).unsigned = false;
                        else if (typeof object.packedSfixed64[i] === "string")
                            message.packedSfixed64[i] = parseInt(object.packedSfixed64[i], 10);
                        else if (typeof object.packedSfixed64[i] === "number")
                            message.packedSfixed64[i] = object.packedSfixed64[i];
                        else if (typeof object.packedSfixed64[i] === "object")
                            message.packedSfixed64[i] = new $util.LongBits(object.packedSfixed64[i].low >>> 0, object.packedSfixed64[i].high >>> 0).toNumber();
                }
                if (object.packedFloat) {
                    if (!Array.isArray(object.packedFloat))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedFloat: array expected");
                    message.packedFloat = [];
                    for (let i = 0; i < object.packedFloat.length; ++i)
                        message.packedFloat[i] = Number(object.packedFloat[i]);
                }
                if (object.packedDouble) {
                    if (!Array.isArray(object.packedDouble))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedDouble: array expected");
                    message.packedDouble = [];
                    for (let i = 0; i < object.packedDouble.length; ++i)
                        message.packedDouble[i] = Number(object.packedDouble[i]);
                }
                if (object.packedBool) {
                    if (!Array.isArray(object.packedBool))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedBool: array expected");
                    message.packedBool = [];
                    for (let i = 0; i < object.packedBool.length; ++i)
                        message.packedBool[i] = Boolean(object.packedBool[i]);
                }
                if (object.packedNestedEnum) {
                    if (!Array.isArray(object.packedNestedEnum))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.packedNestedEnum: array expected");
                    message.packedNestedEnum = [];
                    for (let i = 0; i < object.packedNestedEnum.length; ++i)
                        switch (object.packedNestedEnum[i]) {
                        default:
                            if (typeof object.packedNestedEnum[i] === "number") {
                                message.packedNestedEnum[i] = object.packedNestedEnum[i];
                                break;
                            }
                        case "FOO":
                        case 0:
                            message.packedNestedEnum[i] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.packedNestedEnum[i] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.packedNestedEnum[i] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.packedNestedEnum[i] = -1;
                            break;
                        }
                }
                if (object.unpackedInt32) {
                    if (!Array.isArray(object.unpackedInt32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedInt32: array expected");
                    message.unpackedInt32 = [];
                    for (let i = 0; i < object.unpackedInt32.length; ++i)
                        message.unpackedInt32[i] = object.unpackedInt32[i] | 0;
                }
                if (object.unpackedInt64) {
                    if (!Array.isArray(object.unpackedInt64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedInt64: array expected");
                    message.unpackedInt64 = [];
                    for (let i = 0; i < object.unpackedInt64.length; ++i)
                        if ($util.Long)
                            (message.unpackedInt64[i] = $util.Long.fromValue(object.unpackedInt64[i])).unsigned = false;
                        else if (typeof object.unpackedInt64[i] === "string")
                            message.unpackedInt64[i] = parseInt(object.unpackedInt64[i], 10);
                        else if (typeof object.unpackedInt64[i] === "number")
                            message.unpackedInt64[i] = object.unpackedInt64[i];
                        else if (typeof object.unpackedInt64[i] === "object")
                            message.unpackedInt64[i] = new $util.LongBits(object.unpackedInt64[i].low >>> 0, object.unpackedInt64[i].high >>> 0).toNumber();
                }
                if (object.unpackedUint32) {
                    if (!Array.isArray(object.unpackedUint32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedUint32: array expected");
                    message.unpackedUint32 = [];
                    for (let i = 0; i < object.unpackedUint32.length; ++i)
                        message.unpackedUint32[i] = object.unpackedUint32[i] >>> 0;
                }
                if (object.unpackedUint64) {
                    if (!Array.isArray(object.unpackedUint64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedUint64: array expected");
                    message.unpackedUint64 = [];
                    for (let i = 0; i < object.unpackedUint64.length; ++i)
                        if ($util.Long)
                            (message.unpackedUint64[i] = $util.Long.fromValue(object.unpackedUint64[i])).unsigned = true;
                        else if (typeof object.unpackedUint64[i] === "string")
                            message.unpackedUint64[i] = parseInt(object.unpackedUint64[i], 10);
                        else if (typeof object.unpackedUint64[i] === "number")
                            message.unpackedUint64[i] = object.unpackedUint64[i];
                        else if (typeof object.unpackedUint64[i] === "object")
                            message.unpackedUint64[i] = new $util.LongBits(object.unpackedUint64[i].low >>> 0, object.unpackedUint64[i].high >>> 0).toNumber(true);
                }
                if (object.unpackedSint32) {
                    if (!Array.isArray(object.unpackedSint32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedSint32: array expected");
                    message.unpackedSint32 = [];
                    for (let i = 0; i < object.unpackedSint32.length; ++i)
                        message.unpackedSint32[i] = object.unpackedSint32[i] | 0;
                }
                if (object.unpackedSint64) {
                    if (!Array.isArray(object.unpackedSint64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedSint64: array expected");
                    message.unpackedSint64 = [];
                    for (let i = 0; i < object.unpackedSint64.length; ++i)
                        if ($util.Long)
                            (message.unpackedSint64[i] = $util.Long.fromValue(object.unpackedSint64[i])).unsigned = false;
                        else if (typeof object.unpackedSint64[i] === "string")
                            message.unpackedSint64[i] = parseInt(object.unpackedSint64[i], 10);
                        else if (typeof object.unpackedSint64[i] === "number")
                            message.unpackedSint64[i] = object.unpackedSint64[i];
                        else if (typeof object.unpackedSint64[i] === "object")
                            message.unpackedSint64[i] = new $util.LongBits(object.unpackedSint64[i].low >>> 0, object.unpackedSint64[i].high >>> 0).toNumber();
                }
                if (object.unpackedFixed32) {
                    if (!Array.isArray(object.unpackedFixed32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedFixed32: array expected");
                    message.unpackedFixed32 = [];
                    for (let i = 0; i < object.unpackedFixed32.length; ++i)
                        message.unpackedFixed32[i] = object.unpackedFixed32[i] >>> 0;
                }
                if (object.unpackedFixed64) {
                    if (!Array.isArray(object.unpackedFixed64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedFixed64: array expected");
                    message.unpackedFixed64 = [];
                    for (let i = 0; i < object.unpackedFixed64.length; ++i)
                        if ($util.Long)
                            (message.unpackedFixed64[i] = $util.Long.fromValue(object.unpackedFixed64[i])).unsigned = false;
                        else if (typeof object.unpackedFixed64[i] === "string")
                            message.unpackedFixed64[i] = parseInt(object.unpackedFixed64[i], 10);
                        else if (typeof object.unpackedFixed64[i] === "number")
                            message.unpackedFixed64[i] = object.unpackedFixed64[i];
                        else if (typeof object.unpackedFixed64[i] === "object")
                            message.unpackedFixed64[i] = new $util.LongBits(object.unpackedFixed64[i].low >>> 0, object.unpackedFixed64[i].high >>> 0).toNumber();
                }
                if (object.unpackedSfixed32) {
                    if (!Array.isArray(object.unpackedSfixed32))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedSfixed32: array expected");
                    message.unpackedSfixed32 = [];
                    for (let i = 0; i < object.unpackedSfixed32.length; ++i)
                        message.unpackedSfixed32[i] = object.unpackedSfixed32[i] | 0;
                }
                if (object.unpackedSfixed64) {
                    if (!Array.isArray(object.unpackedSfixed64))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedSfixed64: array expected");
                    message.unpackedSfixed64 = [];
                    for (let i = 0; i < object.unpackedSfixed64.length; ++i)
                        if ($util.Long)
                            (message.unpackedSfixed64[i] = $util.Long.fromValue(object.unpackedSfixed64[i])).unsigned = false;
                        else if (typeof object.unpackedSfixed64[i] === "string")
                            message.unpackedSfixed64[i] = parseInt(object.unpackedSfixed64[i], 10);
                        else if (typeof object.unpackedSfixed64[i] === "number")
                            message.unpackedSfixed64[i] = object.unpackedSfixed64[i];
                        else if (typeof object.unpackedSfixed64[i] === "object")
                            message.unpackedSfixed64[i] = new $util.LongBits(object.unpackedSfixed64[i].low >>> 0, object.unpackedSfixed64[i].high >>> 0).toNumber();
                }
                if (object.unpackedFloat) {
                    if (!Array.isArray(object.unpackedFloat))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedFloat: array expected");
                    message.unpackedFloat = [];
                    for (let i = 0; i < object.unpackedFloat.length; ++i)
                        message.unpackedFloat[i] = Number(object.unpackedFloat[i]);
                }
                if (object.unpackedDouble) {
                    if (!Array.isArray(object.unpackedDouble))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedDouble: array expected");
                    message.unpackedDouble = [];
                    for (let i = 0; i < object.unpackedDouble.length; ++i)
                        message.unpackedDouble[i] = Number(object.unpackedDouble[i]);
                }
                if (object.unpackedBool) {
                    if (!Array.isArray(object.unpackedBool))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedBool: array expected");
                    message.unpackedBool = [];
                    for (let i = 0; i < object.unpackedBool.length; ++i)
                        message.unpackedBool[i] = Boolean(object.unpackedBool[i]);
                }
                if (object.unpackedNestedEnum) {
                    if (!Array.isArray(object.unpackedNestedEnum))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.unpackedNestedEnum: array expected");
                    message.unpackedNestedEnum = [];
                    for (let i = 0; i < object.unpackedNestedEnum.length; ++i)
                        switch (object.unpackedNestedEnum[i]) {
                        default:
                            if (typeof object.unpackedNestedEnum[i] === "number") {
                                message.unpackedNestedEnum[i] = object.unpackedNestedEnum[i];
                                break;
                            }
                        case "FOO":
                        case 0:
                            message.unpackedNestedEnum[i] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.unpackedNestedEnum[i] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.unpackedNestedEnum[i] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.unpackedNestedEnum[i] = -1;
                            break;
                        }
                }
                if (object.mapInt32Int32) {
                    if (typeof object.mapInt32Int32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapInt32Int32: object expected");
                    message.mapInt32Int32 = {};
                    for (let keys = Object.keys(object.mapInt32Int32), i = 0; i < keys.length; ++i)
                        message.mapInt32Int32[keys[i]] = object.mapInt32Int32[keys[i]] | 0;
                }
                if (object.mapInt64Int64) {
                    if (typeof object.mapInt64Int64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapInt64Int64: object expected");
                    message.mapInt64Int64 = {};
                    for (let keys = Object.keys(object.mapInt64Int64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapInt64Int64[keys[i]] = $util.Long.fromValue(object.mapInt64Int64[keys[i]])).unsigned = false;
                        else if (typeof object.mapInt64Int64[keys[i]] === "string")
                            message.mapInt64Int64[keys[i]] = parseInt(object.mapInt64Int64[keys[i]], 10);
                        else if (typeof object.mapInt64Int64[keys[i]] === "number")
                            message.mapInt64Int64[keys[i]] = object.mapInt64Int64[keys[i]];
                        else if (typeof object.mapInt64Int64[keys[i]] === "object")
                            message.mapInt64Int64[keys[i]] = new $util.LongBits(object.mapInt64Int64[keys[i]].low >>> 0, object.mapInt64Int64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapUint32Uint32) {
                    if (typeof object.mapUint32Uint32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapUint32Uint32: object expected");
                    message.mapUint32Uint32 = {};
                    for (let keys = Object.keys(object.mapUint32Uint32), i = 0; i < keys.length; ++i)
                        message.mapUint32Uint32[keys[i]] = object.mapUint32Uint32[keys[i]] >>> 0;
                }
                if (object.mapUint64Uint64) {
                    if (typeof object.mapUint64Uint64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapUint64Uint64: object expected");
                    message.mapUint64Uint64 = {};
                    for (let keys = Object.keys(object.mapUint64Uint64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapUint64Uint64[keys[i]] = $util.Long.fromValue(object.mapUint64Uint64[keys[i]])).unsigned = true;
                        else if (typeof object.mapUint64Uint64[keys[i]] === "string")
                            message.mapUint64Uint64[keys[i]] = parseInt(object.mapUint64Uint64[keys[i]], 10);
                        else if (typeof object.mapUint64Uint64[keys[i]] === "number")
                            message.mapUint64Uint64[keys[i]] = object.mapUint64Uint64[keys[i]];
                        else if (typeof object.mapUint64Uint64[keys[i]] === "object")
                            message.mapUint64Uint64[keys[i]] = new $util.LongBits(object.mapUint64Uint64[keys[i]].low >>> 0, object.mapUint64Uint64[keys[i]].high >>> 0).toNumber(true);
                }
                if (object.mapSint32Sint32) {
                    if (typeof object.mapSint32Sint32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapSint32Sint32: object expected");
                    message.mapSint32Sint32 = {};
                    for (let keys = Object.keys(object.mapSint32Sint32), i = 0; i < keys.length; ++i)
                        message.mapSint32Sint32[keys[i]] = object.mapSint32Sint32[keys[i]] | 0;
                }
                if (object.mapSint64Sint64) {
                    if (typeof object.mapSint64Sint64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapSint64Sint64: object expected");
                    message.mapSint64Sint64 = {};
                    for (let keys = Object.keys(object.mapSint64Sint64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapSint64Sint64[keys[i]] = $util.Long.fromValue(object.mapSint64Sint64[keys[i]])).unsigned = false;
                        else if (typeof object.mapSint64Sint64[keys[i]] === "string")
                            message.mapSint64Sint64[keys[i]] = parseInt(object.mapSint64Sint64[keys[i]], 10);
                        else if (typeof object.mapSint64Sint64[keys[i]] === "number")
                            message.mapSint64Sint64[keys[i]] = object.mapSint64Sint64[keys[i]];
                        else if (typeof object.mapSint64Sint64[keys[i]] === "object")
                            message.mapSint64Sint64[keys[i]] = new $util.LongBits(object.mapSint64Sint64[keys[i]].low >>> 0, object.mapSint64Sint64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapFixed32Fixed32) {
                    if (typeof object.mapFixed32Fixed32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapFixed32Fixed32: object expected");
                    message.mapFixed32Fixed32 = {};
                    for (let keys = Object.keys(object.mapFixed32Fixed32), i = 0; i < keys.length; ++i)
                        message.mapFixed32Fixed32[keys[i]] = object.mapFixed32Fixed32[keys[i]] >>> 0;
                }
                if (object.mapFixed64Fixed64) {
                    if (typeof object.mapFixed64Fixed64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapFixed64Fixed64: object expected");
                    message.mapFixed64Fixed64 = {};
                    for (let keys = Object.keys(object.mapFixed64Fixed64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapFixed64Fixed64[keys[i]] = $util.Long.fromValue(object.mapFixed64Fixed64[keys[i]])).unsigned = false;
                        else if (typeof object.mapFixed64Fixed64[keys[i]] === "string")
                            message.mapFixed64Fixed64[keys[i]] = parseInt(object.mapFixed64Fixed64[keys[i]], 10);
                        else if (typeof object.mapFixed64Fixed64[keys[i]] === "number")
                            message.mapFixed64Fixed64[keys[i]] = object.mapFixed64Fixed64[keys[i]];
                        else if (typeof object.mapFixed64Fixed64[keys[i]] === "object")
                            message.mapFixed64Fixed64[keys[i]] = new $util.LongBits(object.mapFixed64Fixed64[keys[i]].low >>> 0, object.mapFixed64Fixed64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapSfixed32Sfixed32) {
                    if (typeof object.mapSfixed32Sfixed32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapSfixed32Sfixed32: object expected");
                    message.mapSfixed32Sfixed32 = {};
                    for (let keys = Object.keys(object.mapSfixed32Sfixed32), i = 0; i < keys.length; ++i)
                        message.mapSfixed32Sfixed32[keys[i]] = object.mapSfixed32Sfixed32[keys[i]] | 0;
                }
                if (object.mapSfixed64Sfixed64) {
                    if (typeof object.mapSfixed64Sfixed64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapSfixed64Sfixed64: object expected");
                    message.mapSfixed64Sfixed64 = {};
                    for (let keys = Object.keys(object.mapSfixed64Sfixed64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapSfixed64Sfixed64[keys[i]] = $util.Long.fromValue(object.mapSfixed64Sfixed64[keys[i]])).unsigned = false;
                        else if (typeof object.mapSfixed64Sfixed64[keys[i]] === "string")
                            message.mapSfixed64Sfixed64[keys[i]] = parseInt(object.mapSfixed64Sfixed64[keys[i]], 10);
                        else if (typeof object.mapSfixed64Sfixed64[keys[i]] === "number")
                            message.mapSfixed64Sfixed64[keys[i]] = object.mapSfixed64Sfixed64[keys[i]];
                        else if (typeof object.mapSfixed64Sfixed64[keys[i]] === "object")
                            message.mapSfixed64Sfixed64[keys[i]] = new $util.LongBits(object.mapSfixed64Sfixed64[keys[i]].low >>> 0, object.mapSfixed64Sfixed64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapInt32Float) {
                    if (typeof object.mapInt32Float !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapInt32Float: object expected");
                    message.mapInt32Float = {};
                    for (let keys = Object.keys(object.mapInt32Float), i = 0; i < keys.length; ++i)
                        message.mapInt32Float[keys[i]] = Number(object.mapInt32Float[keys[i]]);
                }
                if (object.mapInt32Double) {
                    if (typeof object.mapInt32Double !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapInt32Double: object expected");
                    message.mapInt32Double = {};
                    for (let keys = Object.keys(object.mapInt32Double), i = 0; i < keys.length; ++i)
                        message.mapInt32Double[keys[i]] = Number(object.mapInt32Double[keys[i]]);
                }
                if (object.mapBoolBool) {
                    if (typeof object.mapBoolBool !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapBoolBool: object expected");
                    message.mapBoolBool = {};
                    for (let keys = Object.keys(object.mapBoolBool), i = 0; i < keys.length; ++i)
                        message.mapBoolBool[keys[i]] = Boolean(object.mapBoolBool[keys[i]]);
                }
                if (object.mapStringString) {
                    if (typeof object.mapStringString !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringString: object expected");
                    message.mapStringString = {};
                    for (let keys = Object.keys(object.mapStringString), i = 0; i < keys.length; ++i)
                        message.mapStringString[keys[i]] = String(object.mapStringString[keys[i]]);
                }
                if (object.mapStringBytes) {
                    if (typeof object.mapStringBytes !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringBytes: object expected");
                    message.mapStringBytes = {};
                    for (let keys = Object.keys(object.mapStringBytes), i = 0; i < keys.length; ++i)
                        if (typeof object.mapStringBytes[keys[i]] === "string")
                            $util.base64.decode(object.mapStringBytes[keys[i]], message.mapStringBytes[keys[i]] = $util.newBuffer($util.base64.length(object.mapStringBytes[keys[i]])), 0);
                        else if (object.mapStringBytes[keys[i]].length >= 0)
                            message.mapStringBytes[keys[i]] = object.mapStringBytes[keys[i]];
                }
                if (object.mapStringNestedMessage) {
                    if (typeof object.mapStringNestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringNestedMessage: object expected");
                    message.mapStringNestedMessage = {};
                    for (let keys = Object.keys(object.mapStringNestedMessage), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapStringNestedMessage[keys[i]] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringNestedMessage: object expected");
                        message.mapStringNestedMessage[keys[i]] = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.fromObject(object.mapStringNestedMessage[keys[i]]);
                    }
                }
                if (object.mapStringForeignMessage) {
                    if (typeof object.mapStringForeignMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringForeignMessage: object expected");
                    message.mapStringForeignMessage = {};
                    for (let keys = Object.keys(object.mapStringForeignMessage), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapStringForeignMessage[keys[i]] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringForeignMessage: object expected");
                        message.mapStringForeignMessage[keys[i]] = $root.protobuf_test_messages.proto3.ForeignMessage.fromObject(object.mapStringForeignMessage[keys[i]]);
                    }
                }
                if (object.mapStringNestedEnum) {
                    if (typeof object.mapStringNestedEnum !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringNestedEnum: object expected");
                    message.mapStringNestedEnum = {};
                    for (let keys = Object.keys(object.mapStringNestedEnum), i = 0; i < keys.length; ++i)
                        switch (object.mapStringNestedEnum[keys[i]]) {
                        default:
                            if (typeof object.mapStringNestedEnum[keys[i]] === "number") {
                                message.mapStringNestedEnum[keys[i]] = object.mapStringNestedEnum[keys[i]];
                                break;
                            }
                            break;
                        case "FOO":
                        case 0:
                            message.mapStringNestedEnum[keys[i]] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.mapStringNestedEnum[keys[i]] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.mapStringNestedEnum[keys[i]] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.mapStringNestedEnum[keys[i]] = -1;
                            break;
                        }
                }
                if (object.mapStringForeignEnum) {
                    if (typeof object.mapStringForeignEnum !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.mapStringForeignEnum: object expected");
                    message.mapStringForeignEnum = {};
                    for (let keys = Object.keys(object.mapStringForeignEnum), i = 0; i < keys.length; ++i)
                        switch (object.mapStringForeignEnum[keys[i]]) {
                        default:
                            if (typeof object.mapStringForeignEnum[keys[i]] === "number") {
                                message.mapStringForeignEnum[keys[i]] = object.mapStringForeignEnum[keys[i]];
                                break;
                            }
                            break;
                        case "FOREIGN_FOO":
                        case 0:
                            message.mapStringForeignEnum[keys[i]] = 0;
                            break;
                        case "FOREIGN_BAR":
                        case 1:
                            message.mapStringForeignEnum[keys[i]] = 1;
                            break;
                        case "FOREIGN_BAZ":
                        case 2:
                            message.mapStringForeignEnum[keys[i]] = 2;
                            break;
                        }
                }
                if (object.oneofUint32 != null)
                    message.oneofUint32 = object.oneofUint32 >>> 0;
                if (object.oneofNestedMessage != null) {
                    if (typeof object.oneofNestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.oneofNestedMessage: object expected");
                    message.oneofNestedMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.fromObject(object.oneofNestedMessage);
                }
                if (object.oneofString != null)
                    message.oneofString = String(object.oneofString);
                if (object.oneofBytes != null)
                    if (typeof object.oneofBytes === "string")
                        $util.base64.decode(object.oneofBytes, message.oneofBytes = $util.newBuffer($util.base64.length(object.oneofBytes)), 0);
                    else if (object.oneofBytes.length >= 0)
                        message.oneofBytes = object.oneofBytes;
                if (object.oneofBool != null)
                    message.oneofBool = Boolean(object.oneofBool);
                if (object.oneofUint64 != null)
                    if ($util.Long)
                        (message.oneofUint64 = $util.Long.fromValue(object.oneofUint64)).unsigned = true;
                    else if (typeof object.oneofUint64 === "string")
                        message.oneofUint64 = parseInt(object.oneofUint64, 10);
                    else if (typeof object.oneofUint64 === "number")
                        message.oneofUint64 = object.oneofUint64;
                    else if (typeof object.oneofUint64 === "object")
                        message.oneofUint64 = new $util.LongBits(object.oneofUint64.low >>> 0, object.oneofUint64.high >>> 0).toNumber(true);
                if (object.oneofFloat != null)
                    message.oneofFloat = Number(object.oneofFloat);
                if (object.oneofDouble != null)
                    message.oneofDouble = Number(object.oneofDouble);
                switch (object.oneofEnum) {
                default:
                    if (typeof object.oneofEnum === "number") {
                        message.oneofEnum = object.oneofEnum;
                        break;
                    }
                    break;
                case "FOO":
                case 0:
                    message.oneofEnum = 0;
                    break;
                case "BAR":
                case 1:
                    message.oneofEnum = 1;
                    break;
                case "BAZ":
                case 2:
                    message.oneofEnum = 2;
                    break;
                case "NEG":
                case -1:
                    message.oneofEnum = -1;
                    break;
                }
                switch (object.oneofNullValue) {
                default:
                    if (typeof object.oneofNullValue === "number") {
                        message.oneofNullValue = object.oneofNullValue;
                        break;
                    }
                    break;
                case "NULL_VALUE":
                case 0:
                    message.oneofNullValue = 0;
                    break;
                }
                if (object.optionalBoolWrapper != null) {
                    if (typeof object.optionalBoolWrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalBoolWrapper: object expected");
                    message.optionalBoolWrapper = $root.google.protobuf.BoolValue.fromObject(object.optionalBoolWrapper);
                }
                if (object.optionalInt32Wrapper != null) {
                    if (typeof object.optionalInt32Wrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalInt32Wrapper: object expected");
                    message.optionalInt32Wrapper = $root.google.protobuf.Int32Value.fromObject(object.optionalInt32Wrapper);
                }
                if (object.optionalInt64Wrapper != null) {
                    if (typeof object.optionalInt64Wrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalInt64Wrapper: object expected");
                    message.optionalInt64Wrapper = $root.google.protobuf.Int64Value.fromObject(object.optionalInt64Wrapper);
                }
                if (object.optionalUint32Wrapper != null) {
                    if (typeof object.optionalUint32Wrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalUint32Wrapper: object expected");
                    message.optionalUint32Wrapper = $root.google.protobuf.UInt32Value.fromObject(object.optionalUint32Wrapper);
                }
                if (object.optionalUint64Wrapper != null) {
                    if (typeof object.optionalUint64Wrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalUint64Wrapper: object expected");
                    message.optionalUint64Wrapper = $root.google.protobuf.UInt64Value.fromObject(object.optionalUint64Wrapper);
                }
                if (object.optionalFloatWrapper != null) {
                    if (typeof object.optionalFloatWrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalFloatWrapper: object expected");
                    message.optionalFloatWrapper = $root.google.protobuf.FloatValue.fromObject(object.optionalFloatWrapper);
                }
                if (object.optionalDoubleWrapper != null) {
                    if (typeof object.optionalDoubleWrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalDoubleWrapper: object expected");
                    message.optionalDoubleWrapper = $root.google.protobuf.DoubleValue.fromObject(object.optionalDoubleWrapper);
                }
                if (object.optionalStringWrapper != null) {
                    if (typeof object.optionalStringWrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalStringWrapper: object expected");
                    message.optionalStringWrapper = $root.google.protobuf.StringValue.fromObject(object.optionalStringWrapper);
                }
                if (object.optionalBytesWrapper != null) {
                    if (typeof object.optionalBytesWrapper !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalBytesWrapper: object expected");
                    message.optionalBytesWrapper = $root.google.protobuf.BytesValue.fromObject(object.optionalBytesWrapper);
                }
                if (object.repeatedBoolWrapper) {
                    if (!Array.isArray(object.repeatedBoolWrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedBoolWrapper: array expected");
                    message.repeatedBoolWrapper = [];
                    for (let i = 0; i < object.repeatedBoolWrapper.length; ++i) {
                        if (typeof object.repeatedBoolWrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedBoolWrapper: object expected");
                        message.repeatedBoolWrapper[i] = $root.google.protobuf.BoolValue.fromObject(object.repeatedBoolWrapper[i]);
                    }
                }
                if (object.repeatedInt32Wrapper) {
                    if (!Array.isArray(object.repeatedInt32Wrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedInt32Wrapper: array expected");
                    message.repeatedInt32Wrapper = [];
                    for (let i = 0; i < object.repeatedInt32Wrapper.length; ++i) {
                        if (typeof object.repeatedInt32Wrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedInt32Wrapper: object expected");
                        message.repeatedInt32Wrapper[i] = $root.google.protobuf.Int32Value.fromObject(object.repeatedInt32Wrapper[i]);
                    }
                }
                if (object.repeatedInt64Wrapper) {
                    if (!Array.isArray(object.repeatedInt64Wrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedInt64Wrapper: array expected");
                    message.repeatedInt64Wrapper = [];
                    for (let i = 0; i < object.repeatedInt64Wrapper.length; ++i) {
                        if (typeof object.repeatedInt64Wrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedInt64Wrapper: object expected");
                        message.repeatedInt64Wrapper[i] = $root.google.protobuf.Int64Value.fromObject(object.repeatedInt64Wrapper[i]);
                    }
                }
                if (object.repeatedUint32Wrapper) {
                    if (!Array.isArray(object.repeatedUint32Wrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedUint32Wrapper: array expected");
                    message.repeatedUint32Wrapper = [];
                    for (let i = 0; i < object.repeatedUint32Wrapper.length; ++i) {
                        if (typeof object.repeatedUint32Wrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedUint32Wrapper: object expected");
                        message.repeatedUint32Wrapper[i] = $root.google.protobuf.UInt32Value.fromObject(object.repeatedUint32Wrapper[i]);
                    }
                }
                if (object.repeatedUint64Wrapper) {
                    if (!Array.isArray(object.repeatedUint64Wrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedUint64Wrapper: array expected");
                    message.repeatedUint64Wrapper = [];
                    for (let i = 0; i < object.repeatedUint64Wrapper.length; ++i) {
                        if (typeof object.repeatedUint64Wrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedUint64Wrapper: object expected");
                        message.repeatedUint64Wrapper[i] = $root.google.protobuf.UInt64Value.fromObject(object.repeatedUint64Wrapper[i]);
                    }
                }
                if (object.repeatedFloatWrapper) {
                    if (!Array.isArray(object.repeatedFloatWrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFloatWrapper: array expected");
                    message.repeatedFloatWrapper = [];
                    for (let i = 0; i < object.repeatedFloatWrapper.length; ++i) {
                        if (typeof object.repeatedFloatWrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFloatWrapper: object expected");
                        message.repeatedFloatWrapper[i] = $root.google.protobuf.FloatValue.fromObject(object.repeatedFloatWrapper[i]);
                    }
                }
                if (object.repeatedDoubleWrapper) {
                    if (!Array.isArray(object.repeatedDoubleWrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedDoubleWrapper: array expected");
                    message.repeatedDoubleWrapper = [];
                    for (let i = 0; i < object.repeatedDoubleWrapper.length; ++i) {
                        if (typeof object.repeatedDoubleWrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedDoubleWrapper: object expected");
                        message.repeatedDoubleWrapper[i] = $root.google.protobuf.DoubleValue.fromObject(object.repeatedDoubleWrapper[i]);
                    }
                }
                if (object.repeatedStringWrapper) {
                    if (!Array.isArray(object.repeatedStringWrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedStringWrapper: array expected");
                    message.repeatedStringWrapper = [];
                    for (let i = 0; i < object.repeatedStringWrapper.length; ++i) {
                        if (typeof object.repeatedStringWrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedStringWrapper: object expected");
                        message.repeatedStringWrapper[i] = $root.google.protobuf.StringValue.fromObject(object.repeatedStringWrapper[i]);
                    }
                }
                if (object.repeatedBytesWrapper) {
                    if (!Array.isArray(object.repeatedBytesWrapper))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedBytesWrapper: array expected");
                    message.repeatedBytesWrapper = [];
                    for (let i = 0; i < object.repeatedBytesWrapper.length; ++i) {
                        if (typeof object.repeatedBytesWrapper[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedBytesWrapper: object expected");
                        message.repeatedBytesWrapper[i] = $root.google.protobuf.BytesValue.fromObject(object.repeatedBytesWrapper[i]);
                    }
                }
                if (object.optionalDuration != null) {
                    if (typeof object.optionalDuration !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalDuration: object expected");
                    message.optionalDuration = $root.google.protobuf.Duration.fromObject(object.optionalDuration);
                }
                if (object.optionalTimestamp != null) {
                    if (typeof object.optionalTimestamp !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalTimestamp: object expected");
                    message.optionalTimestamp = $root.google.protobuf.Timestamp.fromObject(object.optionalTimestamp);
                }
                if (object.optionalFieldMask != null) {
                    if (typeof object.optionalFieldMask !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalFieldMask: object expected");
                    message.optionalFieldMask = $root.google.protobuf.FieldMask.fromObject(object.optionalFieldMask);
                }
                if (object.optionalStruct != null) {
                    if (typeof object.optionalStruct !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalStruct: object expected");
                    message.optionalStruct = $root.google.protobuf.Struct.fromObject(object.optionalStruct);
                }
                if (object.optionalAny != null) {
                    if (typeof object.optionalAny !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalAny: object expected");
                    message.optionalAny = $root.google.protobuf.Any.fromObject(object.optionalAny);
                }
                if (object.optionalValue != null) {
                    if (typeof object.optionalValue !== "object")
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.optionalValue: object expected");
                    message.optionalValue = $root.google.protobuf.Value.fromObject(object.optionalValue);
                }
                switch (object.optionalNullValue) {
                default:
                    if (typeof object.optionalNullValue === "number") {
                        message.optionalNullValue = object.optionalNullValue;
                        break;
                    }
                    break;
                case "NULL_VALUE":
                case 0:
                    message.optionalNullValue = 0;
                    break;
                }
                if (object.repeatedDuration) {
                    if (!Array.isArray(object.repeatedDuration))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedDuration: array expected");
                    message.repeatedDuration = [];
                    for (let i = 0; i < object.repeatedDuration.length; ++i) {
                        if (typeof object.repeatedDuration[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedDuration: object expected");
                        message.repeatedDuration[i] = $root.google.protobuf.Duration.fromObject(object.repeatedDuration[i]);
                    }
                }
                if (object.repeatedTimestamp) {
                    if (!Array.isArray(object.repeatedTimestamp))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedTimestamp: array expected");
                    message.repeatedTimestamp = [];
                    for (let i = 0; i < object.repeatedTimestamp.length; ++i) {
                        if (typeof object.repeatedTimestamp[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedTimestamp: object expected");
                        message.repeatedTimestamp[i] = $root.google.protobuf.Timestamp.fromObject(object.repeatedTimestamp[i]);
                    }
                }
                if (object.repeatedFieldmask) {
                    if (!Array.isArray(object.repeatedFieldmask))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFieldmask: array expected");
                    message.repeatedFieldmask = [];
                    for (let i = 0; i < object.repeatedFieldmask.length; ++i) {
                        if (typeof object.repeatedFieldmask[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedFieldmask: object expected");
                        message.repeatedFieldmask[i] = $root.google.protobuf.FieldMask.fromObject(object.repeatedFieldmask[i]);
                    }
                }
                if (object.repeatedStruct) {
                    if (!Array.isArray(object.repeatedStruct))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedStruct: array expected");
                    message.repeatedStruct = [];
                    for (let i = 0; i < object.repeatedStruct.length; ++i) {
                        if (typeof object.repeatedStruct[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedStruct: object expected");
                        message.repeatedStruct[i] = $root.google.protobuf.Struct.fromObject(object.repeatedStruct[i]);
                    }
                }
                if (object.repeatedAny) {
                    if (!Array.isArray(object.repeatedAny))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedAny: array expected");
                    message.repeatedAny = [];
                    for (let i = 0; i < object.repeatedAny.length; ++i) {
                        if (typeof object.repeatedAny[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedAny: object expected");
                        message.repeatedAny[i] = $root.google.protobuf.Any.fromObject(object.repeatedAny[i]);
                    }
                }
                if (object.repeatedValue) {
                    if (!Array.isArray(object.repeatedValue))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedValue: array expected");
                    message.repeatedValue = [];
                    for (let i = 0; i < object.repeatedValue.length; ++i) {
                        if (typeof object.repeatedValue[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedValue: object expected");
                        message.repeatedValue[i] = $root.google.protobuf.Value.fromObject(object.repeatedValue[i]);
                    }
                }
                if (object.repeatedListValue) {
                    if (!Array.isArray(object.repeatedListValue))
                        throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedListValue: array expected");
                    message.repeatedListValue = [];
                    for (let i = 0; i < object.repeatedListValue.length; ++i) {
                        if (typeof object.repeatedListValue[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.repeatedListValue: object expected");
                        message.repeatedListValue[i] = $root.google.protobuf.ListValue.fromObject(object.repeatedListValue[i]);
                    }
                }
                if (object.fieldname1 != null)
                    message.fieldname1 = object.fieldname1 | 0;
                if (object.fieldName2 != null)
                    message.fieldName2 = object.fieldName2 | 0;
                if (object._fieldName3 != null)
                    message._fieldName3 = object._fieldName3 | 0;
                if (object.field_Name4_ != null)
                    message.field_Name4_ = object.field_Name4_ | 0;
                if (object.field0name5 != null)
                    message.field0name5 = object.field0name5 | 0;
                if (object.field_0Name6 != null)
                    message.field_0Name6 = object.field_0Name6 | 0;
                if (object.fieldName7 != null)
                    message.fieldName7 = object.fieldName7 | 0;
                if (object.FieldName8 != null)
                    message.FieldName8 = object.FieldName8 | 0;
                if (object.field_Name9 != null)
                    message.field_Name9 = object.field_Name9 | 0;
                if (object.Field_Name10 != null)
                    message.Field_Name10 = object.Field_Name10 | 0;
                if (object.FIELD_NAME11 != null)
                    message.FIELD_NAME11 = object.FIELD_NAME11 | 0;
                if (object.FIELDName12 != null)
                    message.FIELDName12 = object.FIELDName12 | 0;
                if (object._FieldName13 != null)
                    message._FieldName13 = object._FieldName13 | 0;
                if (object.__FieldName14 != null)
                    message.__FieldName14 = object.__FieldName14 | 0;
                if (object.field_Name15 != null)
                    message.field_Name15 = object.field_Name15 | 0;
                if (object.field__Name16 != null)
                    message.field__Name16 = object.field__Name16 | 0;
                if (object.fieldName17__ != null)
                    message.fieldName17__ = object.fieldName17__ | 0;
                if (object.FieldName18__ != null)
                    message.FieldName18__ = object.FieldName18__ | 0;
                return message;
            };

            /**
             * Creates a plain object from a TestAllTypesProto3 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {protobuf_test_messages.proto3.TestAllTypesProto3} message TestAllTypesProto3
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestAllTypesProto3.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.repeatedInt32 = [];
                    object.repeatedInt64 = [];
                    object.repeatedUint32 = [];
                    object.repeatedUint64 = [];
                    object.repeatedSint32 = [];
                    object.repeatedSint64 = [];
                    object.repeatedFixed32 = [];
                    object.repeatedFixed64 = [];
                    object.repeatedSfixed32 = [];
                    object.repeatedSfixed64 = [];
                    object.repeatedFloat = [];
                    object.repeatedDouble = [];
                    object.repeatedBool = [];
                    object.repeatedString = [];
                    object.repeatedBytes = [];
                    object.repeatedNestedMessage = [];
                    object.repeatedForeignMessage = [];
                    object.repeatedNestedEnum = [];
                    object.repeatedForeignEnum = [];
                    object.repeatedStringPiece = [];
                    object.repeatedCord = [];
                    object.packedInt32 = [];
                    object.packedInt64 = [];
                    object.packedUint32 = [];
                    object.packedUint64 = [];
                    object.packedSint32 = [];
                    object.packedSint64 = [];
                    object.packedFixed32 = [];
                    object.packedFixed64 = [];
                    object.packedSfixed32 = [];
                    object.packedSfixed64 = [];
                    object.packedFloat = [];
                    object.packedDouble = [];
                    object.packedBool = [];
                    object.packedNestedEnum = [];
                    object.unpackedInt32 = [];
                    object.unpackedInt64 = [];
                    object.unpackedUint32 = [];
                    object.unpackedUint64 = [];
                    object.unpackedSint32 = [];
                    object.unpackedSint64 = [];
                    object.unpackedFixed32 = [];
                    object.unpackedFixed64 = [];
                    object.unpackedSfixed32 = [];
                    object.unpackedSfixed64 = [];
                    object.unpackedFloat = [];
                    object.unpackedDouble = [];
                    object.unpackedBool = [];
                    object.unpackedNestedEnum = [];
                    object.repeatedBoolWrapper = [];
                    object.repeatedInt32Wrapper = [];
                    object.repeatedInt64Wrapper = [];
                    object.repeatedUint32Wrapper = [];
                    object.repeatedUint64Wrapper = [];
                    object.repeatedFloatWrapper = [];
                    object.repeatedDoubleWrapper = [];
                    object.repeatedStringWrapper = [];
                    object.repeatedBytesWrapper = [];
                    object.repeatedDuration = [];
                    object.repeatedTimestamp = [];
                    object.repeatedFieldmask = [];
                    object.repeatedAny = [];
                    object.repeatedValue = [];
                    object.repeatedListValue = [];
                    object.repeatedStruct = [];
                }
                if (options.objects || options.defaults) {
                    object.mapInt32Int32 = {};
                    object.mapInt64Int64 = {};
                    object.mapUint32Uint32 = {};
                    object.mapUint64Uint64 = {};
                    object.mapSint32Sint32 = {};
                    object.mapSint64Sint64 = {};
                    object.mapFixed32Fixed32 = {};
                    object.mapFixed64Fixed64 = {};
                    object.mapSfixed32Sfixed32 = {};
                    object.mapSfixed64Sfixed64 = {};
                    object.mapInt32Float = {};
                    object.mapInt32Double = {};
                    object.mapBoolBool = {};
                    object.mapStringString = {};
                    object.mapStringBytes = {};
                    object.mapStringNestedMessage = {};
                    object.mapStringForeignMessage = {};
                    object.mapStringNestedEnum = {};
                    object.mapStringForeignEnum = {};
                }
                if (options.defaults) {
                    object.optionalInt32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalInt64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalInt64 = options.longs === String ? "0" : 0;
                    object.optionalUint32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.optionalUint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalUint64 = options.longs === String ? "0" : 0;
                    object.optionalSint32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalSint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalSint64 = options.longs === String ? "0" : 0;
                    object.optionalFixed32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalFixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalFixed64 = options.longs === String ? "0" : 0;
                    object.optionalSfixed32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalSfixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalSfixed64 = options.longs === String ? "0" : 0;
                    object.optionalFloat = 0;
                    object.optionalDouble = 0;
                    object.optionalBool = false;
                    object.optionalString = "";
                    if (options.bytes === String)
                        object.optionalBytes = "";
                    else {
                        object.optionalBytes = [];
                        if (options.bytes !== Array)
                            object.optionalBytes = $util.newBuffer(object.optionalBytes);
                    }
                    object.optionalNestedMessage = null;
                    object.optionalForeignMessage = null;
                    object.optionalNestedEnum = options.enums === String ? "FOO" : 0;
                    object.optionalForeignEnum = options.enums === String ? "FOREIGN_FOO" : 0;
                    object.optionalAliasedEnum = options.enums === String ? "ALIAS_FOO" : 0;
                    object.optionalStringPiece = "";
                    object.optionalCord = "";
                    object.recursiveMessage = null;
                    object.optionalBoolWrapper = null;
                    object.optionalInt32Wrapper = null;
                    object.optionalInt64Wrapper = null;
                    object.optionalUint32Wrapper = null;
                    object.optionalUint64Wrapper = null;
                    object.optionalFloatWrapper = null;
                    object.optionalDoubleWrapper = null;
                    object.optionalStringWrapper = null;
                    object.optionalBytesWrapper = null;
                    object.optionalDuration = null;
                    object.optionalTimestamp = null;
                    object.optionalFieldMask = null;
                    object.optionalStruct = null;
                    object.optionalAny = null;
                    object.optionalValue = null;
                    object.optionalNullValue = options.enums === String ? "NULL_VALUE" : 0;
                    object.fieldname1 = 0;
                    object.fieldName2 = 0;
                    object._fieldName3 = 0;
                    object.field_Name4_ = 0;
                    object.field0name5 = 0;
                    object.field_0Name6 = 0;
                    object.fieldName7 = 0;
                    object.FieldName8 = 0;
                    object.field_Name9 = 0;
                    object.Field_Name10 = 0;
                    object.FIELD_NAME11 = 0;
                    object.FIELDName12 = 0;
                    object._FieldName13 = 0;
                    object.__FieldName14 = 0;
                    object.field_Name15 = 0;
                    object.field__Name16 = 0;
                    object.fieldName17__ = 0;
                    object.FieldName18__ = 0;
                }
                if (message.optionalInt32 != null && message.hasOwnProperty("optionalInt32"))
                    object.optionalInt32 = message.optionalInt32;
                if (message.optionalInt64 != null && message.hasOwnProperty("optionalInt64"))
                    if (typeof message.optionalInt64 === "number")
                        object.optionalInt64 = options.longs === String ? String(message.optionalInt64) : message.optionalInt64;
                    else
                        object.optionalInt64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalInt64) : options.longs === Number ? new $util.LongBits(message.optionalInt64.low >>> 0, message.optionalInt64.high >>> 0).toNumber() : message.optionalInt64;
                if (message.optionalUint32 != null && message.hasOwnProperty("optionalUint32"))
                    object.optionalUint32 = message.optionalUint32;
                if (message.optionalUint64 != null && message.hasOwnProperty("optionalUint64"))
                    if (typeof message.optionalUint64 === "number")
                        object.optionalUint64 = options.longs === String ? String(message.optionalUint64) : message.optionalUint64;
                    else
                        object.optionalUint64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalUint64) : options.longs === Number ? new $util.LongBits(message.optionalUint64.low >>> 0, message.optionalUint64.high >>> 0).toNumber(true) : message.optionalUint64;
                if (message.optionalSint32 != null && message.hasOwnProperty("optionalSint32"))
                    object.optionalSint32 = message.optionalSint32;
                if (message.optionalSint64 != null && message.hasOwnProperty("optionalSint64"))
                    if (typeof message.optionalSint64 === "number")
                        object.optionalSint64 = options.longs === String ? String(message.optionalSint64) : message.optionalSint64;
                    else
                        object.optionalSint64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalSint64) : options.longs === Number ? new $util.LongBits(message.optionalSint64.low >>> 0, message.optionalSint64.high >>> 0).toNumber() : message.optionalSint64;
                if (message.optionalFixed32 != null && message.hasOwnProperty("optionalFixed32"))
                    object.optionalFixed32 = message.optionalFixed32;
                if (message.optionalFixed64 != null && message.hasOwnProperty("optionalFixed64"))
                    if (typeof message.optionalFixed64 === "number")
                        object.optionalFixed64 = options.longs === String ? String(message.optionalFixed64) : message.optionalFixed64;
                    else
                        object.optionalFixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalFixed64) : options.longs === Number ? new $util.LongBits(message.optionalFixed64.low >>> 0, message.optionalFixed64.high >>> 0).toNumber() : message.optionalFixed64;
                if (message.optionalSfixed32 != null && message.hasOwnProperty("optionalSfixed32"))
                    object.optionalSfixed32 = message.optionalSfixed32;
                if (message.optionalSfixed64 != null && message.hasOwnProperty("optionalSfixed64"))
                    if (typeof message.optionalSfixed64 === "number")
                        object.optionalSfixed64 = options.longs === String ? String(message.optionalSfixed64) : message.optionalSfixed64;
                    else
                        object.optionalSfixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalSfixed64) : options.longs === Number ? new $util.LongBits(message.optionalSfixed64.low >>> 0, message.optionalSfixed64.high >>> 0).toNumber() : message.optionalSfixed64;
                if (message.optionalFloat != null && message.hasOwnProperty("optionalFloat"))
                    object.optionalFloat = options.json && !isFinite(message.optionalFloat) ? String(message.optionalFloat) : message.optionalFloat;
                if (message.optionalDouble != null && message.hasOwnProperty("optionalDouble"))
                    object.optionalDouble = options.json && !isFinite(message.optionalDouble) ? String(message.optionalDouble) : message.optionalDouble;
                if (message.optionalBool != null && message.hasOwnProperty("optionalBool"))
                    object.optionalBool = message.optionalBool;
                if (message.optionalString != null && message.hasOwnProperty("optionalString"))
                    object.optionalString = message.optionalString;
                if (message.optionalBytes != null && message.hasOwnProperty("optionalBytes"))
                    object.optionalBytes = options.bytes === String ? $util.base64.encode(message.optionalBytes, 0, message.optionalBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.optionalBytes) : message.optionalBytes;
                if (message.optionalNestedMessage != null && message.hasOwnProperty("optionalNestedMessage"))
                    object.optionalNestedMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.toObject(message.optionalNestedMessage, options);
                if (message.optionalForeignMessage != null && message.hasOwnProperty("optionalForeignMessage"))
                    object.optionalForeignMessage = $root.protobuf_test_messages.proto3.ForeignMessage.toObject(message.optionalForeignMessage, options);
                if (message.optionalNestedEnum != null && message.hasOwnProperty("optionalNestedEnum"))
                    object.optionalNestedEnum = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.optionalNestedEnum] === undefined ? message.optionalNestedEnum : $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.optionalNestedEnum] : message.optionalNestedEnum;
                if (message.optionalForeignEnum != null && message.hasOwnProperty("optionalForeignEnum"))
                    object.optionalForeignEnum = options.enums === String ? $root.protobuf_test_messages.proto3.ForeignEnum[message.optionalForeignEnum] === undefined ? message.optionalForeignEnum : $root.protobuf_test_messages.proto3.ForeignEnum[message.optionalForeignEnum] : message.optionalForeignEnum;
                if (message.optionalAliasedEnum != null && message.hasOwnProperty("optionalAliasedEnum"))
                    object.optionalAliasedEnum = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum[message.optionalAliasedEnum] === undefined ? message.optionalAliasedEnum : $root.protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum[message.optionalAliasedEnum] : message.optionalAliasedEnum;
                if (message.optionalStringPiece != null && message.hasOwnProperty("optionalStringPiece"))
                    object.optionalStringPiece = message.optionalStringPiece;
                if (message.optionalCord != null && message.hasOwnProperty("optionalCord"))
                    object.optionalCord = message.optionalCord;
                if (message.recursiveMessage != null && message.hasOwnProperty("recursiveMessage"))
                    object.recursiveMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.toObject(message.recursiveMessage, options);
                if (message.repeatedInt32 && message.repeatedInt32.length) {
                    object.repeatedInt32 = [];
                    for (let j = 0; j < message.repeatedInt32.length; ++j)
                        object.repeatedInt32[j] = message.repeatedInt32[j];
                }
                if (message.repeatedInt64 && message.repeatedInt64.length) {
                    object.repeatedInt64 = [];
                    for (let j = 0; j < message.repeatedInt64.length; ++j)
                        if (typeof message.repeatedInt64[j] === "number")
                            object.repeatedInt64[j] = options.longs === String ? String(message.repeatedInt64[j]) : message.repeatedInt64[j];
                        else
                            object.repeatedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedInt64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedInt64[j].low >>> 0, message.repeatedInt64[j].high >>> 0).toNumber() : message.repeatedInt64[j];
                }
                if (message.repeatedUint32 && message.repeatedUint32.length) {
                    object.repeatedUint32 = [];
                    for (let j = 0; j < message.repeatedUint32.length; ++j)
                        object.repeatedUint32[j] = message.repeatedUint32[j];
                }
                if (message.repeatedUint64 && message.repeatedUint64.length) {
                    object.repeatedUint64 = [];
                    for (let j = 0; j < message.repeatedUint64.length; ++j)
                        if (typeof message.repeatedUint64[j] === "number")
                            object.repeatedUint64[j] = options.longs === String ? String(message.repeatedUint64[j]) : message.repeatedUint64[j];
                        else
                            object.repeatedUint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedUint64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedUint64[j].low >>> 0, message.repeatedUint64[j].high >>> 0).toNumber(true) : message.repeatedUint64[j];
                }
                if (message.repeatedSint32 && message.repeatedSint32.length) {
                    object.repeatedSint32 = [];
                    for (let j = 0; j < message.repeatedSint32.length; ++j)
                        object.repeatedSint32[j] = message.repeatedSint32[j];
                }
                if (message.repeatedSint64 && message.repeatedSint64.length) {
                    object.repeatedSint64 = [];
                    for (let j = 0; j < message.repeatedSint64.length; ++j)
                        if (typeof message.repeatedSint64[j] === "number")
                            object.repeatedSint64[j] = options.longs === String ? String(message.repeatedSint64[j]) : message.repeatedSint64[j];
                        else
                            object.repeatedSint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedSint64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedSint64[j].low >>> 0, message.repeatedSint64[j].high >>> 0).toNumber() : message.repeatedSint64[j];
                }
                if (message.repeatedFixed32 && message.repeatedFixed32.length) {
                    object.repeatedFixed32 = [];
                    for (let j = 0; j < message.repeatedFixed32.length; ++j)
                        object.repeatedFixed32[j] = message.repeatedFixed32[j];
                }
                if (message.repeatedFixed64 && message.repeatedFixed64.length) {
                    object.repeatedFixed64 = [];
                    for (let j = 0; j < message.repeatedFixed64.length; ++j)
                        if (typeof message.repeatedFixed64[j] === "number")
                            object.repeatedFixed64[j] = options.longs === String ? String(message.repeatedFixed64[j]) : message.repeatedFixed64[j];
                        else
                            object.repeatedFixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedFixed64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedFixed64[j].low >>> 0, message.repeatedFixed64[j].high >>> 0).toNumber() : message.repeatedFixed64[j];
                }
                if (message.repeatedSfixed32 && message.repeatedSfixed32.length) {
                    object.repeatedSfixed32 = [];
                    for (let j = 0; j < message.repeatedSfixed32.length; ++j)
                        object.repeatedSfixed32[j] = message.repeatedSfixed32[j];
                }
                if (message.repeatedSfixed64 && message.repeatedSfixed64.length) {
                    object.repeatedSfixed64 = [];
                    for (let j = 0; j < message.repeatedSfixed64.length; ++j)
                        if (typeof message.repeatedSfixed64[j] === "number")
                            object.repeatedSfixed64[j] = options.longs === String ? String(message.repeatedSfixed64[j]) : message.repeatedSfixed64[j];
                        else
                            object.repeatedSfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedSfixed64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedSfixed64[j].low >>> 0, message.repeatedSfixed64[j].high >>> 0).toNumber() : message.repeatedSfixed64[j];
                }
                if (message.repeatedFloat && message.repeatedFloat.length) {
                    object.repeatedFloat = [];
                    for (let j = 0; j < message.repeatedFloat.length; ++j)
                        object.repeatedFloat[j] = options.json && !isFinite(message.repeatedFloat[j]) ? String(message.repeatedFloat[j]) : message.repeatedFloat[j];
                }
                if (message.repeatedDouble && message.repeatedDouble.length) {
                    object.repeatedDouble = [];
                    for (let j = 0; j < message.repeatedDouble.length; ++j)
                        object.repeatedDouble[j] = options.json && !isFinite(message.repeatedDouble[j]) ? String(message.repeatedDouble[j]) : message.repeatedDouble[j];
                }
                if (message.repeatedBool && message.repeatedBool.length) {
                    object.repeatedBool = [];
                    for (let j = 0; j < message.repeatedBool.length; ++j)
                        object.repeatedBool[j] = message.repeatedBool[j];
                }
                if (message.repeatedString && message.repeatedString.length) {
                    object.repeatedString = [];
                    for (let j = 0; j < message.repeatedString.length; ++j)
                        object.repeatedString[j] = message.repeatedString[j];
                }
                if (message.repeatedBytes && message.repeatedBytes.length) {
                    object.repeatedBytes = [];
                    for (let j = 0; j < message.repeatedBytes.length; ++j)
                        object.repeatedBytes[j] = options.bytes === String ? $util.base64.encode(message.repeatedBytes[j], 0, message.repeatedBytes[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.repeatedBytes[j]) : message.repeatedBytes[j];
                }
                if (message.repeatedNestedMessage && message.repeatedNestedMessage.length) {
                    object.repeatedNestedMessage = [];
                    for (let j = 0; j < message.repeatedNestedMessage.length; ++j)
                        object.repeatedNestedMessage[j] = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.toObject(message.repeatedNestedMessage[j], options);
                }
                if (message.repeatedForeignMessage && message.repeatedForeignMessage.length) {
                    object.repeatedForeignMessage = [];
                    for (let j = 0; j < message.repeatedForeignMessage.length; ++j)
                        object.repeatedForeignMessage[j] = $root.protobuf_test_messages.proto3.ForeignMessage.toObject(message.repeatedForeignMessage[j], options);
                }
                if (message.repeatedNestedEnum && message.repeatedNestedEnum.length) {
                    object.repeatedNestedEnum = [];
                    for (let j = 0; j < message.repeatedNestedEnum.length; ++j)
                        object.repeatedNestedEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.repeatedNestedEnum[j]] === undefined ? message.repeatedNestedEnum[j] : $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.repeatedNestedEnum[j]] : message.repeatedNestedEnum[j];
                }
                if (message.repeatedForeignEnum && message.repeatedForeignEnum.length) {
                    object.repeatedForeignEnum = [];
                    for (let j = 0; j < message.repeatedForeignEnum.length; ++j)
                        object.repeatedForeignEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto3.ForeignEnum[message.repeatedForeignEnum[j]] === undefined ? message.repeatedForeignEnum[j] : $root.protobuf_test_messages.proto3.ForeignEnum[message.repeatedForeignEnum[j]] : message.repeatedForeignEnum[j];
                }
                if (message.repeatedStringPiece && message.repeatedStringPiece.length) {
                    object.repeatedStringPiece = [];
                    for (let j = 0; j < message.repeatedStringPiece.length; ++j)
                        object.repeatedStringPiece[j] = message.repeatedStringPiece[j];
                }
                if (message.repeatedCord && message.repeatedCord.length) {
                    object.repeatedCord = [];
                    for (let j = 0; j < message.repeatedCord.length; ++j)
                        object.repeatedCord[j] = message.repeatedCord[j];
                }
                let keys2;
                if (message.mapInt32Int32 && (keys2 = Object.keys(message.mapInt32Int32)).length) {
                    object.mapInt32Int32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapInt32Int32[keys2[j]] = message.mapInt32Int32[keys2[j]];
                }
                if (message.mapInt64Int64 && (keys2 = Object.keys(message.mapInt64Int64)).length) {
                    object.mapInt64Int64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapInt64Int64[keys2[j]] === "number")
                            object.mapInt64Int64[keys2[j]] = options.longs === String ? String(message.mapInt64Int64[keys2[j]]) : message.mapInt64Int64[keys2[j]];
                        else
                            object.mapInt64Int64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapInt64Int64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapInt64Int64[keys2[j]].low >>> 0, message.mapInt64Int64[keys2[j]].high >>> 0).toNumber() : message.mapInt64Int64[keys2[j]];
                }
                if (message.mapUint32Uint32 && (keys2 = Object.keys(message.mapUint32Uint32)).length) {
                    object.mapUint32Uint32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapUint32Uint32[keys2[j]] = message.mapUint32Uint32[keys2[j]];
                }
                if (message.mapUint64Uint64 && (keys2 = Object.keys(message.mapUint64Uint64)).length) {
                    object.mapUint64Uint64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapUint64Uint64[keys2[j]] === "number")
                            object.mapUint64Uint64[keys2[j]] = options.longs === String ? String(message.mapUint64Uint64[keys2[j]]) : message.mapUint64Uint64[keys2[j]];
                        else
                            object.mapUint64Uint64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapUint64Uint64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapUint64Uint64[keys2[j]].low >>> 0, message.mapUint64Uint64[keys2[j]].high >>> 0).toNumber(true) : message.mapUint64Uint64[keys2[j]];
                }
                if (message.mapSint32Sint32 && (keys2 = Object.keys(message.mapSint32Sint32)).length) {
                    object.mapSint32Sint32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapSint32Sint32[keys2[j]] = message.mapSint32Sint32[keys2[j]];
                }
                if (message.mapSint64Sint64 && (keys2 = Object.keys(message.mapSint64Sint64)).length) {
                    object.mapSint64Sint64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapSint64Sint64[keys2[j]] === "number")
                            object.mapSint64Sint64[keys2[j]] = options.longs === String ? String(message.mapSint64Sint64[keys2[j]]) : message.mapSint64Sint64[keys2[j]];
                        else
                            object.mapSint64Sint64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapSint64Sint64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapSint64Sint64[keys2[j]].low >>> 0, message.mapSint64Sint64[keys2[j]].high >>> 0).toNumber() : message.mapSint64Sint64[keys2[j]];
                }
                if (message.mapFixed32Fixed32 && (keys2 = Object.keys(message.mapFixed32Fixed32)).length) {
                    object.mapFixed32Fixed32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapFixed32Fixed32[keys2[j]] = message.mapFixed32Fixed32[keys2[j]];
                }
                if (message.mapFixed64Fixed64 && (keys2 = Object.keys(message.mapFixed64Fixed64)).length) {
                    object.mapFixed64Fixed64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapFixed64Fixed64[keys2[j]] === "number")
                            object.mapFixed64Fixed64[keys2[j]] = options.longs === String ? String(message.mapFixed64Fixed64[keys2[j]]) : message.mapFixed64Fixed64[keys2[j]];
                        else
                            object.mapFixed64Fixed64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapFixed64Fixed64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapFixed64Fixed64[keys2[j]].low >>> 0, message.mapFixed64Fixed64[keys2[j]].high >>> 0).toNumber() : message.mapFixed64Fixed64[keys2[j]];
                }
                if (message.mapSfixed32Sfixed32 && (keys2 = Object.keys(message.mapSfixed32Sfixed32)).length) {
                    object.mapSfixed32Sfixed32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapSfixed32Sfixed32[keys2[j]] = message.mapSfixed32Sfixed32[keys2[j]];
                }
                if (message.mapSfixed64Sfixed64 && (keys2 = Object.keys(message.mapSfixed64Sfixed64)).length) {
                    object.mapSfixed64Sfixed64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapSfixed64Sfixed64[keys2[j]] === "number")
                            object.mapSfixed64Sfixed64[keys2[j]] = options.longs === String ? String(message.mapSfixed64Sfixed64[keys2[j]]) : message.mapSfixed64Sfixed64[keys2[j]];
                        else
                            object.mapSfixed64Sfixed64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapSfixed64Sfixed64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapSfixed64Sfixed64[keys2[j]].low >>> 0, message.mapSfixed64Sfixed64[keys2[j]].high >>> 0).toNumber() : message.mapSfixed64Sfixed64[keys2[j]];
                }
                if (message.mapInt32Float && (keys2 = Object.keys(message.mapInt32Float)).length) {
                    object.mapInt32Float = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapInt32Float[keys2[j]] = options.json && !isFinite(message.mapInt32Float[keys2[j]]) ? String(message.mapInt32Float[keys2[j]]) : message.mapInt32Float[keys2[j]];
                }
                if (message.mapInt32Double && (keys2 = Object.keys(message.mapInt32Double)).length) {
                    object.mapInt32Double = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapInt32Double[keys2[j]] = options.json && !isFinite(message.mapInt32Double[keys2[j]]) ? String(message.mapInt32Double[keys2[j]]) : message.mapInt32Double[keys2[j]];
                }
                if (message.mapBoolBool && (keys2 = Object.keys(message.mapBoolBool)).length) {
                    object.mapBoolBool = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapBoolBool[keys2[j]] = message.mapBoolBool[keys2[j]];
                }
                if (message.mapStringString && (keys2 = Object.keys(message.mapStringString)).length) {
                    object.mapStringString = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringString[keys2[j]] = message.mapStringString[keys2[j]];
                }
                if (message.mapStringBytes && (keys2 = Object.keys(message.mapStringBytes)).length) {
                    object.mapStringBytes = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringBytes[keys2[j]] = options.bytes === String ? $util.base64.encode(message.mapStringBytes[keys2[j]], 0, message.mapStringBytes[keys2[j]].length) : options.bytes === Array ? Array.prototype.slice.call(message.mapStringBytes[keys2[j]]) : message.mapStringBytes[keys2[j]];
                }
                if (message.mapStringNestedMessage && (keys2 = Object.keys(message.mapStringNestedMessage)).length) {
                    object.mapStringNestedMessage = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringNestedMessage[keys2[j]] = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.toObject(message.mapStringNestedMessage[keys2[j]], options);
                }
                if (message.mapStringForeignMessage && (keys2 = Object.keys(message.mapStringForeignMessage)).length) {
                    object.mapStringForeignMessage = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringForeignMessage[keys2[j]] = $root.protobuf_test_messages.proto3.ForeignMessage.toObject(message.mapStringForeignMessage[keys2[j]], options);
                }
                if (message.mapStringNestedEnum && (keys2 = Object.keys(message.mapStringNestedEnum)).length) {
                    object.mapStringNestedEnum = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringNestedEnum[keys2[j]] = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.mapStringNestedEnum[keys2[j]]] === undefined ? message.mapStringNestedEnum[keys2[j]] : $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.mapStringNestedEnum[keys2[j]]] : message.mapStringNestedEnum[keys2[j]];
                }
                if (message.mapStringForeignEnum && (keys2 = Object.keys(message.mapStringForeignEnum)).length) {
                    object.mapStringForeignEnum = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringForeignEnum[keys2[j]] = options.enums === String ? $root.protobuf_test_messages.proto3.ForeignEnum[message.mapStringForeignEnum[keys2[j]]] === undefined ? message.mapStringForeignEnum[keys2[j]] : $root.protobuf_test_messages.proto3.ForeignEnum[message.mapStringForeignEnum[keys2[j]]] : message.mapStringForeignEnum[keys2[j]];
                }
                if (message.packedInt32 && message.packedInt32.length) {
                    object.packedInt32 = [];
                    for (let j = 0; j < message.packedInt32.length; ++j)
                        object.packedInt32[j] = message.packedInt32[j];
                }
                if (message.packedInt64 && message.packedInt64.length) {
                    object.packedInt64 = [];
                    for (let j = 0; j < message.packedInt64.length; ++j)
                        if (typeof message.packedInt64[j] === "number")
                            object.packedInt64[j] = options.longs === String ? String(message.packedInt64[j]) : message.packedInt64[j];
                        else
                            object.packedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedInt64[j]) : options.longs === Number ? new $util.LongBits(message.packedInt64[j].low >>> 0, message.packedInt64[j].high >>> 0).toNumber() : message.packedInt64[j];
                }
                if (message.packedUint32 && message.packedUint32.length) {
                    object.packedUint32 = [];
                    for (let j = 0; j < message.packedUint32.length; ++j)
                        object.packedUint32[j] = message.packedUint32[j];
                }
                if (message.packedUint64 && message.packedUint64.length) {
                    object.packedUint64 = [];
                    for (let j = 0; j < message.packedUint64.length; ++j)
                        if (typeof message.packedUint64[j] === "number")
                            object.packedUint64[j] = options.longs === String ? String(message.packedUint64[j]) : message.packedUint64[j];
                        else
                            object.packedUint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedUint64[j]) : options.longs === Number ? new $util.LongBits(message.packedUint64[j].low >>> 0, message.packedUint64[j].high >>> 0).toNumber(true) : message.packedUint64[j];
                }
                if (message.packedSint32 && message.packedSint32.length) {
                    object.packedSint32 = [];
                    for (let j = 0; j < message.packedSint32.length; ++j)
                        object.packedSint32[j] = message.packedSint32[j];
                }
                if (message.packedSint64 && message.packedSint64.length) {
                    object.packedSint64 = [];
                    for (let j = 0; j < message.packedSint64.length; ++j)
                        if (typeof message.packedSint64[j] === "number")
                            object.packedSint64[j] = options.longs === String ? String(message.packedSint64[j]) : message.packedSint64[j];
                        else
                            object.packedSint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedSint64[j]) : options.longs === Number ? new $util.LongBits(message.packedSint64[j].low >>> 0, message.packedSint64[j].high >>> 0).toNumber() : message.packedSint64[j];
                }
                if (message.packedFixed32 && message.packedFixed32.length) {
                    object.packedFixed32 = [];
                    for (let j = 0; j < message.packedFixed32.length; ++j)
                        object.packedFixed32[j] = message.packedFixed32[j];
                }
                if (message.packedFixed64 && message.packedFixed64.length) {
                    object.packedFixed64 = [];
                    for (let j = 0; j < message.packedFixed64.length; ++j)
                        if (typeof message.packedFixed64[j] === "number")
                            object.packedFixed64[j] = options.longs === String ? String(message.packedFixed64[j]) : message.packedFixed64[j];
                        else
                            object.packedFixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedFixed64[j]) : options.longs === Number ? new $util.LongBits(message.packedFixed64[j].low >>> 0, message.packedFixed64[j].high >>> 0).toNumber() : message.packedFixed64[j];
                }
                if (message.packedSfixed32 && message.packedSfixed32.length) {
                    object.packedSfixed32 = [];
                    for (let j = 0; j < message.packedSfixed32.length; ++j)
                        object.packedSfixed32[j] = message.packedSfixed32[j];
                }
                if (message.packedSfixed64 && message.packedSfixed64.length) {
                    object.packedSfixed64 = [];
                    for (let j = 0; j < message.packedSfixed64.length; ++j)
                        if (typeof message.packedSfixed64[j] === "number")
                            object.packedSfixed64[j] = options.longs === String ? String(message.packedSfixed64[j]) : message.packedSfixed64[j];
                        else
                            object.packedSfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedSfixed64[j]) : options.longs === Number ? new $util.LongBits(message.packedSfixed64[j].low >>> 0, message.packedSfixed64[j].high >>> 0).toNumber() : message.packedSfixed64[j];
                }
                if (message.packedFloat && message.packedFloat.length) {
                    object.packedFloat = [];
                    for (let j = 0; j < message.packedFloat.length; ++j)
                        object.packedFloat[j] = options.json && !isFinite(message.packedFloat[j]) ? String(message.packedFloat[j]) : message.packedFloat[j];
                }
                if (message.packedDouble && message.packedDouble.length) {
                    object.packedDouble = [];
                    for (let j = 0; j < message.packedDouble.length; ++j)
                        object.packedDouble[j] = options.json && !isFinite(message.packedDouble[j]) ? String(message.packedDouble[j]) : message.packedDouble[j];
                }
                if (message.packedBool && message.packedBool.length) {
                    object.packedBool = [];
                    for (let j = 0; j < message.packedBool.length; ++j)
                        object.packedBool[j] = message.packedBool[j];
                }
                if (message.packedNestedEnum && message.packedNestedEnum.length) {
                    object.packedNestedEnum = [];
                    for (let j = 0; j < message.packedNestedEnum.length; ++j)
                        object.packedNestedEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.packedNestedEnum[j]] === undefined ? message.packedNestedEnum[j] : $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.packedNestedEnum[j]] : message.packedNestedEnum[j];
                }
                if (message.unpackedInt32 && message.unpackedInt32.length) {
                    object.unpackedInt32 = [];
                    for (let j = 0; j < message.unpackedInt32.length; ++j)
                        object.unpackedInt32[j] = message.unpackedInt32[j];
                }
                if (message.unpackedInt64 && message.unpackedInt64.length) {
                    object.unpackedInt64 = [];
                    for (let j = 0; j < message.unpackedInt64.length; ++j)
                        if (typeof message.unpackedInt64[j] === "number")
                            object.unpackedInt64[j] = options.longs === String ? String(message.unpackedInt64[j]) : message.unpackedInt64[j];
                        else
                            object.unpackedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedInt64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedInt64[j].low >>> 0, message.unpackedInt64[j].high >>> 0).toNumber() : message.unpackedInt64[j];
                }
                if (message.unpackedUint32 && message.unpackedUint32.length) {
                    object.unpackedUint32 = [];
                    for (let j = 0; j < message.unpackedUint32.length; ++j)
                        object.unpackedUint32[j] = message.unpackedUint32[j];
                }
                if (message.unpackedUint64 && message.unpackedUint64.length) {
                    object.unpackedUint64 = [];
                    for (let j = 0; j < message.unpackedUint64.length; ++j)
                        if (typeof message.unpackedUint64[j] === "number")
                            object.unpackedUint64[j] = options.longs === String ? String(message.unpackedUint64[j]) : message.unpackedUint64[j];
                        else
                            object.unpackedUint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedUint64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedUint64[j].low >>> 0, message.unpackedUint64[j].high >>> 0).toNumber(true) : message.unpackedUint64[j];
                }
                if (message.unpackedSint32 && message.unpackedSint32.length) {
                    object.unpackedSint32 = [];
                    for (let j = 0; j < message.unpackedSint32.length; ++j)
                        object.unpackedSint32[j] = message.unpackedSint32[j];
                }
                if (message.unpackedSint64 && message.unpackedSint64.length) {
                    object.unpackedSint64 = [];
                    for (let j = 0; j < message.unpackedSint64.length; ++j)
                        if (typeof message.unpackedSint64[j] === "number")
                            object.unpackedSint64[j] = options.longs === String ? String(message.unpackedSint64[j]) : message.unpackedSint64[j];
                        else
                            object.unpackedSint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedSint64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedSint64[j].low >>> 0, message.unpackedSint64[j].high >>> 0).toNumber() : message.unpackedSint64[j];
                }
                if (message.unpackedFixed32 && message.unpackedFixed32.length) {
                    object.unpackedFixed32 = [];
                    for (let j = 0; j < message.unpackedFixed32.length; ++j)
                        object.unpackedFixed32[j] = message.unpackedFixed32[j];
                }
                if (message.unpackedFixed64 && message.unpackedFixed64.length) {
                    object.unpackedFixed64 = [];
                    for (let j = 0; j < message.unpackedFixed64.length; ++j)
                        if (typeof message.unpackedFixed64[j] === "number")
                            object.unpackedFixed64[j] = options.longs === String ? String(message.unpackedFixed64[j]) : message.unpackedFixed64[j];
                        else
                            object.unpackedFixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedFixed64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedFixed64[j].low >>> 0, message.unpackedFixed64[j].high >>> 0).toNumber() : message.unpackedFixed64[j];
                }
                if (message.unpackedSfixed32 && message.unpackedSfixed32.length) {
                    object.unpackedSfixed32 = [];
                    for (let j = 0; j < message.unpackedSfixed32.length; ++j)
                        object.unpackedSfixed32[j] = message.unpackedSfixed32[j];
                }
                if (message.unpackedSfixed64 && message.unpackedSfixed64.length) {
                    object.unpackedSfixed64 = [];
                    for (let j = 0; j < message.unpackedSfixed64.length; ++j)
                        if (typeof message.unpackedSfixed64[j] === "number")
                            object.unpackedSfixed64[j] = options.longs === String ? String(message.unpackedSfixed64[j]) : message.unpackedSfixed64[j];
                        else
                            object.unpackedSfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedSfixed64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedSfixed64[j].low >>> 0, message.unpackedSfixed64[j].high >>> 0).toNumber() : message.unpackedSfixed64[j];
                }
                if (message.unpackedFloat && message.unpackedFloat.length) {
                    object.unpackedFloat = [];
                    for (let j = 0; j < message.unpackedFloat.length; ++j)
                        object.unpackedFloat[j] = options.json && !isFinite(message.unpackedFloat[j]) ? String(message.unpackedFloat[j]) : message.unpackedFloat[j];
                }
                if (message.unpackedDouble && message.unpackedDouble.length) {
                    object.unpackedDouble = [];
                    for (let j = 0; j < message.unpackedDouble.length; ++j)
                        object.unpackedDouble[j] = options.json && !isFinite(message.unpackedDouble[j]) ? String(message.unpackedDouble[j]) : message.unpackedDouble[j];
                }
                if (message.unpackedBool && message.unpackedBool.length) {
                    object.unpackedBool = [];
                    for (let j = 0; j < message.unpackedBool.length; ++j)
                        object.unpackedBool[j] = message.unpackedBool[j];
                }
                if (message.unpackedNestedEnum && message.unpackedNestedEnum.length) {
                    object.unpackedNestedEnum = [];
                    for (let j = 0; j < message.unpackedNestedEnum.length; ++j)
                        object.unpackedNestedEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.unpackedNestedEnum[j]] === undefined ? message.unpackedNestedEnum[j] : $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.unpackedNestedEnum[j]] : message.unpackedNestedEnum[j];
                }
                if (message.oneofUint32 != null && message.hasOwnProperty("oneofUint32")) {
                    object.oneofUint32 = message.oneofUint32;
                    if (options.oneofs)
                        object.oneofField = "oneofUint32";
                }
                if (message.oneofNestedMessage != null && message.hasOwnProperty("oneofNestedMessage")) {
                    object.oneofNestedMessage = $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.toObject(message.oneofNestedMessage, options);
                    if (options.oneofs)
                        object.oneofField = "oneofNestedMessage";
                }
                if (message.oneofString != null && message.hasOwnProperty("oneofString")) {
                    object.oneofString = message.oneofString;
                    if (options.oneofs)
                        object.oneofField = "oneofString";
                }
                if (message.oneofBytes != null && message.hasOwnProperty("oneofBytes")) {
                    object.oneofBytes = options.bytes === String ? $util.base64.encode(message.oneofBytes, 0, message.oneofBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.oneofBytes) : message.oneofBytes;
                    if (options.oneofs)
                        object.oneofField = "oneofBytes";
                }
                if (message.oneofBool != null && message.hasOwnProperty("oneofBool")) {
                    object.oneofBool = message.oneofBool;
                    if (options.oneofs)
                        object.oneofField = "oneofBool";
                }
                if (message.oneofUint64 != null && message.hasOwnProperty("oneofUint64")) {
                    if (typeof message.oneofUint64 === "number")
                        object.oneofUint64 = options.longs === String ? String(message.oneofUint64) : message.oneofUint64;
                    else
                        object.oneofUint64 = options.longs === String ? $util.Long.prototype.toString.call(message.oneofUint64) : options.longs === Number ? new $util.LongBits(message.oneofUint64.low >>> 0, message.oneofUint64.high >>> 0).toNumber(true) : message.oneofUint64;
                    if (options.oneofs)
                        object.oneofField = "oneofUint64";
                }
                if (message.oneofFloat != null && message.hasOwnProperty("oneofFloat")) {
                    object.oneofFloat = options.json && !isFinite(message.oneofFloat) ? String(message.oneofFloat) : message.oneofFloat;
                    if (options.oneofs)
                        object.oneofField = "oneofFloat";
                }
                if (message.oneofDouble != null && message.hasOwnProperty("oneofDouble")) {
                    object.oneofDouble = options.json && !isFinite(message.oneofDouble) ? String(message.oneofDouble) : message.oneofDouble;
                    if (options.oneofs)
                        object.oneofField = "oneofDouble";
                }
                if (message.oneofEnum != null && message.hasOwnProperty("oneofEnum")) {
                    object.oneofEnum = options.enums === String ? $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.oneofEnum] === undefined ? message.oneofEnum : $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum[message.oneofEnum] : message.oneofEnum;
                    if (options.oneofs)
                        object.oneofField = "oneofEnum";
                }
                if (message.oneofNullValue != null && message.hasOwnProperty("oneofNullValue")) {
                    object.oneofNullValue = options.enums === String ? $root.google.protobuf.NullValue[message.oneofNullValue] === undefined ? message.oneofNullValue : $root.google.protobuf.NullValue[message.oneofNullValue] : message.oneofNullValue;
                    if (options.oneofs)
                        object.oneofField = "oneofNullValue";
                }
                if (message.optionalBoolWrapper != null && message.hasOwnProperty("optionalBoolWrapper"))
                    object.optionalBoolWrapper = $root.google.protobuf.BoolValue.toObject(message.optionalBoolWrapper, options);
                if (message.optionalInt32Wrapper != null && message.hasOwnProperty("optionalInt32Wrapper"))
                    object.optionalInt32Wrapper = $root.google.protobuf.Int32Value.toObject(message.optionalInt32Wrapper, options);
                if (message.optionalInt64Wrapper != null && message.hasOwnProperty("optionalInt64Wrapper"))
                    object.optionalInt64Wrapper = $root.google.protobuf.Int64Value.toObject(message.optionalInt64Wrapper, options);
                if (message.optionalUint32Wrapper != null && message.hasOwnProperty("optionalUint32Wrapper"))
                    object.optionalUint32Wrapper = $root.google.protobuf.UInt32Value.toObject(message.optionalUint32Wrapper, options);
                if (message.optionalUint64Wrapper != null && message.hasOwnProperty("optionalUint64Wrapper"))
                    object.optionalUint64Wrapper = $root.google.protobuf.UInt64Value.toObject(message.optionalUint64Wrapper, options);
                if (message.optionalFloatWrapper != null && message.hasOwnProperty("optionalFloatWrapper"))
                    object.optionalFloatWrapper = $root.google.protobuf.FloatValue.toObject(message.optionalFloatWrapper, options);
                if (message.optionalDoubleWrapper != null && message.hasOwnProperty("optionalDoubleWrapper"))
                    object.optionalDoubleWrapper = $root.google.protobuf.DoubleValue.toObject(message.optionalDoubleWrapper, options);
                if (message.optionalStringWrapper != null && message.hasOwnProperty("optionalStringWrapper"))
                    object.optionalStringWrapper = $root.google.protobuf.StringValue.toObject(message.optionalStringWrapper, options);
                if (message.optionalBytesWrapper != null && message.hasOwnProperty("optionalBytesWrapper"))
                    object.optionalBytesWrapper = $root.google.protobuf.BytesValue.toObject(message.optionalBytesWrapper, options);
                if (message.repeatedBoolWrapper && message.repeatedBoolWrapper.length) {
                    object.repeatedBoolWrapper = [];
                    for (let j = 0; j < message.repeatedBoolWrapper.length; ++j)
                        object.repeatedBoolWrapper[j] = $root.google.protobuf.BoolValue.toObject(message.repeatedBoolWrapper[j], options);
                }
                if (message.repeatedInt32Wrapper && message.repeatedInt32Wrapper.length) {
                    object.repeatedInt32Wrapper = [];
                    for (let j = 0; j < message.repeatedInt32Wrapper.length; ++j)
                        object.repeatedInt32Wrapper[j] = $root.google.protobuf.Int32Value.toObject(message.repeatedInt32Wrapper[j], options);
                }
                if (message.repeatedInt64Wrapper && message.repeatedInt64Wrapper.length) {
                    object.repeatedInt64Wrapper = [];
                    for (let j = 0; j < message.repeatedInt64Wrapper.length; ++j)
                        object.repeatedInt64Wrapper[j] = $root.google.protobuf.Int64Value.toObject(message.repeatedInt64Wrapper[j], options);
                }
                if (message.repeatedUint32Wrapper && message.repeatedUint32Wrapper.length) {
                    object.repeatedUint32Wrapper = [];
                    for (let j = 0; j < message.repeatedUint32Wrapper.length; ++j)
                        object.repeatedUint32Wrapper[j] = $root.google.protobuf.UInt32Value.toObject(message.repeatedUint32Wrapper[j], options);
                }
                if (message.repeatedUint64Wrapper && message.repeatedUint64Wrapper.length) {
                    object.repeatedUint64Wrapper = [];
                    for (let j = 0; j < message.repeatedUint64Wrapper.length; ++j)
                        object.repeatedUint64Wrapper[j] = $root.google.protobuf.UInt64Value.toObject(message.repeatedUint64Wrapper[j], options);
                }
                if (message.repeatedFloatWrapper && message.repeatedFloatWrapper.length) {
                    object.repeatedFloatWrapper = [];
                    for (let j = 0; j < message.repeatedFloatWrapper.length; ++j)
                        object.repeatedFloatWrapper[j] = $root.google.protobuf.FloatValue.toObject(message.repeatedFloatWrapper[j], options);
                }
                if (message.repeatedDoubleWrapper && message.repeatedDoubleWrapper.length) {
                    object.repeatedDoubleWrapper = [];
                    for (let j = 0; j < message.repeatedDoubleWrapper.length; ++j)
                        object.repeatedDoubleWrapper[j] = $root.google.protobuf.DoubleValue.toObject(message.repeatedDoubleWrapper[j], options);
                }
                if (message.repeatedStringWrapper && message.repeatedStringWrapper.length) {
                    object.repeatedStringWrapper = [];
                    for (let j = 0; j < message.repeatedStringWrapper.length; ++j)
                        object.repeatedStringWrapper[j] = $root.google.protobuf.StringValue.toObject(message.repeatedStringWrapper[j], options);
                }
                if (message.repeatedBytesWrapper && message.repeatedBytesWrapper.length) {
                    object.repeatedBytesWrapper = [];
                    for (let j = 0; j < message.repeatedBytesWrapper.length; ++j)
                        object.repeatedBytesWrapper[j] = $root.google.protobuf.BytesValue.toObject(message.repeatedBytesWrapper[j], options);
                }
                if (message.optionalDuration != null && message.hasOwnProperty("optionalDuration"))
                    object.optionalDuration = $root.google.protobuf.Duration.toObject(message.optionalDuration, options);
                if (message.optionalTimestamp != null && message.hasOwnProperty("optionalTimestamp"))
                    object.optionalTimestamp = $root.google.protobuf.Timestamp.toObject(message.optionalTimestamp, options);
                if (message.optionalFieldMask != null && message.hasOwnProperty("optionalFieldMask"))
                    object.optionalFieldMask = $root.google.protobuf.FieldMask.toObject(message.optionalFieldMask, options);
                if (message.optionalStruct != null && message.hasOwnProperty("optionalStruct"))
                    object.optionalStruct = $root.google.protobuf.Struct.toObject(message.optionalStruct, options);
                if (message.optionalAny != null && message.hasOwnProperty("optionalAny"))
                    object.optionalAny = $root.google.protobuf.Any.toObject(message.optionalAny, options);
                if (message.optionalValue != null && message.hasOwnProperty("optionalValue"))
                    object.optionalValue = $root.google.protobuf.Value.toObject(message.optionalValue, options);
                if (message.optionalNullValue != null && message.hasOwnProperty("optionalNullValue"))
                    object.optionalNullValue = options.enums === String ? $root.google.protobuf.NullValue[message.optionalNullValue] === undefined ? message.optionalNullValue : $root.google.protobuf.NullValue[message.optionalNullValue] : message.optionalNullValue;
                if (message.repeatedDuration && message.repeatedDuration.length) {
                    object.repeatedDuration = [];
                    for (let j = 0; j < message.repeatedDuration.length; ++j)
                        object.repeatedDuration[j] = $root.google.protobuf.Duration.toObject(message.repeatedDuration[j], options);
                }
                if (message.repeatedTimestamp && message.repeatedTimestamp.length) {
                    object.repeatedTimestamp = [];
                    for (let j = 0; j < message.repeatedTimestamp.length; ++j)
                        object.repeatedTimestamp[j] = $root.google.protobuf.Timestamp.toObject(message.repeatedTimestamp[j], options);
                }
                if (message.repeatedFieldmask && message.repeatedFieldmask.length) {
                    object.repeatedFieldmask = [];
                    for (let j = 0; j < message.repeatedFieldmask.length; ++j)
                        object.repeatedFieldmask[j] = $root.google.protobuf.FieldMask.toObject(message.repeatedFieldmask[j], options);
                }
                if (message.repeatedAny && message.repeatedAny.length) {
                    object.repeatedAny = [];
                    for (let j = 0; j < message.repeatedAny.length; ++j)
                        object.repeatedAny[j] = $root.google.protobuf.Any.toObject(message.repeatedAny[j], options);
                }
                if (message.repeatedValue && message.repeatedValue.length) {
                    object.repeatedValue = [];
                    for (let j = 0; j < message.repeatedValue.length; ++j)
                        object.repeatedValue[j] = $root.google.protobuf.Value.toObject(message.repeatedValue[j], options);
                }
                if (message.repeatedListValue && message.repeatedListValue.length) {
                    object.repeatedListValue = [];
                    for (let j = 0; j < message.repeatedListValue.length; ++j)
                        object.repeatedListValue[j] = $root.google.protobuf.ListValue.toObject(message.repeatedListValue[j], options);
                }
                if (message.repeatedStruct && message.repeatedStruct.length) {
                    object.repeatedStruct = [];
                    for (let j = 0; j < message.repeatedStruct.length; ++j)
                        object.repeatedStruct[j] = $root.google.protobuf.Struct.toObject(message.repeatedStruct[j], options);
                }
                if (message.fieldname1 != null && message.hasOwnProperty("fieldname1"))
                    object.fieldname1 = message.fieldname1;
                if (message.fieldName2 != null && message.hasOwnProperty("fieldName2"))
                    object.fieldName2 = message.fieldName2;
                if (message._fieldName3 != null && message.hasOwnProperty("_fieldName3"))
                    object._fieldName3 = message._fieldName3;
                if (message.field_Name4_ != null && message.hasOwnProperty("field_Name4_"))
                    object.field_Name4_ = message.field_Name4_;
                if (message.field0name5 != null && message.hasOwnProperty("field0name5"))
                    object.field0name5 = message.field0name5;
                if (message.field_0Name6 != null && message.hasOwnProperty("field_0Name6"))
                    object.field_0Name6 = message.field_0Name6;
                if (message.fieldName7 != null && message.hasOwnProperty("fieldName7"))
                    object.fieldName7 = message.fieldName7;
                if (message.FieldName8 != null && message.hasOwnProperty("FieldName8"))
                    object.FieldName8 = message.FieldName8;
                if (message.field_Name9 != null && message.hasOwnProperty("field_Name9"))
                    object.field_Name9 = message.field_Name9;
                if (message.Field_Name10 != null && message.hasOwnProperty("Field_Name10"))
                    object.Field_Name10 = message.Field_Name10;
                if (message.FIELD_NAME11 != null && message.hasOwnProperty("FIELD_NAME11"))
                    object.FIELD_NAME11 = message.FIELD_NAME11;
                if (message.FIELDName12 != null && message.hasOwnProperty("FIELDName12"))
                    object.FIELDName12 = message.FIELDName12;
                if (message._FieldName13 != null && message.hasOwnProperty("_FieldName13"))
                    object._FieldName13 = message._FieldName13;
                if (message.__FieldName14 != null && message.hasOwnProperty("__FieldName14"))
                    object.__FieldName14 = message.__FieldName14;
                if (message.field_Name15 != null && message.hasOwnProperty("field_Name15"))
                    object.field_Name15 = message.field_Name15;
                if (message.field__Name16 != null && message.hasOwnProperty("field__Name16"))
                    object.field__Name16 = message.field__Name16;
                if (message.fieldName17__ != null && message.hasOwnProperty("fieldName17__"))
                    object.fieldName17__ = message.fieldName17__;
                if (message.FieldName18__ != null && message.hasOwnProperty("FieldName18__"))
                    object.FieldName18__ = message.FieldName18__;
                return object;
            };

            /**
             * Converts this TestAllTypesProto3 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestAllTypesProto3.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestAllTypesProto3
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestAllTypesProto3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto3.TestAllTypesProto3";
            };

            TestAllTypesProto3.NestedMessage = (function() {

                /**
                 * Properties of a NestedMessage.
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
                 * @interface INestedMessage
                 * @property {number|null} [a] NestedMessage a
                 * @property {protobuf_test_messages.proto3.ITestAllTypesProto3|null} [corecursive] NestedMessage corecursive
                 */

                /**
                 * Constructs a new NestedMessage.
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3
                 * @classdesc Represents a NestedMessage.
                 * @implements INestedMessage
                 * @constructor
                 * @param {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage=} [properties] Properties to set
                 */
                function NestedMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NestedMessage a.
                 * @member {number} a
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @instance
                 */
                NestedMessage.prototype.a = 0;

                /**
                 * NestedMessage corecursive.
                 * @member {protobuf_test_messages.proto3.ITestAllTypesProto3|null|undefined} corecursive
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @instance
                 */
                NestedMessage.prototype.corecursive = null;

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage} NestedMessage instance
                 */
                NestedMessage.create = function create(properties) {
                    return new NestedMessage(properties);
                };

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage} message NestedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.a);
                    if (message.corecursive != null && Object.hasOwnProperty.call(message, "corecursive"))
                        $root.protobuf_test_messages.proto3.TestAllTypesProto3.encode(message.corecursive, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto3.TestAllTypesProto3.INestedMessage} message NestedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.a = reader.int32();
                                break;
                            }
                        case 2: {
                                message.corecursive = $root.protobuf_test_messages.proto3.TestAllTypesProto3.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NestedMessage message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NestedMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.a != null && message.hasOwnProperty("a"))
                        if (!$util.isInteger(message.a))
                            return "a: integer expected";
                    if (message.corecursive != null && message.hasOwnProperty("corecursive")) {
                        let error = $root.protobuf_test_messages.proto3.TestAllTypesProto3.verify(message.corecursive);
                        if (error)
                            return "corecursive." + error;
                    }
                    return null;
                };

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage} NestedMessage
                 */
                NestedMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage)
                        return object;
                    let message = new $root.protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage();
                    if (object.a != null)
                        message.a = object.a | 0;
                    if (object.corecursive != null) {
                        if (typeof object.corecursive !== "object")
                            throw TypeError(".protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage.corecursive: object expected");
                        message.corecursive = $root.protobuf_test_messages.proto3.TestAllTypesProto3.fromObject(object.corecursive);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage} message NestedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NestedMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.a = 0;
                        object.corecursive = null;
                    }
                    if (message.a != null && message.hasOwnProperty("a"))
                        object.a = message.a;
                    if (message.corecursive != null && message.hasOwnProperty("corecursive"))
                        object.corecursive = $root.protobuf_test_messages.proto3.TestAllTypesProto3.toObject(message.corecursive, options);
                    return object;
                };

                /**
                 * Converts this NestedMessage to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NestedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NestedMessage
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NestedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage";
                };

                return NestedMessage;
            })();

            /**
             * NestedEnum enum.
             * @name protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum
             * @enum {number}
             * @property {number} FOO=0 FOO value
             * @property {number} BAR=1 BAR value
             * @property {number} BAZ=2 BAZ value
             * @property {number} NEG=-1 NEG value
             */
            TestAllTypesProto3.NestedEnum = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FOO"] = 0;
                values[valuesById[1] = "BAR"] = 1;
                values[valuesById[2] = "BAZ"] = 2;
                values[valuesById[-1] = "NEG"] = -1;
                return values;
            })();

            /**
             * AliasedEnum enum.
             * @name protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum
             * @enum {number}
             * @property {number} ALIAS_FOO=0 ALIAS_FOO value
             * @property {number} ALIAS_BAR=1 ALIAS_BAR value
             * @property {number} ALIAS_BAZ=2 ALIAS_BAZ value
             * @property {number} MOO=2 MOO value
             * @property {number} moo=2 moo value
             * @property {number} bAz=2 bAz value
             */
            TestAllTypesProto3.AliasedEnum = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ALIAS_FOO"] = 0;
                values[valuesById[1] = "ALIAS_BAR"] = 1;
                values[valuesById[2] = "ALIAS_BAZ"] = 2;
                values["MOO"] = 2;
                values["moo"] = 2;
                values["bAz"] = 2;
                return values;
            })();

            return TestAllTypesProto3;
        })();

        proto3.ForeignMessage = (function() {

            /**
             * Properties of a ForeignMessage.
             * @memberof protobuf_test_messages.proto3
             * @interface IForeignMessage
             * @property {number|null} [c] ForeignMessage c
             */

            /**
             * Constructs a new ForeignMessage.
             * @memberof protobuf_test_messages.proto3
             * @classdesc Represents a ForeignMessage.
             * @implements IForeignMessage
             * @constructor
             * @param {protobuf_test_messages.proto3.IForeignMessage=} [properties] Properties to set
             */
            function ForeignMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ForeignMessage c.
             * @member {number} c
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @instance
             */
            ForeignMessage.prototype.c = 0;

            /**
             * Creates a new ForeignMessage instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {protobuf_test_messages.proto3.IForeignMessage=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto3.ForeignMessage} ForeignMessage instance
             */
            ForeignMessage.create = function create(properties) {
                return new ForeignMessage(properties);
            };

            /**
             * Encodes the specified ForeignMessage message. Does not implicitly {@link protobuf_test_messages.proto3.ForeignMessage.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {protobuf_test_messages.proto3.IForeignMessage} message ForeignMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ForeignMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.c);
                return writer;
            };

            /**
             * Encodes the specified ForeignMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.ForeignMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {protobuf_test_messages.proto3.IForeignMessage} message ForeignMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ForeignMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ForeignMessage message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.ForeignMessage} ForeignMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ForeignMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto3.ForeignMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.c = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ForeignMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.ForeignMessage} ForeignMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ForeignMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ForeignMessage message.
             * @function verify
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ForeignMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.c != null && message.hasOwnProperty("c"))
                    if (!$util.isInteger(message.c))
                        return "c: integer expected";
                return null;
            };

            /**
             * Creates a ForeignMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto3.ForeignMessage} ForeignMessage
             */
            ForeignMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto3.ForeignMessage)
                    return object;
                let message = new $root.protobuf_test_messages.proto3.ForeignMessage();
                if (object.c != null)
                    message.c = object.c | 0;
                return message;
            };

            /**
             * Creates a plain object from a ForeignMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {protobuf_test_messages.proto3.ForeignMessage} message ForeignMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ForeignMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.c = 0;
                if (message.c != null && message.hasOwnProperty("c"))
                    object.c = message.c;
                return object;
            };

            /**
             * Converts this ForeignMessage to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ForeignMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ForeignMessage
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto3.ForeignMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ForeignMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto3.ForeignMessage";
            };

            return ForeignMessage;
        })();

        /**
         * ForeignEnum enum.
         * @name protobuf_test_messages.proto3.ForeignEnum
         * @enum {number}
         * @property {number} FOREIGN_FOO=0 FOREIGN_FOO value
         * @property {number} FOREIGN_BAR=1 FOREIGN_BAR value
         * @property {number} FOREIGN_BAZ=2 FOREIGN_BAZ value
         */
        proto3.ForeignEnum = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FOREIGN_FOO"] = 0;
            values[valuesById[1] = "FOREIGN_BAR"] = 1;
            values[valuesById[2] = "FOREIGN_BAZ"] = 2;
            return values;
        })();

        proto3.NullHypothesisProto3 = (function() {

            /**
             * Properties of a NullHypothesisProto3.
             * @memberof protobuf_test_messages.proto3
             * @interface INullHypothesisProto3
             */

            /**
             * Constructs a new NullHypothesisProto3.
             * @memberof protobuf_test_messages.proto3
             * @classdesc Represents a NullHypothesisProto3.
             * @implements INullHypothesisProto3
             * @constructor
             * @param {protobuf_test_messages.proto3.INullHypothesisProto3=} [properties] Properties to set
             */
            function NullHypothesisProto3(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new NullHypothesisProto3 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {protobuf_test_messages.proto3.INullHypothesisProto3=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto3.NullHypothesisProto3} NullHypothesisProto3 instance
             */
            NullHypothesisProto3.create = function create(properties) {
                return new NullHypothesisProto3(properties);
            };

            /**
             * Encodes the specified NullHypothesisProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.NullHypothesisProto3.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {protobuf_test_messages.proto3.INullHypothesisProto3} message NullHypothesisProto3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NullHypothesisProto3.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified NullHypothesisProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.NullHypothesisProto3.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {protobuf_test_messages.proto3.INullHypothesisProto3} message NullHypothesisProto3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NullHypothesisProto3.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NullHypothesisProto3 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.NullHypothesisProto3} NullHypothesisProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NullHypothesisProto3.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto3.NullHypothesisProto3();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NullHypothesisProto3 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.NullHypothesisProto3} NullHypothesisProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NullHypothesisProto3.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NullHypothesisProto3 message.
             * @function verify
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NullHypothesisProto3.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a NullHypothesisProto3 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto3.NullHypothesisProto3} NullHypothesisProto3
             */
            NullHypothesisProto3.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto3.NullHypothesisProto3)
                    return object;
                return new $root.protobuf_test_messages.proto3.NullHypothesisProto3();
            };

            /**
             * Creates a plain object from a NullHypothesisProto3 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {protobuf_test_messages.proto3.NullHypothesisProto3} message NullHypothesisProto3
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NullHypothesisProto3.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this NullHypothesisProto3 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NullHypothesisProto3.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NullHypothesisProto3
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto3.NullHypothesisProto3
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NullHypothesisProto3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto3.NullHypothesisProto3";
            };

            return NullHypothesisProto3;
        })();

        proto3.EnumOnlyProto3 = (function() {

            /**
             * Properties of an EnumOnlyProto3.
             * @memberof protobuf_test_messages.proto3
             * @interface IEnumOnlyProto3
             */

            /**
             * Constructs a new EnumOnlyProto3.
             * @memberof protobuf_test_messages.proto3
             * @classdesc Represents an EnumOnlyProto3.
             * @implements IEnumOnlyProto3
             * @constructor
             * @param {protobuf_test_messages.proto3.IEnumOnlyProto3=} [properties] Properties to set
             */
            function EnumOnlyProto3(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new EnumOnlyProto3 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {protobuf_test_messages.proto3.IEnumOnlyProto3=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto3.EnumOnlyProto3} EnumOnlyProto3 instance
             */
            EnumOnlyProto3.create = function create(properties) {
                return new EnumOnlyProto3(properties);
            };

            /**
             * Encodes the specified EnumOnlyProto3 message. Does not implicitly {@link protobuf_test_messages.proto3.EnumOnlyProto3.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {protobuf_test_messages.proto3.IEnumOnlyProto3} message EnumOnlyProto3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOnlyProto3.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EnumOnlyProto3 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto3.EnumOnlyProto3.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {protobuf_test_messages.proto3.IEnumOnlyProto3} message EnumOnlyProto3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOnlyProto3.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOnlyProto3 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto3.EnumOnlyProto3} EnumOnlyProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOnlyProto3.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto3.EnumOnlyProto3();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOnlyProto3 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto3.EnumOnlyProto3} EnumOnlyProto3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOnlyProto3.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOnlyProto3 message.
             * @function verify
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOnlyProto3.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an EnumOnlyProto3 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto3.EnumOnlyProto3} EnumOnlyProto3
             */
            EnumOnlyProto3.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto3.EnumOnlyProto3)
                    return object;
                return new $root.protobuf_test_messages.proto3.EnumOnlyProto3();
            };

            /**
             * Creates a plain object from an EnumOnlyProto3 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {protobuf_test_messages.proto3.EnumOnlyProto3} message EnumOnlyProto3
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOnlyProto3.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EnumOnlyProto3 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOnlyProto3.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOnlyProto3
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto3.EnumOnlyProto3
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOnlyProto3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto3.EnumOnlyProto3";
            };

            /**
             * Bool enum.
             * @name protobuf_test_messages.proto3.EnumOnlyProto3.Bool
             * @enum {number}
             * @property {number} kFalse=0 kFalse value
             * @property {number} kTrue=1 kTrue value
             */
            EnumOnlyProto3.Bool = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "kFalse"] = 0;
                values[valuesById[1] = "kTrue"] = 1;
                return values;
            })();

            return EnumOnlyProto3;
        })();

        return proto3;
    })();

    return protobuf_test_messages;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type_url = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Any
             * @function getTypeUrl
             * @memberof google.protobuf.Any
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Any.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Any";
            };

            return Any;
        })();

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                let message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Duration
             * @function getTypeUrl
             * @memberof google.protobuf.Duration
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Duration";
            };

            return Duration;
        })();

        protobuf.FieldMask = (function() {

            /**
             * Properties of a FieldMask.
             * @memberof google.protobuf
             * @interface IFieldMask
             * @property {Array.<string>|null} [paths] FieldMask paths
             */

            /**
             * Constructs a new FieldMask.
             * @memberof google.protobuf
             * @classdesc Represents a FieldMask.
             * @implements IFieldMask
             * @constructor
             * @param {google.protobuf.IFieldMask=} [properties] Properties to set
             */
            function FieldMask(properties) {
                this.paths = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldMask paths.
             * @member {Array.<string>} paths
             * @memberof google.protobuf.FieldMask
             * @instance
             */
            FieldMask.prototype.paths = $util.emptyArray;

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask=} [properties] Properties to set
             * @returns {google.protobuf.FieldMask} FieldMask instance
             */
            FieldMask.create = function create(properties) {
                return new FieldMask(properties);
            };

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldMask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paths != null && message.paths.length)
                    for (let i = 0; i < message.paths.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.paths[i]);
                return writer;
            };

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldMask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldMask} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldMask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldMask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.paths && message.paths.length))
                                message.paths = [];
                            message.paths.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldMask} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldMask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldMask message.
             * @function verify
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldMask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.paths != null && message.hasOwnProperty("paths")) {
                    if (!Array.isArray(message.paths))
                        return "paths: array expected";
                    for (let i = 0; i < message.paths.length; ++i)
                        if (!$util.isString(message.paths[i]))
                            return "paths: string[] expected";
                }
                return null;
            };

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldMask} FieldMask
             */
            FieldMask.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldMask)
                    return object;
                let message = new $root.google.protobuf.FieldMask();
                if (object.paths) {
                    if (!Array.isArray(object.paths))
                        throw TypeError(".google.protobuf.FieldMask.paths: array expected");
                    message.paths = [];
                    for (let i = 0; i < object.paths.length; ++i)
                        message.paths[i] = String(object.paths[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.FieldMask} message FieldMask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldMask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.paths = [];
                if (message.paths && message.paths.length) {
                    object.paths = [];
                    for (let j = 0; j < message.paths.length; ++j)
                        object.paths[j] = message.paths[j];
                }
                return object;
            };

            /**
             * Converts this FieldMask to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldMask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldMask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldMask
             * @function getTypeUrl
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldMask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldMask";
            };

            return FieldMask;
        })();

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (let keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.fields === $util.emptyObject)
                                message.fields = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.fields[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    let key = Object.keys(message.fields);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                let message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (let keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                let keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Struct
             * @function getTypeUrl
             * @memberof google.protobuf.Struct
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Struct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Struct";
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue|null|undefined} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = null;

            /**
             * Value numberValue.
             * @member {number|null|undefined} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = null;

            /**
             * Value stringValue.
             * @member {string|null|undefined} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = null;

            /**
             * Value boolValue.
             * @member {boolean|null|undefined} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = null;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.nullValue = reader.int32();
                            break;
                        }
                    case 2: {
                            message.numberValue = reader.double();
                            break;
                        }
                    case 3: {
                            message.stringValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.boolValue = reader.bool();
                            break;
                        }
                    case 5: {
                            message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        let error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        let error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                let message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                default:
                    if (typeof object.nullValue === "number") {
                        message.nullValue = object.nullValue;
                        break;
                    }
                    break;
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] === undefined ? message.nullValue : $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Value
             * @function getTypeUrl
             * @memberof google.protobuf.Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Value";
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (let i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (let i = 0; i < message.values.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                let message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (let i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (let j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ListValue
             * @function getTypeUrl
             * @memberof google.protobuf.ListValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ListValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ListValue";
            };

            return ListValue;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoubleValue
             * @function getTypeUrl
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoubleValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DoubleValue";
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloatValue
             * @function getTypeUrl
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloatValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FloatValue";
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int64Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int64Value";
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt64Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt64Value";
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int32Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int32Value";
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt32Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt32Value";
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BoolValue
             * @function getTypeUrl
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BoolValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BoolValue";
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringValue
             * @function getTypeUrl
             * @memberof google.protobuf.StringValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.StringValue";
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BytesValue
             * @function getTypeUrl
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BytesValue";
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
