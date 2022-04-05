import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Contact from "./pages/Contact";
import { Database } from "./context/index";

export default function App() {
  //https://jsonplaceholder.typicode.com/posts

  const [state, setState] = useState([1, 2, 3, 4]);
  const [posts, setPosts] = useState([]);
  const SaySomething = () => {
    console.log("This is a function");
  };

  const OnlyString = "Hello friend!";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      }); //recieved data here
  }, []);
  return (
    <Database.Provider value={[state, SaySomething, OnlyString, posts]}>
      {/* // [0,1,2,3] */}
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Database.Provider>
  );
}
