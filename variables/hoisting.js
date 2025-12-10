/**
 * Hoisting is a JavaScript behavior where variable and function declarations are conceptually moved to the top of their scope (global or function) during the compilation phase, before code execution, allowing them to be used before their physical appearance in the code. Function declarations are fully hoisted (name and body), while var variables are hoisted but initialized as undefined, and let/const declarations are hoisted but remain in a "Temporal Dead Zone" until their actual declaration, causing errors if accessed early.
 */

// getName();
console.log(x); // code will get "undefined"  for x;
console.log(getName); // code will get the function definition for getName before it creation. to understand better, learn about execution context first.
// console.log(getName());



// function getName() {
//     console.log("Hello JS");
//     console.log(x);
// }

var x = 7; // if i hide this line, cosole.log(x) will be "not defined" for line 6.

// getName();
console.log(x);

function getName() { // this function declaration overwrites the previous one
    console.log("Hello JS");
    // console.log(x);
}

// arrow function:
// var getName = () => {
//     console.log("Hello JS - Arrow Function");
//     console.log(x);
// }
/**
 * arrow function is treated as variable during hoisting. that is why in line 7, console.log(getName) will give "undefined". 
 */

// we can also define function:
// var getName = function() {
//     console.log("Hello JS - Function Expression");
//     // console.log(x);
// } // it is also treated as variable during hoisting.

getName();
console.log(getName);

/**
 * In the above example:
 * first all the fuction and variables store in scope memory during creation phase.
*/