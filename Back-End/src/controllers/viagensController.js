//Files Imports
import viagens from "../models/Viagem.js";
import fs from "fs";

class ViagemController {
  static listarViagens = (req, res) => {
    viagens
      .find()
      .populate("usuario")
      .exec((err, viagens) => {
        res.status(200).json(viagens);
      });
  };

  static listarViagemPorId = (req, res) => {
    const id = req.params.id;

    viagens
      .findById(id)
      .populate("usuario", "nome")
      .exec((err, viagens) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id da viagem não localizado.` });
        } else {
          res.status(200).send(viagens);
        }
      });
  };

  static cadastrarViagem = async (req, res) => {
    try {
      const { usuario, cidade, estado, comentario } = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: "Arquivo não encontrado." });
      }

      const novaViagem = new viagens({
        usuario,
        cidade,
        estado,
        comentario,
        src: file.path,
      });

      const viagemSalva = await novaViagem.save();

      res.status(201).json(viagemSalva);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao cadastrar viagem.` });
    }
  };

  static atualizarViagem = async (req, res) => {
    const id = req.params.id;

    try {
      const viagem = await viagens.findById(id);
      if (!viagem) {
        return res.status(404).send({ message: "Viagem não encontrada" });
      }

      const { usuario, cidade, estado, comentario } = req.body;
      const file = req.file;

      if (file) {
        const filePath = viagem.src;
        fs.unlinkSync(filePath);
        viagem.src = file.path;
      }

      viagem.usuario = usuario;
      viagem.cidade = cidade;
      viagem.estado = estado;
      viagem.comentario = comentario;

      await viagem.save();

      res.status(200).send({ message: "Viagem atualizada com sucesso" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static excluirViagem = async (req, res) => {
    const id = req.params.id;

    try {
      const viagem = await viagens.findById(id);
      if (!viagem) {
        return res.status(404).send({ message: "Viagem não encontrada" });
      }

      const filePath = viagem.src;
      fs.unlinkSync(filePath);

      await viagens.findByIdAndDelete(id);
      res.status(200).send({ message: "Viagem removida com sucesso" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default ViagemController;
