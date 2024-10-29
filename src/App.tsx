import { useContext } from "react";
import { AppContext } from "./state/AppContext";
import { addCard, removeCard } from "./state/cards/actions";

function App() {
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
  return (
    <>
      <h1>Hello World</h1>
      <p>Count: {state.cards.length}</p>
      <button onClick={handleAddCard}>Add Card</button>
      <button onClick={handleRemoveCard}>Remove Card</button>
    </>
  )
}

export default App
