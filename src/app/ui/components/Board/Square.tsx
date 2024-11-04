import { SquareProps } from '@core/types';
import React from 'react';
import './styles.scss';

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return (
        <div
            className="board__square"
            style={{ backgroundColor: value ?? '' }}
            onClick={onClick}
        ></div>
    );
};

export default Square;
