import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

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
      <CopyrightSection>
        © 2024 HidroWebnia. Todos os direitos reservados.
      </CopyrightSection>
    </>
  );
};

export default Footer;
