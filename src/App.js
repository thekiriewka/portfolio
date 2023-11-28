import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main';
import Projects from './components/pages/projects/Projects';
import Contacts from './components/pages/contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" 
          element={<Main />} 
          />
          <Route path="/projects" 
          element={<Projects />} 
          />
          <Route path="/contacts" 
          element={<Contacts />} 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
