import React from 'react';
import BsNavBar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { commitsLoadAction } from '../features/commits/actions/load.actions';

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const onSearchRepo = (data: any) => {
    dispatch(commitsLoadAction.request(data));
  };

  return (
    <BsNavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <BsNavBar.Brand href="">Commit Viewer</BsNavBar.Brand>
        <BsNavBar.Toggle aria-controls="responsive-navbar-nav" />
        <BsNavBar.Collapse id="responsive-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav>
            <NavDropdown menuVariant="dark" title="Commits from this repo" id="collasible-nav-dropdown">
              <Nav.Link href="commits" onClick={() => onSearchRepo('react')}>
                Using React
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="commits" onClick={() => onSearchRepo('django')}>
                Using Django
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </BsNavBar.Collapse>
      </Container>
    </BsNavBar>
  );
};
