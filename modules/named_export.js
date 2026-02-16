export const message = () => {
    console.log("From named export");
}

const name = "named export";
const language = "js";

export { name, language };