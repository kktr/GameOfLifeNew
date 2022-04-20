import { GameOfLife, IBoard } from '@game-of-life-new/gof-tsc';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

export function Index() {
  const [board, setBoard] = useState<IBoard | null>(null);
  const [game, setGame] = useState<any | null>(null);

  const numRows = 40;
  const numCols = 40;

  const randomTiles = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      ); // returns a live cell 70% of the time
    }
    return rows;
  };

  const [grid, setGrid] = useState(() => {
    return randomTiles();
  });

  useEffect(() => {
    const newGame = new GameOfLife([]);
    newGame.generateBoard(10);
    setGame(newGame);
  }, []);

  const playGameOfLife = () => {
    const newGame = new GameOfLife(grid);
    setGrid(newGame.tick().getBoard());
  };

  const autoPlayGameOfLife = () => {
    const newGame = new GameOfLife(grid);
    setGame(newGame);
    setInterval(() => {
      setGrid(newGame.tick().getBoard());
    }, 50);
  };

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome gof-next 👋
              {}
            </h1>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${numCols}, 20px)`,
              width: 'fit-content',
              margin: '0 auto',
            }}
          >
            {grid.map((rows, i) =>
              rows.map((col, k) => (
                <div
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: grid[i][k] ? '#00ffa3' : undefined,
                    border: '1px solid #595959',
                  }}
                />
              ))
            )}
          </div>

          <button onClick={playGameOfLife}>PLAY</button>
          <button onClick={autoPlayGameOfLife}>AUTO PLAY</button>

          <p id="love">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
