import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImageSection = styled.div`
  flex: 1;
  background: url('https://img.freepik.com/fotos-premium/vista-de-plantas-em-vaso-em-estufa_1048944-1314777.jpg?w=740') no-repeat center center;
  background-size: cover;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const RegisterBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const InputWrapper = styled.div`
  position: relative;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #333;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não conferem!');
      setLoading(false);
      return;
    }

    try {
      const response = await register({ username, email, password, confirmPassword‎});
      if (response) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.message || 'Ocorreu um erro!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ImageSection />
      <FormSection>
        <RegisterBox>
          <Title>Cadastro</Title>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type='text'
                placeholder='Nome do usuário'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Icon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Icon>
            </InputWrapper>
            <InputWrapper>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirme sua senha'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Icon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </Icon>
            </InputWrapper>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? <Spinner /> : 'Cadastrar'}
            </Button>
          </form>
          <RegisterLink onClick={() => navigate('/login')}>
            Já possui uma conta? Faça o login aqui
          </RegisterLink>
        </RegisterBox>
      </FormSection>
    </Container>
  );
};

export default Register;
