import {Request, Response} from "express";
import TreinadorPokemonSchema from "../models/TreinadorPokemonSchema";


class TreinadorPokemonController{
    async listarTreinadorPokemon(request: Request, response: Response)
    {
        const dadosTreinadorPokemono = await TreinadorPokemonSchema.find().populate('treinador').populate('pokemon');
        response.status(200).json(dadosTreinadorPokemono);
    }

    async cadastrarTreinadorPokemon(request: Request, response: Response)
    {
        try {
            const novoTreinadorPokemon = await TreinadorPokemonSchema.create(request.body);
            response.status(201).json({
              objeto: novoTreinadorPokemon,
              msg: "Novo pokemon cadastrado para o treinador!",
              erro: false
            });
          } catch (error) {
            response.status(400).json({
              objeto: error,
              msg: "Falha na validação",
              msg2: "Falha na validação2",
              erro: true
            });
          }
    }
}


export {TreinadorPokemonController};