import { FC, createContext, useReducer } from 'react';
import { GameProviderProps } from '../../core/interfaces';
import { initialState, reducer } from './reducer';
import { IContext, IState } from '../../core/interfaces/state';

const GameContext = createContext<IContext>({state: {} as IState, dispatch: () => {}});

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext };
