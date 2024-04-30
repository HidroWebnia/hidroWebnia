import React, { useState } from 'react'
import { Button, Form, Container } from "react-bootstrap"
import { sendMail } from '../services/api'


const FormContact = () => {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [message, setMessage] = useState()

    function manipulateSubmit(e){
        e.preventdefault()
        const newSendEmail = {
            email: email,
            name: name,
            message: message
        }
        sendMail(newSendEmail)
    }
  return (
    <Container>
        <Form id='form' onSubmit={manipulateSubmit}>
        <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Coloque o seu Email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
        type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder="Coloque o seu Nome"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control 
        as='textarea' 
        rows='2' 
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        placeholder="Coloque uma Mensagem"/>
        </Form.Group>

        <Button variant="primary" type="submit">
        Enviar
        </Button>

    </Form>
  </Container>
  )
}

export default FormContact