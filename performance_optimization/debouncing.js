let counter = 0;
// const callAPI = function () {
const callAPI = (value) => {
    counter++;
    // console.log(`API called ${counter} times with value: ${this.value}`); 
    console.log(`API called ${counter} times with value: ${value}`);
}

const functionDebounce = (func, delay) => {
    let timeoutId;
    // return function (args) {
    return function (...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            // func(args);
            func.apply(context, args);
        }, delay);
    }
}

const debouncedCallAPI = functionDebounce(callAPI, 1000);

const inputDebounce = document.getElementById("debounce");

// inputDebounce.addEventListener("input", function () {
//     debouncedCallAPI.call(this, this.value);
// });

inputDebounce.addEventListener("input", () => {
    debouncedCallAPI(inputDebounce.value);
});