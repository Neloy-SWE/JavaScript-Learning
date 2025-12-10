// we can declare variables in 4 different ways in javascript

// 1. var
var person = "John";
console.log(person); // Output: John

// 2. let
let age = 30;
console.log(age); // Output: 30

// 3. const
const country = "USA";
console.log(country); // Output: USA

// 4. no keyword (not recommended)
city = "New York";
console.log(city); // Output: New York

// we can only declare a variable without initializing it using var and let
var a;
let b;
console.log("value of only declared variables:", a, b);
// Output: undefined undefined

// we cannot declare a variable without initializing it using const
// const c; // This will throw an error
const c = 10; // Correct way
console.log(c); // Output: 10


// we can redeclare and reassign variables declared with var
var x = 5;
console.log(x); // Output: 5
var x = 10;
console.log(x); // Output: 10

// we can reassign but cannot redeclare variables declared with let
let y = 15;
console.log(y); // Output: 15
y = 20;
console.log(y); // Output: 20
// let y = 25; // This will throw an error

// we cannot redeclare or reassign variables declared with const
const z = 30;
console.log(z); // Output: 30
// z = 35; // This will throw an error
// const z = 40; // This will also throw an error