import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgBG from '../assets/img-bg.svg';
import imgAbout from '../assets/img-about.svg';
import { AuthContext } from './AuthContext';

const StyleAbout = styled.div`
  align-items: center;
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
  }
  h1 {
    padding-bottom: 2rem;
    color: #97c9a0;
    width: 60%;
    font-size: 42px;

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

  .sobre {
    padding: 96px 96px 0 96px;
    display: flex;
    flex-direction: row;
    @media (max-width: 1024px) {
      padding: 48px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 24px;
    }
  }
  .sobre p {
    color: #717171;
    margin-top: 36px;
    width: 90%;
    @media (max-width: 768px) {
      margin-top: 24px;
      width: 100%;
      text-align: center;
    }
  }
  h2 {
    color: #181818;
    font-size: 24px;
    width: 90%;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  img {
    width: 50%;
    height: auto;
    margin-left: 20px;

    @media (max-width: 1024px) {
      width: 60%;
    }

    @media (max-width: 768px) {
      width: 80%;
      margin: 24px 0;
    }
  }
`;

const About = () => {

  const {isAuthenticated} = useContext(AuthContext);

  return (
    <StyleAbout>
      <div className="banner">
        <h1>
          Inovando a produção de alimentos com a tecnologia de hidroponia.
        </h1>
        <p>
          Bem-vindo ao HidroWebnia, o seu destino online para tudo relacionado à
          hidroponia! Navegue em nosso vasto catálogo de equipamentos,
          suprimentos e conhecimento especializado para iniciar e aprimorar seu
          próprio jardim hidropônico. Desde sistemas de cultivo até nutrientes
          personalizados, estamos aqui para ajudá-lo a cultivar plantas
          saudáveis e vibrantes, independentemente do espaço que você tenha
          disponível.
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
        ) : (
          <>
          </>
        ) }
      </div>
      <div className="sobre">
        <div>
          <h2>
            Conheça quem somos e como usamos tecnologia para auxiliar
            agricultores na produção de alimentos
          </h2>
          <p className="description">
            HidroWebnia é uma solução inovadora destinada a revolucionar o
            cultivo de alimentos, proporcionando um monitoramento inteligente
            que torna a agricultura mais moderna e eficiente.
            <br />
            <br /> Desenvolvido por Bolsistas/alunos com auxílio de professores
            do IFCE, em uma parceria com o Centro de Inovação e Difusão de
            Tecnologias para o Semiárido (CIDTS).HidroWebnia utiliza uma
            combinação de sensores avançados e tecnologia web para fornecer
            informações essenciais sobre o seu sistema hidropônico.
            <br />
            <br />
            Com HidroWebnia, você está a um passo de transformar seu cultivo em
            um processo mais eficiente e produtivo, garantindo plantas mais
            saudáveis e colheitas mais abundantes. Descubra o futuro da
            agricultura com HidroWebnia.
          </p>
        </div>
        <img src={imgAbout} alt="Sobre nós" />
      </div>
    </StyleAbout>
  );
};

export default About;