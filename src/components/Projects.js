import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Expense tracker for managing personal financial data',
    description: 'Assists users in managing their personal finances by providing efficient way to record and retrieve',
    techStack: ['Python Framework(Flask)','MongoDB Atlas'],
    link: 'https://github.com/Preethi2515/Expense-Tracker',
    
  },
  {
    title: 'Expense Tracker',
    description: 'This simplifies personal finance management by providing a centralized platform to monitor and control spending habits',
    techStack: ['React', 'Node', 'Express', 'MongoDB'],
    link: 'https://github.com/Preethi2515/MERN-Expense-Tracker',
  },
  {
    title: 'LLD of IRCTC Air Clone',
    description: 'It is a Flight booking platform which replicates the functionalities of the IRCTC Air.',
    techStack: ['OOPS in Java'],
    link: 'https://github.com/Preethi2515/IRCTC-LLD',

  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-3">
      <Container>
        <motion.h2
          className="text-center mb-4 fs-1 fw-bold highlight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="underline mb-5 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="project-card">
                  <Card.Body>
                    <Card.Title className="highlight">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="tech-stack">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {/* <Button variant="info" href={project.demoLink} target="_blank">Live Demo</Button> */}
                      <Button variant="info" href={project.link} target="_blank">View on GitHub</Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
