import viagens from "../models/Livro.js";

class ViagemController {

  static listarViagens = (req, res) => {
    viagens.find()
      .populate('autor')
      .exec((err, viagens) => {
        res.status(200).json(viagens)
  })
  }

  static listarViagemPorId = (req, res) => {
    const id = req.params.id;

    viagens.findById(id)
      .populate('autor', 'nome')
      .exec((err, viagens) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      } else {
        res.status(200).send(viagens);
      }
    })
  }

  static cadastrarViagem = (req, res) => {
    let livro = new viagens(req.body);

    livro.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarViagem = (req, res) => {
    const id = req.params.id;

    viagens.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirViagem = (req, res) => {
    const id = req.params.id;

    viagens.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarViagemPorEditora = (req, res) => {
    const editora = req.query.editora

    viagens.find({'editora': editora}, {}, (err, viagens) => {
      res.status(200).send(viagens);

    })
  }



}

export default ViagemController