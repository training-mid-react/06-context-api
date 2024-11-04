import { OptionsColors } from "@core/types";
import { checkFourInLine } from "./checkFourInLine";
import { IPlayer } from "@core/interfaces";
import { checkTie,  } from './checkTie';


/**
 * Verifica si un jugador ha ganado al colocar una pieza en el tablero.
 *
 * Esta función comprueba si hay cuatro piezas en línea en cualquiera de las
 * direcciones: horizontal, vertical y diagonal (tanto de izquierda a derecha
 * como de derecha a izquierda) a partir de la posición especificada.
 *
 * @param {Player[][]} board - El tablero de juego representado como una matriz,
 * donde cada celda contiene un jugador o está vacía.
 * @param {number} row - La fila de la última pieza colocada.
 * @param {number} col - La columna de la última pieza colocada.
 * @returns {string | undefined} - { player }  Retorna el nombre del jugador
 * ganador; de lo contrario retorna undefined.
 */
export const checkWinner = ({board, row, col, players}:{board: OptionsColors[][], row: number, col: number, players: IPlayer[] | undefined}):  string|undefined => {
    const player = board[row][col];
    const isFourInLine = checkFourInLine({board, row, col, rowDir: 0, colDir: 1}) || // horizontal
        checkFourInLine({board, row, col,rowDir: 1,colDir: 0}) || // vertical
        checkFourInLine({board, row, col,rowDir: 1,colDir: 1}) || // diagonal /
        checkFourInLine({board, row, col,rowDir: 1,colDir: -1}); // diagonal \

    const winner = players?.find((p) => p.color === player);
    
  const isATie = checkTie(board);
    
    if ( isFourInLine )  return  winner?.name;
    if (!isFourInLine && isATie ) return "Empate";

 

};