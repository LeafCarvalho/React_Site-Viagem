import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { ModalFile } from '../ModalFile/ModalFile'

// CSS
import styles from './City.module.css';

// ICONS
import heart from '../../Assets/Icons/heart.svg'
import chat from '../../Assets/Icons/chat.svg'
import arrowup from '../../Assets/Icons/arrow-up-square.svg'
import bookmark from '../../Assets/Icons/bookmark.svg'

export function City({ picture, user, profileImage }) {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container className={styles.card}>
        <Col>
          <Image src={picture} thumbnail className={styles.thumb} onClick={handleImageClick} />
          <div className={styles.input}>
            <button><img src={heart} alt="curtida" /></button>
            <button><img src={chat} alt="comentário" /></button>
            <button><img src={arrowup} alt="compartilhar" /></button>
            <button><img src={bookmark} alt="salvar" /></button>
          </div>
          <p>Teste</p>
        </Col>
      </Container>

      {showModal && 
      <ModalFile 
      onClose={handleCloseModal} 
      onClick={handleModalClick}
      imageCard={image1}
      />}
    </>
  );
}
