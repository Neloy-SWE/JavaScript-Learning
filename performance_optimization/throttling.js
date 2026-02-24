import { callAPI } from "./call_api.js";

const functionThrottle = (func, limit) => {
    let flag = true;
    return function (...args) {
        const context = this;
        if (flag) {
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

export const throttledCallAPI = functionThrottle(callAPI, 500);