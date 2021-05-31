import { Router, Request, Response } from "express";
import cors from "cors";

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
router.get("/simpledex/treinador/buscar/:id", treinadorController.buscarTreinador);

//listar todos treinadores
router.get("/simpledex/treinador/listar", treinadorController.listarTreinador);

//alterar dados do treinador
router.put("/simpledex/treinador/alterar", treinadorController.atualizarTreinador);

//excluir treinador usando pokeid
router.delete("/simpledex/treinador/remover/:id", treinadorController.removerTreinador);  



//POKEMON
//cadastrar novo pokemon
router.post("/simpledex/pokemon/cadastrar", pokemonController.cadastrarPokemon);

//buscar pokemon por nome
router.get("/simpledex/pokemon/buscar/:nome", pokemonController.buscarPokemon);

//buscar pokemon por tipo
router.get("/simpledex/pokemon/buscarPorTipo/:tipo", pokemonController.buscarPokemonPorTipo);

//listar todos pokemon
router.get("/simpledex/pokemon/listar", pokemonController.listarPokemon);

//alterar dados do pokemon
router.put("/simpledex/pokemon/alterar", pokemonController.atualizarPokemon);

//excluir pokemon por nome
router.delete("/simpledex/pokemon/remover/:nome", pokemonController.removerPokemon);  



//TREINADORXPOKEMON (INTERACOES ENTRE TREINADOR E POKEMON)
//cadastrar relacionamento entre treinadore e pokemon
router.post("/simpledex/treinadorPokemon/cadastrar", treinadorPokemonController.cadastrarTreinadorPokemon);


//listar todos treinadores e seus pokemon
router.get("/simpledex/treinadorPokemon/listar", treinadorPokemonController.listarTreinadorPokemon);


//buscar um treinador e apenas pokemon relacionados a ele
router.get("/simpledex/treinadorPokemon/listarPokemon/:id", treinadorPokemonController.listarPokemonDoTreinador);

//buscar pokemon e todos os treinadores que ja encontraram ele
router.get("/simpledex/treinadorPokemon/listarTreinadores/:id", treinadorPokemonController.listarTreinadoresPorPokemon);

//busca a quantidade de pokemon de um treinador por tipo de pokemon
router.get("/simpledex/treinadorPokemon/contarPokemonPorTipo/:id", treinadorPokemonController.quantidadePokemonDoTreinadorPorTipo);

//busca a quantidade de pokemon de um treinador por tipo de pokemon
router.get("/simpledex/treinadorPokemon/contarPokemon/:id", treinadorPokemonController.quantidadePokemonDoTreinador);


export { router };

