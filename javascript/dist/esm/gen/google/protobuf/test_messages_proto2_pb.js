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
// Test schema for proto2 messages.  This test schema is used by:
//
// - conformance tests
//
import { Message, proto2, protoInt64 } from "@bufbuild/protobuf";
/**
 * @generated from enum protobuf_test_messages.proto2.ForeignEnumProto2
 */
export var ForeignEnumProto2;
(function (ForeignEnumProto2) {
    /**
     * @generated from enum value: FOREIGN_FOO = 0;
     */
    ForeignEnumProto2[ForeignEnumProto2["FOREIGN_FOO"] = 0] = "FOREIGN_FOO";
    /**
     * @generated from enum value: FOREIGN_BAR = 1;
     */
    ForeignEnumProto2[ForeignEnumProto2["FOREIGN_BAR"] = 1] = "FOREIGN_BAR";
    /**
     * @generated from enum value: FOREIGN_BAZ = 2;
     */
    ForeignEnumProto2[ForeignEnumProto2["FOREIGN_BAZ"] = 2] = "FOREIGN_BAZ";
})(ForeignEnumProto2 || (ForeignEnumProto2 = {}));
// Retrieve enum metadata with: proto2.getEnumType(ForeignEnumProto2)
proto2.util.setEnumType(ForeignEnumProto2, "protobuf_test_messages.proto2.ForeignEnumProto2", [
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
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2
 */
export class TestAllTypesProto2 extends Message {
    constructor(data) {
        super();
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
         * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage repeated_nested_message = 48;
         */
        this.repeatedNestedMessage = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto2.ForeignMessageProto2 repeated_foreign_message = 49;
         */
        this.repeatedForeignMessage = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum repeated_nested_enum = 51;
         */
        this.repeatedNestedEnum = [];
        /**
         * @generated from field: repeated protobuf_test_messages.proto2.ForeignEnumProto2 repeated_foreign_enum = 52;
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
         * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum packed_nested_enum = 88 [packed = true];
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
         * @generated from field: repeated protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum unpacked_nested_enum = 102 [packed = false];
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
         * @generated from field: map<string, protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage> map_string_nested_message = 71;
         */
        this.mapStringNestedMessage = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto2.ForeignMessageProto2> map_string_foreign_message = 72;
         */
        this.mapStringForeignMessage = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum> map_string_nested_enum = 73;
         */
        this.mapStringNestedEnum = {};
        /**
         * @generated from field: map<string, protobuf_test_messages.proto2.ForeignEnumProto2> map_string_foreign_enum = 74;
         */
        this.mapStringForeignEnum = {};
        /**
         * @generated from oneof protobuf_test_messages.proto2.TestAllTypesProto2.oneof_field
         */
        this.oneofField = { case: undefined };
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(TestAllTypesProto2, a, b);
    }
}
TestAllTypesProto2.runtime = proto2;
TestAllTypesProto2.typeName = "protobuf_test_messages.proto2.TestAllTypesProto2";
TestAllTypesProto2.fields = proto2.util.newFieldList(() => [
    { no: 1, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "optional_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "optional_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "optional_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "optional_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true },
    { no: 6, name: "optional_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 7, name: "optional_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true },
    { no: 8, name: "optional_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 9, name: "optional_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true },
    { no: 10, name: "optional_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 11, name: "optional_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 12, name: "optional_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 13, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 14, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 18, name: "optional_nested_message", kind: "message", T: TestAllTypesProto2_NestedMessage, opt: true },
    { no: 19, name: "optional_foreign_message", kind: "message", T: ForeignMessageProto2, opt: true },
    { no: 21, name: "optional_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), opt: true },
    { no: 22, name: "optional_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumProto2), opt: true },
    { no: 24, name: "optional_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 25, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 27, name: "recursive_message", kind: "message", T: TestAllTypesProto2, opt: true },
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
    { no: 48, name: "repeated_nested_message", kind: "message", T: TestAllTypesProto2_NestedMessage, repeated: true },
    { no: 49, name: "repeated_foreign_message", kind: "message", T: ForeignMessageProto2, repeated: true },
    { no: 51, name: "repeated_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), repeated: true },
    { no: 52, name: "repeated_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumProto2), repeated: true },
    { no: 54, name: "repeated_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 55, name: "repeated_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 75, name: "packed_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 76, name: "packed_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true, packed: true },
    { no: 77, name: "packed_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: true },
    { no: 78, name: "packed_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true, packed: true },
    { no: 79, name: "packed_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true, packed: true },
    { no: 80, name: "packed_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true, packed: true },
    { no: 81, name: "packed_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true, packed: true },
    { no: 82, name: "packed_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true, packed: true },
    { no: 83, name: "packed_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true, packed: true },
    { no: 84, name: "packed_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true, packed: true },
    { no: 85, name: "packed_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true, packed: true },
    { no: 86, name: "packed_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: true },
    { no: 87, name: "packed_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true, packed: true },
    { no: 88, name: "packed_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), repeated: true, packed: true },
    { no: 89, name: "unpacked_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 90, name: "unpacked_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 91, name: "unpacked_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 92, name: "unpacked_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 93, name: "unpacked_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 94, name: "unpacked_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 95, name: "unpacked_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 96, name: "unpacked_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 97, name: "unpacked_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 98, name: "unpacked_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 99, name: "unpacked_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 100, name: "unpacked_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 101, name: "unpacked_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 102, name: "unpacked_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), repeated: true },
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
    { no: 71, name: "map_string_nested_message", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: TestAllTypesProto2_NestedMessage } },
    { no: 72, name: "map_string_foreign_message", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: ForeignMessageProto2 } },
    { no: 73, name: "map_string_nested_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum) } },
    { no: 74, name: "map_string_foreign_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "enum", T: proto2.getEnumType(ForeignEnumProto2) } },
    { no: 111, name: "oneof_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "oneof_field" },
    { no: 112, name: "oneof_nested_message", kind: "message", T: TestAllTypesProto2_NestedMessage, oneof: "oneof_field" },
    { no: 113, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 114, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field" },
    { no: 115, name: "oneof_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "oneof_field" },
    { no: 116, name: "oneof_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "oneof_field" },
    { no: 117, name: "oneof_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "oneof_field" },
    { no: 118, name: "oneof_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "oneof_field" },
    { no: 119, name: "oneof_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), oneof: "oneof_field" },
    { no: 201, name: "data", kind: "message", T: TestAllTypesProto2_Data, opt: true },
    { no: 241, name: "default_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: -123456789 },
    { no: 242, name: "default_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true, default: protoInt64.parse("-9123456789123456789") },
    { no: 243, name: "default_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true, default: 2123456789 },
    { no: 244, name: "default_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true, default: protoInt64.uParse("10123456789123456789") },
    { no: 245, name: "default_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true, default: -123456789 },
    { no: 246, name: "default_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true, default: protoInt64.parse("-9123456789123456789") },
    { no: 247, name: "default_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true, default: 2123456789 },
    { no: 248, name: "default_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true, default: protoInt64.uParse("10123456789123456789") },
    { no: 249, name: "default_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true, default: -123456789 },
    { no: 250, name: "default_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true, default: protoInt64.parse("-9123456789123456789") },
    { no: 251, name: "default_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true, default: 9000000000 },
    { no: 252, name: "default_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true, default: 7e+22 },
    { no: 253, name: "default_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: true },
    { no: 254, name: "default_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "Rosebud" },
    { no: 255, name: "default_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true, default: new Uint8Array([0x6A, 0x6F, 0x73, 0x68, 0x75, 0x61]) },
    { no: 401, name: "fieldname1", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 402, name: "field_name2", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 403, name: "_field_name3", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 404, name: "field__name4_", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 405, name: "field0name5", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 406, name: "field_0_name6", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 407, name: "fieldName7", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 408, name: "FieldName8", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 409, name: "field_Name9", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 410, name: "Field_Name10", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 411, name: "FIELD_NAME11", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 412, name: "FIELD_name12", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 413, name: "__field_name13", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 414, name: "__Field_name14", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 415, name: "field__name15", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 416, name: "field__Name16", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 417, name: "field_name17__", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 418, name: "Field_name18__", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
]);
/**
 * @generated from enum protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum
 */
export var TestAllTypesProto2_NestedEnum;
(function (TestAllTypesProto2_NestedEnum) {
    /**
     * @generated from enum value: FOO = 0;
     */
    TestAllTypesProto2_NestedEnum[TestAllTypesProto2_NestedEnum["FOO"] = 0] = "FOO";
    /**
     * @generated from enum value: BAR = 1;
     */
    TestAllTypesProto2_NestedEnum[TestAllTypesProto2_NestedEnum["BAR"] = 1] = "BAR";
    /**
     * @generated from enum value: BAZ = 2;
     */
    TestAllTypesProto2_NestedEnum[TestAllTypesProto2_NestedEnum["BAZ"] = 2] = "BAZ";
    /**
     * Intentionally negative.
     *
     * @generated from enum value: NEG = -1;
     */
    TestAllTypesProto2_NestedEnum[TestAllTypesProto2_NestedEnum["NEG"] = -1] = "NEG";
})(TestAllTypesProto2_NestedEnum || (TestAllTypesProto2_NestedEnum = {}));
// Retrieve enum metadata with: proto2.getEnumType(TestAllTypesProto2_NestedEnum)
proto2.util.setEnumType(TestAllTypesProto2_NestedEnum, "protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum", [
    { no: 0, name: "FOO" },
    { no: 1, name: "BAR" },
    { no: 2, name: "BAZ" },
    { no: -1, name: "NEG" },
]);
/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
 */
export class TestAllTypesProto2_NestedMessage extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto2_NestedMessage().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto2_NestedMessage().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto2_NestedMessage().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(TestAllTypesProto2_NestedMessage, a, b);
    }
}
TestAllTypesProto2_NestedMessage.runtime = proto2;
TestAllTypesProto2_NestedMessage.typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage";
TestAllTypesProto2_NestedMessage.fields = proto2.util.newFieldList(() => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "corecursive", kind: "message", T: TestAllTypesProto2, opt: true },
]);
/**
 * groups
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.Data
 */
export class TestAllTypesProto2_Data extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto2_Data().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto2_Data().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto2_Data().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(TestAllTypesProto2_Data, a, b);
    }
}
TestAllTypesProto2_Data.runtime = proto2;
TestAllTypesProto2_Data.typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.Data";
TestAllTypesProto2_Data.fields = proto2.util.newFieldList(() => [
    { no: 202, name: "group_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 203, name: "group_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
]);
/**
 * message_set test case.
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
 */
export class TestAllTypesProto2_MessageSetCorrect extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto2_MessageSetCorrect().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto2_MessageSetCorrect().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto2_MessageSetCorrect().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(TestAllTypesProto2_MessageSetCorrect, a, b);
    }
}
TestAllTypesProto2_MessageSetCorrect.runtime = proto2;
TestAllTypesProto2_MessageSetCorrect.typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect";
TestAllTypesProto2_MessageSetCorrect.fields = proto2.util.newFieldList(() => []);
/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
 */
export class TestAllTypesProto2_MessageSetCorrectExtension1 extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto2_MessageSetCorrectExtension1().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto2_MessageSetCorrectExtension1().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto2_MessageSetCorrectExtension1().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(TestAllTypesProto2_MessageSetCorrectExtension1, a, b);
    }
}
TestAllTypesProto2_MessageSetCorrectExtension1.runtime = proto2;
TestAllTypesProto2_MessageSetCorrectExtension1.typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1";
TestAllTypesProto2_MessageSetCorrectExtension1.fields = proto2.util.newFieldList(() => [
    { no: 25, name: "str", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
 */
export class TestAllTypesProto2_MessageSetCorrectExtension2 extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TestAllTypesProto2_MessageSetCorrectExtension2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TestAllTypesProto2_MessageSetCorrectExtension2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TestAllTypesProto2_MessageSetCorrectExtension2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(TestAllTypesProto2_MessageSetCorrectExtension2, a, b);
    }
}
TestAllTypesProto2_MessageSetCorrectExtension2.runtime = proto2;
TestAllTypesProto2_MessageSetCorrectExtension2.typeName = "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2";
TestAllTypesProto2_MessageSetCorrectExtension2.fields = proto2.util.newFieldList(() => [
    { no: 9, name: "i", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
]);
/**
 * @generated from message protobuf_test_messages.proto2.ForeignMessageProto2
 */
export class ForeignMessageProto2 extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ForeignMessageProto2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ForeignMessageProto2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ForeignMessageProto2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(ForeignMessageProto2, a, b);
    }
}
ForeignMessageProto2.runtime = proto2;
ForeignMessageProto2.typeName = "protobuf_test_messages.proto2.ForeignMessageProto2";
ForeignMessageProto2.fields = proto2.util.newFieldList(() => [
    { no: 1, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
]);
/**
 * @generated from message protobuf_test_messages.proto2.UnknownToTestAllTypes
 */
export class UnknownToTestAllTypes extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated int32 repeated_int32 = 1011;
         */
        this.repeatedInt32 = [];
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UnknownToTestAllTypes().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UnknownToTestAllTypes().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UnknownToTestAllTypes().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(UnknownToTestAllTypes, a, b);
    }
}
UnknownToTestAllTypes.runtime = proto2;
UnknownToTestAllTypes.typeName = "protobuf_test_messages.proto2.UnknownToTestAllTypes";
UnknownToTestAllTypes.fields = proto2.util.newFieldList(() => [
    { no: 1001, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 1002, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 1003, name: "nested_message", kind: "message", T: ForeignMessageProto2, opt: true },
    { no: 1004, name: "optionalgroup", kind: "message", T: UnknownToTestAllTypes_OptionalGroup, opt: true },
    { no: 1006, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 1011, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
]);
/**
 * @generated from message protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
 */
export class UnknownToTestAllTypes_OptionalGroup extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UnknownToTestAllTypes_OptionalGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UnknownToTestAllTypes_OptionalGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UnknownToTestAllTypes_OptionalGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(UnknownToTestAllTypes_OptionalGroup, a, b);
    }
}
UnknownToTestAllTypes_OptionalGroup.runtime = proto2;
UnknownToTestAllTypes_OptionalGroup.typeName = "protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup";
UnknownToTestAllTypes_OptionalGroup.fields = proto2.util.newFieldList(() => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
]);
/**
 * @generated from message protobuf_test_messages.proto2.NullHypothesisProto2
 */
export class NullHypothesisProto2 extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new NullHypothesisProto2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new NullHypothesisProto2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new NullHypothesisProto2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(NullHypothesisProto2, a, b);
    }
}
NullHypothesisProto2.runtime = proto2;
NullHypothesisProto2.typeName = "protobuf_test_messages.proto2.NullHypothesisProto2";
NullHypothesisProto2.fields = proto2.util.newFieldList(() => []);
/**
 * @generated from message protobuf_test_messages.proto2.EnumOnlyProto2
 */
export class EnumOnlyProto2 extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EnumOnlyProto2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EnumOnlyProto2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EnumOnlyProto2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(EnumOnlyProto2, a, b);
    }
}
EnumOnlyProto2.runtime = proto2;
EnumOnlyProto2.typeName = "protobuf_test_messages.proto2.EnumOnlyProto2";
EnumOnlyProto2.fields = proto2.util.newFieldList(() => []);
/**
 * @generated from enum protobuf_test_messages.proto2.EnumOnlyProto2.Bool
 */
export var EnumOnlyProto2_Bool;
(function (EnumOnlyProto2_Bool) {
    /**
     * @generated from enum value: kFalse = 0;
     */
    EnumOnlyProto2_Bool[EnumOnlyProto2_Bool["kFalse"] = 0] = "kFalse";
    /**
     * @generated from enum value: kTrue = 1;
     */
    EnumOnlyProto2_Bool[EnumOnlyProto2_Bool["kTrue"] = 1] = "kTrue";
})(EnumOnlyProto2_Bool || (EnumOnlyProto2_Bool = {}));
// Retrieve enum metadata with: proto2.getEnumType(EnumOnlyProto2_Bool)
proto2.util.setEnumType(EnumOnlyProto2_Bool, "protobuf_test_messages.proto2.EnumOnlyProto2.Bool", [
    { no: 0, name: "kFalse" },
    { no: 1, name: "kTrue" },
]);
/**
 * @generated from message protobuf_test_messages.proto2.OneStringProto2
 */
export class OneStringProto2 extends Message {
    constructor(data) {
        super();
        proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OneStringProto2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OneStringProto2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OneStringProto2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto2.util.equals(OneStringProto2, a, b);
    }
}
OneStringProto2.runtime = proto2;
OneStringProto2.typeName = "protobuf_test_messages.proto2.OneStringProto2";
OneStringProto2.fields = proto2.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
