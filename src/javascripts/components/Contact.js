import React, { useState } from 'react'
import { Button, Row, Modal, Form } from 'react-bootstrap'
import App from './ContactForm'

export default function Contact() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <div id="contact">
      <div className="content-light">
        <center>
        <h1>Contact</h1>
        <div className="boxed-light">
          <p>I’m always looking for new opportunities and challenges, so feel free to reach out to me by clicking the button below.</p>
          <Button variant="primary" onClick={handleShow}>Say Hi!</Button>
          <p>You can also see find more of me at my Github and LinkedIn below.</p>
          <Row id="icons">
            <center>
              <a href="https://github.com/natecummings" target="_blank">
                <img id="icon" src="../../images/GitHub.png"></img>
              </a>
              <a href="https://www.linkedin.com/in/nathan-cummings-7243aa213/" target="_blank">
              <img id="icon" src="../../images/LinkedIn.png"></img>
              </a>
            </center>
          </Row>
        </div>
        </center>
      </div>
      <div id="buffer"></div>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <App/>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
    </>
  );
}