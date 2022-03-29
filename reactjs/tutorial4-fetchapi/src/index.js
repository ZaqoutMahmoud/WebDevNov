import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Layout from './components/Layout/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import BlogPage from "./Blog";
import ContactPage from "./Contact";
import Admin from "./Admin";
import ProtectedRoute from "./ProtectedRoute";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App helloMessage="This is just a test" />} />
      <Route
        path="/blog"
        element={
          <BlogPage auth={{ email: "root@root.com", password: "123" }} />
        }
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute user={{ username: "admin", password: "123456" }}>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
