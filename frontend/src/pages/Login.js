import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImageSection = styled.div`
  flex: 1;
  background: url('https://img.freepik.com/fotos-gratis/sistema-de-hidroponia-plantio-de-vegetais-e-ervas-sem-usar-o-solo-para-a-saude_1150-8154.jpg?w=900&t=st=1724961349~exp=1724961949~hmac=58ab206700d046e5ee58c357c28cd9dcc5ead79b3146c30062fe6a11a6353d9d') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #555;
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
  border-left-color: #fff;
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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login({ email, password });
      navigate('/');
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ImageSection>
      </ImageSection>
      <FormSection>
        <LoginBox>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />

            <PasswordContainer>
              <Input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <TogglePasswordButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </TogglePasswordButton>
            </PasswordContainer>

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            
            <Button type="submit" disabled={loading}>
              {loading ? <Spinner /> : 'Login'}
            </Button>
          </form>

          <RegisterLink onClick={() => navigate('/cadastro')}>
            Não tem uma conta? Registre-se aqui
          </RegisterLink>
          <RegisterLink onClick={() => navigate('/reset-password')}>
            Esqueceu a senha?
          </RegisterLink>
        </LoginBox>
      </FormSection>
    </Container>
  );
};

export default LoginPage;
