// This is bad, but is a good enough placeholder
const calculateWinner = (rows) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let idx = 0; idx < lines.length; idx++) {
    const [x, y, z] = lines[idx];
    if (rows[x] && rows[x] === rows[y] && rows[x] === rows[z]) {
      return rows[x];
    }
  }
};

const calculateNextPlayer = (rows) =>
  rows.filter(Boolean).length % 2 === 0 ? "X" : "O";

const calculateStatus = (winner, rows, player) => {
  if (winner) {
    return `Winner: ${winner}`;
  } else if (rows.every(Boolean)) {
    return `Tie`;
  } else if (player) {
    return `Next player: ${player}`;
  } else {
    return "Got an unexpected error. Please restart the game";
  }
};

export { calculateWinner, calculateNextPlayer, calculateStatus };
