import { Schema } from "mongoose";


const pokemonSchema = new Schema(
    {
        nome: 
        {
            type: String,
            required: [true, "O campo NOME do treinador é obrigatório!!"]
        },
        descricao: 
        {
            type: String,
            required: [true, "A descrição do Pokemon é obrigatório!!"]
        },
        tipo: 
        {
            type: String,
            required: [true, "É necessário definir a SENHA do treinador!!"]
        }
    },
    {
        timestamps: true,
    }
);

export {pokemonSchema};