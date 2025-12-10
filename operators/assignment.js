// simple assignment
let x = 20;
console.log("Initial value of x:", x);

// addition assignment
x += 5; // equivalent to x = x + 5
console.log("After addition assignment (x += 5):", x);

// subtraction assignment
x -= 3; // equivalent to x = x - 3
console.log("After subtraction assignment (x -= 3):", x);

// multiplication assignment
x *= 2; // equivalent to x = x * 2
console.log("After multiplication assignment (x *= 2):", x);

// division assignment
x /= 4; // equivalent to x = x / 4
console.log("After division assignment (x /= 4):", x);

// modulus assignment
x %= 3; // equivalent to x = x % 3
console.log("After modulus assignment (x %= 3):", x);

// exponentiation assignment
x **= 3; // equivalent to x = x ** 3
console.log("After exponentiation assignment (x **= 3):", x);

// logical AND assignment
let a = true;
let b = a &&=10;
console.log("After logical AND assignment (b = a &&= 10):", b);
// b will be 10 since a is true

a = false;
b = a &&= 20;
console.log("After logical AND assignment with false (b = a &&= 20):", b);
// b will be false since a is false

// logical OR assignment
a = false;
b = a ||= 30;
console.log("After logical OR assignment (b = a ||= 30):", b);
// b will be 30 since a is false

// nullish coalescing assignment
a = null;
// a = undefined;
// a = 10;
b = a ??= 40;
console.log("After nullish coalescing assignment (b = a ??= 40):", b);
// b will be 40 since a is null

// spread operator
let arr1 = [1, 2, 3];
function sum(x, y, z) {
  return x + y + z;
}
let total = sum(...arr1); // equivalent to sum(1, 2, 3)
console.log("Sum using spread operator:", total);