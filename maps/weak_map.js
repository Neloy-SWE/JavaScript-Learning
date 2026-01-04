/**
 * A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.
 * A WeakMap holds weak references to its keys.
 */

const wm = new WeakMap();
let myObj = {fname:"John", lname:"Doe"};

// set a value using object as key:
wm.set(myObj, "player");

// get value using object as key:
console.log(wm);
console.log(wm.get(myObj)); // player

// replace value:
wm.set(myObj, myObj);
console.log(wm.get(myObj)); // {fname: 'John', lname: 'Doe'}

/**
 * Unlike a regular Map, a WeakMap does not prevent its keys from being garbage collected.
 * If a key (an object) has no references to it in a program, it becomes eligible for garbage collection.
 * When the key is garbage collected, its key-value pair is removed from the WeakMap.
 */

// check if a value exist:
console.log(wm.has(myObj)); // true

// delete element:
wm.delete(myObj);
console.log(wm.get(myObj)); // undefined
console.log(myObj);


// cleanup:
myObj = null;
console.log(wm.get(myObj)); // undefined

/**
 * Primitive values cannot be used as keys in a WeakMap.
 * 
 * The keys must be objects or non-registered symbols.
 * 
 * This restriction is tied to the garbage collection mechanism; primitives are not garbage collected in the same way as objects.
 * 
 * The entries in a WeakMap are weakly held: if the object key becomes unreachable, its mapping is removed automatically.
 * 
 * This is perfect for tracking data about objects without preventing garbage collection.
 * 
 * WeakMaps are not enumerable.
 * 
 * You cannot iterate over the keys and values with for loops, forEach(), or keys().
 * 
 * You cannot access the size.
 */