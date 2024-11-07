import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { IBoard, PLAYER } from '../../../../src/core/interfaces';
import { Board } from '../../../../src/app/ui/components/Board';


const mockBoard: IBoard = [
  [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
  [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
  [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
  [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
];

describe('Board component', () => {
  it('should call handleDrop with the correct column index when clicked', () => {
    const handleDropMock = vi.fn();
    render(<Board board={mockBoard} handleDrop={handleDropMock} />);

    fireEvent.click(screen.getAllByRole('column')[1]);

    expect(handleDropMock).toHaveBeenCalledWith(1);
  });
});