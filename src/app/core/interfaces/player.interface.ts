import { OptionsColors } from '@core/types';

export interface IPlayer {
    id: number;
    name: string;
    color: OptionsColors;
    isCurrentPlayer: boolean;
}
