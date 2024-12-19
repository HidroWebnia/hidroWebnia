import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalDelete = ({ show, setshow, escCurrent, id, email, children }) => {

  const action = () => {
    escCurrent.callback(id, children[1].props)
    setshow(false)
  }

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setshow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ color: '#000000'}}> 
          <Modal.Title>
            {escCurrent.header}<br />
            {id} <br />
            {email}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: '#000000' }}>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshow(false)}>Cancelar</Button>&nbsp;&nbsp;
          <Button variant={escCurrent.variant} onClick={() => action()}>{escCurrent.label}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalDelete

