import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'


const Header =() =>{
    return (
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#home">One page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Incio</Nav.Link>
              <Nav.Link href="#link">Productos</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );


}

export default Header;