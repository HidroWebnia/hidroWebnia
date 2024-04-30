import React from 'react'
import FormContact from '../components/FormContact'
import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
`;

const MessagesStyle = styled.div`
  padding-top: 4rem;
  h1{
    padding-bottom: 4rem;
  }
`;


const Messages = () => {
  return (
    <MessagesStyle>
      <Title>
        <h1>Mensagens</h1>
      </Title>
      <FormContact />
    </MessagesStyle>
  )
}

export default Messages