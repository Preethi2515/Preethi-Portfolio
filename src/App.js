import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
// import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { Element } from "react-scroll"; // Import for scrollable sections
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS for animations
import './App.css';
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation triggers once when scrolling down
    });
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <Element name="home">
        <Hero />
      </Element>
     

      {/* About Section - Full Page */}
      <Element name="about">
        <div data-aos="fade-up">
          <About />
        </div>
      </Element>

      {/* Education Section */}
      <Element name="education">
        <div data-aos="fade-up">
          <Education />
        </div>
      </Element>

<Element name="skills">
        <div data-aos="fade-up">
          <Skills />
        </div>
      </Element>
      {/* Projects Section */}
      <Element name="projects">
        <div data-aos="zoom-in">
          <Projects />
        </div>
      </Element>
       <Element name="certifications">
        <div data-aos="zoom-in">
          <Certifications />
        </div>
      </Element>

      {/* Resume Section */}
      {/* <Element name="resume">
        <div data-aos="flip-left">
          <Resume />
        </div>
      </Element> */}

      {/* Contact Section */}
      <Element name="contact">
        <div data-aos="fade-up">
          <Contact />
        </div>
      </Element>
    </div>
  );
}

export default App;
