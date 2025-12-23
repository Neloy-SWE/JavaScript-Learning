/**
 * BigInt is a JavaScript data type for handling and storing big integer values.
 * BigInt allows you to work with integers larger than the limit of Numbers.
 * BigInt can represent an integer of any size, limited only by available memory.
 * 
 * JavaScript Numbers are only accurate up to 15 digits. but BigInt can handle larger integers.
 * 
 * There is no such thing as a JavaScript Integer. all JavaScript Numbers are 64-bit floating point.
 * 
 * BigInt is the second numeric data type in JavaScript (after Number).
 * 
 * Large BigInts might result in Infinity or loss of precision when converted to number.
 * 
 * JSON.stringify() cannot handle BigInts - throws an error.
 */

// creating BigInt with suffix:n
let bigInt1 = 1234567890123456789012345678901234567890n;
console.log(bigInt1);
console.log(typeof bigInt1); // output: bigint

// creating BigInt with BigInt() function
let bigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt2);
console.log(typeof bigInt2); // output: bigint
let bigInt3 = BigInt(1234567890); // passing number directly
console.log(bigInt3);
console.log(typeof bigInt3); // output: bigint

let addA = 10n;
let addB = 20n;
console.log(addA + addB);

let numberA = 10;
// console.log(addA + numberA); // TypeError: Cannot mix BigInt and other types, use explicit conversions

// converting BigInt to number
let numberForBigInt = Number(addA);
console.log(numberForBigInt);

// converting number to BigInt
let bigIntNumber = BigInt(numberA);
console.log(bigIntNumber);

// Attempting to convert a number with a fractional part to a BigInt will throw an error.
let floatNumber = 10.5;
// let bigIntFloat = BigInt(floatNumber); // RangeError: The number 10.5 cannot be converted to a BigInt because it is not an integer at BigInt