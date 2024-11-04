import { IBoardGameState } from '.';

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export interface IState extends IBoardGameState {
}


export interface IAction {
  type: string;
  payload?: any;
}