import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './ModalFile.module.css';

export const ModalFile = ({ onClose, selectedImage }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    onClose(); // Chamada à função de fechamento do modal no componente pai (City)
  };

  return (
    <>
      {showModal && (
        <div className={`modal show ${styles.modal}`}>
          <Modal.Dialog>
            <Modal.Header closeButton={false}>
              <Modal.Title>
                Modal 1
              </Modal.Title>
              <button className={styles.closeButton} onClick={handleClose} />
            </Modal.Header>

            <Modal.Body>
            {selectedImage && <img src={selectedImage} alt="Imagem" />}
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
