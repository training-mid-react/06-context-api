import { directions } from '../constants';
import { IBoard, PLAYER } from '../interfaces';

export const checkForFourInARow = (
  board: IBoard,
  row: number,
  col: number,
  player: PLAYER
): PLAYER | null => {
  const countFourInARow = (dRow: number, dCol: number): number => {
    let count = 0;
    let r = row;
    let c = col;

    while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === player) {
      count++;
      r += dRow;
      c += dCol;
    }

    r = row - dRow;
    c = col - dCol;

    while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === player) {
      count++;
      r -= dRow;
      c -= dCol;
    }

    return count;
  };

  for (let { row: r, col: c } of directions) {
    const consecutive = countFourInARow(r, c);
    if (consecutive >= 4) {
      return player;
    }
  }

  return null;
};
