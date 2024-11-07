import { useGameContext } from '../../core/hooks/useGameContext';
import { Game } from '../ui/components/Game';
import { PrincipalLayout } from '../ui/layouts/principalLayout';

export const PrincipalContainer = () => {

  const { state, handleDrop, handleReset } = useGameContext();
  const { winner, isDraw, currentPlayer, board } = state;

  return (
      <PrincipalLayout>
        <Game board={board} currentPlayer={currentPlayer} winner={winner} isDraw={isDraw} handleDrop={handleDrop} handleReset={handleReset} />
      </PrincipalLayout>
  );
};
