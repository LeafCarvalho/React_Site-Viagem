//Bootstrap
import { Col, Container, Image } from 'react-bootstrap'
//Css
import styles from './City.module.css';
//Hooks
import React, { useState, useEffect } from 'react';
//Assets
import heart from '../../Assets/Icons/heart.svg';
import bookmark from '../../Assets/Icons/bookmark.svg';
import { ModalFile } from '../ModalFile/ModalFile';

export function City({ picture, user, comment }) {
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
        setShowModal(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showLoading]);

  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL);
    setShowLoading(true);
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
          <Image
            src={picture}
            thumbnail
            className={styles.thumb}
            onClick={() => handleImageClick(picture)}
          />
          <div className={styles.input}>
            <button>
              <img src={heart} alt="curtida" />
            </button>
            <button>
              <img src={bookmark} alt="salvar" />
            </button>
          </div>
          <p>{ comment }</p>
        </Col>
      </Container>
      {showLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingMessage}>Carregando...</div>
        </div>
      )}
      {showModal && (
        <ModalFile onClose={handleCloseModal} selectedImage={selectedImage} />
      )}
    </>
  );
}
