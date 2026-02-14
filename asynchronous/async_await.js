/**
 * async function alaways returns a Promise.
 * if we return a promise from async function, it will simply return that promise.
 * if we return a non-promise value from async function, it will return a resolved promise with that value.
 * if an error is thrown inside async function, it will return a rejected promise with that error.
 */

// async function getData(){
//     return "Hello World";
// }

// console.log(getData()); // Promise { 'Hello World' }

// // to get the value:
// getData().then(res => console.log(res)); // Hello World

// const p1 = new Promise((resolve, reject) => {
//     resolve("P1 success");
// });

// async function getPromiseData(){
//     return p1;
// }

// console.log(getPromiseData()); // Promise { 'P1 success' }

// getPromiseData().then(res => console.log(res)); // P1 success

// async and await keywords are used to handle promises more conveniently.
// await can be used only inside async functions.
// await makes the function pause until the promise is settled (either resolved or rejected).

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 success");
    }, 2000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 success");
    }, 3000);
});

// old way:
// function handlePromise() {
//     p1.then(value => {
//         console.log(value); // P1 success
//     }).then(() => {
//         console.log("After setting up p1.then()");
//     })
//         .catch(error => {
//             console.error(error);
//         });
//     console.log("After calling p1.then()");
// }

// handlePromise();

// wtih async-await:
async function handlePromise() {
    const value1 = await p1;
    console.log(value1); // P1 success
    console.log("After awaiting for value 1");

    const value2 = await p1;
    console.log(value2);
    console.log("After awaiting for value 2");
    /**
     * here, even though we are awaiting p1 again, it will not wait for another 2 seconds.
     * because p1 is already resolved, so it will return the resolved value immediately.
     * 
     * A Promise executes ONLY ONCE and caches the result forever.
     */

    const value3 = await p2;
    console.log(value3);
    console.log("After awaiting for value 3");
    // because p2 is a different promise, it will wait for 2 seconds before logging the value.

}

handlePromise();

/**
 * in the above example:
 * if we run the old way function handlePromise(), we will see "After calling p1.then()" logged first, and then after 2 seconds "P1 success" will be logged.
 * this is because p1.then() is non-blocking, so the function continues executing and logs the second message immediately.
 * when we run the async-await version of handlePromise(), "P1 success" will be logged first after 2 seconds, followed by "After awaiting p1".
 * this is because the await keyword makes the function pause at that line until the promise p1 is resolved, effectively making it behave like synchronous code within the async function.
 * 
 * when await pause the function, it only pauses the execution of that async function, not the entire program.
 * other code outside the async function can continue executing while the async function is paused.
 * when the awaited promise is resolved, the async function resumes execution from where it was paused.
 */