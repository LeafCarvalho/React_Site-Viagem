import axios from "axios";

const viagensAPI = axios.create({
  baseURL: "http://localhost:3000/viagens",
});

async function buscandoViagens() {
  try {
    const response = await viagensAPI.get('/');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function criarViagem(novaViagem) {
  try {
    const response = await viagensAPI.post("/", novaViagem);
    return response.data;
  } catch (error) {
    console.error(`${error} - Erro ao inserir registro de viagem.`);
    throw error;
  }
}

async function atualizarViagem(id, viagemAtualizada) {
  try {
    const response = await viagensAPI.put(`/${id}`, viagemAtualizada);
    return response.data;
  } catch (error) {
    console.error(`${error} - Erro ao atualizar o registro de viagem`);
    throw error;
  }
}

async function deletarViagem(id) {
  try {
    const response = await viagensAPI.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir registro:", error);
    throw error;
  }
}


export {
  buscandoViagens,
  criarViagem,
  atualizarViagem,
  deletarViagem
};
