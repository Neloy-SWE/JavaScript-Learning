function age(value) {
    return new Promise((resolve, reject) => {
        if (value >= 18) {
            // setTimeout(() => {
            resolve('You are eligible to vote.');
            // }, 5000);

        } else {
            reject('You are not eligible to vote.');
        }
    });
}

const userAge = age(20);
console.log(userAge); // Promise { <pending> } (based on setTimeout)

age(20)
    .then((message) => {
        console.log('Success:', message);
    })
    .catch((error) => { // Promise { <rejected> }
        console.log('Error:', error);
    });

// setTimeout(() => {
//     console.log(userAge);
// }, 5500); // Promise { <fulfilled> }

/**
 * if we want to check error for each step in the chain, we can add catch method after each then method, which will handle error to top of it only.
*/


function checkEachStep(value) {
    return new Promise((resolve, reject) => {
        if (value === "valid") {
            resolve('Step is valid.');
        } else {
            reject('Step is not valid.');
        }
    });
}

checkEachStep("invalid")
    .then((message) => {
        console.log('Step 1 Success:', message);
    })
    .catch((error) => {
        console.log('Step 1 Error:', error);
        return new Promise((resolve, reject) => reject("form upper catch"));
    })
    .then(() => {
        return checkEachStep("valid");
    })
    .then((message) => {
        console.log('Step 2 Success:', message);
    })
    .catch((error) => {
        console.log('Step 2 Error:', error);
    });

/**
 * here, in the above example, the first then method will not be executed because the promise is rejected. The catch method will handle the error and log "Step 1 Error: Step is not valid." to the console. The second then method will also not be executed because the promise is still rejected. The second catch method will handle the error and log "Step 2 Error: form upper catch" to the console.
 * 
 * if we do not return promise (or anything) from the catch, the next catch will not be executed.
 * 
 * if we add more then methods after a catch method, after executing the catch, next then methods will be executed as the promise is considered resolved after catch.
 */