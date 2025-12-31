"use strict";
const person1 = {
    firstName: "AAA",
    age: 30,
}

const person2 = {
    firstName: "BBB",
    lastName: "CCC"
}
// Object.assign:
Object.assign(person1, person2); // person1 will get/override everything from person2
console.log(person1);
console.log(person2);

// Object.entries:
for (let [keys, values] of Object.entries(person1)) {
    console.log(keys, values);
}
// converting into map:
const myMap = new Map(Object.entries(person1));
console.log(myMap);

// Object.vlaues:
// get values only.
let person1Values = Object.values(person1);
console.log(person1Values);

// Object.kyes:
// get keys only.
let person1Keys = Object.keys(person1);
console.log(person1Keys);


// using for...in loop:
for (let x in person1) {
    console.log(person1[x]);
}

// Object.defineProperty:
Object.defineProperty(person1, "address", { value: "BD" }); // addding new property
for (let x in person1) {
    console.log(x);
}
console.log(person1);
/**
 * in the above loop, we can see that there are only 3 properties. but when we print the object, we can see that there are 4 properties.
 * 
 * when we add properties in normal way. we can edit values, we can see them using loops or other iteration methods. but when we use Object.defineProperty method to add a new property, there are some extra details come up with: writable, enumerable and configurable. by default these are all false.
 * 
 * if enumerable is false, we cannot iterate it. but we can see it in console log.
 * if writable is false, we cannot update the value.
 * if configurable is false, property cannot be deleted, changed, changed property type, cannot set to true ever again.
 * 
 * if configurable is true, we can modify or delete the property freely. also we can change writable and enumerable from true to false or false to true.
 * 
 * if configurable is false, we cannot change enumerable, but we can change writable from true to false and cannot change it false to true again. if writable is alreay false, we cannot set it to true. we cannot even modify or delete the property.
 */
// person1.address = "USA"; // for use strict: TypeError: Cannot assign to read only property 'address' of object
try {
    person1.address = "USA";
    console.log("successfully modify address");
} catch (e) {
    console.log("failed to modify address");
}
console.log(person1); // cannot change address value
Object.defineProperty(person1, "occupation", { value: "Engineer", configurable: true, writable: true });
console.log(person1);
person1.occupation = "hello";
console.log(person1); // occupation value is changed
for (let x in person1) {
    console.log(x);
    // cannot see occupation and address, because enumerable is false by default.
}
Object.defineProperty(person1, "hobby", { value: "Gardening", configurable: true, enumerable: true });
for (let x in person1) {
    console.log(x);
    // after setting enumerable to true, we can see new added property now.
}

try {
    Object.defineProperty(person1, "address", { configurable: true }); // TypeError: Cannot redefine property: address
    console.log(person1);
} catch (e) {
    console.log(e);
}

try {
    Object.defineProperty(person1, "address", { writable: true }); // TypeError: Cannot redefine property: address
    console.log(person1);
} catch (e) {
    console.log(e);
}

Object.defineProperty(person1, "birthPlace", { value: "BD", writable: true, enumerable: true });
console.log(person1);

try {
    Object.defineProperty(person1, "birthPlace", { writable: false });
    console.log(person1);
} catch (e) {
    console.log(e);
}

try {
    Object.defineProperty(person1, "birthPlace", { writable: true }); // Cannot redefine property: BirthPlace
    console.log(person1);
} catch (e) {
    console.log(e);
}

try {
    Object.defineProperty(person1, "birthPlace", { enumerable: false }); // Cannot redefine property: BirthPlace
    console.log(person1);
} catch (e) {
    console.log(e);
}

// Object.getOwnPropertyNames:
console.log(Object.getOwnPropertyNames(person1)); // returns property names as array. this method also returns properties that is not enumerable.

// Object.keys:
console.log(Object.keys(person1)); // only returns enumerable object properties.

// getter:
// Object.defineProperty(person1, "age", {get: function(){ // connot put same name as property
Object.defineProperty(person1, "getAge", {
    get: function () {
        console.log("Age of", this.firstName, "is", this.age);
    }
});

person1.getAge;
// we can add getAge function as property in a simple way. add as a getter provide simpler sytax. no need to use getAge() -> this parenthesis

// setter:
Object.defineProperty(person1, "setName", {
    set: function (name) {
        this.firstName = name;
    }

    // set: (name) => {
    //     person1.firstName = name;
    // }
});

Object.defineProperty(person1, "getName", {
    get: function () {
        console.log("Name:", this.firstName);
    }

    // get: () => {
    //     console.log("Name:", person1.firstName);
    // }
});
person1.setName = "Boss";
person1.getName;

// Object.preventExtensions: prevent adding new properties
person1.language = "Fr"; // can add new properties
console.log(person1);
Object.preventExtensions(person1);
// try to add new property:
try {
    person1.cost = "$500"; // for non-strict mode nothing will happen
    console.log("successfully addede new property");
} catch (e) {
    console.log("failed to add new property");
}
console.log(person1);

// Object.isExtensible: return true/false
console.log(Object.isExtensible(person1));

// Object.seal: prevent adding and deleting new properties
delete person1.hobby;
console.log(person1);
Object.seal(person1);
try {
    delete person1.address;
    console.log("successfully deleted address after seal");
} catch (e) {
    console.log("failed to deleted address after seal");
}

// Object.isSealed: return true/false
console.log(Object.isSealed(person1));

// Object.freeze: prevent any changes
person1.firstName = "Big boss"; // still able to modify
console.log(person1);
Object.freeze(person1);
try {
    person1.firstName = "Last boss";
    console.log("successfully modify firstName");
} catch (e) {
    console.log("failed to modify firstName");
}
console.log(person1);

// Object.isFrozen: return true/false
console.log(Object.isFrozen(person1));

// With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.