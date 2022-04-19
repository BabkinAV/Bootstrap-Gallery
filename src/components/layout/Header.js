import React from 'react';
import { connect } from 'react-redux';
import { setOffCanvasOpen } from '../../redux/uiActions';
import { Navbar, Container, Offcanvas, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatarImg from '../../assets/images/ava_01.jpg';

const Header = ({isOffcanvasOpen, setOffCanvasOpen}) => {
  return (
    <Navbar expand={false} className="header" >
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={()=>setOffCanvasOpen(true)}/>
        <Navbar.Brand href="#">Bootstrap gallery</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={isOffcanvasOpen}
          onHide={()=>setOffCanvasOpen(false)}
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
              <Nav.Link as={Link} to="/" onClick={()=>setOffCanvasOpen(false)}>Галерея</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={()=>setOffCanvasOpen(false)}>Обо мне</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isOffcanvasOpen: state.isOffcanvasOpen
  }
}

export default connect(mapStateToProps, {setOffCanvasOpen})(Header);
