// var b = 20;
let b = 20;
function x() {
    var a = 10;
    function y() {
        console.log(a);
        console.log(b);
    }
    y();
}

x();
console.log("closueres");

/**
 * in the above example:
 * - function x creates a closure that captures the variable `a` from its outer scope.
 * - function y, defined within x, has access to `a` even after x has finished executing.
 * - when y is called, it logs the value of `a`, demonstrating how closures allow inner functions to access variables from their outer functions.
 * 
 * a closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). in other word, a closure gives you access to an outer function's scope from an inner function.
 * 
 * in javascript, closures are created every time a function is created, at function creation time.
 */

function a() {
    let count = 10;
    function b() {
        console.log(count);
    }
    count = 100;  // modifying count before calling y will reflect the updated value.
    return b;
}

let d = a();
d(); // here b is invoked outside of a(), but still it has access to count variable of a() because of closure. because when b() is created, it captures the lexical environment of a() along with it. and that lexical environment contains count variable.
// a()(); // this will also work, because a() returns b, and then we immediately invoke it.


function g() {
    let outerCount = 50
    function a() { // it will create closure (a) with value of outerCount: 50
        let count = 10;
        function b() { // it will create closure (b) with value of count: 10 and also it will have access to outerCount: 50 from a's closure

            console.log(count, outerCount);
            return "Hello from b";
        }
        // b();
        // return b();
        return b;
    }
    // a();
    // return a;
    return a();
}
let h = g();
console.log(h);
console.log(h());

/**
 * In the above example:
 * - function g defines another function a, which in turn defines function b.
 * - function b has access to the variable count from its outer function a due to closure.
 * - when a is called within g, it invokes b, which logs the value of count.
 * 
 * This demonstrates how closures allow inner functions to access variables from their outer functions, even when those inner functions are called from different scopes.
 */

function level1() {
    var a = 10;
    let b = 20;
    const c = 30;
    function level2() {
        var d = 40;
        console.log(a, b, c, d);
        function level3() {
            var e = 50;
            console.log(a, b, c, d, e);
        }
        d = 400;
        console.log(a, b, c, d);
        return level3;
    }
    b = 200;
    a = 100;
    var a = 1000;
    return level2;
}

level1()()();

/**
 * uses of closures:
 * Module design pattern
 * Function currying
 * Maintaining state in an asynchronous world
 * setTimeouts
 * Iterators
 * data privacy / encapsulation
 * and many more...
 */

/**
 * disadvantages of closures:
 * - memory consumption: closures can lead to increased memory usage because they retain references to their outer scope, preventing garbage collection of those variables.
 * - potential for memory leaks: if closures are not managed properly, they can create memory leaks by holding onto variables that are no longer needed.
 * - performance overhead: accessing variables through closures can be slower than accessing local variables, which may impact performance in performance-critical applications.
 * - debugging complexity: closures can make debugging more challenging, as the scope chain can become complex and harder to trace.
 */