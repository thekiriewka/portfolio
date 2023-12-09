import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main';
import Projects from './components/pages/projects/Projects';
import Contacts from './components/pages/contacts/Contacts';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="App">
        <Navbar />
        <Main />
        <Projects />
        <Contacts />
        <Footer />
        {showScrollButton && (
        <button className="scroll-button" onClick={scrollToTop}>
          Наверх
        </button>
      )}
      </div>
  );
}

export default App;
