import React, { useEffect } from 'react';
import './App.css';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { setFavicon } from './utils/setFavicon';

function App() {
  // loads or updates favicon on page load
  useEffect(() => {
    setFavicon();
  }, []);
  
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
