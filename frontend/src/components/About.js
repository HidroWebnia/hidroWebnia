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
    font-weight: bold;
  }

  .benefits-subtitle {
    text-align: center;
    font-size: 18px;
    color: #555;
    margin-bottom: 40px;
    font-weight: bold;
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

const BannerContainer = styled.div`
  //background: url('https://img.freepik.com/fotos-gratis/jardineiro-agronomo-segurando-salada-fresca-organica-saudavel-mostrando-ao-empresario-agricola-discutindo-nutricao-de-vegetais-na-plantacao-de-estufa-hidroponica-conceito-de-agricultura_482257-38029.jpg?t=st=1730813124~exp=1730816724~hmac=8e5a35595d217f5c53df843c513b49102c336544365dd3aac56f779b373615b7&w=996') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Overlay = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  justify-content: space-between;
  color: #fff;
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: left;
`;

const Subheading = styled.h2`
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #ffffff;

`;

const Disclaimer = styled.p`
  font-size: 12px;
  opacity: 0.8;
  color: #ffffff;

`;

const FormSection = styled.div`
  background-color: #2e8b57;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

const FormHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e8b57;
  }
`;

const About = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <StyleAbout>
      <div className="banner">
        <h1>Inovando a produção de alimentos com a tecnologia de hidroponia.</h1>
        <p>
          Bem-vindo ao HidroWebnia, o seu destino online para tudo relacionado à hidroponia!
          Navegue em nosso vasto catálogo de equipamentos, suprimentos e conhecimento especializado
          para iniciar e aprimorar seu próprio jardim hidropônico.
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

      <BannerContainer>
        <Overlay>
          <Content>
            <LeftSection>
            <Heading>Fique à frente com o HIDROWEBNIA</Heading>
              <Subheading>
                Descubra a tecnologia que vai revolucionar o monitoramento de sua produção hidropônica
              </Subheading>
              <Description>
                Estamos empolgados em compartilhar com você o HIDROWEBNIA, uma solução inovadora para monitoramento de sistemas hidropônicos. Seja um dos primeiros a explorar essa ferramenta e veja como ela pode otimizar o uso de recursos e melhorar a produtividade de sua produção. Preencha o formulário ao lado para garantir acesso exclusivo às informações.
              </Description>
              <Disclaimer>
                Fique atento ao seu e-mail! Em breve, enviaremos todos os detalhes e datas de lançamento. Não perca essa oportunidade de transformar sua produção!
              </Disclaimer>
            </LeftSection>
            <FormSection>
              <FormHeading>Preencha o formulário</FormHeading>
              <Form>
                <Input type="text" placeholder="Nome*" />
                <Input type="email" placeholder="Email*" />
                <Input type="number" placeholder="Idade*" />
                <Input type="text" placeholder="Cargo*" />
                <Button>Quero ser o primeiro!</Button>
              </Form>
            </FormSection>
          </Content>
        </Overlay>
      </BannerContainer>

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
          <div className="icon">📈</div>
          <div className="title">Otimização da Produção</div>
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
