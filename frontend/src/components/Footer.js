import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.div`
  background-color: #2e8b57;
  padding: 36px 96px;

  @media (max-width: 768px) {
    padding: 24px 48px;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
  }

  .footer {
    text-align: center;
    font-size: 16px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const Footer = styled.footer`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  padding: 64px 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  img,
  .titulo {
    display: block;
    font-weight: 600;
    margin-bottom: 24px;
  }

  strong {
    color: #fff;
  }

  nav a {
    color: #fff;
    display: block;
    margin-bottom: 16px;
    text-decoration: none;
  }

  p {
    margin-bottom: 16px;
    max-width: 350px;
    color: #fff;
  }
`;

const CombinedFooter = () => {
  return (
    <>
      <Footer>
        <div>
          <h1><span>HidroWebnia</span></h1>
          <p>Cultivando com inovação e tecnologia, colhendo com paixão e sustentabilidade: HydroLife, onde o verde floresce e o futuro se torna mais saudável!</p>
        </div>
        <div>
          <strong className="titulo">Encontre-nos</strong>
          <p>WhatsApp:</p>
          <p>Email:</p>
          <p>Endereço: </p>
        </div>
      </Footer>
      <StyleFooter>
        <div className="footer">
          © 2024 HidroWebnia. Todos os direitos reservados.
        </div>
      </StyleFooter>
    </>
  );
};

export default CombinedFooter;