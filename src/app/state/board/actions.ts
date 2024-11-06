import { boardInitialState } from ".";

export const boardActions = {
  DROP_TOKEN : 'DROP_TOKEN',
  RESET_GAME : 'RESET_GAME',
};

export const dropToken = (columnIndex: number) => ({
  type: boardActions.DROP_TOKEN,
  payload: columnIndex,
});

export const resetGame = () => ({
  type: boardActions.RESET_GAME,
  payload: boardInitialState,
});