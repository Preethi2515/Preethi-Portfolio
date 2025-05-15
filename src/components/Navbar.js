import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaCertificate, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleResumeClick = () => {
    window.open("/Preethi_S_Resume.pdf", "_blank");
    setExpanded(false);
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  // Use consistent offset for all screen sizes, adjust if needed
  const getOffset = () => (window.innerWidth < 768 ? -400 : -80);


  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="navbar-custom py-3 px-4"
      expanded={expanded}
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
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaHome className="nav-icon" /> Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaUser className="nav-icon" /> About
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaGraduationCap className="nav-icon" /> Education
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaTools className="nav-icon" /> Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaProjectDiagram className="nav-icon" /> Projects
            </Link>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaCertificate className="nav-icon" /> Certifications
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={getOffset()}
              activeClass="active"
              className="nav-link fs-5 mx-3"
              onClick={handleNavClick}
            >
              <FaEnvelope className="nav-icon" /> Contact
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
