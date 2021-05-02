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
        },
        pokeId:
        {
            type: String,
            unique: true,
            required: [true, "Insira um novo ID único!"]
        }
    },
    {
        timestamps: true,
    }
);

export {treinadorSchema};