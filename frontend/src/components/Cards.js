import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  background-color: ${props => (props.espStatus ? 'green' : 'red')};
  width: 286px;
  margin: 10px;
  border-radius: 12px;
  transition: background-color 0.3s ease;
`;

const Image = styled.img`
  width: 286px;
  height: 286px;
  cursor: pointer;
  border-radius: 12px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Cards = ({ device }) => {
  return (
    <Container>
      <CardContainer espStatus={device.espStatus}>
        <Link to={`/medidas/${device._id}`}>
          <Image src={`http://localhost:3080/${device.image}`} alt="Imagem" />
        </Link>
        <Content>
          <Title>{device.name}</Title>
        </Content>
      </CardContainer>
    </Container>
  );
};

export default Cards;
