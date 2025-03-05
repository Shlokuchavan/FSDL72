import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Mobile Shop</Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
