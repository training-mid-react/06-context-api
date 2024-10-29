import { IAction, IState } from "../core/interfaces/state";
import { cardsCases, cardsInitialState } from "./cards";

export const initialState = {
  ...cardsInitialState
  //...reducerXInitialState
};

export const reducer = (state: IState, action: IAction) => {
  const cases = { ...cardsCases };
  // const cases = { ...cardsCases, ...gameCases };
  return cases[action.type](state, action.payload) || state;
}