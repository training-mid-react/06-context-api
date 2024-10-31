import { ICard } from  '../../../core/interfaces/card';
import { IPokemon } from '../../../core/interfaces/pokemon';

interface Props {
  cards: ICard[];
  pokemon: IPokemon | null;
  handleAddCard: () => void;
  handleRemoveCard: () => void;
}

function Cards({ cards, pokemon, handleAddCard, handleRemoveCard }: Props) {
  return (
    <>
      <h1>Hello World</h1>
      <p>Count: {cards?.length}</p>
      <button onClick={handleAddCard}>Add Card</button>
      <button onClick={handleRemoveCard}>Remove Card</button>

      <article>
        <h4>{pokemon?.name}</h4>
        <p>{pokemon?.type}</p>
        <img src={pokemon?.image} alt={pokemon?.name} />
      </article>
    </>
  );
}

export default Cards;