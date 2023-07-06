import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '../../Components/City/City'
import { Menu } from '../../Components/Menu/Menu'
import { Header } from '../../Components/Header/Header'
import { CaixaConteudo } from '../../Components/CaixaConteudo/CaixaConteudo'

import image1 from '../../Assets/Thumbs/image1.jpg'
import image2 from '../../Assets/Thumbs/image2.jpg'
import image3 from '../../Assets/Thumbs/image3.jpg'

import foto1 from '../../Assets/Icons/profileImage.svg'

export const BeloHorizonte = () => {
  const children = (
    <>
    <Row>
      <Col xs={4}>
        <City
        picture={image1}
        user="Reginaldo"
        profileImage={foto1}
        />
      </Col>
      <Col xs={4}>
        <City
        picture={image2}
        user="Paula"
        profileImage={foto1}
        />
      </Col>
      <Col xs={4}>
        <City
        picture={image3}
        user="Uriel"
        profileImage={foto1}
        />
      </Col>
    </Row>
    </>
  )

  return (
    <>
    <Header />
    <Menu />
    <CaixaConteudo children={children}/>
    </>
  )
}