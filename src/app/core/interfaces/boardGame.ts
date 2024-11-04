import { OptionsColors } from '@core/types';
import { IPlayer } from '.';

export interface IBoardGameState {
    winner?: string;
    board: OptionsColors[][];
    players?: IPlayer[];
}
