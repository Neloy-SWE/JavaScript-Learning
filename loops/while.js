/**
 * While loops execute a block of code as long as a specified condition is true. but we must be careful to avoid infinite loops by ensuring the condition eventually becomes false.
 */

let i = 0;
while (i < 10){
    console.log(i);
    i++; // increment i to eventually break the loop
}

// do-while loop example
let j = 1;
do {
    console.log(j);
    j++;
} while (j < 1);
/**
 * In a do-while loop, the code block is executed at least once before the condition is tested.
 * in the above example, even though the condition (j < 1) is false initially, the code inside the do block runs once before checking the condition.
 */