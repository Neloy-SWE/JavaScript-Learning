/**
 * this keyword refers to an object.
 * The this keyword refers to different objects depending on how it is used:
    - In a function or alone, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an object method, this refers to the object.
    - In an event, this refers to the element that received the event.
 * 
 */
"use strict";
let x = this;
console.log(x);

function checkThis() {
    console.log(this); // undefined in strict mode and global object in non-strict mode.
    console.log(x);
}

checkThis();

// With arrow functions the this keyword always represents the object that defined the arrow function.
const checkThisInArrow = () => {
    console.log(this);
    console.log(x);
}

checkThisInArrow();

const checkThisFromObject = {
    checkThisWithNormalFunction: function () {
        console.log(this);
    },

    checkThisWithArrowFunction: () => {
        console.log(this);
    }
}

checkThisFromObject.checkThisWithNormalFunction(); // object of checkThisFromObject
checkThisFromObject.checkThisWithArrowFunction(); // global object

const checkThisUsingArrowFromElement = (checkThis) => {
    console.log(checkThis); // element itself
    console.log(this); // global object
}

function checkThisUsingNormalFunctionFromElement(checkThis) {
    console.log(checkThis); // element itself
    console.log(this); // global object in non-strict mode and undefined in strict mode
}

const checkThisFromIndependentArrow = () => {
    console.log(this); // global object
}

function checkThisFromIndependentNormal() {
    console.log(this); // global object in non-strict mode and undefined in strict mode
}



window.addEventListener("load", checkThisFromIndependentArrow);
window.addEventListener("load", checkThisFromIndependentNormal);

document.getElementById("arrow").addEventListener("click", checkThisFromIndependentArrow);
document.getElementById("normal").addEventListener("click", checkThisFromIndependentNormal);

/**
 * here, for arrow function for both window and element, this refers to global object.
 * for normal function in which event listener it is attached, will refer to that object. for example, here, when we attach normal function with window load event, this will refer to global object and when we attach with element click event, this will refer to that element.
 */