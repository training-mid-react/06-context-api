import React from 'react';
import './styles.scss';
import Square from './Square';
import { ROWS } from '@core/constants';
import { useBoardGame } from '@core/hooks';

export const Board: React.FC = () => {
    const { board, handleClick } = useBoardGame();

    return (
        <div className="board">
            {board?.map((_, col) => (
                <div key={col} className="board__column">
                    {Array.from({ length: ROWS }, (_, row) => (
                        <Square
                            key={`${row}-${col}`}
                            onClick={() => handleClick(col)}
                            value={board[row][col]}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
