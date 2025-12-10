console.log(a);
var a = 20;
console.log(a); // 20
// console.log(y); // Uncaught ReferenceError: y is not defined

let b = 1000;
console.log(b); // 1000

{
    // block is a compound statement that groups multiple statements.
    // variables declared inside a block using let and const are only accessible within that block.
    let x = 10;
    const y = 20;
    console.log(x); // 10
    console.log(y); // 20

}


// we can define block based on conditions
if (true) {
    console.log("Inside if block");
}

{
    // block scope example:
    var a = 10; // accessible globally
    /** 
     * here, a is overshading the previous a declared in global scope.
     * if we run the program, we may find that a is in the global scope, not in block scope.
     * after reinitializing a in line 27, it will change the value of a in global scope.
     * 
     */

    let b = 20;
    const c = 30;
    // here, b and c are only accessible within this block.

    console.log(b); // 20
    console.log(c); // 30
}

console.log(a); // 10

a = 50;
console.log(a);
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c); // Uncaught ReferenceError: c is not defined

console.log(b);


// illigal shadowing example:
// {
//     let a = 10;
//     {
//         var a = 20; // syntax error cannot redeclare block scoped variable a.
//         console.log(a);
//     }
// }

// {
//     let a = 10;
//     {
//         let a = 20; // legal shadowing
//         console.log(a);
//     }
// }

{
    var a = 10;
    {
        let a = 20; // legal shadowing
        console.log(a);
    }
    console.log(a);
}