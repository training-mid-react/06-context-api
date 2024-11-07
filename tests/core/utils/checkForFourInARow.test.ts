import { IBoard, PLAYER } from "../../../src/core/interfaces";
import { checkForFourInARow } from "../../../src/core/utils/checkForFourInARow";

describe('checkForFourInARow', () => {
  let board: IBoard;

  beforeEach(() => {
    board = Array(6).fill(null).map(() => Array(7).fill(null));
  });

  it('should detect a horizontal four in a row', () => {
    board[2][1] = PLAYER.PLAYER1;
    board[2][2] = PLAYER.PLAYER1;
    board[2][3] = PLAYER.PLAYER1;
    board[2][4] = PLAYER.PLAYER1;

    const result = checkForFourInARow(board, 2, 1, PLAYER.PLAYER1);
    expect(result).toBe(PLAYER.PLAYER1);
  });

  it('should detect a vertical four in a row', () => {
    board[1][3] = PLAYER.PLAYER1;
    board[2][3] = PLAYER.PLAYER1;
    board[3][3] = PLAYER.PLAYER1;
    board[4][3] = PLAYER.PLAYER1;

    const result = checkForFourInARow(board, 1, 3, PLAYER.PLAYER1);
    expect(result).toBe(PLAYER.PLAYER1);
  });

  it('should detect a diagonal four in a row (positive slope)', () => {
    board[2][1] = PLAYER.PLAYER1;
    board[3][2] = PLAYER.PLAYER1;
    board[4][3] = PLAYER.PLAYER1;
    board[5][4] = PLAYER.PLAYER1;

    const result = checkForFourInARow(board, 2, 1, PLAYER.PLAYER1);
    expect(result).toBe(PLAYER.PLAYER1);
  });

  it('should detect a diagonal four in a row (negative slope)', () => {
    board[5][1] = PLAYER.PLAYER1;
    board[4][2] = PLAYER.PLAYER1;
    board[3][3] = PLAYER.PLAYER1;
    board[2][4] = PLAYER.PLAYER1;

    const result = checkForFourInARow(board, 5, 1, PLAYER.PLAYER1);
    expect(result).toBe(PLAYER.PLAYER1);
  });

  it('should return null if there is no four in a row', () => {
    board[2][1] = PLAYER.PLAYER1;
    board[2][2] = PLAYER.PLAYER1;
    board[2][3] = PLAYER.PLAYER2;
    board[2][4] = PLAYER.PLAYER1;

    const result = checkForFourInARow(board, 2, 1, PLAYER.PLAYER1);
    expect(result).toBeNull();
  });

  it('should handle edge case where no tokens exist', () => {
    const result = checkForFourInARow(board, 0, 0, PLAYER.PLAYER1);
    expect(result).toBeNull();
  });

  it('should not detect a win with fewer than four tokens in a row', () => {
    board[3][1] = PLAYER.PLAYER1;
    board[3][2] = PLAYER.PLAYER1;
    board[3][3] = PLAYER.PLAYER1;

    const result = checkForFourInARow(board, 3, 1, PLAYER.PLAYER1);
    expect(result).toBeNull();
  });

  it('should not falsely detect a win for the opponent', () => {
    board[2][1] = PLAYER.PLAYER2;
    board[2][2] = PLAYER.PLAYER2;
    board[2][3] = PLAYER.PLAYER2;
    board[2][4] = PLAYER.PLAYER2;

    const result = checkForFourInARow(board, 2, 1, PLAYER.PLAYER1);
    expect(result).toBeNull();
  });
});
