import React from 'react'
import { Row, ListGroup, ListGroupItem, Container, Col } from 'react-bootstrap'

export default function About() {
  return(
    <div id="about">
      <div id="content-dark">
        <center>
          <h1>About Me</h1>
          <div id="aboutBox">
            <Container id="aboutText">
              <Row>
                <Col>
                  <img id="cello-mountains" src="../../images/Cello-Mountains.png" width="500px"></img>
                </Col>
                <Col>
                  <p id="smallText">Hi, I’m Nate. I was born and raised in Ogden and I recently graduated from Weber State University with a BS in Computer Science.</p>
                  <p id="smallText">Some technologies I’m most familiar with include:
                    <ul>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>SQL / GraphQL</li>
                      <li>Node.js / Express</li>
                      <li>MongoDB / Mongoose</li>
                    </ul>
                    Besides programming, my hobbies primarily include music, reading, video games, and learning new languages.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </center>
      </div>
    </div>
  );
}