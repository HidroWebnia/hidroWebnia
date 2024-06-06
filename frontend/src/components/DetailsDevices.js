import React, { useState } from 'react';
import styled from 'styled-components';
import { useApi } from '../hooks/useApi';
import moment from 'moment';
import Userfront from '@userfront/toolkit';
import { jwtDecode } from 'jwt-decode';
import temperature from '../assets/temperature.png';
import humidity from '../assets/humidity.png';
import luminosity from '../assets/luminosidade.png';
import uv from '../assets/indiceUV.png';
import { Link } from 'react-router-dom';
import DeviceData from './DeviceData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  padding: 96px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DateTimeBox = styled.div`
  background-color: #26503c;
  color: white;
  border-radius: 4px;
  padding: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permitirá que os cards quebrem para a próxima linha */
  gap: 20px;
  width: 100%;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  flex: 1; /* Faz com que os cards cresçam igualmente */
  min-width: 200px; /* Garante que os cards tenham pelo menos 200px de largura */
`;

const StyledImage = styled.img`
  height: 50px;
  width: auto;
  margin: 12px;
  max-width: 100%;
`;
const DetailsButton = styled.button`
  background-color: #26503c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 18%;
  margin-top: 20px;
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

  const handleButtonClick = () => {
    setShowDeviceData(!showDeviceData);
    setShowTable(!showTable);
  };

  return (
    <Container>
      {data?.data?.map((device) => (
        <React.Fragment key={device._id}>
          <h1>{device.name}</h1>
          <Header>
            <DateContainer>
              <DateTimeBox>Dia: {moment().format('DD/MM/YYYY')}</DateTimeBox>
              <DateTimeBox>Hora: {moment().format('HH:mm')}</DateTimeBox>
            </DateContainer>
          </Header>
          <div className="d-flex flex-column m-3 gap-2">
            {device.measures?.map((measure, index) => (
              <CardContainer key={index}>
                <Card>
                  <h2>Temperatura:</h2>
                  <StyledImage src={temperature} alt="temperature icon" />
                  <p>{measure.temperature ?? '--'}°C</p>
                </Card>
                <Card>
                  <h2>Umidade:</h2>
                  <StyledImage src={humidity} alt="humidity icon" />
                  <p>{measure.humidity ?? '--'}%</p>
                </Card>
                <Card>
                  <h2>Luminosidade:</h2>
                  <StyledImage src={luminosity} alt="luminosity icon" />
                  <p>{measure.luminosity ?? '--'}</p>
                </Card>
                <Card>
                  <h2>Índice UV:</h2>
                  <StyledImage src={uv} alt="uv icon" />
                  <p>{measure.uv ?? '--'}</p>
                </Card>
              </CardContainer>
            ))}
            <DetailsButton onClick={handleButtonClick}>
              {showDeviceData ? 'Ocultar' : 'Detalhar'}
            </DetailsButton>
          </div>
          {showDeviceData && <DeviceData />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default DetailsDevices;
