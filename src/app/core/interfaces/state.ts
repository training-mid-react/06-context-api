import { ICardsState } from './cardsState';

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IState extends ICardsState {
}

// export interface State extends ICardsState, IGameState, ITurnState, IScoreState {
// }

export interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}