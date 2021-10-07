import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

export default function Project(props) {
  const p = props.project
  return(
    <div id="boxed-light">
      <Container className="portfolioContent">
        <Row>
          <Col>
            <img src={p.image} className="portfolioImages" alt={p.title}></img>
          </Col>
          <Col>
            <h2>{p.title}</h2>
            <a href={p.link} target="_blank">{p.link}</a>
            <br/><br/>
            <h5>Main Technologies Used:</h5>
            {p.technologies.map(d => (<li key={d.id}>{d}</li>))}
            <br/>
            <p id="smallText">{p.summary}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}