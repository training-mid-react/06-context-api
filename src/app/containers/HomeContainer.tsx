import Cards from '@ui/components/Cards';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import { useGetPokemon } from '../core/hooks/useGetPokemon';

export default function HomeContainer() {
  const {
    handleAddCard,
    handleRemoveCard,
    pokemon,
    cards
  } = useGetPokemon('pikachu');

  return (
    // LLamar los componentes de la carpeta ui y estructurarlos por medio de un layout
    <LayoutMain>
      <Cards 
        handleAddCard={handleAddCard}
        handleRemoveCard={handleRemoveCard}
        pokemon={pokemon}
        cards={cards}
       />
    </LayoutMain>
  );
}