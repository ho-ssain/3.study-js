// and or operator
// this are also called short circuit evaluation

let firstName = "Hossain";
let age = 20;

if (firstName[0] === "H" && age >= 20) console.log("Ok");
else console.log("Not Ok!");

if (firstName[0] === "H" || age >= 20) console.log("Selected");
else console.log("Not Selected!");
