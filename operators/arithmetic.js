// adding
let a = 10;
let b = 5;
let sum = a + b;
console.log("Sum:", sum);
// here a nd b are operands and + is the operator

// subtracting
let difference = a - b;
console.log("Difference:", difference);

// multiplying
let product = a * b;
console.log("Product:", product);

// dividing
let quotient = a / b;
console.log("Quotient:", quotient);

// modulus
let remainder = a % b;
console.log("Remainder:", remainder);

// exponentiation
let power = a ** b;
console.log("Power:", power);
// a ** b produces the same result as Math.pow(a,b)
// console.log(Math.pow(a, b));

// increment
// prefix increment
let incrementedValue = ++a;
console.log("Prefix Increment:", incrementedValue); // a is now 11
console.log("Value of a after Prefix Increment:", a);

// postfix increment
let postIncrementedValue = b++;
console.log("Postfix Increment:", postIncrementedValue);
console.log("Value of b after Postfix Increment:", b);
/**
 * for prefix increment, the value is incremented first and then used in the expression.
 * for postfix increment, the current value is used in the expression first and then it is incremented.
 * 
 * we can see that in the above example:
 * - In the prefix increment, 'a' was incremented to 11 before being assigned to 'incrementedValue'.
 * - In the postfix increment, 'b' was assigned to 'postIncrementedValue' first (which was 5), and then 'b' was incremented to 6.
 */

// decrement
// prefix decrement
let decrementedValue = --a;
console.log("Prefix Decrement:", decrementedValue); // a is now 10
console.log("Value of a after Prefix Decrement:", a);

// postfix decrement
let postDecrementedValue = b--;
console.log("Postfix Decrement:", postDecrementedValue);
console.log("Value of b after Postfix Decrement:", b);
// prefix and postfix decrement work similarly to increment discussed above

/**
 * about precedence:
 * In arithmetic operations, the precedence order is as follows:
 * 1. Parentheses ()
 * 2. Exponentiation **
 * 3. Multiplication * , Division / , Modulus %
 * 4. Addition + , Subtraction - -
 * 
 * Operators with higher precedence are evaluated before operators with lower precedence.
 * When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right 
 */