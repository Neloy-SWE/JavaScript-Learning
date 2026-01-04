/**
 * A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages.
 * 
 * Map keys can be any type (strings, numbers, objects, etc).
 * The Map remembers the original insertion order of the keys.
 * The number of items in a Map is easily retrieved using the size property.
 * Maps are optimized for frequent additions and removals of key-value pairs.
 * Maps are iterable, allowing for direct use of for...of loops or methods like forEach().
 * The original order is preserved during iteration.
 * 
 * Maps are most similar to Objects.
 */

// create a new map:
const fruits = new Map();
fruits.set("apples", 500); // adding value using set(key, value)
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);
// using array:
const carPrice = new Map([
    ["bmw", "$200"],
    ["toyota", "$10"]
]);
console.log(carPrice);

// update map:
fruits.set("apples", 100);
console.log(fruits);

// getting value:
console.log("price of appple per kg:", fruits.get("apples"));
fruits.get("nonExist"); // value: undefined

// type:
console.log(typeof fruits);
console.log("is fruits a map?", fruits instanceof Map);



// check value:
console.log("is there any fresh oranges?", fruits.has("oranges"));

// delete a value:
fruits.delete("oranges");
console.log(fruits);
console.log("is there any fresh oranges?", fruits.has("oranges"));

// clear the map:
fruits.clear();
console.log(fruits);