import React, { useEffect, useRef } from "react";
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

  const navRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    main: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    recommends: useRef(null),
  };

  return (
    <div>
      <Header navRefs={navRefs} />
      <Title refs={navRefs} />
      <AboutMe refs={navRefs} />
      <Skills refs={navRefs} />
      <Recommends refs={navRefs} />
      <Footer />
    </div>
  );
}

export default App;
