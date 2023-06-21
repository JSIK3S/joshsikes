import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { setFavicon } from './utils/setFavicon';
import { AboutMe } from './components/AboutMe';
import { Title } from './components/Title';
import { Skills } from './components/Skills';
import { Recommends } from './components/Recommends';

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
