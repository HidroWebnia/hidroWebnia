import React from 'react'
import { Form } from 'react-bootstrap'

const FormEdit = ({ name, setName, description, setDescription, image, setImage }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome do Device</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o Nome de Seu Device"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descricao">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite uma Descrição para o seu Device"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="imagem">
        <Form.Label>Imagem</Form.Label>
        <Form.Control 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
      </Form.Group>
    </Form>
  )
}

export default FormEdit
