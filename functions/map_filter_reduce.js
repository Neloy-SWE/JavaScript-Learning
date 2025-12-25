// map example:

const arr = [5, 1, 2];

function double(x) {
    return x * 2;
}

const outputDouble = arr.map(double);

console.log(outputDouble);

function binary(x) {
    return x.toString(2);
}

const outputBinary = arr.map(binary);

console.log(outputBinary);

// filter example:

const arrFilter = [5, 1, 2, 8, 4, 3, 10, 15];
console.log(arrFilter);
function isEven(x) {
    return x % 2 === 0;
}

const outputEven = arrFilter.filter(isEven);

console.log(outputEven);

// use of arrow function in filter:
const outputOdd = arrFilter.filter((x) => x % 2 !== 0);

console.log(outputOdd);

// reduce example:
const arrReduce = [10, 5, 1, 2, 8];

const sum = arrReduce.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
console.log(sum);

const maxValue = arrReduce.reduce((max, curr) => (curr > max ? curr : max), arrReduce[0]);
console.log(maxValue);


// practical example of map, filter and reduce:
const users = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Alice", lastName: "Johnson", age: 28 },
    { firstName: "Bob", lastName: "Brown", age: 35 },
    { firstName: "Charlie", lastName: "Davis", age: 25 },
    { firstName: "Eve", lastName: "Wilson", age: 27 },
    { firstName: "Frank", lastName: "Miller", age: 30 },
    { firstName: "Grace", lastName: "Taylor", age: 25 },
    { firstName: "Hank", lastName: "Anderson", age: 28 },
    { firstName: "Ivy", lastName: "Thomas", age: 25 },
];

const userFullNames = users.map((user) => {
    return user.firstName + " " + user.lastName;
});
console.log(userFullNames);

const userAge25 = users
    .filter((user) => user.age === 25)
    .map((user) => user.firstName + " " + user.lastName + " is " + user.age + " years old."); // chaining
console.log(userAge25);

const userAge28 = users.reduce((acc, user) => {
    if (user.age === 28) {
        acc.push(user.firstName + " " + user.lastName + " is " + user.age + " years old.");
    }
    return acc;
}, []); // we can use reduce also to achieve the same result as above chaining of filter and map.

console.log(userAge28);

const groupedByAge = users.reduce((acc, user) => {
    if (acc[user.age]) {
        acc[user.age] = ++acc[user.age];
    }
    else {
        acc[user.age] = 1;
    }
    return acc;
}, {});

console.log(groupedByAge);

/**
 * in the last example for reduce, for the first time there is no key of age in the accumulator object. also for the first time the the if condition will not work, because acc[user.age] is undefined, so it will go to else block and create the key with value 1. it is one of the feature of js object, that if we try to access a key which is not present in the object and if we try to add value to it, it will create that key. 
 */