import { GameState } from '../../core/interfaces';
import { IAction } from '../../core/interfaces/state';
import { boardCases, boardInitialState } from './board';

export const initialState = {
  ...boardInitialState
};

export const reducer = (state: GameState, action: IAction) => {
  const cases = { ...boardCases };
  return cases[action.type](state, action.payload) || state;
};