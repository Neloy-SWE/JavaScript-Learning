const buttonStart = document.getElementById("buttonStart");
const buttonStop = document.getElementById("buttonStop");
const buttonReset = document.getElementById("buttonReset");

const textHour = document.getElementById("textHour");
const textMinute = document.getElementById("textMinute");
const textSecond = document.getElementById("textSecond");

let hour = 0;
let minute = 0;
let second = 0;

let intervalController;

buttonStart.addEventListener("click", () => {
    intervalController = setInterval(timer, 1000);
});

buttonStop.addEventListener("click", () => {
    clearInterval(intervalController);
});
buttonReset.addEventListener("click", () => {
    clearInterval(intervalController);
    hour = 0;
    minute = 0;
    second = 0;
    textHour.textContent = "00";
    textMinute.textContent = "00";
    textSecond.textContent = "00";
});

timer = () => {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }

    textHour.textContent = hour < 10 ? "0" + hour : hour;
    textMinute.textContent = minute < 10 ? "0" + minute : minute;
    textSecond.textContent = second < 10 ? "0" + second : second;
}