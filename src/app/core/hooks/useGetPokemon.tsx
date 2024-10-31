import { useContext, useEffect } from 'react';
import { getPokemon as getPokemonService } from '../services/getPokemon.service';
import { addCard, error, getPokemon, removeCard } from '../state/cards/actions';
import { AppContext } from '../state/AppContext';
import { IPokemon } from '../interfaces/pokemon';

export const useGetPokemon = (pokemon: string) => {
  const { state, dispatch } = useContext(AppContext);

  const handleAddCard = () => {
    dispatch(addCard({
      id: 1,
      icon: <div>Icon</div>,
      flipped: false,
      assert: false,
    }));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(1));
  };
  
  useEffect(() => {
    getPokemonService(pokemon).then((response) => {
      if ('message' in response) {
        dispatch(error(response.message));
        return;
      }

      dispatch(getPokemon(response as IPokemon));
    });
  }, []);

  return {
    pokemon: state.pokemon,
    error: state.error,
    handleAddCard,
    handleRemoveCard,
    cards: state.cards };
};