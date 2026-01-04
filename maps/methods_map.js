const carPrice = new Map([
    ["bmw", "$200"],
    ["toyota", "$10"]
]);

// forEach():
carPrice.forEach((v, k) => {
    console.log("Price for", k, "is:", v);
});

// entries():
for (const x of carPrice.entries()) { // return [key, value] as array for each element.
    console.log(x);
}

// keys():
for (const x of carPrice.keys()) {
    console.log(x);
}

// values():
for (const x of carPrice.values()) {
    console.log(x);
}

