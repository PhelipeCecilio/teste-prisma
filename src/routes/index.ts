import express from "express";
import { VagaController } from "../controllers/MessageController";

const routes = express.Router();
routes.post("/vaga", VagaController.createVaga);
routes.get("/vaga/:id", VagaController.getVagaById);
routes.get("/vaga", VagaController.getVagas);
routes.put("/vaga/:id", VagaController.updateVagaById);
routes.delete("/vaga/:id", VagaController.deleteVagaById);

export default routes;