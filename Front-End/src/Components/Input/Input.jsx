//Bootstrap
import { Form, Table } from "react-bootstrap";
//Components
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo";
import { Header } from "../../Components/Header/Header";
import { Menu } from "../../Components/Menu/Menu";
//Hooks
import { useEffect, useState, useRef } from "react";
//API Functions
import {
  criarViagem,
  buscandoViagens,
  atualizarViagem,
  deletarViagem,
} from "../../Services/api";

export function Input() {
  const form = useRef();
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [message, setMessage] = useState("");
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editId, setEditId] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    async function fetchExistingData() {
      try {
        const existingData = await buscandoViagens();
        setTableData(existingData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchExistingData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRow = {
      usuario: nome,
      cidade: cidade,
      estado: estado,
      comentario: message,
    };

    const formData = new FormData();
    formData.append("usuario", nome);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    formData.append("comentario", message);
    formData.append("file", arquivo);

    try {
      if (editIndex !== -1) {
        const id = editId;
        await atualizarViagem(id, formData);
        const newData = [...tableData];
        newData[editIndex] = { ...newRow, _id: id, arquivoNome: arquivo.name };
        setTableData(newData);
        setEditIndex(-1);
        setEditId("");
        setEditingMode(false);
      } else {
        const addedRow = await criarViagem(formData);
        setTableData([
          ...tableData,
          { ...addedRow, arquivoNome: arquivo.name },
        ]);
      }
      // Reset form fields and file input
      setNome("");
      setCidade("");
      setEstado("");
      setMessage("");
      setArquivo(null);

      // Reset the form
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar os dados. Por favor, tente novamente mais tarde.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setArquivo(selectedFile);
  };

  const handleEditar = async (id, index) => {
    setEditIndex(index);
    setEditId(id);
    setEditingMode(true);

    const row = tableData.find((data) => data._id === id);
    if (row) {
      setNome(row.usuario);
      setCidade(row.cidade);
      setEstado(row.estado);
      setMessage(row.comentario);
      setArquivo(null);
    }
  };

  const handleExcluir = async (index) => {
    try {
      const id = tableData[index]._id;
      await deletarViagem(id);
      const newData = [...tableData];
      newData.splice(index, 1);
      setTableData(newData);
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir os dados. Por favor, tente novamente mais tarde.");
    }
  };

  const handleCancelarEdicao = () => {
    setEditingMode(false);
    setEditIndex(-1);
    setEditId("");
    setNome("");
    setCidade("");
    setEstado("");
    setMessage("");
    setArquivo(null);
  };

  const children = (
    <>
      <Form ref={form} onSubmit={handleSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="cidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira a cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="estado">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="comentario">
          <Form.Label>Comentários</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Faça seus comentários"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="arquivo">
          <Form.Label>Arquivo</Form.Label>
          {editingMode ? (
            <Form.Control type="file" onChange={(e) => handleFileChange(e)} />
          ) : (
            <p>{arquivo ? arquivo.name : "Nenhum arquivo selecionado"}</p>
          )}
        </Form.Group>

        <input
          type="submit"
          value={editingMode ? "Atualizar Registro" : "Enviar"}
        />
        {editingMode && (
          <button onClick={() => handleCancelarEdicao()}>Cancelar</button>
        )}
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Comentario</th>
            <th>Arquivo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.usuario}</td>
              <td>{row.cidade}</td>
              <td>{row.estado}</td>
              <td>{row.comentario}</td>
              <td>{row.arquivoNome}</td>
              <td>
                <button onClick={() => handleEditar(row._id, index)}>
                  Editar
                </button>
                <button onClick={() => handleExcluir(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );

  return (
    <>
      <Header />
      <Menu />
      <CaixaConteudo children={children} />
    </>
  );
}
