let counter = 0;
// const callAPI = function () {
export const callAPI = (value) => {
    counter++;
    // console.log(`API called ${counter} times with value: ${this.value}`); 
    console.log(`API called ${counter} times with value: ${value}`);
}