import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { Table } from 'react-bootstrap';

const DetailsStyle = styled.div`
  text-align: center;
  h1 {
    padding-bottom: 50px;
  }
  tbody {
    margim: 32px;
  }
`;

const DeviceData = () => {
  const { id } = useParams();
  const { data } = useApi(`/devices/detalhes/${id}`);

  return (
    <DetailsStyle>
      <div class="table-responsive-md">
        <Table striped bordered hover variant="secondary" class="table ">
          <thead>
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Hora</th>
              <th scope="col">Temperatura</th>
              <th scope="col">Umidade</th>
              <th scope="col">Temperatura da água</th>
              <th scope="col">Fluxo da água</th>
              <th scope="col">PH da água</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.measures.map((measure, index) => (
              <tr key={index}>
                <td>{measure.day}</td>
                <td>{measure.hour}</td>
                <td>{measure.temperature}°C</td>
                <td>{measure.humidity}%</td>
                <td>{measure.waterTemperature}</td>
                <td>{measure.waterFlux}</td>
                <td>{measure.ph}</td>
              </tr>
            ))}
          </tbody>
          <br />
          <thead>
            <tr>
              <th scope="col">Condutividade</th>
              <th scope="col">Luminosidade</th>
              <th scope="col">Índice Ultravioleta</th>
              <th scope="col">Nível do Recipiente</th>
              <th scope="col">Tempo Online</th>
              <th scope="col">Status do Motor</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.measures.map((measure, index) => (
              <tr key={index}>
                <td>{measure.conductivity}</td>
                <td>{measure.luminosity}</td>
                <td>{measure.uv}</td>
                <td>{measure.containerLevel}</td>
                <td>{measure.onlineTime}Min</td>
                <td>{measure.engineStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DetailsStyle>
  );
};

export default DeviceData;
