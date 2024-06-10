import React from 'react';
import styled from 'styled-components';
import { useApi } from '../hooks/useApi';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import Userfront from '@userfront/toolkit';
import { jwtDecode } from 'jwt-decode';

const Photo = styled.div`
  img {
    height: 100px;
    width: 100px;
  }
`;

const ListDevice = () => {
  const userData = jwtDecode(Userfront.idToken());
  const email = userData.email;
  const { data } = useApi(`/devices/${email}`);
  return (
    <div class="table-responsive">
      <Table striped bordered hover variant="dark" class="table ">
        <thead>
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Device</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <Photo>
                    {' '}
                    <img src={item.image} alt="imagem"></img>
                  </Photo>
                </td>
                <td>{item.name}</td>
                <td>{moment(item.date).format('DD-MM-YYYY')}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListDevice;
