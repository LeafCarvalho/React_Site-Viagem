import { Form, Table } from "react-bootstrap";
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo";
import { Header } from "../../Components/Header/Header";
import { Menu } from "../../Components/Menu/Menu";
import { useEffect, useState, useRef } from "react";
import { criarViagem, buscandoViagens, atualizarViagem, deletarViagem } from "../../Services/api";

export function Input() {
  const form = useRef();
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editId, setEditId] = useState("");

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

  const handleFileChange = (file) => {
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("usuario", nome);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    formData.append("comentario", message);
    formData.append("file", file);
  
    try {
      if (editIndex !== -1) {
        const id = editId;
        await atualizarViagem(id, formData);
        const newData = [...tableData];
        newData[editIndex] = { ...newData, _id: id };
        setTableData(newData);
        

        setNome("");
        setCidade("");
        setEstado("");
        setMessage("");
        setFile(null);
  
        setEditIndex(-1);
        setEditId("");
      } else {
        const addedRow = await criarViagem(formData);
        setTableData([...tableData, addedRow]);
  

        setNome("");
        setCidade("");
        setEstado("");
        setMessage("");
        setFile(null);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting data. Please try again later.");
    }
  };
  

  const handleEditar = async (id, index) => {
    console.log("ID:", id);
    setEditIndex(index);
    setEditId(id);

    const row = tableData.find((data) => data._id === id);
    if (row) {
      setNome(row.usuario);
      setCidade(row.cidade);
      setEstado(row.estado);
      setMessage(row.comentario);
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
      alert("Error deleting data. Please try again later.");
    }
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

        <Form.Label>Comentários</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Faça seus comentários"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <Form.Group controlId="file">
    <Form.Label>Arquivo</Form.Label>
    <Form.Control
      type="file"
      accept=".jpg, .png, .jpeg"
      onChange={(e) => handleFileChange(e.target.files[0])}
    />
  </Form.Group>

        <input type="submit" value={editIndex !== -1 ? "Atualizar Registro" : "Enviar"} />
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
              <td>{row.file}</td>
              <td>
                <button onClick={() => handleEditar(row._id, index)}>Editar</button>
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
