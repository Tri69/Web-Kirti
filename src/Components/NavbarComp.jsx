import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import kirti_stemsago from '../assets/kirti_stemsago.png';
import "../App.css"

function NavbarComp() {
  return (
    <>
      {[false, 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top bg-white"   >
          <Container fluid>
            <Navbar.Brand href="#"><img className="logo" src={kirti_stemsago}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" variant="underline"  defaultActiveKey="/">
                    <Link to={"/"} ><Nav.Link href="/">Home</Nav.Link></Link>
                    <Link to={"/profil"}><Nav.Link href="/profil" eventKey="link-1">Profil</Nav.Link></Link>
                    <Link to={"/keanggotaan"}><Nav.Link href="/keanggotaan" eventKey="link-2">Keanggotaan</Nav.Link></Link>
                    <Link to={"/alumni"}><Nav.Link href="/alumni" eventKey="link-3">Alumni</Nav.Link></Link>
                    <Link to={"/news"}><Nav.Link href="" eventKey="link-4">News</Nav.Link></Link>
                  <NavDropdown
                    title="Materi"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to={"/materi/html"}><NavDropdown.Item href="/materi/html_dasar">HTML Dasar</NavDropdown.Item></Link>
                    <NavDropdown.Item href="#action4">
                      CSS Dasar
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      JavaScript Dasar
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComp;
