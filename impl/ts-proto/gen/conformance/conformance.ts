/* eslint-disable */
import _m0 from "protobufjs/minimal";

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
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum WireFormat");
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
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum WireFormat");
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
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TestCategory");
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
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TestCategory");
  }
}

/**
 * The conformance runner will request a list of failures as the first request.
 * This will be known by message_type == "conformance.FailureSet", a conformance
 * test should return a serialized FailureSet in protobuf_payload.
 */
export interface FailureSet {
  failure: string[];
}

/**
 * Represents a single test case's input.  The testee should:
 *
 *   1. parse this proto (which should always succeed)
 *   2. parse the protobuf or JSON payload in "payload" (which may fail)
 *   3. if the parse succeeded, serialize the message in the requested format.
 */
export interface ConformanceRequest {
  payload?:
    | { $case: "protobufPayload"; protobufPayload: Uint8Array }
    | { $case: "jsonPayload"; jsonPayload: string }
    | { $case: "jspbPayload"; jspbPayload: string }
    | { $case: "textPayload"; textPayload: string };
  /** Which format should the testee serialize its message to? */
  requestedOutputFormat: WireFormat;
  /**
   * The full name for the test message to use; for the moment, either:
   * protobuf_test_messages.proto3.TestAllTypesProto3 or
   * protobuf_test_messages.google.protobuf.TestAllTypesProto2.
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
    | { $case: "parseError"; parseError: string }
    | { $case: "serializeError"; serializeError: string }
    | { $case: "timeoutError"; timeoutError: string }
    | { $case: "runtimeError"; runtimeError: string }
    | { $case: "protobufPayload"; protobufPayload: Uint8Array }
    | { $case: "jsonPayload"; jsonPayload: string }
    | { $case: "skipped"; skipped: string }
    | { $case: "jspbPayload"; jspbPayload: string }
    | { $case: "textPayload"; textPayload: string };
}

/** Encoding options for jspb format. */
export interface JspbEncodingConfig {
  /** Encode the value field of Any as jspb array if true, otherwise binary. */
  useJspbArrayAnyFormat: boolean;
}

function createBaseFailureSet(): FailureSet {
  return { failure: [] };
}

export const FailureSet = {
  encode(message: FailureSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.failure) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FailureSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailureSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.failure.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FailureSet {
    return { failure: Array.isArray(object?.failure) ? object.failure.map((e: any) => String(e)) : [] };
  },

  toJSON(message: FailureSet): unknown {
    const obj: any = {};
    if (message.failure) {
      obj.failure = message.failure.map((e) => e);
    } else {
      obj.failure = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FailureSet>, I>>(base?: I): FailureSet {
    return FailureSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FailureSet>, I>>(object: I): FailureSet {
    const message = createBaseFailureSet();
    message.failure = object.failure?.map((e) => e) || [];
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

export const ConformanceRequest = {
  encode(message: ConformanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      JspbEncodingConfig.encode(message.jspbEncodingOptions, writer.uint32(50).fork()).ldelim();
    }
    if (message.printUnknownFields === true) {
      writer.uint32(72).bool(message.printUnknownFields);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConformanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConformanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = { $case: "protobufPayload", protobufPayload: reader.bytes() };
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.payload = { $case: "jsonPayload", jsonPayload: reader.string() };
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.payload = { $case: "jspbPayload", jspbPayload: reader.string() };
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.payload = { $case: "textPayload", textPayload: reader.string() };
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requestedOutputFormat = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.messageType = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.testCategory = reader.int32() as any;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.jspbEncodingOptions = JspbEncodingConfig.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.printUnknownFields = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConformanceRequest {
    return {
      payload: isSet(object.protobufPayload)
        ? { $case: "protobufPayload", protobufPayload: bytesFromBase64(object.protobufPayload) }
        : isSet(object.jsonPayload)
        ? { $case: "jsonPayload", jsonPayload: String(object.jsonPayload) }
        : isSet(object.jspbPayload)
        ? { $case: "jspbPayload", jspbPayload: String(object.jspbPayload) }
        : isSet(object.textPayload)
        ? { $case: "textPayload", textPayload: String(object.textPayload) }
        : undefined,
      requestedOutputFormat: isSet(object.requestedOutputFormat) ? wireFormatFromJSON(object.requestedOutputFormat) : 0,
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      testCategory: isSet(object.testCategory) ? testCategoryFromJSON(object.testCategory) : 0,
      jspbEncodingOptions: isSet(object.jspbEncodingOptions)
        ? JspbEncodingConfig.fromJSON(object.jspbEncodingOptions)
        : undefined,
      printUnknownFields: isSet(object.printUnknownFields) ? Boolean(object.printUnknownFields) : false,
    };
  },

  toJSON(message: ConformanceRequest): unknown {
    const obj: any = {};
    message.payload?.$case === "protobufPayload" &&
      (obj.protobufPayload = message.payload?.protobufPayload !== undefined
        ? base64FromBytes(message.payload?.protobufPayload)
        : undefined);
    message.payload?.$case === "jsonPayload" && (obj.jsonPayload = message.payload?.jsonPayload);
    message.payload?.$case === "jspbPayload" && (obj.jspbPayload = message.payload?.jspbPayload);
    message.payload?.$case === "textPayload" && (obj.textPayload = message.payload?.textPayload);
    message.requestedOutputFormat !== undefined &&
      (obj.requestedOutputFormat = wireFormatToJSON(message.requestedOutputFormat));
    message.messageType !== undefined && (obj.messageType = message.messageType);
    message.testCategory !== undefined && (obj.testCategory = testCategoryToJSON(message.testCategory));
    message.jspbEncodingOptions !== undefined && (obj.jspbEncodingOptions = message.jspbEncodingOptions
      ? JspbEncodingConfig.toJSON(message.jspbEncodingOptions)
      : undefined);
    message.printUnknownFields !== undefined && (obj.printUnknownFields = message.printUnknownFields);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConformanceRequest>, I>>(base?: I): ConformanceRequest {
    return ConformanceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConformanceRequest>, I>>(object: I): ConformanceRequest {
    const message = createBaseConformanceRequest();
    if (
      object.payload?.$case === "protobufPayload" &&
      object.payload?.protobufPayload !== undefined &&
      object.payload?.protobufPayload !== null
    ) {
      message.payload = { $case: "protobufPayload", protobufPayload: object.payload.protobufPayload };
    }
    if (
      object.payload?.$case === "jsonPayload" &&
      object.payload?.jsonPayload !== undefined &&
      object.payload?.jsonPayload !== null
    ) {
      message.payload = { $case: "jsonPayload", jsonPayload: object.payload.jsonPayload };
    }
    if (
      object.payload?.$case === "jspbPayload" &&
      object.payload?.jspbPayload !== undefined &&
      object.payload?.jspbPayload !== null
    ) {
      message.payload = { $case: "jspbPayload", jspbPayload: object.payload.jspbPayload };
    }
    if (
      object.payload?.$case === "textPayload" &&
      object.payload?.textPayload !== undefined &&
      object.payload?.textPayload !== null
    ) {
      message.payload = { $case: "textPayload", textPayload: object.payload.textPayload };
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

export const ConformanceResponse = {
  encode(message: ConformanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ConformanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConformanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.result = { $case: "parseError", parseError: reader.string() };
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.result = { $case: "serializeError", serializeError: reader.string() };
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.result = { $case: "timeoutError", timeoutError: reader.string() };
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.result = { $case: "runtimeError", runtimeError: reader.string() };
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.result = { $case: "protobufPayload", protobufPayload: reader.bytes() };
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.result = { $case: "jsonPayload", jsonPayload: reader.string() };
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.result = { $case: "skipped", skipped: reader.string() };
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.result = { $case: "jspbPayload", jspbPayload: reader.string() };
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.result = { $case: "textPayload", textPayload: reader.string() };
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConformanceResponse {
    return {
      result: isSet(object.parseError)
        ? { $case: "parseError", parseError: String(object.parseError) }
        : isSet(object.serializeError)
        ? { $case: "serializeError", serializeError: String(object.serializeError) }
        : isSet(object.timeoutError)
        ? { $case: "timeoutError", timeoutError: String(object.timeoutError) }
        : isSet(object.runtimeError)
        ? { $case: "runtimeError", runtimeError: String(object.runtimeError) }
        : isSet(object.protobufPayload)
        ? { $case: "protobufPayload", protobufPayload: bytesFromBase64(object.protobufPayload) }
        : isSet(object.jsonPayload)
        ? { $case: "jsonPayload", jsonPayload: String(object.jsonPayload) }
        : isSet(object.skipped)
        ? { $case: "skipped", skipped: String(object.skipped) }
        : isSet(object.jspbPayload)
        ? { $case: "jspbPayload", jspbPayload: String(object.jspbPayload) }
        : isSet(object.textPayload)
        ? { $case: "textPayload", textPayload: String(object.textPayload) }
        : undefined,
    };
  },

  toJSON(message: ConformanceResponse): unknown {
    const obj: any = {};
    message.result?.$case === "parseError" && (obj.parseError = message.result?.parseError);
    message.result?.$case === "serializeError" && (obj.serializeError = message.result?.serializeError);
    message.result?.$case === "timeoutError" && (obj.timeoutError = message.result?.timeoutError);
    message.result?.$case === "runtimeError" && (obj.runtimeError = message.result?.runtimeError);
    message.result?.$case === "protobufPayload" && (obj.protobufPayload = message.result?.protobufPayload !== undefined
      ? base64FromBytes(message.result?.protobufPayload)
      : undefined);
    message.result?.$case === "jsonPayload" && (obj.jsonPayload = message.result?.jsonPayload);
    message.result?.$case === "skipped" && (obj.skipped = message.result?.skipped);
    message.result?.$case === "jspbPayload" && (obj.jspbPayload = message.result?.jspbPayload);
    message.result?.$case === "textPayload" && (obj.textPayload = message.result?.textPayload);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConformanceResponse>, I>>(base?: I): ConformanceResponse {
    return ConformanceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConformanceResponse>, I>>(object: I): ConformanceResponse {
    const message = createBaseConformanceResponse();
    if (
      object.result?.$case === "parseError" &&
      object.result?.parseError !== undefined &&
      object.result?.parseError !== null
    ) {
      message.result = { $case: "parseError", parseError: object.result.parseError };
    }
    if (
      object.result?.$case === "serializeError" &&
      object.result?.serializeError !== undefined &&
      object.result?.serializeError !== null
    ) {
      message.result = { $case: "serializeError", serializeError: object.result.serializeError };
    }
    if (
      object.result?.$case === "timeoutError" &&
      object.result?.timeoutError !== undefined &&
      object.result?.timeoutError !== null
    ) {
      message.result = { $case: "timeoutError", timeoutError: object.result.timeoutError };
    }
    if (
      object.result?.$case === "runtimeError" &&
      object.result?.runtimeError !== undefined &&
      object.result?.runtimeError !== null
    ) {
      message.result = { $case: "runtimeError", runtimeError: object.result.runtimeError };
    }
    if (
      object.result?.$case === "protobufPayload" &&
      object.result?.protobufPayload !== undefined &&
      object.result?.protobufPayload !== null
    ) {
      message.result = { $case: "protobufPayload", protobufPayload: object.result.protobufPayload };
    }
    if (
      object.result?.$case === "jsonPayload" &&
      object.result?.jsonPayload !== undefined &&
      object.result?.jsonPayload !== null
    ) {
      message.result = { $case: "jsonPayload", jsonPayload: object.result.jsonPayload };
    }
    if (object.result?.$case === "skipped" && object.result?.skipped !== undefined && object.result?.skipped !== null) {
      message.result = { $case: "skipped", skipped: object.result.skipped };
    }
    if (
      object.result?.$case === "jspbPayload" &&
      object.result?.jspbPayload !== undefined &&
      object.result?.jspbPayload !== null
    ) {
      message.result = { $case: "jspbPayload", jspbPayload: object.result.jspbPayload };
    }
    if (
      object.result?.$case === "textPayload" &&
      object.result?.textPayload !== undefined &&
      object.result?.textPayload !== null
    ) {
      message.result = { $case: "textPayload", textPayload: object.result.textPayload };
    }
    return message;
  },
};

function createBaseJspbEncodingConfig(): JspbEncodingConfig {
  return { useJspbArrayAnyFormat: false };
}

export const JspbEncodingConfig = {
  encode(message: JspbEncodingConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useJspbArrayAnyFormat === true) {
      writer.uint32(8).bool(message.useJspbArrayAnyFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JspbEncodingConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJspbEncodingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.useJspbArrayAnyFormat = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JspbEncodingConfig {
    return {
      useJspbArrayAnyFormat: isSet(object.useJspbArrayAnyFormat) ? Boolean(object.useJspbArrayAnyFormat) : false,
    };
  },

  toJSON(message: JspbEncodingConfig): unknown {
    const obj: any = {};
    message.useJspbArrayAnyFormat !== undefined && (obj.useJspbArrayAnyFormat = message.useJspbArrayAnyFormat);
    return obj;
  },

  create<I extends Exact<DeepPartial<JspbEncodingConfig>, I>>(base?: I): JspbEncodingConfig {
    return JspbEncodingConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<JspbEncodingConfig>, I>>(object: I): JspbEncodingConfig {
    const message = createBaseJspbEncodingConfig();
    message.useJspbArrayAnyFormat = object.useJspbArrayAnyFormat ?? false;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
