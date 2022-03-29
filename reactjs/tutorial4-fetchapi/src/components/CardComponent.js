import { Card, Col } from "react-bootstrap";

export default function CardComponent({ post }) {
  return (
    <Col>
      <Card>
        {console.log(post)}
        <Card.Img variant="top" src="/images/blogimg.webp" />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
