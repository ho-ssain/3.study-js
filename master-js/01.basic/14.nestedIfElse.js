// nested if else

// guessing game
/*

winning number 19
--> 19 your guess is right
--> 17 too low
--> 21 too high

*/

const winningNumber = 19;
let userGuess = +prompt("Guess the number: ");

if (userGuess === winningNumber)
  console.log("Congrats 🎉, your guess is right!");
else {
  console.log("😓your guess is wrong!");
  if (userGuess < winningNumber) console.log("too Low!");
  else console.log("too high!");
}
