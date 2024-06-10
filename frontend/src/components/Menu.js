import React from 'react';
import Userfront from '@userfront/toolkit';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logout } from './authentication/Authentication';

const Menu = () => {
  const isAuthenticated = Userfront.accessToken();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HidroWebnia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/mensagens">
              Mensagens
            </Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/medidas">
                  Medidas
                </Nav.Link>
                <Nav.Link as={Link} to="/admin">
                  Administração
                </Nav.Link>
                <Nav.Item>
                  <span className="d-inline-block">
                    <Logout />
                  </span>
                </Nav.Item>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/cadastro">
                  Cadastro
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
