import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
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

  .card {
    margin-top: 8px;
  }

  .text-action .h1 .p {
    text-align: center;
  }

  .about-section {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    margin-top: 40px;
  }

  .about-section .image-wrapper {
    flex: 1;
    padding-right: 20px;
  }

  .about-section .image-wrapper img {
    width: 100%;
    border-radius: 7px;
  }

  .about-section .content {
    flex: 1;
    padding-left: 20px;
    margin-top: 15px;
  }

  .about-section .content h2 {
    color: #000;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 10px;
  }

  .about-section .content p {
    color: #555;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: left;
  }

  .about-section .content a {
    display: inline-block;
    background-color: red;
    color: white;
    padding: 10px 20px;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 10px;
  }

  .about-section .content a:hover {
    background-color: darkred;
    margin-top: 10px;
  }

  .about-section .gallery {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .about-section .gallery img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 5px;
}

.success {
  margin-top: 10px;
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
      <div className="about-section" data-aos="fade-up" data-aos-delay="300"> 
        <div className="image-wrapper">
          <img src="https://i.pinimg.com/564x/e7/84/40/e78440635911a9134f478f4dc6886c4e.jpg" alt="Suporte técnico" />
        </div>
        <div className="content">
          <h2>Sobre Nós</h2>
          <p>
            No HidroWebnia, estamos mudando a forma como cultivamos alimentos.
            Usamos tecnologia de hidroponia para tornar o cultivo mais sustentável e acessível.
             Nossa equipe é formada por especialistas em agricultura e tecnologia, que trabalham 
             para oferecer soluções simples e eficientes para todos.
            Queremos ajudar você a cultivar plantas saudáveis, seja em casa 
            ou em grandes estufas. Acreditamos que o conhecimento deve ser compartilhado. Por isso, oferecemos suporte técnico
            e recursos educativos para que todos possam aprender e crescer conosco. 
            Junte-se a nós e descubra como a hidroponia pode transformar sua maneira de cultivar!
          </p>
         

          <div style={{ marginTop: '20px' }}>
            <Button variant="success">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </StyleAbout>
  );
};

export default About;
