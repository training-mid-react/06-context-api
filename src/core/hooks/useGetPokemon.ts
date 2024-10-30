import { useContext, useEffect } from "react";
import { getPokemon as getPokemonService } from "../services/getPokemon.service";
import { error, getPokemon } from "../../state/cards/actions";
import { AppContext } from "../../state/AppContext";
import { IPokemon } from "../interfaces/pokemon";

export const useGetPokemon = (pokemon: string) => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getPokemonService(pokemon).then((response) => {
      if ("message" in response) {
        dispatch(error(response.message));
        return
      }

      dispatch(getPokemon(response as IPokemon));
    });
  }, []);
}