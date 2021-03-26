import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
      <Container>
        <Container fluid className="my-3">
        <Row className="ml-4">
          <Col>
          <a className="text-dark" href="https://facebook.com">
            <FacebookIcon />
          </a>
          </Col>
          <Col>
          <a className="text-dark" href="https://instagram.com">
            <InstagramIcon />
          </a>
          </Col>
          <Col>
          <a className="text-dark" href="https://youtube.com">
            <YouTubeIcon />
          </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="#">Audio and Subtitles</a></li>
              <li><a className="text-dark" href="#">Media Centre</a></li>
              <li><a className="text-dark" href="#">Privacy</a></li>
              <li><a className="text-dark" href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="#">Audio Description</a></li>
              <li><a className="text-dark" href="#">Investor Relations</a></li>
              <li><a className="text-dark" href="#">Legal Notices</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="#">Help Centre</a></li>
              <li><a className="text-dark" href="#">Jobs</a></li>
              <li><a className="text-dark" href="#">Cookie Preferences</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="#">Gift Cards</a></li>
              <li><a className="text-dark" href="#">Terms of Use</a></li>
              <li><a className="text-dark" href="#">Coorporate Information</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="service-code">Service Code</button>
          </Col>
        </Row>
      </Container>
      </Container>
  )
}

export default Footer