import { ICard } from "../../interfaces/card";
import { IPokemon } from "../../interfaces/pokemon";

export const cardsActions = {
  FLIPP_CARD: 'FLIPP_CARD',
  ADD_CARD: 'ADD_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
  GET_POKEMON: 'GET_POKEMON',
  ERROR : 'ERROR',
};

export const flipCard = () => ({
  type: cardsActions.FLIPP_CARD,
});

export const addCard = (card: ICard) => ({
  type: cardsActions.ADD_CARD,
  payload: card,
});

export const removeCard = (cardId: number) => ({
  type: cardsActions.REMOVE_CARD,
  payload: cardId,
});

export const getPokemon = (pokemon: IPokemon) => ({
  type: cardsActions.GET_POKEMON,
  payload: pokemon,
});

export const error = (error: string) => ({
  type: cardsActions.ERROR,
  payload: error,
});