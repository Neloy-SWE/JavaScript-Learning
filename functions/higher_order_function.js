/**
 * Higher Order Functions are functions that receive other functions as arguments or return functions as their result.
 * They allow for more abstract and flexible code by enabling functions to operate on other functions.
 * Common examples of higher order functions in JavaScript include array methods like map, filter, and reduce.
 */

const radius = [3, 1, 4, 2];

const calculateArea = function (r) {
    const output = [];
    for (let i = 0; i < r.length; i++) {
        output.push(Math.PI * r[i] * r[i]);
    }
    return output;
}

const calculateCircumference = function (r) {
    const output = [];
    for (let i = 0; i < r.length; i++) {
        output.push(2 * Math.PI * r[i]);
    }
    return output;
}

const calculateDiameter = function (r) {
    const output = [];
    for (let i = 0; i < r.length; i++) {
        output.push(2 * r[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

// instead of this repetitive code, we can use higher order functions to make it more abstract and reusable.



const calculate = function (r, logic) {
    const output = [];
    for (let i = 0; i < r.length; i++) {
        output.push(logic(r[i]));
    }
    return output;
}

const areaLogic = function (r) {
    return Math.PI * r * r;
}

const circumferenceLogic = function (r) {
    return 2 * Math.PI * r;
}

const diameterLogic = function (r) {
    return 2 * r;
}

console.log(calculate(radius, areaLogic));
console.log(calculate(radius, circumferenceLogic));
console.log(calculate(radius, diameterLogic));

// here, calculate is a higher order function that is very similar to the map function of array.

console.log(radius.map(areaLogic));
console.log(radius.map(circumferenceLogic));
console.log(radius.map(diameterLogic));