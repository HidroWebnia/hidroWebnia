import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';
import { useApi } from '../hooks/useApi';
import { useNavigate, Link } from 'react-router-dom';
import Userfront from '@userfront/toolkit';
import { jwtDecode } from 'jwt-decode';

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
  const userData = jwtDecode(Userfront.idToken());
  const email = userData.email;
  const { data } = useApi(`/devices/${email}`);

  let navigate = useNavigate();

  useEffect(() => {
    if (!Userfront.accessToken()) {
      return navigate('/login');
    }
  }, [navigate]);

  return (
    <MeasurementsStyle>
      <h1>Medidas</h1>
      <CardContainer>
        {data?.data?.map((device) => (
          <Link key={device._id} to={`/details/${device._id}`}>
            <Cards device={device} />
          </Link>
        ))}
      </CardContainer>
    </MeasurementsStyle>
  );
};

export default Measurements;
