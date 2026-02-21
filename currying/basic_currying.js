/**
 * Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
 * It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 */

// example of currying using bind method:

let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);

/**
 * now we can if we pass any number to multiplyByTwo, it will be multiplied by 2, and if we pass any number to multiplyByThree, it will be multiplied by 3.
 * 
 */

multiplyByTwo(5);
multiplyByThree(5);

// example of currying using closure:

let add = function (x) {
    return function (y) {
        console.log(x + y);
    }
}

let addByTwo = add(2);
let addByThree = add(3);

addByTwo(5);
addByThree(5);