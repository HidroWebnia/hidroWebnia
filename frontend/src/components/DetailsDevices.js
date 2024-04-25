import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { Table } from 'react-bootstrap'
import moment from 'moment'

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

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <DetailsStyle>
      <h1>{data?.data?.name}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Kw/H</th>
            <th>Corrente</th>
            <th>Tensão</th>
            <th>Fator de Potência</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.measures.map((measure, index) => (
            <tr key={index}>
              <td>{measure.kwh}</td>
              <td>{measure.corrente}</td>
              <td>{measure.tensao}</td>
              <td>{measure.fp}</td>
              <td>{moment(measure.date).format('DD-MM-YYYY')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DetailsStyle>
  )
}

export default DetailsDevices
