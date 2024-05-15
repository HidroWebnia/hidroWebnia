import React from 'react'
import Userfront from '@userfront/toolkit'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Logout } from './authentication/Authentication'

const Menu = () => {
  const isAuthenticated = Userfront.accessToken()

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>HidroWebnia</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/mensagens'>Mensagens</Nav.Link>
                    {isAuthenticated &&(
                      <>
                        <Nav.Link as={Link} to='/medidas'>Medidas</Nav.Link>
                        <Nav.Link as={Link} to='/admin'>Administração</Nav.Link>
                        <Nav.Item><span className="d-inline-block"><Logout /></span></Nav.Item>
                      </>
                    )
                    }
                    {!isAuthenticated && (
                      <>
                        <Nav.Link as={Link} to='/cadastro'>Cadastro</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                      </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Menu
