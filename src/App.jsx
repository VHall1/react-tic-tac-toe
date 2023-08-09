import * as React from 'react';
import { calculateWinner, calculateNextPlayer, calculateStatus } from './util';

export function App() {
  const [rows, setRows] = React.useState(initialRows);
  const player = calculateNextPlayer(rows);
  const winner = calculateWinner(rows);
  const status = calculateStatus(winner, rows, player);

  const handleReset = () => setRows(initialRows);

  const handlePlay = (index) => {
    if (rows[index] || winner) return;

    const newRows = rows.toSpliced(index, 1, player);
    setRows(newRows);
  };

  return (
    <div className="max-md:px-4">
      <h1
        className="mt-4 text-center text-6xl max-md:text-4xl text-white font-bold"
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
        <button className="btn-primary btn-large" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const initialRows = [...new Array(9).fill(null)];
