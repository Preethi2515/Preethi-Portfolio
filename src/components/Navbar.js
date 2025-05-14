import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

const CustomNavbar = () => {
  const handleResumeClick = () => {
    // Replace the link below with the actual path to your resume file (PDF)
    window.open("/Preethi_S_Resume.pdf", "_blank"); // Opens in a new tab
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-4 px-4">
      <Container>
        <Navbar.Brand className="fs-2 fw-bold text-info">Preethi S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to="home" smooth={true} duration={500} className="nav-link fs-5 mx-3" offset={-80}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="nav-link fs-5 mx-3" offset={-80}>
              About
            </Link>
            <Link to="education" smooth={true} duration={500} className="nav-link fs-5 mx-3" offset={-80}>
              Education
            </Link>
            <Link to="projects" smooth={true} duration={500} className="nav-link fs-5 mx-3" offset={-80}>
              Projects
            </Link>
            <Link to="certifications" smooth={true} duration={500} className="nav-link fs-5 mx-3" offset={-80}>
              Certifications
            </Link>

            {/* Resume Button */}
            

            <Link to="contact" smooth={true} duration={500} className="nav-link fs-5 mx-3" offset={-80}>
              Contact
            </Link>
            <Button
              variant="outline-info"
              className="fs-6 mx-3"
              onClick={handleResumeClick}
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
