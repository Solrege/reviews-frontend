import React from 'react'
import { Modal } from 'react-bootstrap'
import NewPost from './NewPost'

const ModalPost = ({ modalVisible, ocultarModal, review }) => {
  const handleClose = () => {
    ocultarModal()
  }

  return (
    <>
      <Modal show={modalVisible} onHide={handleClose} size="lg" centered={true}>
        <div className="img-top-modal d-flex justify-content-center align-items-start">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <Modal.Body>
          <div className="formulario-content">
            <NewPost cerrarModal={handleClose} review={review} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ModalPost