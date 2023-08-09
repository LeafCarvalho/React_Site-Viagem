//Libs
import express from "express";
//Files imports
import ViagemController from "../controllers/viagensController.js";
import upload from "../config/multer.js";

const router = express.Router();

router
  .get("/viagens", ViagemController.listarViagens)
  .get("/viagens/:id", ViagemController.listarViagemPorId)
  .post("/viagens/", upload.single("file"), ViagemController.cadastrarViagem)
  .put("/viagens/:id", ViagemController.atualizarViagem)
  .delete("/viagens/:id", ViagemController.excluirViagem)

export default router;
