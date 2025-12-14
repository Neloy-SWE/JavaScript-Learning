let ageInput = document.getElementById("ageInput");
let ageStatus = document.getElementById("ageStatus");

function checkAge() {
    const age = parseInt(ageInput.value, 10);

    ageStatus.innerText = isNaN(age) ? "Invalid Age" : (age < 18 ? "Minor" : "Adult");
}

function resetAge() {
    ageInput.value = "";
    ageStatus.innerText = "";
}