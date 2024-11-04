import { ICard } from './card';
import { IPokemon } from './pokemon';

export interface ICardsState {
    cards: ICard[];
    pokemon: IPokemon | null;
    error: string | null;
}
