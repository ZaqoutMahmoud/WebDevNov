import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "./components/CardComponent";

export default function BlogPage({ auth }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        //       console.log(data)
        setPosts(data);
      });
  }, []);

  const IsAuthValid = () => {
    if (auth.email !== "root@root.com") {
      return <h1>Email or password is incorrect!</h1>;
    }
    return <h1>User logged in</h1>;
  };
  return (
    <>
      <Container fluid={true}>
        <h1>Blog Page</h1>
        <Row xs={1} md={4} className="g-4">
          {posts.map((post, index) => (
            <CardComponent post={post} key={index} />
          ))}
        </Row>
      </Container>

      <IsAuthValid />
    </>
  );
}
