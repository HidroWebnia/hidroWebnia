import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  width: 80%;
  margin: 0 auto;
  margin-top: 35px;
  flex-wrap: wrap;  
`;

const Testemunho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 30%;
  margin-bottom: 20px; 
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 45%;  
  }

  @media (max-width: 768px) {
    width: 100%;  
  }
`;

const Foto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Nome = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left;
`;

const Descricao = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  text-align: left;
`;

const TestemunhoComponent = () => {
  return (
    <Container data-aos="fade-up" data-aos-delay="200">
      <Testemunho>
        <Foto src="https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?t=st=1728478365~exp=1728481965~hmac=70b272fc1b38e2b4e98628df0d8fab50c459f92054ea7e2d3924eda3dc57e652&w=740" alt="Foto do cliente" />
        <Nome>João Silva</Nome>
        <Descricao>
          "Eu estava procurando por um serviço de qualidade para hidroponia e encontrei aqui."
        </Descricao>
      </Testemunho>
      <Testemunho>
        <Foto src="https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-sorrindo_23-2149260597.jpg?t=st=1728478396~exp=1728481996~hmac=cebb746e8ea0e3df5387b62f545bbde05a05c795e5e907fc0533c1c1b5d68ea4&w=900" alt="Foto do cliente" />
        <Nome>Maria Santos</Nome>
        <Descricao>
          "A equipe do HidroWebnia foi muito atenciosa e me ajudou a resolver meu problema."
        </Descricao>
      </Testemunho>
      <Testemunho>
        <Foto src="https://img.freepik.com/fotos-gratis/jovem-homem-posando-isolado-contra-a-parede-em-branco-do-estudio_273609-12356.jpg?t=st=1728478422~exp=1728482022~hmac=b98eda948ab14f44639a15a639be4e6d7221e53de4af6f9e5224010a2bed66c6&w=900" alt="Foto do cliente" />
        <Nome>Pedro Oliveira</Nome>
        <Descricao>
          "O serviço foi rápido e eficiente.
          Estou muito satisfeito com o resultado."
        </Descricao>
      </Testemunho>
    </Container>
  );
};

export default TestemunhoComponent;
