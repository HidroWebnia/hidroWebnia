import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import moment from 'moment';
import styled from 'styled-components';
import temperature from '../assets/temperature.png';
import humidity from '../assets/humidity.png';
import luminosity from '../assets/luminosidade.png';
import levelWater from '../assets/levelWater.png';
import motor from '../assets/motor.png';
import ph from '../assets/ph.png';
import temperatureWater from '../assets/temperatureWater.png';
import condutivity from '../assets/condutividade.png';
import time from '../assets/time.png';
import flux from '../assets/waterFlux.png';
import uv from '../assets/indiceUV.png';
import dataHora from '../assets/Data.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
  font-weight: 800;

  &.daytime {
    background: linear-gradient(to right, #cdeaff, #239cf3);
  }

  &.nighttime {
    background: linear-gradient(to right, #7385b1, #00164e);
    .DataHora {
      color: white;
    }
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const StyledImage = styled.img`
  height: 50px;
  width: auto;
  margin-right: 32px;
`;



const DetailsDevices = () => {
  const { id } = useParams();
  const { data } = useApi(`/devices/detalhes/${id}`);

  const isDaytime = () => {
    const hour = moment().hour();
    return hour >= 6 && hour < 18;
  };

  const renderCard = (title, value, imageSrc, altText) => (
    <Card className={isDaytime() ? 'daytime' : 'nighttime'}>
      <StyledImage src={imageSrc} alt={altText} />
      <CardContent>
        <h2>{title}:</h2>
        <p>{value ?? '--'}</p>
      </CardContent>
    </Card>
  );

  return (
    <Container>
      {data?.data ? (
        <React.Fragment>
          <Header>
            <h1>{data.data.name}</h1>
          </Header>
          {data.data.espStatus ? (
            data.data.measures?.length > 0 ? (
              data.data.measures.map((measure, index) => (
                <React.Fragment key={index}>
                  <CardContainer>
                    <Card className={isDaytime() ? 'daytime' : 'nighttime'}>
                      <StyledImage src={dataHora} alt="data icon" />
                      <CardContent>
                        <h2 className="DataHora">Data e Hora:</h2>
                        <p className="DataHora">
                          {moment().format('DD/MM/YY')} -{' '}
                          {moment().format('HH:mm')}
                        </p>
                      </CardContent>
                    </Card>
                    {renderCard(
                      'Temperatura',
                      measure.temperature,
                      temperature,
                      'temperature icon'
                    )}
                    {renderCard(
                      'Umidade',
                      measure.humidity,
                      humidity,
                      'humidity icon'
                    )}
                    {renderCard(
                      'Luminosidade',
                      measure.luminosity,
                      luminosity,
                      'luminosity icon'
                    )}
                  </CardContainer>
                  <CardContainer>
                    {renderCard(
                      'Temperatura da água',
                      measure.waterTemperature,
                      temperatureWater,
                      'temperature water icon'
                    )}
                    {renderCard(
                      'Fluxo da água',
                      measure.waterFlux,
                      flux,
                      'water flux icon'
                    )}
                    {renderCard('PH da água', measure.ph, ph, 'ph icon')}
                    {renderCard(
                      'Nível do recipiente',
                      measure.containerLevel,
                      levelWater,
                      'level water icon'
                    )}
                  </CardContainer>
                  <CardContainer>
                    {renderCard(
                      'Tempo online',
                      measure.onlineTime,
                      time,
                      'time icon'
                    )}
                    {renderCard(
                      'Status do motor',
                      measure.engineStatus,
                      motor,
                      'motor icon'
                    )}
                    {renderCard(
                      'Condutividade',
                      measure.conductivity,
                      condutivity,
                      'conductivity icon'
                    )}
                    {renderCard('Índice UV', measure.uv, uv, 'uv icon')}
                  </CardContainer>
                </React.Fragment>
              ))
            ) : (
              <CardContainer>
                <Card>
                  <CardContent>
                    <h2>Sem dados disponíveis</h2>
                    <p>
                      Nenhuma medida foi registrada para este dispositivo ainda.
                    </p>
                  </CardContent>
                </Card>
              </CardContainer>
            )
          ) : (
            <CardContainer>
              <Card>
                <CardContent>
                  <h2>Sem dados disponíveis</h2>
                  <p>
                    O dispositivo não está ativo no momento.
                  </p>
                </CardContent>
              </Card>
            </CardContainer>
          )}
        </React.Fragment>
      ) : (
        <Header>
          <h1>Carregando...</h1>
        </Header>
      )}
    </Container>
  );
};


export default DetailsDevices;
