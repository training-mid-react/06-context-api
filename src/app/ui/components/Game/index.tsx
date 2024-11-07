import { FC } from "react"
import { Board } from "../Board"
import { IBoard, PLAYER } from "../../../../core/interfaces"
import './style.scss';

interface Props {
  board: IBoard;
  currentPlayer: PLAYER;
  winner: PLAYER | null;
  isDraw: boolean;
  handleDrop: (colIndex: number) => void;
  handleReset: () => void;
}

export const Game: FC<Props> = ({
  board,
  currentPlayer,
  winner,
  isDraw,
  handleDrop,
  handleReset
}) => {

  return (
    <div className="game__background">
          <h1>Connect 4</h1>
          <p className="game__p">{`play ${currentPlayer}`}</p>
          <Board board={board} handleDrop={handleDrop}/>
          <p className="game__p">{winner && `Player ${winner} wins!`}</p>
          <p className="game__p">{isDraw && `Draw!`}</p>
          <button className="game__button" onClick={handleReset}>Reset</button>
        </div>
  )
}