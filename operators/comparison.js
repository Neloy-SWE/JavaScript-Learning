// equal to
let a = 5;
if (a == '5') {
    console.log("a is equal to '5' using ==");
}
if (a == 5) {
    console.log("a is equal to 5 using ==");
}

// euqal value and type
if (a === 5) {
    console.log("a is equal to 5 using ===");
}
if (a === '5') {
    console.log("a is equal to '5' using ===");
} else {
    console.log("a is not equal to '5' using ===");
}

// not equal to
if (a != 10) {
    console.log("a is not equal to 10 using !=");
}

// not equal value or not equal type
if (a !== '5') {
    console.log("a is not equal to '5' using !==");
} else {
    console.log("a is equal to '5' using !==");
}

// greater than
if (a > 3) {
    console.log("a is greater than 3");
}

// greater than or equal to
if (a >= 5) {
    console.log("a is greater than or equal to 5");
}
// less than
if (a < 10) {
    console.log("a is less than 10");
}

// less than or equal to
if (a <= 5) {
    console.log("a is less than or equal to 5");
}