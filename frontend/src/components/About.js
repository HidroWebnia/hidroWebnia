import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyleAbout = styled.div`
    align-items: center;
    padding: 5rem;
    h1{
        padding-bottom: 2rem;
    }
    h2{
        padding-bottom: 2rem;
    }
    p{
        padding-bottom: 0.5rem;
    }
`;


const About = () => {
  return (
    <StyleAbout>
        <h1>HidroWebnia</h1>
        <h2>Sistema de Monitoramento de Hidroponia</h2>
        <p>Bem-vindo ao HidroWebnia, o seu destino online para tudo relacionado à hidroponia! Navegue em nosso vasto catálogo de equipamentos, suprimentos e 
          conhecimento especializado para iniciar e aprimorar seu próprio jardim hidropônico. Desde sistemas de cultivo até nutrientes personalizados, 
          estamos aqui para ajudá-lo a cultivar plantas saudáveis e vibrantes, independentemente do espaço que você tenha disponível. 
        </p>
        <Button variant="dark" size="lg" as={Link} to='/mensagens'>
          Fale Conosco!
        </Button>
    </StyleAbout>
  )
}

export default About