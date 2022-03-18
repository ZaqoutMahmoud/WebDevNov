import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { UserProvider } from "./components/context/UserContext";
import { DrinkProvider } from "./components/context/DrinkContext";

function App() {
  return (
    <UserProvider value="Adam">
      <DrinkProvider value="Coffee">
        <main>
          <Header />
          <Content />
          <Footer />
        </main>
      </DrinkProvider>
    </UserProvider>

  );
}

export default App;
