import { Router, Request, Response } from "express";
import { PokemonController } from "../controllers/PokemonController";
import { TreinadorController } from "../controllers/TreinadorController";
import { TreinadorPokemonController } from "../controllers/TreinadorPokemonController";
const router = Router();
const treinadorController = new TreinadorController();
const pokemonController = new PokemonController();
const treinadorPokemonController = new TreinadorPokemonController();


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
//cadastrar novo pokemon
router.post("/simpledex/pokemon/cadastrar", pokemonController.cadastrarPokemon);

//buscar pokemon por nome
//router.get("/simpledex/pokemon/buscar/:id", pokemonController.buscarPorId);

//listar todos pokemon
router.get("/simpledex/pokemon/listar", pokemonController.listarPokemon);

//alterar dados do pokemon
//router.post("/simpledex/pokemon/alterar", pokemonController.alterar);

//excluir pokemon por nome
//router.get("/simpledex/pokemon/remover/:id", pokemonController.remover);  



//TREINADORXPOKEMON (INTERACOES ENTRE TREINADOR E POKEMON)
//cadastrar relacionamento entre treinadore e pokemon
router.post("/simpledex/treinadorPokemon/cadastrar", treinadorPokemonController.cadastrarTreinadorPokemon);


//listar todos treinadores e seus pokemon
router.get("/simpledex/treinadorPokemon/listar", treinadorPokemonController.listarTreinadorPokemon);




export { router };

