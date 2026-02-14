const GITHUB_API = 'https://api.github.com/users/neloy-swe';

const user = fetch(GITHUB_API);
console.log(user);
/**
 * here, the fetch function returns a promise object. A promise is a placeholder for a value that will be available in the future. In this case, the promise is an object that represents the eventual completion (or failure) of the asynchronous operation of fetching data from the GitHub API.
 *
 * When you log the promise object to the console, you will see its current state, which is usually "pending" at this point because the fetch operation is still in progress. The promise will eventually be resolved with the fetched data or rejected with an error if something goes wrong during the fetch operation.
 *
 * To work with the actual data returned by the fetch operation, you typically use methods like .then() and .catch() to handle the resolved value or any errors that may occur.
 * 
 * promise states:
  1. pending: initial state, neither fulfilled nor rejected.
  2. fulfilled: meaning that the operation completed successfully.
  3. rejected: meaning that the operation failed.
 *
 */

user.then((data) => {
    console.log('Response received:', data);
});

// we can also chain multiple then methods to handle the resolved value in a sequence of steps.
// we can also use catch, finally methods to handle errors and cleanup actions respectively.
// for using then, we need to add return statement to return the next promise in the chain and for making it more readable we can use arrow functions.