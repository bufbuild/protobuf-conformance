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
//
// Test schema for proto3 messages.  This test schema is used by:
//
// - benchmarks
// - fuzz tests
// - conformance tests
//
import { Any, BoolValue, BytesValue, DoubleValue, Duration, FieldMask, FloatValue, Int32Value, Int64Value, ListValue, Message, NullValue, proto3, protoInt64, StringValue, Struct, Timestamp, UInt32Value, UInt64Value, Value } from "@bufbuild/protobuf";
/**
 * @generated from enum protobuf_test_messages.proto3.ForeignEnum
 */
export var ForeignEnum;
(function (ForeignEnum) {
    /**
     * @generated from enum value: FOREIGN_FOO = 0;
     */
    ForeignEnum[ForeignEnum["FOREIGN_FOO"] = 0] = "FOREIGN_FOO";
    /**
     * @generated from enum value: FOREIGN_BAR = 1;
     */
    ForeignEnum[ForeignEnum["FOREIGN_BAR"] = 1] = "FOREIGN_BAR";
    /**
     * @generated from enum value: FOREIGN_BAZ = 2;
     */
    ForeignEnum[ForeignEnum["FOREIGN_BAZ"] = 2] = "FOREIGN_BAZ";
})(ForeignEnum || (ForeignEnum = {}));
// Retrieve enum metadata with: proto3.getEnumType(ForeignEnum)
proto3.util.setEnumType(ForeignEnum, "protobuf_test_messages.proto3.ForeignEnum", [
    { no: 0, name: "FOREIGN_FOO" },
    { no: 1, name: "FOREIGN_BAR" },
    { no: 2, name: "FOREIGN_BAZ" },
]);
/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * Also, crucially, all messages and enums in this file are eventually
 * submessages of this message.  So for example, a fuzz test of TestAllTypes
 * could trigger bugs that occur in any message type in this file.  We verify
 * this stays true in a unit test.
 *
 * @generated from message protobuf_test_messages.proto3.TestAllTypesProto3
 */
export class TestAllTypesProto3 extends Message {
    constructor(data) {
        super();
        /**
         * Singular
         *
         * @generated from field: int32 optional_int32 = 1;
         */
        this.optionalInt32 = 0;
        /**
         * @generated from field: int64 optional_int64 = 2;
         */
        this.optionalInt64 = protoInt64.zero;
        /**
         * @generated from field: uint32 optional_uint32 = 3;
         */
        this.optionalUint32 = 0;
        /**
         * @generated from field: uint64 optional_uint64 = 4;
         */
        this.optionalUint64 = protoInt64.zero;
        /**
         * @generated from field: sint32 optional_sint32 = 5;
         */
        this.optionalSint32 = 0;
        /**
         * @generated from field: sint64 optional_sint64 = 6;
         */
        this.optionalSint64 = protoInt64.zero;
        /**
         * @generated from field: fixed32 optional_fixed32 = 7;
         */
        this.optionalFixed32 = 0;
        /**
         * @generated from field: fixed64 optional_fixed64 = 8;
         */
        this.optionalFixed64 = protoInt64.zero;
        /**
         * @generated from field: sfixed32 optional_sfixed32 = 9;
         */
        this.optionalSfixed32 = 0;
        /**
         * @generated from field: sfixed64 optional_sfixed64 = 10;
         */
        this.optionalSfixed64 = protoInt64.zero;
        /**
         * @generated from field: float optional_float = 11;
         */
        this.optionalFloat = 0;
        /**
         * @generated from field: double optional_double = 12;
         */
        this.optionalDouble = 0;
        /**
         * @generated from field: bool optional_bool = 13;
         */
        this.optionalBool = false;
        /**
         * @generated from field: string optional_string = 14;
         */
        this.optionalString = "";
        /**
         * @generated from field: bytes optional_bytes = 15;
         */
        this.optionalBytes = new Uint8Array(0);
        /**
         * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum optional_nested_enum = 21;
         */
        this.optionalNestedEnum = TestAllTypesProto3_NestedEnum.FOO;
        /**
         * @generated from field: protobuf_test_messages.proto3.ForeignEnum optional_foreign_enum = 22;
         */
        this.optionalForeignEnum = ForeignEnum.FOREIGN_FOO;
        /**
         * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23;
         */
        this.optionalAliasedEnum = TestAllTypesProto3_AliasedEnum.ALIAS_FOO;
        /**
         * @generated from field: string optional_string_piece = 24;
         */
        this.optionalStringPiece = "";
        /**
         * @generated from field: string optional_cord = 25;
         */
        this.optionalCord = "";
        /**
         * Repeated
         *
         * @generated from field: repeated int32 repeated_int32 = 31;
         */
        this.repeatedInt32 = [];
        /**
         * @generated from field: repeated int64 repeated_int64 = 32;
         */
        this.repeatedInt64 = [];
        /**
         * @generated from field: repeated uint32 repeated_uint32 = 33;
         */
        this.repeatedUint32 = [];
        /**
         * @generated from field: repeated uint64 repeated_uint64 = 34;
         */
        this.repeatedUint64 = [];
        /**
         * @generated from field: repeated sint32 repeated_sint32 = 35;
         */
        this.repeatedSint32 = [];
        /**
         * @generated from field: repeated sint64 repeated_sint64 = 36;
         */
        this.repeatedSint64 = [];
        /**
         * @generated from field: repeated fixed32 repeated_fixed32 = 37;
         */
        this.repeatedFixed32 = [];
        /**
         * @generated from field: repeated fixed64 repeated_fixed64 = 38;
         */
        this.repeatedFixed64 = [];
        /**
         * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
         */
        this.repeatedSfixed32 = [];
        /**
         * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
         */
        this.repeatedSfixed64 = [];
        /**
         * @generated from field: repeated float repeated_float = 41;
         */
        this.repeatedFloat = [];
        /**
         * @generated from field: repeated double repeated_double = 42;
         */
        this.repeatedDouble = [];
        /**
         * @generated from field: repeated bool repeated_bool = 43;
         */
        this.repeatedBool = [];
        /**
         * @generated from field: repeated string repeated_string = 44;
         */
        this.repeatedString = [];
        /**
         * @generated from field: repeated bytes repeated_bytes = 45;
         */
        this.repeatedBytes = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage repeated_nested_message = 48;
         */
        this.repeatedNestedMessage = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto3.ForeignMessage repeated_foreign_message = 49;
         */
        this.repeatedForeignMessage = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum repeated_nested_enum = 51;
         */
        this.repeatedNestedEnum = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto3.ForeignEnum repeated_foreign_enum = 52;
         */
        this.repeatedForeignEnum = [];
        /**
         * @generated from field: repeated string repeated_string_piece = 54;
         */
        this.repeatedStringPiece = [];
        /**
         * @generated from field: repeated string repeated_cord = 55;
         */
        this.repeatedCord = [];
        /**
         * Packed
         *
         * @generated from field: repeated int32 packed_int32 = 75 [packed = true];
         */
        this.packedInt32 = [];
        /**
         * @generated from field: repeated int64 packed_int64 = 76 [packed = true];
         */
        this.packedInt64 = [];
        /**
         * @generated from field: repeated uint32 packed_uint32 = 77 [packed = true];
         */
        this.packedUint32 = [];
        /**
         * @generated from field: repeated uint64 packed_uint64 = 78 [packed = true];
         */
        this.packedUint64 = [];
        /**
         * @generated from field: repeated sint32 packed_sint32 = 79 [packed = true];
         */
        this.packedSint32 = [];
        /**
         * @generated from field: repeated sint64 packed_sint64 = 80 [packed = true];
         */
        this.packedSint64 = [];
        /**
         * @generated from field: repeated fixed32 packed_fixed32 = 81 [packed = true];
         */
        this.packedFixed32 = [];
        /**
         * @generated from field: repeated fixed64 packed_fixed64 = 82 [packed = true];
         */
        this.packedFixed64 = [];
        /**
         * @generated from field: repeated sfixed32 packed_sfixed32 = 83 [packed = true];
         */
        this.packedSfixed32 = [];
        /**
         * @generated from field: repeated sfixed64 packed_sfixed64 = 84 [packed = true];
         */
        this.packedSfixed64 = [];
        /**
         * @generated from field: repeated float packed_float = 85 [packed = true];
         */
        this.packedFloat = [];
        /**
         * @generated from field: repeated double packed_double = 86 [packed = true];
         */
        this.packedDouble = [];
        /**
         * @generated from field: repeated bool packed_bool = 87 [packed = true];
         */
        this.packedBool = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum packed_nested_enum = 88 [packed = true];
         */
        this.packedNestedEnum = [];
        /**
         * Unpacked
         *
         * @generated from field: repeated int32 unpacked_int32 = 89 [packed = false];
         */
        this.unpackedInt32 = [];
        /**
         * @generated from field: repeated int64 unpacked_int64 = 90 [packed = false];
         */
        this.unpackedInt64 = [];
        /**
         * @generated from field: repeated uint32 unpacked_uint32 = 91 [packed = false];
         */
        this.unpackedUint32 = [];
        /**
         * @generated from field: repeated uint64 unpacked_uint64 = 92 [packed = false];
         */
        this.unpackedUint64 = [];
        /**
         * @generated from field: repeated sint32 unpacked_sint32 = 93 [packed = false];
         */
        this.unpackedSint32 = [];
        /**
         * @generated from field: repeated sint64 unpacked_sint64 = 94 [packed = false];
         */
        this.unpackedSint64 = [];
        /**
         * @generated from field: repeated fixed32 unpacked_fixed32 = 95 [packed = false];
         */
        this.unpackedFixed32 = [];
        /**
         * @generated from field: repeated fixed64 unpacked_fixed64 = 96 [packed = false];
         */
        this.unpackedFixed64 = [];
        /**
         * @generated from field: repeated sfixed32 unpacked_sfixed32 = 97 [packed = false];
         */
        this.unpackedSfixed32 = [];
        /**
         * @generated from field: repeated sfixed64 unpacked_sfixed64 = 98 [packed = false];
         */
        this.unpackedSfixed64 = [];
        /**
         * @generated from field: repeated float unpacked_float = 99 [packed = false];
         */
        this.unpackedFloat = [];
        /**
         * @generated from field: repeated double unpacked_double = 100 [packed = false];
         */
        this.unpackedDouble = [];
        /**
         * @generated from field: repeated bool unpacked_bool = 101 [packed = false];
         */
        this.unpackedBool = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102 [packed = false];
         */
        this.unpackedNestedEnum = [];
        /**
         * Map
         *
         * @generated from field: map<int32, int32> map_int32_int32 = 56;
         */
        this.mapInt32Int32 = {};
        /**
         * @generated from field: map<int64, int64> map_int64_int64 = 57;
         */
        this.mapInt64Int64 = {};
        /**
         * @generated from field: map<uint32, uint32> map_uint32_uint32 = 58;
         */
        this.mapUint32Uint32 = {};
        /**
         * @generated from field: map<uint64, uint64> map_uint64_uint64 = 59;
         */
        this.mapUint64Uint64 = {};
        /**
         * @generated from field: map<sint32, sint32> map_sint32_sint32 = 60;
         */
        this.mapSint32Sint32 = {};
        /**
         * @generated from field: map<sint64, sint64> map_sint64_sint64 = 61;
         */
        this.mapSint64Sint64 = {};
        /**
         * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 62;
         */
        this.mapFixed32Fixed32 = {};
        /**
         * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 63;
         */
        this.mapFixed64Fixed64 = {};
        /**
         * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64;
         */
        this.mapSfixed32Sfixed32 = {};
        /**
         * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65;
         */
        this.mapSfixed64Sfixed64 = {};
        /**
         * @generated from field: map<int32, float> map_int32_float = 66;
         */
        this.mapInt32Float = {};
        /**
         * @generated from field: map<int32, double> map_int32_double = 67;
         */
        this.mapInt32Double = {};
        /**
         * @generated from field: map<bool, bool> map_bool_bool = 68;
         */
        this.mapBoolBool = {};
        /**
         * @generated from field: map<string, string> map_string_string = 69;
         */
        this.mapStringString = {};
        /**
         * @generated from field: map<string, bytes> map_string_bytes = 70;
         */
        this.mapStringBytes = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage> map_string_nested_message = 71;
         */
        this.mapStringNestedMessage = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto3.ForeignMessage> map_string_foreign_message = 72;
         */
        this.mapStringForeignMessage = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73;
         */
        this.mapStringNestedEnum = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto3.ForeignEnum> map_string_foreign_enum = 74;
         */
        this.mapStringForeignEnum = {};
        /**
         * @generated from oneof protobuf_test_messages.proto3.TestAllTypesProto3.oneof_field
         */
        this.oneofField = { case: undefined };
        /**
         * @generated from field: repeated google.protobuf.BoolValue repeated_bool_wrapper = 211;
         */
        this.repeatedBoolWrapper = [];
        /**
         * @generated from field: repeated google.protobuf.Int32Value repeated_int32_wrapper = 212;
         */
        this.repeatedInt32Wrapper = [];
        /**
         * @generated from field: repeated google.protobuf.Int64Value repeated_int64_wrapper = 213;
         */
        this.repeatedInt64Wrapper = [];
        /**
         * @generated from field: repeated google.protobuf.UInt32Value repeated_uint32_wrapper = 214;
         */
        this.repeatedUint32Wrapper = [];
        /**
         * @generated from field: repeated google.protobuf.UInt64Value repeated_uint64_wrapper = 215;
         */
        this.repeatedUint64Wrapper = [];
        /**
         * @generated from field: repeated google.protobuf.FloatValue repeated_float_wrapper = 216;
         */
        this.repeatedFloatWrapper = [];
        /**
         * @generated from field: repeated google.protobuf.DoubleValue repeated_double_wrapper = 217;
         */
        this.repeatedDoubleWrapper = [];
        /**
         * @generated from field: repeated google.protobuf.StringValue repeated_string_wrapper = 218;
         */
        this.repeatedStringWrapper = [];
        /**
         * @generated from field: repeated google.protobuf.BytesValue repeated_bytes_wrapper = 219;
         */
        this.repeatedBytesWrapper = [];
        /**
         * @generated from field: google.protobuf.NullValue optional_null_value = 307;
         */
        this.optionalNullValue = NullValue.NULL_VALUE;
        /**
         * @generated from field: repeated google.protobuf.Duration repeated_duration = 311;
         */
        this.repeatedDuration = [];
        /**
         * @generated from field: repeated google.protobuf.Timestamp repeated_timestamp = 312;
         */
        this.repeatedTimestamp = [];
        /**
         * @generated from field: repeated google.protobuf.FieldMask repeated_fieldmask = 313;
         */
        this.repeatedFieldmask = [];
        /**
         * @generated from field: repeated google.protobuf.Struct repeated_struct = 324;
         */
        this.repeatedStruct = [];
        /**
         * @generated from field: repeated google.protobuf.Any repeated_any = 315;
         */
        this.repeatedAny = [];
        /**
         * @generated from field: repeated google.protobuf.Value repeated_value = 316;
         */
        this.repeatedValue = [];
        /**
         * @generated from field: repeated google.protobuf.ListValue repeated_list_value = 317;
         */
        this.repeatedListValue = [];
        /**
         * Test field-name-to-JSON-name convention.
         * (protobuf says names can be any valid C/C++ identifier.)
         *
         * @generated from field: int32 fieldname1 = 401;
         */
        this.fieldname1 = 0;
        /**
         * @generated from field: int32 field_name2 = 402;
         */
        this.fieldName2 = 0;
        /**
         * @generated from field: int32 _field_name3 = 403;
         */
        this.FieldName3 = 0;
        /**
         * @generated from field: int32 field__name4_ = 404;
         */
        this.fieldName4 = 0;
        /**
         * @generated from field: int32 field0name5 = 405;
         */
        this.field0name5 = 0;
        /**
         * @generated from field: int32 field_0_name6 = 406;
         */
        this.field0Name6 = 0;
        /**
         * @generated from field: int32 fieldName7 = 407;
         */
        this.fieldName7 = 0;
        /**
         * @generated from field: int32 FieldName8 = 408;
         */
        this.FieldName8 = 0;
        /**
         * @generated from field: int32 field_Name9 = 409;
         */
        this.fieldName9 = 0;
        /**
         * @generated from field: int32 Field_Name10 = 410;
         */
        this.FieldName10 = 0;
        /**
         * @generated from field: int32 FIELD_NAME11 = 411;
         */
        this.FIELDNAME11 = 0;
        /**
         * @generated from field: int32 FIELD_name12 = 412;
         */
        this.FIELDName12 = 0;
        /**
         * @generated from field: int32 __field_name13 = 413;
         */
        this.FieldName13 = 0;
        /**
         * @generated from field: int32 __Field_name14 = 414;
         */
        this.FieldName14 = 0;
        /**
         * @generated from field: int32 field__name15 = 415;
         */
        this.fieldName15 = 0;
        /**
         * @generated from field: int32 field__Name16 = 416;
         */
        this.fieldName16 = 0;
        /**
         * @generated from field: int32 field_name17__ = 417;
         */
        this.fieldName17 = 0;
        /**
         * @generated from field: int32 Field_name18__ = 418;
         */
        this.FieldName18 = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto3().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto3().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto3().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TestAllTypesProto3, a, b);
    }
}
TestAllTypesProto3.runtime = proto3;
TestAllTypesProto3.typeName = "protobuf_test_messages.proto3.TestAllTypesProto3";
TestAllTypesProto3.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "optional_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "optional_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "optional_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "optional_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */ },
    { no: 6, name: "optional_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
    { no: 7, name: "optional_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 8, name: "optional_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 9, name: "optional_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */ },
    { no: 10, name: "optional_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */ },
    { no: 11, name: "optional_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 12, name: "optional_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 13, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 18, name: "optional_nested_message", kind: "message", T: TestAllTypesProto3_NestedMessage },
    { no: 19, name: "optional_foreign_message", kind: "message", T: ForeignMessage },
    { no: 21, name: "optional_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_NestedEnum) },
    { no: 22, name: "optional_foreign_enum", kind: "enum", T: proto3.getEnumType(ForeignEnum) },
    { no: 23, name: "optional_aliased_enum", kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_AliasedEnum) },
    { no: 24, name: "optional_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 25, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 27, name: "recursive_message", kind: "message", T: TestAllTypesProto3 },
    { no: 31, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 32, name: "repeated_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 33, name: "repeated_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 34, name: "repeated_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 35, name: "repeated_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 36, name: "repeated_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 37, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 38, name: "repeated_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 39, name: "repeated_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 40, name: "repeated_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 41, name: "repeated_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 42, name: "repeated_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 43, name: "repeated_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 44, name: "repeated_string", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 45, name: "repeated_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 48, name: "repeated_nested_message", kind: "message", T: TestAllTypesProto3_NestedMessage, repeated: true },
    { no: 49, name: "repeated_foreign_message", kind: "message", T: ForeignMessage, repeated: true },
    { no: 51, name: "repeated_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_NestedEnum), repeated: true },
    { no: 52, name: "repeated_foreign_enum", kind: "enum", T: proto3.getEnumType(ForeignEnum), repeated: true },
    { no: 54, name: "repeated_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 55, name: "repeated_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 75, name: "packed_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 76, name: "packed_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 77, name: "packed_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 78, name: "packed_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 79, name: "packed_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 80, name: "packed_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 81, name: "packed_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 82, name: "packed_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 83, name: "packed_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 84, name: "packed_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 85, name: "packed_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 86, name: "packed_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 87, name: "packed_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 88, name: "packed_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_NestedEnum), repeated: true },
    { no: 89, name: "unpacked_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: false },
    { no: 90, name: "unpacked_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true, packed: false },
    { no: 91, name: "unpacked_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: false },
    { no: 92, name: "unpacked_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true, packed: false },
    { no: 93, name: "unpacked_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true, packed: false },
    { no: 94, name: "unpacked_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true, packed: false },
    { no: 95, name: "unpacked_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true, packed: false },
    { no: 96, name: "unpacked_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true, packed: false },
    { no: 97, name: "unpacked_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true, packed: false },
    { no: 98, name: "unpacked_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true, packed: false },
    { no: 99, name: "unpacked_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true, packed: false },
    { no: 100, name: "unpacked_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: false },
    { no: 101, name: "unpacked_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true, packed: false },
    { no: 102, name: "unpacked_nested_enum", kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_NestedEnum), repeated: true, packed: false },
    { no: 56, name: "map_int32_int32", kind: "map", K: 5 /* ScalarType.INT32 */, V: { kind: "scalar", T: 5 /* ScalarType.INT32 */ } },
    { no: 57, name: "map_int64_int64", kind: "map", K: 3 /* ScalarType.INT64 */, V: { kind: "scalar", T: 3 /* ScalarType.INT64 */ } },
    { no: 58, name: "map_uint32_uint32", kind: "map", K: 13 /* ScalarType.UINT32 */, V: { kind: "scalar", T: 13 /* ScalarType.UINT32 */ } },
    { no: 59, name: "map_uint64_uint64", kind: "map", K: 4 /* ScalarType.UINT64 */, V: { kind: "scalar", T: 4 /* ScalarType.UINT64 */ } },
    { no: 60, name: "map_sint32_sint32", kind: "map", K: 17 /* ScalarType.SINT32 */, V: { kind: "scalar", T: 17 /* ScalarType.SINT32 */ } },
    { no: 61, name: "map_sint64_sint64", kind: "map", K: 18 /* ScalarType.SINT64 */, V: { kind: "scalar", T: 18 /* ScalarType.SINT64 */ } },
    { no: 62, name: "map_fixed32_fixed32", kind: "map", K: 7 /* ScalarType.FIXED32 */, V: { kind: "scalar", T: 7 /* ScalarType.FIXED32 */ } },
    { no: 63, name: "map_fixed64_fixed64", kind: "map", K: 6 /* ScalarType.FIXED64 */, V: { kind: "scalar", T: 6 /* ScalarType.FIXED64 */ } },
    { no: 64, name: "map_sfixed32_sfixed32", kind: "map", K: 15 /* ScalarType.SFIXED32 */, V: { kind: "scalar", T: 15 /* ScalarType.SFIXED32 */ } },
    { no: 65, name: "map_sfixed64_sfixed64", kind: "map", K: 16 /* ScalarType.SFIXED64 */, V: { kind: "scalar", T: 16 /* ScalarType.SFIXED64 */ } },
    { no: 66, name: "map_int32_float", kind: "map", K: 5 /* ScalarType.INT32 */, V: { kind: "scalar", T: 2 /* ScalarType.FLOAT */ } },
    { no: 67, name: "map_int32_double", kind: "map", K: 5 /* ScalarType.INT32 */, V: { kind: "scalar", T: 1 /* ScalarType.DOUBLE */ } },
    { no: 68, name: "map_bool_bool", kind: "map", K: 8 /* ScalarType.BOOL */, V: { kind: "scalar", T: 8 /* ScalarType.BOOL */ } },
    { no: 69, name: "map_string_string", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "scalar", T: 9 /* ScalarType.STRING */ } },
    { no: 70, name: "map_string_bytes", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "scalar", T: 12 /* ScalarType.BYTES */ } },
    { no: 71, name: "map_string_nested_message", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: TestAllTypesProto3_NestedMessage } },
    { no: 72, name: "map_string_foreign_message", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: ForeignMessage } },
    { no: 73, name: "map_string_nested_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_NestedEnum) } },
    { no: 74, name: "map_string_foreign_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "enum", T: proto3.getEnumType(ForeignEnum) } },
    { no: 111, name: "oneof_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "oneof_field" },
    { no: 112, name: "oneof_nested_message", kind: "message", T: TestAllTypesProto3_NestedMessage, oneof: "oneof_field" },
    { no: 113, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 114, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field" },
    { no: 115, name: "oneof_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "oneof_field" },
    { no: 116, name: "oneof_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "oneof_field" },
    { no: 117, name: "oneof_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "oneof_field" },
    { no: 118, name: "oneof_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "oneof_field" },
    { no: 119, name: "oneof_enum", kind: "enum", T: proto3.getEnumType(TestAllTypesProto3_NestedEnum), oneof: "oneof_field" },
    { no: 120, name: "oneof_null_value", kind: "enum", T: proto3.getEnumType(NullValue), oneof: "oneof_field" },
    { no: 201, name: "optional_bool_wrapper", kind: "message", T: BoolValue },
    { no: 202, name: "optional_int32_wrapper", kind: "message", T: Int32Value },
    { no: 203, name: "optional_int64_wrapper", kind: "message", T: Int64Value },
    { no: 204, name: "optional_uint32_wrapper", kind: "message", T: UInt32Value },
    { no: 205, name: "optional_uint64_wrapper", kind: "message", T: UInt64Value },
    { no: 206, name: "optional_float_wrapper", kind: "message", T: FloatValue },
    { no: 207, name: "optional_double_wrapper", kind: "message", T: DoubleValue },
    { no: 208, name: "optional_string_wrapper", kind: "message", T: StringValue },
    { no: 209, name: "optional_bytes_wrapper", kind: "message", T: BytesValue },
    { no: 211, name: "repeated_bool_wrapper", kind: "message", T: BoolValue, repeated: true },
    { no: 212, name: "repeated_int32_wrapper", kind: "message", T: Int32Value, repeated: true },
    { no: 213, name: "repeated_int64_wrapper", kind: "message", T: Int64Value, repeated: true },
    { no: 214, name: "repeated_uint32_wrapper", kind: "message", T: UInt32Value, repeated: true },
    { no: 215, name: "repeated_uint64_wrapper", kind: "message", T: UInt64Value, repeated: true },
    { no: 216, name: "repeated_float_wrapper", kind: "message", T: FloatValue, repeated: true },
    { no: 217, name: "repeated_double_wrapper", kind: "message", T: DoubleValue, repeated: true },
    { no: 218, name: "repeated_string_wrapper", kind: "message", T: StringValue, repeated: true },
    { no: 219, name: "repeated_bytes_wrapper", kind: "message", T: BytesValue, repeated: true },
    { no: 301, name: "optional_duration", kind: "message", T: Duration },
    { no: 302, name: "optional_timestamp", kind: "message", T: Timestamp },
    { no: 303, name: "optional_field_mask", kind: "message", T: FieldMask },
    { no: 304, name: "optional_struct", kind: "message", T: Struct },
    { no: 305, name: "optional_any", kind: "message", T: Any },
    { no: 306, name: "optional_value", kind: "message", T: Value },
    { no: 307, name: "optional_null_value", kind: "enum", T: proto3.getEnumType(NullValue) },
    { no: 311, name: "repeated_duration", kind: "message", T: Duration, repeated: true },
    { no: 312, name: "repeated_timestamp", kind: "message", T: Timestamp, repeated: true },
    { no: 313, name: "repeated_fieldmask", kind: "message", T: FieldMask, repeated: true },
    { no: 324, name: "repeated_struct", kind: "message", T: Struct, repeated: true },
    { no: 315, name: "repeated_any", kind: "message", T: Any, repeated: true },
    { no: 316, name: "repeated_value", kind: "message", T: Value, repeated: true },
    { no: 317, name: "repeated_list_value", kind: "message", T: ListValue, repeated: true },
    { no: 401, name: "fieldname1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 402, name: "field_name2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 403, name: "_field_name3", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 404, name: "field__name4_", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 405, name: "field0name5", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 406, name: "field_0_name6", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 407, name: "fieldName7", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 408, name: "FieldName8", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 409, name: "field_Name9", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 410, name: "Field_Name10", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 411, name: "FIELD_NAME11", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 412, name: "FIELD_name12", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 413, name: "__field_name13", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 414, name: "__Field_name14", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 415, name: "field__name15", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 416, name: "field__Name16", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 417, name: "field_name17__", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 418, name: "Field_name18__", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
]);
/**
 * @generated from enum protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum
 */
export var TestAllTypesProto3_NestedEnum;
(function (TestAllTypesProto3_NestedEnum) {
    /**
     * @generated from enum value: FOO = 0;
     */
    TestAllTypesProto3_NestedEnum[TestAllTypesProto3_NestedEnum["FOO"] = 0] = "FOO";
    /**
     * @generated from enum value: BAR = 1;
     */
    TestAllTypesProto3_NestedEnum[TestAllTypesProto3_NestedEnum["BAR"] = 1] = "BAR";
    /**
     * @generated from enum value: BAZ = 2;
     */
    TestAllTypesProto3_NestedEnum[TestAllTypesProto3_NestedEnum["BAZ"] = 2] = "BAZ";
    /**
     * Intentionally negative.
     *
     * @generated from enum value: NEG = -1;
     */
    TestAllTypesProto3_NestedEnum[TestAllTypesProto3_NestedEnum["NEG"] = -1] = "NEG";
})(TestAllTypesProto3_NestedEnum || (TestAllTypesProto3_NestedEnum = {}));
// Retrieve enum metadata with: proto3.getEnumType(TestAllTypesProto3_NestedEnum)
proto3.util.setEnumType(TestAllTypesProto3_NestedEnum, "protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum", [
    { no: 0, name: "FOO" },
    { no: 1, name: "BAR" },
    { no: 2, name: "BAZ" },
    { no: -1, name: "NEG" },
]);
/**
 * @generated from enum protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum
 */
export var TestAllTypesProto3_AliasedEnum;
(function (TestAllTypesProto3_AliasedEnum) {
    /**
     * @generated from enum value: ALIAS_FOO = 0;
     */
    TestAllTypesProto3_AliasedEnum[TestAllTypesProto3_AliasedEnum["ALIAS_FOO"] = 0] = "ALIAS_FOO";
    /**
     * @generated from enum value: ALIAS_BAR = 1;
     */
    TestAllTypesProto3_AliasedEnum[TestAllTypesProto3_AliasedEnum["ALIAS_BAR"] = 1] = "ALIAS_BAR";
    /**
     * @generated from enum value: ALIAS_BAZ = 2;
     */
    TestAllTypesProto3_AliasedEnum[TestAllTypesProto3_AliasedEnum["ALIAS_BAZ"] = 2] = "ALIAS_BAZ";
    /**
     * @generated from enum value: MOO = 2;
     */
    TestAllTypesProto3_AliasedEnum[TestAllTypesProto3_AliasedEnum["MOO"] = 2] = "MOO";
    /**
     * @generated from enum value: moo = 2;
     */
    TestAllTypesProto3_AliasedEnum[TestAllTypesProto3_AliasedEnum["moo"] = 2] = "moo";
    /**
     * @generated from enum value: bAz = 2;
     */
    TestAllTypesProto3_AliasedEnum[TestAllTypesProto3_AliasedEnum["bAz"] = 2] = "bAz";
})(TestAllTypesProto3_AliasedEnum || (TestAllTypesProto3_AliasedEnum = {}));
// Retrieve enum metadata with: proto3.getEnumType(TestAllTypesProto3_AliasedEnum)
proto3.util.setEnumType(TestAllTypesProto3_AliasedEnum, "protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum", [
    { no: 0, name: "ALIAS_FOO" },
    { no: 1, name: "ALIAS_BAR" },
    { no: 2, name: "ALIAS_BAZ" },
    { no: 2, name: "MOO" },
    { no: 2, name: "moo" },
    { no: 2, name: "bAz" },
]);
/**
 * @generated from message protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
 */
export class TestAllTypesProto3_NestedMessage extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int32 a = 1;
         */
        this.a = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto3_NestedMessage().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto3_NestedMessage().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto3_NestedMessage().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TestAllTypesProto3_NestedMessage, a, b);
    }
}
TestAllTypesProto3_NestedMessage.runtime = proto3;
TestAllTypesProto3_NestedMessage.typeName = "protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage";
TestAllTypesProto3_NestedMessage.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "corecursive", kind: "message", T: TestAllTypesProto3 },
]);
/**
 * @generated from message protobuf_test_messages.proto3.ForeignMessage
 */
export class ForeignMessage extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int32 c = 1;
         */
        this.c = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ForeignMessage().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ForeignMessage().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ForeignMessage().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ForeignMessage, a, b);
    }
}
ForeignMessage.runtime = proto3;
ForeignMessage.typeName = "protobuf_test_messages.proto3.ForeignMessage";
ForeignMessage.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
]);
/**
 * @generated from message protobuf_test_messages.proto3.NullHypothesisProto3
 */
export class NullHypothesisProto3 extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new NullHypothesisProto3().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new NullHypothesisProto3().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new NullHypothesisProto3().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(NullHypothesisProto3, a, b);
    }
}
NullHypothesisProto3.runtime = proto3;
NullHypothesisProto3.typeName = "protobuf_test_messages.proto3.NullHypothesisProto3";
NullHypothesisProto3.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message protobuf_test_messages.proto3.EnumOnlyProto3
 */
export class EnumOnlyProto3 extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EnumOnlyProto3().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EnumOnlyProto3().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EnumOnlyProto3().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EnumOnlyProto3, a, b);
    }
}
EnumOnlyProto3.runtime = proto3;
EnumOnlyProto3.typeName = "protobuf_test_messages.proto3.EnumOnlyProto3";
EnumOnlyProto3.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from enum protobuf_test_messages.proto3.EnumOnlyProto3.Bool
 */
export var EnumOnlyProto3_Bool;
(function (EnumOnlyProto3_Bool) {
    /**
     * @generated from enum value: kFalse = 0;
     */
    EnumOnlyProto3_Bool[EnumOnlyProto3_Bool["kFalse"] = 0] = "kFalse";
    /**
     * @generated from enum value: kTrue = 1;
     */
    EnumOnlyProto3_Bool[EnumOnlyProto3_Bool["kTrue"] = 1] = "kTrue";
})(EnumOnlyProto3_Bool || (EnumOnlyProto3_Bool = {}));
// Retrieve enum metadata with: proto3.getEnumType(EnumOnlyProto3_Bool)
proto3.util.setEnumType(EnumOnlyProto3_Bool, "protobuf_test_messages.proto3.EnumOnlyProto3.Bool", [
    { no: 0, name: "kFalse" },
    { no: 1, name: "kTrue" },
]);
