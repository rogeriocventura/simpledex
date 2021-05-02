import {Request, Response} from "express";
import TreinadorPokemonSchema from "../models/TreinadorPokemonSchema";


class TreinadorPokemonController{
    async listarTreinadorPokemon(request: Request, response: Response)
    {
        const dadosTreinadorPokemono = await TreinadorPokemonSchema.find();
        response.status(200).json(dadosTreinadorPokemono);
    }

    async cadastrarTreinadorPokemon(request: Request, response: Response)
    {
        try {
            const novoTreinadorPokemono = await TreinadorPokemonSchema.create(request.body);
            response.status(201).json({
              objeto: novoTreinadorPokemono,
              msg: "Novo pokemon cadastrado!",
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