import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../public/F (2).png";
import "./navBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img src={logo} width={50} height={50} className="logo" alt="Logo" />
          Faisal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />

        <Nav className="ms-auto">
          <Nav.Link href="#home" className="navLink">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className="navLink">
            About
          </Nav.Link>
          <Nav.Link href="#skills" className="navLink">
            Skills
          </Nav.Link>
          <Nav.Link href="#education" className="navLink">
            Education
          </Nav.Link>
          <Nav.Link href="#work" className="navLink">
            Work
          </Nav.Link>
          <Nav.Link href="#contact" className="navLink">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
