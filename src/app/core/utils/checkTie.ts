import { OptionsColors } from "@core/types";

/**
 * Verifica si el juego ha terminado en empate.
 *
 * Esta función cuenta la cantidad de colores "red" y "blue" en la matriz `board` y 
 * determina si ambos colores tienen un conteo de 21. 
 * Si ambos tienen 21, se considera un empate.
 *
 * @param {OptionsColors[][]} board - Una matriz bidimensional que representa el estado del juego,
 * donde cada elemento puede ser "red", "blue", o `null`.
 * @returns {boolean} Retorna `true` si hay un empate (21 "red" y 21 "blue"), 
 * de lo contrario, retorna `false`.
 */
export const checkTie = (board: OptionsColors[][]): boolean => {
    let conteo = {
        red: 0,
        blue: 0
    };

    board.forEach(row => {
        row.forEach(color => {
            if (color ==="red") {
                conteo.red += 1;
            } else if (color === 'blue') {
                conteo.blue += 1;
            }
        });
    });

    return conteo.blue === 21 && conteo.red === 21;
}