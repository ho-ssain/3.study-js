// trim() -: Removes the leading and trailing white space and line terminator characters from a string.

// toUpperCase()
// toLowerCase()
// slice() Returns a section of a string.

// one thing remember string is immutable meaning can not change the value
let fullName = "       Hossain Kabir!  ";
console.log("🚀 ~ fullName:", fullName);

// console.log("🚀 ~ fullName:", fullName.length);

fullName = fullName.trim();

// console.log("🚀 ~ fullName:", fullName.length);
// console.log("🚀 ~ fullName:", fullName.toUpperCase());
// console.log("🚀 ~ fullName:", fullName.toLowerCase());

let copyFullName = fullName.slice();
let firstName = fullName.slice(0, 8);
console.log("🚀 ~ firstName:", firstName);
console.log("🚀 ~ copyFullName:", copyFullName);
