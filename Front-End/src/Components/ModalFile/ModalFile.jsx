//Bootstrap
import Modal from 'react-bootstrap/Modal';
//Css
import styles from './ModalFile.module.css';
//Hooks
import React, { useState } from 'react';

export const ModalFile = ({ onClose, selectedImage }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={`modal ${styles.modal}`}>
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
        </div>
      )}
    </>
  );
};
