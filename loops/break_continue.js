/**
 * break statement breaks out of the current loop.
 * continue statement skips the current iteration and continues with the next iteration of the loop.
 */

for (let i = 1; i <= 10; i++) {
    if (i%2 === 0) {
        continue; // skip even numbers
        console.log(i); // this line will never be executed
    }else if (i ==9){
        console.log("you cannot print 9, breaking the loop");
        break; // exit the loop when i is 9
    }
    console.log(i);
}

/**
 * labelled statements can be used with break and continue to specify which loop to break out of or continue.
 * A label is an identifier followed by a colon (:). It can be placed before loops.
 */

// labelled break example
outerLoop: for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
        if (a === 2 && b === 2) {
            break outerLoop; // breaks out of the outer loop
        }
        console.log("a: " + a + ", b: " + b);
    }
}

// labelled continue example
outerLoop: for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
        if (x === 2 && y === 2) {
            continue outerLoop; // continues with the next iteration of the outer loop
        }
        console.log("x: " + x + ", y: " + y);
    }
}