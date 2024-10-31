import { ICardsState } from "./cardsState";

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export interface IState extends ICardsState {
}

// export interface State extends ICardsState, IGameState, ITurnState, IScoreState {
// }

export interface IAction {
  type: string;
  payload: any;
}