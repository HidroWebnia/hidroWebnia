import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import moment from 'moment';
import styled from 'styled-components';
import Userfront from '@userfront/toolkit';
import { jwtDecode } from 'jwt-decode';
import temperature from '../assets/temperature.png';
import humidity from '../assets/humidity.png';
import luminosity from '../assets/luminosidade.png';
import levelWater from '../assets/levelWater.png';
import motor from '../assets/motor.png';
import ph from '../assets/ph.png';
import temperatureWater from '../assets/temperatureWater.png';
import time from '../assets/condutividade.png';
import condutivity from '../assets/time.png';
import flux from '../assets/waterFlux.png';
import uv from '../assets/indiceUV.png';
import dataHora from '../assets/Data.png';
import DeviceData from './DeviceData';

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
    background: linear-gradient(to right, #7385B1, #00164E);
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

const DetailsButton = styled.button`
  background-color: #26503c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 150px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: #1d3a2d;
  }
`;

const DetailsDevices = () => {
  const userData = jwtDecode(Userfront.idToken());
  const email = userData.email;
  const { data } = useApi(`/devices/${email}`);
  const [showDeviceData, setShowDeviceData] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const isDaytime = () => {
    const hour = moment().hour();
    return hour >= 6 && hour < 18;
  };

  const handleButtonClick = () => {
    setShowDeviceData(!showDeviceData);
    setShowTable(!showTable);
  };


  return (
    <Container>
      {data?.data?.map((device) => (
        <React.Fragment key={device._id}>
          <Header>
            <h1>{device.name}</h1>
          </Header>
          {device.measures?.map((measure, index) => (
            <CardContainer key={index}>
              <Card className={isDaytime() ? 'daytime' : 'nighttime'}>
                <StyledImage src={dataHora} alt="data icon" />
                <CardContent>
                  <h2 className="DataHora">Data e Hora:</h2>
                  <p className="DataHora">
                    {moment().format('DD/MM/YY')} - {moment().format('HH:mm')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <StyledImage src={temperature} alt="temperature icon" />
                <CardContent>
                  <h2>Temperatura:</h2>
                  <p>{measure.temperature ?? '--'}°C</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={humidity} alt="humidity icon" />
                <CardContent>
                  <h2>Umidade:</h2>
                  <p>{measure.humidity ?? '--'}%</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={luminosity} alt="luminosity icon" />
                <CardContent>
                  <h2>Luminosidade:</h2>
                  <p>{measure.luminosity ?? '--'}</p>
                </CardContent>
              </Card>
            </CardContainer>
          ))}
          {device.measures?.map((measure, index) => (
            <CardContainer key={index}>
              <Card>
                <StyledImage src={temperatureWater} alt="temperature icon" />
                <CardContent>
                  <h2>Temperatura da água:</h2>
                  <p>{measure.waterTemperature ?? '--'}°C</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={flux} alt="temperature icon" />
                <CardContent>
                  <h2>Fluxo da água:</h2>
                  <p>{measure.waterFlux ?? '--'}</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={ph} alt="temperature icon" />
                <CardContent>
                  <h2>PH da água:</h2>
                  <p>{measure.ph ?? '--'}</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={levelWater} alt="uv icon" />
                <CardContent>
                  <h2>Nível do recipiente:</h2>
                  <p>{measure.containerLevel ?? '--'}</p>
                </CardContent>
              </Card>
            </CardContainer>
          ))}
          {device.measures?.map((measure, index) => (
            <CardContainer>
              <Card>
                <StyledImage src={time} alt="temperature icon" />
                <CardContent>
                  <h2>Tempo online:</h2>
                  <p>{measure.onlineTime ?? '--'} min</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={motor} alt="temperature icon" />
                <CardContent>
                  <h2>Status do motor:</h2>
                  <p>{measure.engineStatus ?? '--'}</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={condutivity} alt="temperature icon" />
                <CardContent>
                  <h2>Condutividade:</h2>
                  <p>{measure.conductivity ?? '--'}</p>
                </CardContent>
              </Card>
              <Card>
                <StyledImage src={uv} alt="uv icon" />
                <CardContent>
                  <h2>Índice UV:</h2>
                  <p>{measure.uv ?? '--'}</p>
                </CardContent>
              </Card>
            </CardContainer>
          ))}
          <DetailsButton onClick={handleButtonClick}>
            {showDeviceData ? 'Ocultar' : 'Detalhar'}
          </DetailsButton>
          {showDeviceData && <DeviceData />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default DetailsDevices;
