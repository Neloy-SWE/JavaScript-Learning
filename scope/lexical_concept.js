function a(){ // here, a is lexically inside the global scope.
    // var b = 20;
    // var b;
    console.log(b);

    c(); // here, lexically c is sitting iside a();
    function c(){
        console.log("inside c");
        console.log(b);
    }
}
a();
var b = 10;
a();

f(20);
function f(num){
    console.log(num);
}
f(30);

/** 
 * In the example above, we demonstrate function scope. The variable `b` is declared after the first call to function `a`, so when `a` is called the first time, `b` is `undefined`. After `b` is assigned a value of `10`, subsequent calls to `a` will log `10`.
 * 
 * Lexical environment: JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position in the source code. Inner functions have access to variables declared in their outer functions, but not vice versa.
 * 
 * whenever a execution context is created, a lexical environment is also created along with it. lexical environment is a data structure that holds identifier-variable mapping. in simple words, it is a place where variable and function are stored during the execution context creation phase.
 * 
 * Each lexical environment has a reference to its outer lexical environment, which allows for scope chaining. When a variable is accessed, JavaScript first looks in the current lexical environment. If it doesn't find the variable there, it looks in the outer lexical environment, and so on, until it reaches the global scope.
 * 
 * lexical environment is the local memory along with the lexical environment of its parent.
 * lexical means hierarchy.
 * 
 * every memory has a reference to its parent memory.
 * 
 * scope chain: when we try to access a variable, first it will be searched in the local memory. if it is not found there, then the search will be continued in the parent memory. this whole searching process is called scope chain.
 * 
 * In the example above, when function `c` is called, it has access to variable `b` because `c` is lexically inside `a`, and `a` has access to the global scope where `b` is declared.
 */