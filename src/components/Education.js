// src/components/Education.js
import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './Education.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: 'B.Tech Information Technology',
      institution: 'Muthayammal Engineering College',
      year: '2022 - 2026',
      grade: 'CGPA: 8.84%'
    },
    {
      title: 'HSC',
      institution: 'R.C. Sacred Heart Higher Secondary School',
      year: '2022',
      grade: 'Percentage: 82.83%'
    },
     {
      title: 'SSLC',
      institution: 'R.C. Sacred Heart Higher Secondary School',
      year: '2020',
      grade: 'Percentage: 91.8%'
    },
  ];

  const experienceData = [
    {
      title: 'MERN Stack Developer',
      company: 'Zealous Tech Corp',
      year: ' 1st July 2024 - 19th July 2024',
      description: 'Worked on a Capstone project of Z-Track expense tracking web application'
    },
    {
      title: 'System Design Engineer',
      company: 'Zealous Tech Corp',
      year: '27th December 2024 - 18th January 2025',
      description: 'Worked on a Capstone project of IRCTC CLone LLD'
    },
  ];

  const renderCards = (data) =>
    data.map((item, index) => (
      <motion.div
        key={index}
        className="mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="education-card text-black">
          <Card.Body>
            <Card.Title className="highlight fs-5 fw-bold">{item.title}</Card.Title>
            <Card.Subtitle className="mb-2">
              {item.institution || item.company}
            </Card.Subtitle>
            {item.description && <Card.Text>{item.description}</Card.Text>}
            <Card.Text className="text-muted">
              {item.year} {item.grade && `| ${item.grade}`}
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    ));

  return (
    <section id="education" className="education-section text-white py-5">
      <Container>
        <motion.h2
          className="text-center mb-3 fs-1 fw-bold highlight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Education & Experience
        </motion.h2>

        {/* Animated underline below heading */}
        <motion.div
          className="underline mb-4 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="text-center mb-4">
          <ButtonGroup>
            <Button
              variant={activeTab === 'education' ? 'info' : 'outline-info'}
              onClick={() => setActiveTab('education')}
            >
              Education
            </Button>
            <Button
              variant={activeTab === 'experience' ? 'info' : 'outline-info'}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </Button>
          </ButtonGroup>
        </div>

        <Row className="justify-content-center">
          <Col md={8}>
            <AnimatePresence mode="wait">
              {activeTab === 'education'
                ? renderCards(educationData)
                : renderCards(experienceData)}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
