function wishSong() {
  console.log("Happy Birthday to you 🎉🎉🎉!..");
}

// wishSong();
wishSong();

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log("🚀 ~ sumOfTwoNumbers:", sumOfTwoNumbers(23, 33));

function sum(...parm) {
  const length = parm.length;
  let total = 0;
  for (let i = 0; i < length; i++) total += parm[i];
  return total;
}

console.log("🚀 ~ sum:", sum(3, 38, 37, 4, 5));

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

console.log("🚀 ~ isEven?:", isEven(12));

// input: string
// output: firstCharacter

function firstCharacter(str) {
  return str[0];
}

console.log("🚀 ~ firstCharacter:", firstCharacter("Hello"));
