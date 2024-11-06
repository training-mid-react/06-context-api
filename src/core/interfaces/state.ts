import { GameState } from ".";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IState extends GameState {
}

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}