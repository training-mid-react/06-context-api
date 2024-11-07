import { useContext } from 'react';
import { GameContext } from '../../app/state/GameContext';
import { dropToken, resetGame } from '../../app/state/board/actions';

export const useGameContext = () => {
  const {state, dispatch} = useContext(GameContext);

  const handleDrop = (columnIndex: number) => {
    if (state.winner || state.isDraw) {
      return;
    }
    dispatch(dropToken(columnIndex));
  };

  const handleReset = () => {
    dispatch(resetGame());
  }

  return {state, handleDrop, handleReset};
};
