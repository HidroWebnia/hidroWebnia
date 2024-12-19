import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 1px 1px 2px #888;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: width 0.3s, opacity 0.3s;

  &:hover {
    width: 200px;
    opacity: 0.9;
  }

  &:hover span {
    display: block;
  }
`;

const Tooltip = styled.span`
  display: none;
  position: absolute;
  left: 70px;
  bottom: 50%; 
  transform: translateY(100%); 
  background-color: #333;
  color: #FFF;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px; 
  white-space: nowrap;
  z-index: 2000; 
`;

const Icon = styled.i`
  margin-top: 0; 
  font-size: 25px;
`;

const ContactButton = () => (
  <ButtonContainer 
    href="https://wa.me/5588988155616?text=Ol%C3%A1,%20tudo%20bem%20?%20Gostaria%20de%20tirar%20umas%20d%C3%BAvidas%20sobre%20o%20HidroWebnia" 
    target="_blank"
  >
    <Icon className="fab fa-whatsapp" />
    <Tooltip>Entre em contato</Tooltip>
  </ButtonContainer>
);

export default ContactButton;
