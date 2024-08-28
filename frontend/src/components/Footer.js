import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const FooterSection = styled.footer`
  background-color: #2e8b57; 
  color: #fff; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 24px;
  }

  @media (max-width: 480px) {
    padding: 16px 16px;
  }

  .logo-description {
    text-align: center;

    h1 {
      color: #ffffff; 
      font-size: 36px;
      margin-bottom: 16px;
      font-weight: 700;
    }

    p {
      color: #ffffff;
      max-width: 500px;
      font-size: 18px;
      line-height: 1.5;
    }
  }

  .contact-info {
    text-align: center;

    strong {
      color: #ffffff; 
      font-size: 20px;
      display: block;
      margin-bottom: 12px;
      font-weight: 600;
    }

    p {
      color: #ffffff; 
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
`;

const CopyrightSection = styled.div`
  background-color: #000000;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterSection data-aos="fade-up">
        <div className="logo-description">
          <h1>HidroWebnia</h1>
          <p>
            Cultivando com inovação e tecnologia, colhendo com paixão e sustentabilidade: HidroWebnia, onde o verde floresce e o futuro se torna mais saudável!
          </p>
        </div>
        <div className="contact-info">
          <strong>Encontre-nos</strong>
          <p>WhatsApp: (88) 12345-6789</p>
          <p>Email: contato@hidrowebnia.com</p>
          <p>Rod. Pres. Juscelino Kubitschek - Boa Viagem, CE, 63870-000</p>
        </div>
      </FooterSection>

      <CopyrightSection>
        © 2024 HidroWebnia. Todos os direitos reservados.
      </CopyrightSection>
    </>
  );
};

export default Footer;
