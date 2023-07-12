import { Header } from "../../Components/Header/Header";
import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { Menu } from "../../Components/Menu/Menu";
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo";

export function Input() {
  const form = useRef();
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [message, setMessage] = useState("");

  const children = (
    <>
      <Form ref={form}>
        <Form.Group controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="foto">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
            }}
          />
        </Form.Group>

        <Form.Label>Comentários</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Faça seus comentários"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </Form>
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