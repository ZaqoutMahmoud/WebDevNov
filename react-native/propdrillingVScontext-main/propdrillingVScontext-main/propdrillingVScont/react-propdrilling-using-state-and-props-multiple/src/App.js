import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  const [userName, setUserName] = useState("Adam ");
  const [drink, setDrink] = useState("Coffee");

  return (
    <main>
      <Header userName={userName} drink={drink} />
      <Content userName={userName} onUpdateUserName={setUserName} drink={drink} onUpdateDrink={setDrink} />



      <Footer userName={userName} />
    </main>
  );
}

export default App;
