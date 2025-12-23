// we can define number both with and without decimal points
let integerNumber = 42;
let floatingPointNumber = 3.14;

// Extra large or extra small numbers can be written with scientific (exponent) notation:
let largeNumber = 1.2e6; // 1.2 million
let smallNumber = 5e-3; // 0.005

/**
 * js numbers are always 64-bit floating point values.
 * Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
 * All numbers in JavaScript are stored as double-precision 64-bit binary format IEEE 754 values.
 * This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.
 */

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let preciseNumber = 999999999999999; // 15 nines
console.log(preciseNumber); // Output: 999999999999999
let impreciseNumber = 9999999999999999; // 16 nines
console.log(impreciseNumber); // Output: 10000000000000000

let largeInt = 9007199254740991; // Maximum safe integer in JavaScript
console.log(largeInt); // Output: 9007199254740991
let tooLargeInt = 9007199254740992; // Exceeds maximum safe integer
console.log(tooLargeInt); // Output: 9007199254740992 (may not be precise)
// At that large range, JavaScript can only represent every 2nd number
// Beyond that, it can only represent every 4th, 8th, etc. number
let evenLargerInt1 = 9007199254740993;
let evenLargerInt2 = 9007199254740994;
let evenLargerInt3 = 9007199254740995;
console.log(evenLargerInt1); // Output: 9007199254740992
console.log(evenLargerInt2); // Output: 9007199254740994
console.log(evenLargerInt3); // Output: 9007199254740996

/**
 * for 9999999999999999, the closest representable number is 10000000000000000
 * for 9007199254740993, the closest representable number is 9007199254740992
 * for 9007199254740995, the closest representable number is 9007199254740996
 * 
 * JavaScript does not arbitrarily round up or down. It always rounds to the nearest representable value, and when exactly in between, it rounds to the even one.
 * 
 * When JavaScript can’t store a number exactly, it picks the closest one — and if two are equally close, it picks the one that ends in binary zero.
 */

// Floating-point numbers (numbers with a decimal point or in exponent notation) are accurate up to about 15 digits in total, including both sides of the decimal point.

let preciseFloat = 0.123456789012345; // 15 digits total
console.log(preciseFloat); // Output: 0.123456789012345
let impreciseFloat = 0.1234567890123456; // 16 digits total
console.log(impreciseFloat); // Output: 0.1234567890123457
let anotherImpreciseFloat = 123456789012345.6; // 16 digits total
console.log(anotherImpreciseFloat); // Output: 123456789012345.6 (may not be precise)
let yetAnotherImpreciseFloat = 1234567890123456.0; // 16 digits total
console.log(yetAnotherImpreciseFloat); // Output: 1234567890123456 (may not be precise)
// Similar to integers, when the total number of significant digits exceeds 15, JavaScript rounds to the nearest representable value.

/**
 * In summary, JavaScript uses a single Number type for all numeric values, which are represented as 64-bit floating-point numbers.
 * This means that both integers and floating-point numbers share the same precision limitations, being accurate up to about 15-17 significant digits.
 */

// addition of number and string
// js uses the + operator for both addition and string concatenation
let num = 10;
let str = " apples";
let result = num + str;
console.log(result); // Output: "10 apples"
let viceVersa = str + num;
console.log(viceVersa); // Output: " apples10"
let x = 10;
let y = 5;
let sum = x + y;
console.log(sum); // Output: 15
let z = ""+x + y;
console.log(z); // Output: "105"; because z initialization starts with a string, so + operator performs string concatenation
let a = x + y + "";
console.log(a); // Output: "15"; because a initialization starts with numbers, so + operator performs addition first, then concatenation
let b = x+y+"10";
console.log(b); // Output: "1510"; because b initialization starts with numbers, so + operator performs addition first, then concatenation
// js interpreter works from left to right.

// other numeric operations for string and number
let subtraction = 10 - "2";
console.log(subtraction); // here js converts string "2" to number 2 and performs subtraction; Output: 8
let multiplication = 5 * "3";
console.log(multiplication); // here js converts string "3" to number 3 and performs multiplication; Output: 15
let division = "20" / 4;
console.log(division); // here js converts string "20" to number 20 and performs division; Output: 5
let modulus = "15" % 4;
console.log(modulus); // here js converts string "15" to number 15 and performs modulus operation; Output: 3

// Note: The + operator is the only operator that performs string concatenation when one of the operands is a string. All other arithmetic operators convert strings to numbers.

// NaN (Not-a-Number) is a special numeric value that represents an undefined or unrepresentable value in mathematics.
let notANumber1 = 0 / 0;
console.log(notANumber1); // Output: NaN
let notANumber2 = Math.sqrt(-1);
console.log(notANumber2); // Output: NaN
let notANumber3 = parseInt("hello");
console.log(notANumber3); // Output: NaN
// if we use NaN in any arithmetic operation, the result will also be NaN
let resultWithNaN = NaN + 5;
console.log(resultWithNaN); // Output: NaN
// for string
let strWithNaN = "Value is " + NaN;
console.log(strWithNaN); // Output: "Value is NaN"

// infinty, -infinity
let myNumber = 2;
let zeroNumber = 0;
while(myNumber !=Infinity){
    myNumber = myNumber * myNumber;
    zeroNumber = zeroNumber - myNumber;
    console.log("infinity check", myNumber);
    console.log("-infinity check", zeroNumber);
}

// typeof: unary operator
console.log(typeof Infinity);
console.log(typeof NaN);

