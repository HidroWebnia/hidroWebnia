import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>PowerTrack</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/medidas'>Medidas</Nav.Link>
                    <Nav.Link as={Link} to='/admin'>Administração</Nav.Link>
                    <Nav.Link as={Link} to='/mensagens'>Mensagens</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Menu