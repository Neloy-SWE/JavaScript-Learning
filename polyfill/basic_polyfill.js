/**
 * A polyfill is a piece of JavaScript code that implements a modern web platform feature in older browsers that do not natively support it.
 * 
 */

// lets implement a simple polyfill for the bind method of the Function prototype.

let name = {
    firstName: "John",
    lastName: "Doe"
}

let printName = function() {
    console.log(this.firstName + " " + this.lastName);
}

let printFullName = printName.bind(name); // bind returns a function to the printFullName.
printFullName();

// lets achieve the same thing without using bind method
Function.prototype.simpleBindAPI = function(...arg){
    let obj = this;
    return function(){
        obj.call(arg[0]);
    }
}

let printFullNameUsingBindAPI = printName.simpleBindAPI(name);
printFullNameUsingBindAPI();

/**
 * in the above example is very basic implementation of bind method, it only works for the first argument and does not support passing additional arguments to the function.
 */

// now lets implement a more complete version of bind method that supports passing additional arguments to the function

Function.prototype.simpleAdvanceBindAPI = function (...arg) {
        let obj = this;
        let parameters = arg.slice(1); // here parameter is an array now.
    return function(){
        // obj.call(arg[0], parameters); // call does not support passing an array of arguments, but apply does.
        obj.apply(arg[0], parameters);
    }
}

let printNameAndTown = function(hometown) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown);
}

/**
 * in the above example, now we can pass additional arguments to the function using the simpleAdvanceBindAPI method.
 * 
 */

let printFullNameAndTown = printNameAndTown.bind(name, "New York");
printFullNameAndTown();

let printFullNameAndTownUsingBindAPI = printNameAndTown.simpleAdvanceBindAPI(name, "New York");
printFullNameAndTownUsingBindAPI();

// if we pass more aruments to the recieving function, it will work for bind.
let printNameAndTownAndAge = function(hometown, age) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " and age is " + age);
}

let printFullNameTownAndAge = printNameAndTownAndAge.bind(name, "New York");
printFullNameTownAndAge(30); // though it will work for bind, but our simpleAdvanceBindAPI will not work for this case.

let printFullNameTownAndAgeUsingBindAPISimpleVersion = printNameAndTownAndAge.simpleAdvanceBindAPI(name, "New York");
printFullNameTownAndAgeUsingBindAPISimpleVersion(30); // now it will work for our simpleAdvanceBindAPI method as well.

Function.prototype.advanceBindAPI = function (...arg) {
        let obj = this;
        let parameters = arg.slice(1);
    return function(...innerArg){
        obj.apply(arg[0], [...parameters, ... innerArg]);
    }
}

let printFullNameTownAndAgeUsingBindAPI = printNameAndTownAndAge.advanceBindAPI(name, "New York");
printFullNameTownAndAgeUsingBindAPI(30); // now it will work for our advanceBindAPI method as well.