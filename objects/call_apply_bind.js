/**
 * In JavaScript all functions are object methods. If a function is not a method of a JavaScript object, it is a function of the global object.
 */

// "use strict";

// call:
// With call(), an object can use a method belonging to another object.
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  identity: function(city, country){
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  }
};
const person1 = {
  firstName:"John",
  lastName: "Doe"
};
console.log(person.fullName.call(person1));
console.log(person.identity.call(person1)); // city and country will be undefied
console.log(person.identity.call(person1, "Dhaka", "BD"));

// apply:
console.log(person.fullName.apply(person1));
// The apply() method is very handy if you want to use an array instead of an argument list.
// console.log(person.identity.apply(person1, "Dhaka", "BD")); // TypeError: CreateListFromArrayLike called on non-object
console.log(person.identity.apply(person1, ["Dhaka", "BD"]));
// console.log(person.identity.apply(["Dhaka", "BD"])); // all 4 value will be undefined.
// console.log(person.identity.apply(null, ["Dhaka", "BD"])); // first 2 value will be undefined. if we use strict mode then must pass something for 1st argument.

// bind:
const car = {
    carName: "Toyota",
    showCarName: function () {
        console.log("Car name is:", this.carName);
    }
};

const superCar = {
    // superCarName: "Lalalulu", // property name must be same for bind.
    carName: "Lalalulu",
}

const showCarName = car.showCarName;
showCarName(); // car name is undefined
// bind method hold the context(this) of object.
const showCarNameBind = car.showCarName.bind(car);
showCarNameBind();
// bind method borrow method from another object
const showSuperCarBind = car.showCarName.bind(superCar);
showSuperCarBind();