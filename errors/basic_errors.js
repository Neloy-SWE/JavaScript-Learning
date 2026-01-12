/**
 * The try statement allows you to define a block of code to be tested for errors while it is being executed.
 * The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
 * 
 */

// The JavaScript statements try and catch come in pairs
// A ReferenceError occurs if you use (reference) a variable that does not exist.
let x = 5;
try {
    x = y + 1;
} catch (err) {
    console.log(err.name);
    console.log(err); // ReferenceError: y is not defined
} finally {
    console.log("must execute");
}

try {
    printHello(x);
} catch (e) {
    console.log("Error:", e); // Error: ReferenceError: printHello is not defined at
}

try {
    x.toUpperCase();
} catch (e) {
    console.log("Error:", e); // TypeError: x.toUpperCase is not a function
}

/**
 * In JavaScript, the try statement is used to handle errors (also called exceptions) that may occur during code execution - without stopping the entire program.
 * 
 * The try statement works together with catch.
 * Sometimes it works with finally.
 * And sometimes it works with throw.
 * The finally block executes after the try and catch blocks, whether an error occurred or not. It is commonly used for cleanup tasks (e.g., closing files, stopping loaders, etc.).
 * 
 */

// throw:
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError);
        }
    }
}

function validateAge(age) {
    if (age < 18) {
        throw new ValidationError('User must be at least 18 years old', 'age');
    }
    return "Voter";
}

try {
    let check = validateAge(15);
    //   let check = validateAge(18);
    console.log(check);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Custom Error: ${error.name} for field "${error.field}" - ${error.message}`);
    } else {
        console.log(error.name);
    }
}
