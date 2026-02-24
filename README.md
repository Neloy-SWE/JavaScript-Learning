# JavaScript-Learning
My personal JavaScript learning repository — covering fundamentals to advanced concepts. in this repository you may find topic wise code examples. also you may find a lot of comments. In some comments, I have added note regarding topic, in some comments I have added some extra code examples. read both code files and this readme.md file carefully to understand javascript properly. please let me know if I miss something.

## Start
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive.<br><br>

## Execution Context
Execution context is the environment where code runs. everything in javascript happens inside an execution context.<br>
Execution context is like a big box and it has 2 components:
1. **memory component:**  Here every variable and functions are stored as key-value pairs. This memory component is also known as variable environment.
2. **code component:** This is the place where code is executed one line at a time. It is also known as thread of execution.

JavaScript is a synchronous single-threaded language. Js execute line by line synchronously.<br>

Execution context created in two phases:
1. **creation phase/memory creation phase**
2. **code execution phase**

At the first phase, js will allocate memory for all the variables and functions. Js run line by line and store memory for each variable/function. Variable store as undefined and function store the whole code of the function.
 - undefined is like a placeholder. It is a keyword of js.

At the second phase, js will again run line by line and will start to store values in variables by replacing undefined and for function, it behaves like a mini program, creating another execution context and repeating the same process inside the global execution context. In the child context, the function will start to store memory from parameters by repeating the same process. After executing the function’s code, the child context will be deleted completely.<br>

After completing the whole execution, the global context will also be deleted completely.<br>

A call stack is a data structure used by computer programs to manage function calls during execution.<br>

Js engine has its own call-stack/execution context stack/program stack/control stack/runtime stack/machine stack that manages the execution context. Call stack maintains the order of execution of execution contexts.<br>

## Scope
scope is the context that determines where variables can be accessed, helping write cleaner and error-free code.<br>

There are different types of scopes:
1. **Global scope:** Global scope is the outermost level of a program where variables and functions are accessible from anywhere, throughout the entire application's lifetime.
2. **Funciton/local scope:** Function scope, in programming, refers to the visibility and accessibility of variables and other identifiers within a function. Variables declared within a function are local to that function. Each time a function is called, a new execution context is created. This allows for independent execution of the function without affecting variables in other scopes. While a function creates its own scope, it can typically access variables defined in its enclosing (or parent) scope. This is known as lexical scoping or static scoping.
3. **Block scope:** Block scope is a programming concept where variables are accessible only within a specific code block, defined by curly braces {}.
4. **Lexical scope:** Lexical scope is a programming concept where a variable's scope is determined by its physical location in the source code at the time of writing, not by where the function is called.
5. **Nested scope:** A nested scope is a programming concept where one scope (like a function or block) is defined inside another, creating layers, allowing inner scopes to access variables from outer (enclosing) scopes but not vice versa.

see code example based on scope concept at [folder: scope](scope).

## Window, this
- If we run an empty js file, the js engine will still create a global execution context and set some memory space. Js engine creates an object called window into the global space that contains a lot of variables and functions. Means window is a global object that is created along with the global execution context. “this” keyword also refers to that window. Means this === window returns true.

## JavaScript Runtime Environment
- **JavaScript Runtime Environment** is a container that has everything to run a js code. Inside the JSRE, there are js engine, APIs, event loop, callback queue, microtask queue. Js engine is the heart of JSRE. Every browser has that JSRE. even Node.js also has JSRE. For this JSRE, js can run into a lot of different machines.
- There are a lot of APIs that can be different for browsers and node.js and also can be the same as well as. For example, setTimeout, console APIs are common. But APIs for accessing local storage can be different. setTimeout looks the same but implementation for browser and node.js is different. 
- Inside the engine, code goes through three steps: parsing, compilation, execution:
    - **Parsing**: in this step, code is broken down into tokens. There is also something known as syntax parser. This syntax parser converts the code into an abstract syntax tree. An abstract syntax tree is basically a json that holds details about each line of code. try https://astexplorer.net/ to understand how this json looks like. This abstract syntax tree now passes to the compilation phase.
    - **Compilation**: js can behave like both interpreted and compiled language which depends on the engine. Interpreter executes code line by line. It is fast. And after that compiler comes which first compiles the code and makes an optimised version and executes code. It is efficient. Previously js engine was created as interpreted but now most of the modern browser’s engines work like both interpreter and compiler.<br>The abstract syntax tree goes to the interpreter and starts executing line by line. In the meantime, the interpreter communicates the compiler continuously to optimize the code as well. This compilation is known as Just In Time compilation. This happens on the runtime.<br>That's how the interpreter turns the code into byte code for execution. Sometimes the js engine compiles some code before execution also. Which is known as Ahead Of Time.
    - **Execution**: execution is not possible without two major components: callstack, memory heap.<br>Memory heap is the space where every variable and function consumes memory. This heap memory uses garbage collection algorithms to free up the spaces. One of the popular algorithms is Mark and Sweep.

## Garbage collection
Garbage collection refers to the process of automatically reclaiming memory occupied by objects that are no longer accessible.

**How Garbage Collection works in JavaScript?**
- JavaScript stores variables and objects in memory (the heap) during program execution.
- The engine tracks objects and variables in use, with unused ones becoming unreachable.
- Unreachable objects are automatically detected and removed by the JavaScript engine through garbage collection.
- Garbage collection runs in the background, periodically freeing memory by removing unused objects.
- It happens automatically, so developers don’t need to manage memory manually, preventing memory leaks.

**Mark and Sweep Algorithm:**
Any garbage collection algorithm must perform 2 basic operations. One, it should be able to detect all the unreachable objects and secondly, it must reclaim the heap space used by the garbage objects and make the space available again to the program. The above operations are performed by Mark and Sweep Algorithm in two phases as listed and described further as follows:
- Mark phase
- Sweep phase

**Advantage:**
- It handles the case with cyclic references, even in the case of a cycle, this algorithm never ends up in an infinite loop.
- There are no additional overheads incurred during the execution of the algorithm.

**Disadvantage:**
- The main disadvantage of the mark-and-sweep approach is the fact that  normal program execution is suspended while the garbage collection algorithm runs.
- Another disadvantage is that, after the Mark and Sweep Algorithm is run several times on a program, reachable objects end up being separated by many, small unused memory regions. 
  - This problem is termed “Fragmentation”. We have memory available in “fragments” but we are unable to utilize that memory space. We can reduce the fragmentation by compaction; we shuffle the memory content to place all the free memory blocks together to form one large block.

  Mark and Sweep algorithm concept code:

```
class algo {
    constructor() {
        this.objects = [];
    }

    createObject(name) {
        const obj = { name: name, refCount: 1 };
        this.objects.push(obj);
        return obj;
    }

    mark() {
        this.objects.forEach(obj => {
            if (obj.refCount > 0) {
                obj.marked = true;
            }
        });
    }

    sweep() {
        this.objects = this.objects.filter(obj => obj.marked);
    }

    collectGarbage() {
        this.mark();
        this.sweep();
    }
    prints() {
        return this.objects
    }
}
const gc = new algo();

const obj1 = gc.createObject("Object 1");
const obj2 = gc.createObject("Object 2");

obj2.refCount = 0;

gc.collectGarbage();
console.log(gc.prints())
```

## Callback hell (Pyramid of Doom):

- **Callback function**: In JavaScript, callbacks are functions that are passed as arguments from one function to another and are executed after the completion of a certain task.
- **Callback hell**: Callback Hell in JavaScript can be defined as the situation where we have nested callbacks which makes the code difficult to read and debug. The term "callback hell" describes the deep nesting of functions that can result in poor code readability and difficulty in debugging, especially when handling multiple asynchronous operations.
To avoid callback hell, we can use promise chaining.

## Promises and async/await
- A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder, allowing asynchronous methods to return values like synchronous ones.
- async and await are modern keywords that simplify asynchronous programming by allowing you to write asynchronous code in a manner that looks and behaves like synchronous, sequential code. They are built on top of Promises and eliminate the need for complex .then() and .catch() promise chains, avoiding "callback hell".<br> using modern language features such as Promises and Async/Await, which provide a flatter, more synchronous-looking code structure, we can avoid callback hell.

to know more about promise and async/await plese follow this [folder: asynchronous](asynchronous).

## Function
A function is a reusable block of code designed to perform a specific task. It is executed only when it is called or invoked, which allows the same code to run multiple times without repetition, promoting modularity and efficiency.<br> you may find concepts like: **closures, callback function, arrow function, constructor function, higher order function, anonymous function,** etc and some basic uses of map, filter, reduce function, uses of keyword: "**this**" by following this [folder: functions](functions).

## Object
An object is a standalone entity and a complex data type used to store collections of related data and functionality. Objects are essentially collections of properties (key-value pairs) and methods (functions as property values).<br> I have added some example of built-in methods for object like: call, apply, bind and others; example for object constructor in [folder: objects](objects).

## Module
module is a single file of reusable code that organizes related functionality (variables, functions, classes, etc.) into a self-contained unit. This system allows developers to break down large applications into smaller, more manageable pieces, which can then be imported and used in other files.<br> for code example based on module concept follow [folder: modules](modules).

## Document Object Model
The Document Object Model (DOM) is a programming interface for web documents that represents the page as a tree of objects. It provides JavaScript with the ability to dynamically access, modify, and style the content and structure of a webpage, making it interactive.<br> to understand the basic of DOM, follow [folder: dom](dom).

## Event
an event is a signal that an action or occurrence has taken place in the browser. These can be user interactions (like a mouse click or key press) or system-generated occurrences (like a page finishing loading or a window resizing).<br> check out [folder: events](events) to learn concept about event, bubbling, capturing, delegation and other basic concpets.

## Polyfill
A polyfill is a piece of code, usually written in JavaScript, that provides modern functionality in older web browsers or environments that do not support it natively.<br> to understand the concept follow [folder: polyfill](polyfill).

## Currying
Currying in JavaScript is a functional programming technique where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. This process allows arguments to be provided one at a time, with each intermediate function returning a new function that expects the next argument, until all arguments have been received and the final result is calculated.<br> I have added some basic examples based on this concept. you may check this out at [folder: currying](currying).

## Performance optimization: (debouncing, throttling)
- **Debouncing** is a programming technique, that ensures a function is executed only after a specified delay has passed since the last time it was invoked.
- **Throttling** is a technique used to limit the rate at which a function can be executed, ensuring it runs at most once within a specified time interval, regardless of how many times the event is triggered.

to see examples of debouncing and throttling, check out [folder: performance_optimization](performance_optimization).

## Local storage
JavaScript localStorage is part of the Web Storage API that allows web applications to store non-sensitive key-value pair data persistently within the user's browser, with no expiration date. The data remains available even after the browser is closed and reopened, and is scoped per origin (domain/protocol/port).<br> I have added code for add, get, delete data using key-value pair and clear all data. check out [folder: local_storage](local_storage).

## Others:
there are also some basic concepts I have Learned:
1. [array](arrays)
2. [conditions: if, if-else, switch, ternary](conditions)
3. [error: try-catch, throw, finally](errors)
4. [loops: for, while, do while, break-continue](loops)
5. [map: map, weak map](maps)
6. [number](numbers)
7. [operators: arithmetic, assignment, comparison](operators)
8. [set: set, weak set](sets)
9. [string](strings)
10. [variable: hoisting, temporal dead zone](variables)