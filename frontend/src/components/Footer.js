import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.div`
  background-color: #ccddcf;
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

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const Contact = () => {
  return (
    <StyleFooter>
      <div className="footer">
        © 2024 HidroWebnia. Todos os direitos reservados.
      </div>
    </StyleFooter>
  );
};

export default Contact;
