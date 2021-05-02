import {model, Schema} from "mongoose";
import { mongoose } from "../config/database";
import {pokemonSchema} from "./PokemonSchema";
import {treinadorSchema} from "./TreinadorSchema";

const treinadorPokemonSchema = new Schema(
    {
        treinador:[treinadorSchema],
        pokemon:[pokemonSchema],
        _id:
        {
            type: mongoose.Schema.Types.ObjectId,
            index:true,
            required:true,
            auto:true,
            unique:true
        }
    },
    {
        timestamps:true,
    }
);


export default model("treinadorPokemon",treinadorPokemonSchema);