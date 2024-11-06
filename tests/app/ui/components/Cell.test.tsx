import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Cell } from '../../../../src/app/ui/components/Cell';
import { PLAYER } from '../../../../src/core/interfaces';

describe('Cell component', () => {
  it('renders correctly when value is null', () => {
    const { container } = render(<Cell value={null} />);
    const cellElement = container.querySelector('.cell');
    
    expect(cellElement).toBeInTheDocument();
    expect(cellElement).not.toHaveClass('cell__player1');
    expect(cellElement).not.toHaveClass('cell__player2');
  });

  it('renders correctly when value is PLAYER.PLAYER1', () => {
    const { container } = render(<Cell value={PLAYER.PLAYER1} />);
    const cellElement = container.querySelector('.cell');
    
    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toHaveClass('cell__player1');
  });

  it('renders correctly when value is PLAYER.PLAYER2', () => {
    const { container } = render(<Cell value={PLAYER.PLAYER2} />);
    const cellElement = container.querySelector('.cell');
    
    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toHaveClass('cell__player2');
  });

  it('renders the frame div', () => {
    const { container } = render(<Cell value={null} />);
    const frameElement = container.querySelector('.cell__frame');
    
    expect(frameElement).toBeInTheDocument();
  });
});