/**
 * Promise.all():
 * The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.
 * 
 * Promise.all() waits until all promises in the iterable have either resolved or one has rejected. If all promises resolve, it returns a new promise that resolves to an array of the resolved values in the same order as the input promises. If any promise rejects, it returns a new promise that rejects with the reason of the first promise that rejected.
 * 
 * Promise.allSettled():
 * The Promise.allSettled() method takes an iterable of promises as an input and returns a single Promise that resolves when all of the input promises have settled, meaning they have either resolved or rejected.
 * 
 * Promise.race():
 * The Promise.race() method takes an iterable of promises as an input and returns a single Promise that resolves or rejects as soon as one of the input promises resolves or rejects, with the value or reason from that promise.
 * 
 * Promise.any():
 * The Promise.any() method takes an iterable of promises as an input and returns a single Promise that resolves as soon as any of the input promises resolves, with the value from that promise. If all input promises reject, it returns a new promise that rejects with an AggregateError containing all the rejection reasons.
 * 
 */

const p1 = new Promise((resolve, reject) => {
   setTimeout(() =>
       // resolve("P1 success")
       reject("P1 fail")
       , 3000);
});


const p2 = new Promise((resolve, reject) => {
   setTimeout(() =>
       // resolve("P2 success")
       reject("P2 fail")
       , 1000);
});


const p3 = new Promise((resolve, reject) => {
   setTimeout(() =>
       // resolve("P3 success")
       reject("P3 fail")
       // , 2000);
       , 2000);
});


const allPromises = [p1, p2, p3];


Promise.all(allPromises).then(res => {
   console.log(res);
}).catch((error) => {
   console.error(error);
});
// if all the promises get resolved, we can see an array of promises after the max time (here it is 3 seconds)
// if we set any of them reject, we will have the failed promise message here as soon as the error cought (here it is 1 second)




Promise.allSettled(allPromises)
   .then((result) => {
       console.log(result);
   }).catch((error) => {
       console.error(error);
   });


// we can see an array of promises result.




Promise.race(allPromises)
   .then((result) => {
       console.log(result);
   }).catch((error) => {
       console.error(error);
   });
// first settled promise (either resolved or rejected)




Promise.any(allPromises)
   .then((result) => {
       console.log(result);
   }).catch((error) => {
       console.error(error);
       console.log(error.errors);
   });
// frist settled success promise or ultimate reject
