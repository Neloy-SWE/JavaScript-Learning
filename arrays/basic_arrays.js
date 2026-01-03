/**
 * An Array is an object type designed for storing data collections.
 * 
 * Key characteristics of JavaScript arrays are:
    - Elements: An array is a list of values, known as elements.
    - Ordered: Array elements are ordered based on their index.
    - Zero indexed: The first element is at index 0, the second at index 1, and so on.
    - Dynamic size: Arrays can grow or shrink as elements are added or removed.
    - Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

 * An array declared with const cannot be reassigned. const does not define a constant array. It defines a constant reference to an array. so we can modify elements, but we cannot redefine array. const is safe.
 * 
 * An array can hold many values under a single name, and you can access the values by referring to an index number.
 */

const cars = ["A", "B"]; // we can define like this.

// const cars = [];
// cars[0] = "X";
// cars[1] = "Y";
// we can also define and add value like this.

// const cars = new Array("A", "B", "C"); // we can also define like this.
// to make the syntax simpler. we can use simply [].

// access element:
console.log(cars[0]);

// changing value:
console.log(cars);
cars[0] = "OK";
console.log(cars);

// check type:
console.log(typeof cars); // object
/**
 * The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.
 * arrays use numbered indexes but objects use named indexes in js.
 */

// to check if a variable is array or not we can follow:
console.log(Array.isArray(cars)); // method 1; ECMAScript 5 (JavaScript 2009)
console.log(cars instanceof Array); // method 2

// we can add different types of value in an array
cars[2] = 10;
cars[3] = {fName: "Hello"};
console.log(cars);

// not maintaining index while add new value may undefined "holes"
cars[10] = "Fail";
console.log(cars); // 6 empty positions.
console.log(cars[5]); // undefined

// Associative Arrays:
/**
 * Arrays with named indexes are called associative arrays (or hashes).
 * JavaScript does not support arrays with named indexes.
 * If we use named indexes, JavaScript will redefine the array to an object and some array methods and properties will produce incorrect results.
 */
const person = [];
console.log(person instanceof Array);
person["Age"] = 20;
console.log(person instanceof Array);
console.log(person["Age"]);
console.log(person.length);

/**
 * in the above example:
 * we can see that after adding name index: age person is still an array.
 * we need to remember that array is an object also. that is why person accepts age here. but length is still zero.
 */
person[0] = "hello";
console.log(person.length);
console.log(JSON.stringify(person)); // only one element
console.log(person); // ['hello', Age: 20]

// keyword new:
const points1 = new Array(10);
// here first element of points is not 10. 10 is the lenght.
console.log(points1[0]); // undefiend
console.log(points1.length); // 10

const points2 = new Array(10, 50); // now this will work like element add.
console.log(points2[0]);
console.log(points2.length); // 2
// so const points = [40]; and const points = new Array(40); are not same.

// nested array:
points2[2] = [1,2,3];
console.log(points2);
console.log(points2.length);