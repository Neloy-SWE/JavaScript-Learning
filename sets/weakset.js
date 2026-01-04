/**
 * A JavaScript WeakSet is a collection of values where the values must be objects.
 * A WeakSet holds weak references to its values. 
 */

const ws = new WeakSet();
try {
    wm.add(1); // TypeError: Invalid value used in weak set
} catch (e) {
    console.log(e);
}

/**
 * roperties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory. For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
 */

let john = { name: "John" };
let array = [ john ];
wm.add(john);
console.log("ws has john?", wm.has(john));
john = null;
console.log(john);
// console.log(array[0]);
array = null;
console.log(wm); // sometimes there can be john or no properties
console.log("ws has john?", wm.has(john));
// Can't get ws.size, as it's a WeakSet,
// but it's 0 or soon be 0

/**
 * A WeakSet is similar to a Set, but it only stores objects, and holds them weakly. If there are no other references to an object, it gets garbage collected automatically.
 */

// delete(object):
wm.delete(john);
console.log(wm);

