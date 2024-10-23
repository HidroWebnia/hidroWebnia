import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgBG from '../assets/img-bg.svg';
import { AuthContext } from './AuthContext';

const StyleAbout = styled.div`
  .banner {
    background-image: url(${imgBG});
    background-size: cover;
    background-position: center;
    padding: 96px;

    @media (max-width: 768px) {
      padding: 48px;
    }

    @media (max-width: 480px) {
      padding: 24px;
    }

    h1 {
      padding-bottom: 2rem;
      color: #97c9a0;
      width: 60%;
      font-size: 42px;
      text-align: left;

      @media (max-width: 768px) {
        width: 80%;
        font-size: 32px;
      }

      @media (max-width: 480px) {
        width: 100%;
        font-size: 24px;
      }
    }

    p {
      padding-bottom: 0.5rem;
      color: #fff;
      width: 60%;
      text-align: left;

      @media (max-width: 768px) {
        width: 80%;
      }

      @media (max-width: 480px) {
        width: 100%;
      }
    }

    .bt-login,
    .bt-register {
      padding: 8px 36px;
      border: none;
      border-radius: 4px;
      margin: 0 12px 12px 0;
      transition: background-color 0.3s ease;

      @media (max-width: 480px) {
        padding: 6px 24px;
        margin: 0 8px 8px 0;
      }
    }

    .bt-login {
      background-color: #2e8b57;
      color: #fff;
    }

    .bt-login:hover {
      background-color: white;
      color: #000;
    }

    .bt-register {
      background-color: #fff;
      color: #000;
      border: 1px solid #97c9a0;
    }

    .bt-register:hover {
      background-color: #2e8b57;
      color: #fff;
    }
  }

  .benefits-title {
    margin: 40px 0 20px;
    text-align: center;
    font-size: 28px;
    color: #000;
  }

  .benefits-subtitle {
    text-align: center;
    font-size: 18px;
    color: #555;
    margin-bottom: 40px;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 18px;
  }

  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 150px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    .icon {
      font-size: 50px; 
    }

    .title {
      margin-top: 10px;
      font-weight: bold;
      color: #000;
    }
  }
`;

const About = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <StyleAbout>
      <div className="banner" data-aos="fade-up" data-aos-delay="200">
        <h1>Inovando a produção de alimentos com a tecnologia de hidroponia.</h1>
        <p>
          Bem-vindo ao HidroWebnia, o seu destino online para tudo relacionado à hidroponia!
          Navegue em nosso vasto catálogo de equipamentos, suprimentos e conhecimento especializado
          para iniciar e aprimorar seu próprio jardim hidropônico. Desde sistemas de cultivo até nutrientes
          personalizados, estamos aqui para ajudá-lo a cultivar plantas saudáveis e vibrantes, independentemente
          do espaço que você tenha disponível.
        </p>
        {!isAuthenticated ? (
          <>
            <Link to="/login">
              <button className="bt-login">Entrar</button>
            </Link>
            <Link to="/cadastro">
              <button className="bt-register">Cadastrar</button>
            </Link>
          </>
        ) : null}
      </div>

      <h2 className="benefits-title">Benefícios do HidroWebnia</h2>
      <h3 className="benefits-subtitle">Maximizando a eficiência e produtividade da sua produção hidropônica.</h3>

      <div className="categories" data-aos="fade-up" data-aos-delay="200">
        <div className="category">
          <div className="icon">🌱</div>
          <div className="title">Cultivo Sustentável</div>
        </div>
        <div className="category">
          <div className="icon">💧</div>
          <div className="title">Economia de Água</div>
        </div>
        <div className="category">
          <div className="icon">📊</div>
          <div className="title">Monitoramento em Tempo Real</div>
        </div>
        <div className="category">
          <div className="icon">📅</div>
          <div className="title">Automação de Rotinas</div>
        </div>
      </div>

      <div className="categories" data-aos="fade-up" data-aos-delay="200">
        <div className="category">
          <div className="icon">🔒</div>
          <div className="title">Segurança de Dados</div>
        </div>
        <div className="category">
          <div className="icon">🌍</div>
          <div className="title">Sustentabilidade Ambiental</div>
        </div>
        <div className="category">
          <div className="icon">🚀</div>
          <div className="title">Acesso a Tecnologias Avançadas</div>
        </div>
        <div className="category">
          <div className="icon">📈</div>
          <div className="title">Melhoria da Qualidade do Produto</div>
        </div>
      </div>
    </StyleAbout>
  );
};

export default About;
