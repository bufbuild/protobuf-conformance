/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_test_messages.proto2";

export enum ForeignEnumProto2 {
  FOREIGN_FOO = 0,
  FOREIGN_BAR = 1,
  FOREIGN_BAZ = 2,
}

export function foreignEnumProto2FromJSON(object: any): ForeignEnumProto2 {
  switch (object) {
    case 0:
    case "FOREIGN_FOO":
      return ForeignEnumProto2.FOREIGN_FOO;
    case 1:
    case "FOREIGN_BAR":
      return ForeignEnumProto2.FOREIGN_BAR;
    case 2:
    case "FOREIGN_BAZ":
      return ForeignEnumProto2.FOREIGN_BAZ;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ForeignEnumProto2");
  }
}

export function foreignEnumProto2ToJSON(object: ForeignEnumProto2): string {
  switch (object) {
    case ForeignEnumProto2.FOREIGN_FOO:
      return "FOREIGN_FOO";
    case ForeignEnumProto2.FOREIGN_BAR:
      return "FOREIGN_BAR";
    case ForeignEnumProto2.FOREIGN_BAZ:
      return "FOREIGN_BAZ";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ForeignEnumProto2");
  }
}

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * Also, crucially, all messages and enums in this file are eventually
 * submessages of this message.  So for example, a fuzz test of TestAllTypes
 * could trigger bugs that occur in any message type in this file.  We verify
 * this stays true in a unit test.
 */
export interface TestAllTypesProto2 {
  /** Singular */
  optionalInt32: number;
  optionalInt64: number;
  optionalUint32: number;
  optionalUint64: number;
  optionalSint32: number;
  optionalSint64: number;
  optionalFixed32: number;
  optionalFixed64: number;
  optionalSfixed32: number;
  optionalSfixed64: number;
  optionalFloat: number;
  optionalDouble: number;
  optionalBool: boolean;
  optionalString: string;
  optionalBytes: Uint8Array;
  optionalNestedMessage: TestAllTypesProto2_NestedMessage | undefined;
  optionalForeignMessage: ForeignMessageProto2 | undefined;
  optionalNestedEnum: TestAllTypesProto2_NestedEnum;
  optionalForeignEnum: ForeignEnumProto2;
  optionalStringPiece: string;
  optionalCord: string;
  recursiveMessage:
    | TestAllTypesProto2
    | undefined;
  /** Repeated */
  repeatedInt32: number[];
  repeatedInt64: number[];
  repeatedUint32: number[];
  repeatedUint64: number[];
  repeatedSint32: number[];
  repeatedSint64: number[];
  repeatedFixed32: number[];
  repeatedFixed64: number[];
  repeatedSfixed32: number[];
  repeatedSfixed64: number[];
  repeatedFloat: number[];
  repeatedDouble: number[];
  repeatedBool: boolean[];
  repeatedString: string[];
  repeatedBytes: Uint8Array[];
  repeatedNestedMessage: TestAllTypesProto2_NestedMessage[];
  repeatedForeignMessage: ForeignMessageProto2[];
  repeatedNestedEnum: TestAllTypesProto2_NestedEnum[];
  repeatedForeignEnum: ForeignEnumProto2[];
  repeatedStringPiece: string[];
  repeatedCord: string[];
  /** Packed */
  packedInt32: number[];
  packedInt64: number[];
  packedUint32: number[];
  packedUint64: number[];
  packedSint32: number[];
  packedSint64: number[];
  packedFixed32: number[];
  packedFixed64: number[];
  packedSfixed32: number[];
  packedSfixed64: number[];
  packedFloat: number[];
  packedDouble: number[];
  packedBool: boolean[];
  packedNestedEnum: TestAllTypesProto2_NestedEnum[];
  /** Unpacked */
  unpackedInt32: number[];
  unpackedInt64: number[];
  unpackedUint32: number[];
  unpackedUint64: number[];
  unpackedSint32: number[];
  unpackedSint64: number[];
  unpackedFixed32: number[];
  unpackedFixed64: number[];
  unpackedSfixed32: number[];
  unpackedSfixed64: number[];
  unpackedFloat: number[];
  unpackedDouble: number[];
  unpackedBool: boolean[];
  unpackedNestedEnum: TestAllTypesProto2_NestedEnum[];
  /** Map */
  mapInt32Int32: Map<number, number>;
  mapInt64Int64: Map<number, number>;
  mapUint32Uint32: Map<number, number>;
  mapUint64Uint64: Map<number, number>;
  mapSint32Sint32: Map<number, number>;
  mapSint64Sint64: Map<number, number>;
  mapFixed32Fixed32: Map<number, number>;
  mapFixed64Fixed64: Map<number, number>;
  mapSfixed32Sfixed32: Map<number, number>;
  mapSfixed64Sfixed64: Map<number, number>;
  mapInt32Float: Map<number, number>;
  mapInt32Double: Map<number, number>;
  mapBoolBool: Map<boolean, boolean>;
  mapStringString: Map<string, string>;
  mapStringBytes: Map<string, Uint8Array>;
  mapStringNestedMessage: Map<string, TestAllTypesProto2_NestedMessage>;
  mapStringForeignMessage: Map<string, ForeignMessageProto2>;
  mapStringNestedEnum: Map<string, TestAllTypesProto2_NestedEnum>;
  mapStringForeignEnum: Map<string, ForeignEnumProto2>;
  oneofField?:
    | { $case: "oneofUint32"; oneofUint32: number }
    | { $case: "oneofNestedMessage"; oneofNestedMessage: TestAllTypesProto2_NestedMessage }
    | { $case: "oneofString"; oneofString: string }
    | { $case: "oneofBytes"; oneofBytes: Uint8Array }
    | { $case: "oneofBool"; oneofBool: boolean }
    | { $case: "oneofUint64"; oneofUint64: number }
    | { $case: "oneofFloat"; oneofFloat: number }
    | { $case: "oneofDouble"; oneofDouble: number }
    | { $case: "oneofEnum"; oneofEnum: TestAllTypesProto2_NestedEnum }
    | undefined;
  data:
    | TestAllTypesProto2_Data
    | undefined;
  /** default values */
  defaultInt32: number;
  defaultInt64: number;
  defaultUint32: number;
  defaultUint64: number;
  defaultSint32: number;
  defaultSint64: number;
  defaultFixed32: number;
  defaultFixed64: number;
  defaultSfixed32: number;
  defaultSfixed64: number;
  defaultFloat: number;
  defaultDouble: number;
  defaultBool: boolean;
  defaultString: string;
  defaultBytes: Uint8Array;
  /**
   * Test field-name-to-JSON-name convention.
   * (protobuf says names can be any valid C/C++ identifier.)
   */
  fieldname1: number;
  fieldName2: number;
  FieldName3: number;
  fieldName4: number;
  field0name5: number;
  field0Name6: number;
  fieldName7: number;
  FieldName8: number;
  fieldName9: number;
  FieldName10: number;
  fieldName11: number;
  FIELDName12: number;
  FieldName13: number;
  FieldName14: number;
  fieldName15: number;
  fieldName16: number;
  fieldName17: number;
  FieldName18: number;
}

export enum TestAllTypesProto2_NestedEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
  /** NEG - Intentionally negative. */
  NEG = -1,
}

export function testAllTypesProto2_NestedEnumFromJSON(object: any): TestAllTypesProto2_NestedEnum {
  switch (object) {
    case 0:
    case "FOO":
      return TestAllTypesProto2_NestedEnum.FOO;
    case 1:
    case "BAR":
      return TestAllTypesProto2_NestedEnum.BAR;
    case 2:
    case "BAZ":
      return TestAllTypesProto2_NestedEnum.BAZ;
    case -1:
    case "NEG":
      return TestAllTypesProto2_NestedEnum.NEG;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum TestAllTypesProto2_NestedEnum",
      );
  }
}

export function testAllTypesProto2_NestedEnumToJSON(object: TestAllTypesProto2_NestedEnum): string {
  switch (object) {
    case TestAllTypesProto2_NestedEnum.FOO:
      return "FOO";
    case TestAllTypesProto2_NestedEnum.BAR:
      return "BAR";
    case TestAllTypesProto2_NestedEnum.BAZ:
      return "BAZ";
    case TestAllTypesProto2_NestedEnum.NEG:
      return "NEG";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum TestAllTypesProto2_NestedEnum",
      );
  }
}

export interface TestAllTypesProto2_NestedMessage {
  a: number;
  corecursive: TestAllTypesProto2 | undefined;
}

export interface TestAllTypesProto2_MapInt32Int32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapInt64Int64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapUint32Uint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapUint64Uint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapSint32Sint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapSint64Sint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapFixed32Fixed32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapFixed64Fixed64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapSfixed32Sfixed32Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapSfixed64Sfixed64Entry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapInt32FloatEntry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapInt32DoubleEntry {
  key: number;
  value: number;
}

export interface TestAllTypesProto2_MapBoolBoolEntry {
  key: boolean;
  value: boolean;
}

export interface TestAllTypesProto2_MapStringStringEntry {
  key: string;
  value: string;
}

export interface TestAllTypesProto2_MapStringBytesEntry {
  key: string;
  value: Uint8Array;
}

export interface TestAllTypesProto2_MapStringNestedMessageEntry {
  key: string;
  value: TestAllTypesProto2_NestedMessage | undefined;
}

export interface TestAllTypesProto2_MapStringForeignMessageEntry {
  key: string;
  value: ForeignMessageProto2 | undefined;
}

export interface TestAllTypesProto2_MapStringNestedEnumEntry {
  key: string;
  value: TestAllTypesProto2_NestedEnum;
}

export interface TestAllTypesProto2_MapStringForeignEnumEntry {
  key: string;
  value: ForeignEnumProto2;
}

/** groups */
export interface TestAllTypesProto2_Data {
  groupInt32: number;
  groupUint32: number;
}

/** message_set test case. */
export interface TestAllTypesProto2_MessageSetCorrect {
}

export interface TestAllTypesProto2_MessageSetCorrectExtension1 {
  str: string;
}

export interface TestAllTypesProto2_MessageSetCorrectExtension2 {
  i: number;
}

export interface ForeignMessageProto2 {
  c: number;
}

export interface UnknownToTestAllTypes {
  optionalInt32: number;
  optionalString: string;
  nestedMessage: ForeignMessageProto2 | undefined;
  optionalgroup: UnknownToTestAllTypes_OptionalGroup | undefined;
  optionalBool: boolean;
  repeatedInt32: number[];
}

export interface UnknownToTestAllTypes_OptionalGroup {
  a: number;
}

export interface NullHypothesisProto2 {
}

export interface EnumOnlyProto2 {
}

export enum EnumOnlyProto2_Bool {
  kFalse = 0,
  kTrue = 1,
}

export function enumOnlyProto2_BoolFromJSON(object: any): EnumOnlyProto2_Bool {
  switch (object) {
    case 0:
    case "kFalse":
      return EnumOnlyProto2_Bool.kFalse;
    case 1:
    case "kTrue":
      return EnumOnlyProto2_Bool.kTrue;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EnumOnlyProto2_Bool");
  }
}

export function enumOnlyProto2_BoolToJSON(object: EnumOnlyProto2_Bool): string {
  switch (object) {
    case EnumOnlyProto2_Bool.kFalse:
      return "kFalse";
    case EnumOnlyProto2_Bool.kTrue:
      return "kTrue";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EnumOnlyProto2_Bool");
  }
}

export interface OneStringProto2 {
  data: string;
}

export interface ProtoWithKeywords {
  inline: number;
  concept: string;
  requires: string[];
}

export interface TestAllRequiredTypesProto2 {
  /** Singular */
  requiredInt32: number;
  requiredInt64: number;
  requiredUint32: number;
  requiredUint64: number;
  requiredSint32: number;
  requiredSint64: number;
  requiredFixed32: number;
  requiredFixed64: number;
  requiredSfixed32: number;
  requiredSfixed64: number;
  requiredFloat: number;
  requiredDouble: number;
  requiredBool: boolean;
  requiredString: string;
  requiredBytes: Uint8Array;
  requiredNestedMessage: TestAllRequiredTypesProto2_NestedMessage | undefined;
  requiredForeignMessage: ForeignMessageProto2 | undefined;
  requiredNestedEnum: TestAllRequiredTypesProto2_NestedEnum;
  requiredForeignEnum: ForeignEnumProto2;
  requiredStringPiece: string;
  requiredCord: string;
  recursiveMessage: TestAllRequiredTypesProto2 | undefined;
  optionalRecursiveMessage: TestAllRequiredTypesProto2 | undefined;
  data:
    | TestAllRequiredTypesProto2_Data
    | undefined;
  /** default values */
  defaultInt32: number;
  defaultInt64: number;
  defaultUint32: number;
  defaultUint64: number;
  defaultSint32: number;
  defaultSint64: number;
  defaultFixed32: number;
  defaultFixed64: number;
  defaultSfixed32: number;
  defaultSfixed64: number;
  defaultFloat: number;
  defaultDouble: number;
  defaultBool: boolean;
  defaultString: string;
  defaultBytes: Uint8Array;
}

export enum TestAllRequiredTypesProto2_NestedEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
  /** NEG - Intentionally negative. */
  NEG = -1,
}

export function testAllRequiredTypesProto2_NestedEnumFromJSON(object: any): TestAllRequiredTypesProto2_NestedEnum {
  switch (object) {
    case 0:
    case "FOO":
      return TestAllRequiredTypesProto2_NestedEnum.FOO;
    case 1:
    case "BAR":
      return TestAllRequiredTypesProto2_NestedEnum.BAR;
    case 2:
    case "BAZ":
      return TestAllRequiredTypesProto2_NestedEnum.BAZ;
    case -1:
    case "NEG":
      return TestAllRequiredTypesProto2_NestedEnum.NEG;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum TestAllRequiredTypesProto2_NestedEnum",
      );
  }
}

export function testAllRequiredTypesProto2_NestedEnumToJSON(object: TestAllRequiredTypesProto2_NestedEnum): string {
  switch (object) {
    case TestAllRequiredTypesProto2_NestedEnum.FOO:
      return "FOO";
    case TestAllRequiredTypesProto2_NestedEnum.BAR:
      return "BAR";
    case TestAllRequiredTypesProto2_NestedEnum.BAZ:
      return "BAZ";
    case TestAllRequiredTypesProto2_NestedEnum.NEG:
      return "NEG";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum TestAllRequiredTypesProto2_NestedEnum",
      );
  }
}

export interface TestAllRequiredTypesProto2_NestedMessage {
  a: number;
  corecursive: TestAllRequiredTypesProto2 | undefined;
  optionalCorecursive: TestAllRequiredTypesProto2 | undefined;
}

/** groups */
export interface TestAllRequiredTypesProto2_Data {
  groupInt32: number;
  groupUint32: number;
}

/** message_set test case. */
export interface TestAllRequiredTypesProto2_MessageSetCorrect {
}

export interface TestAllRequiredTypesProto2_MessageSetCorrectExtension1 {
  str: string;
}

export interface TestAllRequiredTypesProto2_MessageSetCorrectExtension2 {
  i: number;
}

function createBaseTestAllTypesProto2(): TestAllTypesProto2 {
  return {
    optionalInt32: 0,
    optionalInt64: 0,
    optionalUint32: 0,
    optionalUint64: 0,
    optionalSint32: 0,
    optionalSint64: 0,
    optionalFixed32: 0,
    optionalFixed64: 0,
    optionalSfixed32: 0,
    optionalSfixed64: 0,
    optionalFloat: 0,
    optionalDouble: 0,
    optionalBool: false,
    optionalString: "",
    optionalBytes: new Uint8Array(0),
    optionalNestedMessage: undefined,
    optionalForeignMessage: undefined,
    optionalNestedEnum: 0,
    optionalForeignEnum: 0,
    optionalStringPiece: "",
    optionalCord: "",
    recursiveMessage: undefined,
    repeatedInt32: [],
    repeatedInt64: [],
    repeatedUint32: [],
    repeatedUint64: [],
    repeatedSint32: [],
    repeatedSint64: [],
    repeatedFixed32: [],
    repeatedFixed64: [],
    repeatedSfixed32: [],
    repeatedSfixed64: [],
    repeatedFloat: [],
    repeatedDouble: [],
    repeatedBool: [],
    repeatedString: [],
    repeatedBytes: [],
    repeatedNestedMessage: [],
    repeatedForeignMessage: [],
    repeatedNestedEnum: [],
    repeatedForeignEnum: [],
    repeatedStringPiece: [],
    repeatedCord: [],
    packedInt32: [],
    packedInt64: [],
    packedUint32: [],
    packedUint64: [],
    packedSint32: [],
    packedSint64: [],
    packedFixed32: [],
    packedFixed64: [],
    packedSfixed32: [],
    packedSfixed64: [],
    packedFloat: [],
    packedDouble: [],
    packedBool: [],
    packedNestedEnum: [],
    unpackedInt32: [],
    unpackedInt64: [],
    unpackedUint32: [],
    unpackedUint64: [],
    unpackedSint32: [],
    unpackedSint64: [],
    unpackedFixed32: [],
    unpackedFixed64: [],
    unpackedSfixed32: [],
    unpackedSfixed64: [],
    unpackedFloat: [],
    unpackedDouble: [],
    unpackedBool: [],
    unpackedNestedEnum: [],
    mapInt32Int32: new Map(),
    mapInt64Int64: new Map(),
    mapUint32Uint32: new Map(),
    mapUint64Uint64: new Map(),
    mapSint32Sint32: new Map(),
    mapSint64Sint64: new Map(),
    mapFixed32Fixed32: new Map(),
    mapFixed64Fixed64: new Map(),
    mapSfixed32Sfixed32: new Map(),
    mapSfixed64Sfixed64: new Map(),
    mapInt32Float: new Map(),
    mapInt32Double: new Map(),
    mapBoolBool: new Map(),
    mapStringString: new Map(),
    mapStringBytes: new Map(),
    mapStringNestedMessage: new Map(),
    mapStringForeignMessage: new Map(),
    mapStringNestedEnum: new Map(),
    mapStringForeignEnum: new Map(),
    oneofField: undefined,
    data: undefined,
    defaultInt32: 0,
    defaultInt64: 0,
    defaultUint32: 0,
    defaultUint64: 0,
    defaultSint32: 0,
    defaultSint64: 0,
    defaultFixed32: 0,
    defaultFixed64: 0,
    defaultSfixed32: 0,
    defaultSfixed64: 0,
    defaultFloat: 0,
    defaultDouble: 0,
    defaultBool: false,
    defaultString: "",
    defaultBytes: new Uint8Array(0),
    fieldname1: 0,
    fieldName2: 0,
    FieldName3: 0,
    fieldName4: 0,
    field0name5: 0,
    field0Name6: 0,
    fieldName7: 0,
    FieldName8: 0,
    fieldName9: 0,
    FieldName10: 0,
    fieldName11: 0,
    FIELDName12: 0,
    FieldName13: 0,
    FieldName14: 0,
    fieldName15: 0,
    fieldName16: 0,
    fieldName17: 0,
    FieldName18: 0,
  };
}

export const TestAllTypesProto2 = {
  encode(message: TestAllTypesProto2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.optionalInt32 !== 0) {
      writer.uint32(8).int32(message.optionalInt32);
    }
    if (message.optionalInt64 !== 0) {
      writer.uint32(16).int64(message.optionalInt64);
    }
    if (message.optionalUint32 !== 0) {
      writer.uint32(24).uint32(message.optionalUint32);
    }
    if (message.optionalUint64 !== 0) {
      writer.uint32(32).uint64(message.optionalUint64);
    }
    if (message.optionalSint32 !== 0) {
      writer.uint32(40).sint32(message.optionalSint32);
    }
    if (message.optionalSint64 !== 0) {
      writer.uint32(48).sint64(message.optionalSint64);
    }
    if (message.optionalFixed32 !== 0) {
      writer.uint32(61).fixed32(message.optionalFixed32);
    }
    if (message.optionalFixed64 !== 0) {
      writer.uint32(65).fixed64(message.optionalFixed64);
    }
    if (message.optionalSfixed32 !== 0) {
      writer.uint32(77).sfixed32(message.optionalSfixed32);
    }
    if (message.optionalSfixed64 !== 0) {
      writer.uint32(81).sfixed64(message.optionalSfixed64);
    }
    if (message.optionalFloat !== 0) {
      writer.uint32(93).float(message.optionalFloat);
    }
    if (message.optionalDouble !== 0) {
      writer.uint32(97).double(message.optionalDouble);
    }
    if (message.optionalBool === true) {
      writer.uint32(104).bool(message.optionalBool);
    }
    if (message.optionalString !== "") {
      writer.uint32(114).string(message.optionalString);
    }
    if (message.optionalBytes.length !== 0) {
      writer.uint32(122).bytes(message.optionalBytes);
    }
    if (message.optionalNestedMessage !== undefined) {
      TestAllTypesProto2_NestedMessage.encode(message.optionalNestedMessage, writer.uint32(146).fork()).ldelim();
    }
    if (message.optionalForeignMessage !== undefined) {
      ForeignMessageProto2.encode(message.optionalForeignMessage, writer.uint32(154).fork()).ldelim();
    }
    if (message.optionalNestedEnum !== 0) {
      writer.uint32(168).int32(message.optionalNestedEnum);
    }
    if (message.optionalForeignEnum !== 0) {
      writer.uint32(176).int32(message.optionalForeignEnum);
    }
    if (message.optionalStringPiece !== "") {
      writer.uint32(194).string(message.optionalStringPiece);
    }
    if (message.optionalCord !== "") {
      writer.uint32(202).string(message.optionalCord);
    }
    if (message.recursiveMessage !== undefined) {
      TestAllTypesProto2.encode(message.recursiveMessage, writer.uint32(218).fork()).ldelim();
    }
    writer.uint32(250).fork();
    for (const v of message.repeatedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(258).fork();
    for (const v of message.repeatedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(266).fork();
    for (const v of message.repeatedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(274).fork();
    for (const v of message.repeatedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(282).fork();
    for (const v of message.repeatedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(290).fork();
    for (const v of message.repeatedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(298).fork();
    for (const v of message.repeatedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(306).fork();
    for (const v of message.repeatedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(314).fork();
    for (const v of message.repeatedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(322).fork();
    for (const v of message.repeatedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(330).fork();
    for (const v of message.repeatedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(338).fork();
    for (const v of message.repeatedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(346).fork();
    for (const v of message.repeatedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.repeatedString) {
      writer.uint32(354).string(v!);
    }
    for (const v of message.repeatedBytes) {
      writer.uint32(362).bytes(v!);
    }
    for (const v of message.repeatedNestedMessage) {
      TestAllTypesProto2_NestedMessage.encode(v!, writer.uint32(386).fork()).ldelim();
    }
    for (const v of message.repeatedForeignMessage) {
      ForeignMessageProto2.encode(v!, writer.uint32(394).fork()).ldelim();
    }
    writer.uint32(410).fork();
    for (const v of message.repeatedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(418).fork();
    for (const v of message.repeatedForeignEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.repeatedStringPiece) {
      writer.uint32(434).string(v!);
    }
    for (const v of message.repeatedCord) {
      writer.uint32(442).string(v!);
    }
    writer.uint32(602).fork();
    for (const v of message.packedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(610).fork();
    for (const v of message.packedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(618).fork();
    for (const v of message.packedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(626).fork();
    for (const v of message.packedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(634).fork();
    for (const v of message.packedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(642).fork();
    for (const v of message.packedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(650).fork();
    for (const v of message.packedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(658).fork();
    for (const v of message.packedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(666).fork();
    for (const v of message.packedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(674).fork();
    for (const v of message.packedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(682).fork();
    for (const v of message.packedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(690).fork();
    for (const v of message.packedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(698).fork();
    for (const v of message.packedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(706).fork();
    for (const v of message.packedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(714).fork();
    for (const v of message.unpackedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(722).fork();
    for (const v of message.unpackedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(730).fork();
    for (const v of message.unpackedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(738).fork();
    for (const v of message.unpackedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(746).fork();
    for (const v of message.unpackedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(754).fork();
    for (const v of message.unpackedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(762).fork();
    for (const v of message.unpackedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(770).fork();
    for (const v of message.unpackedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(778).fork();
    for (const v of message.unpackedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(786).fork();
    for (const v of message.unpackedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(794).fork();
    for (const v of message.unpackedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(802).fork();
    for (const v of message.unpackedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(810).fork();
    for (const v of message.unpackedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(818).fork();
    for (const v of message.unpackedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    (message.mapInt32Int32).forEach((value, key) => {
      TestAllTypesProto2_MapInt32Int32Entry.encode({ key: key as any, value }, writer.uint32(450).fork()).ldelim();
    });
    (message.mapInt64Int64).forEach((value, key) => {
      TestAllTypesProto2_MapInt64Int64Entry.encode({ key: key as any, value }, writer.uint32(458).fork()).ldelim();
    });
    (message.mapUint32Uint32).forEach((value, key) => {
      TestAllTypesProto2_MapUint32Uint32Entry.encode({ key: key as any, value }, writer.uint32(466).fork()).ldelim();
    });
    (message.mapUint64Uint64).forEach((value, key) => {
      TestAllTypesProto2_MapUint64Uint64Entry.encode({ key: key as any, value }, writer.uint32(474).fork()).ldelim();
    });
    (message.mapSint32Sint32).forEach((value, key) => {
      TestAllTypesProto2_MapSint32Sint32Entry.encode({ key: key as any, value }, writer.uint32(482).fork()).ldelim();
    });
    (message.mapSint64Sint64).forEach((value, key) => {
      TestAllTypesProto2_MapSint64Sint64Entry.encode({ key: key as any, value }, writer.uint32(490).fork()).ldelim();
    });
    (message.mapFixed32Fixed32).forEach((value, key) => {
      TestAllTypesProto2_MapFixed32Fixed32Entry.encode({ key: key as any, value }, writer.uint32(498).fork()).ldelim();
    });
    (message.mapFixed64Fixed64).forEach((value, key) => {
      TestAllTypesProto2_MapFixed64Fixed64Entry.encode({ key: key as any, value }, writer.uint32(506).fork()).ldelim();
    });
    (message.mapSfixed32Sfixed32).forEach((value, key) => {
      TestAllTypesProto2_MapSfixed32Sfixed32Entry.encode({ key: key as any, value }, writer.uint32(514).fork())
        .ldelim();
    });
    (message.mapSfixed64Sfixed64).forEach((value, key) => {
      TestAllTypesProto2_MapSfixed64Sfixed64Entry.encode({ key: key as any, value }, writer.uint32(522).fork())
        .ldelim();
    });
    (message.mapInt32Float).forEach((value, key) => {
      TestAllTypesProto2_MapInt32FloatEntry.encode({ key: key as any, value }, writer.uint32(530).fork()).ldelim();
    });
    (message.mapInt32Double).forEach((value, key) => {
      TestAllTypesProto2_MapInt32DoubleEntry.encode({ key: key as any, value }, writer.uint32(538).fork()).ldelim();
    });
    (message.mapBoolBool).forEach((value, key) => {
      TestAllTypesProto2_MapBoolBoolEntry.encode({ key: key as any, value }, writer.uint32(546).fork()).ldelim();
    });
    (message.mapStringString).forEach((value, key) => {
      TestAllTypesProto2_MapStringStringEntry.encode({ key: key as any, value }, writer.uint32(554).fork()).ldelim();
    });
    (message.mapStringBytes).forEach((value, key) => {
      TestAllTypesProto2_MapStringBytesEntry.encode({ key: key as any, value }, writer.uint32(562).fork()).ldelim();
    });
    (message.mapStringNestedMessage).forEach((value, key) => {
      TestAllTypesProto2_MapStringNestedMessageEntry.encode({ key: key as any, value }, writer.uint32(570).fork())
        .ldelim();
    });
    (message.mapStringForeignMessage).forEach((value, key) => {
      TestAllTypesProto2_MapStringForeignMessageEntry.encode({ key: key as any, value }, writer.uint32(578).fork())
        .ldelim();
    });
    (message.mapStringNestedEnum).forEach((value, key) => {
      TestAllTypesProto2_MapStringNestedEnumEntry.encode({ key: key as any, value }, writer.uint32(586).fork())
        .ldelim();
    });
    (message.mapStringForeignEnum).forEach((value, key) => {
      TestAllTypesProto2_MapStringForeignEnumEntry.encode({ key: key as any, value }, writer.uint32(594).fork())
        .ldelim();
    });
    switch (message.oneofField?.$case) {
      case "oneofUint32":
        writer.uint32(888).uint32(message.oneofField.oneofUint32);
        break;
      case "oneofNestedMessage":
        TestAllTypesProto2_NestedMessage.encode(message.oneofField.oneofNestedMessage, writer.uint32(898).fork())
          .ldelim();
        break;
      case "oneofString":
        writer.uint32(906).string(message.oneofField.oneofString);
        break;
      case "oneofBytes":
        writer.uint32(914).bytes(message.oneofField.oneofBytes);
        break;
      case "oneofBool":
        writer.uint32(920).bool(message.oneofField.oneofBool);
        break;
      case "oneofUint64":
        writer.uint32(928).uint64(message.oneofField.oneofUint64);
        break;
      case "oneofFloat":
        writer.uint32(941).float(message.oneofField.oneofFloat);
        break;
      case "oneofDouble":
        writer.uint32(945).double(message.oneofField.oneofDouble);
        break;
      case "oneofEnum":
        writer.uint32(952).int32(message.oneofField.oneofEnum);
        break;
    }
    if (message.data !== undefined) {
      TestAllTypesProto2_Data.encode(message.data, writer.uint32(1611)).uint32(1612);
    }
    if (message.defaultInt32 !== 0) {
      writer.uint32(1928).int32(message.defaultInt32);
    }
    if (message.defaultInt64 !== 0) {
      writer.uint32(1936).int64(message.defaultInt64);
    }
    if (message.defaultUint32 !== 0) {
      writer.uint32(1944).uint32(message.defaultUint32);
    }
    if (message.defaultUint64 !== 0) {
      writer.uint32(1952).uint64(message.defaultUint64);
    }
    if (message.defaultSint32 !== 0) {
      writer.uint32(1960).sint32(message.defaultSint32);
    }
    if (message.defaultSint64 !== 0) {
      writer.uint32(1968).sint64(message.defaultSint64);
    }
    if (message.defaultFixed32 !== 0) {
      writer.uint32(1981).fixed32(message.defaultFixed32);
    }
    if (message.defaultFixed64 !== 0) {
      writer.uint32(1985).fixed64(message.defaultFixed64);
    }
    if (message.defaultSfixed32 !== 0) {
      writer.uint32(1997).sfixed32(message.defaultSfixed32);
    }
    if (message.defaultSfixed64 !== 0) {
      writer.uint32(2001).sfixed64(message.defaultSfixed64);
    }
    if (message.defaultFloat !== 0) {
      writer.uint32(2013).float(message.defaultFloat);
    }
    if (message.defaultDouble !== 0) {
      writer.uint32(2017).double(message.defaultDouble);
    }
    if (message.defaultBool === true) {
      writer.uint32(2024).bool(message.defaultBool);
    }
    if (message.defaultString !== "") {
      writer.uint32(2034).string(message.defaultString);
    }
    if (message.defaultBytes.length !== 0) {
      writer.uint32(2042).bytes(message.defaultBytes);
    }
    if (message.fieldname1 !== 0) {
      writer.uint32(3208).int32(message.fieldname1);
    }
    if (message.fieldName2 !== 0) {
      writer.uint32(3216).int32(message.fieldName2);
    }
    if (message.FieldName3 !== 0) {
      writer.uint32(3224).int32(message.FieldName3);
    }
    if (message.fieldName4 !== 0) {
      writer.uint32(3232).int32(message.fieldName4);
    }
    if (message.field0name5 !== 0) {
      writer.uint32(3240).int32(message.field0name5);
    }
    if (message.field0Name6 !== 0) {
      writer.uint32(3248).int32(message.field0Name6);
    }
    if (message.fieldName7 !== 0) {
      writer.uint32(3256).int32(message.fieldName7);
    }
    if (message.FieldName8 !== 0) {
      writer.uint32(3264).int32(message.FieldName8);
    }
    if (message.fieldName9 !== 0) {
      writer.uint32(3272).int32(message.fieldName9);
    }
    if (message.FieldName10 !== 0) {
      writer.uint32(3280).int32(message.FieldName10);
    }
    if (message.fieldName11 !== 0) {
      writer.uint32(3288).int32(message.fieldName11);
    }
    if (message.FIELDName12 !== 0) {
      writer.uint32(3296).int32(message.FIELDName12);
    }
    if (message.FieldName13 !== 0) {
      writer.uint32(3304).int32(message.FieldName13);
    }
    if (message.FieldName14 !== 0) {
      writer.uint32(3312).int32(message.FieldName14);
    }
    if (message.fieldName15 !== 0) {
      writer.uint32(3320).int32(message.fieldName15);
    }
    if (message.fieldName16 !== 0) {
      writer.uint32(3328).int32(message.fieldName16);
    }
    if (message.fieldName17 !== 0) {
      writer.uint32(3336).int32(message.fieldName17);
    }
    if (message.FieldName18 !== 0) {
      writer.uint32(3344).int32(message.FieldName18);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.optionalInt32 = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.optionalInt64 = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.optionalUint32 = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.optionalUint64 = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.optionalSint32 = reader.sint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.optionalSint64 = longToNumber(reader.sint64() as Long);
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.optionalFixed32 = reader.fixed32();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.optionalFixed64 = longToNumber(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.optionalSfixed32 = reader.sfixed32();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.optionalSfixed64 = longToNumber(reader.sfixed64() as Long);
          continue;
        case 11:
          if (tag !== 93) {
            break;
          }

          message.optionalFloat = reader.float();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.optionalDouble = reader.double();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.optionalBool = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.optionalString = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.optionalBytes = reader.bytes();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.optionalNestedMessage = TestAllTypesProto2_NestedMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.optionalForeignMessage = ForeignMessageProto2.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.optionalNestedEnum = reader.int32() as any;
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.optionalForeignEnum = reader.int32() as any;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.optionalStringPiece = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.optionalCord = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.recursiveMessage = TestAllTypesProto2.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag === 248) {
            message.repeatedInt32.push(reader.int32());

            continue;
          }

          if (tag === 250) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt32.push(reader.int32());
            }

            continue;
          }

          break;
        case 32:
          if (tag === 256) {
            message.repeatedInt64.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 258) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt64.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 33:
          if (tag === 264) {
            message.repeatedUint32.push(reader.uint32());

            continue;
          }

          if (tag === 266) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedUint32.push(reader.uint32());
            }

            continue;
          }

          break;
        case 34:
          if (tag === 272) {
            message.repeatedUint64.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 274) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedUint64.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 35:
          if (tag === 280) {
            message.repeatedSint32.push(reader.sint32());

            continue;
          }

          if (tag === 282) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSint32.push(reader.sint32());
            }

            continue;
          }

          break;
        case 36:
          if (tag === 288) {
            message.repeatedSint64.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 290) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSint64.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 37:
          if (tag === 301) {
            message.repeatedFixed32.push(reader.fixed32());

            continue;
          }

          if (tag === 298) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFixed32.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 38:
          if (tag === 305) {
            message.repeatedFixed64.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 306) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFixed64.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 39:
          if (tag === 317) {
            message.repeatedSfixed32.push(reader.sfixed32());

            continue;
          }

          if (tag === 314) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSfixed32.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 40:
          if (tag === 321) {
            message.repeatedSfixed64.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 322) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSfixed64.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 41:
          if (tag === 333) {
            message.repeatedFloat.push(reader.float());

            continue;
          }

          if (tag === 330) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 42:
          if (tag === 337) {
            message.repeatedDouble.push(reader.double());

            continue;
          }

          if (tag === 338) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedDouble.push(reader.double());
            }

            continue;
          }

          break;
        case 43:
          if (tag === 344) {
            message.repeatedBool.push(reader.bool());

            continue;
          }

          if (tag === 346) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedBool.push(reader.bool());
            }

            continue;
          }

          break;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.repeatedString.push(reader.string());
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.repeatedBytes.push(reader.bytes());
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.repeatedNestedMessage.push(TestAllTypesProto2_NestedMessage.decode(reader, reader.uint32()));
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.repeatedForeignMessage.push(ForeignMessageProto2.decode(reader, reader.uint32()));
          continue;
        case 51:
          if (tag === 408) {
            message.repeatedNestedEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 410) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedNestedEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 52:
          if (tag === 416) {
            message.repeatedForeignEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 418) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedForeignEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.repeatedStringPiece.push(reader.string());
          continue;
        case 55:
          if (tag !== 442) {
            break;
          }

          message.repeatedCord.push(reader.string());
          continue;
        case 75:
          if (tag === 600) {
            message.packedInt32.push(reader.int32());

            continue;
          }

          if (tag === 602) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedInt32.push(reader.int32());
            }

            continue;
          }

          break;
        case 76:
          if (tag === 608) {
            message.packedInt64.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 610) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedInt64.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 77:
          if (tag === 616) {
            message.packedUint32.push(reader.uint32());

            continue;
          }

          if (tag === 618) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedUint32.push(reader.uint32());
            }

            continue;
          }

          break;
        case 78:
          if (tag === 624) {
            message.packedUint64.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 626) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedUint64.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 79:
          if (tag === 632) {
            message.packedSint32.push(reader.sint32());

            continue;
          }

          if (tag === 634) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSint32.push(reader.sint32());
            }

            continue;
          }

          break;
        case 80:
          if (tag === 640) {
            message.packedSint64.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 642) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSint64.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 81:
          if (tag === 653) {
            message.packedFixed32.push(reader.fixed32());

            continue;
          }

          if (tag === 650) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedFixed32.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 82:
          if (tag === 657) {
            message.packedFixed64.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 658) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedFixed64.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 83:
          if (tag === 669) {
            message.packedSfixed32.push(reader.sfixed32());

            continue;
          }

          if (tag === 666) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSfixed32.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 84:
          if (tag === 673) {
            message.packedSfixed64.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 674) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedSfixed64.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 85:
          if (tag === 685) {
            message.packedFloat.push(reader.float());

            continue;
          }

          if (tag === 682) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 86:
          if (tag === 689) {
            message.packedDouble.push(reader.double());

            continue;
          }

          if (tag === 690) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedDouble.push(reader.double());
            }

            continue;
          }

          break;
        case 87:
          if (tag === 696) {
            message.packedBool.push(reader.bool());

            continue;
          }

          if (tag === 698) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedBool.push(reader.bool());
            }

            continue;
          }

          break;
        case 88:
          if (tag === 704) {
            message.packedNestedEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 706) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packedNestedEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 89:
          if (tag === 712) {
            message.unpackedInt32.push(reader.int32());

            continue;
          }

          if (tag === 714) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedInt32.push(reader.int32());
            }

            continue;
          }

          break;
        case 90:
          if (tag === 720) {
            message.unpackedInt64.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 722) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedInt64.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 91:
          if (tag === 728) {
            message.unpackedUint32.push(reader.uint32());

            continue;
          }

          if (tag === 730) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedUint32.push(reader.uint32());
            }

            continue;
          }

          break;
        case 92:
          if (tag === 736) {
            message.unpackedUint64.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 738) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedUint64.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 93:
          if (tag === 744) {
            message.unpackedSint32.push(reader.sint32());

            continue;
          }

          if (tag === 746) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSint32.push(reader.sint32());
            }

            continue;
          }

          break;
        case 94:
          if (tag === 752) {
            message.unpackedSint64.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 754) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSint64.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 95:
          if (tag === 765) {
            message.unpackedFixed32.push(reader.fixed32());

            continue;
          }

          if (tag === 762) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedFixed32.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 96:
          if (tag === 769) {
            message.unpackedFixed64.push(longToNumber(reader.fixed64() as Long));

            continue;
          }

          if (tag === 770) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedFixed64.push(longToNumber(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 97:
          if (tag === 781) {
            message.unpackedSfixed32.push(reader.sfixed32());

            continue;
          }

          if (tag === 778) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSfixed32.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 98:
          if (tag === 785) {
            message.unpackedSfixed64.push(longToNumber(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 786) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedSfixed64.push(longToNumber(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 99:
          if (tag === 797) {
            message.unpackedFloat.push(reader.float());

            continue;
          }

          if (tag === 794) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 100:
          if (tag === 801) {
            message.unpackedDouble.push(reader.double());

            continue;
          }

          if (tag === 802) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedDouble.push(reader.double());
            }

            continue;
          }

          break;
        case 101:
          if (tag === 808) {
            message.unpackedBool.push(reader.bool());

            continue;
          }

          if (tag === 810) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedBool.push(reader.bool());
            }

            continue;
          }

          break;
        case 102:
          if (tag === 816) {
            message.unpackedNestedEnum.push(reader.int32() as any);

            continue;
          }

          if (tag === 818) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedNestedEnum.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 56:
          if (tag !== 450) {
            break;
          }

          const entry56 = TestAllTypesProto2_MapInt32Int32Entry.decode(reader, reader.uint32());
          if (entry56.value !== undefined) {
            message.mapInt32Int32.set(entry56.key, entry56.value);
          }
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          const entry57 = TestAllTypesProto2_MapInt64Int64Entry.decode(reader, reader.uint32());
          if (entry57.value !== undefined) {
            message.mapInt64Int64.set(entry57.key, entry57.value);
          }
          continue;
        case 58:
          if (tag !== 466) {
            break;
          }

          const entry58 = TestAllTypesProto2_MapUint32Uint32Entry.decode(reader, reader.uint32());
          if (entry58.value !== undefined) {
            message.mapUint32Uint32.set(entry58.key, entry58.value);
          }
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          const entry59 = TestAllTypesProto2_MapUint64Uint64Entry.decode(reader, reader.uint32());
          if (entry59.value !== undefined) {
            message.mapUint64Uint64.set(entry59.key, entry59.value);
          }
          continue;
        case 60:
          if (tag !== 482) {
            break;
          }

          const entry60 = TestAllTypesProto2_MapSint32Sint32Entry.decode(reader, reader.uint32());
          if (entry60.value !== undefined) {
            message.mapSint32Sint32.set(entry60.key, entry60.value);
          }
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          const entry61 = TestAllTypesProto2_MapSint64Sint64Entry.decode(reader, reader.uint32());
          if (entry61.value !== undefined) {
            message.mapSint64Sint64.set(entry61.key, entry61.value);
          }
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          const entry62 = TestAllTypesProto2_MapFixed32Fixed32Entry.decode(reader, reader.uint32());
          if (entry62.value !== undefined) {
            message.mapFixed32Fixed32.set(entry62.key, entry62.value);
          }
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          const entry63 = TestAllTypesProto2_MapFixed64Fixed64Entry.decode(reader, reader.uint32());
          if (entry63.value !== undefined) {
            message.mapFixed64Fixed64.set(entry63.key, entry63.value);
          }
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          const entry64 = TestAllTypesProto2_MapSfixed32Sfixed32Entry.decode(reader, reader.uint32());
          if (entry64.value !== undefined) {
            message.mapSfixed32Sfixed32.set(entry64.key, entry64.value);
          }
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          const entry65 = TestAllTypesProto2_MapSfixed64Sfixed64Entry.decode(reader, reader.uint32());
          if (entry65.value !== undefined) {
            message.mapSfixed64Sfixed64.set(entry65.key, entry65.value);
          }
          continue;
        case 66:
          if (tag !== 530) {
            break;
          }

          const entry66 = TestAllTypesProto2_MapInt32FloatEntry.decode(reader, reader.uint32());
          if (entry66.value !== undefined) {
            message.mapInt32Float.set(entry66.key, entry66.value);
          }
          continue;
        case 67:
          if (tag !== 538) {
            break;
          }

          const entry67 = TestAllTypesProto2_MapInt32DoubleEntry.decode(reader, reader.uint32());
          if (entry67.value !== undefined) {
            message.mapInt32Double.set(entry67.key, entry67.value);
          }
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          const entry68 = TestAllTypesProto2_MapBoolBoolEntry.decode(reader, reader.uint32());
          if (entry68.value !== undefined) {
            message.mapBoolBool.set(entry68.key, entry68.value);
          }
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          const entry69 = TestAllTypesProto2_MapStringStringEntry.decode(reader, reader.uint32());
          if (entry69.value !== undefined) {
            message.mapStringString.set(entry69.key, entry69.value);
          }
          continue;
        case 70:
          if (tag !== 562) {
            break;
          }

          const entry70 = TestAllTypesProto2_MapStringBytesEntry.decode(reader, reader.uint32());
          if (entry70.value !== undefined) {
            message.mapStringBytes.set(entry70.key, entry70.value);
          }
          continue;
        case 71:
          if (tag !== 570) {
            break;
          }

          const entry71 = TestAllTypesProto2_MapStringNestedMessageEntry.decode(reader, reader.uint32());
          if (entry71.value !== undefined) {
            message.mapStringNestedMessage.set(entry71.key, entry71.value);
          }
          continue;
        case 72:
          if (tag !== 578) {
            break;
          }

          const entry72 = TestAllTypesProto2_MapStringForeignMessageEntry.decode(reader, reader.uint32());
          if (entry72.value !== undefined) {
            message.mapStringForeignMessage.set(entry72.key, entry72.value);
          }
          continue;
        case 73:
          if (tag !== 586) {
            break;
          }

          const entry73 = TestAllTypesProto2_MapStringNestedEnumEntry.decode(reader, reader.uint32());
          if (entry73.value !== undefined) {
            message.mapStringNestedEnum.set(entry73.key, entry73.value);
          }
          continue;
        case 74:
          if (tag !== 594) {
            break;
          }

          const entry74 = TestAllTypesProto2_MapStringForeignEnumEntry.decode(reader, reader.uint32());
          if (entry74.value !== undefined) {
            message.mapStringForeignEnum.set(entry74.key, entry74.value);
          }
          continue;
        case 111:
          if (tag !== 888) {
            break;
          }

          message.oneofField = { $case: "oneofUint32", oneofUint32: reader.uint32() };
          continue;
        case 112:
          if (tag !== 898) {
            break;
          }

          message.oneofField = {
            $case: "oneofNestedMessage",
            oneofNestedMessage: TestAllTypesProto2_NestedMessage.decode(reader, reader.uint32()),
          };
          continue;
        case 113:
          if (tag !== 906) {
            break;
          }

          message.oneofField = { $case: "oneofString", oneofString: reader.string() };
          continue;
        case 114:
          if (tag !== 914) {
            break;
          }

          message.oneofField = { $case: "oneofBytes", oneofBytes: reader.bytes() };
          continue;
        case 115:
          if (tag !== 920) {
            break;
          }

          message.oneofField = { $case: "oneofBool", oneofBool: reader.bool() };
          continue;
        case 116:
          if (tag !== 928) {
            break;
          }

          message.oneofField = { $case: "oneofUint64", oneofUint64: longToNumber(reader.uint64() as Long) };
          continue;
        case 117:
          if (tag !== 941) {
            break;
          }

          message.oneofField = { $case: "oneofFloat", oneofFloat: reader.float() };
          continue;
        case 118:
          if (tag !== 945) {
            break;
          }

          message.oneofField = { $case: "oneofDouble", oneofDouble: reader.double() };
          continue;
        case 119:
          if (tag !== 952) {
            break;
          }

          message.oneofField = { $case: "oneofEnum", oneofEnum: reader.int32() as any };
          continue;
        case 201:
          if (tag !== 1611) {
            break;
          }

          message.data = TestAllTypesProto2_Data.decode(reader);
          continue;
        case 241:
          if (tag !== 1928) {
            break;
          }

          message.defaultInt32 = reader.int32();
          continue;
        case 242:
          if (tag !== 1936) {
            break;
          }

          message.defaultInt64 = longToNumber(reader.int64() as Long);
          continue;
        case 243:
          if (tag !== 1944) {
            break;
          }

          message.defaultUint32 = reader.uint32();
          continue;
        case 244:
          if (tag !== 1952) {
            break;
          }

          message.defaultUint64 = longToNumber(reader.uint64() as Long);
          continue;
        case 245:
          if (tag !== 1960) {
            break;
          }

          message.defaultSint32 = reader.sint32();
          continue;
        case 246:
          if (tag !== 1968) {
            break;
          }

          message.defaultSint64 = longToNumber(reader.sint64() as Long);
          continue;
        case 247:
          if (tag !== 1981) {
            break;
          }

          message.defaultFixed32 = reader.fixed32();
          continue;
        case 248:
          if (tag !== 1985) {
            break;
          }

          message.defaultFixed64 = longToNumber(reader.fixed64() as Long);
          continue;
        case 249:
          if (tag !== 1997) {
            break;
          }

          message.defaultSfixed32 = reader.sfixed32();
          continue;
        case 250:
          if (tag !== 2001) {
            break;
          }

          message.defaultSfixed64 = longToNumber(reader.sfixed64() as Long);
          continue;
        case 251:
          if (tag !== 2013) {
            break;
          }

          message.defaultFloat = reader.float();
          continue;
        case 252:
          if (tag !== 2017) {
            break;
          }

          message.defaultDouble = reader.double();
          continue;
        case 253:
          if (tag !== 2024) {
            break;
          }

          message.defaultBool = reader.bool();
          continue;
        case 254:
          if (tag !== 2034) {
            break;
          }

          message.defaultString = reader.string();
          continue;
        case 255:
          if (tag !== 2042) {
            break;
          }

          message.defaultBytes = reader.bytes();
          continue;
        case 401:
          if (tag !== 3208) {
            break;
          }

          message.fieldname1 = reader.int32();
          continue;
        case 402:
          if (tag !== 3216) {
            break;
          }

          message.fieldName2 = reader.int32();
          continue;
        case 403:
          if (tag !== 3224) {
            break;
          }

          message.FieldName3 = reader.int32();
          continue;
        case 404:
          if (tag !== 3232) {
            break;
          }

          message.fieldName4 = reader.int32();
          continue;
        case 405:
          if (tag !== 3240) {
            break;
          }

          message.field0name5 = reader.int32();
          continue;
        case 406:
          if (tag !== 3248) {
            break;
          }

          message.field0Name6 = reader.int32();
          continue;
        case 407:
          if (tag !== 3256) {
            break;
          }

          message.fieldName7 = reader.int32();
          continue;
        case 408:
          if (tag !== 3264) {
            break;
          }

          message.FieldName8 = reader.int32();
          continue;
        case 409:
          if (tag !== 3272) {
            break;
          }

          message.fieldName9 = reader.int32();
          continue;
        case 410:
          if (tag !== 3280) {
            break;
          }

          message.FieldName10 = reader.int32();
          continue;
        case 411:
          if (tag !== 3288) {
            break;
          }

          message.fieldName11 = reader.int32();
          continue;
        case 412:
          if (tag !== 3296) {
            break;
          }

          message.FIELDName12 = reader.int32();
          continue;
        case 413:
          if (tag !== 3304) {
            break;
          }

          message.FieldName13 = reader.int32();
          continue;
        case 414:
          if (tag !== 3312) {
            break;
          }

          message.FieldName14 = reader.int32();
          continue;
        case 415:
          if (tag !== 3320) {
            break;
          }

          message.fieldName15 = reader.int32();
          continue;
        case 416:
          if (tag !== 3328) {
            break;
          }

          message.fieldName16 = reader.int32();
          continue;
        case 417:
          if (tag !== 3336) {
            break;
          }

          message.fieldName17 = reader.int32();
          continue;
        case 418:
          if (tag !== 3344) {
            break;
          }

          message.FieldName18 = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2 {
    return {
      optionalInt32: isSet(object.optionalInt32) ? Number(object.optionalInt32) : 0,
      optionalInt64: isSet(object.optionalInt64) ? Number(object.optionalInt64) : 0,
      optionalUint32: isSet(object.optionalUint32) ? Number(object.optionalUint32) : 0,
      optionalUint64: isSet(object.optionalUint64) ? Number(object.optionalUint64) : 0,
      optionalSint32: isSet(object.optionalSint32) ? Number(object.optionalSint32) : 0,
      optionalSint64: isSet(object.optionalSint64) ? Number(object.optionalSint64) : 0,
      optionalFixed32: isSet(object.optionalFixed32) ? Number(object.optionalFixed32) : 0,
      optionalFixed64: isSet(object.optionalFixed64) ? Number(object.optionalFixed64) : 0,
      optionalSfixed32: isSet(object.optionalSfixed32) ? Number(object.optionalSfixed32) : 0,
      optionalSfixed64: isSet(object.optionalSfixed64) ? Number(object.optionalSfixed64) : 0,
      optionalFloat: isSet(object.optionalFloat) ? Number(object.optionalFloat) : 0,
      optionalDouble: isSet(object.optionalDouble) ? Number(object.optionalDouble) : 0,
      optionalBool: isSet(object.optionalBool) ? Boolean(object.optionalBool) : false,
      optionalString: isSet(object.optionalString) ? String(object.optionalString) : "",
      optionalBytes: isSet(object.optionalBytes) ? bytesFromBase64(object.optionalBytes) : new Uint8Array(0),
      optionalNestedMessage: isSet(object.optionalNestedMessage)
        ? TestAllTypesProto2_NestedMessage.fromJSON(object.optionalNestedMessage)
        : undefined,
      optionalForeignMessage: isSet(object.optionalForeignMessage)
        ? ForeignMessageProto2.fromJSON(object.optionalForeignMessage)
        : undefined,
      optionalNestedEnum: isSet(object.optionalNestedEnum)
        ? testAllTypesProto2_NestedEnumFromJSON(object.optionalNestedEnum)
        : 0,
      optionalForeignEnum: isSet(object.optionalForeignEnum)
        ? foreignEnumProto2FromJSON(object.optionalForeignEnum)
        : 0,
      optionalStringPiece: isSet(object.optionalStringPiece) ? String(object.optionalStringPiece) : "",
      optionalCord: isSet(object.optionalCord) ? String(object.optionalCord) : "",
      recursiveMessage: isSet(object.recursiveMessage)
        ? TestAllTypesProto2.fromJSON(object.recursiveMessage)
        : undefined,
      repeatedInt32: Array.isArray(object?.repeatedInt32) ? object.repeatedInt32.map((e: any) => Number(e)) : [],
      repeatedInt64: Array.isArray(object?.repeatedInt64) ? object.repeatedInt64.map((e: any) => Number(e)) : [],
      repeatedUint32: Array.isArray(object?.repeatedUint32) ? object.repeatedUint32.map((e: any) => Number(e)) : [],
      repeatedUint64: Array.isArray(object?.repeatedUint64) ? object.repeatedUint64.map((e: any) => Number(e)) : [],
      repeatedSint32: Array.isArray(object?.repeatedSint32) ? object.repeatedSint32.map((e: any) => Number(e)) : [],
      repeatedSint64: Array.isArray(object?.repeatedSint64) ? object.repeatedSint64.map((e: any) => Number(e)) : [],
      repeatedFixed32: Array.isArray(object?.repeatedFixed32) ? object.repeatedFixed32.map((e: any) => Number(e)) : [],
      repeatedFixed64: Array.isArray(object?.repeatedFixed64) ? object.repeatedFixed64.map((e: any) => Number(e)) : [],
      repeatedSfixed32: Array.isArray(object?.repeatedSfixed32)
        ? object.repeatedSfixed32.map((e: any) => Number(e))
        : [],
      repeatedSfixed64: Array.isArray(object?.repeatedSfixed64)
        ? object.repeatedSfixed64.map((e: any) => Number(e))
        : [],
      repeatedFloat: Array.isArray(object?.repeatedFloat) ? object.repeatedFloat.map((e: any) => Number(e)) : [],
      repeatedDouble: Array.isArray(object?.repeatedDouble) ? object.repeatedDouble.map((e: any) => Number(e)) : [],
      repeatedBool: Array.isArray(object?.repeatedBool) ? object.repeatedBool.map((e: any) => Boolean(e)) : [],
      repeatedString: Array.isArray(object?.repeatedString) ? object.repeatedString.map((e: any) => String(e)) : [],
      repeatedBytes: Array.isArray(object?.repeatedBytes)
        ? object.repeatedBytes.map((e: any) => bytesFromBase64(e))
        : [],
      repeatedNestedMessage: Array.isArray(object?.repeatedNestedMessage)
        ? object.repeatedNestedMessage.map((e: any) => TestAllTypesProto2_NestedMessage.fromJSON(e))
        : [],
      repeatedForeignMessage: Array.isArray(object?.repeatedForeignMessage)
        ? object.repeatedForeignMessage.map((e: any) => ForeignMessageProto2.fromJSON(e))
        : [],
      repeatedNestedEnum: Array.isArray(object?.repeatedNestedEnum)
        ? object.repeatedNestedEnum.map((e: any) => testAllTypesProto2_NestedEnumFromJSON(e))
        : [],
      repeatedForeignEnum: Array.isArray(object?.repeatedForeignEnum)
        ? object.repeatedForeignEnum.map((e: any) => foreignEnumProto2FromJSON(e))
        : [],
      repeatedStringPiece: Array.isArray(object?.repeatedStringPiece)
        ? object.repeatedStringPiece.map((e: any) => String(e))
        : [],
      repeatedCord: Array.isArray(object?.repeatedCord) ? object.repeatedCord.map((e: any) => String(e)) : [],
      packedInt32: Array.isArray(object?.packedInt32) ? object.packedInt32.map((e: any) => Number(e)) : [],
      packedInt64: Array.isArray(object?.packedInt64) ? object.packedInt64.map((e: any) => Number(e)) : [],
      packedUint32: Array.isArray(object?.packedUint32) ? object.packedUint32.map((e: any) => Number(e)) : [],
      packedUint64: Array.isArray(object?.packedUint64) ? object.packedUint64.map((e: any) => Number(e)) : [],
      packedSint32: Array.isArray(object?.packedSint32) ? object.packedSint32.map((e: any) => Number(e)) : [],
      packedSint64: Array.isArray(object?.packedSint64) ? object.packedSint64.map((e: any) => Number(e)) : [],
      packedFixed32: Array.isArray(object?.packedFixed32) ? object.packedFixed32.map((e: any) => Number(e)) : [],
      packedFixed64: Array.isArray(object?.packedFixed64) ? object.packedFixed64.map((e: any) => Number(e)) : [],
      packedSfixed32: Array.isArray(object?.packedSfixed32) ? object.packedSfixed32.map((e: any) => Number(e)) : [],
      packedSfixed64: Array.isArray(object?.packedSfixed64) ? object.packedSfixed64.map((e: any) => Number(e)) : [],
      packedFloat: Array.isArray(object?.packedFloat) ? object.packedFloat.map((e: any) => Number(e)) : [],
      packedDouble: Array.isArray(object?.packedDouble) ? object.packedDouble.map((e: any) => Number(e)) : [],
      packedBool: Array.isArray(object?.packedBool) ? object.packedBool.map((e: any) => Boolean(e)) : [],
      packedNestedEnum: Array.isArray(object?.packedNestedEnum)
        ? object.packedNestedEnum.map((e: any) => testAllTypesProto2_NestedEnumFromJSON(e))
        : [],
      unpackedInt32: Array.isArray(object?.unpackedInt32) ? object.unpackedInt32.map((e: any) => Number(e)) : [],
      unpackedInt64: Array.isArray(object?.unpackedInt64) ? object.unpackedInt64.map((e: any) => Number(e)) : [],
      unpackedUint32: Array.isArray(object?.unpackedUint32) ? object.unpackedUint32.map((e: any) => Number(e)) : [],
      unpackedUint64: Array.isArray(object?.unpackedUint64) ? object.unpackedUint64.map((e: any) => Number(e)) : [],
      unpackedSint32: Array.isArray(object?.unpackedSint32) ? object.unpackedSint32.map((e: any) => Number(e)) : [],
      unpackedSint64: Array.isArray(object?.unpackedSint64) ? object.unpackedSint64.map((e: any) => Number(e)) : [],
      unpackedFixed32: Array.isArray(object?.unpackedFixed32) ? object.unpackedFixed32.map((e: any) => Number(e)) : [],
      unpackedFixed64: Array.isArray(object?.unpackedFixed64) ? object.unpackedFixed64.map((e: any) => Number(e)) : [],
      unpackedSfixed32: Array.isArray(object?.unpackedSfixed32)
        ? object.unpackedSfixed32.map((e: any) => Number(e))
        : [],
      unpackedSfixed64: Array.isArray(object?.unpackedSfixed64)
        ? object.unpackedSfixed64.map((e: any) => Number(e))
        : [],
      unpackedFloat: Array.isArray(object?.unpackedFloat) ? object.unpackedFloat.map((e: any) => Number(e)) : [],
      unpackedDouble: Array.isArray(object?.unpackedDouble) ? object.unpackedDouble.map((e: any) => Number(e)) : [],
      unpackedBool: Array.isArray(object?.unpackedBool) ? object.unpackedBool.map((e: any) => Boolean(e)) : [],
      unpackedNestedEnum: Array.isArray(object?.unpackedNestedEnum)
        ? object.unpackedNestedEnum.map((e: any) => testAllTypesProto2_NestedEnumFromJSON(e))
        : [],
      mapInt32Int32: isObject(object.mapInt32Int32)
        ? Object.entries(object.mapInt32Int32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapInt64Int64: isObject(object.mapInt64Int64)
        ? Object.entries(object.mapInt64Int64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapUint32Uint32: isObject(object.mapUint32Uint32)
        ? Object.entries(object.mapUint32Uint32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapUint64Uint64: isObject(object.mapUint64Uint64)
        ? Object.entries(object.mapUint64Uint64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSint32Sint32: isObject(object.mapSint32Sint32)
        ? Object.entries(object.mapSint32Sint32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSint64Sint64: isObject(object.mapSint64Sint64)
        ? Object.entries(object.mapSint64Sint64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapFixed32Fixed32: isObject(object.mapFixed32Fixed32)
        ? Object.entries(object.mapFixed32Fixed32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapFixed64Fixed64: isObject(object.mapFixed64Fixed64)
        ? Object.entries(object.mapFixed64Fixed64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSfixed32Sfixed32: isObject(object.mapSfixed32Sfixed32)
        ? Object.entries(object.mapSfixed32Sfixed32).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapSfixed64Sfixed64: isObject(object.mapSfixed64Sfixed64)
        ? Object.entries(object.mapSfixed64Sfixed64).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapInt32Float: isObject(object.mapInt32Float)
        ? Object.entries(object.mapInt32Float).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapInt32Double: isObject(object.mapInt32Double)
        ? Object.entries(object.mapInt32Double).reduce<Map<number, number>>((acc, [key, value]) => {
          acc.set(Number(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      mapBoolBool: isObject(object.mapBoolBool)
        ? Object.entries(object.mapBoolBool).reduce<Map<boolean, boolean>>((acc, [key, value]) => {
          acc.set(Number(key), Boolean(value));
          return acc;
        }, new Map())
        : new Map(),
      mapStringString: isObject(object.mapStringString)
        ? Object.entries(object.mapStringString).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : new Map(),
      mapStringBytes: isObject(object.mapStringBytes)
        ? Object.entries(object.mapStringBytes).reduce<Map<string, Uint8Array>>((acc, [key, value]) => {
          acc.set(key, bytesFromBase64(value as string));
          return acc;
        }, new Map())
        : new Map(),
      mapStringNestedMessage: isObject(object.mapStringNestedMessage)
        ? Object.entries(object.mapStringNestedMessage).reduce<Map<string, TestAllTypesProto2_NestedMessage>>(
          (acc, [key, value]) => {
            acc.set(key, TestAllTypesProto2_NestedMessage.fromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
      mapStringForeignMessage: isObject(object.mapStringForeignMessage)
        ? Object.entries(object.mapStringForeignMessage).reduce<Map<string, ForeignMessageProto2>>(
          (acc, [key, value]) => {
            acc.set(key, ForeignMessageProto2.fromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
      mapStringNestedEnum: isObject(object.mapStringNestedEnum)
        ? Object.entries(object.mapStringNestedEnum).reduce<Map<string, TestAllTypesProto2_NestedEnum>>(
          (acc, [key, value]) => {
            acc.set(key, testAllTypesProto2_NestedEnumFromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
      mapStringForeignEnum: isObject(object.mapStringForeignEnum)
        ? Object.entries(object.mapStringForeignEnum).reduce<Map<string, ForeignEnumProto2>>((acc, [key, value]) => {
          acc.set(key, foreignEnumProto2FromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      oneofField: isSet(object.oneofUint32)
        ? { $case: "oneofUint32", oneofUint32: Number(object.oneofUint32) }
        : isSet(object.oneofNestedMessage)
        ? {
          $case: "oneofNestedMessage",
          oneofNestedMessage: TestAllTypesProto2_NestedMessage.fromJSON(object.oneofNestedMessage),
        }
        : isSet(object.oneofString)
        ? { $case: "oneofString", oneofString: String(object.oneofString) }
        : isSet(object.oneofBytes)
        ? { $case: "oneofBytes", oneofBytes: bytesFromBase64(object.oneofBytes) }
        : isSet(object.oneofBool)
        ? { $case: "oneofBool", oneofBool: Boolean(object.oneofBool) }
        : isSet(object.oneofUint64)
        ? { $case: "oneofUint64", oneofUint64: Number(object.oneofUint64) }
        : isSet(object.oneofFloat)
        ? { $case: "oneofFloat", oneofFloat: Number(object.oneofFloat) }
        : isSet(object.oneofDouble)
        ? { $case: "oneofDouble", oneofDouble: Number(object.oneofDouble) }
        : isSet(object.oneofEnum)
        ? { $case: "oneofEnum", oneofEnum: testAllTypesProto2_NestedEnumFromJSON(object.oneofEnum) }
        : undefined,
      data: isSet(object.data) ? TestAllTypesProto2_Data.fromJSON(object.data) : undefined,
      defaultInt32: isSet(object.defaultInt32) ? Number(object.defaultInt32) : 0,
      defaultInt64: isSet(object.defaultInt64) ? Number(object.defaultInt64) : 0,
      defaultUint32: isSet(object.defaultUint32) ? Number(object.defaultUint32) : 0,
      defaultUint64: isSet(object.defaultUint64) ? Number(object.defaultUint64) : 0,
      defaultSint32: isSet(object.defaultSint32) ? Number(object.defaultSint32) : 0,
      defaultSint64: isSet(object.defaultSint64) ? Number(object.defaultSint64) : 0,
      defaultFixed32: isSet(object.defaultFixed32) ? Number(object.defaultFixed32) : 0,
      defaultFixed64: isSet(object.defaultFixed64) ? Number(object.defaultFixed64) : 0,
      defaultSfixed32: isSet(object.defaultSfixed32) ? Number(object.defaultSfixed32) : 0,
      defaultSfixed64: isSet(object.defaultSfixed64) ? Number(object.defaultSfixed64) : 0,
      defaultFloat: isSet(object.defaultFloat) ? Number(object.defaultFloat) : 0,
      defaultDouble: isSet(object.defaultDouble) ? Number(object.defaultDouble) : 0,
      defaultBool: isSet(object.defaultBool) ? Boolean(object.defaultBool) : false,
      defaultString: isSet(object.defaultString) ? String(object.defaultString) : "",
      defaultBytes: isSet(object.defaultBytes) ? bytesFromBase64(object.defaultBytes) : new Uint8Array(0),
      fieldname1: isSet(object.fieldname1) ? Number(object.fieldname1) : 0,
      fieldName2: isSet(object.fieldName2) ? Number(object.fieldName2) : 0,
      FieldName3: isSet(object.FieldName3) ? Number(object.FieldName3) : 0,
      fieldName4: isSet(object.fieldName4) ? Number(object.fieldName4) : 0,
      field0name5: isSet(object.field0name5) ? Number(object.field0name5) : 0,
      field0Name6: isSet(object.field0Name6) ? Number(object.field0Name6) : 0,
      fieldName7: isSet(object.fieldName7) ? Number(object.fieldName7) : 0,
      FieldName8: isSet(object.FieldName8) ? Number(object.FieldName8) : 0,
      fieldName9: isSet(object.fieldName9) ? Number(object.fieldName9) : 0,
      FieldName10: isSet(object.FieldName10) ? Number(object.FieldName10) : 0,
      fieldName11: isSet(object.FIELDNAME11) ? Number(object.FIELDNAME11) : 0,
      FIELDName12: isSet(object.FIELDName12) ? Number(object.FIELDName12) : 0,
      FieldName13: isSet(object.FieldName13) ? Number(object.FieldName13) : 0,
      FieldName14: isSet(object.FieldName14) ? Number(object.FieldName14) : 0,
      fieldName15: isSet(object.fieldName15) ? Number(object.fieldName15) : 0,
      fieldName16: isSet(object.fieldName16) ? Number(object.fieldName16) : 0,
      fieldName17: isSet(object.fieldName17) ? Number(object.fieldName17) : 0,
      FieldName18: isSet(object.FieldName18) ? Number(object.FieldName18) : 0,
    };
  },

  toJSON(message: TestAllTypesProto2): unknown {
    const obj: any = {};
    if (message.optionalInt32 !== 0) {
      obj.optionalInt32 = Math.round(message.optionalInt32);
    }
    if (message.optionalInt64 !== 0) {
      obj.optionalInt64 = Math.round(message.optionalInt64);
    }
    if (message.optionalUint32 !== 0) {
      obj.optionalUint32 = Math.round(message.optionalUint32);
    }
    if (message.optionalUint64 !== 0) {
      obj.optionalUint64 = Math.round(message.optionalUint64);
    }
    if (message.optionalSint32 !== 0) {
      obj.optionalSint32 = Math.round(message.optionalSint32);
    }
    if (message.optionalSint64 !== 0) {
      obj.optionalSint64 = Math.round(message.optionalSint64);
    }
    if (message.optionalFixed32 !== 0) {
      obj.optionalFixed32 = Math.round(message.optionalFixed32);
    }
    if (message.optionalFixed64 !== 0) {
      obj.optionalFixed64 = Math.round(message.optionalFixed64);
    }
    if (message.optionalSfixed32 !== 0) {
      obj.optionalSfixed32 = Math.round(message.optionalSfixed32);
    }
    if (message.optionalSfixed64 !== 0) {
      obj.optionalSfixed64 = Math.round(message.optionalSfixed64);
    }
    if (message.optionalFloat !== 0) {
      obj.optionalFloat = message.optionalFloat;
    }
    if (message.optionalDouble !== 0) {
      obj.optionalDouble = message.optionalDouble;
    }
    if (message.optionalBool === true) {
      obj.optionalBool = message.optionalBool;
    }
    if (message.optionalString !== "") {
      obj.optionalString = message.optionalString;
    }
    if (message.optionalBytes.length !== 0) {
      obj.optionalBytes = base64FromBytes(message.optionalBytes);
    }
    if (message.optionalNestedMessage !== undefined) {
      obj.optionalNestedMessage = TestAllTypesProto2_NestedMessage.toJSON(message.optionalNestedMessage);
    }
    if (message.optionalForeignMessage !== undefined) {
      obj.optionalForeignMessage = ForeignMessageProto2.toJSON(message.optionalForeignMessage);
    }
    if (message.optionalNestedEnum !== 0) {
      obj.optionalNestedEnum = testAllTypesProto2_NestedEnumToJSON(message.optionalNestedEnum);
    }
    if (message.optionalForeignEnum !== 0) {
      obj.optionalForeignEnum = foreignEnumProto2ToJSON(message.optionalForeignEnum);
    }
    if (message.optionalStringPiece !== "") {
      obj.optionalStringPiece = message.optionalStringPiece;
    }
    if (message.optionalCord !== "") {
      obj.optionalCord = message.optionalCord;
    }
    if (message.recursiveMessage !== undefined) {
      obj.recursiveMessage = TestAllTypesProto2.toJSON(message.recursiveMessage);
    }
    if (message.repeatedInt32?.length) {
      obj.repeatedInt32 = message.repeatedInt32.map((e) => Math.round(e));
    }
    if (message.repeatedInt64?.length) {
      obj.repeatedInt64 = message.repeatedInt64.map((e) => Math.round(e));
    }
    if (message.repeatedUint32?.length) {
      obj.repeatedUint32 = message.repeatedUint32.map((e) => Math.round(e));
    }
    if (message.repeatedUint64?.length) {
      obj.repeatedUint64 = message.repeatedUint64.map((e) => Math.round(e));
    }
    if (message.repeatedSint32?.length) {
      obj.repeatedSint32 = message.repeatedSint32.map((e) => Math.round(e));
    }
    if (message.repeatedSint64?.length) {
      obj.repeatedSint64 = message.repeatedSint64.map((e) => Math.round(e));
    }
    if (message.repeatedFixed32?.length) {
      obj.repeatedFixed32 = message.repeatedFixed32.map((e) => Math.round(e));
    }
    if (message.repeatedFixed64?.length) {
      obj.repeatedFixed64 = message.repeatedFixed64.map((e) => Math.round(e));
    }
    if (message.repeatedSfixed32?.length) {
      obj.repeatedSfixed32 = message.repeatedSfixed32.map((e) => Math.round(e));
    }
    if (message.repeatedSfixed64?.length) {
      obj.repeatedSfixed64 = message.repeatedSfixed64.map((e) => Math.round(e));
    }
    if (message.repeatedFloat?.length) {
      obj.repeatedFloat = message.repeatedFloat;
    }
    if (message.repeatedDouble?.length) {
      obj.repeatedDouble = message.repeatedDouble;
    }
    if (message.repeatedBool?.length) {
      obj.repeatedBool = message.repeatedBool;
    }
    if (message.repeatedString?.length) {
      obj.repeatedString = message.repeatedString;
    }
    if (message.repeatedBytes?.length) {
      obj.repeatedBytes = message.repeatedBytes.map((e) => base64FromBytes(e));
    }
    if (message.repeatedNestedMessage?.length) {
      obj.repeatedNestedMessage = message.repeatedNestedMessage.map((e) => TestAllTypesProto2_NestedMessage.toJSON(e));
    }
    if (message.repeatedForeignMessage?.length) {
      obj.repeatedForeignMessage = message.repeatedForeignMessage.map((e) => ForeignMessageProto2.toJSON(e));
    }
    if (message.repeatedNestedEnum?.length) {
      obj.repeatedNestedEnum = message.repeatedNestedEnum.map((e) => testAllTypesProto2_NestedEnumToJSON(e));
    }
    if (message.repeatedForeignEnum?.length) {
      obj.repeatedForeignEnum = message.repeatedForeignEnum.map((e) => foreignEnumProto2ToJSON(e));
    }
    if (message.repeatedStringPiece?.length) {
      obj.repeatedStringPiece = message.repeatedStringPiece;
    }
    if (message.repeatedCord?.length) {
      obj.repeatedCord = message.repeatedCord;
    }
    if (message.packedInt32?.length) {
      obj.packedInt32 = message.packedInt32.map((e) => Math.round(e));
    }
    if (message.packedInt64?.length) {
      obj.packedInt64 = message.packedInt64.map((e) => Math.round(e));
    }
    if (message.packedUint32?.length) {
      obj.packedUint32 = message.packedUint32.map((e) => Math.round(e));
    }
    if (message.packedUint64?.length) {
      obj.packedUint64 = message.packedUint64.map((e) => Math.round(e));
    }
    if (message.packedSint32?.length) {
      obj.packedSint32 = message.packedSint32.map((e) => Math.round(e));
    }
    if (message.packedSint64?.length) {
      obj.packedSint64 = message.packedSint64.map((e) => Math.round(e));
    }
    if (message.packedFixed32?.length) {
      obj.packedFixed32 = message.packedFixed32.map((e) => Math.round(e));
    }
    if (message.packedFixed64?.length) {
      obj.packedFixed64 = message.packedFixed64.map((e) => Math.round(e));
    }
    if (message.packedSfixed32?.length) {
      obj.packedSfixed32 = message.packedSfixed32.map((e) => Math.round(e));
    }
    if (message.packedSfixed64?.length) {
      obj.packedSfixed64 = message.packedSfixed64.map((e) => Math.round(e));
    }
    if (message.packedFloat?.length) {
      obj.packedFloat = message.packedFloat;
    }
    if (message.packedDouble?.length) {
      obj.packedDouble = message.packedDouble;
    }
    if (message.packedBool?.length) {
      obj.packedBool = message.packedBool;
    }
    if (message.packedNestedEnum?.length) {
      obj.packedNestedEnum = message.packedNestedEnum.map((e) => testAllTypesProto2_NestedEnumToJSON(e));
    }
    if (message.unpackedInt32?.length) {
      obj.unpackedInt32 = message.unpackedInt32.map((e) => Math.round(e));
    }
    if (message.unpackedInt64?.length) {
      obj.unpackedInt64 = message.unpackedInt64.map((e) => Math.round(e));
    }
    if (message.unpackedUint32?.length) {
      obj.unpackedUint32 = message.unpackedUint32.map((e) => Math.round(e));
    }
    if (message.unpackedUint64?.length) {
      obj.unpackedUint64 = message.unpackedUint64.map((e) => Math.round(e));
    }
    if (message.unpackedSint32?.length) {
      obj.unpackedSint32 = message.unpackedSint32.map((e) => Math.round(e));
    }
    if (message.unpackedSint64?.length) {
      obj.unpackedSint64 = message.unpackedSint64.map((e) => Math.round(e));
    }
    if (message.unpackedFixed32?.length) {
      obj.unpackedFixed32 = message.unpackedFixed32.map((e) => Math.round(e));
    }
    if (message.unpackedFixed64?.length) {
      obj.unpackedFixed64 = message.unpackedFixed64.map((e) => Math.round(e));
    }
    if (message.unpackedSfixed32?.length) {
      obj.unpackedSfixed32 = message.unpackedSfixed32.map((e) => Math.round(e));
    }
    if (message.unpackedSfixed64?.length) {
      obj.unpackedSfixed64 = message.unpackedSfixed64.map((e) => Math.round(e));
    }
    if (message.unpackedFloat?.length) {
      obj.unpackedFloat = message.unpackedFloat;
    }
    if (message.unpackedDouble?.length) {
      obj.unpackedDouble = message.unpackedDouble;
    }
    if (message.unpackedBool?.length) {
      obj.unpackedBool = message.unpackedBool;
    }
    if (message.unpackedNestedEnum?.length) {
      obj.unpackedNestedEnum = message.unpackedNestedEnum.map((e) => testAllTypesProto2_NestedEnumToJSON(e));
    }
    if (message.mapInt32Int32?.size) {
      obj.mapInt32Int32 = {};
      message.mapInt32Int32.forEach((v, k) => {
        obj.mapInt32Int32[k] = Math.round(v);
      });
    }
    if (message.mapInt64Int64?.size) {
      obj.mapInt64Int64 = {};
      message.mapInt64Int64.forEach((v, k) => {
        obj.mapInt64Int64[k] = Math.round(v);
      });
    }
    if (message.mapUint32Uint32?.size) {
      obj.mapUint32Uint32 = {};
      message.mapUint32Uint32.forEach((v, k) => {
        obj.mapUint32Uint32[k] = Math.round(v);
      });
    }
    if (message.mapUint64Uint64?.size) {
      obj.mapUint64Uint64 = {};
      message.mapUint64Uint64.forEach((v, k) => {
        obj.mapUint64Uint64[k] = Math.round(v);
      });
    }
    if (message.mapSint32Sint32?.size) {
      obj.mapSint32Sint32 = {};
      message.mapSint32Sint32.forEach((v, k) => {
        obj.mapSint32Sint32[k] = Math.round(v);
      });
    }
    if (message.mapSint64Sint64?.size) {
      obj.mapSint64Sint64 = {};
      message.mapSint64Sint64.forEach((v, k) => {
        obj.mapSint64Sint64[k] = Math.round(v);
      });
    }
    if (message.mapFixed32Fixed32?.size) {
      obj.mapFixed32Fixed32 = {};
      message.mapFixed32Fixed32.forEach((v, k) => {
        obj.mapFixed32Fixed32[k] = Math.round(v);
      });
    }
    if (message.mapFixed64Fixed64?.size) {
      obj.mapFixed64Fixed64 = {};
      message.mapFixed64Fixed64.forEach((v, k) => {
        obj.mapFixed64Fixed64[k] = Math.round(v);
      });
    }
    if (message.mapSfixed32Sfixed32?.size) {
      obj.mapSfixed32Sfixed32 = {};
      message.mapSfixed32Sfixed32.forEach((v, k) => {
        obj.mapSfixed32Sfixed32[k] = Math.round(v);
      });
    }
    if (message.mapSfixed64Sfixed64?.size) {
      obj.mapSfixed64Sfixed64 = {};
      message.mapSfixed64Sfixed64.forEach((v, k) => {
        obj.mapSfixed64Sfixed64[k] = Math.round(v);
      });
    }
    if (message.mapInt32Float?.size) {
      obj.mapInt32Float = {};
      message.mapInt32Float.forEach((v, k) => {
        obj.mapInt32Float[k] = v;
      });
    }
    if (message.mapInt32Double?.size) {
      obj.mapInt32Double = {};
      message.mapInt32Double.forEach((v, k) => {
        obj.mapInt32Double[k] = v;
      });
    }
    if (message.mapBoolBool?.size) {
      obj.mapBoolBool = {};
      message.mapBoolBool.forEach((v, k) => {
        obj.mapBoolBool[k] = v;
      });
    }
    if (message.mapStringString?.size) {
      obj.mapStringString = {};
      message.mapStringString.forEach((v, k) => {
        obj.mapStringString[k] = v;
      });
    }
    if (message.mapStringBytes?.size) {
      obj.mapStringBytes = {};
      message.mapStringBytes.forEach((v, k) => {
        obj.mapStringBytes[k] = base64FromBytes(v);
      });
    }
    if (message.mapStringNestedMessage?.size) {
      obj.mapStringNestedMessage = {};
      message.mapStringNestedMessage.forEach((v, k) => {
        obj.mapStringNestedMessage[k] = TestAllTypesProto2_NestedMessage.toJSON(v);
      });
    }
    if (message.mapStringForeignMessage?.size) {
      obj.mapStringForeignMessage = {};
      message.mapStringForeignMessage.forEach((v, k) => {
        obj.mapStringForeignMessage[k] = ForeignMessageProto2.toJSON(v);
      });
    }
    if (message.mapStringNestedEnum?.size) {
      obj.mapStringNestedEnum = {};
      message.mapStringNestedEnum.forEach((v, k) => {
        obj.mapStringNestedEnum[k] = testAllTypesProto2_NestedEnumToJSON(v);
      });
    }
    if (message.mapStringForeignEnum?.size) {
      obj.mapStringForeignEnum = {};
      message.mapStringForeignEnum.forEach((v, k) => {
        obj.mapStringForeignEnum[k] = foreignEnumProto2ToJSON(v);
      });
    }
    if (message.oneofField?.$case === "oneofUint32") {
      obj.oneofUint32 = Math.round(message.oneofField.oneofUint32);
    }
    if (message.oneofField?.$case === "oneofNestedMessage") {
      obj.oneofNestedMessage = TestAllTypesProto2_NestedMessage.toJSON(message.oneofField.oneofNestedMessage);
    }
    if (message.oneofField?.$case === "oneofString") {
      obj.oneofString = message.oneofField.oneofString;
    }
    if (message.oneofField?.$case === "oneofBytes") {
      obj.oneofBytes = base64FromBytes(message.oneofField.oneofBytes);
    }
    if (message.oneofField?.$case === "oneofBool") {
      obj.oneofBool = message.oneofField.oneofBool;
    }
    if (message.oneofField?.$case === "oneofUint64") {
      obj.oneofUint64 = Math.round(message.oneofField.oneofUint64);
    }
    if (message.oneofField?.$case === "oneofFloat") {
      obj.oneofFloat = message.oneofField.oneofFloat;
    }
    if (message.oneofField?.$case === "oneofDouble") {
      obj.oneofDouble = message.oneofField.oneofDouble;
    }
    if (message.oneofField?.$case === "oneofEnum") {
      obj.oneofEnum = testAllTypesProto2_NestedEnumToJSON(message.oneofField.oneofEnum);
    }
    if (message.data !== undefined) {
      obj.data = TestAllTypesProto2_Data.toJSON(message.data);
    }
    if (message.defaultInt32 !== 0) {
      obj.defaultInt32 = Math.round(message.defaultInt32);
    }
    if (message.defaultInt64 !== 0) {
      obj.defaultInt64 = Math.round(message.defaultInt64);
    }
    if (message.defaultUint32 !== 0) {
      obj.defaultUint32 = Math.round(message.defaultUint32);
    }
    if (message.defaultUint64 !== 0) {
      obj.defaultUint64 = Math.round(message.defaultUint64);
    }
    if (message.defaultSint32 !== 0) {
      obj.defaultSint32 = Math.round(message.defaultSint32);
    }
    if (message.defaultSint64 !== 0) {
      obj.defaultSint64 = Math.round(message.defaultSint64);
    }
    if (message.defaultFixed32 !== 0) {
      obj.defaultFixed32 = Math.round(message.defaultFixed32);
    }
    if (message.defaultFixed64 !== 0) {
      obj.defaultFixed64 = Math.round(message.defaultFixed64);
    }
    if (message.defaultSfixed32 !== 0) {
      obj.defaultSfixed32 = Math.round(message.defaultSfixed32);
    }
    if (message.defaultSfixed64 !== 0) {
      obj.defaultSfixed64 = Math.round(message.defaultSfixed64);
    }
    if (message.defaultFloat !== 0) {
      obj.defaultFloat = message.defaultFloat;
    }
    if (message.defaultDouble !== 0) {
      obj.defaultDouble = message.defaultDouble;
    }
    if (message.defaultBool === true) {
      obj.defaultBool = message.defaultBool;
    }
    if (message.defaultString !== "") {
      obj.defaultString = message.defaultString;
    }
    if (message.defaultBytes.length !== 0) {
      obj.defaultBytes = base64FromBytes(message.defaultBytes);
    }
    if (message.fieldname1 !== 0) {
      obj.fieldname1 = Math.round(message.fieldname1);
    }
    if (message.fieldName2 !== 0) {
      obj.fieldName2 = Math.round(message.fieldName2);
    }
    if (message.FieldName3 !== 0) {
      obj.FieldName3 = Math.round(message.FieldName3);
    }
    if (message.fieldName4 !== 0) {
      obj.fieldName4 = Math.round(message.fieldName4);
    }
    if (message.field0name5 !== 0) {
      obj.field0name5 = Math.round(message.field0name5);
    }
    if (message.field0Name6 !== 0) {
      obj.field0Name6 = Math.round(message.field0Name6);
    }
    if (message.fieldName7 !== 0) {
      obj.fieldName7 = Math.round(message.fieldName7);
    }
    if (message.FieldName8 !== 0) {
      obj.FieldName8 = Math.round(message.FieldName8);
    }
    if (message.fieldName9 !== 0) {
      obj.fieldName9 = Math.round(message.fieldName9);
    }
    if (message.FieldName10 !== 0) {
      obj.FieldName10 = Math.round(message.FieldName10);
    }
    if (message.fieldName11 !== 0) {
      obj.FIELDNAME11 = Math.round(message.fieldName11);
    }
    if (message.FIELDName12 !== 0) {
      obj.FIELDName12 = Math.round(message.FIELDName12);
    }
    if (message.FieldName13 !== 0) {
      obj.FieldName13 = Math.round(message.FieldName13);
    }
    if (message.FieldName14 !== 0) {
      obj.FieldName14 = Math.round(message.FieldName14);
    }
    if (message.fieldName15 !== 0) {
      obj.fieldName15 = Math.round(message.fieldName15);
    }
    if (message.fieldName16 !== 0) {
      obj.fieldName16 = Math.round(message.fieldName16);
    }
    if (message.fieldName17 !== 0) {
      obj.fieldName17 = Math.round(message.fieldName17);
    }
    if (message.FieldName18 !== 0) {
      obj.FieldName18 = Math.round(message.FieldName18);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2>, I>>(base?: I): TestAllTypesProto2 {
    return TestAllTypesProto2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2>, I>>(object: I): TestAllTypesProto2 {
    const message = createBaseTestAllTypesProto2();
    message.optionalInt32 = object.optionalInt32 ?? 0;
    message.optionalInt64 = object.optionalInt64 ?? 0;
    message.optionalUint32 = object.optionalUint32 ?? 0;
    message.optionalUint64 = object.optionalUint64 ?? 0;
    message.optionalSint32 = object.optionalSint32 ?? 0;
    message.optionalSint64 = object.optionalSint64 ?? 0;
    message.optionalFixed32 = object.optionalFixed32 ?? 0;
    message.optionalFixed64 = object.optionalFixed64 ?? 0;
    message.optionalSfixed32 = object.optionalSfixed32 ?? 0;
    message.optionalSfixed64 = object.optionalSfixed64 ?? 0;
    message.optionalFloat = object.optionalFloat ?? 0;
    message.optionalDouble = object.optionalDouble ?? 0;
    message.optionalBool = object.optionalBool ?? false;
    message.optionalString = object.optionalString ?? "";
    message.optionalBytes = object.optionalBytes ?? new Uint8Array(0);
    message.optionalNestedMessage =
      (object.optionalNestedMessage !== undefined && object.optionalNestedMessage !== null)
        ? TestAllTypesProto2_NestedMessage.fromPartial(object.optionalNestedMessage)
        : undefined;
    message.optionalForeignMessage =
      (object.optionalForeignMessage !== undefined && object.optionalForeignMessage !== null)
        ? ForeignMessageProto2.fromPartial(object.optionalForeignMessage)
        : undefined;
    message.optionalNestedEnum = object.optionalNestedEnum ?? 0;
    message.optionalForeignEnum = object.optionalForeignEnum ?? 0;
    message.optionalStringPiece = object.optionalStringPiece ?? "";
    message.optionalCord = object.optionalCord ?? "";
    message.recursiveMessage = (object.recursiveMessage !== undefined && object.recursiveMessage !== null)
      ? TestAllTypesProto2.fromPartial(object.recursiveMessage)
      : undefined;
    message.repeatedInt32 = object.repeatedInt32?.map((e) => e) || [];
    message.repeatedInt64 = object.repeatedInt64?.map((e) => e) || [];
    message.repeatedUint32 = object.repeatedUint32?.map((e) => e) || [];
    message.repeatedUint64 = object.repeatedUint64?.map((e) => e) || [];
    message.repeatedSint32 = object.repeatedSint32?.map((e) => e) || [];
    message.repeatedSint64 = object.repeatedSint64?.map((e) => e) || [];
    message.repeatedFixed32 = object.repeatedFixed32?.map((e) => e) || [];
    message.repeatedFixed64 = object.repeatedFixed64?.map((e) => e) || [];
    message.repeatedSfixed32 = object.repeatedSfixed32?.map((e) => e) || [];
    message.repeatedSfixed64 = object.repeatedSfixed64?.map((e) => e) || [];
    message.repeatedFloat = object.repeatedFloat?.map((e) => e) || [];
    message.repeatedDouble = object.repeatedDouble?.map((e) => e) || [];
    message.repeatedBool = object.repeatedBool?.map((e) => e) || [];
    message.repeatedString = object.repeatedString?.map((e) => e) || [];
    message.repeatedBytes = object.repeatedBytes?.map((e) => e) || [];
    message.repeatedNestedMessage =
      object.repeatedNestedMessage?.map((e) => TestAllTypesProto2_NestedMessage.fromPartial(e)) || [];
    message.repeatedForeignMessage = object.repeatedForeignMessage?.map((e) => ForeignMessageProto2.fromPartial(e)) ||
      [];
    message.repeatedNestedEnum = object.repeatedNestedEnum?.map((e) => e) || [];
    message.repeatedForeignEnum = object.repeatedForeignEnum?.map((e) => e) || [];
    message.repeatedStringPiece = object.repeatedStringPiece?.map((e) => e) || [];
    message.repeatedCord = object.repeatedCord?.map((e) => e) || [];
    message.packedInt32 = object.packedInt32?.map((e) => e) || [];
    message.packedInt64 = object.packedInt64?.map((e) => e) || [];
    message.packedUint32 = object.packedUint32?.map((e) => e) || [];
    message.packedUint64 = object.packedUint64?.map((e) => e) || [];
    message.packedSint32 = object.packedSint32?.map((e) => e) || [];
    message.packedSint64 = object.packedSint64?.map((e) => e) || [];
    message.packedFixed32 = object.packedFixed32?.map((e) => e) || [];
    message.packedFixed64 = object.packedFixed64?.map((e) => e) || [];
    message.packedSfixed32 = object.packedSfixed32?.map((e) => e) || [];
    message.packedSfixed64 = object.packedSfixed64?.map((e) => e) || [];
    message.packedFloat = object.packedFloat?.map((e) => e) || [];
    message.packedDouble = object.packedDouble?.map((e) => e) || [];
    message.packedBool = object.packedBool?.map((e) => e) || [];
    message.packedNestedEnum = object.packedNestedEnum?.map((e) => e) || [];
    message.unpackedInt32 = object.unpackedInt32?.map((e) => e) || [];
    message.unpackedInt64 = object.unpackedInt64?.map((e) => e) || [];
    message.unpackedUint32 = object.unpackedUint32?.map((e) => e) || [];
    message.unpackedUint64 = object.unpackedUint64?.map((e) => e) || [];
    message.unpackedSint32 = object.unpackedSint32?.map((e) => e) || [];
    message.unpackedSint64 = object.unpackedSint64?.map((e) => e) || [];
    message.unpackedFixed32 = object.unpackedFixed32?.map((e) => e) || [];
    message.unpackedFixed64 = object.unpackedFixed64?.map((e) => e) || [];
    message.unpackedSfixed32 = object.unpackedSfixed32?.map((e) => e) || [];
    message.unpackedSfixed64 = object.unpackedSfixed64?.map((e) => e) || [];
    message.unpackedFloat = object.unpackedFloat?.map((e) => e) || [];
    message.unpackedDouble = object.unpackedDouble?.map((e) => e) || [];
    message.unpackedBool = object.unpackedBool?.map((e) => e) || [];
    message.unpackedNestedEnum = object.unpackedNestedEnum?.map((e) => e) || [];
    message.mapInt32Int32 = (() => {
      const m = new Map();
      (object.mapInt32Int32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapInt64Int64 = (() => {
      const m = new Map();
      (object.mapInt64Int64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapUint32Uint32 = (() => {
      const m = new Map();
      (object.mapUint32Uint32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapUint64Uint64 = (() => {
      const m = new Map();
      (object.mapUint64Uint64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapSint32Sint32 = (() => {
      const m = new Map();
      (object.mapSint32Sint32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapSint64Sint64 = (() => {
      const m = new Map();
      (object.mapSint64Sint64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapFixed32Fixed32 = (() => {
      const m = new Map();
      (object.mapFixed32Fixed32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapFixed64Fixed64 = (() => {
      const m = new Map();
      (object.mapFixed64Fixed64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapSfixed32Sfixed32 = (() => {
      const m = new Map();
      (object.mapSfixed32Sfixed32 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapSfixed64Sfixed64 = (() => {
      const m = new Map();
      (object.mapSfixed64Sfixed64 as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapInt32Float = (() => {
      const m = new Map();
      (object.mapInt32Float as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapInt32Double = (() => {
      const m = new Map();
      (object.mapInt32Double as Map<number, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.mapBoolBool = (() => {
      const m = new Map();
      (object.mapBoolBool as Map<boolean, boolean> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Boolean(value));
        }
      });
      return m;
    })();
    message.mapStringString = (() => {
      const m = new Map();
      (object.mapStringString as Map<string, string> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, String(value));
        }
      });
      return m;
    })();
    message.mapStringBytes = (() => {
      const m = new Map();
      (object.mapStringBytes as Map<string, Uint8Array> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, value);
        }
      });
      return m;
    })();
    message.mapStringNestedMessage = (() => {
      const m = new Map();
      (object.mapStringNestedMessage as Map<string, TestAllTypesProto2_NestedMessage> ?? new Map()).forEach(
        (value, key) => {
          if (value !== undefined) {
            m.set(key, TestAllTypesProto2_NestedMessage.fromPartial(value));
          }
        },
      );
      return m;
    })();
    message.mapStringForeignMessage = (() => {
      const m = new Map();
      (object.mapStringForeignMessage as Map<string, ForeignMessageProto2> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, ForeignMessageProto2.fromPartial(value));
        }
      });
      return m;
    })();
    message.mapStringNestedEnum = (() => {
      const m = new Map();
      (object.mapStringNestedEnum as Map<string, TestAllTypesProto2_NestedEnum> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, value as TestAllTypesProto2_NestedEnum);
        }
      });
      return m;
    })();
    message.mapStringForeignEnum = (() => {
      const m = new Map();
      (object.mapStringForeignEnum as Map<string, ForeignEnumProto2> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, value as ForeignEnumProto2);
        }
      });
      return m;
    })();
    if (
      object.oneofField?.$case === "oneofUint32" &&
      object.oneofField?.oneofUint32 !== undefined &&
      object.oneofField?.oneofUint32 !== null
    ) {
      message.oneofField = { $case: "oneofUint32", oneofUint32: object.oneofField.oneofUint32 };
    }
    if (
      object.oneofField?.$case === "oneofNestedMessage" &&
      object.oneofField?.oneofNestedMessage !== undefined &&
      object.oneofField?.oneofNestedMessage !== null
    ) {
      message.oneofField = {
        $case: "oneofNestedMessage",
        oneofNestedMessage: TestAllTypesProto2_NestedMessage.fromPartial(object.oneofField.oneofNestedMessage),
      };
    }
    if (
      object.oneofField?.$case === "oneofString" &&
      object.oneofField?.oneofString !== undefined &&
      object.oneofField?.oneofString !== null
    ) {
      message.oneofField = { $case: "oneofString", oneofString: object.oneofField.oneofString };
    }
    if (
      object.oneofField?.$case === "oneofBytes" &&
      object.oneofField?.oneofBytes !== undefined &&
      object.oneofField?.oneofBytes !== null
    ) {
      message.oneofField = { $case: "oneofBytes", oneofBytes: object.oneofField.oneofBytes };
    }
    if (
      object.oneofField?.$case === "oneofBool" &&
      object.oneofField?.oneofBool !== undefined &&
      object.oneofField?.oneofBool !== null
    ) {
      message.oneofField = { $case: "oneofBool", oneofBool: object.oneofField.oneofBool };
    }
    if (
      object.oneofField?.$case === "oneofUint64" &&
      object.oneofField?.oneofUint64 !== undefined &&
      object.oneofField?.oneofUint64 !== null
    ) {
      message.oneofField = { $case: "oneofUint64", oneofUint64: object.oneofField.oneofUint64 };
    }
    if (
      object.oneofField?.$case === "oneofFloat" &&
      object.oneofField?.oneofFloat !== undefined &&
      object.oneofField?.oneofFloat !== null
    ) {
      message.oneofField = { $case: "oneofFloat", oneofFloat: object.oneofField.oneofFloat };
    }
    if (
      object.oneofField?.$case === "oneofDouble" &&
      object.oneofField?.oneofDouble !== undefined &&
      object.oneofField?.oneofDouble !== null
    ) {
      message.oneofField = { $case: "oneofDouble", oneofDouble: object.oneofField.oneofDouble };
    }
    if (
      object.oneofField?.$case === "oneofEnum" &&
      object.oneofField?.oneofEnum !== undefined &&
      object.oneofField?.oneofEnum !== null
    ) {
      message.oneofField = { $case: "oneofEnum", oneofEnum: object.oneofField.oneofEnum };
    }
    message.data = (object.data !== undefined && object.data !== null)
      ? TestAllTypesProto2_Data.fromPartial(object.data)
      : undefined;
    message.defaultInt32 = object.defaultInt32 ?? 0;
    message.defaultInt64 = object.defaultInt64 ?? 0;
    message.defaultUint32 = object.defaultUint32 ?? 0;
    message.defaultUint64 = object.defaultUint64 ?? 0;
    message.defaultSint32 = object.defaultSint32 ?? 0;
    message.defaultSint64 = object.defaultSint64 ?? 0;
    message.defaultFixed32 = object.defaultFixed32 ?? 0;
    message.defaultFixed64 = object.defaultFixed64 ?? 0;
    message.defaultSfixed32 = object.defaultSfixed32 ?? 0;
    message.defaultSfixed64 = object.defaultSfixed64 ?? 0;
    message.defaultFloat = object.defaultFloat ?? 0;
    message.defaultDouble = object.defaultDouble ?? 0;
    message.defaultBool = object.defaultBool ?? false;
    message.defaultString = object.defaultString ?? "";
    message.defaultBytes = object.defaultBytes ?? new Uint8Array(0);
    message.fieldname1 = object.fieldname1 ?? 0;
    message.fieldName2 = object.fieldName2 ?? 0;
    message.FieldName3 = object.FieldName3 ?? 0;
    message.fieldName4 = object.fieldName4 ?? 0;
    message.field0name5 = object.field0name5 ?? 0;
    message.field0Name6 = object.field0Name6 ?? 0;
    message.fieldName7 = object.fieldName7 ?? 0;
    message.FieldName8 = object.FieldName8 ?? 0;
    message.fieldName9 = object.fieldName9 ?? 0;
    message.FieldName10 = object.FieldName10 ?? 0;
    message.fieldName11 = object.fieldName11 ?? 0;
    message.FIELDName12 = object.FIELDName12 ?? 0;
    message.FieldName13 = object.FieldName13 ?? 0;
    message.FieldName14 = object.FieldName14 ?? 0;
    message.fieldName15 = object.fieldName15 ?? 0;
    message.fieldName16 = object.fieldName16 ?? 0;
    message.fieldName17 = object.fieldName17 ?? 0;
    message.FieldName18 = object.FieldName18 ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_NestedMessage(): TestAllTypesProto2_NestedMessage {
  return { a: 0, corecursive: undefined };
}

export const TestAllTypesProto2_NestedMessage = {
  encode(message: TestAllTypesProto2_NestedMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== 0) {
      writer.uint32(8).int32(message.a);
    }
    if (message.corecursive !== undefined) {
      TestAllTypesProto2.encode(message.corecursive, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_NestedMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_NestedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.a = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.corecursive = TestAllTypesProto2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_NestedMessage {
    return {
      a: isSet(object.a) ? Number(object.a) : 0,
      corecursive: isSet(object.corecursive) ? TestAllTypesProto2.fromJSON(object.corecursive) : undefined,
    };
  },

  toJSON(message: TestAllTypesProto2_NestedMessage): unknown {
    const obj: any = {};
    if (message.a !== 0) {
      obj.a = Math.round(message.a);
    }
    if (message.corecursive !== undefined) {
      obj.corecursive = TestAllTypesProto2.toJSON(message.corecursive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_NestedMessage>, I>>(
    base?: I,
  ): TestAllTypesProto2_NestedMessage {
    return TestAllTypesProto2_NestedMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_NestedMessage>, I>>(
    object: I,
  ): TestAllTypesProto2_NestedMessage {
    const message = createBaseTestAllTypesProto2_NestedMessage();
    message.a = object.a ?? 0;
    message.corecursive = (object.corecursive !== undefined && object.corecursive !== null)
      ? TestAllTypesProto2.fromPartial(object.corecursive)
      : undefined;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapInt32Int32Entry(): TestAllTypesProto2_MapInt32Int32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapInt32Int32Entry = {
  encode(message: TestAllTypesProto2_MapInt32Int32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapInt32Int32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapInt32Int32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapInt32Int32Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapInt32Int32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt32Int32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapInt32Int32Entry {
    return TestAllTypesProto2_MapInt32Int32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt32Int32Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapInt32Int32Entry {
    const message = createBaseTestAllTypesProto2_MapInt32Int32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapInt64Int64Entry(): TestAllTypesProto2_MapInt64Int64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapInt64Int64Entry = {
  encode(message: TestAllTypesProto2_MapInt64Int64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapInt64Int64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapInt64Int64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapInt64Int64Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapInt64Int64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt64Int64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapInt64Int64Entry {
    return TestAllTypesProto2_MapInt64Int64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt64Int64Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapInt64Int64Entry {
    const message = createBaseTestAllTypesProto2_MapInt64Int64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapUint32Uint32Entry(): TestAllTypesProto2_MapUint32Uint32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapUint32Uint32Entry = {
  encode(message: TestAllTypesProto2_MapUint32Uint32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapUint32Uint32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapUint32Uint32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapUint32Uint32Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapUint32Uint32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapUint32Uint32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapUint32Uint32Entry {
    return TestAllTypesProto2_MapUint32Uint32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapUint32Uint32Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapUint32Uint32Entry {
    const message = createBaseTestAllTypesProto2_MapUint32Uint32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapUint64Uint64Entry(): TestAllTypesProto2_MapUint64Uint64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapUint64Uint64Entry = {
  encode(message: TestAllTypesProto2_MapUint64Uint64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapUint64Uint64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapUint64Uint64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapUint64Uint64Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapUint64Uint64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapUint64Uint64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapUint64Uint64Entry {
    return TestAllTypesProto2_MapUint64Uint64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapUint64Uint64Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapUint64Uint64Entry {
    const message = createBaseTestAllTypesProto2_MapUint64Uint64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapSint32Sint32Entry(): TestAllTypesProto2_MapSint32Sint32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapSint32Sint32Entry = {
  encode(message: TestAllTypesProto2_MapSint32Sint32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).sint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).sint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapSint32Sint32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapSint32Sint32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.sint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.sint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapSint32Sint32Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapSint32Sint32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapSint32Sint32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapSint32Sint32Entry {
    return TestAllTypesProto2_MapSint32Sint32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapSint32Sint32Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapSint32Sint32Entry {
    const message = createBaseTestAllTypesProto2_MapSint32Sint32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapSint64Sint64Entry(): TestAllTypesProto2_MapSint64Sint64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapSint64Sint64Entry = {
  encode(message: TestAllTypesProto2_MapSint64Sint64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).sint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).sint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapSint64Sint64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapSint64Sint64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.sint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.sint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapSint64Sint64Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapSint64Sint64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapSint64Sint64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapSint64Sint64Entry {
    return TestAllTypesProto2_MapSint64Sint64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapSint64Sint64Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapSint64Sint64Entry {
    const message = createBaseTestAllTypesProto2_MapSint64Sint64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapFixed32Fixed32Entry(): TestAllTypesProto2_MapFixed32Fixed32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapFixed32Fixed32Entry = {
  encode(message: TestAllTypesProto2_MapFixed32Fixed32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(13).fixed32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).fixed32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapFixed32Fixed32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapFixed32Fixed32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.key = reader.fixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.fixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapFixed32Fixed32Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapFixed32Fixed32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapFixed32Fixed32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapFixed32Fixed32Entry {
    return TestAllTypesProto2_MapFixed32Fixed32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapFixed32Fixed32Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapFixed32Fixed32Entry {
    const message = createBaseTestAllTypesProto2_MapFixed32Fixed32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapFixed64Fixed64Entry(): TestAllTypesProto2_MapFixed64Fixed64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapFixed64Fixed64Entry = {
  encode(message: TestAllTypesProto2_MapFixed64Fixed64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(9).fixed64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).fixed64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapFixed64Fixed64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapFixed64Fixed64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.key = longToNumber(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = longToNumber(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapFixed64Fixed64Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapFixed64Fixed64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapFixed64Fixed64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapFixed64Fixed64Entry {
    return TestAllTypesProto2_MapFixed64Fixed64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapFixed64Fixed64Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapFixed64Fixed64Entry {
    const message = createBaseTestAllTypesProto2_MapFixed64Fixed64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapSfixed32Sfixed32Entry(): TestAllTypesProto2_MapSfixed32Sfixed32Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapSfixed32Sfixed32Entry = {
  encode(message: TestAllTypesProto2_MapSfixed32Sfixed32Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(13).sfixed32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).sfixed32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapSfixed32Sfixed32Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapSfixed32Sfixed32Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.key = reader.sfixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.sfixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapSfixed32Sfixed32Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapSfixed32Sfixed32Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapSfixed32Sfixed32Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapSfixed32Sfixed32Entry {
    return TestAllTypesProto2_MapSfixed32Sfixed32Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapSfixed32Sfixed32Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapSfixed32Sfixed32Entry {
    const message = createBaseTestAllTypesProto2_MapSfixed32Sfixed32Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapSfixed64Sfixed64Entry(): TestAllTypesProto2_MapSfixed64Sfixed64Entry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapSfixed64Sfixed64Entry = {
  encode(message: TestAllTypesProto2_MapSfixed64Sfixed64Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(9).sfixed64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).sfixed64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapSfixed64Sfixed64Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapSfixed64Sfixed64Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.key = longToNumber(reader.sfixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = longToNumber(reader.sfixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapSfixed64Sfixed64Entry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapSfixed64Sfixed64Entry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapSfixed64Sfixed64Entry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapSfixed64Sfixed64Entry {
    return TestAllTypesProto2_MapSfixed64Sfixed64Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapSfixed64Sfixed64Entry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapSfixed64Sfixed64Entry {
    const message = createBaseTestAllTypesProto2_MapSfixed64Sfixed64Entry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapInt32FloatEntry(): TestAllTypesProto2_MapInt32FloatEntry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapInt32FloatEntry = {
  encode(message: TestAllTypesProto2_MapInt32FloatEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapInt32FloatEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapInt32FloatEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapInt32FloatEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapInt32FloatEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt32FloatEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapInt32FloatEntry {
    return TestAllTypesProto2_MapInt32FloatEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt32FloatEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapInt32FloatEntry {
    const message = createBaseTestAllTypesProto2_MapInt32FloatEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapInt32DoubleEntry(): TestAllTypesProto2_MapInt32DoubleEntry {
  return { key: 0, value: 0 };
}

export const TestAllTypesProto2_MapInt32DoubleEntry = {
  encode(message: TestAllTypesProto2_MapInt32DoubleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapInt32DoubleEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapInt32DoubleEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapInt32DoubleEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MapInt32DoubleEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt32DoubleEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapInt32DoubleEntry {
    return TestAllTypesProto2_MapInt32DoubleEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapInt32DoubleEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapInt32DoubleEntry {
    const message = createBaseTestAllTypesProto2_MapInt32DoubleEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapBoolBoolEntry(): TestAllTypesProto2_MapBoolBoolEntry {
  return { key: false, value: false };
}

export const TestAllTypesProto2_MapBoolBoolEntry = {
  encode(message: TestAllTypesProto2_MapBoolBoolEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapBoolBoolEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapBoolBoolEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapBoolBoolEntry {
    return {
      key: isSet(object.key) ? Boolean(object.key) : false,
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: TestAllTypesProto2_MapBoolBoolEntry): unknown {
    const obj: any = {};
    if (message.key === true) {
      obj.key = message.key;
    }
    if (message.value === true) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapBoolBoolEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapBoolBoolEntry {
    return TestAllTypesProto2_MapBoolBoolEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapBoolBoolEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapBoolBoolEntry {
    const message = createBaseTestAllTypesProto2_MapBoolBoolEntry();
    message.key = object.key ?? false;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapStringStringEntry(): TestAllTypesProto2_MapStringStringEntry {
  return { key: "", value: "" };
}

export const TestAllTypesProto2_MapStringStringEntry = {
  encode(message: TestAllTypesProto2_MapStringStringEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapStringStringEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapStringStringEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapStringStringEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: TestAllTypesProto2_MapStringStringEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringStringEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapStringStringEntry {
    return TestAllTypesProto2_MapStringStringEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringStringEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapStringStringEntry {
    const message = createBaseTestAllTypesProto2_MapStringStringEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTestAllTypesProto2_MapStringBytesEntry(): TestAllTypesProto2_MapStringBytesEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const TestAllTypesProto2_MapStringBytesEntry = {
  encode(message: TestAllTypesProto2_MapStringBytesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapStringBytesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapStringBytesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapStringBytesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: TestAllTypesProto2_MapStringBytesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringBytesEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapStringBytesEntry {
    return TestAllTypesProto2_MapStringBytesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringBytesEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapStringBytesEntry {
    const message = createBaseTestAllTypesProto2_MapStringBytesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTestAllTypesProto2_MapStringNestedMessageEntry(): TestAllTypesProto2_MapStringNestedMessageEntry {
  return { key: "", value: undefined };
}

export const TestAllTypesProto2_MapStringNestedMessageEntry = {
  encode(
    message: TestAllTypesProto2_MapStringNestedMessageEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypesProto2_NestedMessage.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapStringNestedMessageEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapStringNestedMessageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = TestAllTypesProto2_NestedMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapStringNestedMessageEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? TestAllTypesProto2_NestedMessage.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestAllTypesProto2_MapStringNestedMessageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = TestAllTypesProto2_NestedMessage.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringNestedMessageEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapStringNestedMessageEntry {
    return TestAllTypesProto2_MapStringNestedMessageEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringNestedMessageEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapStringNestedMessageEntry {
    const message = createBaseTestAllTypesProto2_MapStringNestedMessageEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? TestAllTypesProto2_NestedMessage.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapStringForeignMessageEntry(): TestAllTypesProto2_MapStringForeignMessageEntry {
  return { key: "", value: undefined };
}

export const TestAllTypesProto2_MapStringForeignMessageEntry = {
  encode(
    message: TestAllTypesProto2_MapStringForeignMessageEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ForeignMessageProto2.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapStringForeignMessageEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapStringForeignMessageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ForeignMessageProto2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapStringForeignMessageEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ForeignMessageProto2.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestAllTypesProto2_MapStringForeignMessageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ForeignMessageProto2.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringForeignMessageEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapStringForeignMessageEntry {
    return TestAllTypesProto2_MapStringForeignMessageEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringForeignMessageEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapStringForeignMessageEntry {
    const message = createBaseTestAllTypesProto2_MapStringForeignMessageEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ForeignMessageProto2.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapStringNestedEnumEntry(): TestAllTypesProto2_MapStringNestedEnumEntry {
  return { key: "", value: 0 };
}

export const TestAllTypesProto2_MapStringNestedEnumEntry = {
  encode(message: TestAllTypesProto2_MapStringNestedEnumEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapStringNestedEnumEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapStringNestedEnumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapStringNestedEnumEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? testAllTypesProto2_NestedEnumFromJSON(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto2_MapStringNestedEnumEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = testAllTypesProto2_NestedEnumToJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringNestedEnumEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapStringNestedEnumEntry {
    return TestAllTypesProto2_MapStringNestedEnumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringNestedEnumEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapStringNestedEnumEntry {
    const message = createBaseTestAllTypesProto2_MapStringNestedEnumEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MapStringForeignEnumEntry(): TestAllTypesProto2_MapStringForeignEnumEntry {
  return { key: "", value: 0 };
}

export const TestAllTypesProto2_MapStringForeignEnumEntry = {
  encode(message: TestAllTypesProto2_MapStringForeignEnumEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MapStringForeignEnumEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MapStringForeignEnumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MapStringForeignEnumEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? foreignEnumProto2FromJSON(object.value) : 0,
    };
  },

  toJSON(message: TestAllTypesProto2_MapStringForeignEnumEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = foreignEnumProto2ToJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringForeignEnumEntry>, I>>(
    base?: I,
  ): TestAllTypesProto2_MapStringForeignEnumEntry {
    return TestAllTypesProto2_MapStringForeignEnumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MapStringForeignEnumEntry>, I>>(
    object: I,
  ): TestAllTypesProto2_MapStringForeignEnumEntry {
    const message = createBaseTestAllTypesProto2_MapStringForeignEnumEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_Data(): TestAllTypesProto2_Data {
  return { groupInt32: 0, groupUint32: 0 };
}

export const TestAllTypesProto2_Data = {
  encode(message: TestAllTypesProto2_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupInt32 !== 0) {
      writer.uint32(1616).int32(message.groupInt32);
    }
    if (message.groupUint32 !== 0) {
      writer.uint32(1624).uint32(message.groupUint32);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 202:
          if (tag !== 1616) {
            break;
          }

          message.groupInt32 = reader.int32();
          continue;
        case 203:
          if (tag !== 1624) {
            break;
          }

          message.groupUint32 = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_Data {
    return {
      groupInt32: isSet(object.groupInt32) ? Number(object.groupInt32) : 0,
      groupUint32: isSet(object.groupUint32) ? Number(object.groupUint32) : 0,
    };
  },

  toJSON(message: TestAllTypesProto2_Data): unknown {
    const obj: any = {};
    if (message.groupInt32 !== 0) {
      obj.groupInt32 = Math.round(message.groupInt32);
    }
    if (message.groupUint32 !== 0) {
      obj.groupUint32 = Math.round(message.groupUint32);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_Data>, I>>(base?: I): TestAllTypesProto2_Data {
    return TestAllTypesProto2_Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_Data>, I>>(object: I): TestAllTypesProto2_Data {
    const message = createBaseTestAllTypesProto2_Data();
    message.groupInt32 = object.groupInt32 ?? 0;
    message.groupUint32 = object.groupUint32 ?? 0;
    return message;
  },
};

function createBaseTestAllTypesProto2_MessageSetCorrect(): TestAllTypesProto2_MessageSetCorrect {
  return {};
}

export const TestAllTypesProto2_MessageSetCorrect = {
  encode(_: TestAllTypesProto2_MessageSetCorrect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MessageSetCorrect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MessageSetCorrect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TestAllTypesProto2_MessageSetCorrect {
    return {};
  },

  toJSON(_: TestAllTypesProto2_MessageSetCorrect): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MessageSetCorrect>, I>>(
    base?: I,
  ): TestAllTypesProto2_MessageSetCorrect {
    return TestAllTypesProto2_MessageSetCorrect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MessageSetCorrect>, I>>(
    _: I,
  ): TestAllTypesProto2_MessageSetCorrect {
    const message = createBaseTestAllTypesProto2_MessageSetCorrect();
    return message;
  },
};

function createBaseTestAllTypesProto2_MessageSetCorrectExtension1(): TestAllTypesProto2_MessageSetCorrectExtension1 {
  return { str: "" };
}

export const TestAllTypesProto2_MessageSetCorrectExtension1 = {
  encode(
    message: TestAllTypesProto2_MessageSetCorrectExtension1,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.str !== "") {
      writer.uint32(202).string(message.str);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MessageSetCorrectExtension1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MessageSetCorrectExtension1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 25:
          if (tag !== 202) {
            break;
          }

          message.str = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MessageSetCorrectExtension1 {
    return { str: isSet(object.str) ? String(object.str) : "" };
  },

  toJSON(message: TestAllTypesProto2_MessageSetCorrectExtension1): unknown {
    const obj: any = {};
    if (message.str !== "") {
      obj.str = message.str;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MessageSetCorrectExtension1>, I>>(
    base?: I,
  ): TestAllTypesProto2_MessageSetCorrectExtension1 {
    return TestAllTypesProto2_MessageSetCorrectExtension1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MessageSetCorrectExtension1>, I>>(
    object: I,
  ): TestAllTypesProto2_MessageSetCorrectExtension1 {
    const message = createBaseTestAllTypesProto2_MessageSetCorrectExtension1();
    message.str = object.str ?? "";
    return message;
  },
};

function createBaseTestAllTypesProto2_MessageSetCorrectExtension2(): TestAllTypesProto2_MessageSetCorrectExtension2 {
  return { i: 0 };
}

export const TestAllTypesProto2_MessageSetCorrectExtension2 = {
  encode(
    message: TestAllTypesProto2_MessageSetCorrectExtension2,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.i !== 0) {
      writer.uint32(72).int32(message.i);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypesProto2_MessageSetCorrectExtension2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllTypesProto2_MessageSetCorrectExtension2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          if (tag !== 72) {
            break;
          }

          message.i = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllTypesProto2_MessageSetCorrectExtension2 {
    return { i: isSet(object.i) ? Number(object.i) : 0 };
  },

  toJSON(message: TestAllTypesProto2_MessageSetCorrectExtension2): unknown {
    const obj: any = {};
    if (message.i !== 0) {
      obj.i = Math.round(message.i);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllTypesProto2_MessageSetCorrectExtension2>, I>>(
    base?: I,
  ): TestAllTypesProto2_MessageSetCorrectExtension2 {
    return TestAllTypesProto2_MessageSetCorrectExtension2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllTypesProto2_MessageSetCorrectExtension2>, I>>(
    object: I,
  ): TestAllTypesProto2_MessageSetCorrectExtension2 {
    const message = createBaseTestAllTypesProto2_MessageSetCorrectExtension2();
    message.i = object.i ?? 0;
    return message;
  },
};

function createBaseForeignMessageProto2(): ForeignMessageProto2 {
  return { c: 0 };
}

export const ForeignMessageProto2 = {
  encode(message: ForeignMessageProto2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.c !== 0) {
      writer.uint32(8).int32(message.c);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForeignMessageProto2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForeignMessageProto2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.c = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ForeignMessageProto2 {
    return { c: isSet(object.c) ? Number(object.c) : 0 };
  },

  toJSON(message: ForeignMessageProto2): unknown {
    const obj: any = {};
    if (message.c !== 0) {
      obj.c = Math.round(message.c);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ForeignMessageProto2>, I>>(base?: I): ForeignMessageProto2 {
    return ForeignMessageProto2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ForeignMessageProto2>, I>>(object: I): ForeignMessageProto2 {
    const message = createBaseForeignMessageProto2();
    message.c = object.c ?? 0;
    return message;
  },
};

function createBaseUnknownToTestAllTypes(): UnknownToTestAllTypes {
  return {
    optionalInt32: 0,
    optionalString: "",
    nestedMessage: undefined,
    optionalgroup: undefined,
    optionalBool: false,
    repeatedInt32: [],
  };
}

export const UnknownToTestAllTypes = {
  encode(message: UnknownToTestAllTypes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.optionalInt32 !== 0) {
      writer.uint32(8008).int32(message.optionalInt32);
    }
    if (message.optionalString !== "") {
      writer.uint32(8018).string(message.optionalString);
    }
    if (message.nestedMessage !== undefined) {
      ForeignMessageProto2.encode(message.nestedMessage, writer.uint32(8026).fork()).ldelim();
    }
    if (message.optionalgroup !== undefined) {
      UnknownToTestAllTypes_OptionalGroup.encode(message.optionalgroup, writer.uint32(8035)).uint32(8036);
    }
    if (message.optionalBool === true) {
      writer.uint32(8048).bool(message.optionalBool);
    }
    writer.uint32(8090).fork();
    for (const v of message.repeatedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnknownToTestAllTypes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownToTestAllTypes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1001:
          if (tag !== 8008) {
            break;
          }

          message.optionalInt32 = reader.int32();
          continue;
        case 1002:
          if (tag !== 8018) {
            break;
          }

          message.optionalString = reader.string();
          continue;
        case 1003:
          if (tag !== 8026) {
            break;
          }

          message.nestedMessage = ForeignMessageProto2.decode(reader, reader.uint32());
          continue;
        case 1004:
          if (tag !== 8035) {
            break;
          }

          message.optionalgroup = UnknownToTestAllTypes_OptionalGroup.decode(reader);
          continue;
        case 1006:
          if (tag !== 8048) {
            break;
          }

          message.optionalBool = reader.bool();
          continue;
        case 1011:
          if (tag === 8088) {
            message.repeatedInt32.push(reader.int32());

            continue;
          }

          if (tag === 8090) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt32.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnknownToTestAllTypes {
    return {
      optionalInt32: isSet(object.optionalInt32) ? Number(object.optionalInt32) : 0,
      optionalString: isSet(object.optionalString) ? String(object.optionalString) : "",
      nestedMessage: isSet(object.nestedMessage) ? ForeignMessageProto2.fromJSON(object.nestedMessage) : undefined,
      optionalgroup: isSet(object.optionalgroup)
        ? UnknownToTestAllTypes_OptionalGroup.fromJSON(object.optionalgroup)
        : undefined,
      optionalBool: isSet(object.optionalBool) ? Boolean(object.optionalBool) : false,
      repeatedInt32: Array.isArray(object?.repeatedInt32) ? object.repeatedInt32.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: UnknownToTestAllTypes): unknown {
    const obj: any = {};
    if (message.optionalInt32 !== 0) {
      obj.optionalInt32 = Math.round(message.optionalInt32);
    }
    if (message.optionalString !== "") {
      obj.optionalString = message.optionalString;
    }
    if (message.nestedMessage !== undefined) {
      obj.nestedMessage = ForeignMessageProto2.toJSON(message.nestedMessage);
    }
    if (message.optionalgroup !== undefined) {
      obj.optionalgroup = UnknownToTestAllTypes_OptionalGroup.toJSON(message.optionalgroup);
    }
    if (message.optionalBool === true) {
      obj.optionalBool = message.optionalBool;
    }
    if (message.repeatedInt32?.length) {
      obj.repeatedInt32 = message.repeatedInt32.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnknownToTestAllTypes>, I>>(base?: I): UnknownToTestAllTypes {
    return UnknownToTestAllTypes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnknownToTestAllTypes>, I>>(object: I): UnknownToTestAllTypes {
    const message = createBaseUnknownToTestAllTypes();
    message.optionalInt32 = object.optionalInt32 ?? 0;
    message.optionalString = object.optionalString ?? "";
    message.nestedMessage = (object.nestedMessage !== undefined && object.nestedMessage !== null)
      ? ForeignMessageProto2.fromPartial(object.nestedMessage)
      : undefined;
    message.optionalgroup = (object.optionalgroup !== undefined && object.optionalgroup !== null)
      ? UnknownToTestAllTypes_OptionalGroup.fromPartial(object.optionalgroup)
      : undefined;
    message.optionalBool = object.optionalBool ?? false;
    message.repeatedInt32 = object.repeatedInt32?.map((e) => e) || [];
    return message;
  },
};

function createBaseUnknownToTestAllTypes_OptionalGroup(): UnknownToTestAllTypes_OptionalGroup {
  return { a: 0 };
}

export const UnknownToTestAllTypes_OptionalGroup = {
  encode(message: UnknownToTestAllTypes_OptionalGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== 0) {
      writer.uint32(8).int32(message.a);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnknownToTestAllTypes_OptionalGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownToTestAllTypes_OptionalGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.a = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnknownToTestAllTypes_OptionalGroup {
    return { a: isSet(object.a) ? Number(object.a) : 0 };
  },

  toJSON(message: UnknownToTestAllTypes_OptionalGroup): unknown {
    const obj: any = {};
    if (message.a !== 0) {
      obj.a = Math.round(message.a);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnknownToTestAllTypes_OptionalGroup>, I>>(
    base?: I,
  ): UnknownToTestAllTypes_OptionalGroup {
    return UnknownToTestAllTypes_OptionalGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnknownToTestAllTypes_OptionalGroup>, I>>(
    object: I,
  ): UnknownToTestAllTypes_OptionalGroup {
    const message = createBaseUnknownToTestAllTypes_OptionalGroup();
    message.a = object.a ?? 0;
    return message;
  },
};

function createBaseNullHypothesisProto2(): NullHypothesisProto2 {
  return {};
}

export const NullHypothesisProto2 = {
  encode(_: NullHypothesisProto2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NullHypothesisProto2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNullHypothesisProto2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NullHypothesisProto2 {
    return {};
  },

  toJSON(_: NullHypothesisProto2): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NullHypothesisProto2>, I>>(base?: I): NullHypothesisProto2 {
    return NullHypothesisProto2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NullHypothesisProto2>, I>>(_: I): NullHypothesisProto2 {
    const message = createBaseNullHypothesisProto2();
    return message;
  },
};

function createBaseEnumOnlyProto2(): EnumOnlyProto2 {
  return {};
}

export const EnumOnlyProto2 = {
  encode(_: EnumOnlyProto2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOnlyProto2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOnlyProto2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EnumOnlyProto2 {
    return {};
  },

  toJSON(_: EnumOnlyProto2): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumOnlyProto2>, I>>(base?: I): EnumOnlyProto2 {
    return EnumOnlyProto2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumOnlyProto2>, I>>(_: I): EnumOnlyProto2 {
    const message = createBaseEnumOnlyProto2();
    return message;
  },
};

function createBaseOneStringProto2(): OneStringProto2 {
  return { data: "" };
}

export const OneStringProto2 = {
  encode(message: OneStringProto2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneStringProto2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneStringProto2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneStringProto2 {
    return { data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: OneStringProto2): unknown {
    const obj: any = {};
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneStringProto2>, I>>(base?: I): OneStringProto2 {
    return OneStringProto2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneStringProto2>, I>>(object: I): OneStringProto2 {
    const message = createBaseOneStringProto2();
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseProtoWithKeywords(): ProtoWithKeywords {
  return { inline: 0, concept: "", requires: [] };
}

export const ProtoWithKeywords = {
  encode(message: ProtoWithKeywords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inline !== 0) {
      writer.uint32(8).int32(message.inline);
    }
    if (message.concept !== "") {
      writer.uint32(18).string(message.concept);
    }
    for (const v of message.requires) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoWithKeywords {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoWithKeywords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inline = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.concept = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requires.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoWithKeywords {
    return {
      inline: isSet(object.inline) ? Number(object.inline) : 0,
      concept: isSet(object.concept) ? String(object.concept) : "",
      requires: Array.isArray(object?.requires) ? object.requires.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ProtoWithKeywords): unknown {
    const obj: any = {};
    if (message.inline !== 0) {
      obj.inline = Math.round(message.inline);
    }
    if (message.concept !== "") {
      obj.concept = message.concept;
    }
    if (message.requires?.length) {
      obj.requires = message.requires;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoWithKeywords>, I>>(base?: I): ProtoWithKeywords {
    return ProtoWithKeywords.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoWithKeywords>, I>>(object: I): ProtoWithKeywords {
    const message = createBaseProtoWithKeywords();
    message.inline = object.inline ?? 0;
    message.concept = object.concept ?? "";
    message.requires = object.requires?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestAllRequiredTypesProto2(): TestAllRequiredTypesProto2 {
  return {
    requiredInt32: 0,
    requiredInt64: 0,
    requiredUint32: 0,
    requiredUint64: 0,
    requiredSint32: 0,
    requiredSint64: 0,
    requiredFixed32: 0,
    requiredFixed64: 0,
    requiredSfixed32: 0,
    requiredSfixed64: 0,
    requiredFloat: 0,
    requiredDouble: 0,
    requiredBool: false,
    requiredString: "",
    requiredBytes: new Uint8Array(0),
    requiredNestedMessage: undefined,
    requiredForeignMessage: undefined,
    requiredNestedEnum: 0,
    requiredForeignEnum: 0,
    requiredStringPiece: "",
    requiredCord: "",
    recursiveMessage: undefined,
    optionalRecursiveMessage: undefined,
    data: undefined,
    defaultInt32: 0,
    defaultInt64: 0,
    defaultUint32: 0,
    defaultUint64: 0,
    defaultSint32: 0,
    defaultSint64: 0,
    defaultFixed32: 0,
    defaultFixed64: 0,
    defaultSfixed32: 0,
    defaultSfixed64: 0,
    defaultFloat: 0,
    defaultDouble: 0,
    defaultBool: false,
    defaultString: "",
    defaultBytes: new Uint8Array(0),
  };
}

export const TestAllRequiredTypesProto2 = {
  encode(message: TestAllRequiredTypesProto2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requiredInt32 !== 0) {
      writer.uint32(8).int32(message.requiredInt32);
    }
    if (message.requiredInt64 !== 0) {
      writer.uint32(16).int64(message.requiredInt64);
    }
    if (message.requiredUint32 !== 0) {
      writer.uint32(24).uint32(message.requiredUint32);
    }
    if (message.requiredUint64 !== 0) {
      writer.uint32(32).uint64(message.requiredUint64);
    }
    if (message.requiredSint32 !== 0) {
      writer.uint32(40).sint32(message.requiredSint32);
    }
    if (message.requiredSint64 !== 0) {
      writer.uint32(48).sint64(message.requiredSint64);
    }
    if (message.requiredFixed32 !== 0) {
      writer.uint32(61).fixed32(message.requiredFixed32);
    }
    if (message.requiredFixed64 !== 0) {
      writer.uint32(65).fixed64(message.requiredFixed64);
    }
    if (message.requiredSfixed32 !== 0) {
      writer.uint32(77).sfixed32(message.requiredSfixed32);
    }
    if (message.requiredSfixed64 !== 0) {
      writer.uint32(81).sfixed64(message.requiredSfixed64);
    }
    if (message.requiredFloat !== 0) {
      writer.uint32(93).float(message.requiredFloat);
    }
    if (message.requiredDouble !== 0) {
      writer.uint32(97).double(message.requiredDouble);
    }
    if (message.requiredBool === true) {
      writer.uint32(104).bool(message.requiredBool);
    }
    if (message.requiredString !== "") {
      writer.uint32(114).string(message.requiredString);
    }
    if (message.requiredBytes.length !== 0) {
      writer.uint32(122).bytes(message.requiredBytes);
    }
    if (message.requiredNestedMessage !== undefined) {
      TestAllRequiredTypesProto2_NestedMessage.encode(message.requiredNestedMessage, writer.uint32(146).fork())
        .ldelim();
    }
    if (message.requiredForeignMessage !== undefined) {
      ForeignMessageProto2.encode(message.requiredForeignMessage, writer.uint32(154).fork()).ldelim();
    }
    if (message.requiredNestedEnum !== 0) {
      writer.uint32(168).int32(message.requiredNestedEnum);
    }
    if (message.requiredForeignEnum !== 0) {
      writer.uint32(176).int32(message.requiredForeignEnum);
    }
    if (message.requiredStringPiece !== "") {
      writer.uint32(194).string(message.requiredStringPiece);
    }
    if (message.requiredCord !== "") {
      writer.uint32(202).string(message.requiredCord);
    }
    if (message.recursiveMessage !== undefined) {
      TestAllRequiredTypesProto2.encode(message.recursiveMessage, writer.uint32(218).fork()).ldelim();
    }
    if (message.optionalRecursiveMessage !== undefined) {
      TestAllRequiredTypesProto2.encode(message.optionalRecursiveMessage, writer.uint32(226).fork()).ldelim();
    }
    if (message.data !== undefined) {
      TestAllRequiredTypesProto2_Data.encode(message.data, writer.uint32(1611)).uint32(1612);
    }
    if (message.defaultInt32 !== 0) {
      writer.uint32(1928).int32(message.defaultInt32);
    }
    if (message.defaultInt64 !== 0) {
      writer.uint32(1936).int64(message.defaultInt64);
    }
    if (message.defaultUint32 !== 0) {
      writer.uint32(1944).uint32(message.defaultUint32);
    }
    if (message.defaultUint64 !== 0) {
      writer.uint32(1952).uint64(message.defaultUint64);
    }
    if (message.defaultSint32 !== 0) {
      writer.uint32(1960).sint32(message.defaultSint32);
    }
    if (message.defaultSint64 !== 0) {
      writer.uint32(1968).sint64(message.defaultSint64);
    }
    if (message.defaultFixed32 !== 0) {
      writer.uint32(1981).fixed32(message.defaultFixed32);
    }
    if (message.defaultFixed64 !== 0) {
      writer.uint32(1985).fixed64(message.defaultFixed64);
    }
    if (message.defaultSfixed32 !== 0) {
      writer.uint32(1997).sfixed32(message.defaultSfixed32);
    }
    if (message.defaultSfixed64 !== 0) {
      writer.uint32(2001).sfixed64(message.defaultSfixed64);
    }
    if (message.defaultFloat !== 0) {
      writer.uint32(2013).float(message.defaultFloat);
    }
    if (message.defaultDouble !== 0) {
      writer.uint32(2017).double(message.defaultDouble);
    }
    if (message.defaultBool === true) {
      writer.uint32(2024).bool(message.defaultBool);
    }
    if (message.defaultString !== "") {
      writer.uint32(2034).string(message.defaultString);
    }
    if (message.defaultBytes.length !== 0) {
      writer.uint32(2042).bytes(message.defaultBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllRequiredTypesProto2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllRequiredTypesProto2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.requiredInt32 = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.requiredInt64 = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requiredUint32 = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.requiredUint64 = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.requiredSint32 = reader.sint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.requiredSint64 = longToNumber(reader.sint64() as Long);
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.requiredFixed32 = reader.fixed32();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.requiredFixed64 = longToNumber(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.requiredSfixed32 = reader.sfixed32();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.requiredSfixed64 = longToNumber(reader.sfixed64() as Long);
          continue;
        case 11:
          if (tag !== 93) {
            break;
          }

          message.requiredFloat = reader.float();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.requiredDouble = reader.double();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.requiredBool = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.requiredString = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.requiredBytes = reader.bytes();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.requiredNestedMessage = TestAllRequiredTypesProto2_NestedMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.requiredForeignMessage = ForeignMessageProto2.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.requiredNestedEnum = reader.int32() as any;
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.requiredForeignEnum = reader.int32() as any;
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.requiredStringPiece = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.requiredCord = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.recursiveMessage = TestAllRequiredTypesProto2.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.optionalRecursiveMessage = TestAllRequiredTypesProto2.decode(reader, reader.uint32());
          continue;
        case 201:
          if (tag !== 1611) {
            break;
          }

          message.data = TestAllRequiredTypesProto2_Data.decode(reader);
          continue;
        case 241:
          if (tag !== 1928) {
            break;
          }

          message.defaultInt32 = reader.int32();
          continue;
        case 242:
          if (tag !== 1936) {
            break;
          }

          message.defaultInt64 = longToNumber(reader.int64() as Long);
          continue;
        case 243:
          if (tag !== 1944) {
            break;
          }

          message.defaultUint32 = reader.uint32();
          continue;
        case 244:
          if (tag !== 1952) {
            break;
          }

          message.defaultUint64 = longToNumber(reader.uint64() as Long);
          continue;
        case 245:
          if (tag !== 1960) {
            break;
          }

          message.defaultSint32 = reader.sint32();
          continue;
        case 246:
          if (tag !== 1968) {
            break;
          }

          message.defaultSint64 = longToNumber(reader.sint64() as Long);
          continue;
        case 247:
          if (tag !== 1981) {
            break;
          }

          message.defaultFixed32 = reader.fixed32();
          continue;
        case 248:
          if (tag !== 1985) {
            break;
          }

          message.defaultFixed64 = longToNumber(reader.fixed64() as Long);
          continue;
        case 249:
          if (tag !== 1997) {
            break;
          }

          message.defaultSfixed32 = reader.sfixed32();
          continue;
        case 250:
          if (tag !== 2001) {
            break;
          }

          message.defaultSfixed64 = longToNumber(reader.sfixed64() as Long);
          continue;
        case 251:
          if (tag !== 2013) {
            break;
          }

          message.defaultFloat = reader.float();
          continue;
        case 252:
          if (tag !== 2017) {
            break;
          }

          message.defaultDouble = reader.double();
          continue;
        case 253:
          if (tag !== 2024) {
            break;
          }

          message.defaultBool = reader.bool();
          continue;
        case 254:
          if (tag !== 2034) {
            break;
          }

          message.defaultString = reader.string();
          continue;
        case 255:
          if (tag !== 2042) {
            break;
          }

          message.defaultBytes = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllRequiredTypesProto2 {
    return {
      requiredInt32: isSet(object.requiredInt32) ? Number(object.requiredInt32) : 0,
      requiredInt64: isSet(object.requiredInt64) ? Number(object.requiredInt64) : 0,
      requiredUint32: isSet(object.requiredUint32) ? Number(object.requiredUint32) : 0,
      requiredUint64: isSet(object.requiredUint64) ? Number(object.requiredUint64) : 0,
      requiredSint32: isSet(object.requiredSint32) ? Number(object.requiredSint32) : 0,
      requiredSint64: isSet(object.requiredSint64) ? Number(object.requiredSint64) : 0,
      requiredFixed32: isSet(object.requiredFixed32) ? Number(object.requiredFixed32) : 0,
      requiredFixed64: isSet(object.requiredFixed64) ? Number(object.requiredFixed64) : 0,
      requiredSfixed32: isSet(object.requiredSfixed32) ? Number(object.requiredSfixed32) : 0,
      requiredSfixed64: isSet(object.requiredSfixed64) ? Number(object.requiredSfixed64) : 0,
      requiredFloat: isSet(object.requiredFloat) ? Number(object.requiredFloat) : 0,
      requiredDouble: isSet(object.requiredDouble) ? Number(object.requiredDouble) : 0,
      requiredBool: isSet(object.requiredBool) ? Boolean(object.requiredBool) : false,
      requiredString: isSet(object.requiredString) ? String(object.requiredString) : "",
      requiredBytes: isSet(object.requiredBytes) ? bytesFromBase64(object.requiredBytes) : new Uint8Array(0),
      requiredNestedMessage: isSet(object.requiredNestedMessage)
        ? TestAllRequiredTypesProto2_NestedMessage.fromJSON(object.requiredNestedMessage)
        : undefined,
      requiredForeignMessage: isSet(object.requiredForeignMessage)
        ? ForeignMessageProto2.fromJSON(object.requiredForeignMessage)
        : undefined,
      requiredNestedEnum: isSet(object.requiredNestedEnum)
        ? testAllRequiredTypesProto2_NestedEnumFromJSON(object.requiredNestedEnum)
        : 0,
      requiredForeignEnum: isSet(object.requiredForeignEnum)
        ? foreignEnumProto2FromJSON(object.requiredForeignEnum)
        : 0,
      requiredStringPiece: isSet(object.requiredStringPiece) ? String(object.requiredStringPiece) : "",
      requiredCord: isSet(object.requiredCord) ? String(object.requiredCord) : "",
      recursiveMessage: isSet(object.recursiveMessage)
        ? TestAllRequiredTypesProto2.fromJSON(object.recursiveMessage)
        : undefined,
      optionalRecursiveMessage: isSet(object.optionalRecursiveMessage)
        ? TestAllRequiredTypesProto2.fromJSON(object.optionalRecursiveMessage)
        : undefined,
      data: isSet(object.data) ? TestAllRequiredTypesProto2_Data.fromJSON(object.data) : undefined,
      defaultInt32: isSet(object.defaultInt32) ? Number(object.defaultInt32) : 0,
      defaultInt64: isSet(object.defaultInt64) ? Number(object.defaultInt64) : 0,
      defaultUint32: isSet(object.defaultUint32) ? Number(object.defaultUint32) : 0,
      defaultUint64: isSet(object.defaultUint64) ? Number(object.defaultUint64) : 0,
      defaultSint32: isSet(object.defaultSint32) ? Number(object.defaultSint32) : 0,
      defaultSint64: isSet(object.defaultSint64) ? Number(object.defaultSint64) : 0,
      defaultFixed32: isSet(object.defaultFixed32) ? Number(object.defaultFixed32) : 0,
      defaultFixed64: isSet(object.defaultFixed64) ? Number(object.defaultFixed64) : 0,
      defaultSfixed32: isSet(object.defaultSfixed32) ? Number(object.defaultSfixed32) : 0,
      defaultSfixed64: isSet(object.defaultSfixed64) ? Number(object.defaultSfixed64) : 0,
      defaultFloat: isSet(object.defaultFloat) ? Number(object.defaultFloat) : 0,
      defaultDouble: isSet(object.defaultDouble) ? Number(object.defaultDouble) : 0,
      defaultBool: isSet(object.defaultBool) ? Boolean(object.defaultBool) : false,
      defaultString: isSet(object.defaultString) ? String(object.defaultString) : "",
      defaultBytes: isSet(object.defaultBytes) ? bytesFromBase64(object.defaultBytes) : new Uint8Array(0),
    };
  },

  toJSON(message: TestAllRequiredTypesProto2): unknown {
    const obj: any = {};
    if (message.requiredInt32 !== 0) {
      obj.requiredInt32 = Math.round(message.requiredInt32);
    }
    if (message.requiredInt64 !== 0) {
      obj.requiredInt64 = Math.round(message.requiredInt64);
    }
    if (message.requiredUint32 !== 0) {
      obj.requiredUint32 = Math.round(message.requiredUint32);
    }
    if (message.requiredUint64 !== 0) {
      obj.requiredUint64 = Math.round(message.requiredUint64);
    }
    if (message.requiredSint32 !== 0) {
      obj.requiredSint32 = Math.round(message.requiredSint32);
    }
    if (message.requiredSint64 !== 0) {
      obj.requiredSint64 = Math.round(message.requiredSint64);
    }
    if (message.requiredFixed32 !== 0) {
      obj.requiredFixed32 = Math.round(message.requiredFixed32);
    }
    if (message.requiredFixed64 !== 0) {
      obj.requiredFixed64 = Math.round(message.requiredFixed64);
    }
    if (message.requiredSfixed32 !== 0) {
      obj.requiredSfixed32 = Math.round(message.requiredSfixed32);
    }
    if (message.requiredSfixed64 !== 0) {
      obj.requiredSfixed64 = Math.round(message.requiredSfixed64);
    }
    if (message.requiredFloat !== 0) {
      obj.requiredFloat = message.requiredFloat;
    }
    if (message.requiredDouble !== 0) {
      obj.requiredDouble = message.requiredDouble;
    }
    if (message.requiredBool === true) {
      obj.requiredBool = message.requiredBool;
    }
    if (message.requiredString !== "") {
      obj.requiredString = message.requiredString;
    }
    if (message.requiredBytes.length !== 0) {
      obj.requiredBytes = base64FromBytes(message.requiredBytes);
    }
    if (message.requiredNestedMessage !== undefined) {
      obj.requiredNestedMessage = TestAllRequiredTypesProto2_NestedMessage.toJSON(message.requiredNestedMessage);
    }
    if (message.requiredForeignMessage !== undefined) {
      obj.requiredForeignMessage = ForeignMessageProto2.toJSON(message.requiredForeignMessage);
    }
    if (message.requiredNestedEnum !== 0) {
      obj.requiredNestedEnum = testAllRequiredTypesProto2_NestedEnumToJSON(message.requiredNestedEnum);
    }
    if (message.requiredForeignEnum !== 0) {
      obj.requiredForeignEnum = foreignEnumProto2ToJSON(message.requiredForeignEnum);
    }
    if (message.requiredStringPiece !== "") {
      obj.requiredStringPiece = message.requiredStringPiece;
    }
    if (message.requiredCord !== "") {
      obj.requiredCord = message.requiredCord;
    }
    if (message.recursiveMessage !== undefined) {
      obj.recursiveMessage = TestAllRequiredTypesProto2.toJSON(message.recursiveMessage);
    }
    if (message.optionalRecursiveMessage !== undefined) {
      obj.optionalRecursiveMessage = TestAllRequiredTypesProto2.toJSON(message.optionalRecursiveMessage);
    }
    if (message.data !== undefined) {
      obj.data = TestAllRequiredTypesProto2_Data.toJSON(message.data);
    }
    if (message.defaultInt32 !== 0) {
      obj.defaultInt32 = Math.round(message.defaultInt32);
    }
    if (message.defaultInt64 !== 0) {
      obj.defaultInt64 = Math.round(message.defaultInt64);
    }
    if (message.defaultUint32 !== 0) {
      obj.defaultUint32 = Math.round(message.defaultUint32);
    }
    if (message.defaultUint64 !== 0) {
      obj.defaultUint64 = Math.round(message.defaultUint64);
    }
    if (message.defaultSint32 !== 0) {
      obj.defaultSint32 = Math.round(message.defaultSint32);
    }
    if (message.defaultSint64 !== 0) {
      obj.defaultSint64 = Math.round(message.defaultSint64);
    }
    if (message.defaultFixed32 !== 0) {
      obj.defaultFixed32 = Math.round(message.defaultFixed32);
    }
    if (message.defaultFixed64 !== 0) {
      obj.defaultFixed64 = Math.round(message.defaultFixed64);
    }
    if (message.defaultSfixed32 !== 0) {
      obj.defaultSfixed32 = Math.round(message.defaultSfixed32);
    }
    if (message.defaultSfixed64 !== 0) {
      obj.defaultSfixed64 = Math.round(message.defaultSfixed64);
    }
    if (message.defaultFloat !== 0) {
      obj.defaultFloat = message.defaultFloat;
    }
    if (message.defaultDouble !== 0) {
      obj.defaultDouble = message.defaultDouble;
    }
    if (message.defaultBool === true) {
      obj.defaultBool = message.defaultBool;
    }
    if (message.defaultString !== "") {
      obj.defaultString = message.defaultString;
    }
    if (message.defaultBytes.length !== 0) {
      obj.defaultBytes = base64FromBytes(message.defaultBytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllRequiredTypesProto2>, I>>(base?: I): TestAllRequiredTypesProto2 {
    return TestAllRequiredTypesProto2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllRequiredTypesProto2>, I>>(object: I): TestAllRequiredTypesProto2 {
    const message = createBaseTestAllRequiredTypesProto2();
    message.requiredInt32 = object.requiredInt32 ?? 0;
    message.requiredInt64 = object.requiredInt64 ?? 0;
    message.requiredUint32 = object.requiredUint32 ?? 0;
    message.requiredUint64 = object.requiredUint64 ?? 0;
    message.requiredSint32 = object.requiredSint32 ?? 0;
    message.requiredSint64 = object.requiredSint64 ?? 0;
    message.requiredFixed32 = object.requiredFixed32 ?? 0;
    message.requiredFixed64 = object.requiredFixed64 ?? 0;
    message.requiredSfixed32 = object.requiredSfixed32 ?? 0;
    message.requiredSfixed64 = object.requiredSfixed64 ?? 0;
    message.requiredFloat = object.requiredFloat ?? 0;
    message.requiredDouble = object.requiredDouble ?? 0;
    message.requiredBool = object.requiredBool ?? false;
    message.requiredString = object.requiredString ?? "";
    message.requiredBytes = object.requiredBytes ?? new Uint8Array(0);
    message.requiredNestedMessage =
      (object.requiredNestedMessage !== undefined && object.requiredNestedMessage !== null)
        ? TestAllRequiredTypesProto2_NestedMessage.fromPartial(object.requiredNestedMessage)
        : undefined;
    message.requiredForeignMessage =
      (object.requiredForeignMessage !== undefined && object.requiredForeignMessage !== null)
        ? ForeignMessageProto2.fromPartial(object.requiredForeignMessage)
        : undefined;
    message.requiredNestedEnum = object.requiredNestedEnum ?? 0;
    message.requiredForeignEnum = object.requiredForeignEnum ?? 0;
    message.requiredStringPiece = object.requiredStringPiece ?? "";
    message.requiredCord = object.requiredCord ?? "";
    message.recursiveMessage = (object.recursiveMessage !== undefined && object.recursiveMessage !== null)
      ? TestAllRequiredTypesProto2.fromPartial(object.recursiveMessage)
      : undefined;
    message.optionalRecursiveMessage =
      (object.optionalRecursiveMessage !== undefined && object.optionalRecursiveMessage !== null)
        ? TestAllRequiredTypesProto2.fromPartial(object.optionalRecursiveMessage)
        : undefined;
    message.data = (object.data !== undefined && object.data !== null)
      ? TestAllRequiredTypesProto2_Data.fromPartial(object.data)
      : undefined;
    message.defaultInt32 = object.defaultInt32 ?? 0;
    message.defaultInt64 = object.defaultInt64 ?? 0;
    message.defaultUint32 = object.defaultUint32 ?? 0;
    message.defaultUint64 = object.defaultUint64 ?? 0;
    message.defaultSint32 = object.defaultSint32 ?? 0;
    message.defaultSint64 = object.defaultSint64 ?? 0;
    message.defaultFixed32 = object.defaultFixed32 ?? 0;
    message.defaultFixed64 = object.defaultFixed64 ?? 0;
    message.defaultSfixed32 = object.defaultSfixed32 ?? 0;
    message.defaultSfixed64 = object.defaultSfixed64 ?? 0;
    message.defaultFloat = object.defaultFloat ?? 0;
    message.defaultDouble = object.defaultDouble ?? 0;
    message.defaultBool = object.defaultBool ?? false;
    message.defaultString = object.defaultString ?? "";
    message.defaultBytes = object.defaultBytes ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTestAllRequiredTypesProto2_NestedMessage(): TestAllRequiredTypesProto2_NestedMessage {
  return { a: 0, corecursive: undefined, optionalCorecursive: undefined };
}

export const TestAllRequiredTypesProto2_NestedMessage = {
  encode(message: TestAllRequiredTypesProto2_NestedMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== 0) {
      writer.uint32(8).int32(message.a);
    }
    if (message.corecursive !== undefined) {
      TestAllRequiredTypesProto2.encode(message.corecursive, writer.uint32(18).fork()).ldelim();
    }
    if (message.optionalCorecursive !== undefined) {
      TestAllRequiredTypesProto2.encode(message.optionalCorecursive, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllRequiredTypesProto2_NestedMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllRequiredTypesProto2_NestedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.a = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.corecursive = TestAllRequiredTypesProto2.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.optionalCorecursive = TestAllRequiredTypesProto2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllRequiredTypesProto2_NestedMessage {
    return {
      a: isSet(object.a) ? Number(object.a) : 0,
      corecursive: isSet(object.corecursive) ? TestAllRequiredTypesProto2.fromJSON(object.corecursive) : undefined,
      optionalCorecursive: isSet(object.optionalCorecursive)
        ? TestAllRequiredTypesProto2.fromJSON(object.optionalCorecursive)
        : undefined,
    };
  },

  toJSON(message: TestAllRequiredTypesProto2_NestedMessage): unknown {
    const obj: any = {};
    if (message.a !== 0) {
      obj.a = Math.round(message.a);
    }
    if (message.corecursive !== undefined) {
      obj.corecursive = TestAllRequiredTypesProto2.toJSON(message.corecursive);
    }
    if (message.optionalCorecursive !== undefined) {
      obj.optionalCorecursive = TestAllRequiredTypesProto2.toJSON(message.optionalCorecursive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_NestedMessage>, I>>(
    base?: I,
  ): TestAllRequiredTypesProto2_NestedMessage {
    return TestAllRequiredTypesProto2_NestedMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_NestedMessage>, I>>(
    object: I,
  ): TestAllRequiredTypesProto2_NestedMessage {
    const message = createBaseTestAllRequiredTypesProto2_NestedMessage();
    message.a = object.a ?? 0;
    message.corecursive = (object.corecursive !== undefined && object.corecursive !== null)
      ? TestAllRequiredTypesProto2.fromPartial(object.corecursive)
      : undefined;
    message.optionalCorecursive = (object.optionalCorecursive !== undefined && object.optionalCorecursive !== null)
      ? TestAllRequiredTypesProto2.fromPartial(object.optionalCorecursive)
      : undefined;
    return message;
  },
};

function createBaseTestAllRequiredTypesProto2_Data(): TestAllRequiredTypesProto2_Data {
  return { groupInt32: 0, groupUint32: 0 };
}

export const TestAllRequiredTypesProto2_Data = {
  encode(message: TestAllRequiredTypesProto2_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupInt32 !== 0) {
      writer.uint32(1616).int32(message.groupInt32);
    }
    if (message.groupUint32 !== 0) {
      writer.uint32(1624).uint32(message.groupUint32);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllRequiredTypesProto2_Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllRequiredTypesProto2_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 202:
          if (tag !== 1616) {
            break;
          }

          message.groupInt32 = reader.int32();
          continue;
        case 203:
          if (tag !== 1624) {
            break;
          }

          message.groupUint32 = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllRequiredTypesProto2_Data {
    return {
      groupInt32: isSet(object.groupInt32) ? Number(object.groupInt32) : 0,
      groupUint32: isSet(object.groupUint32) ? Number(object.groupUint32) : 0,
    };
  },

  toJSON(message: TestAllRequiredTypesProto2_Data): unknown {
    const obj: any = {};
    if (message.groupInt32 !== 0) {
      obj.groupInt32 = Math.round(message.groupInt32);
    }
    if (message.groupUint32 !== 0) {
      obj.groupUint32 = Math.round(message.groupUint32);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_Data>, I>>(base?: I): TestAllRequiredTypesProto2_Data {
    return TestAllRequiredTypesProto2_Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_Data>, I>>(
    object: I,
  ): TestAllRequiredTypesProto2_Data {
    const message = createBaseTestAllRequiredTypesProto2_Data();
    message.groupInt32 = object.groupInt32 ?? 0;
    message.groupUint32 = object.groupUint32 ?? 0;
    return message;
  },
};

function createBaseTestAllRequiredTypesProto2_MessageSetCorrect(): TestAllRequiredTypesProto2_MessageSetCorrect {
  return {};
}

export const TestAllRequiredTypesProto2_MessageSetCorrect = {
  encode(_: TestAllRequiredTypesProto2_MessageSetCorrect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllRequiredTypesProto2_MessageSetCorrect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllRequiredTypesProto2_MessageSetCorrect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TestAllRequiredTypesProto2_MessageSetCorrect {
    return {};
  },

  toJSON(_: TestAllRequiredTypesProto2_MessageSetCorrect): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_MessageSetCorrect>, I>>(
    base?: I,
  ): TestAllRequiredTypesProto2_MessageSetCorrect {
    return TestAllRequiredTypesProto2_MessageSetCorrect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_MessageSetCorrect>, I>>(
    _: I,
  ): TestAllRequiredTypesProto2_MessageSetCorrect {
    const message = createBaseTestAllRequiredTypesProto2_MessageSetCorrect();
    return message;
  },
};

function createBaseTestAllRequiredTypesProto2_MessageSetCorrectExtension1(): TestAllRequiredTypesProto2_MessageSetCorrectExtension1 {
  return { str: "" };
}

export const TestAllRequiredTypesProto2_MessageSetCorrectExtension1 = {
  encode(
    message: TestAllRequiredTypesProto2_MessageSetCorrectExtension1,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.str !== "") {
      writer.uint32(202).string(message.str);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllRequiredTypesProto2_MessageSetCorrectExtension1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllRequiredTypesProto2_MessageSetCorrectExtension1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 25:
          if (tag !== 202) {
            break;
          }

          message.str = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllRequiredTypesProto2_MessageSetCorrectExtension1 {
    return { str: isSet(object.str) ? String(object.str) : "" };
  },

  toJSON(message: TestAllRequiredTypesProto2_MessageSetCorrectExtension1): unknown {
    const obj: any = {};
    if (message.str !== "") {
      obj.str = message.str;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_MessageSetCorrectExtension1>, I>>(
    base?: I,
  ): TestAllRequiredTypesProto2_MessageSetCorrectExtension1 {
    return TestAllRequiredTypesProto2_MessageSetCorrectExtension1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_MessageSetCorrectExtension1>, I>>(
    object: I,
  ): TestAllRequiredTypesProto2_MessageSetCorrectExtension1 {
    const message = createBaseTestAllRequiredTypesProto2_MessageSetCorrectExtension1();
    message.str = object.str ?? "";
    return message;
  },
};

function createBaseTestAllRequiredTypesProto2_MessageSetCorrectExtension2(): TestAllRequiredTypesProto2_MessageSetCorrectExtension2 {
  return { i: 0 };
}

export const TestAllRequiredTypesProto2_MessageSetCorrectExtension2 = {
  encode(
    message: TestAllRequiredTypesProto2_MessageSetCorrectExtension2,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.i !== 0) {
      writer.uint32(72).int32(message.i);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllRequiredTypesProto2_MessageSetCorrectExtension2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAllRequiredTypesProto2_MessageSetCorrectExtension2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          if (tag !== 72) {
            break;
          }

          message.i = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAllRequiredTypesProto2_MessageSetCorrectExtension2 {
    return { i: isSet(object.i) ? Number(object.i) : 0 };
  },

  toJSON(message: TestAllRequiredTypesProto2_MessageSetCorrectExtension2): unknown {
    const obj: any = {};
    if (message.i !== 0) {
      obj.i = Math.round(message.i);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_MessageSetCorrectExtension2>, I>>(
    base?: I,
  ): TestAllRequiredTypesProto2_MessageSetCorrectExtension2 {
    return TestAllRequiredTypesProto2_MessageSetCorrectExtension2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAllRequiredTypesProto2_MessageSetCorrectExtension2>, I>>(
    object: I,
  ): TestAllRequiredTypesProto2_MessageSetCorrectExtension2 {
    const message = createBaseTestAllRequiredTypesProto2_MessageSetCorrectExtension2();
    message.i = object.i ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
