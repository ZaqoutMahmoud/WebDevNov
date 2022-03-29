import Footer from "./Footer";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import BlogPage from "../../Blog";
import ContactPage from "../../Contact";
import Admin from "../../Admin";
import ProtectedRoute from "../../ProtectedRoute";
import PostDetail from "../../PostDetail";
export default function Layout({ children }) {
  // header - static
  // webpage contains dynamic
  // footer - static
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<App helloMessage="This is just a test" />} />
        <Route
          path="/blog"
          element={
            <BlogPage auth={{ email: "root@root.com", password: "123" }} />
          }
        />
        <Route path="/blog/:id" element={<PostDetail />} />
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
      {/* <Footer /> */}
    </>
  );
}
