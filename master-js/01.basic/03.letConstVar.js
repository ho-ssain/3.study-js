var a = 23;
console.log("🚀 ~ a:", a);

var a = 25;

let b = 34;
console.log("🚀 ~ b:", b);

// let b = 45; // invalid Cannot redeclare block-scoped variable
b = 45; // valid

const c = 3.14;
// c = 4.55; // invalid! TypeError: Assignment to constant variable.
/* 

- Use var if we want function-scoped variables that can be hoisted. 
- Use let if we want block-scoped variables that can be reassigned. but not redeclare
- Use const if we want block-scoped variables that are constant and cannot be reassigned.

 */
