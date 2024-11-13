import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgBG from '../assets/img-bg.svg';
import { AuthContext } from './AuthContext';
import { schedule } from '../services/api';

const StyleAbout = styled.div`
  .banner {
    background-image: url(${imgBG});
    background-size: cover;
    background-position: center;
    padding: 96px;
    color: #fff;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #e8f5e9; 
`;

const TextSection = styled.div`
  width: 50%;
  color: #2e7d32; 
  font-family: Arial, sans-serif;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    text-align: left;
  }

  .highlight {
    font-weight: bold;
    color: #388e3c; 
  }
`;

const FormContainer = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #a5d6a7; 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormHeading = styled.h2`
  text-align: center;
  color: #1b5e20; 
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #66bb6a;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #2e7d32;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1b5e20;
  }
`;

const About = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    emailSchedule: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await schedule(formData);
      if (response && response.status === 200) {
        setMessage('Monitoramento agendado com sucesso!');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

      <BannerContainer data-aos="fade-up" data-aos-delay="200">
        <TextSection>
          <h1>Transforme sua produção hidropônica com um monitoramento avançado.</h1>
          <p>
            Na HidroWebnia, entendemos que a eficiência e a produtividade de um sistema hidropônico
            dependem de um monitoramento contínuo e preciso. Sem uma supervisão adequada, sua produção
            pode estar perdendo potenciais ganhos, comprometendo o crescimento das suas plantas e a rentabilidade do seu negócio.
          </p>

          <p>
          Nossa equipe especializada está pronta para garantir que seu sistema esteja operando de maneira ideal, maximizando resultados e minimizando falhas.
          Ao confiar no monitoramento especializado da HidroWebnia, você garante um acompanhamento constante e insights valiosos para otimizar cada aspecto do seu cultivo.
          </p>
          <p className="highlight">
          Preencha os dados ao lado e agende seu monitoramento personalizado.
          Estamos aqui para ajudar você a alcançar o máximo desempenho de sua produção hidropônica, com a qualidade e a expertise que só a HidroWebnia oferece.
          </p>
        </TextSection>

        <FormContainer>
          <FormHeading>Agendar Monitoramento</FormHeading>
          <Form onSubmit={handleSubmit}>
            <Input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Nome e Sobrenome" 
              required 
            />
            <Input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Telefone" 
              required 
            />
            <Input 
              type="email" 
              name="emailSchedule" 
              value={formData.emailSchedule} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
            />
            <Input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              placeholder="Endereço" 
              required 
            />
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? 'Carregando...' : 'Agendar Monitoramento'}
            </Button>
          </Form>
        </FormContainer>
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
          <div className="icon">🛠️</div>
          <div className="title">Melhoria da Qualidade do Produto</div>
        </div>
      </div>
    </StyleAbout>
  );
};

export default About;
