import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { Table } from 'react-bootstrap'

const DetailsStyle = styled.div`
  text-align: center;
  padding: 50px;
  h1 {
    padding-bottom: 50px;
  }
`;

const DetailsDevices = () => {
  const { id } = useParams()
  const { data } = useApi(`/devices/detalhes/${id}`)

  return (
    <DetailsStyle>
      <h1>{data?.data?.name}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Dia</th>
            <th>Hora</th>
            <th>Temperatura</th>
            <th>Umidade</th>
            <th>Temperatura da Água</th>
            <th>Fluxo da Água</th>
            <th>Ph da Água</th>
            <th>Condutividade</th>
            <th>Luminosidade</th>
            <th>Índice Ultravioleta</th>
            <th>Nível do Recipiente</th>
            <th>Tempo Online</th>
            <th>Status do Motor</th>
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
    </DetailsStyle>
  )
}

export default DetailsDevices
