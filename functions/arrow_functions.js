// Arrow Functions allow a shorter syntax for function expressions.

// startProgramCheck();
/**
 * if we use var keyword to declare an arrow function then it will be hoisted as undefined in global scope.
 * if we use let keyword then the function will be <value unavailable> in temporal dead zone.
 * it is happening because like function expressions, arrow funcitons also behave like a variable.
 * for that, also we cannot use it before its declaration.
 * 
 * for var: TypeError: startProgramCheck is not a function
 * for let/const: ReferenceError: Cannot access 'startProgramCheck' before initialization
 */

// var startProgramCheck = () => {
const startProgramCheck = () => {
    console.log("Program started");
}

startProgramCheck();

// with single parameter:
const square = x => x * x; // no need to use parentheses (not mandatory, but can use).
console.log(square(5)); // 25

// with multiple parameters:
const add = (a, b) => a + b; // parentheses are mandatory here, so is for zero parameters.
console.log(add(3, 7)); // 10

// multi-line arrow function:
const multiply = (a, b) => {
    let result = a * b;
    // return result; // need to use return statement here.
    console.log(result); // if i don't use return statement, then it will return undefined.
}

multiply(4, 6); // 24
console.log(multiply(2,3)); // log 6, and return undefined