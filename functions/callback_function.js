/**
 * we should not block the main thread, call stack should be free to execute other code.
 * so, we use call back functions to handle such tasks.
 * call back functions are functions that are passed as arguments to other functions and are executed after a certain event or condition is met.
 * they are commonly used in asynchronous programming to handle tasks that may take some time to complete, such as fetching data from a server or reading a file.
 */

setTimeout(() => {
    console.log("from the timer");
}, 2000);

function callbackParant(callback) {
    console.log("inside function callbackParant");
    callback();
}

callbackParant(function () {
    console.log("this is a call back function");
});

/**
 * javascript is synchronous and single threaded.
 * in synchronous programming, tasks are executed one after the other, blocking the main thread until each task is completed.
 * in asynchronous programming, tasks can be executed independently of the main thread, allowing other code to run while waiting for a task to complete.
 * call back functions are a way to handle asynchronous tasks in javascript.
 */

let countScript = 0; // not a good practice to use global variable like this because any code on the page can change the value without using clickMe button, but for demonstration purpose we are using it here.
document.getElementById("clickMe").addEventListener("click", function callStackCheck() {
    console.log("button clicked", ++countScript);
});

function closureEvent() {
    let countClosure = 0;
    document.getElementById("checkClosure").addEventListener("click", function callStackCheck() {
        console.log("button of closure clicked", ++countClosure);
    });
}

closureEvent(); // we need to invoke this function to set up the event listener with closure.

/**
 * in the above examples:
 * we can notice that, global count is in the script scope.
 * count in the closureEvent function is in the scope of closureEvent function.
 * the call back function inside the event listener of "checkClosure" button forms a closure that captures the count variable from its outer scope, which is the closureEvent function.
 * each time we click the "checkClosure" button, the call back function has access to the count variable of closureEvent function, and it increments and logs its value.
 * this demonstrates how closures allow inner functions to access variables from their outer functions, even after the outer function has finished executing.
 */

/**
 * though we can see that the call stack is empty. but still the event listeners are holding the references to their respective call back functions in the memory. these event listeners are havy. so we need to release them when they are no longer needed, to free up memory. after releasing them, all the references will be garbage collected.
 */