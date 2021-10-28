import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

export default function Intro() {
  return(
    <div id="home">
      <div id="buffer"></div>
      <div id="buffer"></div>
      <div className="content-light">
        <center>
        <div className="boxed-light">
          <Container>
            <Row>
              <Col>
                <img id="portrait" src="../../images/Portrait.png" alt="Portrait photo of Nate"></img>
              </Col>
              <Col id="intro">
                <h2>Hello World!</h2>
                <h1>I'm Nate,</h1>
                <h2>a software developer <br/>from Ogden, UT</h2>
              </Col>
            </Row>
          </Container>
        </div>
        </center>
      </div>
    </div>
  );
}