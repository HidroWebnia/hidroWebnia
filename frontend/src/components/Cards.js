import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap; 
`;

const CardContainer = styled.div`
  background-color: #000000;
  color: #fff;
  width: 286px; 
  margin: 10px; 
`;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Text = styled.p`
  margin-bottom: 5px;
`;

const Cards = ({ projeto }) => {
  return (
    <Container>
      <CardContainer>
        <Link to={`/medidas/${projeto._id}`}>
          <Image src={projeto.image} alt="Imagem"/>
        </Link>
        <Content>
          <Title>{projeto.name}</Title>
          <Text>Kw/h: {projeto.kwh}</Text>
          <Text>Corrente: {projeto.corrente}</Text>
          <Text>Tensão: {projeto.tensao}</Text>
          <Text>F.P: {projeto.fp}</Text>
        </Content>
      </CardContainer>
    </Container>
  )
}

export default Cards
