import React from 'react';
import BsNavBar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

export const Navbar: React.FC = () => (
  <BsNavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <BsNavBar.Brand href="">Commit Viewer</BsNavBar.Brand>
      <BsNavBar.Toggle aria-controls="responsive-navbar-nav" />
      <BsNavBar.Collapse id="responsive-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav>
          <NavDropdown menuVariant="dark" title="Commits from this repo" id="collasible-nav-dropdown">
            <Nav.Link href="commits">Usando React</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="commits">Usando Django</Nav.Link>
          </NavDropdown>
        </Nav>
      </BsNavBar.Collapse>
    </Container>
  </BsNavBar>
);
