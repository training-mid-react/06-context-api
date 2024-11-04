import { HTTP_METHODS } from '../constants/httpMethods';
import { urlResources } from '../constants/urlResources';
import { IError } from '../interfaces/error';
import { IPokemon } from '../interfaces/pokemon';
import { pokemonMapper } from '../mappers/apiTo/pokemon.mapper';
import { http } from './generals/http';

export const getPokemon = async (
    pokemon: string
): Promise<IPokemon | IError> => {
    const url = urlResources.getPokemon(pokemon);

    try {
        const response = await http(url, HTTP_METHODS.GET);
        return pokemonMapper(response);
    } catch (error: any) {
        return { message: error.message };
    }
};
