// we can have only one default export per module.
export default function sum(a, b) {
    console.log("sum of " + a + " and " + b + " is: " + (a + b));
}

// export default const evenOrOdd = (num) => { // A module cannot have multiple default exports.
export const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}