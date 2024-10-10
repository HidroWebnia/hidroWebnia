import React, { useEffect, useState } from 'react';
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
import io from 'socket.io-client';

const socket = io('https://devicesserver.onrender.com');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  position: relative;
  margin-top: 25px;
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
  const [deviceData, setDeviceData] = useState(null);
  const { data, loading } = useApi(`/devices/detalhes/${id}`);
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    if (data) {
      setDeviceData(data.data);
    }
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    socket.emit('subscribeToDevice', id);

    socket.on('deviceUpdated', (updatedDevice) => {
      console.log(updatedDevice)
      if (updatedDevice._id === id) {
        setDeviceData(updatedDevice);
      }
    });

    return () => {
      socket.off('deviceUpdated');
      socket.emit('unsubscribeFromDevice', id);
    };
  }, [id]);

  const isDaytime = () => {
    const hour = moment().hour();
    return hour >= 6 && hour < 18;
  };

  const renderCard = (title, value, imageSrc, altText) => (
    <Card>
      <StyledImage src={imageSrc} alt={altText} />
      <CardContent>
        <h2>{title}:</h2>
        <p>{value ?? '--'}</p>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Container>
        <Header>
          <h1>Carregando...</h1>
        </Header>
      </Container>
    );
  }

  if (!deviceData) {
    return (
      <Container>
        <Header>
          <h1>Dispositivo não encontrado</h1>
        </Header>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <h1>{deviceData.name}</h1>
      </Header>
      {deviceData.measures?.length > 0 ? (
        <React.Fragment>
          {deviceData.measures.map((measure, index) => (
            <React.Fragment key={index}>
              <CardContainer>
                <Card className={isDaytime() ? 'daytime' : 'nighttime'}>
                  <StyledImage src={dataHora} alt="data icon" />
                  <CardContent>
                    <h2 className="DataHora">Data e Hora:</h2>
                    <p className="DataHora">
                      {currentTime.format('DD/MM/YY')} -{' '}
                      {currentTime.format('HH:mm:ss')}
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
                  measure.waterFlux ? ' Não tem Fluxo' : 'Tem Fluxo',
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
                  measure.engineStatus ? 'Desligado' : 'Ligado',
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
          ))}
        </React.Fragment>
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
      )}
    </Container>
  );
};

export default DetailsDevices;
