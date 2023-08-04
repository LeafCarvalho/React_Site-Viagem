import express from "express";
import ViagemController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", ViagemController.listarViagens)
  .get("/livros/busca", ViagemController.listarViagemPorEditora)
  .get("/livros/:id", ViagemController.listarViagemPorId)
  .post("/livros", ViagemController.cadastrarViagem)
  .put("/livros/:id", ViagemController.atualizarViagem)
  .delete("/livros/:id", ViagemController.excluirViagem)

export default router;   