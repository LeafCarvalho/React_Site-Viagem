import mongoose from "mongoose";

const viagemSchema = new mongoose.Schema(
  {
    id: {type: String},
    usuario: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    Comentario: {type: Number}
  }
);

const viagens = mongoose.model('viagens', viagemSchema);

export default viagens;