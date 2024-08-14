import React from 'react'
import styled from 'styled-components'
import {useApi} from '../hooks/useApi'
import { Table } from 'react-bootstrap'
import moment from 'moment'

const Photo = styled.div`
    img{
        height: 100px;
        width: 100px;
    }
`;

const ListDevice = () => {
    const {data} = useApi('/devices')
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
                        <td><Photo> <img src={`http://localhost:3080/${item.image}`} alt='imagem'></img></Photo></td>
                        <td>{item.name}</td>
                        <td>{moment(item.registrationDate).format('DD-MM-YYYY')}</td>
                    </tr>
                    )
                })}
        </tbody>
    </Table>
  )
}

export default ListDevice