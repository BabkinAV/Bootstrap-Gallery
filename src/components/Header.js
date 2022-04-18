import React from 'react';
import { Navbar, Container, Offcanvas, Nav, Image } from 'react-bootstrap';
import avatarImg from '../assets/images/ava_01.jpg';

const Header = () => {
  return (
    <Navbar expand={false} className="header">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">Bootstrap gallery</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image src={avatarImg} className="img-fluid me-2" />
              <p className='d-inline-block'>Андрей Бабкин</p>
              <Nav.Link href="mailto:babkin@andrey@gmail.com" target="_blank">
                babkin.andrey@gmail.com
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Галерея</Nav.Link>
              <Nav.Link href="#action2">Обо мне</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
