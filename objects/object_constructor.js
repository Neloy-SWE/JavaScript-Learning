function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = "BD"; // default value
    this.fullName = () => {
        console.log(this.firstName, this.lastName);
    }
}

// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.

const person1 = new Person("Mr.", "AA", 25);
console.log(person1);
person1.nationality = "USA"; // default value override.
console.log(person1);
// The new property will be added to person1. Not to any other Person Objects.

// adding new properties:
person1.occupation = "Teacher";
console.log(person1);

Person.homeTown = "CCC"; // this will not work
console.log(person1.homeTown); // undefied

person1.fullName();

// we cannot add method to the object constructor, but to a specific object:
// Person.showAge = ()=> {
//     console.log(this.age);
// }

// person1.showAge(); // TypeError: person1.showAge is not a function

person1.showAge = function() {
    console.log(this.age);
}

person1.showAge();

// add new member to object constructor:
Person.prototype.jobLocation = "Dhaka";
console.log(person1.jobLocation);