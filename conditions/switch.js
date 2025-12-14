let dayStatus = document.getElementById("dayStatus");

function checkStatus() {
    const dateInput = document.getElementById("checkDate").value;
    const date = new Date(dateInput);
    const day = date.getDay();

    switch (day) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            dayStatus.innerText = "Working Day";
            break;
        case 5:
        case 6:
            dayStatus.innerText = "Weekend";
            break;
        default:
            dayStatus.innerText = "Invalid Date";
    }
}

function reset() {
    document.getElementById("checkDate").value = "";
    dayStatus.innerText = "";
}

/**
 * break statement is used to exit the switch case once a match is found.
 * Without break, the code would continue to execute the subsequent cases (fall-through behavior).
 * default case handles any unexpected input, ensuring robustness.
 * switch uses strict comparison (===) for matching cases.
 */