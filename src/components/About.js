// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section text-white py-5">
      <Container>
        <motion.h2
          className="text-center mb-3 fs-1 fw-bold highlight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="underline mb-5 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <motion.div
              className="about-text"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                Hello, I'm <span className="highlight">Preethi</span> — a passionate software developer who thrives on building creative, meaningful solutions using full-stack technologies including the MERN stack, React, and more.
              </p>
              <p>
                I believe in using code to solve real-world problems, and I'm always exploring new technologies to stay ahead. Whether it's working independently or with a team, I enjoy creating things that make a difference.
              </p>
              <p>
                Let's innovate together and push the boundaries of what's possible in tech!
              </p>
            </motion.div>
          </Col>

          <Col md={5} className="text-center">
            <motion.img
              src="/preethi.jpg"
              alt="Preethi"
              className="custom-profile-img img-fluid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
