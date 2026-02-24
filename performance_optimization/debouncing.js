import { callAPI } from "./call_api.js";

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

export const debouncedCallAPI = functionDebounce(callAPI, 500);