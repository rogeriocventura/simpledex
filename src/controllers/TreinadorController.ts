import {Request, Response} from "express";


class TreinadorController{
    listar(request: Request, response: Response)
    {
        const dadosTreinador = {
            nome:"teste"
        }
        response.json(dadosTreinador);
    }

}