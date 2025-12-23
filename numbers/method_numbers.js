// toString()
let x = 123;
console.log(x.toString());
console.log(typeof x);
console.log(typeof x.toString());
// The toString() method can take an optional radix argument to convert the number to a different base
console.log(x.toString(2));

// toExponential()
let y = 2;
console.log(y.toExponential(2));
console.log(typeof y.toExponential(2)); // toExponential() return string

// toFixed()
let z = 1.3333;
console.log(z.toFixed(2));
console.log(z.toFixed(20)); // output: 1.33329999999999992966
console.log(typeof z.toFixed(2)); // return string with fixed floating point

// toPrecision()
console.log(z.toPrecision(10)); // output: 1.333300000
z.valueOf();

// Number(), parseFloat(), parseInt()
// The methods above are not number methods. They are global JavaScript methods.
console.log(Number(true));
console.log(Number(false));
console.log(Number("hello"));
console.log(Number("    10   "));
console.log(Number("10"));
// If the number cannot be converted, NaN (Not a Number) is returned.
console.log(Number(new Date("1971-01-01"))); // The Date() method returns the number of milliseconds since 1.1.1970.

console.log(parseInt(true));
console.log(parseInt("hello 10"));
console.log(parseInt("10 hello"));
console.log(parseInt("-10"));
console.log(parseInt(1.5555));
console.log(parseInt("1.5555"));

console.log(parseFloat("1"));
console.log(parseFloat("2."));
console.log(parseFloat("1.5555"));
console.log(parseFloat(1));
console.log(parseFloat(true));

// object methods
// isInteger
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

// isFinite
console.log(Number.isFinite(123));

// isNaN
console.log(Number.isNaN(123));
// Number.isNaN() is the preferred way to check for equality with NaN. You cannot test for equality with NaN using == or ===.

// isSafeInteger
Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);

// parseIn
console.log(Number.parseInt("10"));

// parseFloat
console.log( Number.parseFloat("122"));