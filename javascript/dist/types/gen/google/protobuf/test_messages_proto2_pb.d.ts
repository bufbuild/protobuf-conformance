import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from enum protobuf_test_messages.proto2.ForeignEnumProto2
 */
export declare enum ForeignEnumProto2 {
    /**
     * @generated from enum value: FOREIGN_FOO = 0;
     */
    FOREIGN_FOO = 0,
    /**
     * @generated from enum value: FOREIGN_BAR = 1;
     */
    FOREIGN_BAR = 1,
    /**
     * @generated from enum value: FOREIGN_BAZ = 2;
     */
    FOREIGN_BAZ = 2
}
/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * Also, crucially, all messages and enums in this file are eventually
 * submessages of this message.  So for example, a fuzz test of TestAllTypes
 * could trigger bugs that occur in any message type in this file.  We verify
 * this stays true in a unit test.
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2
 */
export declare class TestAllTypesProto2 extends Message<TestAllTypesProto2> {
    /**
     * Singular
     *
     * @generated from field: optional int32 optional_int32 = 1;
     */
    optionalInt32?: number;
    /**
     * @generated from field: optional int64 optional_int64 = 2;
     */
    optionalInt64?: bigint;
    /**
     * @generated from field: optional uint32 optional_uint32 = 3;
     */
    optionalUint32?: number;
    /**
     * @generated from field: optional uint64 optional_uint64 = 4;
     */
    optionalUint64?: bigint;
    /**
     * @generated from field: optional sint32 optional_sint32 = 5;
     */
    optionalSint32?: number;
    /**
     * @generated from field: optional sint64 optional_sint64 = 6;
     */
    optionalSint64?: bigint;
    /**
     * @generated from field: optional fixed32 optional_fixed32 = 7;
     */
    optionalFixed32?: number;
    /**
     * @generated from field: optional fixed64 optional_fixed64 = 8;
     */
    optionalFixed64?: bigint;
    /**
     * @generated from field: optional sfixed32 optional_sfixed32 = 9;
     */
    optionalSfixed32?: number;
    /**
     * @generated from field: optional sfixed64 optional_sfixed64 = 10;
     */
    optionalSfixed64?: bigint;
    /**
     * @generated from field: optional float optional_float = 11;
     */
    optionalFloat?: number;
    /**
     * @generated from field: optional double optional_double = 12;
     */
    optionalDouble?: number;
    /**
     * @generated from field: optional bool optional_bool = 13;
     */
    optionalBool?: boolean;
    /**
     * @generated from field: optional string optional_string = 14;
     */
    optionalString?: string;
    /**
     * @generated from field: optional bytes optional_bytes = 15;
     */
    optionalBytes?: Uint8Array;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage optional_nested_message = 18;
     */
    optionalNestedMessage?: TestAllTypesProto2_NestedMessage;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.ForeignMessageProto2 optional_foreign_message = 19;
     */
    optionalForeignMessage?: ForeignMessageProto2;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum optional_nested_enum = 21;
     */
    optionalNestedEnum?: TestAllTypesProto2_NestedEnum;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.ForeignEnumProto2 optional_foreign_enum = 22;
     */
    optionalForeignEnum?: ForeignEnumProto2;
    /**
     * @generated from field: optional string optional_string_piece = 24;
     */
    optionalStringPiece?: string;
    /**
     * @generated from field: optional string optional_cord = 25;
     */
    optionalCord?: string;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.TestAllTypesProto2 recursive_message = 27;
     */
    recursiveMessage?: TestAllTypesProto2;
    /**
     * Repeated
     *
     * @generated from field: repeated int32 repeated_int32 = 31;
     */
    repeatedInt32: number[];
    /**
     * @generated from field: repeated int64 repeated_int64 = 32;
     */
    repeatedInt64: bigint[];
    /**
     * @generated from field: repeated uint32 repeated_uint32 = 33;
     */
    repeatedUint32: number[];
    /**
     * @generated from field: repeated uint64 repeated_uint64 = 34;
     */
    repeatedUint64: bigint[];
    /**
     * @generated from field: repeated sint32 repeated_sint32 = 35;
     */
    repeatedSint32: number[];
    /**
     * @generated from field: repeated sint64 repeated_sint64 = 36;
     */
    repeatedSint64: bigint[];
    /**
     * @generated from field: repeated fixed32 repeated_fixed32 = 37;
     */
    repeatedFixed32: number[];
    /**
     * @generated from field: repeated fixed64 repeated_fixed64 = 38;
     */
    repeatedFixed64: bigint[];
    /**
     * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
     */
    repeatedSfixed32: number[];
    /**
     * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
     */
    repeatedSfixed64: bigint[];
    /**
     * @generated from field: repeated float repeated_float = 41;
     */
    repeatedFloat: number[];
    /**
     * @generated from field: repeated double repeated_double = 42;
     */
    repeatedDouble: number[];
    /**
     * @generated from field: repeated bool repeated_bool = 43;
     */
    repeatedBool: boolean[];
    /**
     * @generated from field: repeated string repeated_string = 44;
     */
    repeatedString: string[];
    /**
     * @generated from field: repeated bytes repeated_bytes = 45;
     */
    repeatedBytes: Uint8Array[];
    /**
     * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage repeated_nested_message = 48;
     */
    repeatedNestedMessage: TestAllTypesProto2_NestedMessage[];
    /**
     * @generated from field: repeated protobuf_test_messages.proto2.ForeignMessageProto2 repeated_foreign_message = 49;
     */
    repeatedForeignMessage: ForeignMessageProto2[];
    /**
     * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum repeated_nested_enum = 51;
     */
    repeatedNestedEnum: TestAllTypesProto2_NestedEnum[];
    /**
     * @generated from field: repeated protobuf_test_messages.proto2.ForeignEnumProto2 repeated_foreign_enum = 52;
     */
    repeatedForeignEnum: ForeignEnumProto2[];
    /**
     * @generated from field: repeated string repeated_string_piece = 54;
     */
    repeatedStringPiece: string[];
    /**
     * @generated from field: repeated string repeated_cord = 55;
     */
    repeatedCord: string[];
    /**
     * Packed
     *
     * @generated from field: repeated int32 packed_int32 = 75 [packed = true];
     */
    packedInt32: number[];
    /**
     * @generated from field: repeated int64 packed_int64 = 76 [packed = true];
     */
    packedInt64: bigint[];
    /**
     * @generated from field: repeated uint32 packed_uint32 = 77 [packed = true];
     */
    packedUint32: number[];
    /**
     * @generated from field: repeated uint64 packed_uint64 = 78 [packed = true];
     */
    packedUint64: bigint[];
    /**
     * @generated from field: repeated sint32 packed_sint32 = 79 [packed = true];
     */
    packedSint32: number[];
    /**
     * @generated from field: repeated sint64 packed_sint64 = 80 [packed = true];
     */
    packedSint64: bigint[];
    /**
     * @generated from field: repeated fixed32 packed_fixed32 = 81 [packed = true];
     */
    packedFixed32: number[];
    /**
     * @generated from field: repeated fixed64 packed_fixed64 = 82 [packed = true];
     */
    packedFixed64: bigint[];
    /**
     * @generated from field: repeated sfixed32 packed_sfixed32 = 83 [packed = true];
     */
    packedSfixed32: number[];
    /**
     * @generated from field: repeated sfixed64 packed_sfixed64 = 84 [packed = true];
     */
    packedSfixed64: bigint[];
    /**
     * @generated from field: repeated float packed_float = 85 [packed = true];
     */
    packedFloat: number[];
    /**
     * @generated from field: repeated double packed_double = 86 [packed = true];
     */
    packedDouble: number[];
    /**
     * @generated from field: repeated bool packed_bool = 87 [packed = true];
     */
    packedBool: boolean[];
    /**
     * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum packed_nested_enum = 88 [packed = true];
     */
    packedNestedEnum: TestAllTypesProto2_NestedEnum[];
    /**
     * Unpacked
     *
     * @generated from field: repeated int32 unpacked_int32 = 89 [packed = false];
     */
    unpackedInt32: number[];
    /**
     * @generated from field: repeated int64 unpacked_int64 = 90 [packed = false];
     */
    unpackedInt64: bigint[];
    /**
     * @generated from field: repeated uint32 unpacked_uint32 = 91 [packed = false];
     */
    unpackedUint32: number[];
    /**
     * @generated from field: repeated uint64 unpacked_uint64 = 92 [packed = false];
     */
    unpackedUint64: bigint[];
    /**
     * @generated from field: repeated sint32 unpacked_sint32 = 93 [packed = false];
     */
    unpackedSint32: number[];
    /**
     * @generated from field: repeated sint64 unpacked_sint64 = 94 [packed = false];
     */
    unpackedSint64: bigint[];
    /**
     * @generated from field: repeated fixed32 unpacked_fixed32 = 95 [packed = false];
     */
    unpackedFixed32: number[];
    /**
     * @generated from field: repeated fixed64 unpacked_fixed64 = 96 [packed = false];
     */
    unpackedFixed64: bigint[];
    /**
     * @generated from field: repeated sfixed32 unpacked_sfixed32 = 97 [packed = false];
     */
    unpackedSfixed32: number[];
    /**
     * @generated from field: repeated sfixed64 unpacked_sfixed64 = 98 [packed = false];
     */
    unpackedSfixed64: bigint[];
    /**
     * @generated from field: repeated float unpacked_float = 99 [packed = false];
     */
    unpackedFloat: number[];
    /**
     * @generated from field: repeated double unpacked_double = 100 [packed = false];
     */
    unpackedDouble: number[];
    /**
     * @generated from field: repeated bool unpacked_bool = 101 [packed = false];
     */
    unpackedBool: boolean[];
    /**
     * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum unpacked_nested_enum = 102 [packed = false];
     */
    unpackedNestedEnum: TestAllTypesProto2_NestedEnum[];
    /**
     * Map
     *
     * @generated from field: map<int32, int32> map_int32_int32 = 56;
     */
    mapInt32Int32: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<int64, int64> map_int64_int64 = 57;
     */
    mapInt64Int64: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: map<uint32, uint32> map_uint32_uint32 = 58;
     */
    mapUint32Uint32: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<uint64, uint64> map_uint64_uint64 = 59;
     */
    mapUint64Uint64: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: map<sint32, sint32> map_sint32_sint32 = 60;
     */
    mapSint32Sint32: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<sint64, sint64> map_sint64_sint64 = 61;
     */
    mapSint64Sint64: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 62;
     */
    mapFixed32Fixed32: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 63;
     */
    mapFixed64Fixed64: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64;
     */
    mapSfixed32Sfixed32: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65;
     */
    mapSfixed64Sfixed64: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: map<int32, float> map_int32_float = 66;
     */
    mapInt32Float: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<int32, double> map_int32_double = 67;
     */
    mapInt32Double: {
        [key: number]: number;
    };
    /**
     * @generated from field: map<bool, bool> map_bool_bool = 68;
     */
    mapBoolBool: {
        [key: string]: boolean;
    };
    /**
     * @generated from field: map<string, string> map_string_string = 69;
     */
    mapStringString: {
        [key: string]: string;
    };
    /**
     * @generated from field: map<string, bytes> map_string_bytes = 70;
     */
    mapStringBytes: {
        [key: string]: Uint8Array;
    };
    /**
     * @generated from field: map<string, protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage> map_string_nested_message = 71;
     */
    mapStringNestedMessage: {
        [key: string]: TestAllTypesProto2_NestedMessage;
    };
    /**
     * @generated from field: map<string, protobuf_test_messages.proto2.ForeignMessageProto2> map_string_foreign_message = 72;
     */
    mapStringForeignMessage: {
        [key: string]: ForeignMessageProto2;
    };
    /**
     * @generated from field: map<string, protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum> map_string_nested_enum = 73;
     */
    mapStringNestedEnum: {
        [key: string]: TestAllTypesProto2_NestedEnum;
    };
    /**
     * @generated from field: map<string, protobuf_test_messages.proto2.ForeignEnumProto2> map_string_foreign_enum = 74;
     */
    mapStringForeignEnum: {
        [key: string]: ForeignEnumProto2;
    };
    /**
     * @generated from oneof protobuf_test_messages.proto2.TestAllTypesProto2.oneof_field
     */
    oneofField: {
        /**
         * @generated from field: uint32 oneof_uint32 = 111;
         */
        value: number;
        case: "oneofUint32";
    } | {
        /**
         * @generated from field: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage oneof_nested_message = 112;
         */
        value: TestAllTypesProto2_NestedMessage;
        case: "oneofNestedMessage";
    } | {
        /**
         * @generated from field: string oneof_string = 113;
         */
        value: string;
        case: "oneofString";
    } | {
        /**
         * @generated from field: bytes oneof_bytes = 114;
         */
        value: Uint8Array;
        case: "oneofBytes";
    } | {
        /**
         * @generated from field: bool oneof_bool = 115;
         */
        value: boolean;
        case: "oneofBool";
    } | {
        /**
         * @generated from field: uint64 oneof_uint64 = 116;
         */
        value: bigint;
        case: "oneofUint64";
    } | {
        /**
         * @generated from field: float oneof_float = 117;
         */
        value: number;
        case: "oneofFloat";
    } | {
        /**
         * @generated from field: double oneof_double = 118;
         */
        value: number;
        case: "oneofDouble";
    } | {
        /**
         * @generated from field: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum oneof_enum = 119;
         */
        value: TestAllTypesProto2_NestedEnum;
        case: "oneofEnum";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional protobuf_test_messages.proto2.TestAllTypesProto2.Data data = 201;
     */
    data?: TestAllTypesProto2_Data;
    /**
     * default values
     *
     * @generated from field: optional int32 default_int32 = 241 [default = -123456789];
     */
    defaultInt32?: number;
    /**
     * @generated from field: optional int64 default_int64 = 242 [default = -9123456789123456789];
     */
    defaultInt64?: bigint;
    /**
     * @generated from field: optional uint32 default_uint32 = 243 [default = 2123456789];
     */
    defaultUint32?: number;
    /**
     * @generated from field: optional uint64 default_uint64 = 244 [default = 10123456789123456789];
     */
    defaultUint64?: bigint;
    /**
     * @generated from field: optional sint32 default_sint32 = 245 [default = -123456789];
     */
    defaultSint32?: number;
    /**
     * @generated from field: optional sint64 default_sint64 = 246 [default = -9123456789123456789];
     */
    defaultSint64?: bigint;
    /**
     * @generated from field: optional fixed32 default_fixed32 = 247 [default = 2123456789];
     */
    defaultFixed32?: number;
    /**
     * @generated from field: optional fixed64 default_fixed64 = 248 [default = 10123456789123456789];
     */
    defaultFixed64?: bigint;
    /**
     * @generated from field: optional sfixed32 default_sfixed32 = 249 [default = -123456789];
     */
    defaultSfixed32?: number;
    /**
     * @generated from field: optional sfixed64 default_sfixed64 = 250 [default = -9123456789123456789];
     */
    defaultSfixed64?: bigint;
    /**
     * @generated from field: optional float default_float = 251 [default = 9e+09];
     */
    defaultFloat?: number;
    /**
     * @generated from field: optional double default_double = 252 [default = 7e+22];
     */
    defaultDouble?: number;
    /**
     * @generated from field: optional bool default_bool = 253 [default = true];
     */
    defaultBool?: boolean;
    /**
     * @generated from field: optional string default_string = 254 [default = "Rosebud"];
     */
    defaultString?: string;
    /**
     * @generated from field: optional bytes default_bytes = 255 [default = "joshua"];
     */
    defaultBytes?: Uint8Array;
    /**
     * Test field-name-to-JSON-name convention.
     * (protobuf says names can be any valid C/C++ identifier.)
     *
     * @generated from field: optional int32 fieldname1 = 401;
     */
    fieldname1?: number;
    /**
     * @generated from field: optional int32 field_name2 = 402;
     */
    fieldName2?: number;
    /**
     * @generated from field: optional int32 _field_name3 = 403;
     */
    FieldName3?: number;
    /**
     * @generated from field: optional int32 field__name4_ = 404;
     */
    fieldName4?: number;
    /**
     * @generated from field: optional int32 field0name5 = 405;
     */
    field0name5?: number;
    /**
     * @generated from field: optional int32 field_0_name6 = 406;
     */
    field0Name6?: number;
    /**
     * @generated from field: optional int32 fieldName7 = 407;
     */
    fieldName7?: number;
    /**
     * @generated from field: optional int32 FieldName8 = 408;
     */
    FieldName8?: number;
    /**
     * @generated from field: optional int32 field_Name9 = 409;
     */
    fieldName9?: number;
    /**
     * @generated from field: optional int32 Field_Name10 = 410;
     */
    FieldName10?: number;
    /**
     * @generated from field: optional int32 FIELD_NAME11 = 411;
     */
    FIELDNAME11?: number;
    /**
     * @generated from field: optional int32 FIELD_name12 = 412;
     */
    FIELDName12?: number;
    /**
     * @generated from field: optional int32 __field_name13 = 413;
     */
    FieldName13?: number;
    /**
     * @generated from field: optional int32 __Field_name14 = 414;
     */
    FieldName14?: number;
    /**
     * @generated from field: optional int32 field__name15 = 415;
     */
    fieldName15?: number;
    /**
     * @generated from field: optional int32 field__Name16 = 416;
     */
    fieldName16?: number;
    /**
     * @generated from field: optional int32 field_name17__ = 417;
     */
    fieldName17?: number;
    /**
     * @generated from field: optional int32 Field_name18__ = 418;
     */
    FieldName18?: number;
    constructor(data?: PartialMessage<TestAllTypesProto2>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.TestAllTypesProto2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto2;
    static equals(a: TestAllTypesProto2 | PlainMessage<TestAllTypesProto2> | undefined, b: TestAllTypesProto2 | PlainMessage<TestAllTypesProto2> | undefined): boolean;
}
/**
 * @generated from enum protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum
 */
export declare enum TestAllTypesProto2_NestedEnum {
    /**
     * @generated from enum value: FOO = 0;
     */
    FOO = 0,
    /**
     * @generated from enum value: BAR = 1;
     */
    BAR = 1,
    /**
     * @generated from enum value: BAZ = 2;
     */
    BAZ = 2,
    /**
     * Intentionally negative.
     *
     * @generated from enum value: NEG = -1;
     */
    NEG = -1
}
/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
 */
export declare class TestAllTypesProto2_NestedMessage extends Message<TestAllTypesProto2_NestedMessage> {
    /**
     * @generated from field: optional int32 a = 1;
     */
    a?: number;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.TestAllTypesProto2 corecursive = 2;
     */
    corecursive?: TestAllTypesProto2;
    constructor(data?: PartialMessage<TestAllTypesProto2_NestedMessage>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto2_NestedMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto2_NestedMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto2_NestedMessage;
    static equals(a: TestAllTypesProto2_NestedMessage | PlainMessage<TestAllTypesProto2_NestedMessage> | undefined, b: TestAllTypesProto2_NestedMessage | PlainMessage<TestAllTypesProto2_NestedMessage> | undefined): boolean;
}
/**
 * groups
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.Data
 */
export declare class TestAllTypesProto2_Data extends Message<TestAllTypesProto2_Data> {
    /**
     * @generated from field: optional int32 group_int32 = 202;
     */
    groupInt32?: number;
    /**
     * @generated from field: optional uint32 group_uint32 = 203;
     */
    groupUint32?: number;
    constructor(data?: PartialMessage<TestAllTypesProto2_Data>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.Data";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto2_Data;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto2_Data;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto2_Data;
    static equals(a: TestAllTypesProto2_Data | PlainMessage<TestAllTypesProto2_Data> | undefined, b: TestAllTypesProto2_Data | PlainMessage<TestAllTypesProto2_Data> | undefined): boolean;
}
/**
 * message_set test case.
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
 */
export declare class TestAllTypesProto2_MessageSetCorrect extends Message<TestAllTypesProto2_MessageSetCorrect> {
    constructor(data?: PartialMessage<TestAllTypesProto2_MessageSetCorrect>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto2_MessageSetCorrect;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto2_MessageSetCorrect;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto2_MessageSetCorrect;
    static equals(a: TestAllTypesProto2_MessageSetCorrect | PlainMessage<TestAllTypesProto2_MessageSetCorrect> | undefined, b: TestAllTypesProto2_MessageSetCorrect | PlainMessage<TestAllTypesProto2_MessageSetCorrect> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
 */
export declare class TestAllTypesProto2_MessageSetCorrectExtension1 extends Message<TestAllTypesProto2_MessageSetCorrectExtension1> {
    /**
     * @generated from field: optional string str = 25;
     */
    str?: string;
    constructor(data?: PartialMessage<TestAllTypesProto2_MessageSetCorrectExtension1>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto2_MessageSetCorrectExtension1;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto2_MessageSetCorrectExtension1;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto2_MessageSetCorrectExtension1;
    static equals(a: TestAllTypesProto2_MessageSetCorrectExtension1 | PlainMessage<TestAllTypesProto2_MessageSetCorrectExtension1> | undefined, b: TestAllTypesProto2_MessageSetCorrectExtension1 | PlainMessage<TestAllTypesProto2_MessageSetCorrectExtension1> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
 */
export declare class TestAllTypesProto2_MessageSetCorrectExtension2 extends Message<TestAllTypesProto2_MessageSetCorrectExtension2> {
    /**
     * @generated from field: optional int32 i = 9;
     */
    i?: number;
    constructor(data?: PartialMessage<TestAllTypesProto2_MessageSetCorrectExtension2>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto2_MessageSetCorrectExtension2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto2_MessageSetCorrectExtension2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto2_MessageSetCorrectExtension2;
    static equals(a: TestAllTypesProto2_MessageSetCorrectExtension2 | PlainMessage<TestAllTypesProto2_MessageSetCorrectExtension2> | undefined, b: TestAllTypesProto2_MessageSetCorrectExtension2 | PlainMessage<TestAllTypesProto2_MessageSetCorrectExtension2> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.ForeignMessageProto2
 */
export declare class ForeignMessageProto2 extends Message<ForeignMessageProto2> {
    /**
     * @generated from field: optional int32 c = 1;
     */
    c?: number;
    constructor(data?: PartialMessage<ForeignMessageProto2>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.ForeignMessageProto2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ForeignMessageProto2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ForeignMessageProto2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ForeignMessageProto2;
    static equals(a: ForeignMessageProto2 | PlainMessage<ForeignMessageProto2> | undefined, b: ForeignMessageProto2 | PlainMessage<ForeignMessageProto2> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.UnknownToTestAllTypes
 */
export declare class UnknownToTestAllTypes extends Message<UnknownToTestAllTypes> {
    /**
     * @generated from field: optional int32 optional_int32 = 1001;
     */
    optionalInt32?: number;
    /**
     * @generated from field: optional string optional_string = 1002;
     */
    optionalString?: string;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.ForeignMessageProto2 nested_message = 1003;
     */
    nestedMessage?: ForeignMessageProto2;
    /**
     * @generated from field: optional protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup optionalgroup = 1004;
     */
    optionalgroup?: UnknownToTestAllTypes_OptionalGroup;
    /**
     * @generated from field: optional bool optional_bool = 1006;
     */
    optionalBool?: boolean;
    /**
     * @generated from field: repeated int32 repeated_int32 = 1011;
     */
    repeatedInt32: number[];
    constructor(data?: PartialMessage<UnknownToTestAllTypes>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.UnknownToTestAllTypes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnknownToTestAllTypes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnknownToTestAllTypes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnknownToTestAllTypes;
    static equals(a: UnknownToTestAllTypes | PlainMessage<UnknownToTestAllTypes> | undefined, b: UnknownToTestAllTypes | PlainMessage<UnknownToTestAllTypes> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
 */
export declare class UnknownToTestAllTypes_OptionalGroup extends Message<UnknownToTestAllTypes_OptionalGroup> {
    /**
     * @generated from field: optional int32 a = 1;
     */
    a?: number;
    constructor(data?: PartialMessage<UnknownToTestAllTypes_OptionalGroup>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnknownToTestAllTypes_OptionalGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnknownToTestAllTypes_OptionalGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnknownToTestAllTypes_OptionalGroup;
    static equals(a: UnknownToTestAllTypes_OptionalGroup | PlainMessage<UnknownToTestAllTypes_OptionalGroup> | undefined, b: UnknownToTestAllTypes_OptionalGroup | PlainMessage<UnknownToTestAllTypes_OptionalGroup> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.NullHypothesisProto2
 */
export declare class NullHypothesisProto2 extends Message<NullHypothesisProto2> {
    constructor(data?: PartialMessage<NullHypothesisProto2>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.NullHypothesisProto2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NullHypothesisProto2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NullHypothesisProto2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NullHypothesisProto2;
    static equals(a: NullHypothesisProto2 | PlainMessage<NullHypothesisProto2> | undefined, b: NullHypothesisProto2 | PlainMessage<NullHypothesisProto2> | undefined): boolean;
}
/**
 * @generated from message protobuf_test_messages.proto2.EnumOnlyProto2
 */
export declare class EnumOnlyProto2 extends Message<EnumOnlyProto2> {
    constructor(data?: PartialMessage<EnumOnlyProto2>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.EnumOnlyProto2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumOnlyProto2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumOnlyProto2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumOnlyProto2;
    static equals(a: EnumOnlyProto2 | PlainMessage<EnumOnlyProto2> | undefined, b: EnumOnlyProto2 | PlainMessage<EnumOnlyProto2> | undefined): boolean;
}
/**
 * @generated from enum protobuf_test_messages.proto2.EnumOnlyProto2.Bool
 */
export declare enum EnumOnlyProto2_Bool {
    /**
     * @generated from enum value: kFalse = 0;
     */
    kFalse = 0,
    /**
     * @generated from enum value: kTrue = 1;
     */
    kTrue = 1
}
/**
 * @generated from message protobuf_test_messages.proto2.OneStringProto2
 */
export declare class OneStringProto2 extends Message<OneStringProto2> {
    /**
     * @generated from field: optional string data = 1;
     */
    data?: string;
    constructor(data?: PartialMessage<OneStringProto2>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "protobuf_test_messages.proto2.OneStringProto2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneStringProto2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneStringProto2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneStringProto2;
    static equals(a: OneStringProto2 | PlainMessage<OneStringProto2> | undefined, b: OneStringProto2 | PlainMessage<OneStringProto2> | undefined): boolean;
}
