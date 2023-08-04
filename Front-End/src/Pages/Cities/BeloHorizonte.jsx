import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '../../Components/City/City'
import { Menu } from '../../Components/Menu/Menu'
import { Header } from '../../Components/Header/Header'
import { CaixaConteudo } from '../../Components/CaixaConteudo/CaixaConteudo'

import styles from './Cities.module.css'

import image1 from '../../Assets/Thumbs/image1.jpg'
import image2 from '../../Assets/Thumbs/image2.jpg'
import image3 from '../../Assets/Thumbs/image3.jpg'

import { useNavigate } from 'react-router-dom';

export const BeloHorizonte = () => {
  const navigate = useNavigate();

  const children = (
    <>
      <div className={styles.novoLocal}>
        <button
          onClick={() => {
            navigate("/mg/belohorizonte/adicionar-post");
          }}
        >
          Novo Local
        </button>
      </div>
      <Row>
        <Col xs={4}>
          <City picture={image1} user="Reginaldo" comment="Teste1" />
        </Col>
        <Col xs={4}>
          <City picture={image2} user="Paula" comment="Teste2" />
        </Col>
        <Col xs={4}>
          <City picture={image3} user="Uriel" comment="Teste3" />
        </Col>
      </Row>
    </>
  );

  return (
    <>
    <Header />
    <Menu />
    <CaixaConteudo children={children}/>
    </>
  )
}