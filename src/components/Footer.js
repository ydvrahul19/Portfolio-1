import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-content">
          <h3 style={{textAlign: "center"}}>Made with ❤ by Rahul Kumar Yadav</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
