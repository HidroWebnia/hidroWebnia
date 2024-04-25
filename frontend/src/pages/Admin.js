import React from 'react'
import styled from 'styled-components'
import {Tab, Tabs, Container} from 'react-bootstrap'
import ListDevice from '../components/ListDevice'
import AdminDetails from '../components/AdminDetails'
import NewDevice from '../components/NewDevice'

const AdminStyle = styled.div`
  h1{
    padding: 3rem;
    text-align: center;
  }

`;


const Admin = () => {
  return (
    <Container>
      <AdminStyle>
        <h1>Administração</h1>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="devices" title="Meus Devices">
          <ListDevice />
        </Tab>
        <Tab eventKey="detalhes" title="Detalhes">
          <AdminDetails /> 
        </Tab>
        <Tab eventKey="newdevice" title="Novo Device">
          <NewDevice />
        </Tab>
      </Tabs>
      </AdminStyle>
    </Container>
  )
}

export default Admin