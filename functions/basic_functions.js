var x = 1;
a(); // 20
b(); // 100
console.log(x); // 1

function a() {
    var x = 20;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

/**
 * In the above example:
 * - Both functions `a` and `b` are hoisted to the top of their containing scope, allowing them to be called before their actual declarations.
 * - Each function has its own local variable `x`, which is separate from the global variable `x`.
 * - When `a()` is called, it logs `20`, and when `b()` is called, it logs `100`.
 */


/** 
 * the major difference between function statement and function expression is hoisting.
 * function statements are hoisted, meaning they can be called before they are defined in the code.
 * function expressions are not hoisted in the same way as function statements, so they cannot be called before they are defined.
 */

// checking hoisting behavior of function statement and function expression
// statementExample();
// expressionExample(); // Uncaught TypeError: expressionExample is not a function
// here, expressionExample is undefined at this point, because function expressions are not hoisted like function statements.

// fuction statement/fuction declaration:
function statementExample() {
    console.log("This is a function statement");
}
/**
 * a function statement, also commonly referred to as a function declaration, is a way to define a named function. It creates a reusable block of code that performs a specific task or calculates a value.
 */

// fuction expression:
var expressionExample = function () {
    console.log("This is a function expression");
}
/**
 * a function expression is a way to define a function as part of a larger expression. It allows you to create anonymous functions or assign functions to variables, enabling more flexible and dynamic usage of functions in your code.
 * here, function is act like a value.
 */


// anonymous function:
// function () {
//     console.log("This is an anonymous function");
// } // Uncaught SyntaxError: Function statements require a function name
/**
 * an anonymous function is a function that is defined without a name. it is often used as an argument to other functions, or assigned to variables.
 * anonymous functions are commonly used in situations where a function is needed for a short period of time and does not require a specific name for reference.
 */

var anonymousFunction = function () {
    console.log("This is an anonymous function assigned to a variable");
}
// here, we have assigned an anonymous function to a variable named anonymousFunction. we can invoke it using the variable name.
anonymousFunction();

// named function expression:
var namedFunctionExpression = function namedFunction() {
    console.log("This is a named function expression");
    console.log(namedFunction); // this will work
}
namedFunctionExpression();
// namedFunction(); // Uncaught ReferenceError: namedFunction is not defined
// here, namedFunction is not accessible outside the function expression scope. but we can use it inside it.

/**
 * parameters vs arguments:
 * - parameters are the names listed in the function definition.
 * - arguments are the real values passed to the function when it is invoked.
 */

function parameterArgumentExample(param1, param2) {
    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);
}

parameterArgumentExample("Argument 1", "Argument 2");

// fist-class functions:
/**
 * in javascript, functions are first-class citizens, which means they can be treated like any other variable. they can be assigned to variables, passed as arguments to other functions, and returned from other functions.
 */

function firstClassFunctionExample(parameterFunction) {
    parameterFunction();
}

function forParameterFunction() {
    console.log("This function is passed as a parameter");
}

var firstClassFunctionVariable = firstClassFunctionExample;
console.log(firstClassFunctionVariable);
firstClassFunctionVariable(forParameterFunction);

function returnFunctionExample() {
    return function () {
        console.log("This function is returned from another function");
    }
}

var returnedFunction = returnFunctionExample();
console.log(returnedFunction);
returnedFunction();