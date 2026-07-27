/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/light.js";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  "conformance": {
    "options": {
      "java_package": "com.google.protobuf.conformance",
      "objc_class_prefix": "Conformance"
    },
    "nested": {
      "TestStatus": {
        "fields": {
          "name": {
            "type": "string",
            "id": 1
          },
          "failureMessage": {
            "type": "string",
            "id": 2,
            "protoName": "failure_message"
          },
          "matchedName": {
            "type": "string",
            "id": 3,
            "protoName": "matched_name"
          }
        }
      },
      "FailureSet": {
        "fields": {
          "test": {
            "rule": "repeated",
            "type": ".conformance.TestStatus",
            "id": 2
          }
        },
        "reserved": [
          [
            1,
            1
          ]
        ]
      },
      "ConformanceRequest": {
        "oneofs": {
          "payload": {
            "oneof": [
              "protobufPayload",
              "jsonPayload",
              "jspbPayload",
              "textPayload"
            ]
          }
        },
        "fields": {
          "protobufPayload": {
            "type": "bytes",
            "id": 1,
            "protoName": "protobuf_payload"
          },
          "jsonPayload": {
            "type": "string",
            "id": 2,
            "protoName": "json_payload"
          },
          "jspbPayload": {
            "type": "string",
            "id": 7,
            "protoName": "jspb_payload"
          },
          "textPayload": {
            "type": "string",
            "id": 8,
            "protoName": "text_payload"
          },
          "requestedOutputFormat": {
            "type": ".conformance.WireFormat",
            "id": 3,
            "protoName": "requested_output_format"
          },
          "messageType": {
            "type": "string",
            "id": 4,
            "protoName": "message_type"
          },
          "testCategory": {
            "type": ".conformance.TestCategory",
            "id": 5,
            "protoName": "test_category"
          },
          "jspbEncodingOptions": {
            "type": ".conformance.JspbEncodingConfig",
            "id": 6,
            "protoName": "jspb_encoding_options"
          },
          "printUnknownFields": {
            "type": "bool",
            "id": 9,
            "protoName": "print_unknown_fields"
          }
        }
      },
      "ConformanceResponse": {
        "oneofs": {
          "result": {
            "oneof": [
              "parseError",
              "serializeError",
              "timeoutError",
              "runtimeError",
              "protobufPayload",
              "jsonPayload",
              "skipped",
              "jspbPayload",
              "textPayload"
            ]
          }
        },
        "fields": {
          "parseError": {
            "type": "string",
            "id": 1,
            "protoName": "parse_error"
          },
          "serializeError": {
            "type": "string",
            "id": 6,
            "protoName": "serialize_error"
          },
          "timeoutError": {
            "type": "string",
            "id": 9,
            "protoName": "timeout_error"
          },
          "runtimeError": {
            "type": "string",
            "id": 2,
            "protoName": "runtime_error"
          },
          "protobufPayload": {
            "type": "bytes",
            "id": 3,
            "protoName": "protobuf_payload"
          },
          "jsonPayload": {
            "type": "string",
            "id": 4,
            "protoName": "json_payload"
          },
          "skipped": {
            "type": "string",
            "id": 5
          },
          "jspbPayload": {
            "type": "string",
            "id": 7,
            "protoName": "jspb_payload"
          },
          "textPayload": {
            "type": "string",
            "id": 8,
            "protoName": "text_payload"
          }
        }
      },
      "JspbEncodingConfig": {
        "fields": {
          "useJspbArrayAnyFormat": {
            "type": "bool",
            "id": 1,
            "protoName": "use_jspb_array_any_format"
          }
        }
      },
      "WireFormat": {
        "values": {
          "UNSPECIFIED": 0,
          "PROTOBUF": 1,
          "JSON": 2,
          "JSPB": 3,
          "TEXT_FORMAT": 4
        }
      },
      "TestCategory": {
        "values": {
          "UNSPECIFIED_TEST": 0,
          "BINARY_TEST": 1,
          "JSON_TEST": 2,
          "JSON_IGNORE_UNKNOWN_PARSING_TEST": 3,
          "JSPB_TEST": 4,
          "TEXT_FORMAT_TEST": 5
        }
      }
    }
  },
  "protobuf_test_messages": {
    "nested": {
      "editions": {
        "options": {
          "java_package": "com.google.protobuf_test_messages.edition2023",
          "java_multiple_files": true,
          "objc_class_prefix": "Editions",
          "features": {
            "message_encoding": "DELIMITED"
          }
        },
        "nested": {
          "ComplexMessage": {
            "edition": "2023",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            },
            "fields": {
              "d": {
                "type": "int32",
                "id": 1
              }
            }
          },
          "TestAllTypesEdition2023": {
            "edition": "2023",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            },
            "oneofs": {
              "oneofField": {
                "oneof": [
                  "oneofUint32",
                  "oneofNestedMessage",
                  "oneofString",
                  "oneofBytes",
                  "oneofBool",
                  "oneofUint64",
                  "oneofFloat",
                  "oneofDouble",
                  "oneofEnum"
                ]
              }
            },
            "fields": {
              "optionalInt32": {
                "type": "int32",
                "id": 1,
                "protoName": "optional_int32"
              },
              "optionalInt64": {
                "type": "int64",
                "id": 2,
                "protoName": "optional_int64"
              },
              "optionalUint32": {
                "type": "uint32",
                "id": 3,
                "protoName": "optional_uint32"
              },
              "optionalUint64": {
                "type": "uint64",
                "id": 4,
                "protoName": "optional_uint64"
              },
              "optionalSint32": {
                "type": "sint32",
                "id": 5,
                "protoName": "optional_sint32"
              },
              "optionalSint64": {
                "type": "sint64",
                "id": 6,
                "protoName": "optional_sint64"
              },
              "optionalFixed32": {
                "type": "fixed32",
                "id": 7,
                "protoName": "optional_fixed32"
              },
              "optionalFixed64": {
                "type": "fixed64",
                "id": 8,
                "protoName": "optional_fixed64"
              },
              "optionalSfixed32": {
                "type": "sfixed32",
                "id": 9,
                "protoName": "optional_sfixed32"
              },
              "optionalSfixed64": {
                "type": "sfixed64",
                "id": 10,
                "protoName": "optional_sfixed64"
              },
              "optionalFloat": {
                "type": "float",
                "id": 11,
                "protoName": "optional_float"
              },
              "optionalDouble": {
                "type": "double",
                "id": 12,
                "protoName": "optional_double"
              },
              "optionalBool": {
                "type": "bool",
                "id": 13,
                "protoName": "optional_bool"
              },
              "optionalString": {
                "type": "string",
                "id": 14,
                "protoName": "optional_string"
              },
              "optionalBytes": {
                "type": "bytes",
                "id": 15,
                "protoName": "optional_bytes"
              },
              "optionalNestedMessage": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage",
                "id": 18,
                "protoName": "optional_nested_message",
                "options": {
                  "features": {
                    "message_encoding": "LENGTH_PREFIXED"
                  }
                }
              },
              "optionalForeignMessage": {
                "type": ".protobuf_test_messages.editions.ForeignMessageEdition2023",
                "id": 19,
                "protoName": "optional_foreign_message",
                "options": {
                  "features": {
                    "message_encoding": "LENGTH_PREFIXED"
                  }
                }
              },
              "optionalNestedEnum": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum",
                "id": 21,
                "protoName": "optional_nested_enum"
              },
              "optionalForeignEnum": {
                "type": ".protobuf_test_messages.editions.ForeignEnumEdition2023",
                "id": 22,
                "protoName": "optional_foreign_enum"
              },
              "optionalStringPiece": {
                "type": "string",
                "id": 24,
                "protoName": "optional_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "optionalCord": {
                "type": "string",
                "id": 25,
                "protoName": "optional_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "recursiveMessage": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023",
                "id": 27,
                "protoName": "recursive_message",
                "options": {
                  "features": {
                    "message_encoding": "LENGTH_PREFIXED"
                  }
                }
              },
              "repeatedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 31,
                "protoName": "repeated_int32"
              },
              "repeatedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 32,
                "protoName": "repeated_int64"
              },
              "repeatedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 33,
                "protoName": "repeated_uint32"
              },
              "repeatedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 34,
                "protoName": "repeated_uint64"
              },
              "repeatedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 35,
                "protoName": "repeated_sint32"
              },
              "repeatedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 36,
                "protoName": "repeated_sint64"
              },
              "repeatedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 37,
                "protoName": "repeated_fixed32"
              },
              "repeatedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 38,
                "protoName": "repeated_fixed64"
              },
              "repeatedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 39,
                "protoName": "repeated_sfixed32"
              },
              "repeatedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 40,
                "protoName": "repeated_sfixed64"
              },
              "repeatedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 41,
                "protoName": "repeated_float"
              },
              "repeatedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 42,
                "protoName": "repeated_double"
              },
              "repeatedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 43,
                "protoName": "repeated_bool"
              },
              "repeatedString": {
                "rule": "repeated",
                "type": "string",
                "id": 44,
                "protoName": "repeated_string"
              },
              "repeatedBytes": {
                "rule": "repeated",
                "type": "bytes",
                "id": 45,
                "protoName": "repeated_bytes"
              },
              "repeatedNestedMessage": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage",
                "id": 48,
                "protoName": "repeated_nested_message",
                "options": {
                  "features": {
                    "message_encoding": "LENGTH_PREFIXED"
                  }
                }
              },
              "repeatedForeignMessage": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.editions.ForeignMessageEdition2023",
                "id": 49,
                "protoName": "repeated_foreign_message",
                "options": {
                  "features": {
                    "message_encoding": "LENGTH_PREFIXED"
                  }
                }
              },
              "repeatedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum",
                "id": 51,
                "protoName": "repeated_nested_enum"
              },
              "repeatedForeignEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.editions.ForeignEnumEdition2023",
                "id": 52,
                "protoName": "repeated_foreign_enum"
              },
              "repeatedStringPiece": {
                "rule": "repeated",
                "type": "string",
                "id": 54,
                "protoName": "repeated_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "repeatedCord": {
                "rule": "repeated",
                "type": "string",
                "id": 55,
                "protoName": "repeated_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "packedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 75,
                "protoName": "packed_int32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 76,
                "protoName": "packed_int64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 77,
                "protoName": "packed_uint32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 78,
                "protoName": "packed_uint64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 79,
                "protoName": "packed_sint32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 80,
                "protoName": "packed_sint64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 81,
                "protoName": "packed_fixed32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 82,
                "protoName": "packed_fixed64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 83,
                "protoName": "packed_sfixed32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 84,
                "protoName": "packed_sfixed64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 85,
                "protoName": "packed_float",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 86,
                "protoName": "packed_double",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 87,
                "protoName": "packed_bool",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "packedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum",
                "id": 88,
                "protoName": "packed_nested_enum",
                "options": {
                  "features": {
                    "repeated_field_encoding": "PACKED"
                  }
                }
              },
              "unpackedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 89,
                "protoName": "unpacked_int32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 90,
                "protoName": "unpacked_int64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 91,
                "protoName": "unpacked_uint32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 92,
                "protoName": "unpacked_uint64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 93,
                "protoName": "unpacked_sint32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 94,
                "protoName": "unpacked_sint64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 95,
                "protoName": "unpacked_fixed32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 96,
                "protoName": "unpacked_fixed64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 97,
                "protoName": "unpacked_sfixed32",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 98,
                "protoName": "unpacked_sfixed64",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 99,
                "protoName": "unpacked_float",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 100,
                "protoName": "unpacked_double",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 101,
                "protoName": "unpacked_bool",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "unpackedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum",
                "id": 102,
                "protoName": "unpacked_nested_enum",
                "options": {
                  "features": {
                    "repeated_field_encoding": "EXPANDED"
                  }
                }
              },
              "mapInt32Int32": {
                "keyType": "int32",
                "type": "int32",
                "id": 56,
                "protoName": "map_int32_int32"
              },
              "mapInt64Int64": {
                "keyType": "int64",
                "type": "int64",
                "id": 57,
                "protoName": "map_int64_int64"
              },
              "mapUint32Uint32": {
                "keyType": "uint32",
                "type": "uint32",
                "id": 58,
                "protoName": "map_uint32_uint32"
              },
              "mapUint64Uint64": {
                "keyType": "uint64",
                "type": "uint64",
                "id": 59,
                "protoName": "map_uint64_uint64"
              },
              "mapSint32Sint32": {
                "keyType": "sint32",
                "type": "sint32",
                "id": 60,
                "protoName": "map_sint32_sint32"
              },
              "mapSint64Sint64": {
                "keyType": "sint64",
                "type": "sint64",
                "id": 61,
                "protoName": "map_sint64_sint64"
              },
              "mapFixed32Fixed32": {
                "keyType": "fixed32",
                "type": "fixed32",
                "id": 62,
                "protoName": "map_fixed32_fixed32"
              },
              "mapFixed64Fixed64": {
                "keyType": "fixed64",
                "type": "fixed64",
                "id": 63,
                "protoName": "map_fixed64_fixed64"
              },
              "mapSfixed32Sfixed32": {
                "keyType": "sfixed32",
                "type": "sfixed32",
                "id": 64,
                "protoName": "map_sfixed32_sfixed32"
              },
              "mapSfixed64Sfixed64": {
                "keyType": "sfixed64",
                "type": "sfixed64",
                "id": 65,
                "protoName": "map_sfixed64_sfixed64"
              },
              "mapInt32Float": {
                "keyType": "int32",
                "type": "float",
                "id": 66,
                "protoName": "map_int32_float"
              },
              "mapInt32Double": {
                "keyType": "int32",
                "type": "double",
                "id": 67,
                "protoName": "map_int32_double"
              },
              "mapBoolBool": {
                "keyType": "bool",
                "type": "bool",
                "id": 68,
                "protoName": "map_bool_bool"
              },
              "mapStringString": {
                "keyType": "string",
                "type": "string",
                "id": 69,
                "protoName": "map_string_string"
              },
              "mapStringBytes": {
                "keyType": "string",
                "type": "bytes",
                "id": 70,
                "protoName": "map_string_bytes"
              },
              "mapStringNestedMessage": {
                "keyType": "string",
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage",
                "id": 71,
                "protoName": "map_string_nested_message"
              },
              "mapStringForeignMessage": {
                "keyType": "string",
                "type": ".protobuf_test_messages.editions.ForeignMessageEdition2023",
                "id": 72,
                "protoName": "map_string_foreign_message"
              },
              "mapStringNestedEnum": {
                "keyType": "string",
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum",
                "id": 73,
                "protoName": "map_string_nested_enum"
              },
              "mapStringForeignEnum": {
                "keyType": "string",
                "type": ".protobuf_test_messages.editions.ForeignEnumEdition2023",
                "id": 74,
                "protoName": "map_string_foreign_enum"
              },
              "oneofUint32": {
                "type": "uint32",
                "id": 111,
                "protoName": "oneof_uint32"
              },
              "oneofNestedMessage": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedMessage",
                "id": 112,
                "protoName": "oneof_nested_message",
                "options": {
                  "features": {
                    "message_encoding": "LENGTH_PREFIXED"
                  }
                }
              },
              "oneofString": {
                "type": "string",
                "id": 113,
                "protoName": "oneof_string"
              },
              "oneofBytes": {
                "type": "bytes",
                "id": 114,
                "protoName": "oneof_bytes"
              },
              "oneofBool": {
                "type": "bool",
                "id": 115,
                "protoName": "oneof_bool"
              },
              "oneofUint64": {
                "type": "uint64",
                "id": 116,
                "protoName": "oneof_uint64"
              },
              "oneofFloat": {
                "type": "float",
                "id": 117,
                "protoName": "oneof_float"
              },
              "oneofDouble": {
                "type": "double",
                "id": 118,
                "protoName": "oneof_double"
              },
              "oneofEnum": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.NestedEnum",
                "id": 119,
                "protoName": "oneof_enum"
              },
              "groupliketype": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType",
                "id": 201
              },
              "delimitedField": {
                "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023.GroupLikeType",
                "id": 202,
                "protoName": "delimited_field"
              }
            },
            "extensions": [
              [
                120,
                200
              ]
            ],
            "nested": {
              "NestedMessage": {
                "fields": {
                  "a": {
                    "type": "int32",
                    "id": 1
                  },
                  "corecursive": {
                    "type": ".protobuf_test_messages.editions.TestAllTypesEdition2023",
                    "id": 2,
                    "options": {
                      "features": {
                        "message_encoding": "LENGTH_PREFIXED"
                      }
                    }
                  }
                }
              },
              "GroupLikeType": {
                "fields": {
                  "groupInt32": {
                    "type": "int32",
                    "id": 202,
                    "protoName": "group_int32"
                  },
                  "groupUint32": {
                    "type": "uint32",
                    "id": 203,
                    "protoName": "group_uint32"
                  }
                }
              },
              "NestedEnum": {
                "values": {
                  "FOO": 0,
                  "BAR": 1,
                  "BAZ": 2,
                  "NEG": -1
                }
              }
            }
          },
          "ForeignMessageEdition2023": {
            "edition": "2023",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            },
            "fields": {
              "c": {
                "type": "int32",
                "id": 1
              }
            }
          },
          "GroupLikeType": {
            "edition": "2023",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            },
            "fields": {
              "c": {
                "type": "int32",
                "id": 1
              }
            }
          },
          "ForeignEnumEdition2023": {
            "edition": "2023",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            },
            "values": {
              "FOREIGN_FOO": 0,
              "FOREIGN_BAR": 1,
              "FOREIGN_BAZ": 2
            }
          },
          "extensionInt32": {
            "edition": "2023",
            "type": "int32",
            "id": 120,
            "extend": ".protobuf_test_messages.editions.TestAllTypesEdition2023",
            "protoName": "extension_int32",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            }
          },
          "groupliketype": {
            "edition": "2023",
            "type": ".protobuf_test_messages.editions.GroupLikeType",
            "id": 121,
            "extend": ".protobuf_test_messages.editions.TestAllTypesEdition2023",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            }
          },
          "delimitedExt": {
            "edition": "2023",
            "type": ".protobuf_test_messages.editions.GroupLikeType",
            "id": 122,
            "extend": ".protobuf_test_messages.editions.TestAllTypesEdition2023",
            "protoName": "delimited_ext",
            "options": {
              "features": {
                "message_encoding": "DELIMITED"
              }
            }
          },
          "proto2": {
            "options": {
              "java_package": "com.google.protobuf_test_messages.editions.proto2",
              "optimize_for": "SPEED",
              "cc_enable_arenas": true,
              "objc_class_prefix": "EditionsProto2",
              "features": {
                "enum_type": "CLOSED",
                "repeated_field_encoding": "EXPANDED",
                "utf8_validation": "NONE"
              }
            },
            "nested": {
              "TestAllTypesProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "oneofs": {
                  "oneofField": {
                    "oneof": [
                      "oneofUint32",
                      "oneofNestedMessage",
                      "oneofString",
                      "oneofBytes",
                      "oneofBool",
                      "oneofUint64",
                      "oneofFloat",
                      "oneofDouble",
                      "oneofEnum"
                    ]
                  }
                },
                "fields": {
                  "optionalInt32": {
                    "type": "int32",
                    "id": 1,
                    "protoName": "optional_int32"
                  },
                  "optionalInt64": {
                    "type": "int64",
                    "id": 2,
                    "protoName": "optional_int64"
                  },
                  "optionalUint32": {
                    "type": "uint32",
                    "id": 3,
                    "protoName": "optional_uint32"
                  },
                  "optionalUint64": {
                    "type": "uint64",
                    "id": 4,
                    "protoName": "optional_uint64"
                  },
                  "optionalSint32": {
                    "type": "sint32",
                    "id": 5,
                    "protoName": "optional_sint32"
                  },
                  "optionalSint64": {
                    "type": "sint64",
                    "id": 6,
                    "protoName": "optional_sint64"
                  },
                  "optionalFixed32": {
                    "type": "fixed32",
                    "id": 7,
                    "protoName": "optional_fixed32"
                  },
                  "optionalFixed64": {
                    "type": "fixed64",
                    "id": 8,
                    "protoName": "optional_fixed64"
                  },
                  "optionalSfixed32": {
                    "type": "sfixed32",
                    "id": 9,
                    "protoName": "optional_sfixed32"
                  },
                  "optionalSfixed64": {
                    "type": "sfixed64",
                    "id": 10,
                    "protoName": "optional_sfixed64"
                  },
                  "optionalFloat": {
                    "type": "float",
                    "id": 11,
                    "protoName": "optional_float"
                  },
                  "optionalDouble": {
                    "type": "double",
                    "id": 12,
                    "protoName": "optional_double"
                  },
                  "optionalBool": {
                    "type": "bool",
                    "id": 13,
                    "protoName": "optional_bool"
                  },
                  "optionalString": {
                    "type": "string",
                    "id": 14,
                    "protoName": "optional_string"
                  },
                  "optionalBytes": {
                    "type": "bytes",
                    "id": 15,
                    "protoName": "optional_bytes"
                  },
                  "optionalNestedMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage",
                    "id": 18,
                    "protoName": "optional_nested_message"
                  },
                  "optionalForeignMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.ForeignMessageProto2",
                    "id": 19,
                    "protoName": "optional_foreign_message"
                  },
                  "optionalNestedEnum": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum",
                    "id": 21,
                    "protoName": "optional_nested_enum"
                  },
                  "optionalForeignEnum": {
                    "type": ".protobuf_test_messages.editions.proto2.ForeignEnumProto2",
                    "id": 22,
                    "protoName": "optional_foreign_enum"
                  },
                  "optionalStringPiece": {
                    "type": "string",
                    "id": 24,
                    "protoName": "optional_string_piece",
                    "options": {
                      "ctype": "STRING_PIECE"
                    }
                  },
                  "optionalCord": {
                    "type": "string",
                    "id": 25,
                    "protoName": "optional_cord",
                    "options": {
                      "ctype": "CORD"
                    }
                  },
                  "recursiveMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2",
                    "id": 27,
                    "protoName": "recursive_message"
                  },
                  "repeatedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 31,
                    "protoName": "repeated_int32"
                  },
                  "repeatedInt64": {
                    "rule": "repeated",
                    "type": "int64",
                    "id": 32,
                    "protoName": "repeated_int64"
                  },
                  "repeatedUint32": {
                    "rule": "repeated",
                    "type": "uint32",
                    "id": 33,
                    "protoName": "repeated_uint32"
                  },
                  "repeatedUint64": {
                    "rule": "repeated",
                    "type": "uint64",
                    "id": 34,
                    "protoName": "repeated_uint64"
                  },
                  "repeatedSint32": {
                    "rule": "repeated",
                    "type": "sint32",
                    "id": 35,
                    "protoName": "repeated_sint32"
                  },
                  "repeatedSint64": {
                    "rule": "repeated",
                    "type": "sint64",
                    "id": 36,
                    "protoName": "repeated_sint64"
                  },
                  "repeatedFixed32": {
                    "rule": "repeated",
                    "type": "fixed32",
                    "id": 37,
                    "protoName": "repeated_fixed32"
                  },
                  "repeatedFixed64": {
                    "rule": "repeated",
                    "type": "fixed64",
                    "id": 38,
                    "protoName": "repeated_fixed64"
                  },
                  "repeatedSfixed32": {
                    "rule": "repeated",
                    "type": "sfixed32",
                    "id": 39,
                    "protoName": "repeated_sfixed32"
                  },
                  "repeatedSfixed64": {
                    "rule": "repeated",
                    "type": "sfixed64",
                    "id": 40,
                    "protoName": "repeated_sfixed64"
                  },
                  "repeatedFloat": {
                    "rule": "repeated",
                    "type": "float",
                    "id": 41,
                    "protoName": "repeated_float"
                  },
                  "repeatedDouble": {
                    "rule": "repeated",
                    "type": "double",
                    "id": 42,
                    "protoName": "repeated_double"
                  },
                  "repeatedBool": {
                    "rule": "repeated",
                    "type": "bool",
                    "id": 43,
                    "protoName": "repeated_bool"
                  },
                  "repeatedString": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 44,
                    "protoName": "repeated_string"
                  },
                  "repeatedBytes": {
                    "rule": "repeated",
                    "type": "bytes",
                    "id": 45,
                    "protoName": "repeated_bytes"
                  },
                  "repeatedNestedMessage": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage",
                    "id": 48,
                    "protoName": "repeated_nested_message"
                  },
                  "repeatedForeignMessage": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto2.ForeignMessageProto2",
                    "id": 49,
                    "protoName": "repeated_foreign_message"
                  },
                  "repeatedNestedEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum",
                    "id": 51,
                    "protoName": "repeated_nested_enum"
                  },
                  "repeatedForeignEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto2.ForeignEnumProto2",
                    "id": 52,
                    "protoName": "repeated_foreign_enum"
                  },
                  "repeatedStringPiece": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 54,
                    "protoName": "repeated_string_piece",
                    "options": {
                      "ctype": "STRING_PIECE"
                    }
                  },
                  "repeatedCord": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 55,
                    "protoName": "repeated_cord",
                    "options": {
                      "ctype": "CORD"
                    }
                  },
                  "packedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 75,
                    "protoName": "packed_int32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedInt64": {
                    "rule": "repeated",
                    "type": "int64",
                    "id": 76,
                    "protoName": "packed_int64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedUint32": {
                    "rule": "repeated",
                    "type": "uint32",
                    "id": 77,
                    "protoName": "packed_uint32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedUint64": {
                    "rule": "repeated",
                    "type": "uint64",
                    "id": 78,
                    "protoName": "packed_uint64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedSint32": {
                    "rule": "repeated",
                    "type": "sint32",
                    "id": 79,
                    "protoName": "packed_sint32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedSint64": {
                    "rule": "repeated",
                    "type": "sint64",
                    "id": 80,
                    "protoName": "packed_sint64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedFixed32": {
                    "rule": "repeated",
                    "type": "fixed32",
                    "id": 81,
                    "protoName": "packed_fixed32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedFixed64": {
                    "rule": "repeated",
                    "type": "fixed64",
                    "id": 82,
                    "protoName": "packed_fixed64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedSfixed32": {
                    "rule": "repeated",
                    "type": "sfixed32",
                    "id": 83,
                    "protoName": "packed_sfixed32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedSfixed64": {
                    "rule": "repeated",
                    "type": "sfixed64",
                    "id": 84,
                    "protoName": "packed_sfixed64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedFloat": {
                    "rule": "repeated",
                    "type": "float",
                    "id": 85,
                    "protoName": "packed_float",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedDouble": {
                    "rule": "repeated",
                    "type": "double",
                    "id": 86,
                    "protoName": "packed_double",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedBool": {
                    "rule": "repeated",
                    "type": "bool",
                    "id": 87,
                    "protoName": "packed_bool",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "packedNestedEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum",
                    "id": 88,
                    "protoName": "packed_nested_enum",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "PACKED"
                      }
                    }
                  },
                  "unpackedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 89,
                    "protoName": "unpacked_int32"
                  },
                  "unpackedInt64": {
                    "rule": "repeated",
                    "type": "int64",
                    "id": 90,
                    "protoName": "unpacked_int64"
                  },
                  "unpackedUint32": {
                    "rule": "repeated",
                    "type": "uint32",
                    "id": 91,
                    "protoName": "unpacked_uint32"
                  },
                  "unpackedUint64": {
                    "rule": "repeated",
                    "type": "uint64",
                    "id": 92,
                    "protoName": "unpacked_uint64"
                  },
                  "unpackedSint32": {
                    "rule": "repeated",
                    "type": "sint32",
                    "id": 93,
                    "protoName": "unpacked_sint32"
                  },
                  "unpackedSint64": {
                    "rule": "repeated",
                    "type": "sint64",
                    "id": 94,
                    "protoName": "unpacked_sint64"
                  },
                  "unpackedFixed32": {
                    "rule": "repeated",
                    "type": "fixed32",
                    "id": 95,
                    "protoName": "unpacked_fixed32"
                  },
                  "unpackedFixed64": {
                    "rule": "repeated",
                    "type": "fixed64",
                    "id": 96,
                    "protoName": "unpacked_fixed64"
                  },
                  "unpackedSfixed32": {
                    "rule": "repeated",
                    "type": "sfixed32",
                    "id": 97,
                    "protoName": "unpacked_sfixed32"
                  },
                  "unpackedSfixed64": {
                    "rule": "repeated",
                    "type": "sfixed64",
                    "id": 98,
                    "protoName": "unpacked_sfixed64"
                  },
                  "unpackedFloat": {
                    "rule": "repeated",
                    "type": "float",
                    "id": 99,
                    "protoName": "unpacked_float"
                  },
                  "unpackedDouble": {
                    "rule": "repeated",
                    "type": "double",
                    "id": 100,
                    "protoName": "unpacked_double"
                  },
                  "unpackedBool": {
                    "rule": "repeated",
                    "type": "bool",
                    "id": 101,
                    "protoName": "unpacked_bool"
                  },
                  "unpackedNestedEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum",
                    "id": 102,
                    "protoName": "unpacked_nested_enum"
                  },
                  "mapInt32Int32": {
                    "keyType": "int32",
                    "type": "int32",
                    "id": 56,
                    "protoName": "map_int32_int32"
                  },
                  "mapInt64Int64": {
                    "keyType": "int64",
                    "type": "int64",
                    "id": 57,
                    "protoName": "map_int64_int64"
                  },
                  "mapUint32Uint32": {
                    "keyType": "uint32",
                    "type": "uint32",
                    "id": 58,
                    "protoName": "map_uint32_uint32"
                  },
                  "mapUint64Uint64": {
                    "keyType": "uint64",
                    "type": "uint64",
                    "id": 59,
                    "protoName": "map_uint64_uint64"
                  },
                  "mapSint32Sint32": {
                    "keyType": "sint32",
                    "type": "sint32",
                    "id": 60,
                    "protoName": "map_sint32_sint32"
                  },
                  "mapSint64Sint64": {
                    "keyType": "sint64",
                    "type": "sint64",
                    "id": 61,
                    "protoName": "map_sint64_sint64"
                  },
                  "mapFixed32Fixed32": {
                    "keyType": "fixed32",
                    "type": "fixed32",
                    "id": 62,
                    "protoName": "map_fixed32_fixed32"
                  },
                  "mapFixed64Fixed64": {
                    "keyType": "fixed64",
                    "type": "fixed64",
                    "id": 63,
                    "protoName": "map_fixed64_fixed64"
                  },
                  "mapSfixed32Sfixed32": {
                    "keyType": "sfixed32",
                    "type": "sfixed32",
                    "id": 64,
                    "protoName": "map_sfixed32_sfixed32"
                  },
                  "mapSfixed64Sfixed64": {
                    "keyType": "sfixed64",
                    "type": "sfixed64",
                    "id": 65,
                    "protoName": "map_sfixed64_sfixed64"
                  },
                  "mapInt32Bool": {
                    "keyType": "int32",
                    "type": "bool",
                    "id": 104,
                    "protoName": "map_int32_bool"
                  },
                  "mapInt32Float": {
                    "keyType": "int32",
                    "type": "float",
                    "id": 66,
                    "protoName": "map_int32_float"
                  },
                  "mapInt32Double": {
                    "keyType": "int32",
                    "type": "double",
                    "id": 67,
                    "protoName": "map_int32_double"
                  },
                  "mapInt32NestedMessage": {
                    "keyType": "int32",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage",
                    "id": 103,
                    "protoName": "map_int32_nested_message"
                  },
                  "mapBoolBool": {
                    "keyType": "bool",
                    "type": "bool",
                    "id": 68,
                    "protoName": "map_bool_bool"
                  },
                  "mapStringString": {
                    "keyType": "string",
                    "type": "string",
                    "id": 69,
                    "protoName": "map_string_string"
                  },
                  "mapStringBytes": {
                    "keyType": "string",
                    "type": "bytes",
                    "id": 70,
                    "protoName": "map_string_bytes"
                  },
                  "mapStringNestedMessage": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage",
                    "id": 71,
                    "protoName": "map_string_nested_message"
                  },
                  "mapStringForeignMessage": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto2.ForeignMessageProto2",
                    "id": 72,
                    "protoName": "map_string_foreign_message"
                  },
                  "mapStringNestedEnum": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum",
                    "id": 73,
                    "protoName": "map_string_nested_enum"
                  },
                  "mapStringForeignEnum": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto2.ForeignEnumProto2",
                    "id": 74,
                    "protoName": "map_string_foreign_enum"
                  },
                  "oneofUint32": {
                    "type": "uint32",
                    "id": 111,
                    "protoName": "oneof_uint32"
                  },
                  "oneofNestedMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedMessage",
                    "id": 112,
                    "protoName": "oneof_nested_message"
                  },
                  "oneofString": {
                    "type": "string",
                    "id": 113,
                    "protoName": "oneof_string"
                  },
                  "oneofBytes": {
                    "type": "bytes",
                    "id": 114,
                    "protoName": "oneof_bytes"
                  },
                  "oneofBool": {
                    "type": "bool",
                    "id": 115,
                    "protoName": "oneof_bool"
                  },
                  "oneofUint64": {
                    "type": "uint64",
                    "id": 116,
                    "protoName": "oneof_uint64"
                  },
                  "oneofFloat": {
                    "type": "float",
                    "id": 117,
                    "protoName": "oneof_float"
                  },
                  "oneofDouble": {
                    "type": "double",
                    "id": 118,
                    "protoName": "oneof_double"
                  },
                  "oneofEnum": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.NestedEnum",
                    "id": 119,
                    "protoName": "oneof_enum"
                  },
                  "data": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.Data",
                    "id": 201,
                    "options": {
                      "features": {
                        "message_encoding": "DELIMITED"
                      }
                    }
                  },
                  "multiwordgroupfield": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MultiWordGroupField",
                    "id": 204,
                    "options": {
                      "features": {
                        "message_encoding": "DELIMITED"
                      }
                    }
                  },
                  "defaultInt32": {
                    "type": "int32",
                    "id": 241,
                    "protoName": "default_int32",
                    "options": {
                      "default": "-123456789"
                    }
                  },
                  "defaultInt64": {
                    "type": "int64",
                    "id": 242,
                    "protoName": "default_int64",
                    "options": {
                      "default": "-9123456789123456789"
                    }
                  },
                  "defaultUint32": {
                    "type": "uint32",
                    "id": 243,
                    "protoName": "default_uint32",
                    "options": {
                      "default": 2123456789
                    }
                  },
                  "defaultUint64": {
                    "type": "uint64",
                    "id": 244,
                    "protoName": "default_uint64",
                    "options": {
                      "default": 10123456789123457000
                    }
                  },
                  "defaultSint32": {
                    "type": "sint32",
                    "id": 245,
                    "protoName": "default_sint32",
                    "options": {
                      "default": "-123456789"
                    }
                  },
                  "defaultSint64": {
                    "type": "sint64",
                    "id": 246,
                    "protoName": "default_sint64",
                    "options": {
                      "default": "-9123456789123456789"
                    }
                  },
                  "defaultFixed32": {
                    "type": "fixed32",
                    "id": 247,
                    "protoName": "default_fixed32",
                    "options": {
                      "default": 2123456789
                    }
                  },
                  "defaultFixed64": {
                    "type": "fixed64",
                    "id": 248,
                    "protoName": "default_fixed64",
                    "options": {
                      "default": 10123456789123457000
                    }
                  },
                  "defaultSfixed32": {
                    "type": "sfixed32",
                    "id": 249,
                    "protoName": "default_sfixed32",
                    "options": {
                      "default": "-123456789"
                    }
                  },
                  "defaultSfixed64": {
                    "type": "sfixed64",
                    "id": 250,
                    "protoName": "default_sfixed64",
                    "options": {
                      "default": "-9123456789123456789"
                    }
                  },
                  "defaultFloat": {
                    "type": "float",
                    "id": 251,
                    "protoName": "default_float",
                    "options": {
                      "default": 8
                    }
                  },
                  "defaultDouble": {
                    "type": "double",
                    "id": 252,
                    "protoName": "default_double",
                    "options": {
                      "default": 7
                    }
                  },
                  "defaultBool": {
                    "type": "bool",
                    "id": 253,
                    "protoName": "default_bool",
                    "options": {
                      "default": true
                    }
                  },
                  "defaultString": {
                    "type": "string",
                    "id": 254,
                    "protoName": "default_string",
                    "options": {
                      "default": "Rosebud"
                    }
                  },
                  "defaultBytes": {
                    "type": "bytes",
                    "id": 255,
                    "protoName": "default_bytes",
                    "options": {
                      "default": "joshua"
                    }
                  },
                  "fieldname1": {
                    "type": "int32",
                    "id": 401
                  },
                  "fieldName2": {
                    "type": "int32",
                    "id": 402,
                    "protoName": "field_name2"
                  },
                  "FieldName3": {
                    "type": "int32",
                    "id": 403,
                    "protoName": "_field_name3"
                  },
                  "fieldName4": {
                    "type": "int32",
                    "id": 404,
                    "protoName": "field__name4_"
                  },
                  "field0name5": {
                    "type": "int32",
                    "id": 405
                  },
                  "field0Name6": {
                    "type": "int32",
                    "id": 406,
                    "protoName": "field_0_name6"
                  },
                  "fieldName7": {
                    "type": "int32",
                    "id": 407
                  },
                  "FieldName8": {
                    "type": "int32",
                    "id": 408
                  },
                  "fieldName9": {
                    "type": "int32",
                    "id": 409,
                    "protoName": "field_Name9"
                  },
                  "FieldName10": {
                    "type": "int32",
                    "id": 410,
                    "protoName": "Field_Name10"
                  },
                  "FIELDNAME11": {
                    "type": "int32",
                    "id": 411,
                    "protoName": "FIELD_NAME11"
                  },
                  "FIELDName12": {
                    "type": "int32",
                    "id": 412,
                    "protoName": "FIELD_name12"
                  },
                  "FieldName13": {
                    "type": "int32",
                    "id": 413,
                    "protoName": "__field_name13"
                  },
                  "FieldName14": {
                    "type": "int32",
                    "id": 414,
                    "protoName": "__Field_name14"
                  },
                  "fieldName15": {
                    "type": "int32",
                    "id": 415,
                    "protoName": "field__name15"
                  },
                  "fieldName16": {
                    "type": "int32",
                    "id": 416,
                    "protoName": "field__Name16"
                  },
                  "fieldName17": {
                    "type": "int32",
                    "id": 417,
                    "protoName": "field_name17__"
                  },
                  "FieldName18": {
                    "type": "int32",
                    "id": 418,
                    "protoName": "Field_name18__"
                  },
                  "messageSetCorrect": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect",
                    "id": 500,
                    "protoName": "message_set_correct"
                  }
                },
                "extensions": [
                  [
                    120,
                    200
                  ]
                ],
                "reserved": [
                  [
                    1000,
                    9999
                  ],
                  [
                    999999,
                    999999
                  ],
                  "reserved_field"
                ],
                "nested": {
                  "NestedMessage": {
                    "fields": {
                      "a": {
                        "type": "int32",
                        "id": 1
                      },
                      "corecursive": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2",
                        "id": 2
                      }
                    }
                  },
                  "Data": {
                    "fields": {
                      "groupInt32": {
                        "type": "int32",
                        "id": 202,
                        "protoName": "group_int32"
                      },
                      "groupUint32": {
                        "type": "uint32",
                        "id": 203,
                        "protoName": "group_uint32"
                      }
                    }
                  },
                  "MultiWordGroupField": {
                    "fields": {
                      "groupInt32": {
                        "type": "int32",
                        "id": 205,
                        "protoName": "group_int32"
                      },
                      "groupUint32": {
                        "type": "uint32",
                        "id": 206,
                        "protoName": "group_uint32"
                      }
                    }
                  },
                  "MessageSetCorrect": {
                    "options": {
                      "message_set_wire_format": true
                    },
                    "fields": {},
                    "extensions": [
                      [
                        4,
                        2147483646
                      ]
                    ]
                  },
                  "MessageSetCorrectExtension1": {
                    "fields": {
                      "str": {
                        "type": "string",
                        "id": 25
                      }
                    },
                    "nested": {
                      "messageSetExtension": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension1",
                        "id": 1547769,
                        "extend": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect",
                        "protoName": "message_set_extension"
                      }
                    }
                  },
                  "MessageSetCorrectExtension2": {
                    "fields": {
                      "i": {
                        "type": "int32",
                        "id": 9
                      }
                    },
                    "nested": {
                      "messageSetExtension": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrectExtension2",
                        "id": 4135312,
                        "extend": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect",
                        "protoName": "message_set_extension"
                      }
                    }
                  },
                  "ExtensionWithOneof": {
                    "oneofs": {
                      "oneofField": {
                        "oneof": [
                          "a",
                          "b"
                        ]
                      }
                    },
                    "fields": {
                      "a": {
                        "type": "int32",
                        "id": 1
                      },
                      "b": {
                        "type": "int32",
                        "id": 2
                      }
                    },
                    "nested": {
                      "extensionWithOneof": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.ExtensionWithOneof",
                        "id": 123456789,
                        "extend": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2.MessageSetCorrect",
                        "protoName": "extension_with_oneof"
                      }
                    }
                  },
                  "NestedEnum": {
                    "values": {
                      "FOO": 0,
                      "BAR": 1,
                      "BAZ": 2,
                      "NEG": -1
                    }
                  }
                }
              },
              "ForeignMessageProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {
                  "c": {
                    "type": "int32",
                    "id": 1
                  }
                }
              },
              "GroupField": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {
                  "groupInt32": {
                    "type": "int32",
                    "id": 122,
                    "protoName": "group_int32"
                  },
                  "groupUint32": {
                    "type": "uint32",
                    "id": 123,
                    "protoName": "group_uint32"
                  }
                }
              },
              "UnknownToTestAllTypes": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {
                  "optionalInt32": {
                    "type": "int32",
                    "id": 1001,
                    "protoName": "optional_int32"
                  },
                  "optionalString": {
                    "type": "string",
                    "id": 1002,
                    "protoName": "optional_string"
                  },
                  "nestedMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.ForeignMessageProto2",
                    "id": 1003,
                    "protoName": "nested_message"
                  },
                  "optionalgroup": {
                    "type": ".protobuf_test_messages.editions.proto2.UnknownToTestAllTypes.OptionalGroup",
                    "id": 1004,
                    "options": {
                      "features": {
                        "message_encoding": "DELIMITED"
                      }
                    }
                  },
                  "optionalBool": {
                    "type": "bool",
                    "id": 1006,
                    "protoName": "optional_bool"
                  },
                  "repeatedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 1011,
                    "protoName": "repeated_int32"
                  }
                },
                "nested": {
                  "OptionalGroup": {
                    "fields": {
                      "a": {
                        "type": "int32",
                        "id": 1
                      }
                    }
                  }
                }
              },
              "NullHypothesisProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {}
              },
              "EnumOnlyProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {},
                "nested": {
                  "Bool": {
                    "values": {
                      "kFalse": 0,
                      "kTrue": 1
                    }
                  }
                }
              },
              "OneStringProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {
                  "data": {
                    "type": "string",
                    "id": 1
                  }
                }
              },
              "ProtoWithKeywords": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {
                  "inline": {
                    "type": "int32",
                    "id": 1
                  },
                  "concept": {
                    "type": "string",
                    "id": 2
                  },
                  "requires": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 3
                  }
                }
              },
              "TestAllRequiredTypesProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "fields": {
                  "requiredInt32": {
                    "type": "int32",
                    "id": 1,
                    "protoName": "required_int32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredInt64": {
                    "type": "int64",
                    "id": 2,
                    "protoName": "required_int64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredUint32": {
                    "type": "uint32",
                    "id": 3,
                    "protoName": "required_uint32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredUint64": {
                    "type": "uint64",
                    "id": 4,
                    "protoName": "required_uint64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredSint32": {
                    "type": "sint32",
                    "id": 5,
                    "protoName": "required_sint32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredSint64": {
                    "type": "sint64",
                    "id": 6,
                    "protoName": "required_sint64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredFixed32": {
                    "type": "fixed32",
                    "id": 7,
                    "protoName": "required_fixed32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredFixed64": {
                    "type": "fixed64",
                    "id": 8,
                    "protoName": "required_fixed64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredSfixed32": {
                    "type": "sfixed32",
                    "id": 9,
                    "protoName": "required_sfixed32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredSfixed64": {
                    "type": "sfixed64",
                    "id": 10,
                    "protoName": "required_sfixed64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredFloat": {
                    "type": "float",
                    "id": 11,
                    "protoName": "required_float",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredDouble": {
                    "type": "double",
                    "id": 12,
                    "protoName": "required_double",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredBool": {
                    "type": "bool",
                    "id": 13,
                    "protoName": "required_bool",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredString": {
                    "type": "string",
                    "id": 14,
                    "protoName": "required_string",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredBytes": {
                    "type": "bytes",
                    "id": 15,
                    "protoName": "required_bytes",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredNestedMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedMessage",
                    "id": 18,
                    "protoName": "required_nested_message",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredForeignMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.ForeignMessageProto2",
                    "id": 19,
                    "protoName": "required_foreign_message",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredNestedEnum": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.NestedEnum",
                    "id": 21,
                    "protoName": "required_nested_enum",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredForeignEnum": {
                    "type": ".protobuf_test_messages.editions.proto2.ForeignEnumProto2",
                    "id": 22,
                    "protoName": "required_foreign_enum",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredStringPiece": {
                    "type": "string",
                    "id": 24,
                    "protoName": "required_string_piece",
                    "options": {
                      "ctype": "STRING_PIECE",
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "requiredCord": {
                    "type": "string",
                    "id": 25,
                    "protoName": "required_cord",
                    "options": {
                      "ctype": "CORD",
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "recursiveMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2",
                    "id": 27,
                    "protoName": "recursive_message",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      }
                    }
                  },
                  "optionalRecursiveMessage": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2",
                    "id": 28,
                    "protoName": "optional_recursive_message"
                  },
                  "data": {
                    "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.Data",
                    "id": 201,
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED",
                        "message_encoding": "DELIMITED"
                      }
                    }
                  },
                  "defaultInt32": {
                    "type": "int32",
                    "id": 241,
                    "protoName": "default_int32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "-123456789"
                    }
                  },
                  "defaultInt64": {
                    "type": "int64",
                    "id": 242,
                    "protoName": "default_int64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "-9123456789123456789"
                    }
                  },
                  "defaultUint32": {
                    "type": "uint32",
                    "id": 243,
                    "protoName": "default_uint32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": 2123456789
                    }
                  },
                  "defaultUint64": {
                    "type": "uint64",
                    "id": 244,
                    "protoName": "default_uint64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": 10123456789123457000
                    }
                  },
                  "defaultSint32": {
                    "type": "sint32",
                    "id": 245,
                    "protoName": "default_sint32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "-123456789"
                    }
                  },
                  "defaultSint64": {
                    "type": "sint64",
                    "id": 246,
                    "protoName": "default_sint64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "-9123456789123456789"
                    }
                  },
                  "defaultFixed32": {
                    "type": "fixed32",
                    "id": 247,
                    "protoName": "default_fixed32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": 2123456789
                    }
                  },
                  "defaultFixed64": {
                    "type": "fixed64",
                    "id": 248,
                    "protoName": "default_fixed64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": 10123456789123457000
                    }
                  },
                  "defaultSfixed32": {
                    "type": "sfixed32",
                    "id": 249,
                    "protoName": "default_sfixed32",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "-123456789"
                    }
                  },
                  "defaultSfixed64": {
                    "type": "sfixed64",
                    "id": 250,
                    "protoName": "default_sfixed64",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "-9123456789123456789"
                    }
                  },
                  "defaultFloat": {
                    "type": "float",
                    "id": 251,
                    "protoName": "default_float",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": 8
                    }
                  },
                  "defaultDouble": {
                    "type": "double",
                    "id": 252,
                    "protoName": "default_double",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": 7
                    }
                  },
                  "defaultBool": {
                    "type": "bool",
                    "id": 253,
                    "protoName": "default_bool",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": true
                    }
                  },
                  "defaultString": {
                    "type": "string",
                    "id": 254,
                    "protoName": "default_string",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "Rosebud"
                    }
                  },
                  "defaultBytes": {
                    "type": "bytes",
                    "id": 255,
                    "protoName": "default_bytes",
                    "options": {
                      "features": {
                        "field_presence": "LEGACY_REQUIRED"
                      },
                      "default": "joshua"
                    }
                  }
                },
                "extensions": [
                  [
                    120,
                    200
                  ]
                ],
                "reserved": [
                  [
                    1000,
                    9999
                  ]
                ],
                "nested": {
                  "NestedMessage": {
                    "fields": {
                      "a": {
                        "type": "int32",
                        "id": 1,
                        "options": {
                          "features": {
                            "field_presence": "LEGACY_REQUIRED"
                          }
                        }
                      },
                      "corecursive": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2",
                        "id": 2,
                        "options": {
                          "features": {
                            "field_presence": "LEGACY_REQUIRED"
                          }
                        }
                      },
                      "optionalCorecursive": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2",
                        "id": 3,
                        "protoName": "optional_corecursive"
                      }
                    }
                  },
                  "Data": {
                    "fields": {
                      "groupInt32": {
                        "type": "int32",
                        "id": 202,
                        "protoName": "group_int32",
                        "options": {
                          "features": {
                            "field_presence": "LEGACY_REQUIRED"
                          }
                        }
                      },
                      "groupUint32": {
                        "type": "uint32",
                        "id": 203,
                        "protoName": "group_uint32",
                        "options": {
                          "features": {
                            "field_presence": "LEGACY_REQUIRED"
                          }
                        }
                      }
                    }
                  },
                  "MessageSetCorrect": {
                    "options": {
                      "message_set_wire_format": true
                    },
                    "fields": {},
                    "extensions": [
                      [
                        4,
                        2147483646
                      ]
                    ]
                  },
                  "MessageSetCorrectExtension1": {
                    "fields": {
                      "str": {
                        "type": "string",
                        "id": 25,
                        "options": {
                          "features": {
                            "field_presence": "LEGACY_REQUIRED"
                          }
                        }
                      }
                    },
                    "nested": {
                      "messageSetExtension": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1",
                        "id": 1547769,
                        "extend": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect",
                        "protoName": "message_set_extension"
                      }
                    }
                  },
                  "MessageSetCorrectExtension2": {
                    "fields": {
                      "i": {
                        "type": "int32",
                        "id": 9,
                        "options": {
                          "features": {
                            "field_presence": "LEGACY_REQUIRED"
                          }
                        }
                      }
                    },
                    "nested": {
                      "messageSetExtension": {
                        "type": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2",
                        "id": 4135312,
                        "extend": ".protobuf_test_messages.editions.proto2.TestAllRequiredTypesProto2.MessageSetCorrect",
                        "protoName": "message_set_extension"
                      }
                    }
                  },
                  "NestedEnum": {
                    "values": {
                      "FOO": 0,
                      "BAR": 1,
                      "BAZ": 2,
                      "NEG": -1
                    }
                  }
                }
              },
              "TestLargeOneof": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "oneofs": {
                  "largeOneof": {
                    "oneof": [
                      "a1",
                      "a2",
                      "a3",
                      "a4",
                      "a5"
                    ]
                  }
                },
                "fields": {
                  "a1": {
                    "type": ".protobuf_test_messages.editions.proto2.TestLargeOneof.A1",
                    "id": 1
                  },
                  "a2": {
                    "type": ".protobuf_test_messages.editions.proto2.TestLargeOneof.A2",
                    "id": 2
                  },
                  "a3": {
                    "type": ".protobuf_test_messages.editions.proto2.TestLargeOneof.A3",
                    "id": 3
                  },
                  "a4": {
                    "type": ".protobuf_test_messages.editions.proto2.TestLargeOneof.A4",
                    "id": 4
                  },
                  "a5": {
                    "type": ".protobuf_test_messages.editions.proto2.TestLargeOneof.A5",
                    "id": 5
                  }
                },
                "nested": {
                  "A1": {
                    "fields": {}
                  },
                  "A2": {
                    "fields": {}
                  },
                  "A3": {
                    "fields": {}
                  },
                  "A4": {
                    "fields": {}
                  },
                  "A5": {
                    "fields": {}
                  }
                }
              },
              "ForeignEnumProto2": {
                "edition": "2023",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                },
                "values": {
                  "FOREIGN_FOO": 0,
                  "FOREIGN_BAR": 1,
                  "FOREIGN_BAZ": 2
                }
              },
              "extensionInt32": {
                "edition": "2023",
                "type": "int32",
                "id": 120,
                "extend": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2",
                "protoName": "extension_int32",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE"
                  }
                }
              },
              "groupfield": {
                "edition": "2023",
                "type": ".protobuf_test_messages.editions.proto2.GroupField",
                "id": 121,
                "extend": ".protobuf_test_messages.editions.proto2.TestAllTypesProto2",
                "options": {
                  "features": {
                    "enum_type": "CLOSED",
                    "repeated_field_encoding": "EXPANDED",
                    "utf8_validation": "NONE",
                    "message_encoding": "DELIMITED"
                  }
                }
              }
            }
          },
          "proto3": {
            "options": {
              "java_package": "com.google.protobuf_test_messages.editions.proto3",
              "optimize_for": "SPEED",
              "cc_enable_arenas": true,
              "objc_class_prefix": "EditionsProto3",
              "features": {
                "field_presence": "IMPLICIT"
              }
            },
            "nested": {
              "TestAllTypesProto3": {
                "edition": "2023",
                "options": {
                  "features": {
                    "field_presence": "IMPLICIT"
                  }
                },
                "oneofs": {
                  "oneofField": {
                    "oneof": [
                      "oneofUint32",
                      "oneofNestedMessage",
                      "oneofString",
                      "oneofBytes",
                      "oneofBool",
                      "oneofUint64",
                      "oneofFloat",
                      "oneofDouble",
                      "oneofEnum",
                      "oneofNullValue"
                    ]
                  }
                },
                "fields": {
                  "optionalInt32": {
                    "type": "int32",
                    "id": 1,
                    "protoName": "optional_int32"
                  },
                  "optionalInt64": {
                    "type": "int64",
                    "id": 2,
                    "protoName": "optional_int64"
                  },
                  "optionalUint32": {
                    "type": "uint32",
                    "id": 3,
                    "protoName": "optional_uint32"
                  },
                  "optionalUint64": {
                    "type": "uint64",
                    "id": 4,
                    "protoName": "optional_uint64"
                  },
                  "optionalSint32": {
                    "type": "sint32",
                    "id": 5,
                    "protoName": "optional_sint32"
                  },
                  "optionalSint64": {
                    "type": "sint64",
                    "id": 6,
                    "protoName": "optional_sint64"
                  },
                  "optionalFixed32": {
                    "type": "fixed32",
                    "id": 7,
                    "protoName": "optional_fixed32"
                  },
                  "optionalFixed64": {
                    "type": "fixed64",
                    "id": 8,
                    "protoName": "optional_fixed64"
                  },
                  "optionalSfixed32": {
                    "type": "sfixed32",
                    "id": 9,
                    "protoName": "optional_sfixed32"
                  },
                  "optionalSfixed64": {
                    "type": "sfixed64",
                    "id": 10,
                    "protoName": "optional_sfixed64"
                  },
                  "optionalFloat": {
                    "type": "float",
                    "id": 11,
                    "protoName": "optional_float"
                  },
                  "optionalDouble": {
                    "type": "double",
                    "id": 12,
                    "protoName": "optional_double"
                  },
                  "optionalBool": {
                    "type": "bool",
                    "id": 13,
                    "protoName": "optional_bool"
                  },
                  "optionalString": {
                    "type": "string",
                    "id": 14,
                    "protoName": "optional_string"
                  },
                  "optionalBytes": {
                    "type": "bytes",
                    "id": 15,
                    "protoName": "optional_bytes"
                  },
                  "optionalNestedMessage": {
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage",
                    "id": 18,
                    "protoName": "optional_nested_message"
                  },
                  "optionalForeignMessage": {
                    "type": ".protobuf_test_messages.editions.proto3.ForeignMessage",
                    "id": 19,
                    "protoName": "optional_foreign_message"
                  },
                  "optionalNestedEnum": {
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum",
                    "id": 21,
                    "protoName": "optional_nested_enum"
                  },
                  "optionalForeignEnum": {
                    "type": ".protobuf_test_messages.editions.proto3.ForeignEnum",
                    "id": 22,
                    "protoName": "optional_foreign_enum"
                  },
                  "optionalAliasedEnum": {
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.AliasedEnum",
                    "id": 23,
                    "protoName": "optional_aliased_enum"
                  },
                  "optionalStringPiece": {
                    "type": "string",
                    "id": 24,
                    "protoName": "optional_string_piece",
                    "options": {
                      "ctype": "STRING_PIECE"
                    }
                  },
                  "optionalCord": {
                    "type": "string",
                    "id": 25,
                    "protoName": "optional_cord",
                    "options": {
                      "ctype": "CORD"
                    }
                  },
                  "recursiveMessage": {
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3",
                    "id": 27,
                    "protoName": "recursive_message"
                  },
                  "repeatedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 31,
                    "protoName": "repeated_int32"
                  },
                  "repeatedInt64": {
                    "rule": "repeated",
                    "type": "int64",
                    "id": 32,
                    "protoName": "repeated_int64"
                  },
                  "repeatedUint32": {
                    "rule": "repeated",
                    "type": "uint32",
                    "id": 33,
                    "protoName": "repeated_uint32"
                  },
                  "repeatedUint64": {
                    "rule": "repeated",
                    "type": "uint64",
                    "id": 34,
                    "protoName": "repeated_uint64"
                  },
                  "repeatedSint32": {
                    "rule": "repeated",
                    "type": "sint32",
                    "id": 35,
                    "protoName": "repeated_sint32"
                  },
                  "repeatedSint64": {
                    "rule": "repeated",
                    "type": "sint64",
                    "id": 36,
                    "protoName": "repeated_sint64"
                  },
                  "repeatedFixed32": {
                    "rule": "repeated",
                    "type": "fixed32",
                    "id": 37,
                    "protoName": "repeated_fixed32"
                  },
                  "repeatedFixed64": {
                    "rule": "repeated",
                    "type": "fixed64",
                    "id": 38,
                    "protoName": "repeated_fixed64"
                  },
                  "repeatedSfixed32": {
                    "rule": "repeated",
                    "type": "sfixed32",
                    "id": 39,
                    "protoName": "repeated_sfixed32"
                  },
                  "repeatedSfixed64": {
                    "rule": "repeated",
                    "type": "sfixed64",
                    "id": 40,
                    "protoName": "repeated_sfixed64"
                  },
                  "repeatedFloat": {
                    "rule": "repeated",
                    "type": "float",
                    "id": 41,
                    "protoName": "repeated_float"
                  },
                  "repeatedDouble": {
                    "rule": "repeated",
                    "type": "double",
                    "id": 42,
                    "protoName": "repeated_double"
                  },
                  "repeatedBool": {
                    "rule": "repeated",
                    "type": "bool",
                    "id": 43,
                    "protoName": "repeated_bool"
                  },
                  "repeatedString": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 44,
                    "protoName": "repeated_string"
                  },
                  "repeatedBytes": {
                    "rule": "repeated",
                    "type": "bytes",
                    "id": 45,
                    "protoName": "repeated_bytes"
                  },
                  "repeatedNestedMessage": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage",
                    "id": 48,
                    "protoName": "repeated_nested_message"
                  },
                  "repeatedForeignMessage": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto3.ForeignMessage",
                    "id": 49,
                    "protoName": "repeated_foreign_message"
                  },
                  "repeatedNestedEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum",
                    "id": 51,
                    "protoName": "repeated_nested_enum"
                  },
                  "repeatedForeignEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto3.ForeignEnum",
                    "id": 52,
                    "protoName": "repeated_foreign_enum"
                  },
                  "repeatedStringPiece": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 54,
                    "protoName": "repeated_string_piece",
                    "options": {
                      "ctype": "STRING_PIECE"
                    }
                  },
                  "repeatedCord": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 55,
                    "protoName": "repeated_cord",
                    "options": {
                      "ctype": "CORD"
                    }
                  },
                  "packedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 75,
                    "protoName": "packed_int32"
                  },
                  "packedInt64": {
                    "rule": "repeated",
                    "type": "int64",
                    "id": 76,
                    "protoName": "packed_int64"
                  },
                  "packedUint32": {
                    "rule": "repeated",
                    "type": "uint32",
                    "id": 77,
                    "protoName": "packed_uint32"
                  },
                  "packedUint64": {
                    "rule": "repeated",
                    "type": "uint64",
                    "id": 78,
                    "protoName": "packed_uint64"
                  },
                  "packedSint32": {
                    "rule": "repeated",
                    "type": "sint32",
                    "id": 79,
                    "protoName": "packed_sint32"
                  },
                  "packedSint64": {
                    "rule": "repeated",
                    "type": "sint64",
                    "id": 80,
                    "protoName": "packed_sint64"
                  },
                  "packedFixed32": {
                    "rule": "repeated",
                    "type": "fixed32",
                    "id": 81,
                    "protoName": "packed_fixed32"
                  },
                  "packedFixed64": {
                    "rule": "repeated",
                    "type": "fixed64",
                    "id": 82,
                    "protoName": "packed_fixed64"
                  },
                  "packedSfixed32": {
                    "rule": "repeated",
                    "type": "sfixed32",
                    "id": 83,
                    "protoName": "packed_sfixed32"
                  },
                  "packedSfixed64": {
                    "rule": "repeated",
                    "type": "sfixed64",
                    "id": 84,
                    "protoName": "packed_sfixed64"
                  },
                  "packedFloat": {
                    "rule": "repeated",
                    "type": "float",
                    "id": 85,
                    "protoName": "packed_float"
                  },
                  "packedDouble": {
                    "rule": "repeated",
                    "type": "double",
                    "id": 86,
                    "protoName": "packed_double"
                  },
                  "packedBool": {
                    "rule": "repeated",
                    "type": "bool",
                    "id": 87,
                    "protoName": "packed_bool"
                  },
                  "packedNestedEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum",
                    "id": 88,
                    "protoName": "packed_nested_enum"
                  },
                  "unpackedInt32": {
                    "rule": "repeated",
                    "type": "int32",
                    "id": 89,
                    "protoName": "unpacked_int32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedInt64": {
                    "rule": "repeated",
                    "type": "int64",
                    "id": 90,
                    "protoName": "unpacked_int64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedUint32": {
                    "rule": "repeated",
                    "type": "uint32",
                    "id": 91,
                    "protoName": "unpacked_uint32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedUint64": {
                    "rule": "repeated",
                    "type": "uint64",
                    "id": 92,
                    "protoName": "unpacked_uint64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedSint32": {
                    "rule": "repeated",
                    "type": "sint32",
                    "id": 93,
                    "protoName": "unpacked_sint32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedSint64": {
                    "rule": "repeated",
                    "type": "sint64",
                    "id": 94,
                    "protoName": "unpacked_sint64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedFixed32": {
                    "rule": "repeated",
                    "type": "fixed32",
                    "id": 95,
                    "protoName": "unpacked_fixed32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedFixed64": {
                    "rule": "repeated",
                    "type": "fixed64",
                    "id": 96,
                    "protoName": "unpacked_fixed64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedSfixed32": {
                    "rule": "repeated",
                    "type": "sfixed32",
                    "id": 97,
                    "protoName": "unpacked_sfixed32",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedSfixed64": {
                    "rule": "repeated",
                    "type": "sfixed64",
                    "id": 98,
                    "protoName": "unpacked_sfixed64",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedFloat": {
                    "rule": "repeated",
                    "type": "float",
                    "id": 99,
                    "protoName": "unpacked_float",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedDouble": {
                    "rule": "repeated",
                    "type": "double",
                    "id": 100,
                    "protoName": "unpacked_double",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedBool": {
                    "rule": "repeated",
                    "type": "bool",
                    "id": 101,
                    "protoName": "unpacked_bool",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "unpackedNestedEnum": {
                    "rule": "repeated",
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum",
                    "id": 102,
                    "protoName": "unpacked_nested_enum",
                    "options": {
                      "features": {
                        "repeated_field_encoding": "EXPANDED"
                      }
                    }
                  },
                  "mapInt32Int32": {
                    "keyType": "int32",
                    "type": "int32",
                    "id": 56,
                    "protoName": "map_int32_int32"
                  },
                  "mapInt64Int64": {
                    "keyType": "int64",
                    "type": "int64",
                    "id": 57,
                    "protoName": "map_int64_int64"
                  },
                  "mapUint32Uint32": {
                    "keyType": "uint32",
                    "type": "uint32",
                    "id": 58,
                    "protoName": "map_uint32_uint32"
                  },
                  "mapUint64Uint64": {
                    "keyType": "uint64",
                    "type": "uint64",
                    "id": 59,
                    "protoName": "map_uint64_uint64"
                  },
                  "mapSint32Sint32": {
                    "keyType": "sint32",
                    "type": "sint32",
                    "id": 60,
                    "protoName": "map_sint32_sint32"
                  },
                  "mapSint64Sint64": {
                    "keyType": "sint64",
                    "type": "sint64",
                    "id": 61,
                    "protoName": "map_sint64_sint64"
                  },
                  "mapFixed32Fixed32": {
                    "keyType": "fixed32",
                    "type": "fixed32",
                    "id": 62,
                    "protoName": "map_fixed32_fixed32"
                  },
                  "mapFixed64Fixed64": {
                    "keyType": "fixed64",
                    "type": "fixed64",
                    "id": 63,
                    "protoName": "map_fixed64_fixed64"
                  },
                  "mapSfixed32Sfixed32": {
                    "keyType": "sfixed32",
                    "type": "sfixed32",
                    "id": 64,
                    "protoName": "map_sfixed32_sfixed32"
                  },
                  "mapSfixed64Sfixed64": {
                    "keyType": "sfixed64",
                    "type": "sfixed64",
                    "id": 65,
                    "protoName": "map_sfixed64_sfixed64"
                  },
                  "mapInt32Float": {
                    "keyType": "int32",
                    "type": "float",
                    "id": 66,
                    "protoName": "map_int32_float"
                  },
                  "mapInt32Double": {
                    "keyType": "int32",
                    "type": "double",
                    "id": 67,
                    "protoName": "map_int32_double"
                  },
                  "mapBoolBool": {
                    "keyType": "bool",
                    "type": "bool",
                    "id": 68,
                    "protoName": "map_bool_bool"
                  },
                  "mapStringString": {
                    "keyType": "string",
                    "type": "string",
                    "id": 69,
                    "protoName": "map_string_string"
                  },
                  "mapStringBytes": {
                    "keyType": "string",
                    "type": "bytes",
                    "id": 70,
                    "protoName": "map_string_bytes"
                  },
                  "mapStringNestedMessage": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage",
                    "id": 71,
                    "protoName": "map_string_nested_message"
                  },
                  "mapStringForeignMessage": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto3.ForeignMessage",
                    "id": 72,
                    "protoName": "map_string_foreign_message"
                  },
                  "mapStringNestedEnum": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum",
                    "id": 73,
                    "protoName": "map_string_nested_enum"
                  },
                  "mapStringForeignEnum": {
                    "keyType": "string",
                    "type": ".protobuf_test_messages.editions.proto3.ForeignEnum",
                    "id": 74,
                    "protoName": "map_string_foreign_enum"
                  },
                  "oneofUint32": {
                    "type": "uint32",
                    "id": 111,
                    "protoName": "oneof_uint32"
                  },
                  "oneofNestedMessage": {
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage",
                    "id": 112,
                    "protoName": "oneof_nested_message"
                  },
                  "oneofString": {
                    "type": "string",
                    "id": 113,
                    "protoName": "oneof_string"
                  },
                  "oneofBytes": {
                    "type": "bytes",
                    "id": 114,
                    "protoName": "oneof_bytes"
                  },
                  "oneofBool": {
                    "type": "bool",
                    "id": 115,
                    "protoName": "oneof_bool"
                  },
                  "oneofUint64": {
                    "type": "uint64",
                    "id": 116,
                    "protoName": "oneof_uint64"
                  },
                  "oneofFloat": {
                    "type": "float",
                    "id": 117,
                    "protoName": "oneof_float"
                  },
                  "oneofDouble": {
                    "type": "double",
                    "id": 118,
                    "protoName": "oneof_double"
                  },
                  "oneofEnum": {
                    "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum",
                    "id": 119,
                    "protoName": "oneof_enum"
                  },
                  "oneofNullValue": {
                    "type": ".google.protobuf.NullValue",
                    "id": 120,
                    "protoName": "oneof_null_value"
                  },
                  "optionalBoolWrapper": {
                    "type": ".google.protobuf.BoolValue",
                    "id": 201,
                    "protoName": "optional_bool_wrapper"
                  },
                  "optionalInt32Wrapper": {
                    "type": ".google.protobuf.Int32Value",
                    "id": 202,
                    "protoName": "optional_int32_wrapper"
                  },
                  "optionalInt64Wrapper": {
                    "type": ".google.protobuf.Int64Value",
                    "id": 203,
                    "protoName": "optional_int64_wrapper"
                  },
                  "optionalUint32Wrapper": {
                    "type": ".google.protobuf.UInt32Value",
                    "id": 204,
                    "protoName": "optional_uint32_wrapper"
                  },
                  "optionalUint64Wrapper": {
                    "type": ".google.protobuf.UInt64Value",
                    "id": 205,
                    "protoName": "optional_uint64_wrapper"
                  },
                  "optionalFloatWrapper": {
                    "type": ".google.protobuf.FloatValue",
                    "id": 206,
                    "protoName": "optional_float_wrapper"
                  },
                  "optionalDoubleWrapper": {
                    "type": ".google.protobuf.DoubleValue",
                    "id": 207,
                    "protoName": "optional_double_wrapper"
                  },
                  "optionalStringWrapper": {
                    "type": ".google.protobuf.StringValue",
                    "id": 208,
                    "protoName": "optional_string_wrapper"
                  },
                  "optionalBytesWrapper": {
                    "type": ".google.protobuf.BytesValue",
                    "id": 209,
                    "protoName": "optional_bytes_wrapper"
                  },
                  "repeatedBoolWrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.BoolValue",
                    "id": 211,
                    "protoName": "repeated_bool_wrapper"
                  },
                  "repeatedInt32Wrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Int32Value",
                    "id": 212,
                    "protoName": "repeated_int32_wrapper"
                  },
                  "repeatedInt64Wrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Int64Value",
                    "id": 213,
                    "protoName": "repeated_int64_wrapper"
                  },
                  "repeatedUint32Wrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.UInt32Value",
                    "id": 214,
                    "protoName": "repeated_uint32_wrapper"
                  },
                  "repeatedUint64Wrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.UInt64Value",
                    "id": 215,
                    "protoName": "repeated_uint64_wrapper"
                  },
                  "repeatedFloatWrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.FloatValue",
                    "id": 216,
                    "protoName": "repeated_float_wrapper"
                  },
                  "repeatedDoubleWrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.DoubleValue",
                    "id": 217,
                    "protoName": "repeated_double_wrapper"
                  },
                  "repeatedStringWrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.StringValue",
                    "id": 218,
                    "protoName": "repeated_string_wrapper"
                  },
                  "repeatedBytesWrapper": {
                    "rule": "repeated",
                    "type": ".google.protobuf.BytesValue",
                    "id": 219,
                    "protoName": "repeated_bytes_wrapper"
                  },
                  "optionalDuration": {
                    "type": ".google.protobuf.Duration",
                    "id": 301,
                    "protoName": "optional_duration"
                  },
                  "optionalTimestamp": {
                    "type": ".google.protobuf.Timestamp",
                    "id": 302,
                    "protoName": "optional_timestamp"
                  },
                  "optionalFieldMask": {
                    "type": ".google.protobuf.FieldMask",
                    "id": 303,
                    "protoName": "optional_field_mask"
                  },
                  "optionalStruct": {
                    "type": ".google.protobuf.Struct",
                    "id": 304,
                    "protoName": "optional_struct"
                  },
                  "optionalAny": {
                    "type": ".google.protobuf.Any",
                    "id": 305,
                    "protoName": "optional_any"
                  },
                  "optionalValue": {
                    "type": ".google.protobuf.Value",
                    "id": 306,
                    "protoName": "optional_value"
                  },
                  "optionalNullValue": {
                    "type": ".google.protobuf.NullValue",
                    "id": 307,
                    "protoName": "optional_null_value"
                  },
                  "repeatedDuration": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Duration",
                    "id": 311,
                    "protoName": "repeated_duration"
                  },
                  "repeatedTimestamp": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Timestamp",
                    "id": 312,
                    "protoName": "repeated_timestamp"
                  },
                  "repeatedFieldmask": {
                    "rule": "repeated",
                    "type": ".google.protobuf.FieldMask",
                    "id": 313,
                    "protoName": "repeated_fieldmask"
                  },
                  "repeatedStruct": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Struct",
                    "id": 324,
                    "protoName": "repeated_struct"
                  },
                  "repeatedAny": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Any",
                    "id": 315,
                    "protoName": "repeated_any"
                  },
                  "repeatedValue": {
                    "rule": "repeated",
                    "type": ".google.protobuf.Value",
                    "id": 316,
                    "protoName": "repeated_value"
                  },
                  "repeatedListValue": {
                    "rule": "repeated",
                    "type": ".google.protobuf.ListValue",
                    "id": 317,
                    "protoName": "repeated_list_value"
                  },
                  "fieldname1": {
                    "type": "int32",
                    "id": 401
                  },
                  "fieldName2": {
                    "type": "int32",
                    "id": 402,
                    "protoName": "field_name2"
                  },
                  "FieldName3": {
                    "type": "int32",
                    "id": 403,
                    "protoName": "_field_name3"
                  },
                  "fieldName4": {
                    "type": "int32",
                    "id": 404,
                    "protoName": "field__name4_"
                  },
                  "field0name5": {
                    "type": "int32",
                    "id": 405
                  },
                  "field0Name6": {
                    "type": "int32",
                    "id": 406,
                    "protoName": "field_0_name6"
                  },
                  "fieldName7": {
                    "type": "int32",
                    "id": 407
                  },
                  "FieldName8": {
                    "type": "int32",
                    "id": 408
                  },
                  "fieldName9": {
                    "type": "int32",
                    "id": 409,
                    "protoName": "field_Name9"
                  },
                  "FieldName10": {
                    "type": "int32",
                    "id": 410,
                    "protoName": "Field_Name10"
                  },
                  "FIELDNAME11": {
                    "type": "int32",
                    "id": 411,
                    "protoName": "FIELD_NAME11"
                  },
                  "FIELDName12": {
                    "type": "int32",
                    "id": 412,
                    "protoName": "FIELD_name12"
                  },
                  "FieldName13": {
                    "type": "int32",
                    "id": 413,
                    "protoName": "__field_name13"
                  },
                  "FieldName14": {
                    "type": "int32",
                    "id": 414,
                    "protoName": "__Field_name14"
                  },
                  "fieldName15": {
                    "type": "int32",
                    "id": 415,
                    "protoName": "field__name15"
                  },
                  "fieldName16": {
                    "type": "int32",
                    "id": 416,
                    "protoName": "field__Name16"
                  },
                  "fieldName17": {
                    "type": "int32",
                    "id": 417,
                    "protoName": "field_name17__"
                  },
                  "FieldName18": {
                    "type": "int32",
                    "id": 418,
                    "protoName": "Field_name18__"
                  }
                },
                "reserved": [
                  [
                    501,
                    510
                  ],
                  [
                    999999,
                    999999
                  ],
                  "reserved_field"
                ],
                "nested": {
                  "NestedMessage": {
                    "fields": {
                      "a": {
                        "type": "int32",
                        "id": 1
                      },
                      "corecursive": {
                        "type": ".protobuf_test_messages.editions.proto3.TestAllTypesProto3",
                        "id": 2
                      }
                    }
                  },
                  "NestedEnum": {
                    "values": {
                      "FOO": 0,
                      "BAR": 1,
                      "BAZ": 2,
                      "NEG": -1
                    }
                  },
                  "AliasedEnum": {
                    "options": {
                      "allow_alias": true
                    },
                    "values": {
                      "ALIAS_FOO": 0,
                      "ALIAS_BAR": 1,
                      "ALIAS_BAZ": 2,
                      "MOO": 2,
                      "moo": 2,
                      "bAz": 2
                    }
                  }
                }
              },
              "ForeignMessage": {
                "edition": "2023",
                "options": {
                  "features": {
                    "field_presence": "IMPLICIT"
                  }
                },
                "fields": {
                  "c": {
                    "type": "int32",
                    "id": 1
                  }
                }
              },
              "NullHypothesisProto3": {
                "edition": "2023",
                "options": {
                  "features": {
                    "field_presence": "IMPLICIT"
                  }
                },
                "fields": {}
              },
              "EnumOnlyProto3": {
                "edition": "2023",
                "options": {
                  "features": {
                    "field_presence": "IMPLICIT"
                  }
                },
                "fields": {},
                "nested": {
                  "Bool": {
                    "values": {
                      "kFalse": 0,
                      "kTrue": 1
                    }
                  }
                }
              },
              "ForeignEnum": {
                "edition": "2023",
                "options": {
                  "features": {
                    "field_presence": "IMPLICIT"
                  }
                },
                "values": {
                  "FOREIGN_FOO": 0,
                  "FOREIGN_BAR": 1,
                  "FOREIGN_BAZ": 2
                }
              }
            }
          }
        }
      },
      "proto2": {
        "options": {
          "java_package": "com.google.protobuf_test_messages.proto2",
          "optimize_for": "SPEED",
          "cc_enable_arenas": true,
          "objc_class_prefix": "Proto2"
        },
        "nested": {
          "TestAllTypesProto2": {
            "edition": "proto2",
            "oneofs": {
              "oneofField": {
                "oneof": [
                  "oneofUint32",
                  "oneofNestedMessage",
                  "oneofString",
                  "oneofBytes",
                  "oneofBool",
                  "oneofUint64",
                  "oneofFloat",
                  "oneofDouble",
                  "oneofEnum"
                ]
              }
            },
            "fields": {
              "optionalInt32": {
                "type": "int32",
                "id": 1,
                "protoName": "optional_int32"
              },
              "optionalInt64": {
                "type": "int64",
                "id": 2,
                "protoName": "optional_int64"
              },
              "optionalUint32": {
                "type": "uint32",
                "id": 3,
                "protoName": "optional_uint32"
              },
              "optionalUint64": {
                "type": "uint64",
                "id": 4,
                "protoName": "optional_uint64"
              },
              "optionalSint32": {
                "type": "sint32",
                "id": 5,
                "protoName": "optional_sint32"
              },
              "optionalSint64": {
                "type": "sint64",
                "id": 6,
                "protoName": "optional_sint64"
              },
              "optionalFixed32": {
                "type": "fixed32",
                "id": 7,
                "protoName": "optional_fixed32"
              },
              "optionalFixed64": {
                "type": "fixed64",
                "id": 8,
                "protoName": "optional_fixed64"
              },
              "optionalSfixed32": {
                "type": "sfixed32",
                "id": 9,
                "protoName": "optional_sfixed32"
              },
              "optionalSfixed64": {
                "type": "sfixed64",
                "id": 10,
                "protoName": "optional_sfixed64"
              },
              "optionalFloat": {
                "type": "float",
                "id": 11,
                "protoName": "optional_float"
              },
              "optionalDouble": {
                "type": "double",
                "id": 12,
                "protoName": "optional_double"
              },
              "optionalBool": {
                "type": "bool",
                "id": 13,
                "protoName": "optional_bool"
              },
              "optionalString": {
                "type": "string",
                "id": 14,
                "protoName": "optional_string"
              },
              "optionalBytes": {
                "type": "bytes",
                "id": 15,
                "protoName": "optional_bytes"
              },
              "optionalNestedMessage": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage",
                "id": 18,
                "protoName": "optional_nested_message"
              },
              "optionalForeignMessage": {
                "type": ".protobuf_test_messages.proto2.ForeignMessageProto2",
                "id": 19,
                "protoName": "optional_foreign_message"
              },
              "optionalNestedEnum": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
                "id": 21,
                "protoName": "optional_nested_enum"
              },
              "optionalForeignEnum": {
                "type": ".protobuf_test_messages.proto2.ForeignEnumProto2",
                "id": 22,
                "protoName": "optional_foreign_enum"
              },
              "optionalStringPiece": {
                "type": "string",
                "id": 24,
                "protoName": "optional_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "optionalCord": {
                "type": "string",
                "id": 25,
                "protoName": "optional_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "recursiveMessage": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2",
                "id": 27,
                "protoName": "recursive_message"
              },
              "repeatedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 31,
                "protoName": "repeated_int32"
              },
              "repeatedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 32,
                "protoName": "repeated_int64"
              },
              "repeatedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 33,
                "protoName": "repeated_uint32"
              },
              "repeatedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 34,
                "protoName": "repeated_uint64"
              },
              "repeatedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 35,
                "protoName": "repeated_sint32"
              },
              "repeatedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 36,
                "protoName": "repeated_sint64"
              },
              "repeatedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 37,
                "protoName": "repeated_fixed32"
              },
              "repeatedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 38,
                "protoName": "repeated_fixed64"
              },
              "repeatedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 39,
                "protoName": "repeated_sfixed32"
              },
              "repeatedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 40,
                "protoName": "repeated_sfixed64"
              },
              "repeatedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 41,
                "protoName": "repeated_float"
              },
              "repeatedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 42,
                "protoName": "repeated_double"
              },
              "repeatedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 43,
                "protoName": "repeated_bool"
              },
              "repeatedString": {
                "rule": "repeated",
                "type": "string",
                "id": 44,
                "protoName": "repeated_string"
              },
              "repeatedBytes": {
                "rule": "repeated",
                "type": "bytes",
                "id": 45,
                "protoName": "repeated_bytes"
              },
              "repeatedNestedMessage": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage",
                "id": 48,
                "protoName": "repeated_nested_message"
              },
              "repeatedForeignMessage": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto2.ForeignMessageProto2",
                "id": 49,
                "protoName": "repeated_foreign_message"
              },
              "repeatedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
                "id": 51,
                "protoName": "repeated_nested_enum"
              },
              "repeatedForeignEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto2.ForeignEnumProto2",
                "id": 52,
                "protoName": "repeated_foreign_enum"
              },
              "repeatedStringPiece": {
                "rule": "repeated",
                "type": "string",
                "id": 54,
                "protoName": "repeated_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "repeatedCord": {
                "rule": "repeated",
                "type": "string",
                "id": 55,
                "protoName": "repeated_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "packedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 75,
                "protoName": "packed_int32",
                "options": {
                  "packed": true
                }
              },
              "packedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 76,
                "protoName": "packed_int64",
                "options": {
                  "packed": true
                }
              },
              "packedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 77,
                "protoName": "packed_uint32",
                "options": {
                  "packed": true
                }
              },
              "packedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 78,
                "protoName": "packed_uint64",
                "options": {
                  "packed": true
                }
              },
              "packedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 79,
                "protoName": "packed_sint32",
                "options": {
                  "packed": true
                }
              },
              "packedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 80,
                "protoName": "packed_sint64",
                "options": {
                  "packed": true
                }
              },
              "packedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 81,
                "protoName": "packed_fixed32",
                "options": {
                  "packed": true
                }
              },
              "packedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 82,
                "protoName": "packed_fixed64",
                "options": {
                  "packed": true
                }
              },
              "packedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 83,
                "protoName": "packed_sfixed32",
                "options": {
                  "packed": true
                }
              },
              "packedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 84,
                "protoName": "packed_sfixed64",
                "options": {
                  "packed": true
                }
              },
              "packedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 85,
                "protoName": "packed_float",
                "options": {
                  "packed": true
                }
              },
              "packedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 86,
                "protoName": "packed_double",
                "options": {
                  "packed": true
                }
              },
              "packedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 87,
                "protoName": "packed_bool",
                "options": {
                  "packed": true
                }
              },
              "packedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
                "id": 88,
                "protoName": "packed_nested_enum",
                "options": {
                  "packed": true
                }
              },
              "unpackedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 89,
                "protoName": "unpacked_int32",
                "options": {
                  "packed": false
                }
              },
              "unpackedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 90,
                "protoName": "unpacked_int64",
                "options": {
                  "packed": false
                }
              },
              "unpackedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 91,
                "protoName": "unpacked_uint32",
                "options": {
                  "packed": false
                }
              },
              "unpackedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 92,
                "protoName": "unpacked_uint64",
                "options": {
                  "packed": false
                }
              },
              "unpackedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 93,
                "protoName": "unpacked_sint32",
                "options": {
                  "packed": false
                }
              },
              "unpackedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 94,
                "protoName": "unpacked_sint64",
                "options": {
                  "packed": false
                }
              },
              "unpackedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 95,
                "protoName": "unpacked_fixed32",
                "options": {
                  "packed": false
                }
              },
              "unpackedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 96,
                "protoName": "unpacked_fixed64",
                "options": {
                  "packed": false
                }
              },
              "unpackedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 97,
                "protoName": "unpacked_sfixed32",
                "options": {
                  "packed": false
                }
              },
              "unpackedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 98,
                "protoName": "unpacked_sfixed64",
                "options": {
                  "packed": false
                }
              },
              "unpackedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 99,
                "protoName": "unpacked_float",
                "options": {
                  "packed": false
                }
              },
              "unpackedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 100,
                "protoName": "unpacked_double",
                "options": {
                  "packed": false
                }
              },
              "unpackedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 101,
                "protoName": "unpacked_bool",
                "options": {
                  "packed": false
                }
              },
              "unpackedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
                "id": 102,
                "protoName": "unpacked_nested_enum",
                "options": {
                  "packed": false
                }
              },
              "mapInt32Int32": {
                "keyType": "int32",
                "type": "int32",
                "id": 56,
                "protoName": "map_int32_int32"
              },
              "mapInt64Int64": {
                "keyType": "int64",
                "type": "int64",
                "id": 57,
                "protoName": "map_int64_int64"
              },
              "mapUint32Uint32": {
                "keyType": "uint32",
                "type": "uint32",
                "id": 58,
                "protoName": "map_uint32_uint32"
              },
              "mapUint64Uint64": {
                "keyType": "uint64",
                "type": "uint64",
                "id": 59,
                "protoName": "map_uint64_uint64"
              },
              "mapSint32Sint32": {
                "keyType": "sint32",
                "type": "sint32",
                "id": 60,
                "protoName": "map_sint32_sint32"
              },
              "mapSint64Sint64": {
                "keyType": "sint64",
                "type": "sint64",
                "id": 61,
                "protoName": "map_sint64_sint64"
              },
              "mapFixed32Fixed32": {
                "keyType": "fixed32",
                "type": "fixed32",
                "id": 62,
                "protoName": "map_fixed32_fixed32"
              },
              "mapFixed64Fixed64": {
                "keyType": "fixed64",
                "type": "fixed64",
                "id": 63,
                "protoName": "map_fixed64_fixed64"
              },
              "mapSfixed32Sfixed32": {
                "keyType": "sfixed32",
                "type": "sfixed32",
                "id": 64,
                "protoName": "map_sfixed32_sfixed32"
              },
              "mapSfixed64Sfixed64": {
                "keyType": "sfixed64",
                "type": "sfixed64",
                "id": 65,
                "protoName": "map_sfixed64_sfixed64"
              },
              "mapInt32Bool": {
                "keyType": "int32",
                "type": "bool",
                "id": 104,
                "protoName": "map_int32_bool"
              },
              "mapInt32Float": {
                "keyType": "int32",
                "type": "float",
                "id": 66,
                "protoName": "map_int32_float"
              },
              "mapInt32Double": {
                "keyType": "int32",
                "type": "double",
                "id": 67,
                "protoName": "map_int32_double"
              },
              "mapInt32NestedMessage": {
                "keyType": "int32",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage",
                "id": 103,
                "protoName": "map_int32_nested_message"
              },
              "mapBoolBool": {
                "keyType": "bool",
                "type": "bool",
                "id": 68,
                "protoName": "map_bool_bool"
              },
              "mapStringString": {
                "keyType": "string",
                "type": "string",
                "id": 69,
                "protoName": "map_string_string"
              },
              "mapStringBytes": {
                "keyType": "string",
                "type": "bytes",
                "id": 70,
                "protoName": "map_string_bytes"
              },
              "mapStringNestedMessage": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage",
                "id": 71,
                "protoName": "map_string_nested_message"
              },
              "mapStringForeignMessage": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto2.ForeignMessageProto2",
                "id": 72,
                "protoName": "map_string_foreign_message"
              },
              "mapStringNestedEnum": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
                "id": 73,
                "protoName": "map_string_nested_enum"
              },
              "mapStringForeignEnum": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto2.ForeignEnumProto2",
                "id": 74,
                "protoName": "map_string_foreign_enum"
              },
              "oneofUint32": {
                "type": "uint32",
                "id": 111,
                "protoName": "oneof_uint32"
              },
              "oneofNestedMessage": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage",
                "id": 112,
                "protoName": "oneof_nested_message"
              },
              "oneofString": {
                "type": "string",
                "id": 113,
                "protoName": "oneof_string"
              },
              "oneofBytes": {
                "type": "bytes",
                "id": 114,
                "protoName": "oneof_bytes"
              },
              "oneofBool": {
                "type": "bool",
                "id": 115,
                "protoName": "oneof_bool"
              },
              "oneofUint64": {
                "type": "uint64",
                "id": 116,
                "protoName": "oneof_uint64"
              },
              "oneofFloat": {
                "type": "float",
                "id": 117,
                "protoName": "oneof_float"
              },
              "oneofDouble": {
                "type": "double",
                "id": 118,
                "protoName": "oneof_double"
              },
              "oneofEnum": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
                "id": 119,
                "protoName": "oneof_enum"
              },
              "data": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.Data",
                "id": 201
              },
              "multiwordgroupfield": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.MultiWordGroupField",
                "id": 204
              },
              "defaultInt32": {
                "type": "int32",
                "id": 241,
                "protoName": "default_int32",
                "options": {
                  "default": "-123456789"
                }
              },
              "defaultInt64": {
                "type": "int64",
                "id": 242,
                "protoName": "default_int64",
                "options": {
                  "default": "-9123456789123456789"
                }
              },
              "defaultUint32": {
                "type": "uint32",
                "id": 243,
                "protoName": "default_uint32",
                "options": {
                  "default": 2123456789
                }
              },
              "defaultUint64": {
                "type": "uint64",
                "id": 244,
                "protoName": "default_uint64",
                "options": {
                  "default": 10123456789123457000
                }
              },
              "defaultSint32": {
                "type": "sint32",
                "id": 245,
                "protoName": "default_sint32",
                "options": {
                  "default": "-123456789"
                }
              },
              "defaultSint64": {
                "type": "sint64",
                "id": 246,
                "protoName": "default_sint64",
                "options": {
                  "default": "-9123456789123456789"
                }
              },
              "defaultFixed32": {
                "type": "fixed32",
                "id": 247,
                "protoName": "default_fixed32",
                "options": {
                  "default": 2123456789
                }
              },
              "defaultFixed64": {
                "type": "fixed64",
                "id": 248,
                "protoName": "default_fixed64",
                "options": {
                  "default": 10123456789123457000
                }
              },
              "defaultSfixed32": {
                "type": "sfixed32",
                "id": 249,
                "protoName": "default_sfixed32",
                "options": {
                  "default": "-123456789"
                }
              },
              "defaultSfixed64": {
                "type": "sfixed64",
                "id": 250,
                "protoName": "default_sfixed64",
                "options": {
                  "default": "-9123456789123456789"
                }
              },
              "defaultFloat": {
                "type": "float",
                "id": 251,
                "protoName": "default_float",
                "options": {
                  "default": 8
                }
              },
              "defaultDouble": {
                "type": "double",
                "id": 252,
                "protoName": "default_double",
                "options": {
                  "default": 7
                }
              },
              "defaultBool": {
                "type": "bool",
                "id": 253,
                "protoName": "default_bool",
                "options": {
                  "default": true
                }
              },
              "defaultString": {
                "type": "string",
                "id": 254,
                "protoName": "default_string",
                "options": {
                  "default": "Rosebud"
                }
              },
              "defaultBytes": {
                "type": "bytes",
                "id": 255,
                "protoName": "default_bytes",
                "options": {
                  "default": "joshua"
                }
              },
              "fieldname1": {
                "type": "int32",
                "id": 401
              },
              "fieldName2": {
                "type": "int32",
                "id": 402,
                "protoName": "field_name2"
              },
              "FieldName3": {
                "type": "int32",
                "id": 403,
                "protoName": "_field_name3"
              },
              "fieldName4": {
                "type": "int32",
                "id": 404,
                "protoName": "field__name4_"
              },
              "field0name5": {
                "type": "int32",
                "id": 405
              },
              "field0Name6": {
                "type": "int32",
                "id": 406,
                "protoName": "field_0_name6"
              },
              "fieldName7": {
                "type": "int32",
                "id": 407
              },
              "FieldName8": {
                "type": "int32",
                "id": 408
              },
              "fieldName9": {
                "type": "int32",
                "id": 409,
                "protoName": "field_Name9"
              },
              "FieldName10": {
                "type": "int32",
                "id": 410,
                "protoName": "Field_Name10"
              },
              "FIELDNAME11": {
                "type": "int32",
                "id": 411,
                "protoName": "FIELD_NAME11"
              },
              "FIELDName12": {
                "type": "int32",
                "id": 412,
                "protoName": "FIELD_name12"
              },
              "FieldName13": {
                "type": "int32",
                "id": 413,
                "protoName": "__field_name13"
              },
              "FieldName14": {
                "type": "int32",
                "id": 414,
                "protoName": "__Field_name14"
              },
              "fieldName15": {
                "type": "int32",
                "id": 415,
                "protoName": "field__name15"
              },
              "fieldName16": {
                "type": "int32",
                "id": 416,
                "protoName": "field__Name16"
              },
              "fieldName17": {
                "type": "int32",
                "id": 417,
                "protoName": "field_name17__"
              },
              "FieldName18": {
                "type": "int32",
                "id": 418,
                "protoName": "Field_name18__"
              },
              "messageSetCorrect": {
                "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect",
                "id": 500,
                "protoName": "message_set_correct"
              }
            },
            "extensions": [
              [
                120,
                200
              ]
            ],
            "reserved": [
              [
                1000,
                9999
              ],
              [
                999999,
                999999
              ],
              "reserved_field"
            ],
            "nested": {
              "NestedMessage": {
                "fields": {
                  "a": {
                    "type": "int32",
                    "id": 1
                  },
                  "corecursive": {
                    "type": ".protobuf_test_messages.proto2.TestAllTypesProto2",
                    "id": 2
                  }
                }
              },
              "Data": {
                "fields": {
                  "groupInt32": {
                    "type": "int32",
                    "id": 202,
                    "protoName": "group_int32"
                  },
                  "groupUint32": {
                    "type": "uint32",
                    "id": 203,
                    "protoName": "group_uint32"
                  }
                },
                "group": true
              },
              "MultiWordGroupField": {
                "fields": {
                  "groupInt32": {
                    "type": "int32",
                    "id": 205,
                    "protoName": "group_int32"
                  },
                  "groupUint32": {
                    "type": "uint32",
                    "id": 206,
                    "protoName": "group_uint32"
                  }
                },
                "group": true
              },
              "MessageSetCorrect": {
                "options": {
                  "message_set_wire_format": true
                },
                "fields": {},
                "extensions": [
                  [
                    4,
                    2147483646
                  ]
                ]
              },
              "MessageSetCorrectExtension1": {
                "fields": {
                  "str": {
                    "type": "string",
                    "id": 25
                  }
                },
                "nested": {
                  "messageSetExtension": {
                    "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1",
                    "id": 1547769,
                    "extend": ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect",
                    "protoName": "message_set_extension"
                  }
                }
              },
              "MessageSetCorrectExtension2": {
                "fields": {
                  "i": {
                    "type": "int32",
                    "id": 9
                  }
                },
                "nested": {
                  "messageSetExtension": {
                    "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2",
                    "id": 4135312,
                    "extend": ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect",
                    "protoName": "message_set_extension"
                  }
                }
              },
              "ExtensionWithOneof": {
                "oneofs": {
                  "oneofField": {
                    "oneof": [
                      "a",
                      "b"
                    ]
                  }
                },
                "fields": {
                  "a": {
                    "type": "int32",
                    "id": 1
                  },
                  "b": {
                    "type": "int32",
                    "id": 2
                  }
                },
                "nested": {
                  "extensionWithOneof": {
                    "type": ".protobuf_test_messages.proto2.TestAllTypesProto2.ExtensionWithOneof",
                    "id": 123456789,
                    "extend": ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect",
                    "protoName": "extension_with_oneof"
                  }
                }
              },
              "NestedEnum": {
                "values": {
                  "FOO": 0,
                  "BAR": 1,
                  "BAZ": 2,
                  "NEG": -1
                }
              }
            }
          },
          "ForeignMessageProto2": {
            "edition": "proto2",
            "fields": {
              "c": {
                "type": "int32",
                "id": 1
              }
            }
          },
          "GroupField": {
            "edition": "proto2",
            "fields": {
              "groupInt32": {
                "type": "int32",
                "id": 122,
                "protoName": "group_int32"
              },
              "groupUint32": {
                "type": "uint32",
                "id": 123,
                "protoName": "group_uint32"
              }
            },
            "group": true
          },
          "UnknownToTestAllTypes": {
            "edition": "proto2",
            "fields": {
              "optionalInt32": {
                "type": "int32",
                "id": 1001,
                "protoName": "optional_int32"
              },
              "optionalString": {
                "type": "string",
                "id": 1002,
                "protoName": "optional_string"
              },
              "nestedMessage": {
                "type": ".protobuf_test_messages.proto2.ForeignMessageProto2",
                "id": 1003,
                "protoName": "nested_message"
              },
              "optionalgroup": {
                "type": ".protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup",
                "id": 1004
              },
              "optionalBool": {
                "type": "bool",
                "id": 1006,
                "protoName": "optional_bool"
              },
              "repeatedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 1011,
                "protoName": "repeated_int32"
              }
            },
            "nested": {
              "OptionalGroup": {
                "fields": {
                  "a": {
                    "type": "int32",
                    "id": 1
                  }
                },
                "group": true
              }
            }
          },
          "NullHypothesisProto2": {
            "edition": "proto2",
            "fields": {}
          },
          "EnumOnlyProto2": {
            "edition": "proto2",
            "fields": {},
            "nested": {
              "Bool": {
                "values": {
                  "kFalse": 0,
                  "kTrue": 1
                }
              }
            }
          },
          "OneStringProto2": {
            "edition": "proto2",
            "fields": {
              "data": {
                "type": "string",
                "id": 1
              }
            }
          },
          "ProtoWithKeywords": {
            "edition": "proto2",
            "fields": {
              "inline": {
                "type": "int32",
                "id": 1
              },
              "concept": {
                "type": "string",
                "id": 2
              },
              "requires": {
                "rule": "repeated",
                "type": "string",
                "id": 3
              }
            }
          },
          "TestAllRequiredTypesProto2": {
            "edition": "proto2",
            "fields": {
              "requiredInt32": {
                "rule": "required",
                "type": "int32",
                "id": 1,
                "protoName": "required_int32"
              },
              "requiredInt64": {
                "rule": "required",
                "type": "int64",
                "id": 2,
                "protoName": "required_int64"
              },
              "requiredUint32": {
                "rule": "required",
                "type": "uint32",
                "id": 3,
                "protoName": "required_uint32"
              },
              "requiredUint64": {
                "rule": "required",
                "type": "uint64",
                "id": 4,
                "protoName": "required_uint64"
              },
              "requiredSint32": {
                "rule": "required",
                "type": "sint32",
                "id": 5,
                "protoName": "required_sint32"
              },
              "requiredSint64": {
                "rule": "required",
                "type": "sint64",
                "id": 6,
                "protoName": "required_sint64"
              },
              "requiredFixed32": {
                "rule": "required",
                "type": "fixed32",
                "id": 7,
                "protoName": "required_fixed32"
              },
              "requiredFixed64": {
                "rule": "required",
                "type": "fixed64",
                "id": 8,
                "protoName": "required_fixed64"
              },
              "requiredSfixed32": {
                "rule": "required",
                "type": "sfixed32",
                "id": 9,
                "protoName": "required_sfixed32"
              },
              "requiredSfixed64": {
                "rule": "required",
                "type": "sfixed64",
                "id": 10,
                "protoName": "required_sfixed64"
              },
              "requiredFloat": {
                "rule": "required",
                "type": "float",
                "id": 11,
                "protoName": "required_float"
              },
              "requiredDouble": {
                "rule": "required",
                "type": "double",
                "id": 12,
                "protoName": "required_double"
              },
              "requiredBool": {
                "rule": "required",
                "type": "bool",
                "id": 13,
                "protoName": "required_bool"
              },
              "requiredString": {
                "rule": "required",
                "type": "string",
                "id": 14,
                "protoName": "required_string"
              },
              "requiredBytes": {
                "rule": "required",
                "type": "bytes",
                "id": 15,
                "protoName": "required_bytes"
              },
              "requiredNestedMessage": {
                "rule": "required",
                "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedMessage",
                "id": 18,
                "protoName": "required_nested_message"
              },
              "requiredForeignMessage": {
                "rule": "required",
                "type": ".protobuf_test_messages.proto2.ForeignMessageProto2",
                "id": 19,
                "protoName": "required_foreign_message"
              },
              "requiredNestedEnum": {
                "rule": "required",
                "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.NestedEnum",
                "id": 21,
                "protoName": "required_nested_enum"
              },
              "requiredForeignEnum": {
                "rule": "required",
                "type": ".protobuf_test_messages.proto2.ForeignEnumProto2",
                "id": 22,
                "protoName": "required_foreign_enum"
              },
              "requiredStringPiece": {
                "rule": "required",
                "type": "string",
                "id": 24,
                "protoName": "required_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "requiredCord": {
                "rule": "required",
                "type": "string",
                "id": 25,
                "protoName": "required_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "recursiveMessage": {
                "rule": "required",
                "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2",
                "id": 27,
                "protoName": "recursive_message"
              },
              "optionalRecursiveMessage": {
                "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2",
                "id": 28,
                "protoName": "optional_recursive_message"
              },
              "data": {
                "rule": "required",
                "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.Data",
                "id": 201
              },
              "defaultInt32": {
                "rule": "required",
                "type": "int32",
                "id": 241,
                "protoName": "default_int32",
                "options": {
                  "default": "-123456789"
                }
              },
              "defaultInt64": {
                "rule": "required",
                "type": "int64",
                "id": 242,
                "protoName": "default_int64",
                "options": {
                  "default": "-9123456789123456789"
                }
              },
              "defaultUint32": {
                "rule": "required",
                "type": "uint32",
                "id": 243,
                "protoName": "default_uint32",
                "options": {
                  "default": 2123456789
                }
              },
              "defaultUint64": {
                "rule": "required",
                "type": "uint64",
                "id": 244,
                "protoName": "default_uint64",
                "options": {
                  "default": 10123456789123457000
                }
              },
              "defaultSint32": {
                "rule": "required",
                "type": "sint32",
                "id": 245,
                "protoName": "default_sint32",
                "options": {
                  "default": "-123456789"
                }
              },
              "defaultSint64": {
                "rule": "required",
                "type": "sint64",
                "id": 246,
                "protoName": "default_sint64",
                "options": {
                  "default": "-9123456789123456789"
                }
              },
              "defaultFixed32": {
                "rule": "required",
                "type": "fixed32",
                "id": 247,
                "protoName": "default_fixed32",
                "options": {
                  "default": 2123456789
                }
              },
              "defaultFixed64": {
                "rule": "required",
                "type": "fixed64",
                "id": 248,
                "protoName": "default_fixed64",
                "options": {
                  "default": 10123456789123457000
                }
              },
              "defaultSfixed32": {
                "rule": "required",
                "type": "sfixed32",
                "id": 249,
                "protoName": "default_sfixed32",
                "options": {
                  "default": "-123456789"
                }
              },
              "defaultSfixed64": {
                "rule": "required",
                "type": "sfixed64",
                "id": 250,
                "protoName": "default_sfixed64",
                "options": {
                  "default": "-9123456789123456789"
                }
              },
              "defaultFloat": {
                "rule": "required",
                "type": "float",
                "id": 251,
                "protoName": "default_float",
                "options": {
                  "default": 8
                }
              },
              "defaultDouble": {
                "rule": "required",
                "type": "double",
                "id": 252,
                "protoName": "default_double",
                "options": {
                  "default": 7
                }
              },
              "defaultBool": {
                "rule": "required",
                "type": "bool",
                "id": 253,
                "protoName": "default_bool",
                "options": {
                  "default": true
                }
              },
              "defaultString": {
                "rule": "required",
                "type": "string",
                "id": 254,
                "protoName": "default_string",
                "options": {
                  "default": "Rosebud"
                }
              },
              "defaultBytes": {
                "rule": "required",
                "type": "bytes",
                "id": 255,
                "protoName": "default_bytes",
                "options": {
                  "default": "joshua"
                }
              }
            },
            "extensions": [
              [
                120,
                200
              ]
            ],
            "reserved": [
              [
                1000,
                9999
              ]
            ],
            "nested": {
              "NestedMessage": {
                "fields": {
                  "a": {
                    "rule": "required",
                    "type": "int32",
                    "id": 1
                  },
                  "corecursive": {
                    "rule": "required",
                    "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2",
                    "id": 2
                  },
                  "optionalCorecursive": {
                    "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2",
                    "id": 3,
                    "protoName": "optional_corecursive"
                  }
                }
              },
              "Data": {
                "fields": {
                  "groupInt32": {
                    "rule": "required",
                    "type": "int32",
                    "id": 202,
                    "protoName": "group_int32"
                  },
                  "groupUint32": {
                    "rule": "required",
                    "type": "uint32",
                    "id": 203,
                    "protoName": "group_uint32"
                  }
                },
                "group": true
              },
              "MessageSetCorrect": {
                "options": {
                  "message_set_wire_format": true
                },
                "fields": {},
                "extensions": [
                  [
                    4,
                    2147483646
                  ]
                ]
              },
              "MessageSetCorrectExtension1": {
                "fields": {
                  "str": {
                    "rule": "required",
                    "type": "string",
                    "id": 25
                  }
                },
                "nested": {
                  "messageSetExtension": {
                    "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension1",
                    "id": 1547769,
                    "extend": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect",
                    "protoName": "message_set_extension"
                  }
                }
              },
              "MessageSetCorrectExtension2": {
                "fields": {
                  "i": {
                    "rule": "required",
                    "type": "int32",
                    "id": 9
                  }
                },
                "nested": {
                  "messageSetExtension": {
                    "type": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrectExtension2",
                    "id": 4135312,
                    "extend": ".protobuf_test_messages.proto2.TestAllRequiredTypesProto2.MessageSetCorrect",
                    "protoName": "message_set_extension"
                  }
                }
              },
              "NestedEnum": {
                "values": {
                  "FOO": 0,
                  "BAR": 1,
                  "BAZ": 2,
                  "NEG": -1
                }
              }
            }
          },
          "TestLargeOneof": {
            "edition": "proto2",
            "oneofs": {
              "largeOneof": {
                "oneof": [
                  "a1",
                  "a2",
                  "a3",
                  "a4",
                  "a5"
                ]
              }
            },
            "fields": {
              "a1": {
                "type": ".protobuf_test_messages.proto2.TestLargeOneof.A1",
                "id": 1
              },
              "a2": {
                "type": ".protobuf_test_messages.proto2.TestLargeOneof.A2",
                "id": 2
              },
              "a3": {
                "type": ".protobuf_test_messages.proto2.TestLargeOneof.A3",
                "id": 3
              },
              "a4": {
                "type": ".protobuf_test_messages.proto2.TestLargeOneof.A4",
                "id": 4
              },
              "a5": {
                "type": ".protobuf_test_messages.proto2.TestLargeOneof.A5",
                "id": 5
              }
            },
            "nested": {
              "A1": {
                "fields": {}
              },
              "A2": {
                "fields": {}
              },
              "A3": {
                "fields": {}
              },
              "A4": {
                "fields": {}
              },
              "A5": {
                "fields": {}
              }
            }
          },
          "ForeignEnumProto2": {
            "edition": "proto2",
            "values": {
              "FOREIGN_FOO": 0,
              "FOREIGN_BAR": 1,
              "FOREIGN_BAZ": 2
            }
          },
          "extensionInt32": {
            "edition": "proto2",
            "type": "int32",
            "id": 120,
            "extend": ".protobuf_test_messages.proto2.TestAllTypesProto2",
            "protoName": "extension_int32"
          },
          "groupfield": {
            "edition": "proto2",
            "type": ".protobuf_test_messages.proto2.GroupField",
            "id": 121,
            "extend": ".protobuf_test_messages.proto2.TestAllTypesProto2"
          }
        }
      },
      "proto3": {
        "options": {
          "java_package": "com.google.protobuf_test_messages.proto3",
          "optimize_for": "SPEED",
          "cc_enable_arenas": true,
          "objc_class_prefix": "Proto3"
        },
        "nested": {
          "TestAllTypesProto3": {
            "oneofs": {
              "oneofField": {
                "oneof": [
                  "oneofUint32",
                  "oneofNestedMessage",
                  "oneofString",
                  "oneofBytes",
                  "oneofBool",
                  "oneofUint64",
                  "oneofFloat",
                  "oneofDouble",
                  "oneofEnum",
                  "oneofNullValue"
                ]
              }
            },
            "fields": {
              "optionalInt32": {
                "type": "int32",
                "id": 1,
                "protoName": "optional_int32"
              },
              "optionalInt64": {
                "type": "int64",
                "id": 2,
                "protoName": "optional_int64"
              },
              "optionalUint32": {
                "type": "uint32",
                "id": 3,
                "protoName": "optional_uint32"
              },
              "optionalUint64": {
                "type": "uint64",
                "id": 4,
                "protoName": "optional_uint64"
              },
              "optionalSint32": {
                "type": "sint32",
                "id": 5,
                "protoName": "optional_sint32"
              },
              "optionalSint64": {
                "type": "sint64",
                "id": 6,
                "protoName": "optional_sint64"
              },
              "optionalFixed32": {
                "type": "fixed32",
                "id": 7,
                "protoName": "optional_fixed32"
              },
              "optionalFixed64": {
                "type": "fixed64",
                "id": 8,
                "protoName": "optional_fixed64"
              },
              "optionalSfixed32": {
                "type": "sfixed32",
                "id": 9,
                "protoName": "optional_sfixed32"
              },
              "optionalSfixed64": {
                "type": "sfixed64",
                "id": 10,
                "protoName": "optional_sfixed64"
              },
              "optionalFloat": {
                "type": "float",
                "id": 11,
                "protoName": "optional_float"
              },
              "optionalDouble": {
                "type": "double",
                "id": 12,
                "protoName": "optional_double"
              },
              "optionalBool": {
                "type": "bool",
                "id": 13,
                "protoName": "optional_bool"
              },
              "optionalString": {
                "type": "string",
                "id": 14,
                "protoName": "optional_string"
              },
              "optionalBytes": {
                "type": "bytes",
                "id": 15,
                "protoName": "optional_bytes"
              },
              "optionalNestedMessage": {
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage",
                "id": 18,
                "protoName": "optional_nested_message"
              },
              "optionalForeignMessage": {
                "type": ".protobuf_test_messages.proto3.ForeignMessage",
                "id": 19,
                "protoName": "optional_foreign_message"
              },
              "optionalNestedEnum": {
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum",
                "id": 21,
                "protoName": "optional_nested_enum"
              },
              "optionalForeignEnum": {
                "type": ".protobuf_test_messages.proto3.ForeignEnum",
                "id": 22,
                "protoName": "optional_foreign_enum"
              },
              "optionalAliasedEnum": {
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum",
                "id": 23,
                "protoName": "optional_aliased_enum"
              },
              "optionalStringPiece": {
                "type": "string",
                "id": 24,
                "protoName": "optional_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "optionalCord": {
                "type": "string",
                "id": 25,
                "protoName": "optional_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "recursiveMessage": {
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3",
                "id": 27,
                "protoName": "recursive_message"
              },
              "repeatedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 31,
                "protoName": "repeated_int32"
              },
              "repeatedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 32,
                "protoName": "repeated_int64"
              },
              "repeatedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 33,
                "protoName": "repeated_uint32"
              },
              "repeatedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 34,
                "protoName": "repeated_uint64"
              },
              "repeatedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 35,
                "protoName": "repeated_sint32"
              },
              "repeatedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 36,
                "protoName": "repeated_sint64"
              },
              "repeatedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 37,
                "protoName": "repeated_fixed32"
              },
              "repeatedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 38,
                "protoName": "repeated_fixed64"
              },
              "repeatedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 39,
                "protoName": "repeated_sfixed32"
              },
              "repeatedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 40,
                "protoName": "repeated_sfixed64"
              },
              "repeatedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 41,
                "protoName": "repeated_float"
              },
              "repeatedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 42,
                "protoName": "repeated_double"
              },
              "repeatedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 43,
                "protoName": "repeated_bool"
              },
              "repeatedString": {
                "rule": "repeated",
                "type": "string",
                "id": 44,
                "protoName": "repeated_string"
              },
              "repeatedBytes": {
                "rule": "repeated",
                "type": "bytes",
                "id": 45,
                "protoName": "repeated_bytes"
              },
              "repeatedNestedMessage": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage",
                "id": 48,
                "protoName": "repeated_nested_message"
              },
              "repeatedForeignMessage": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto3.ForeignMessage",
                "id": 49,
                "protoName": "repeated_foreign_message"
              },
              "repeatedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum",
                "id": 51,
                "protoName": "repeated_nested_enum"
              },
              "repeatedForeignEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto3.ForeignEnum",
                "id": 52,
                "protoName": "repeated_foreign_enum"
              },
              "repeatedStringPiece": {
                "rule": "repeated",
                "type": "string",
                "id": 54,
                "protoName": "repeated_string_piece",
                "options": {
                  "ctype": "STRING_PIECE"
                }
              },
              "repeatedCord": {
                "rule": "repeated",
                "type": "string",
                "id": 55,
                "protoName": "repeated_cord",
                "options": {
                  "ctype": "CORD"
                }
              },
              "packedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 75,
                "protoName": "packed_int32",
                "options": {
                  "packed": true
                }
              },
              "packedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 76,
                "protoName": "packed_int64",
                "options": {
                  "packed": true
                }
              },
              "packedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 77,
                "protoName": "packed_uint32",
                "options": {
                  "packed": true
                }
              },
              "packedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 78,
                "protoName": "packed_uint64",
                "options": {
                  "packed": true
                }
              },
              "packedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 79,
                "protoName": "packed_sint32",
                "options": {
                  "packed": true
                }
              },
              "packedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 80,
                "protoName": "packed_sint64",
                "options": {
                  "packed": true
                }
              },
              "packedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 81,
                "protoName": "packed_fixed32",
                "options": {
                  "packed": true
                }
              },
              "packedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 82,
                "protoName": "packed_fixed64",
                "options": {
                  "packed": true
                }
              },
              "packedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 83,
                "protoName": "packed_sfixed32",
                "options": {
                  "packed": true
                }
              },
              "packedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 84,
                "protoName": "packed_sfixed64",
                "options": {
                  "packed": true
                }
              },
              "packedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 85,
                "protoName": "packed_float",
                "options": {
                  "packed": true
                }
              },
              "packedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 86,
                "protoName": "packed_double",
                "options": {
                  "packed": true
                }
              },
              "packedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 87,
                "protoName": "packed_bool",
                "options": {
                  "packed": true
                }
              },
              "packedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum",
                "id": 88,
                "protoName": "packed_nested_enum",
                "options": {
                  "packed": true
                }
              },
              "unpackedInt32": {
                "rule": "repeated",
                "type": "int32",
                "id": 89,
                "protoName": "unpacked_int32",
                "options": {
                  "packed": false
                }
              },
              "unpackedInt64": {
                "rule": "repeated",
                "type": "int64",
                "id": 90,
                "protoName": "unpacked_int64",
                "options": {
                  "packed": false
                }
              },
              "unpackedUint32": {
                "rule": "repeated",
                "type": "uint32",
                "id": 91,
                "protoName": "unpacked_uint32",
                "options": {
                  "packed": false
                }
              },
              "unpackedUint64": {
                "rule": "repeated",
                "type": "uint64",
                "id": 92,
                "protoName": "unpacked_uint64",
                "options": {
                  "packed": false
                }
              },
              "unpackedSint32": {
                "rule": "repeated",
                "type": "sint32",
                "id": 93,
                "protoName": "unpacked_sint32",
                "options": {
                  "packed": false
                }
              },
              "unpackedSint64": {
                "rule": "repeated",
                "type": "sint64",
                "id": 94,
                "protoName": "unpacked_sint64",
                "options": {
                  "packed": false
                }
              },
              "unpackedFixed32": {
                "rule": "repeated",
                "type": "fixed32",
                "id": 95,
                "protoName": "unpacked_fixed32",
                "options": {
                  "packed": false
                }
              },
              "unpackedFixed64": {
                "rule": "repeated",
                "type": "fixed64",
                "id": 96,
                "protoName": "unpacked_fixed64",
                "options": {
                  "packed": false
                }
              },
              "unpackedSfixed32": {
                "rule": "repeated",
                "type": "sfixed32",
                "id": 97,
                "protoName": "unpacked_sfixed32",
                "options": {
                  "packed": false
                }
              },
              "unpackedSfixed64": {
                "rule": "repeated",
                "type": "sfixed64",
                "id": 98,
                "protoName": "unpacked_sfixed64",
                "options": {
                  "packed": false
                }
              },
              "unpackedFloat": {
                "rule": "repeated",
                "type": "float",
                "id": 99,
                "protoName": "unpacked_float",
                "options": {
                  "packed": false
                }
              },
              "unpackedDouble": {
                "rule": "repeated",
                "type": "double",
                "id": 100,
                "protoName": "unpacked_double",
                "options": {
                  "packed": false
                }
              },
              "unpackedBool": {
                "rule": "repeated",
                "type": "bool",
                "id": 101,
                "protoName": "unpacked_bool",
                "options": {
                  "packed": false
                }
              },
              "unpackedNestedEnum": {
                "rule": "repeated",
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum",
                "id": 102,
                "protoName": "unpacked_nested_enum",
                "options": {
                  "packed": false
                }
              },
              "mapInt32Int32": {
                "keyType": "int32",
                "type": "int32",
                "id": 56,
                "protoName": "map_int32_int32"
              },
              "mapInt64Int64": {
                "keyType": "int64",
                "type": "int64",
                "id": 57,
                "protoName": "map_int64_int64"
              },
              "mapUint32Uint32": {
                "keyType": "uint32",
                "type": "uint32",
                "id": 58,
                "protoName": "map_uint32_uint32"
              },
              "mapUint64Uint64": {
                "keyType": "uint64",
                "type": "uint64",
                "id": 59,
                "protoName": "map_uint64_uint64"
              },
              "mapSint32Sint32": {
                "keyType": "sint32",
                "type": "sint32",
                "id": 60,
                "protoName": "map_sint32_sint32"
              },
              "mapSint64Sint64": {
                "keyType": "sint64",
                "type": "sint64",
                "id": 61,
                "protoName": "map_sint64_sint64"
              },
              "mapFixed32Fixed32": {
                "keyType": "fixed32",
                "type": "fixed32",
                "id": 62,
                "protoName": "map_fixed32_fixed32"
              },
              "mapFixed64Fixed64": {
                "keyType": "fixed64",
                "type": "fixed64",
                "id": 63,
                "protoName": "map_fixed64_fixed64"
              },
              "mapSfixed32Sfixed32": {
                "keyType": "sfixed32",
                "type": "sfixed32",
                "id": 64,
                "protoName": "map_sfixed32_sfixed32"
              },
              "mapSfixed64Sfixed64": {
                "keyType": "sfixed64",
                "type": "sfixed64",
                "id": 65,
                "protoName": "map_sfixed64_sfixed64"
              },
              "mapInt32Float": {
                "keyType": "int32",
                "type": "float",
                "id": 66,
                "protoName": "map_int32_float"
              },
              "mapInt32Double": {
                "keyType": "int32",
                "type": "double",
                "id": 67,
                "protoName": "map_int32_double"
              },
              "mapBoolBool": {
                "keyType": "bool",
                "type": "bool",
                "id": 68,
                "protoName": "map_bool_bool"
              },
              "mapStringString": {
                "keyType": "string",
                "type": "string",
                "id": 69,
                "protoName": "map_string_string"
              },
              "mapStringBytes": {
                "keyType": "string",
                "type": "bytes",
                "id": 70,
                "protoName": "map_string_bytes"
              },
              "mapStringNestedMessage": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage",
                "id": 71,
                "protoName": "map_string_nested_message"
              },
              "mapStringForeignMessage": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto3.ForeignMessage",
                "id": 72,
                "protoName": "map_string_foreign_message"
              },
              "mapStringNestedEnum": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum",
                "id": 73,
                "protoName": "map_string_nested_enum"
              },
              "mapStringForeignEnum": {
                "keyType": "string",
                "type": ".protobuf_test_messages.proto3.ForeignEnum",
                "id": 74,
                "protoName": "map_string_foreign_enum"
              },
              "oneofUint32": {
                "type": "uint32",
                "id": 111,
                "protoName": "oneof_uint32"
              },
              "oneofNestedMessage": {
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage",
                "id": 112,
                "protoName": "oneof_nested_message"
              },
              "oneofString": {
                "type": "string",
                "id": 113,
                "protoName": "oneof_string"
              },
              "oneofBytes": {
                "type": "bytes",
                "id": 114,
                "protoName": "oneof_bytes"
              },
              "oneofBool": {
                "type": "bool",
                "id": 115,
                "protoName": "oneof_bool"
              },
              "oneofUint64": {
                "type": "uint64",
                "id": 116,
                "protoName": "oneof_uint64"
              },
              "oneofFloat": {
                "type": "float",
                "id": 117,
                "protoName": "oneof_float"
              },
              "oneofDouble": {
                "type": "double",
                "id": 118,
                "protoName": "oneof_double"
              },
              "oneofEnum": {
                "type": ".protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum",
                "id": 119,
                "protoName": "oneof_enum"
              },
              "oneofNullValue": {
                "type": ".google.protobuf.NullValue",
                "id": 120,
                "protoName": "oneof_null_value"
              },
              "optionalBoolWrapper": {
                "type": ".google.protobuf.BoolValue",
                "id": 201,
                "protoName": "optional_bool_wrapper"
              },
              "optionalInt32Wrapper": {
                "type": ".google.protobuf.Int32Value",
                "id": 202,
                "protoName": "optional_int32_wrapper"
              },
              "optionalInt64Wrapper": {
                "type": ".google.protobuf.Int64Value",
                "id": 203,
                "protoName": "optional_int64_wrapper"
              },
              "optionalUint32Wrapper": {
                "type": ".google.protobuf.UInt32Value",
                "id": 204,
                "protoName": "optional_uint32_wrapper"
              },
              "optionalUint64Wrapper": {
                "type": ".google.protobuf.UInt64Value",
                "id": 205,
                "protoName": "optional_uint64_wrapper"
              },
              "optionalFloatWrapper": {
                "type": ".google.protobuf.FloatValue",
                "id": 206,
                "protoName": "optional_float_wrapper"
              },
              "optionalDoubleWrapper": {
                "type": ".google.protobuf.DoubleValue",
                "id": 207,
                "protoName": "optional_double_wrapper"
              },
              "optionalStringWrapper": {
                "type": ".google.protobuf.StringValue",
                "id": 208,
                "protoName": "optional_string_wrapper"
              },
              "optionalBytesWrapper": {
                "type": ".google.protobuf.BytesValue",
                "id": 209,
                "protoName": "optional_bytes_wrapper"
              },
              "repeatedBoolWrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.BoolValue",
                "id": 211,
                "protoName": "repeated_bool_wrapper"
              },
              "repeatedInt32Wrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.Int32Value",
                "id": 212,
                "protoName": "repeated_int32_wrapper"
              },
              "repeatedInt64Wrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.Int64Value",
                "id": 213,
                "protoName": "repeated_int64_wrapper"
              },
              "repeatedUint32Wrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.UInt32Value",
                "id": 214,
                "protoName": "repeated_uint32_wrapper"
              },
              "repeatedUint64Wrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.UInt64Value",
                "id": 215,
                "protoName": "repeated_uint64_wrapper"
              },
              "repeatedFloatWrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.FloatValue",
                "id": 216,
                "protoName": "repeated_float_wrapper"
              },
              "repeatedDoubleWrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.DoubleValue",
                "id": 217,
                "protoName": "repeated_double_wrapper"
              },
              "repeatedStringWrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.StringValue",
                "id": 218,
                "protoName": "repeated_string_wrapper"
              },
              "repeatedBytesWrapper": {
                "rule": "repeated",
                "type": ".google.protobuf.BytesValue",
                "id": 219,
                "protoName": "repeated_bytes_wrapper"
              },
              "optionalDuration": {
                "type": ".google.protobuf.Duration",
                "id": 301,
                "protoName": "optional_duration"
              },
              "optionalTimestamp": {
                "type": ".google.protobuf.Timestamp",
                "id": 302,
                "protoName": "optional_timestamp"
              },
              "optionalFieldMask": {
                "type": ".google.protobuf.FieldMask",
                "id": 303,
                "protoName": "optional_field_mask"
              },
              "optionalStruct": {
                "type": ".google.protobuf.Struct",
                "id": 304,
                "protoName": "optional_struct"
              },
              "optionalAny": {
                "type": ".google.protobuf.Any",
                "id": 305,
                "protoName": "optional_any"
              },
              "optionalValue": {
                "type": ".google.protobuf.Value",
                "id": 306,
                "protoName": "optional_value"
              },
              "optionalNullValue": {
                "type": ".google.protobuf.NullValue",
                "id": 307,
                "protoName": "optional_null_value"
              },
              "repeatedDuration": {
                "rule": "repeated",
                "type": ".google.protobuf.Duration",
                "id": 311,
                "protoName": "repeated_duration"
              },
              "repeatedTimestamp": {
                "rule": "repeated",
                "type": ".google.protobuf.Timestamp",
                "id": 312,
                "protoName": "repeated_timestamp"
              },
              "repeatedFieldmask": {
                "rule": "repeated",
                "type": ".google.protobuf.FieldMask",
                "id": 313,
                "protoName": "repeated_fieldmask"
              },
              "repeatedStruct": {
                "rule": "repeated",
                "type": ".google.protobuf.Struct",
                "id": 324,
                "protoName": "repeated_struct"
              },
              "repeatedAny": {
                "rule": "repeated",
                "type": ".google.protobuf.Any",
                "id": 315,
                "protoName": "repeated_any"
              },
              "repeatedValue": {
                "rule": "repeated",
                "type": ".google.protobuf.Value",
                "id": 316,
                "protoName": "repeated_value"
              },
              "repeatedListValue": {
                "rule": "repeated",
                "type": ".google.protobuf.ListValue",
                "id": 317,
                "protoName": "repeated_list_value"
              },
              "fieldname1": {
                "type": "int32",
                "id": 401
              },
              "fieldName2": {
                "type": "int32",
                "id": 402,
                "protoName": "field_name2"
              },
              "FieldName3": {
                "type": "int32",
                "id": 403,
                "protoName": "_field_name3"
              },
              "fieldName4": {
                "type": "int32",
                "id": 404,
                "protoName": "field__name4_"
              },
              "field0name5": {
                "type": "int32",
                "id": 405
              },
              "field0Name6": {
                "type": "int32",
                "id": 406,
                "protoName": "field_0_name6"
              },
              "fieldName7": {
                "type": "int32",
                "id": 407
              },
              "FieldName8": {
                "type": "int32",
                "id": 408
              },
              "fieldName9": {
                "type": "int32",
                "id": 409,
                "protoName": "field_Name9"
              },
              "FieldName10": {
                "type": "int32",
                "id": 410,
                "protoName": "Field_Name10"
              },
              "FIELDNAME11": {
                "type": "int32",
                "id": 411,
                "protoName": "FIELD_NAME11"
              },
              "FIELDName12": {
                "type": "int32",
                "id": 412,
                "protoName": "FIELD_name12"
              },
              "FieldName13": {
                "type": "int32",
                "id": 413,
                "protoName": "__field_name13"
              },
              "FieldName14": {
                "type": "int32",
                "id": 414,
                "protoName": "__Field_name14"
              },
              "fieldName15": {
                "type": "int32",
                "id": 415,
                "protoName": "field__name15"
              },
              "fieldName16": {
                "type": "int32",
                "id": 416,
                "protoName": "field__Name16"
              },
              "fieldName17": {
                "type": "int32",
                "id": 417,
                "protoName": "field_name17__"
              },
              "FieldName18": {
                "type": "int32",
                "id": 418,
                "protoName": "Field_name18__"
              }
            },
            "reserved": [
              [
                501,
                510
              ],
              [
                999999,
                999999
              ],
              "reserved_field"
            ],
            "nested": {
              "NestedMessage": {
                "fields": {
                  "a": {
                    "type": "int32",
                    "id": 1
                  },
                  "corecursive": {
                    "type": ".protobuf_test_messages.proto3.TestAllTypesProto3",
                    "id": 2
                  }
                }
              },
              "NestedEnum": {
                "values": {
                  "FOO": 0,
                  "BAR": 1,
                  "BAZ": 2,
                  "NEG": -1
                }
              },
              "AliasedEnum": {
                "options": {
                  "allow_alias": true
                },
                "values": {
                  "ALIAS_FOO": 0,
                  "ALIAS_BAR": 1,
                  "ALIAS_BAZ": 2,
                  "MOO": 2,
                  "moo": 2,
                  "bAz": 2
                }
              }
            }
          },
          "ForeignMessage": {
            "fields": {
              "c": {
                "type": "int32",
                "id": 1
              }
            }
          },
          "NullHypothesisProto3": {
            "fields": {}
          },
          "EnumOnlyProto3": {
            "fields": {},
            "nested": {
              "Bool": {
                "values": {
                  "kFalse": 0,
                  "kTrue": 1
                }
              }
            }
          },
          "ForeignEnum": {
            "values": {
              "FOREIGN_FOO": 0,
              "FOREIGN_BAR": 1,
              "FOREIGN_BAZ": 2
            }
          }
        }
      }
    }
  },
  "google": {
    "nested": {
      "protobuf": {
        "options": {
          "java_package": "com.google.protobuf",
          "java_outer_classname": "WrappersProto",
          "java_multiple_files": true,
          "go_package": "google.golang.org/protobuf/types/known/wrapperspb",
          "objc_class_prefix": "GPB",
          "csharp_namespace": "Google.Protobuf.WellKnownTypes",
          "cc_enable_arenas": true
        },
        "nested": {
          "Any": {
            "fields": {
              "typeUrl": {
                "type": "string",
                "id": 1,
                "protoName": "type_url"
              },
              "value": {
                "type": "bytes",
                "id": 2
              }
            }
          },
          "Duration": {
            "fields": {
              "seconds": {
                "type": "int64",
                "id": 1
              },
              "nanos": {
                "type": "int32",
                "id": 2
              }
            }
          },
          "FieldMask": {
            "fields": {
              "paths": {
                "rule": "repeated",
                "type": "string",
                "id": 1
              }
            }
          },
          "Struct": {
            "fields": {
              "fields": {
                "keyType": "string",
                "type": ".google.protobuf.Value",
                "id": 1
              }
            }
          },
          "Value": {
            "oneofs": {
              "kind": {
                "oneof": [
                  "nullValue",
                  "numberValue",
                  "stringValue",
                  "boolValue",
                  "structValue",
                  "listValue"
                ]
              }
            },
            "fields": {
              "nullValue": {
                "type": ".google.protobuf.NullValue",
                "id": 1,
                "protoName": "null_value"
              },
              "numberValue": {
                "type": "double",
                "id": 2,
                "protoName": "number_value"
              },
              "stringValue": {
                "type": "string",
                "id": 3,
                "protoName": "string_value"
              },
              "boolValue": {
                "type": "bool",
                "id": 4,
                "protoName": "bool_value"
              },
              "structValue": {
                "type": ".google.protobuf.Struct",
                "id": 5,
                "protoName": "struct_value"
              },
              "listValue": {
                "type": ".google.protobuf.ListValue",
                "id": 6,
                "protoName": "list_value"
              }
            }
          },
          "ListValue": {
            "fields": {
              "values": {
                "rule": "repeated",
                "type": ".google.protobuf.Value",
                "id": 1
              }
            }
          },
          "NullValue": {
            "values": {
              "NULL_VALUE": 0
            }
          },
          "Timestamp": {
            "fields": {
              "seconds": {
                "type": "int64",
                "id": 1
              },
              "nanos": {
                "type": "int32",
                "id": 2
              }
            }
          },
          "DoubleValue": {
            "fields": {
              "value": {
                "type": "double",
                "id": 1
              }
            }
          },
          "FloatValue": {
            "fields": {
              "value": {
                "type": "float",
                "id": 1
              }
            }
          },
          "Int64Value": {
            "fields": {
              "value": {
                "type": "int64",
                "id": 1
              }
            }
          },
          "UInt64Value": {
            "fields": {
              "value": {
                "type": "uint64",
                "id": 1
              }
            }
          },
          "Int32Value": {
            "fields": {
              "value": {
                "type": "int32",
                "id": 1
              }
            }
          },
          "UInt32Value": {
            "fields": {
              "value": {
                "type": "uint32",
                "id": 1
              }
            }
          },
          "BoolValue": {
            "fields": {
              "value": {
                "type": "bool",
                "id": 1
              }
            }
          },
          "StringValue": {
            "fields": {
              "value": {
                "type": "string",
                "id": 1
              }
            }
          },
          "BytesValue": {
            "fields": {
              "value": {
                "type": "bytes",
                "id": 1
              }
            }
          }
        }
      }
    }
  }
});
export const conformance = $root.get("conformance");
export const protobuf_test_messages = $root.get("protobuf_test_messages");
export const google = $root.get("google");

export {
  /**
   * Reflected root namespace.
   * @type {$protobuf.Root}
   */
  $root as default
};
