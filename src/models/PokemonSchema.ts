import {model, Schema} from "mongoose";
import { mongoose } from "../config/database";


const pokemonSchema = new Schema(
    {
        nome: 
        {
            type: String,
            required: [true, "O campo NOME do Pokemon é obrigatório!!"],
            unique:true
        },
        descricao: 
        {
            type: String,
            required: [true, "A descrição do Pokemon é obrigatório!!"]
        },
        tipo: 
        {
            type: String,
            required: [true, "É necessário definir a qual o tipo do Pokemon!!"]
        }
    },
    {
        timestamps: true,
    }
);

export default model("pokemon",pokemonSchema);