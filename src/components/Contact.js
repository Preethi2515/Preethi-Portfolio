import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm('service_g3vmvu9', 'template_53eu86j', form, 'DNoTl9Ay_6E41URAt')
      .then(
        (result) => {
          console.log('Form sent to owner:', result.text);
          emailjs
            .sendForm('service_g3vmvu9', 'template_qbnkulf', form, 'DNoTl9Ay_6E41URAt')
            .then(
              (res) => {
                alert('Message sent successfully!');
                form.reset();
              },
              (err) => {
                alert('Message sent to you, but failed to send auto-reply.');
                console.error('Auto-reply failed:', err.text);
              }
            );
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('Form send failed:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container fluid="sm">
        <h2 className="text-center highlight fw-bold mb-3">Get In Touch</h2>
        <div className="underline mx-auto mb-4"></div>

        <Row className="contact-wrapper">
          {/* LEFT - Contact Info */}
          <Col xs={12} md={5} className="contact-info mb-4 mb-md-0">
            <h4>Contact Information</h4>
            <div className="info-item">
              <i className="bi bi-envelope-fill"></i>
              <span>preethi.sridhar.it@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="bi bi-telephone-fill"></i>
              <span>8072025006</span>
            </div>
            <div className="info-item">
              <i className="bi bi-geo-alt-fill"></i>
              <span>Rasipuram</span>
            </div>
            <h5 className="mt-4">Connect With Me</h5>
            <div className="social-icons">
              <a href="https://github.com/Preethi2515" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/preethisridhar2515/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:preethi.sridhar.it@gmail.com?subject=Hello%20Preethi&body=I%20wanted%20to%20reach%20out%20about..." className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </Col>

          {/* RIGHT - Contact Form */}
          <Col xs={12} md={5}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your email address" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject of your message" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Your message" required />
              </Form.Group>
              <Button className="submit-btn" type="submit" size="lg" block>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
