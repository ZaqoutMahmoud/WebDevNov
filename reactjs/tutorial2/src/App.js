import { useEffect, useState } from "react";
import { Button, Container, Form, ButtonGroup } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([{ id: 1 }]);
  const [formData, setFormData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [singlePost, setSinglePost] = useState([]);

  const [postIndex, setPostIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/blogger/v3/blogs/8458953370486219585/posts/?key=AIzaSyCfr2ohOjQovDTiXMgl-BbgN9vyVTGCT4k"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // retrieved data here
        setBlogData(data.items);
      });
  }, []);

  const clickHandler = (event) => {
    event.preventDefault();
    console.log(value);
    // set state data here
    // setValue(value+1)  state changed here
    // value = 0 +1
    setData({
      ...data,
      name: "atilla",
    });
  };

  const prevPost = (e) => {
    e.preventDefault();
  };

  const nextPost = (e) => {
    e.preventDefault();
    setPostIndex(postIndex + 1);
    setSinglePost(blogData[postIndex]);
  };

  // sudo npm install json-server -g
  // npm install json-server -g
  // json-server --watch yourfile.json -p 5000

  const formHandler = (e) => {
    //  console.log(e.target)
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // send data to server here
    // application/json; charset=UTF-8
    fetch("http://localhost:5000/members/", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    });
  };

  /*
    GET > Retrieve data
    POST > Create data
    PUT/PATCH > Update data
    DELETE > delete data
    */

  return (
    <>
      <Container>
        <Button
          onClick={() => setData({ ...data, email: "atilla@atilla.com" })}
        >
          Dont click
        </Button>
        <Button onClick={clickHandler}>Dont click1</Button>
        <h1 className="display-5">{value}</h1>
        {console.log(data)}
        <LoginForm
          submitHandler={formSubmitHandler}
          formHandler={formHandler}
        />

        {console.log(blogData)}

        <h1 className="display-2"></h1>
        {blogData.map((blog, index) => (
          <div>
            <h3>{blog.title}</h3>
            <p>Published: {blog.published}</p>

            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        ))}
      </Container>

      <ButtonGroup className="text-center mt-5 ">
        <Button variant="warning" onClick={prevPost}>
          Previous Post
        </Button>
        <Button variant="warning" onClick={nextPost}>
          Next Post
        </Button>
      </ButtonGroup>
      {console.log(singlePost)}
    </>
  );
}
