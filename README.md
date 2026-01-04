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

