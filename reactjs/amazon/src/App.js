import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";

import Checkout from "./Checkout";

import Login from "./Login";

import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
