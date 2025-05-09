let currentPlayer = 'X';
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');

const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

cells.forEach(cell => {
  cell.addEventListener('click', () => handleCellClick(cell));
});

function handleCellClick(cell) {
  const index = cell.getAttribute('data-index');

  if (gameBoard[index] !== "" || !gameActive) return;

  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    statusDisplay.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (gameBoard.every(cell => cell !== "")) {
    statusDisplay.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => gameBoard[index] === currentPlayer);
  });
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = 'X';
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = '');
}
