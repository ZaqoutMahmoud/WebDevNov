import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="bg-dark" fluid={true}>
      <Row className="justify-content-center text-light text-center">
        <Col md={12}>
          <h1>Footer</h1>
        </Col>
      </Row>
    </Container>
  );
}
