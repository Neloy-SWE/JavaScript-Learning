// quotes in strings
// single quotes
let singleQuoteString = 'Hello, World!';
console.log(singleQuoteString);

// double quotes
let doubleQuoteString = "Hello, World!";
console.log(doubleQuoteString);

// backticks (template literals)
let tl = 'Alice';
let backtickString = `Hello, ${tl}!`;
console.log(backtickString);


// quote escaping
let escapedSingleQuote = 'It\'s a beautiful day!';
console.log(escapedSingleQuote);
let escapedDoubleQuote = "He said, \"Hello!\"";
console.log(escapedDoubleQuote);
let escapedBacktick = `This is a backtick: \``;
console.log(escapedBacktick);
let mixedQuotes = "She said, 'It's a lovely day!'";
console.log(mixedQuotes);
let mixedQuotes2 = 'He said, "JavaScript is fun!"';
console.log(mixedQuotes2);

// multi-line strings using backticks
let multiLineString = `This is line one.
This is line two.
This is line three.`;
console.log(multiLineString);