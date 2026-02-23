function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function clearLocalStorage() {
    localStorage.clear();
}

// save literal values:
saveToLocalStorage("name", "John Doe");
saveToLocalStorage("age", "30");
saveToLocalStorage("city", "Dhaka");

// save object:
const user = {
    name: "John Doe",
    age: 30,
    city: "Dhaka"
}
saveToLocalStorage("user", JSON.stringify(user));

// get data from local storage:
console.log(getFromLocalStorage("name"));
console.log(getFromLocalStorage("age"));
console.log(getFromLocalStorage("city"));

// get object from local storage:
const userFromLocalStorage = JSON.parse(getFromLocalStorage("user"));
console.log(userFromLocalStorage);
console.log(userFromLocalStorage.name);
console.log(userFromLocalStorage.age);
console.log(userFromLocalStorage.city);


// removeFromLocalStorage("age"); // remove item from local storage:

// clearLocalStorage(); // clear local storage