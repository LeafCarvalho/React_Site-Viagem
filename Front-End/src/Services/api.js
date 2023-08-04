import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:3000/livros" });

async function getLivros() {
  const response = await livrosAPI.get("/");
  return response.data;
}

async function criarLivro(novoLivro) {
  try {
    // Faz uma requisição POST para a API com os dados do novo livro
    const response = await livrosAPI.post("/", novoLivro);

    // Retorna os dados do livro criado pela API (opcional)
    return response.data;
  } catch (error) {
    // Trata erros em caso de falha na criação do livro
    console.error("Erro ao criar livro:", error);
    throw error;
  }
}

async function deleteLivro(id) {
  try {
    // Faz uma requisição DELETE para a API com o ID do livro a ser excluído
    const response = await livrosAPI.delete(`/${id}`);

    // Retorna a resposta da API (opcional)
    return response.data;
  } catch (error) {
    // Trata erros em caso de falha na exclusão do livro
    console.error("Erro ao excluir livro:", error);
    throw error;
  }
}

async function updateLivro(id, livroAtualizado) {
  try {
    // Faz uma requisição PUT para a API com o ID do livro e os dados atualizados
    const response = await livrosAPI.put(`/${id}`, livroAtualizado);

    // Retorna os dados do livro atualizado pela API (opcional)
    return response.data;
  } catch (error) {
    // Trata erros em caso de falha na atualização do livro
    console.error("Erro ao atualizar livro:", error);
    throw error;
  }
}

export { getLivros, criarLivro, deleteLivro, updateLivro };
