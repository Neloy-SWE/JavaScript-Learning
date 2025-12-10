// global scope
var globalVar = "I am a global variable"; // Accessible everywhere

function checkScope() {
    console.log(globalVar); // Accessible here
}
checkScope();

// function scope
function functionScope() {
    var funcVar = "I am a function-scoped variable";
    console.log(funcVar); // Accessible here
}
functionScope();
// console.log(funcVar); // Not accessible here, will throw an error

// block scope
/**
 * In JavaScript, variables declared with 'let' and 'const' are block-scoped,
 * meaning they are only accessible within the block they are defined in.
 * Variables declared with 'var' are function-scoped and do not respect block scope.
 * var is also globally scoped if declared outside a function.
 */

{
    let blockLet = "I am a block-scoped variable (let)";
    const blockConst = "I am a block-scoped variable (const)";
    var blockVar = "I am function-scoped/global-scoped variable (var)";
    console.log(blockLet);
    console.log(blockConst);
    console.log(blockVar);
}

// console.log(blockLet); // Not accessible here, will throw an error
// console.log(blockConst); // Not accessible here, will throw an error
console.log("(from out side of the block)",blockVar);

// nested function scope
function outerFunction() {
    var outerVar = "I am from outer function";
    function innerFunction() {
        var innerVar = "I am from inner function";
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction();
    // console.log(innerVar); // Not accessible here, will throw an error
}
outerFunction();