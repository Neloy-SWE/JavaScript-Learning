// length
let str = "Hello, World!";
console.log("Length of string:", str.length);

// toUpperCase and toLowerCase
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// extracting characters
console.log("Character at index 7:", str.charAt(7));
console.log("Character at index 7 using []:", str[7]);
// code
console.log("Unicode of character at index 7:", str.charCodeAt(7));
// at (introduced in ES2022)
console.log("Character at index 7 using at():", str.at(7));
console.log("Character at index -1 using at():", str.at(-4)); // start from end

// substring, substr, slice
console.log("Substring (0,5):", str.substring(0, 5));
// console.log("Substr (7,5):", str.substr(7, 5)); // note: substr is deprecated
console.log("Slice (0,5):", str.slice(0, 5));
console.log("Slice (-6):", str.slice(-6)); // last 6 characters
// here substring and slice behave the same way, but substring does not accept negative indices

// replace
console.log("Replace 'World' with 'JavaScript':", str.replace('World', 'JavaScript'));
// replace method only replaces the first occurrence
let str2 = "Hello, World! Welcome to the World of JavaScript.";
console.log("Replace first 'World' with 'JS':", str2.replace('World', 'JS'));
// replace method is case-sensitive
console.log("Replace 'world' with 'JS':", str2.replace('world', 'JS')); // no change
// To replace case insensitive, use a regular expression with an /i flag (insensitive)
console.log("Replace 'world' (case insensitive) with 'JS':", str2.replace(/world/i, 'JS'));
// To replace all occurrences, use a regular expression with a /g flag (global)
console.log("Replace all 'World' with 'JS':", str2.replace(/World/g, 'JS'));
// i and g flags help to replace all occurrences in a case-insensitive manner. but if there any matching case then only that case will be replaced.
// replaceAll (introduced in ES2021)
console.log("Replace all 'World' with 'JS' using replaceAll:", str2.replaceAll('World', 'JS'));
// replaceAll is case-sensitive
console.log("Replace all 'world' with 'JS' using replaceAll:", str2.replaceAll('world', 'JS')); // no change
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown
let str3 = "I love cats. Cats are very easy to love. Cats are very popular";
console.log("Replace all 'cats' with 'dogs' using replaceAll and regex:", str3.replaceAll(/cats/g, 'dogs'));
// replaceAll does not work in Internet Explorer

// indexOf and lastIndexOf
console.log("Index of 'o':", str.indexOf('o'));
console.log("Last index of 'o':", str.lastIndexOf('o'));
// these methods return -1 if the substring is not found
console.log("Index of 'x':", str.indexOf('x'));

// search
console.log("Search for 'World':", str.search('World'));
console.log("Search for 'world':", str.search('world')); // case-sensitive
/**
 * though search and indexOf behave similarly, search can only take a string or regex as an argument. but indexOf can take a second argument to specify the starting position. lastIndexOf can take a second argument to specify the position to start searching backwards from.
 */
console.log("IndexOf 'o' starting from index 5:", str.indexOf('o', 5));
console.log("LastIndexOf 'o' starting backwards from index 10:", str.lastIndexOf('o', 6));

// includes, startsWith, endsWith
console.log("Includes 'World':", str.includes('World'));
console.log("Starts with 'Hello':", str.startsWith('Hello'));
console.log("Ends with '!':", str.endsWith('!'));

// trim, trimStart, trimEnd
let strWithSpaces = "   Hello, World!   ";
console.log("Trimmed string:", strWithSpaces.trim());
console.log("Trim start:", strWithSpaces.trimStart()); // select the output to see the effect
console.log("Trim end:", strWithSpaces.trimEnd());

// padStart and padEnd
let numStr = "5";
console.log("Pad start to length 3 with '0':", numStr.padStart(3, '0'));
console.log("Pad end to length 3 with '0':", numStr.padEnd(3, '0'));

// repeat
console.log("Repeat string 3 times:", str.repeat(3));

// split
let csv = "apple,banana,cherry,date";
let fruits = csv.split(','); // split by comma, turns an array
console.log("Fruits array:", fruits);
let chars = csv.split(''); // split into individual characters
console.log("Characters array:", chars);

// concat
let concat1 = "Hello";
let concat2 = "World";
console.log("Concatenated string:", concat1.concat(', ', concat2, '!'));

// match
let text = "The rain in SPAIN stays mainly in the plain";
// let regex = /AIN/; // default: case-sensitive, first match only
let regex = /ain/; // default: case-sensitive, first match only
// let regex = /ain/gi; // both global and case-insensitive
// let regex = /ain/g; // global only
// let regex = /ain/i; // case-insensitive only
let matches = text.match(regex);
console.log("Matches for 'ain':", matches);
// match returns an array of all matches or null if no match is found

// matchAll (introduced in ES2020); does not work in Internet Explorer
let textMatchAll = "The rain in SPAIN stays mainly in the plain";
// let regexMatchAll = /ain/; // uncaught type error: String.prototype.matchAll called with a non-global RegExp argument
let regexMatchAll = /ain/gi; // If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// let regexMatchAll = /ain/g; // returns only case-sensitive matches
// let regexMatchAll = /AIN/g; // returns only case-sensitive matches
// let regexMatchAll = "ain"; // returns only case-sensitive matches
let allMatches = textMatchAll.matchAll(regexMatchAll);
console.log("All matches for 'ain':", Array.from(allMatches));

// includes
console.log("Includes 'World':", str.includes('World'));
console.log("Includes 'world':", str.includes('world')); // case-sensitive
console.log("Includes 'Hello' from index 5:", str.includes('Hello', 5)); // we can also check from a specific index

// startsWith and endsWith
console.log("Starts with 'Hello':", str.startsWith('Hello'));
console.log("Starts with 'World' from index 7:", str.startsWith('World', 7));
console.log("Ends with '!':", str.endsWith('!'));
console.log("Ends with 'World' considering only first 12 characters:", str.endsWith('World', 12));
// both methods are case-sensitive

// toString
let num = 12345;
console.log("Number to string using toString():", num.toString());
console.log("Type:", typeof num);
console.log("Type after toString():", typeof num.toString());
