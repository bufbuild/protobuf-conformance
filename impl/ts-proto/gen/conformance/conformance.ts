// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               unknown
// source: conformance/conformance.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "conformance";

export enum WireFormat {
  UNSPECIFIED = 0,
  PROTOBUF = 1,
  JSON = 2,
  /** JSPB - Only used inside Google. Opensource testees just skip it. */
  JSPB = 3,
  TEXT_FORMAT = 4,
}

export function wireFormatFromJSON(object: any): WireFormat {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return WireFormat.UNSPECIFIED;
    case 1:
    case "PROTOBUF":
      return WireFormat.PROTOBUF;
    case 2:
    case "JSON":
      return WireFormat.JSON;
    case 3:
    case "JSPB":
      return WireFormat.JSPB;
    case 4:
    case "TEXT_FORMAT":
      return WireFormat.TEXT_FORMAT;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum WireFormat");
  }
}

export function wireFormatToJSON(object: WireFormat): string {
  switch (object) {
    case WireFormat.UNSPECIFIED:
      return "UNSPECIFIED";
    case WireFormat.PROTOBUF:
      return "PROTOBUF";
    case WireFormat.JSON:
      return "JSON";
    case WireFormat.JSPB:
      return "JSPB";
    case WireFormat.TEXT_FORMAT:
      return "TEXT_FORMAT";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum WireFormat");
  }
}

export enum TestCategory {
  UNSPECIFIED_TEST = 0,
  /** BINARY_TEST - Test binary wire format. */
  BINARY_TEST = 1,
  /** JSON_TEST - Test json wire format. */
  JSON_TEST = 2,
  /**
   * JSON_IGNORE_UNKNOWN_PARSING_TEST - Similar to JSON_TEST. However, during parsing json, testee should ignore
   * unknown fields. This feature is optional. Each implementation can decide
   * whether to support it.  See
   * https://developers.google.com/protocol-buffers/docs/proto3#json_options
   * for more detail.
   */
  JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,
  /**
   * JSPB_TEST - Test jspb wire format. Only used inside Google. Opensource testees just
   * skip it.
   */
  JSPB_TEST = 4,
  /**
   * TEXT_FORMAT_TEST - Test text format. For cpp, java and python, testees can already deal with
   * this type. Testees of other languages can simply skip it.
   */
  TEXT_FORMAT_TEST = 5,
}

export function testCategoryFromJSON(object: any): TestCategory {
  switch (object) {
    case 0:
    case "UNSPECIFIED_TEST":
      return TestCategory.UNSPECIFIED_TEST;
    case 1:
    case "BINARY_TEST":
      return TestCategory.BINARY_TEST;
    case 2:
    case "JSON_TEST":
      return TestCategory.JSON_TEST;
    case 3:
    case "JSON_IGNORE_UNKNOWN_PARSING_TEST":
      return TestCategory.JSON_IGNORE_UNKNOWN_PARSING_TEST;
    case 4:
    case "JSPB_TEST":
      return TestCategory.JSPB_TEST;
    case 5:
    case "TEXT_FORMAT_TEST":
      return TestCategory.TEXT_FORMAT_TEST;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TestCategory");
  }
}

export function testCategoryToJSON(object: TestCategory): string {
  switch (object) {
    case TestCategory.UNSPECIFIED_TEST:
      return "UNSPECIFIED_TEST";
    case TestCategory.BINARY_TEST:
      return "BINARY_TEST";
    case TestCategory.JSON_TEST:
      return "JSON_TEST";
    case TestCategory.JSON_IGNORE_UNKNOWN_PARSING_TEST:
      return "JSON_IGNORE_UNKNOWN_PARSING_TEST";
    case TestCategory.JSPB_TEST:
      return "JSPB_TEST";
    case TestCategory.TEXT_FORMAT_TEST:
      return "TEXT_FORMAT_TEST";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TestCategory");
  }
}

/**
 * Meant to encapsulate all types of tests: successes, skips, failures, etc.
 * Therefore, this may or may not have a failure message. Failure messages
 * may be truncated for our failure lists.
 */
export interface TestStatus {
  name: string;
  failureMessage: string;
  /**
   * What an actual test name matched to in a failure list. Can be wildcarded or
   * an exact match without wildcards.
   */
  matchedName: string;
}

/**
 * The conformance runner will request a list of failures as the first request.
 * This will be known by message_type == "conformance.FailureSet", a conformance
 * test should return a serialized FailureSet in protobuf_payload.
 */
export interface FailureSet {
  test: TestStatus[];
}

/**
 * Represents a single test case's input.  The testee should:
 *
 *   1. parse this proto (which should always succeed)
 *   2. parse the protobuf or JSON payload in "payload" (which may fail)
 *   3. if the parse succeeded, serialize the message in the requested format.
 */
export interface ConformanceRequest {
  /**
   * The payload (whether protobuf of JSON) is always for a
   * protobuf_test_messages.proto3.TestAllTypes proto (as defined in
   * src/google/protobuf/proto3_test_messages.proto).
   */
  payload?:
    | { $case: "protobufPayload"; protobufPayload: Uint8Array }
    | { $case: "jsonPayload"; jsonPayload: string }
    | //
    /** Only used inside Google.  Opensource testees just skip it. */
    { $case: "jspbPayload"; jspbPayload: string }
    | { $case: "textPayload"; textPayload: string }
    | undefined;
  /** Which format should the testee serialize its message to? */
  requestedOutputFormat: WireFormat;
  /**
   * The full name for the test message to use; for the moment, either:
   * protobuf_test_messages.proto3.TestAllTypesProto3 or
   * protobuf_test_messages.proto2.TestAllTypesProto2 or
   * protobuf_test_messages.editions.proto2.TestAllTypesProto2 or
   * protobuf_test_messages.editions.proto3.TestAllTypesProto3 or
   * protobuf_test_messages.editions.TestAllTypesEdition2023.
   */
  messageType: string;
  /**
   * Each test is given a specific test category. Some category may need
   * specific support in testee programs. Refer to the definition of
   * TestCategory for more information.
   */
  testCategory: TestCategory;
  /** Specify details for how to encode jspb. */
  jspbEncodingOptions:
    | JspbEncodingConfig
    | undefined;
  /**
   * This can be used in json and text format. If true, testee should print
   * unknown fields instead of ignore. This feature is optional.
   */
  printUnknownFields: boolean;
}

/** Represents a single test case's output. */
export interface ConformanceResponse {
  result?:
    | //
    /**
     * This string should be set to indicate parsing failed.  The string can
     * provide more information about the parse error if it is available.
     *
     * Setting this string does not necessarily mean the testee failed the
     * test.  Some of the test cases are intentionally invalid input.
     */
    { $case: "parseError"; parseError: string }
    | //
    /**
     * If the input was successfully parsed but errors occurred when
     * serializing it to the requested output format, set the error message in
     * this field.
     */
    { $case: "serializeError"; serializeError: string }
    | //
    /**
     * This should be set if the test program timed out.  The string should
     * provide more information about what the child process was doing when it
     * was killed.
     */
    { $case: "timeoutError"; timeoutError: string }
    | //
    /**
     * This should be set if some other error occurred.  This will always
     * indicate that the test failed.  The string can provide more information
     * about the failure.
     */
    { $case: "runtimeError"; runtimeError: string }
    | //
    /**
     * If the input was successfully parsed and the requested output was
     * protobuf, serialize it to protobuf and set it in this field.
     */
    { $case: "protobufPayload"; protobufPayload: Uint8Array }
    | //
    /**
     * If the input was successfully parsed and the requested output was JSON,
     * serialize to JSON and set it in this field.
     */
    { $case: "jsonPayload"; jsonPayload: string }
    | //
    /**
     * For when the testee skipped the test, likely because a certain feature
     * wasn't supported, like JSON input/output.
     */
    { $case: "skipped"; skipped: string }
    | //
    /**
     * If the input was successfully parsed and the requested output was JSPB,
     * serialize to JSPB and set it in this field. JSPB is only used inside
     * Google. Opensource testees can just skip it.
     */
    { $case: "jspbPayload"; jspbPayload: string }
    | //
    /**
     * If the input was successfully parsed and the requested output was
     * TEXT_FORMAT, serialize to TEXT_FORMAT and set it in this field.
     */
    { $case: "textPayload"; textPayload: string }
    | undefined;
}

/** Encoding options for jspb format. */
export interface JspbEncodingConfig {
  /** Encode the value field of Any as jspb array if true, otherwise binary. */
  useJspbArrayAnyFormat: boolean;
}

function createBaseTestStatus(): TestStatus {
  return { name: "", failureMessage: "", matchedName: "" };
}

export const TestStatus: MessageFns<TestStatus> = {
  encode(message: TestStatus, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.failureMessage !== "") {
      writer.uint32(18).string(message.failureMessage);
    }
    if (message.matchedName !== "") {
      writer.uint32(26).string(message.matchedName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TestStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.failureMessage = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.matchedName = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestStatus {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      failureMessage: isSet(object.failureMessage) ? globalThis.String(object.failureMessage) : "",
      matchedName: isSet(object.matchedName) ? globalThis.String(object.matchedName) : "",
    };
  },

  toJSON(message: TestStatus): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.failureMessage !== "") {
      obj.failureMessage = message.failureMessage;
    }
    if (message.matchedName !== "") {
      obj.matchedName = message.matchedName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestStatus>, I>>(base?: I): TestStatus {
    return TestStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestStatus>, I>>(object: I): TestStatus {
    const message = createBaseTestStatus();
    message.name = object.name ?? "";
    message.failureMessage = object.failureMessage ?? "";
    message.matchedName = object.matchedName ?? "";
    return message;
  },
};

function createBaseFailureSet(): FailureSet {
  return { test: [] };
}

export const FailureSet: MessageFns<FailureSet> = {
  encode(message: FailureSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.test) {
      TestStatus.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FailureSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailureSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.test.push(TestStatus.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FailureSet {
    return { test: globalThis.Array.isArray(object?.test) ? object.test.map((e: any) => TestStatus.fromJSON(e)) : [] };
  },

  toJSON(message: FailureSet): unknown {
    const obj: any = {};
    if (message.test?.length) {
      obj.test = message.test.map((e) => TestStatus.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FailureSet>, I>>(base?: I): FailureSet {
    return FailureSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FailureSet>, I>>(object: I): FailureSet {
    const message = createBaseFailureSet();
    message.test = object.test?.map((e) => TestStatus.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConformanceRequest(): ConformanceRequest {
  return {
    payload: undefined,
    requestedOutputFormat: 0,
    messageType: "",
    testCategory: 0,
    jspbEncodingOptions: undefined,
    printUnknownFields: false,
  };
}

export const ConformanceRequest: MessageFns<ConformanceRequest> = {
  encode(message: ConformanceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    switch (message.payload?.$case) {
      case "protobufPayload":
        writer.uint32(10).bytes(message.payload.protobufPayload);
        break;
      case "jsonPayload":
        writer.uint32(18).string(message.payload.jsonPayload);
        break;
      case "jspbPayload":
        writer.uint32(58).string(message.payload.jspbPayload);
        break;
      case "textPayload":
        writer.uint32(66).string(message.payload.textPayload);
        break;
    }
    if (message.requestedOutputFormat !== 0) {
      writer.uint32(24).int32(message.requestedOutputFormat);
    }
    if (message.messageType !== "") {
      writer.uint32(34).string(message.messageType);
    }
    if (message.testCategory !== 0) {
      writer.uint32(40).int32(message.testCategory);
    }
    if (message.jspbEncodingOptions !== undefined) {
      JspbEncodingConfig.encode(message.jspbEncodingOptions, writer.uint32(50).fork()).join();
    }
    if (message.printUnknownFields !== false) {
      writer.uint32(72).bool(message.printUnknownFields);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConformanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConformanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.payload = { $case: "protobufPayload", protobufPayload: reader.bytes() };
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "jsonPayload", jsonPayload: reader.string() };
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.payload = { $case: "jspbPayload", jspbPayload: reader.string() };
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.payload = { $case: "textPayload", textPayload: reader.string() };
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.requestedOutputFormat = reader.int32() as any;
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.messageType = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.testCategory = reader.int32() as any;
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.jspbEncodingOptions = JspbEncodingConfig.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.printUnknownFields = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConformanceRequest {
    return {
      payload: isSet(object.protobufPayload)
        ? { $case: "protobufPayload", protobufPayload: bytesFromBase64(object.protobufPayload) }
        : isSet(object.jsonPayload)
        ? { $case: "jsonPayload", jsonPayload: globalThis.String(object.jsonPayload) }
        : isSet(object.jspbPayload)
        ? { $case: "jspbPayload", jspbPayload: globalThis.String(object.jspbPayload) }
        : isSet(object.textPayload)
        ? { $case: "textPayload", textPayload: globalThis.String(object.textPayload) }
        : undefined,
      requestedOutputFormat: isSet(object.requestedOutputFormat) ? wireFormatFromJSON(object.requestedOutputFormat) : 0,
      messageType: isSet(object.messageType) ? globalThis.String(object.messageType) : "",
      testCategory: isSet(object.testCategory) ? testCategoryFromJSON(object.testCategory) : 0,
      jspbEncodingOptions: isSet(object.jspbEncodingOptions)
        ? JspbEncodingConfig.fromJSON(object.jspbEncodingOptions)
        : undefined,
      printUnknownFields: isSet(object.printUnknownFields) ? globalThis.Boolean(object.printUnknownFields) : false,
    };
  },

  toJSON(message: ConformanceRequest): unknown {
    const obj: any = {};
    if (message.payload?.$case === "protobufPayload") {
      obj.protobufPayload = base64FromBytes(message.payload.protobufPayload);
    } else if (message.payload?.$case === "jsonPayload") {
      obj.jsonPayload = message.payload.jsonPayload;
    } else if (message.payload?.$case === "jspbPayload") {
      obj.jspbPayload = message.payload.jspbPayload;
    } else if (message.payload?.$case === "textPayload") {
      obj.textPayload = message.payload.textPayload;
    }
    if (message.requestedOutputFormat !== 0) {
      obj.requestedOutputFormat = wireFormatToJSON(message.requestedOutputFormat);
    }
    if (message.messageType !== "") {
      obj.messageType = message.messageType;
    }
    if (message.testCategory !== 0) {
      obj.testCategory = testCategoryToJSON(message.testCategory);
    }
    if (message.jspbEncodingOptions !== undefined) {
      obj.jspbEncodingOptions = JspbEncodingConfig.toJSON(message.jspbEncodingOptions);
    }
    if (message.printUnknownFields !== false) {
      obj.printUnknownFields = message.printUnknownFields;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConformanceRequest>, I>>(base?: I): ConformanceRequest {
    return ConformanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConformanceRequest>, I>>(object: I): ConformanceRequest {
    const message = createBaseConformanceRequest();
    switch (object.payload?.$case) {
      case "protobufPayload": {
        if (object.payload?.protobufPayload !== undefined && object.payload?.protobufPayload !== null) {
          message.payload = { $case: "protobufPayload", protobufPayload: object.payload.protobufPayload };
        }
        break;
      }
      case "jsonPayload": {
        if (object.payload?.jsonPayload !== undefined && object.payload?.jsonPayload !== null) {
          message.payload = { $case: "jsonPayload", jsonPayload: object.payload.jsonPayload };
        }
        break;
      }
      case "jspbPayload": {
        if (object.payload?.jspbPayload !== undefined && object.payload?.jspbPayload !== null) {
          message.payload = { $case: "jspbPayload", jspbPayload: object.payload.jspbPayload };
        }
        break;
      }
      case "textPayload": {
        if (object.payload?.textPayload !== undefined && object.payload?.textPayload !== null) {
          message.payload = { $case: "textPayload", textPayload: object.payload.textPayload };
        }
        break;
      }
    }
    message.requestedOutputFormat = object.requestedOutputFormat ?? 0;
    message.messageType = object.messageType ?? "";
    message.testCategory = object.testCategory ?? 0;
    message.jspbEncodingOptions = (object.jspbEncodingOptions !== undefined && object.jspbEncodingOptions !== null)
      ? JspbEncodingConfig.fromPartial(object.jspbEncodingOptions)
      : undefined;
    message.printUnknownFields = object.printUnknownFields ?? false;
    return message;
  },
};

function createBaseConformanceResponse(): ConformanceResponse {
  return { result: undefined };
}

export const ConformanceResponse: MessageFns<ConformanceResponse> = {
  encode(message: ConformanceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    switch (message.result?.$case) {
      case "parseError":
        writer.uint32(10).string(message.result.parseError);
        break;
      case "serializeError":
        writer.uint32(50).string(message.result.serializeError);
        break;
      case "timeoutError":
        writer.uint32(74).string(message.result.timeoutError);
        break;
      case "runtimeError":
        writer.uint32(18).string(message.result.runtimeError);
        break;
      case "protobufPayload":
        writer.uint32(26).bytes(message.result.protobufPayload);
        break;
      case "jsonPayload":
        writer.uint32(34).string(message.result.jsonPayload);
        break;
      case "skipped":
        writer.uint32(42).string(message.result.skipped);
        break;
      case "jspbPayload":
        writer.uint32(58).string(message.result.jspbPayload);
        break;
      case "textPayload":
        writer.uint32(66).string(message.result.textPayload);
        break;
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConformanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConformanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.result = { $case: "parseError", parseError: reader.string() };
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.result = { $case: "serializeError", serializeError: reader.string() };
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.result = { $case: "timeoutError", timeoutError: reader.string() };
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.result = { $case: "runtimeError", runtimeError: reader.string() };
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.result = { $case: "protobufPayload", protobufPayload: reader.bytes() };
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.result = { $case: "jsonPayload", jsonPayload: reader.string() };
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.result = { $case: "skipped", skipped: reader.string() };
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.result = { $case: "jspbPayload", jspbPayload: reader.string() };
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.result = { $case: "textPayload", textPayload: reader.string() };
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConformanceResponse {
    return {
      result: isSet(object.parseError)
        ? { $case: "parseError", parseError: globalThis.String(object.parseError) }
        : isSet(object.serializeError)
        ? { $case: "serializeError", serializeError: globalThis.String(object.serializeError) }
        : isSet(object.timeoutError)
        ? { $case: "timeoutError", timeoutError: globalThis.String(object.timeoutError) }
        : isSet(object.runtimeError)
        ? { $case: "runtimeError", runtimeError: globalThis.String(object.runtimeError) }
        : isSet(object.protobufPayload)
        ? { $case: "protobufPayload", protobufPayload: bytesFromBase64(object.protobufPayload) }
        : isSet(object.jsonPayload)
        ? { $case: "jsonPayload", jsonPayload: globalThis.String(object.jsonPayload) }
        : isSet(object.skipped)
        ? { $case: "skipped", skipped: globalThis.String(object.skipped) }
        : isSet(object.jspbPayload)
        ? { $case: "jspbPayload", jspbPayload: globalThis.String(object.jspbPayload) }
        : isSet(object.textPayload)
        ? { $case: "textPayload", textPayload: globalThis.String(object.textPayload) }
        : undefined,
    };
  },

  toJSON(message: ConformanceResponse): unknown {
    const obj: any = {};
    if (message.result?.$case === "parseError") {
      obj.parseError = message.result.parseError;
    } else if (message.result?.$case === "serializeError") {
      obj.serializeError = message.result.serializeError;
    } else if (message.result?.$case === "timeoutError") {
      obj.timeoutError = message.result.timeoutError;
    } else if (message.result?.$case === "runtimeError") {
      obj.runtimeError = message.result.runtimeError;
    } else if (message.result?.$case === "protobufPayload") {
      obj.protobufPayload = base64FromBytes(message.result.protobufPayload);
    } else if (message.result?.$case === "jsonPayload") {
      obj.jsonPayload = message.result.jsonPayload;
    } else if (message.result?.$case === "skipped") {
      obj.skipped = message.result.skipped;
    } else if (message.result?.$case === "jspbPayload") {
      obj.jspbPayload = message.result.jspbPayload;
    } else if (message.result?.$case === "textPayload") {
      obj.textPayload = message.result.textPayload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConformanceResponse>, I>>(base?: I): ConformanceResponse {
    return ConformanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConformanceResponse>, I>>(object: I): ConformanceResponse {
    const message = createBaseConformanceResponse();
    switch (object.result?.$case) {
      case "parseError": {
        if (object.result?.parseError !== undefined && object.result?.parseError !== null) {
          message.result = { $case: "parseError", parseError: object.result.parseError };
        }
        break;
      }
      case "serializeError": {
        if (object.result?.serializeError !== undefined && object.result?.serializeError !== null) {
          message.result = { $case: "serializeError", serializeError: object.result.serializeError };
        }
        break;
      }
      case "timeoutError": {
        if (object.result?.timeoutError !== undefined && object.result?.timeoutError !== null) {
          message.result = { $case: "timeoutError", timeoutError: object.result.timeoutError };
        }
        break;
      }
      case "runtimeError": {
        if (object.result?.runtimeError !== undefined && object.result?.runtimeError !== null) {
          message.result = { $case: "runtimeError", runtimeError: object.result.runtimeError };
        }
        break;
      }
      case "protobufPayload": {
        if (object.result?.protobufPayload !== undefined && object.result?.protobufPayload !== null) {
          message.result = { $case: "protobufPayload", protobufPayload: object.result.protobufPayload };
        }
        break;
      }
      case "jsonPayload": {
        if (object.result?.jsonPayload !== undefined && object.result?.jsonPayload !== null) {
          message.result = { $case: "jsonPayload", jsonPayload: object.result.jsonPayload };
        }
        break;
      }
      case "skipped": {
        if (object.result?.skipped !== undefined && object.result?.skipped !== null) {
          message.result = { $case: "skipped", skipped: object.result.skipped };
        }
        break;
      }
      case "jspbPayload": {
        if (object.result?.jspbPayload !== undefined && object.result?.jspbPayload !== null) {
          message.result = { $case: "jspbPayload", jspbPayload: object.result.jspbPayload };
        }
        break;
      }
      case "textPayload": {
        if (object.result?.textPayload !== undefined && object.result?.textPayload !== null) {
          message.result = { $case: "textPayload", textPayload: object.result.textPayload };
        }
        break;
      }
    }
    return message;
  },
};

function createBaseJspbEncodingConfig(): JspbEncodingConfig {
  return { useJspbArrayAnyFormat: false };
}

export const JspbEncodingConfig: MessageFns<JspbEncodingConfig> = {
  encode(message: JspbEncodingConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.useJspbArrayAnyFormat !== false) {
      writer.uint32(8).bool(message.useJspbArrayAnyFormat);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): JspbEncodingConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJspbEncodingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.useJspbArrayAnyFormat = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JspbEncodingConfig {
    return {
      useJspbArrayAnyFormat: isSet(object.useJspbArrayAnyFormat)
        ? globalThis.Boolean(object.useJspbArrayAnyFormat)
        : false,
    };
  },

  toJSON(message: JspbEncodingConfig): unknown {
    const obj: any = {};
    if (message.useJspbArrayAnyFormat !== false) {
      obj.useJspbArrayAnyFormat = message.useJspbArrayAnyFormat;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JspbEncodingConfig>, I>>(base?: I): JspbEncodingConfig {
    return JspbEncodingConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JspbEncodingConfig>, I>>(object: I): JspbEncodingConfig {
    const message = createBaseJspbEncodingConfig();
    message.useJspbArrayAnyFormat = object.useJspbArrayAnyFormat ?? false;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
