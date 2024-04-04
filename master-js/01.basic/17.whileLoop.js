// while loop
/* 
let i = 0;
console.log("🚀 ~ i:", i);

while (i <= 9) {
  console.log(i);
  i++;
}

console.log("🚀 ~ i:", i);

 */

// example-: 1
// add 1st 10 natural numbers

let count = 1;
let sum = 0;

while (count <= 100) {
  sum += count;
  count++;
}
console.log("🚀 ~ sum:", sum);

// formula:
// num = num * (num+1) / 2
let numCount = 100;
let total = (numCount * (numCount + 1)) / 2;
console.log("🚀 ~ total:", total);
