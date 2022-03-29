import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  let navigate = useNavigate();
  const userinfo = {
    email: "admin",
    password: "123456",
  };
  const [formdata, setFormData] = useState([]);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(formdata, "\n", userinfo);
    if (
      userinfo.email !== formdata.email ||
      userinfo.password !== formdata.password
    ) {
      console.log("incorrect");
    } else {
      localStorage.setItem("user", JSON.stringify(formdata));
      console.log("correct");
      navigate("/admin");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          autoComplete="off"
          onChange={inputHandler}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          autoComplete="off"
          onChange={inputHandler}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" onClick={SubmitHandler} type="button">
        Submit
      </Button>
    </Form>
  );
}
