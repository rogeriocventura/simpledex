import {model, Schema} from "mongoose";
import { mongoose } from "../config/database";
import pokemonSchema from "./PokemonSchema";
import treinadorSchema from "./TreinadorSchema";

const treinadorPokemonSchema = new Schema(
    {
        treinador:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'treinador'
        },
        pokemon:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'pokemon'
        },
        
    },
    {
        timestamps:true,
    }
);


export default model("treinadorPokemon",treinadorPokemonSchema);