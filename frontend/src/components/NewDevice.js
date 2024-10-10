import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addRegister } from '../services/api';

const NewDevice = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name, description, email, image };
        addRegister(data);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu Email" 
                    required 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome da Hidroponia</Form.Label>
                <Form.Control 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite o Nome da Hidroponia" 
                    required 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição</Form.Label>
                <Form.Control 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Digite uma Descrição Para a sua Hidroponia" 
                    required 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imagem">
                <Form.Label>Imagem</Form.Label>
                <Form.Control 
                    type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    required 
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>Salvar</Button>&nbsp;&nbsp;
            <Button variant="secondary" type="button" onClick={() => window.location.reload()}>Cancelar</Button>
        </Form>
    );
};

export default NewDevice;
