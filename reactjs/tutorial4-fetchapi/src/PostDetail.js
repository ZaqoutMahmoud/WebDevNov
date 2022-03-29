import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const queryParams = new URLSearchParams(useLocation().search);

  const title = queryParams.get("title");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
    console.log(title);
  }, []);

  return (
    <>
      <h1>Post Detail {id}</h1>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </>
  );
}
