{
    // console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
    console.log(b);
    // let a;
    let a = 100;
    // before execute the code, let hoisted in script <value unavailable>
    // after execute the code, let hoisted with value (undefined (line 4) or assigned value:100 (line 5) in this case)

    var b = 10; // var hoisted in global with value "undefined"
    console.log(b);

    // we can access b using window.b or this.b
    console.log(window.b);

    // wen cannot access a using window.a or this.a
    console.log(window.a); // undefined
    // here a is reserved in a separate memory which is not attached to window object.


    // we can redeclare and reassign var variable
    var b = 30;
    console.log(b);

    // we cannot redeclare let variable in same scope, but we can reassign it.
    // let a = 200; // Uncaught SyntaxError: Identifier 'a' has already been declared
    // a = 200;
    // console.log(a);
}

/**
 * In the above example:
 * temporal dead zone: The variable `a` is declared using `let`, which means it is hoisted but not initialized. Accessing it before its declaration results in a ReferenceError. This period between the start of the block and the declaration is known as the temporal dead zone (TDZ).
 * 
 * The variable `b` is declared using `var`, which means it is hoisted and initialized to `undefined`. Accessing it before its declaration logs `undefined` without throwing an error.
 * 
 * Variables declared with `let` and `const` are block-scoped, while variables declared with `var` are function-scoped or globally scoped if declared outside a function.
 * 
 * let is more strict than var in terms of redeclaration. You cannot redeclare a variable declared with `let` in the same scope, while you can redeclare a variable declared with `var`.
*/

{
    let a;
    console.log(a); // undefined
    a = 50;
    console.log(a); // 50

    // const b; // Uncaught SyntaxError: Missing initializer in const declaration
    const b = 100; // const is the most strict in terms of initialization. it must be initialized during declaration.
    console.log(b); // 100
    // b = 200; // Uncaught TypeError: Assignment to constant variable.
    // const b = 300; // Uncaught SyntaxError: Identifier 'b' has already been declared
}