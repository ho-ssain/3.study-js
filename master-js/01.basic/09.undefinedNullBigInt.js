// undefined, null, bigint
// Undefined and Null is a special type which has only one value and that is themselves undefined and null

// undefined represents the absence of any value. It is the default value of uninitialized variables
// Undefined means a variable has been declared but has yet not been assigned a value.
// undefined: is a primitive value.
let firstName;
console.log("🚀 ~ firstName:", typeof firstName, firstName);

// null represents the intentional absence of any value. It is often used as a default assigned value to variable to indicate that a variable should have no value assigned to it

let age = null;
console.log("🚀 ~ age:", typeof age, age);

// bigint

// let num1 = Number(23);
// console.log("🚀 ~ num2:", num1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);

// let num = BigInt(222222222222222222222222n);
let num = 111111111111111111111111111111111111111111111111n;
console.log("🚀 ~ num:", typeof num);
// console.log(BigInt.MAX_SAFE_INTEGER);
