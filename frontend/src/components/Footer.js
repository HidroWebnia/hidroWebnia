import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #fff;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #2e8b57;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    font-size: 16px;
  }
`;

const CopyrightSection = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer data-aos="fade-up">
      <SocialIcons>
        <a href="https://wa.me/5588988155616?text=Ol%C3%A1,%20tudo%20bem%20?%20Gostaria%20de%20tirar%20umas%20d%C3%BAvidas%20sobre%20o%20HidroWebnia" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:hidrowebnia@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </SocialIcons>

      <CopyrightSection>
        © 2024 HidroWebnia. Todos os direitos reservados.
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
