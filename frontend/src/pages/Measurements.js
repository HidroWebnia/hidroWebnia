import React from 'react'
import styled from 'styled-components'
import Cards from '../components/Cards'
import { useApi } from '../hooks/useApi'

const MeasurementsStyle = styled.div`
  padding: 5rem;
  h1 {
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Measurements = () => {
  const { data } = useApi('/devices')
  console.log(data)
  return (
    <MeasurementsStyle>
      <h1>Medidas</h1>
      <CardContainer>
        {data?.data?.map(projeto => (
          <Cards key={projeto._id} projeto={projeto} />
        ))}
      </CardContainer>
    </MeasurementsStyle>
  )
}

export default Measurements
