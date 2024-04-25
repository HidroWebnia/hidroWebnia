import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { addRegister } from '../services/api'

const NewDevice = () => {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()

    const data = {name, description, email, image}

    function click(){
        addRegister(data)
    }

  return (
    <Form>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="text" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Digite seu Email" 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome do Device</Form.Label>
            <Form.Control 
                type="text" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="Digite o Nome do Device" 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
            <Form.Label>Descrição</Form.Label>
            <Form.Control 
                type="text" 
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                placeholder="Digite uma Descrição Para o seu Device" 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
            <Form.Label>Imagem</Form.Label>
            <Form.Control 
                type="text" 
                value={image}
                onChange={(e)=> setImage(e.target.value)}
                placeholder="Digite a Url da Imagem" 
            />
        </Form.Group>

        <Button variant="primary" onClick={()=> click(data.email, data.description, data.name, data.image)}>Salvar</Button>&nbsp;&nbsp;
        <Button variant="secondary" type="submit">Cancelar</Button>
  </Form>
  )
}

export default NewDevice