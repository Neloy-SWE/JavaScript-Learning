for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

// check array elements
const fruits = ["apple", "banana", "cherry"];
for (let j = 0; j < fruits.length; j++) {
    console.log("Fruit: " + fruits[j]);
}

// sum of first 10 natural numbers
let sum = 0;
for (let k = 1; k <= 10; k++) {
    sum += k;
}
console.log("Sum of first 10 natural numbers: " + sum);

// nested for loop to print a multiplication table
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 3; n++) {
        console.log(m + " * " + n + " = " + (m * n));
    }
}

// iterate over an object's properties
const person = {name: "Alice", age: 25, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

/**
 * there are 3 optional expressions in a for loop:
 * 1. initialization: executed once before the loop starts
 * 2. condition: evaluated before each iteration; if true, the loop continues
 * 3. final-expression: executed after each iteration
 * 
 * final expression is often used to increment/decrement or update the loop counter. for example, i++ increments i by 1 in each iteration or i += 2 increments i by 2.
 */


// loop scope
var x = 1;
for (var x = 0; x < 3; x++) {
    console.log("Inside loop: " + x);
}
console.log("Outside loop(x): " + x);
// var is function-scoped, so the x inside the loop affects the x outside the loop

let y = 1;
for (let y = 0; y < 3; y++) {
    console.log("Inside loop: " + y);
}
console.log("Outside loop(y): " + y);
// let is block-scoped, so the y inside the loop does not affect the y outside the loop