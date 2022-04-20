import { ICellState } from './ICellState';
import { INumberOfNeighbors } from './INumberOfNeighbors';

export class Cell {
  static state(alive: ICellState, neighbors: INumberOfNeighbors) {
    if (neighbors === 3) return 1;
    if (alive && neighbors === 2) return 1;
    return 0;
  }
}
