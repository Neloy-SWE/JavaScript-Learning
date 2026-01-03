const letters = new Set(["a", "b", "c"]);

// add():
letters.add("d");
console.log(letters);

// size:
console.log("size of letters:", letters.size);

// hase():
console.log("is there b in letters?", letters.has("b"));

// forEach():
letters.forEach((x) => {
    console.log(x);
});

// values():
const setValues = letters.values();
for (value of setValues) {
    console.log(value);
}
for (value of letters.values()) {
    console.log(value);
}

// union():
const lettersNew = new Set(["x", "y", "z", "a", "d", "e"]);
const lettersUnion = letters.union(lettersNew);
console.log(lettersUnion);

// intersection():
const lettersMore = new Set(["a", "e"]);
const lettersIntersection = lettersUnion.intersection(lettersMore);
console.log(lettersIntersection);

// difference():
const lettersDifferenceMore = lettersMore.difference(letters);
console.log(lettersDifferenceMore);
const lettersMoreDifference = letters.difference(lettersMore);
console.log(lettersMoreDifference);

// symmetricDifference():
const lettersSD = letters.symmetricDifference(lettersMore);
console.log(lettersSD);

// isSubsetOf():
console.log(lettersMore.isSubsetOf(lettersNew));

// isSupersetOf():
console.log(lettersNew.isSupersetOf(lettersMore));

// isDisjointFrom(): returns true if this set has no elements in common with the argument set.
console.log(lettersNew.isDisjointFrom(lettersMore));
console.log(lettersNew.isDisjointFrom(letters));
const lettersUnmatched = new Set(["q"]);
console.log(lettersNew.isDisjointFrom(lettersUnmatched));