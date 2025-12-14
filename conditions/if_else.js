let checkInput = document.getElementById('scoreInput');
let resultText = document.getElementById('result');
let buttonRestart = document.getElementById('buttonRestart');

checkInput.addEventListener('input', () => {
    if (checkInput.value !== "") {
        buttonRestart.disabled = false;
    } else {
        buttonRestart.disabled = true;
    }
});


function checkGrade() {
    let mark = checkInput.value;
    if (mark === "" || isNaN(mark)) {
        alert("Please enter a valid score.");
        return;
    } else if (mark < 0 || mark > 100) {
        alert("Score must be between 0 and 100.");
        return;
    }

    let result;
    if (mark >= 80) {
        console.log("A+");
        result = "A+";
    } else if (mark >= 70) {
        console.log("A");
        result = "A";
    } else if (mark >= 60) {
        console.log("A-");
        result = "A-";
    } else if (mark >= 50) {
        console.log("B");
        result = "B";
    } else if (mark >= 40) {
        console.log("C");
        result = "C";
    } else if (mark >= 33) {
        console.log("D");
        result = "D";
    } else {
        console.log("F");
        result = "F";
    }
    resultText.innerText = "Grade: " + result;
}

function restart() {
    checkInput.value = "";
    resultText.innerText = "";
    buttonRestart.disabled = true;
}