/**
 * Sets is a collection of unique values.
 * each value can only occur once in a Set.
 * The values can be of any type, primitive values or objects.
 */

// Create a Set and add values:
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
// or:
// const letters = new Set(["a","b","c"]);
console.log(letters);

// loop:
for (let x of letters){
    console.log(x);
}

console.log(typeof letters); // object
console.log(letters instanceof Set); // correct way to check

