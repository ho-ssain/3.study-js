// push-: Appends new elements to the end of an array, and returns the new length of the array.

// pop-: Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// shift-: Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// unshift-: Inserts new elements at the start of an array, and returns the new length of the array.

// array is mutable means changeable

let fruits = ["apple", "banana"];

fruits.push("orange");
fruits.push("jackfruit");
fruits.push("guava");

console.log("🚀 ~1: fruits:", fruits);

//.........................................

fruits.pop();

console.log("🚀 ~2: fruits:", fruits);

//..........................................

fruits.unshift("carrot");

console.log("🚀 ~3: fruits:", fruits);

//..........................................

fruits.shift();
console.log("🚀 ~4: fruits:", fruits);
