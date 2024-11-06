import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';
import { IBoard, PLAYER } from '../../../../src/core/interfaces';
import { Column } from '../../../../src/app/ui/components/Column';

describe('Column component', () => {
  const mockBoard: IBoard = [
    [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
    [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
    [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
    [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
  ];

  it('should render the correct number of cells based on the board', () => {
    render(<Column columnIndex={0} board={mockBoard} handleDrop={vi.fn()} />);

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(4);
  });

  it.skip('should display the correct value in each cell', () => {
    render(<Column columnIndex={0} board={mockBoard} handleDrop={vi.fn()} />);

    const cells = screen.getAllByRole('cell');
    expect(cells[0]).toHaveTextContent(PLAYER.PLAYER1);
    expect(cells[1]).toHaveTextContent(PLAYER.PLAYER2);
    expect(cells[2]).toHaveTextContent(PLAYER.PLAYER1);
    expect(cells[3]).toHaveTextContent(PLAYER.PLAYER2);
  });

  it('should call handleDrop when clicked', () => {
    const handleDropMock = vi.fn();
    render(<Column columnIndex={1} board={mockBoard} handleDrop={handleDropMock} />);

    fireEvent.click(screen.getByRole('column'));

    expect(handleDropMock).toHaveBeenCalledWith(1);
  });

  it('should log the column index when clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const handleDropMock = vi.fn();

    render(<Column columnIndex={2} board={mockBoard} handleDrop={handleDropMock} />);

    fireEvent.click(screen.getByRole('column'));

    expect(consoleSpy).toHaveBeenCalledWith(2);

    consoleSpy.mockRestore();
  });
});