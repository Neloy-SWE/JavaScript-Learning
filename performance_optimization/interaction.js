import { debouncedCallAPI } from "./debouncing.js";
import { throttledCallAPI } from "./throttling.js";

const inputDebounce = document.getElementById("debounce");
const inputThrottle = document.getElementById("throttle");
const buttonThrottle = document.getElementById("buttonThrottle");


// inputDebounce.addEventListener("input", function () {
//     debouncedCallAPI.call(this, this.value);
// });

inputDebounce.addEventListener("input", () => {
    debouncedCallAPI(inputDebounce.value);
});

inputThrottle.addEventListener("input", () => {
    throttledCallAPI(inputThrottle.value);
});

buttonThrottle.addEventListener("click", () => {
    throttledCallAPI("Button Clicked");
});