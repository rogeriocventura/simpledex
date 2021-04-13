import { Schema } from "mongoose";


const treinadorSchema = new Schema(
    {
        nome: 
        {
            type: String,
            required: [true, "O campo NOME do treinador é obrigatório!!"]
        },
        email: 
        {
            type: String,
            required: [true, "O campo EMAIL do treinador é obrigatório!!"]
        },
        senha: 
        {
            type: String,
            required: [true, "É necessário definir a SENHA do treinador!!"]
        }
    },
    {
        timestamps: true,
    }
);

export {treinadorSchema};