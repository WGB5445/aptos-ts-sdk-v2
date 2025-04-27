// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import {
  MAX_U128_BIG_INT,
  MAX_U16_NUMBER,
  MAX_U32_NUMBER,
  MAX_U64_BIG_INT,
  MAX_U8_NUMBER,
  MAX_U256_BIG_INT,
  Uint8,
  Uint16,
  Uint32,
  AnyNumber,
} from "../consts";
import { Deserializer } from "../deserializer";
import { Serializable, Serializer, ensureBoolean, validateNumberInRange } from "../serializer";

/**
 * Represents a boolean value that can be serialized and deserialized.
 * This class extends the Serializable class and provides methods to serialize
 * the boolean value for different contexts, such as entry functions and script functions.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class Bool extends Serializable {
  public readonly value: boolean;

  /**
   * Constructs a new instance with a specified value.
   * This ensures that the value is validated to be within the acceptable range.
   *
   * @param value - The number to be validated and assigned, which must be between 0 and MAX_U256_BIG_INT.
   * @group Implementation
   * @category BCS
   */
  constructor(value: boolean) {
    super();

    /**
     * Ensures that the provided value is of type boolean.
     * This function throws an error if the value is not a boolean, helping to enforce type safety in your code.
     *
     * @param value - The value to be checked for boolean type.
     * @throws {Error} Throws an error if the value is not a boolean.
     * @group Implementation
     * @category BCS
     */
    ensureBoolean(value);
    this.value = value;
  }

  /**
   * Serializes the value using the provided serializer.
   * This function is essential for converting the value into a format suitable for transmission or storage.
   *
   * @param serializer - The serializer instance used to perform the serialization.
   * @group Implementation
   * @category BCS
   */
  serialize(serializer: Serializer): void {
    serializer.serializeBool(this.value);
  }

  /**
   * Deserializes a U256 value from the provided deserializer.
   *
   * @param deserializer - The deserializer instance used to read the U256 data.
   * @group Implementation
   * @category BCS
   */
  // eslint-disable-next-line class-methods-use-this
  deserialize(deserializer: Deserializer) {
    return new U256(deserializer.deserializeU256());
  }

  static deserialize(deserializer: Deserializer): Bool {
    return new Bool(deserializer.deserializeBool());
  }
}

/**
 * Represents an unsigned 8-bit integer (U8) value.
 * This class extends the Serializable class and provides methods for serialization and deserialization of U8 values.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class U8 extends Serializable {
  public readonly value: Uint8;

  constructor(value: Uint8) {
    super();
    validateNumberInRange(value, 0, MAX_U8_NUMBER);
    this.value = value;
  }

  serialize(serializer: Serializer): void {
    serializer.serializeU8(this.value);
  }

  static deserialize(deserializer: Deserializer): U8 {
    return new U8(deserializer.deserializeU8());
  }
}

/**
 * Represents a 16-bit unsigned integer (U16) value.
 * This class extends the Serializable class and provides methods for serialization
 * and deserialization of the U16 value.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class U16 extends Serializable {
  public readonly value: Uint16;

  constructor(value: Uint16) {
    super();
    validateNumberInRange(value, 0, MAX_U16_NUMBER);
    this.value = value;
  }

  serialize(serializer: Serializer): void {
    serializer.serializeU16(this.value);
  }

  static deserialize(deserializer: Deserializer): U16 {
    return new U16(deserializer.deserializeU16());
  }
}

/**
 * Represents a 32-bit unsigned integer (U32) that can be serialized and deserialized.
 * This class ensures that the value is within the valid range for a U32.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class U32 extends Serializable {
  public readonly value: Uint32;

  constructor(value: Uint32) {
    super();
    validateNumberInRange(value, 0, MAX_U32_NUMBER);
    this.value = value;
  }

  serialize(serializer: Serializer): void {
    serializer.serializeU32(this.value);
  }

  static deserialize(deserializer: Deserializer): U32 {
    return new U32(deserializer.deserializeU32());
  }
}

/**
 * Represents a 64-bit unsigned integer (U64) and provides methods for serialization.
 *
 * This class ensures that the value is within the valid range for a U64 and provides
 * functionality to serialize the value for various use cases, including entry functions
 * and script functions.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class U64 extends Serializable {
  public readonly value: bigint;

  constructor(value: AnyNumber) {
    super();
    validateNumberInRange(value, BigInt(0), MAX_U64_BIG_INT);
    this.value = BigInt(value);
  }

  serialize(serializer: Serializer): void {
    serializer.serializeU64(this.value);
  }

  static deserialize(deserializer: Deserializer): U64 {
    return new U64(deserializer.deserializeU64());
  }
}

/**
 * Represents a 128-bit unsigned integer value.
 * This class provides methods for serialization and deserialization
 * of U128 values, ensuring that the values are within the valid range.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class U128 extends Serializable {
  public readonly value: bigint;

  constructor(value: AnyNumber) {
    super();
    validateNumberInRange(value, BigInt(0), MAX_U128_BIG_INT);
    this.value = BigInt(value);
  }

  serialize(serializer: Serializer): void {
    serializer.serializeU128(this.value);
  }

  static deserialize(deserializer: Deserializer): U128 {
    return new U128(deserializer.deserializeU128());
  }
}

/**
 * Represents a 256-bit unsigned integer (U256) that extends the Serializable class.
 * This class provides methods for serialization and deserialization of U256 values,
 * ensuring that the values are within the valid range.
 *
 * @extends Serializable
 * @group Implementation
 * @category BCS
 */
export class U256 extends Serializable {
  public readonly value: bigint;

  constructor(value: AnyNumber) {
    super();
    validateNumberInRange(value, BigInt(0), MAX_U256_BIG_INT);
    this.value = BigInt(value);
  }

  serialize(serializer: Serializer): void {
    serializer.serializeU256(this.value);
  }

  static deserialize(deserializer: Deserializer): U256 {
    return new U256(deserializer.deserializeU256());
  }
}
