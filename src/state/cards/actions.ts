import { ICard } from "../../core/interfaces/card";

export const cardsActions = {
  FLIPP_CARD: 'FLIPP_CARD',
  ADD_CARD: 'ADD_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
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