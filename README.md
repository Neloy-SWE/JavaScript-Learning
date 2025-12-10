# JavaScript-Learning
My personal JavaScript learning repository — covering fundamentals to advanced concepts.

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
