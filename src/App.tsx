import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/PageSections/Header';
import { Footer } from './components/PageSections/Footer';
import { setFavicon } from './utils/setFavicon';
import { AboutMe } from './components/PageSections/AboutMe';
import { Title } from './components/PageSections/Title';
import { Skills } from './components/PageSections/Skills';
import { Recommends } from './components/PageSections/Recommends';

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
