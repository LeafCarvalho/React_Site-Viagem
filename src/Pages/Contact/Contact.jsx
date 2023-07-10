import { Header } from "../../Components/Header/Header"
import { useState, useRef } from 'react';
import { Form, Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { Menu } from "../../Components/Menu/Menu";
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo";
import { ModalFile } from '../../Components/ModalFile/ModalFile'

export function Contact() {
  const form = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameFocused, setNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [messageFocused, setMessageFocused] = useState(false)

  const children = (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder={nameFocused ? '' : "Digite o seu nome"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder={emailFocused ? '' : "ex@exemplo.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)} />
        </Form.Group>

        <Form.Label>Mensagem</Form.Label>
        <Form.Control
        as="textarea"
          placeholder={messageFocused ? '' : "Digite sua mensagem"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setMessageFocused(true)}
          onBlur={() => setMessageFocused(false)} />
        <input type="submit" value="Enviar" />
      </Form>
      </>
  )

  function sendEmail(e) {
    e.preventDefault();

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    } else if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
  
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
  
    emailjs.send("service_bq3t8gg", "template_oksxkyk", templateParams, "HM-T9UXuknXCpGgWW")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        form.current.reset(); // Redefinir o formulário
      }, (err) => {
        console.log("ERRO", err);
      })
  }  

  return (
    <>
      <Header />
      <Menu />
      <CaixaConteudo children={children}/>
    </>
  );
}
