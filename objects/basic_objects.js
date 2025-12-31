/**
 * An Object is a variable that can hold many variables.
 * Objects are collections of key-value pairs, where each key (known as property names) has a value.
 */

// simple object example:
const person = {
    firstName: "Mr.",
    lastName: "JS",
    age: 25,
    occupation: "Engineer",
};
console.log(person);
console.log(person.firstName, person.lastName);

// empty object:
const car = {};
// adding properties to the object:
car.company = "BMW";
car["model"] = "AA"; // another way to add properties.
car.releaseYear = "2025";
console.log(car);

// creating object with new keyword:
const bike = new Object({ // no need to use these long text process. we can use smiple declaration like previous examples.
    company: "Yamaha",
    model: "FZS V#",
    releaseYear: "2024",
});
console.log(bike);

// methods in obejects:
const laptop = {
    company: "HP",
    model: "Pavilion",
    version: "560",
    // getDetails: () => {
    //     // console.log(this.company); // 'this' keyword doesn't work with arrow functions in objects. 
    //     console.log(laptop.company);
    // }

    getDetails: function(){
        console.log(this.company + " " + this.model + " " + this.version);
    }
}
laptop.getDetails();

// access properties:
console.log(laptop.company);
console.log(laptop["model"]);

// nested objects:
const student = {
    studentName: "FFF",
    age: 22,
    subjects: {
        subject1: "Math",
        subject2: "Physics",
    }
}
console.log(student.subjects);
// delete properties:
// delete student.subjects; // The delete keyword deletes both the value of the property and the property itself.
// console.log(student.subjects);

// json stringify:
console.log(JSON.stringify(student));

// destructuring:
// let {a, b} = person; // here, a and b is undefied
let {firstName, lastName} = person; // to get value, we have to declare same name as object properties

console.log(firstName, lastName);