import { Router, Request, Response } from "express";
//import { CicloController } from "../controllers/CicloController";
const router = Router();
//const cicloController = new CicloController();


router.get("/", (request: Request, response: Response) => {
    response.send("arquivo de rotas testando");
});



//router.get("/ciclo/listar/", cicloController.listar);
//router.get("/ciclo/listar/:param1", cicloController.buscarPorId);
//router.post("/ciclo/cadastrar/", cicloController.cadastrar);
  


export { router };

