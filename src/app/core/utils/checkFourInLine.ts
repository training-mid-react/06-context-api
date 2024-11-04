import { COLS, ROWS } from "@core/constants";
import { OptionsColors } from "@core/types";

interface CheckFourInLine {
    board: OptionsColors[][];
    row: number;
    col: number;
    rowDir: number;
    colDir: number;
}
/**
 * Verifica si hay cuatro piezas en línea en una dirección específica en el tablero.
 *
 * @param {Array<Array<any>>} board - El tablero de juego representado como una matriz.
 * @param {number} row - La fila de la pieza actual.
 * @param {number} col - La columna de la pieza actual.
 * @param {number} rowDir - Dirección vertical (1 para abajo, -1 para arriba).
 * @param {number} colDir - Dirección horizontal (1 para derecha, -1 para izquierda).
 * @returns {boolean} - Retorna true si hay cuatro piezas en línea, false en caso contrario.
 */
export const checkFourInLine = (
  {  board,
    row,
    col,
    rowDir,
    colDir}:CheckFourInLine
): boolean => {
    let count = 0;
    const player = board[row][col];
    // Verificar si hay cuatro piezas en línea en la dirección especificada
    for (let i = -3; i <= 3; i++) {
        const r = row + i * rowDir;
        const c = col + i * colDir;
        if (
            r >= 0 && c >= 0 &&
            r < ROWS && c < COLS &&
            board[r][c] === player
        ) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }
    return false;
};