import {model, Schema} from "mongoose";
import { mongoose } from "../config/database";
import pokemonSchema from "./PokemonSchema";
import treinadorSchema from "./TreinadorSchema";

const treinadorPokemonSchema = new Schema(
    {
        treinador:[treinadorSchema],
        pokemon:[pokemonSchema]        
    },
    {
        timestamps:true,
    }
);


export default model("treinadorPokemon",treinadorPokemonSchema);