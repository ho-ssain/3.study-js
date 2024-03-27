const board = document.querySelector(".board");
const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const restartBtn = document.querySelector(".restart-btn");

const players = ["X", "O"];
let currentPlayer = players[0];

const winningPatterns = [
  [0, 1, 2], // represent the 1st row
  [3, 4, 5], // represent the 2nd row
  [6, 7, 8], // represent the 3rd row
  [0, 3, 6], // represent the 1st column
  [1, 4, 7], // represent the 2nd column
  [2, 5, 8], // represent the 3rd column
  [0, 4, 8], // represent the 1st diagonal
  [2, 4, 6], // represent the 2nd diagonal
];

message.textContent = `${currentPlayer}'s Turn`;

//  Function to handle click event on each square
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "" || checkWinner(currentPlayer)) return;

    squares[i].textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
      message.textContent = `Game Over! ${currentPlayer}'s is the Winner 🎉🎉! Please Restart!`;
      return;
    }

    if (checkTie()) {
      message.textContent = `Game is Tie! - Please Restart!`;
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

    message.textContent = `${currentPlayer}'s Turn`;
  });
}

// checking winner
function checkWinner(currentPlayer) {
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];

    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    )
      return true;
  }

  return false;
}

// checking the tie result
function checkTie() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") return false;
  }
  return true;
}

// restart the game
restartBtn.addEventListener("click", () => {
  // reset all text content of each square to empty string
  squares.forEach((square) => {
    square.textContent = "";
  });

  // change back to X and O in the player's turns
  currentPlayer = players[0];
  message.textContent = `${currentPlayer}'s Turn`;
});
