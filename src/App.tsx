import { useState } from "react";

export function App() {
  const [rows, setRows] = useState(initialRows);

  const player = calculateNextPlayer(rows);
  const winner = calculateWinner(rows);
  const status = calculateStatus(winner, rows, player);

  const handleReset = () => setRows(initialRows);

  const handlePlay = (index: number) => {
    if (rows[index] || winner) return;

    const newRows = rows.toSpliced(index, 1, player);
    setRows(newRows);
  };

  return (
    <div className="max-md:px-4">
      <h1
        className="mt-4 text-center text-6xl max-md:text-4xl font-bold"
        data-testid="status"
      >
        {status}
      </h1>

      <div className="mt-8 grid grid-rows-3 grid-cols-3 gap-3 aspect-square max-w-md mx-auto">
        {rows.map((value, idx) => (
          <div
            className="bg-slate-700 rounded-xl flex justify-center items-center text-white text-6xl font-bold border-solid border-2 border-slate-400 hover:border-sky-500 cursor-pointer"
            onClick={() => handlePlay(idx)}
            key={`square-${idx}`}
            data-testid={`square-${idx}`}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const initialRows = new Array<number | null>(9).fill(null);

const calculateWinner = (rows: Array<number | null>) => {
  // This is bad, but is a good enough placeholder
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

const calculateNextPlayer = (rows: Array<number | null>) =>
  rows.filter(Boolean).length % 2 === 0 ? "X" : "O";

const calculateStatus = (
  winner: number | undefined,
  rows: Array<number | null>,
  player: string | undefined
) => {
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
