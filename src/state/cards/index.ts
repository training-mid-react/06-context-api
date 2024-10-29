import { ICard } from "../../core/interfaces/card";
import { ICardsState } from "../../core/interfaces/cardsState";
import { cardsActions } from "./actions";

export const cardsInitialState: ICardsState = {
  cards: []
}

export const cardsCases = {
  [cardsActions.FLIPP_CARD]: (state: ICardsState) => {
    const card = state.cards.find(card => !card.flipped);
    if (card) {
      return {
        ...state,
        cards: state.cards.map(card => ({
          ...card,
          flipped: true,
        })),
      };
    }
    return state;
  },
  [cardsActions.ADD_CARD]: (state: ICardsState, payload: ICard) => {
    return {
      ...state,
      cards: [...state.cards, payload],
    };
  },
  [cardsActions.REMOVE_CARD]: (state: ICardsState, payload: number) => {
    return {
      ...state,
      cards: state.cards.filter(card => card.id !== payload),
    };
  },
}