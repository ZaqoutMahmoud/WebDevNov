import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  // header - static
  // webpage contains dynamic
  // footer - static
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
