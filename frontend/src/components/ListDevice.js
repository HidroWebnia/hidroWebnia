import React from 'react'
import styled from 'styled-components'
import {useApi} from '../hooks/useApi'
import { Table } from 'react-bootstrap'
import moment from 'moment'
import Userfront from '@userfront/toolkit'
import { jwtDecode } from 'jwt-decode'

const Photo = styled.div`
    img{
        height: 100px;
        width: 100px;
    }
`;

const ListDevice = () => {
    const userData = jwtDecode(Userfront.idToken())
    const email = userData.email
    const { data } = useApi(`/devices/${email}`)
  return (
    <Table striped bordered hover variant='dark'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Device</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
            {data?.data?.map(item =>{
                return(
                    <tr key={item._id}>
                        <td><Photo> <img src={item.image} alt='imagem'></img></Photo></td>
                        <td>{item.name}</td>
                        <td>{moment(item.date).format('DD-MM-YYYY')}</td>
                    </tr>
                    )
                })}
        </tbody>
    </Table>
  )
}

export default ListDevice