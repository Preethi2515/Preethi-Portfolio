import React, { useState } from 'react';
import { Container, Card, Modal, Button } from 'react-bootstrap';
import './Certifications.css';

const certificates = [
  {
    title: 'System Design Intern',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747217976/intern2_ynudst.jpg',
  },
  {
    title: 'MERN Stack Intern',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747217946/IMG-20241126-WA0005_zwidsq.jpg',
  },
  {
    title: 'NPTEL Software Testing',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747217993/nptel1_zxjtjs.jpg',
  },
  {
    title: 'NPTEL Cloud Computing',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747218002/nptel_2_tsx0sj.jpg',
  },
  {
    title: 'Chatbot Designing Workshop',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747218032/ws_c6vxcx.jpg',
  },
  {
    title: 'MongoDB',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747220547/Screenshot_2025-05-14_163208_jc4pob.png',
  },
  {
    title: 'IR4.0 Technologies',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747220700/Screenshot_2025-05-14_163445_xl77lu.png',
  },
  {
    title: 'Machine Learning',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747218509/1677041861629_u9yvbn.jpg',
  },
  {
    title: 'NPTEL Cloud IoT edge ML',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747218013/nptel3_eluzlj.jpg',
  },
  {
    title: 'Hackathon',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747219872/tnwise_1_1_fj6han.jpg',
  },
  {
    title: 'HackIndia',
    image: 'https://res.cloudinary.com/dprdcvxdt/image/upload/v1747221310/unnamed_apdd0a.jpg',
  },
];

const Certifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleShow = (image, title) => {
    setModalImg(image);
    setModalTitle(title);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section id="certifications" className="certifications-section py-3">
      <Container>
        <h2 className="text-center highlight fw-bold mb-4">My Certifications</h2>
        <div className="underline mx-auto mb-5"></div>
        <div className="cert-scroll-container">
          {certificates.map((cert, idx) => (
            <div className="cert-card-wrapper" key={idx}>
              <Card className="cert-card h-100">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={cert.image}
                    alt={cert.title}
                    className="cert-img"
                  />
                  <div className="cert-overlay">
                    <button
                      className="view-button"
                      onClick={() => handleShow(cert.image, cert.title)}
                    >
                      View
                    </button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="highlight">{cert.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal for full image preview */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImg} alt={modalTitle} className="img-fluid w-100" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Certifications;
