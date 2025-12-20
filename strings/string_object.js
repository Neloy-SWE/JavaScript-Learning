let leteralString = "Hello, World!";
let objectString = new String("Hello, World!");
console.log("Literal string and its type:", leteralString, typeof leteralString); // "string"
console.log("Object string and its type:", objectString.valueOf(), typeof objectString); // "object"

console.log("Literal string equals object string:", leteralString == objectString); // true
console.log("Literal string === object string:", leteralString === objectString); // false