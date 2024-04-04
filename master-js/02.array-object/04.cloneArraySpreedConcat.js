// clone array
let arr1 = [1, 2, 3, 4];

let arr2 = [...arr1]; // way 1
let arr3 = arr1.slice(0); //way 2
let arr4 = [].concat(arr1); // way 3

// how to concat arrays
let arr5 = arr1.slice(0).concat(5, 6);
let arr6 = [].concat(arr1, [7, 8]);
let arr7 = [...arr1, 9, 10];

console.log(arr1 === arr2);
console.log(arr1 === arr3);
console.log(arr1 === arr4);

console.log("🚀 ~ arr2:", arr2);
console.log("🚀 ~ arr3:", arr3);
console.log("🚀 ~ arr4:", arr4);
console.log("🚀 ~ arr5:", arr5);
console.log("🚀 ~ arr6:", arr6);
console.log("🚀 ~ arr6:", arr7);
