import {Request, Response} from "express";
import TreinadorPokemonSchema from "../models/TreinadorPokemonSchema";
import TreinadorSchema from "../models/TreinadorSchema";
import PokemonSchema from "../models/PokemonSchema";
import _ from "lodash";

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

    async listarPokemonDoTreinador(request: Request, response: Response)
    {
        const {id} = request.params;
        const treinador = await TreinadorSchema.findOne({pokeId:id}).select('_id');
        const encontrados = await TreinadorPokemonSchema.find({treinador:treinador}).populate('pokemon');
        response.status(200).json(encontrados);
    }


    async listarTreinadoresPorPokemon(request: Request, response: Response)
    {
        const {id} = request.params;
        const pokemon = await PokemonSchema.findOne({nome:id}).select('_id');
        console.log(pokemon);
        const encontrados = await TreinadorPokemonSchema.find({pokemon:pokemon}).populate('treinador');
        response.status(200).json(encontrados);
    }


    async quantidadePokemonDoTreinadorPorTipo(request: Request, response: Response)
    {
        const {id} = request.params;
        const treinador = await TreinadorSchema.findOne({pokeId:id}).select('_id');
        const encontrados = JSON.parse(JSON.stringify(await TreinadorPokemonSchema.find({treinador:treinador}).populate('pokemon')));
        const trata = _(encontrados).countBy('pokemon.tipo');
        response.status(200).json(trata);
    }

    async quantidadePokemonDoTreinador(request: Request, response: Response)
    {
        const {id} = request.params;
        const treinador = await TreinadorSchema.findOne({pokeId:id}).select('_id');
        const encontrados = await TreinadorPokemonSchema.find({treinador:treinador}).populate('pokemon').count();
        response.status(200).json(encontrados);
    }
}


export {TreinadorPokemonController};