import { GameOfLife } from './GameOfLife';
import { IBoard } from './IBoard';

describe('GameOfLife', () => {
  it('should return array of dead cells, when array of dead cells is given', () => {
    //given
    const board: IBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('should return array of dead cells, when array with 1 cell is given', () => {
    //given
    const board: IBoard = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('cell with 2 neighbors should survived and cell with 3 neighbors should be born', () => {
    //given
    const board: IBoard = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  it('cell with 4 neighbors should die and cell with 3 neighbors should be born', () => {
    //given
    const board: IBoard = [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ]);
  });

  it('should return proper board', () => {
    //given
    const board: IBoard = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
    ]);
  });

  it('should render random board', () => {
    //given
    const gameOfLife = new GameOfLife([]).generateBoard(5);
    const gameOfLife2 = new GameOfLife([]).generateBoard(5);
    //when

    //then
    expect(gameOfLife.getBoard()).not.toEqual(gameOfLife2.getBoard());
  });
});
