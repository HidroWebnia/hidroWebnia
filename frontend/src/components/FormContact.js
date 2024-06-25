import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { sendMail } from '../services/api';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 36px 96px;

  @media (max-width: 768px) {
    padding: 24px 48px;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
  }

  h2 {
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .form-group {
    margin-bottom: 24px;
  }

  .form-control {
    padding: 12px;

    @media (max-width: 480px) {
      padding: 8px;
    }
  }
`;

const CustomButton = styled.button`
  display: block;
  width: 6.4rem;
  padding: 12px;
  font-size: 16px;
  background-color: #3d684d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }

  &:hover {
    background-color: #85b48c;
  }
`;

const FormContact = () => {
  const [status, setStatus] = useState('Enviar');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const manipulateSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    const newSendEmail = {
      email,
      name,
      message,
    };
    sendMail(newSendEmail);
  };

  return (
    <FormContainer>
      <Form id="form" onSubmit={manipulateSubmit}>
        <h2>Entre em contato conosco através do formulário abaixo</h2>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Coloque o seu Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Coloque o seu Nome"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Coloque uma Mensagem"
          />
        </Form.Group>

        <CustomButton type="submit">
          {status}
        </CustomButton>
      </Form>
    </FormContainer>
  );
};

export default FormContact;
