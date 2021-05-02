import {Request, Response} from "express";
import TreinadorSchema from "../models/TreinadorSchema";


class TreinadorController{
    async listarTreinador(request: Request, response: Response)
    {
        const dadosTreinador = await TreinadorSchema.find();
        response.status(200).json(dadosTreinador);
    }

    async cadastrarTreinador(request: Request, response: Response)
    {
        try {
            const novoTreinador = await TreinadorSchema.create(request.body);
            response.status(201).json({
              objeto: novoTreinador,
              msg: "Novo treinador cadastrado!",
              erro: false
            });
          } catch (error) 
          {
            if (error.name === 'MongoError' && error.code === 11000) 
            {
                response.status(400).json({
                objeto: error,
                msg: "Falha na validação!! Ja existe um treinador com este PokeID!!",
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
}


export {TreinadorController};