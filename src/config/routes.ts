import { Router, Request, Response } from "express";
import { PokemonController } from "../controllers/PokemonController";
import { TreinadorController } from "../controllers/TreinadorController";
const router = Router();
const treinadorController = new TreinadorController();


router.get("/", (request: Request, response: Response) => {
    response.send("arquivo de rotas testando");
});


//TREINADOR
//cadastrar novo treinador
router.post("/simpledex/treinador/cadastrar", treinadorController.cadastrarTreinador);

//buscar treinador por pokeid
//router.get("/simpledex/treinador/buscar/:id", treinadorController.buscarPorId);

//listar todos treinadores
router.get("/simpledex/treinador/listar", treinadorController.listarTreinador);

//alterar dados do treinador
//router.post("/simpledex/treinador/alterar", treinadorController.alterar);

//excluir treinador usando pokeid
//router.get("/simpledex/treinador/remover/:id", treinadorController.remover);  



  


//POKEMON




export { router };

