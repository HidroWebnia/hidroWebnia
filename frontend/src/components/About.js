import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgBG from '../assets/img-bg.svg';
import { AuthContext } from './AuthContext';

const imgAbout1 =  'https://img.freepik.com/fotos-gratis/casal-adulto-senior-escolher-vegetais-do-jardim-do-quintal_1150-6037.jpg?t=st=1724327432~exp=1724331032~hmac=ff84cb220b84ceee3201d46928a5b0acc2c69bad2b49eb14e7eb4501e48c8901&w=826'; 
const imgAbout2 = 'https://img.freepik.com/fotos-premium/cultivo-de-escarola-no-jardim-biologico-generativo-ia_209190-170884.jpg?w=826';
const imgAbout3 = 'https://img.freepik.com/fotos-gratis/grupo-ocupado-de-agricultores-em-uma-moderna-estufa-de-bio-agricultura-empreendedora-usada-para-o-cultivo-de-vegetais-ecologicos-naturais-e-saudaveis-agricultura-regenerativa-usando-fertilizante-de-solo-livre-de-pesticidas_482257-64588.jpg?t=st=1724328112~exp=1724331712~hmac=8669ffa0b1699f57cc2819f868276dcc451f2fc3804051b468a21b4293497e68&w=826'; 
const imgAbout4 = 'https://img.freepik.com/fotos-gratis/vista-fotorrealista-de-uma-mulher-colhendo-em-um-jardim-organico-sustentavel_23-2151462939.jpg?t=st=1724327927~exp=1724331527~hmac=e9b479fa9ddc337b1a3e9da439cddee0ba71900563b0530a98510a1e7964a6c7&w=826'; 
const imgAbout5 = 'https://img.freepik.com/fotos-gratis/vista-da-cidade-futurista_23-2150946813.jpg?t=st=1724328191~exp=1724331791~hmac=8aaa3efb444f05d16adab0c0bf8d1a6bb4ffddc43b0880515ff8aa50f933cbbe&w=826'; 

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

  .section {
    display: flex;
    align-items: center;
    padding: 96px;
    justify-content: space-between;

    @media (max-width: 1024px) {
      padding: 48px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 24px;
    }

    .text {
      flex: 1;
      max-width: 70%;
      padding: 0 2rem;

      h2 {
        color: #181818;
        font-size: 24px;
        margin-bottom: 1rem;
        width: 90%;

        @media (max-width: 768px) {
          width: 100%;
          text-align: center;
        }
      }

      p {
        color: #717171;
        line-height: 1.5;
        width: 100%;
        text-align: left;

        @media (max-width: 768px) {
          width: 100%;
          text-align: center;
          margin-top: 24px;
        }
      }
    }

    .image {
      flex: 1;
      max-width: 100%;
      padding: 0 4rem;

      img {
        width: 113%;
        height: auto;
        border-radius: 12px;

        @media (max-width: 1024px) {
          width: 60%;
        }

        @media (max-width: 768px) {
          width: 70%;
          margin: 24px 0;
        }
      }
    }
  }

  .reverse {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
`;

const About = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <StyleAbout>
      <div className="banner" data-aos="fade-up" data-aos-delay="200">
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
        ) : null}
      </div>

      <div className="section" data-aos="fade-up" data-aos-delay="400">
        <div className="text">
          <h2>Nossa Missão</h2>
          <p>
            Em um mundo onde a eficiência e a sustentabilidade são essenciais,
            nosso objetivo é transformar a forma como você cultiva suas plantas
            com hidroponia. Desenvolvemos um sistema de monitoramento web
            inovador para hidroponia que permite aos cultivadores acompanhar em
            tempo real o ambiente de cultivo, desde a qualidade da água até as
            condições de luz e temperatura. Acreditamos que a tecnologia pode
            facilitar o cultivo de alimentos saudáveis e aumentar a
            produtividade, garantindo um controle mais preciso e eficiente sobre
            o seu sistema hidropônico. Nosso compromisso é fornecer uma
            plataforma que não apenas simplifica o processo de cultivo, mas
            também educa e capacita os agricultores para alcançar resultados
            extraordinários, mantendo a integridade ambiental e a segurança
            alimentar como prioridades absolutas.
          </p>
        </div>
        <div className="image">
          <img src={imgAbout1} alt="Nossa Missão" />
        </div>
      </div>

      <div className="section reverse" data-aos="fade-up" data-aos-delay="600">
        <div className="text">
          <h2>Nossa História</h2>
          <p>
            Desenvolvido por bolsistas e alunos com o auxílio de professores do
            IFCE, em parceria com o Centro de Inovação e Difusão de Tecnologias
            para o Semiárido (CIDTS), o HidroWebnia surgiu da necessidade de
            proporcionar uma ferramenta acessível e eficiente para o monitoramento
            de sistemas hidropônicos. Nossa história é marcada por um profundo
            compromisso com a pesquisa e o desenvolvimento tecnológico,
            resultando em uma solução que combina sensores e tecnologia
            web para fornecer informações essenciais sobre o seu sistema
            hidropônico. Desde o início, nosso foco foi criar uma plataforma que
            atendesse tanto pequenos produtores quanto grandes operações
            agrícolas, oferecendo escalabilidade e adaptabilidade para qualquer
            cenário de cultivo.
          </p>
        </div>
        <div className="image">
          <img src={imgAbout2} alt="Nossa História" />
        </div>
      </div>

      <div className="section" data-aos="fade-up" data-aos-delay="800">
        <div className="text">
          <h2>Nossos Valores</h2>
          <p>
            Acreditamos em inovação, sustentabilidade e integridade. Nossa missão
            é não apenas oferecer um sistema de monitoramento eficiente, mas
            também promover práticas de cultivo que respeitem o meio ambiente e
            incentivem o crescimento sustentável. Valorizamos a transparência em
            nossos processos e estamos comprometidos em fornecer suporte
            excepcional aos nossos clientes. Estamos aqui para transformar o
            cultivo hidropônico em uma experiência positiva e produtiva para
            todos. Nossos valores centrais nos guiam em cada decisão que tomamos
            e nos ajudam a construir relacionamentos duradouros com nossos
            clientes e parceiros. Desde o uso responsável dos recursos naturais
            até a promoção de práticas agrícolas justas, nosso compromisso é com
            um futuro onde a tecnologia e a sustentabilidade andam de mãos dadas.
            
          </p>
        </div>
        <div className="image">
          <img src={imgAbout3} alt="Nossos Valores" />
        </div>
      </div>

      <div className="section reverse" data-aos="fade-up" data-aos-delay="1000">
        <div className="text">
          <h2>Nossos Clientes</h2>
          <p>
            Temos a honra de trabalhar com uma ampla gama de clientes, desde
            pequenos agricultores e entusiastas da hidroponia até grandes empresas
            do setor agrícola. Nossos clientes confiam em nosso sistema para
            fornecer uma solução confiável e eficaz para monitorar e otimizar seus
            cultivos. Agradecemos a todos que escolheram nosso sistema e estamos
            comprometidos em continuar a atender suas necessidades com excelência.
            Nossos clientes são a força motriz por trás do nosso contínuo esforço
            por inovação e excelência. Cada parceria que construímos é uma
            oportunidade de aprender e evoluir, permitindo-nos oferecer soluções
            cada vez mais adaptadas às necessidades reais do mercado. Desde
           
          </p>
        </div>
        <div className="image">
          <img src={imgAbout4} alt="Nossos Clientes" />
        </div>
      </div>

      <div className="section" data-aos="fade-up" data-aos-delay="1200">
        <div className="text">
          <h2>Futuro e Inovações</h2>
          <p>
            Estamos continuamente buscando maneiras de melhorar e expandir nosso
            sistema de monitoramento. A inovação é uma parte essencial da nossa
            filosofia, e estamos investindo em novas tecnologias para oferecer
            ainda mais recursos e funcionalidades. No futuro, planejamos integrar
            inteligência artificial para otimização automatizada e expandir nossas
            capacidades para incluir novos tipos de cultivos e ambientes. Nossa visão de futuro inclui a criação de
            soluções que não só simplifiquem o cultivo, mas que também integrem
            novas tecnologias emergentes, como a Internet das Coisas (IoT) e a
            Big Data, para fornecer uma visão ainda mais abrangente e preditiva
            dos sistemas hidropônicos. 
          </p>
        </div>
        <div className="image">
          <img src={imgAbout5} alt="Futuro e Inovações" />
        </div>
      </div>
    </StyleAbout>
  );
};

export default About;
