// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * BCS types
 */
export type Uint8 = number;

/**
 * A 16-bit unsigned integer.
 */
export type Uint16 = number;

/**
 * A 32-bit unsigned integer.
 */
export type Uint32 = number;

/**
 * A 64-bit unsigned integer value.
 */
export type Uint64 = bigint;

/**
 * A 128-bit unsigned integer used for precise arithmetic operations.
 */
export type Uint128 = bigint;

/**
 * A 256-bit unsigned integer used for precise numerical calculations.
 */
export type Uint256 = bigint;

/**
 * A number or a bigint value.
 */
export type AnyNumber = number | bigint;


// Upper bound values for uint8, uint16, uint64 etc.  These are all derived as
// 2^N - 1, where N is the number of bits in the type.
export const MAX_U8_NUMBER: Uint8 = 255;
export const MAX_U16_NUMBER: Uint16 = 65535;
export const MAX_U32_NUMBER: Uint32 = 4294967295;
export const MAX_U64_BIG_INT: Uint64 = 18446744073709551615n;
export const MAX_U128_BIG_INT: Uint128 = 340282366920938463463374607431768211455n;
export const MAX_U256_BIG_INT: Uint256 =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;
