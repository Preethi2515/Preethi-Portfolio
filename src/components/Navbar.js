import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false); // track toggle state

  const handleResumeClick = () => {
    window.open("/Preethi_S_Resume.pdf", "_blank");
    setExpanded(false); // close navbar on resume click
  };

  // close navbar on any link click
  const handleNavClick = () => {
    setExpanded(false);
  };

  // Dynamic offset based on screen width (adjust the values as needed)
  const getOffset = () => (window.innerWidth < 768 ? -400 : -80);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="py-4 px-4"
      expanded={expanded} // control expanded state
    >
      <Container>
        <Navbar.Brand className="fs-2 fw-bold text-info">Preethi S</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link fs-5 mx-3"
              offset={getOffset()}
              onClick={handleNavClick} // close on click
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link fs-5 mx-3"
              offset={getOffset()}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="nav-link fs-5 mx-3"
              offset={getOffset()}
              onClick={handleNavClick}
            >
              Education
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link fs-5 mx-3"
              offset={getOffset()}
              onClick={handleNavClick}
            >
              Projects
            </Link>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="nav-link fs-5 mx-3"
              offset={getOffset()}
              onClick={handleNavClick}
            >
              Certifications
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link fs-5 mx-3"
              offset={getOffset()}
              onClick={handleNavClick}
            >
              Contact
            </Link>
            <Button
              variant="outline-info"
              className="fs-6 mx-3"
              onClick={handleResumeClick} // closes navbar inside handler
            >
              View Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
