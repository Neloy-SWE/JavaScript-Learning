function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 3000);
    console.log("hello javascript");
}
x();

/**
 * In the above example:
 * - The function `x` defines a variable `i` and sets up a `setTimeout` to log `i` after 3 seconds.
 * - The anonymous function passed to `setTimeout` forms a closure that captures the variable `i` from its outer scope.
 * when `x` is called, it immediately logs "hello javascript". After 3 seconds, the function inside `setTimeout` executes and logs the value of `i`, which is `1`.
 * - This demonstrates how closures allow the inner function to access variables from its outer function's scope, even after the outer function has completed execution.
 * when `setTimeout` is called, it doesn't execute the function immediately. Instead, it allocate a space in memory for the function and the variables it needs to access (like `i` in this case). This is made possible through closures, which preserve the lexical environment of the function.
 */

function y() {
    for (var i = 1; i <= 5; i++) {
        console.log("Loop 1:", i);
        setTimeout(function () {
            console.log("loop 1 from the timer", i);
        }, 1000);
    }
    console.log("hello javascript");
}
y();

/**
 * In the above example:
 * - The function `y` contains a loop that sets up multiple `setTimeout` calls.
 * - Each `setTimeout` callback function forms a closure that captures the variable `i` from its outer scope.
 * - However, since `var` is function-scoped, by the time the `setTimeout` callbacks execute after 1 second, the loop has completed and `i` has been incremented to `6`.
 * - As a result, all the `setTimeout` callbacks log `6`, demonstrating how closures capture variable references, not their values at the time of creation.
 */

function z() {
    for (let i = 1; i <= 5; i++) {
        console.log("Loop 2:", i);
        setTimeout(function () {
            console.log("loop 2 from the timer", i);
        }, 1000);
    }
    console.log("hello javascript");
}
z();

/**
 * In the above example:
 * - The function `z` contains a loop that sets up multiple `setTimeout` calls.
 * - Each `setTimeout` callback function forms a closure that captures the variable `i` from its outer scope.
 * - Since `let` is block-scoped, each iteration of the loop creates a new binding for `i`.
 * - As a result, when the `setTimeout` callbacks execute after 1 second, they log the values `1` through `5`, demonstrating how closures capture the correct variable values when using block-scoped variables.
 */
/**
 * this is happening because:
 * - when using `var`, the variable `i` is function-scoped, so all closures created inside the loop share the same `i`. By the time the `setTimeout` callbacks execute, the loop has completed and `i` is `6`.
 * - when using `let`, the variable `i` is block-scoped, so each iteration of the loop creates a new binding for `i`. Each closure captures its own copy of `i`, preserving the value from that specific iteration.
 */

function w() {
    for (var i = 1; i <= 5; i++) {
        console.log("Loop 3:", i);
        function a(i) {
            setTimeout(function () {
                console.log("loop 3 from the timer", i);
            }, 1000);
        }
        a(i);

    }
    console.log("hello javascript");
}
w();

/**
 * In the above example:
 * - The function `w` contains a loop that sets up multiple `setTimeout` calls through an inner function `a`.
 * - Each call to `a(i)` creates a new scope where the current value of `i` is passed as an argument.
 * - The `setTimeout` callback function forms a closure that captures the parameter `i` from the scope of function `a`.
 * - As a result, when the `setTimeout` callbacks execute after 1 second, they log the values `1` through `5`, demonstrating how passing variables as parameters can help preserve their values in closures.
 */

{
    var varVariable = 10;
    let = letVariable = 20;
    // const constVariable = 30;
}
console.log("checking var",varVariable);
console.log("checking let",letVariable);
// console.log("checking const",constVariable);