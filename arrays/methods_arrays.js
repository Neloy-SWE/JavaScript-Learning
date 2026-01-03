// "use strict";
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// length:
console.log(fruits.length);
// set the length:
console.log(fruits, "length:", fruits.length);
fruits.length = 2;
console.log(fruits, "length:", fruits.length);

// toString():
// Every JavaScript object has a toString() method. it displays text.
console.log(fruits.toString()); // Banana,Orange

// at(): ES2022 feature.
console.log(fruits.at(1));
// we can also use below example:
console.log(fruits[1]);

// rather than using toString() we can use join() with more feature:
console.log(fruits.join());
console.log(fruits.join(" "));
console.log(fruits.join(" * "));

// pop():
fruits.pop();
console.log(fruits);

// push():
fruits.push("Apple");
console.log(fruits);

// shift(): equivalent to popping, but working on the first element instead of the last.
fruits.shift();
console.log(fruits);

// unshift(): adds a new element to an array (at the beginning), and "unshifts" older elements.
fruits.unshift("Lemon");
let newLength = fruits.unshift("Mango"); // returns length
console.log(fruits, "new length:", newLength);

// changing element:
console.log(fruits);
fruits[0] = "Banana";
console.log(fruits);

// adding new element using length:
console.log(fruits);
fruits[fruits.length] = "Orange";
console.log(fruits);

// delete element:
delete fruits[0]; // leaves undefined holes in the array.
console.log(fruits, "first element:", fruits[0]);

// concat():
const newFruits = ["Mango", "Strawberry", "Watermelon", "Pineapple"];
const allFruits = newFruits.concat(fruits);
console.log(allFruits);

// copyWithin():
// allFruits.copyWithin(4, 0);
console.log(allFruits);
// allFruits.copyWithin(allFruits.length, 0, 2); // nothing will change
allFruits.copyWithin(2, 0, 3);
console.log(allFruits);
/**
 * The copyWithin() method overwrites the existing values.
 * The copyWithin() method does not add items to the array.
 * The copyWithin() method does not change the length of the array.
 */

// flat():
const myArr = [[1, 2], [3, 4], [5, 6]]; // 2d array
const newArr = myArr.flat(); // creates simple array
console.log(newArr);

// flatMap():
const newArr10x = newArr.flatMap(x => [x, x * 10]);
console.log(newArr10x); // adding new element (element*10) beside each element: [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]

// splice():
const city = ["dhaka", "rajshahi", "khulna", "ctg"];
console.log(city);
city.splice(1, 0, "kustia"); // here 1 is index where new element will place, 0 is the number of how many element will remove.
console.log(city);
city.splice(1, 4, "bogura"); // maximum 4 element will remove after bogura(index: 1).
console.log(city);
// remove element:
city.splice(1, 10); // here 1 is index from where element will remove, 10(max) is the number of how many element will remove.
console.log(city);

// toSpliced():
const country = ["usa", "canada", "russia", "china", "japan", "koria", "singapore", "usa"];
const updatedCountry = country.toSpliced(1, 10); // it dosen't change old array like splice(). it creates a new array.
console.log("old country:", country);
console.log("updated country:", updatedCountry);

// slice():
const newCountry1 = country.slice(3); // creates new array from index 2.
console.log(newCountry1);
const newCountry2 = country.slice(1, 4);
console.log(newCountry2);

// indexOf():
console.log(country.indexOf("usa"));
// console.log(country.indexOf("brazil")); // return -1, because brazil is not exist in country array.
console.log(country.indexOf("usa", 2)); // return -1, here, 2 is index from where it will search and usa is not exist after index: 2.

// lastIndexOf():
console.log(country.lastIndexOf("usa"));

// includes():
console.log(country.includes("russia"));

// find(): returns value of the first elemnt that mach the condition.
const findCountry = country.find((value) => {
    return value.includes("i");
});
console.log(findCountry);

// findIndex(): returns index of the first elemnt that mach the condition.
const findCountryIndex = country.findIndex((value) => {
    return value.includes("i");
});
console.log(findCountryIndex);

// findLast(): returns value of the last elemnt that mach the condition.
const findLastCountry = country.findLast((value) => {
    return value.includes("c");
});
console.log(findLastCountry);

// findLastIndex(): returns index of the last elemnt that mach the condition.
const findCountryLastIndex = country.findLastIndex((value) => {
    return value.includes("c");
});
console.log(findCountryLastIndex);

// sort():
country.sort();
console.log(country);

// reverse(): (reverse the array, not sorting in descending order )
country.reverse();
console.log(country);

// toSort(): return a new array while unchange the main one.
const numberArray = [2, 5, 1, 8];
const numberSortedArray = numberArray.toSorted();
console.log(numberSortedArray);

// toReverse():
const numberReverseArray = numberArray.toReversed();
console.log(numberReverseArray);

// max(): (custom)
const arrayMax = function (a) {
    value = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > value) {
            value = this[i];
        }

    }
    console.log("max valu is", value);
    return value;
}

numberArray["arrayMax"] = arrayMax;
let numberArrayMaxvalue = numberArray.arrayMax();
console.log("received value:", numberArrayMaxvalue);

// min(): (custom)
const arrayMin = function (a) {
    value = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] < value) {
            value = this[i];
        }

    }
    console.log("min valu is", value);
    return value;
}

numberArray["arrayMin"] = arrayMin;
let numberArrayMinvalue = numberArray.arrayMin();
console.log("received value:", numberArrayMinvalue);

// forEach():
numberArray.forEach((x) => {
    console.log(x);
})

// every(): when we need to verify if every element pass specific conditions (and operation)
const checkArray = ["0", "-1", "5"];

console.log("is checkArray contains only +ve value?", checkArray.every((value) => { return value >= 0 }));

// some(): when we need to verify if at least one element pass specific conditions (or operation)
console.log("is there any -ve value in checkArray?", checkArray.some((value) => { return value < 0 }));

// form():
const text = "abcd";
const textArray = Array.from(text);
console.log(textArray);
const textArrayNew = Array.from(textArray, (x) => x + "New");
console.log(textArrayNew);

// keys();
const textArrayIndex = [...textArray.keys()];
// const textArrayIndex = Array.from(textArray.keys());
console.log("textArray's indexs:", textArrayIndex);

// entries():
const textArrayKeyValue = [...textArray.entries()];
console.log("textArray's key:value", textArrayKeyValue);

// with():
const textArrayUpate = textArray.with(0, "n");
console.log(textArrayUpate);

// ...: spread operator:
const textArrayAll = [...textArray, ... textArrayNew, ...textArrayIndex, ...textArrayKeyValue, ... textArrayUpate];
console.log(textArrayAll);
let a, b, rest;
[a,b, ...rest] = textArrayAll;
console.log(a, b, rest);