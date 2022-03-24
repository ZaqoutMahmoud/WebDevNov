import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
{
  /* The following line can be included in your src/index.js or App.js file*/
}

export default function App() {
  //use effect usestate useef use context  >> react hooks
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Hello world");
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []); // [] It's important to stop the repeat
  return (
    <Container className="text-center mt-5">
      <p>Single Post title</p>
      <Button variant="warning">Previous Post</Button>
      <Button variant="warning">Next Post</Button>
    </Container>
  );
}
