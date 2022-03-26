import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function Blogpage() {
  //use effect usestate useef use context  >> react hooks
  const [posts, setPosts] = useState([]);
  const [IndexNumber, setIndexNumber] = useState(1);
  const [singlePost, setSinglePost] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      });
  }, []); // [] It's important to stop the repeat

  const nextPost = (e) => {
    e.preventDefault();
    setIndexNumber(IndexNumber + 1); // 0,1,2,3,4,5
    // fetch("https://jsonplaceholder.typicode.com/posts/"+IndexNumber)
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePost(data);
      });
  };

  const prevPost = (e) => {
    e.preventDefault();
    setIndexNumber(IndexNumber - 1);

    if (IndexNumber == 0) {
      //false
      alert("No post found");
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
        .then((res) => res.json())
        .then((data) => {
          setSinglePost(data);
        });

      //true
      // fetch("https://jsonplaceholder.typicode.com/posts/"+IndexNumber)
    }
  };
  console.log(IndexNumber);
  return (
    <Container className="text-center mt-5">
      <p>{singlePost.title}</p>
      <Button variant={"warning"} className="mx-1" onClick={prevPost}>
        Previous Post
      </Button>
      <Button variant={"warning"} onClick={nextPost}>
        Next Post
      </Button>
    </Container>
  );
}
