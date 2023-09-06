//Files Imports
import viagens from "../models/Viagem.js";
import fs from 'fs';

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

  static atualizarViagem = (req, res) => {
    const id = req.params.id;

    viagens.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Viagem atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirViagem = (req, res) => {
    const id = req.params.id;

    viagens.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Viagem removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default ViagemController;
