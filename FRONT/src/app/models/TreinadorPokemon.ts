import { Pokemons } from "./Pokemons";
import { Treinadores } from "./Treinadores";

export class TreinadorPokemon{
    _id ?: String;
    treinador ?: Treinadores;
    pokemon ?: Pokemons;
    createdAt ?: Date;
    updatedAt ?: Date;
}