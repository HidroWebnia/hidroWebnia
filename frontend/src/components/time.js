import React from 'react';
import styled from 'styled-components';
import ex from '../assets/exemplo.svg';
import { FaLinkedin } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import ivan from '../assets/ivan.svg';
import joao from '../assets/joao.svg';
import wesney from '../assets/wesney.svg';
import renato from '../assets/renato.svg';
import rodrigo from '../assets/rodrigo.svg';

const StyleTime = styled.div`
  padding: 96px;
  @media (max-width: 768px) {
    padding: 48px;
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
  h2 {
    color: #181818;
    font-size: 24px;
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
  }

  .card {
    display: flex;
    flex-direction: column;
    border: solid 2px;
    border-color: #e0e0e0;
    background-color: #ededed;
    @media (max-width: 480px) {
      width: 100%;
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
`;

const Time = () => {
  return (
    <div>
      <StyleTime>
        <h2>Conheça a equipe responsável pelo projeto</h2>

        <div className="members">
          <div className="card">
            <img src={renato} alt="Renato William" />
            <p>Renato William</p>
            <div className="card-time">
              <p>Líder</p>
              <div className="links">
                <FaLinkedin />
                <RiInstagramFill />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={joao} alt="João Lucas" />
            <p>João Lucas</p>
            <div className="card-time">
              <p>BackEnd</p>
              <div className="links">
                <FaLinkedin />
                <RiInstagramFill />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={wesney} alt="Wesney de Paiva" />
            <p>Wesney de Paiva</p>
            <div className="card-time">
              <p>FrontEnd</p>
              <div className="links">
                <FaLinkedin />
                <RiInstagramFill />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={ivan} alt="Ivan Magalhães" />
            <p>Ivan Magalhães</p>
            <div className="card-time">
              <p>Sistemas Embarcados</p>
              <div className="links">
                <FaLinkedin />
                <RiInstagramFill />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={rodrigo} alt="Rodrigo de Freitas" />
            <p>Rodrigo de Freitas</p>
            <div className="card-time">
              <p>Sistemas Embarcados</p>
              <div className="links">
                <FaLinkedin />
                <RiInstagramFill />
              </div>
            </div>
          </div>
        </div>
      </StyleTime>
    </div>
  );
};

export default Time;
