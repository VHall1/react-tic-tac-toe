import * as React from "react";
import { calculateWinner, calculateNextPlayer, calculateStatus } from "./util";

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
    <>
      <div className="header">
        <h1 className="status">{status}</h1>
        <button className="reset" onClick={handleReset}>
          Reset game
        </button>
      </div>

      <div className="grid">
        {rows.map((value, idx) => (
          <div
            className="square"
            key={`square-${idx}`}
            onClick={() => handlePlay(idx)}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}

const initialRows = [...new Array(9).fill(null)];
