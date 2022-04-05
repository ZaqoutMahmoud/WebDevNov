import { React, useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllNews, getSingleNews } from "./redux/actions/newsActions";

export default function App() {
  const dispatch = useDispatch();
  const AllPosts = useSelector((state) => state).news.news;
  const SinglePost = useSelector((state) => state).news.singlenews;

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  // https://jsonplaceholder.typicode.com/posts
  return (
    <Container>
      <p className="display-5 text-center">React-Redux</p>
      <hr />
      <p>{SinglePost.body}</p>
      <div className="text-center">
        <Button
          className="rounded-0 mx-2"
          onClick={() => dispatch(getAllNews())}
        >
          Get All Posts
        </Button>
        <Button
          className="rounded-0 mx-2"
          variant={"dark"}
          onClick={() => dispatch(getSingleNews(3))}
        >
          Get Single Post
        </Button>
      </div>
      <hr />
      {console.log(SinglePost)}
      <div>
        <ListGroup>
          {AllPosts.map((post, index) => (
            <ListGroup.Item
              key={index}
              onClick={() => dispatch(getSingleNews(post.id))}
            >
              {post.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
}
