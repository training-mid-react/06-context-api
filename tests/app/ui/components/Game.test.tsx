import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { IBoard, PLAYER } from '../../../../src/core/interfaces';
import { Game } from '../../../../src/app/ui/components/Game';

describe('Game component', () => {
  const mockBoard: IBoard = [
    [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
    [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
    [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
    [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
  ];

  const handleDropMock = vi.fn();
  const handleResetMock = vi.fn();

  it('should render the title and the current player', () => {
    render(
      <Game
        board={mockBoard}
        currentPlayer={PLAYER.PLAYER1}
        winner={null}
        isDraw={false}
        handleDrop={handleDropMock}
        handleReset={handleResetMock}
      />
    );

    expect(screen.getByText('Connect 4')).toBeInTheDocument();

    expect(screen.getByText('play player1')).toBeInTheDocument();
  });

  it('should render the winner message if there is a winner', () => {
    render(
      <Game
        board={mockBoard}
        currentPlayer={PLAYER.PLAYER1}
        winner={PLAYER.PLAYER1}
        isDraw={false}
        handleDrop={handleDropMock}
        handleReset={handleResetMock}
      />
    );

    expect(screen.getByText('Player player1 wins!')).toBeInTheDocument();
  });

  it('should render the draw message if the game is a draw', () => {
    render(
      <Game
        board={mockBoard}
        currentPlayer={PLAYER.PLAYER1}
        winner={null}
        isDraw={true}
        handleDrop={handleDropMock}
        handleReset={handleResetMock}
      />
    );

    expect(screen.getByText('Draw!')).toBeInTheDocument();
  });

  it('should not render the winner or draw message when there is no winner or draw', () => {
    render(
      <Game
        board={mockBoard}
        currentPlayer={PLAYER.PLAYER1}
        winner={null}
        isDraw={false}
        handleDrop={handleDropMock}
        handleReset={handleResetMock}
      />
    );

    expect(screen.queryByText('Player player1 wins!')).not.toBeInTheDocument();
    expect(screen.queryByText('Draw!')).not.toBeInTheDocument();
  });

  it('should call handleReset when the reset button is clicked', () => {
    render(
      <Game
        board={mockBoard}
        currentPlayer={PLAYER.PLAYER1}
        winner={null}
        isDraw={false}
        handleDrop={handleDropMock}
        handleReset={handleResetMock}
      />
    );

    fireEvent.click(screen.getByText('Reset'));

    expect(handleResetMock).toHaveBeenCalled();
  });

  it('should call handleDrop when a column is clicked in the Board', () => {
    render(
      <Game
        board={mockBoard}
        currentPlayer={PLAYER.PLAYER1}
        winner={null}
        isDraw={false}
        handleDrop={handleDropMock}
        handleReset={handleResetMock}
      />
    );

    fireEvent.click(screen.getAllByRole('column')[0]);

    expect(handleDropMock).toHaveBeenCalledWith(0);
  });
});
