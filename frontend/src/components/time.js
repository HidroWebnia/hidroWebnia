import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import ivan from '../assets/ivan.svg';
import joao from '../assets/joao.svg';
import wesney from '../assets/wesney.svg';
import renato from '../assets/renato.svg';
import galindo from '../assets/galindo.png';

const StyleTime = styled.div`
  padding: 96px;
  @media (max-width: 768px) {
    padding: 48px;
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
  h1 {
    color: #181818;
    font-size: 24px;
    text-align: center;
  }
  .members {
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 36px;

    @media (max-width: 480px) {
      flex-direction: column;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    border-radius: 15px;
  }

  hr {
    border: 0;
    height: 2px;
    width: 50px;
    background-color: purple;
    margin: 10px auto 10px auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: solid 2px;
    border-color: #e0e0e0;
    background-color: #ededed;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 480px) {
      width: 70%;
    }
  }

  .card p {
    padding: 18px 0 0 18px;
    color: #181818;
  }

  .card-time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 0 18px;
  }

  .card-time p {
    background-color: #97c9a0;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
  }

  .links {
    display: flex;
    gap: 8px;
    flex-direction: row;
    color: #3d684d;
  }

  .links a {
    color: inherit;
    transition: transform 0.3s ease;
  }

  .links a:hover {
    transform: scale(1.2);
  }
`;

const Time = () => {
  return (
    <div>
      <StyleTime>
        <h1>Equipe</h1>
        <hr/>

        <div className="members" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
            <img src={renato} alt="Renato William" />
            <p>Renato William</p>
            <div className="card-time">
              <p>Líder</p>
              <div className="links">
                <a href="https://www.linkedin.com/in/renato-william-82a29335/?originalSubdomain=br" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/drenatow.21?igsh=bHV6cm1qemN1a3E0" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a>
                <a href="https://github.com/Renatowilliam21?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={joao} alt="João Lucas" />
            <p>João Lucas</p>
            <div className="card-time">
              <p>Backend</p>
              <div className="links">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-carvalho-jacinto-069522270/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/joao_lucasdm?igsh=NmZ0MGh4a2h3c2Ji" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a>
                <a href="https://github.com/Joaol324j" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={wesney} alt="Wesney de Paiva" />
            <p>Wesney Paiva</p>
            <div className="card-time">
              <p>Frontend</p>
              <div className="links">
                <a href="https://www.linkedin.com/in/wesnei-paiva-98539a292/?originalSubdomain=br" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fwesney_paiva%2F&is_from_rle" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a>
                <a href="https://github.com/Wesnei" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={ivan} alt="Ivan Magalhães" />
            <p>Ivan Magalhães</p>
            <div className="card-time">
              <p>Sistemas Embarcados</p>
              <div className="links">
                <a href="https://br.linkedin.com/in/ivan-magalh%C3%A3es-4824b92ba" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/ivaanmmagalhaes?igsh=dHVoOWg0M3g3MXdv" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a>
                <a href="https://github.com/IvanMagalhaesDev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={galindo} alt="Lucas Galindo" />
            <p>Lucas Galindo</p>
            <div className="card-time">
              <p>Sistemas Embarcados</p>
              <div className="links">
                <a href="https://www.linkedin.com/in/lucasgalindoiot/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/lucras_galindo/" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a>
                <a href="https://github.com/Lucras22" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </StyleTime>
    </div>
  );
};

export default Time;