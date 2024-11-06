import { FC } from 'react';
import { Column } from '../Column';
import { IBoard } from '../../../../core/interfaces';
import './style.scss';

interface Props {
  board: IBoard;
  handleDrop: (colIndex: number) => void;
}

export const Board:FC<Props> = ({board, handleDrop}) => {

  return (
    <div className="board">
      {board.map((_, colIndex) => (
        <Column key={colIndex} board={board} columnIndex={colIndex} handleDrop={handleDrop} />
      ))}
      <Column key={board.length} board={board} columnIndex={board.length} handleDrop={handleDrop} />
    </div>
  );
};
