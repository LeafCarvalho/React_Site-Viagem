import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './ModalFile.module.css'

export const ModalFile = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = ({ imageCard }) => {
    setShowModal(false);
    onClose(); // Chamada à função de fechamento do modal no componente pai (City)
  };

  return (
    <>
      {showModal && (
        <div className={`modal show ${styles.modal}`}>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={handleClose}>
              <Modal.Title>Modal 1</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{imageCard}</p>
            </Modal.Body>

            <Modal.Footer>
              <p>teste</p>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
};