import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  // 1. Send form content to YOUR email
  emailjs
    .sendForm(
      'service_g3vmvu9',       // Your service ID
      'template_53eu86j',      // Template that sends data to YOU
      form,
      'DNoTl9Ay_6E41URAt'      // Your public key
    )
    .then(
      (result) => {
        console.log('Form sent to owner:', result.text);

        // 2. Send auto-reply to USER email
        emailjs
          .sendForm(
            'service_g3vmvu9',     // Same service ID
            'template_qbnkulf',  // A second template for auto-reply
            form,
            'DNoTl9Ay_6E41URAt'    // Same public key
          )
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
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center section-heading">Get In Touch</h2>
        <Row className="contact-wrapper">
          {/* LEFT - Contact Info */}
          <Col md={5} className="contact-info">
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
              <a
                href="https://github.com/Preethi2515"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/preethisridhar2515/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="mailto:preethi.sridhar.it@gmail.com?subject=Hello%20Preethi&body=I%20wanted%20to%20reach%20out%20about..."
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </Col>

          {/* RIGHT - Contact Form */}
          <Col md={5}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your email address" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject of your message" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Your message" required />
              </Form.Group>
              <Button className="submit-btn" type="submit">
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
