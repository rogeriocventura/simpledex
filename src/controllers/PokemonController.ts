import {Request, Response} from "express";
import PokemonSchema from "../models/PokemonSchema";


class PokemonController{
    async listarPokemon(request: Request, response: Response)
    {
        const dadosPokemon = await PokemonSchema.find();
        response.status(200).json(dadosPokemon);
    }

    async cadastrarPokemon(request: Request, response: Response)
    {
        try {
            const novoPokemon = await PokemonSchema.create(request.body);
            response.status(201).json({
              objeto: novoPokemon,
              msg: "Novo pokemon cadastrado!",
              erro: false
            });
          } catch (error) 
          {
            if (error.name === 'MongoError' && error.code === 11000) 
            {
                response.status(400).json({
                objeto: error,
                msg: "Falha na validação!! Ja existe um Pokemon com este nome!!",
                erro: true
                });
            }
            else
            {
                response.status(400).json({
                objeto: error,
                msg: "Falha na validação",
                erro: true
                });
            }
          }
    }
    async buscarPokemon (request: Request, response: Response)
    {
        const { name } = request.params;
        const pokemon = await PokemonSchema.find({name:name});
        response.status(200).json(pokemon);
    }

    async removerPokemon (request: Request, response: Response)
    {
        const { name } = request.params;
        const pokemon = await PokemonSchema.deleteOne({name:name});
        response.status(200).json(pokemon);
    }
    async atualizarPokemon (request: Request, response: Response)
    {
        const { name } = request.params;
        const pokemon = await PokemonSchema.updateOne({name:name});
        response.status(200).json(pokemon);
    }
}


export {PokemonController};