export enum PLAYER {
  PLAYER1 = 'player1',
  PLAYER2 = 'player2',
}
export type ICell = PLAYER | null;
export type IBoard = ICell[][];

export enum GAME_ACTIONS {
  DROP_TOKEN = 'DROP_TOKEN',
  RESET_GAME = 'RESET_GAME',
}

export type GameActionReducer =
  | { type: 'DROP_TOKEN'; columnIndex: number }
  | { type: 'RESET_GAME' };

export interface GameState {
  board: IBoard;
  currentPlayer: PLAYER;
  winner: PLAYER | null;
  isDraw: boolean;
  isDropping: boolean;
}

export interface GameProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
