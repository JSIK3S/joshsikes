import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/pageSections/Header";
import { Footer } from "./components/pageSections/Footer";
import { setFavicon } from "./utils/setFavicon";
import { AboutMe } from "./components/pageSections/AboutMe";
import { Title } from "./components/pageSections/Title";
import { Skills } from "./components/pageSections/Skills";
import { Recommends } from "./components/pageSections/Recommends";

function App() {
  // loads or updates favicon on page load
  useEffect(() => {
    setFavicon();
  }, []);

  return (
    <div>
      <Header />
      <Title />
      <AboutMe />
      <Skills />
      <Recommends />
      <Footer />
    </div>
  );
}

export default App;
