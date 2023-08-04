//Libs
import axios from "axios";

const viagensAPI = axios.create({ baseURL: "http://localhost:3000/viagens" });

async function buscandoViagens() {
  try {
    const response = await viagensAPI.get('/');
    console.log(response.data); // Verificar se a propriedade _id está presente nos objetos
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
    console.log("ID:", id);
    console.log("Viagem Atualizada:", viagemAtualizada);
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
    console.log(id)
    return response.data;
  } catch (error) {
    console.error(`${error} - Erro ao excluir registro de viagem.`);
    throw error;
  }
}

export { buscandoViagens, criarViagem, atualizarViagem, deletarViagem };
