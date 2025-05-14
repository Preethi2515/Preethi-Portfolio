import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section py-5">
      <Container>
        <h2 className="text-center highlight fw-bold mb-4">My Resume</h2>
        <div className="underline mx-auto mb-4"></div>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="note-card">
              <p className="note-text">🚀 Passionate developer with experience in full-stack projects and a love for building meaningful software.</p>
            </div>
          </Col>
          <Col md={6}>
            <Card className="resume-card">
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dprdcvxdt/image/upload/vYOUR_IMAGE_LINK.jpg"
                alt="Resume Preview"
                className="resume-img"
              />
              <Card.Body className="text-center">
                <Button
                  variant="outline-warning"
                  href="https://res.cloudinary.com/dprdcvxdt/raw/upload/vYOUR_PDF_LINK.pdf"
                  download
                  className="resume-download-btn"
                >
                  📥 Download Resume
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center thank-msg mt-5">
          <span className="thanks">THANK 👏 YOU</span> <span className="interest">FOR REVIEWING MY RESUME</span>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
