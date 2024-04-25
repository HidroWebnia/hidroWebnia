import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

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
        <h1>PowerTrack</h1>
        <h2>Central de Controle de Dispositivos Elétricos</h2>
        <p>Bem-vindo à nossa plataforma de monitoramento de dispositivos! Aqui você encontrará uma solução completa para acompanhar e analisar dados 
            essenciais de seus dispositivos elétricos. Nossa página oferece uma interface intuitiva e poderosa para visualizar informações detalhadas 
            sobre corrente, consumo de energia em kWh, tensão e uma variedade de outros parâmetros cruciais.
        </p>
        <Button variant="dark" size="lg">
          Fale Conosco!
        </Button>
    </StyleAbout>
  )
}

export default About