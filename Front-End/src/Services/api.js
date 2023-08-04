import axios from "axios";

const viagensAPI = axios.create({ baseURL: "http://localhost:3000/" });

async function buscandoViagens() {
  const response = await viagensAPI.get('/');
  return response.data;
}

async function criarViagem(novaViagem) {
  try {
    const response = await viagensAPI.post("/", novaViagem);
    return response.data
  } catch (error) {
    console.error(`${error} - Erro ao inserir registro de viagem.`);
    throw error;
  }
}

async function atualizarViagem(id, viagemAtualizada) {
  try {
    const response = await livrosAPI.put(`${id}`, viagemAtualizada);
    return response.data
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
    console.error(`${error} - Erro ao excluir registro de viagem.`);
    throw error;
  }
}

export { buscandoViagens, criarViagem, atualizarViagem, deletarViagem}