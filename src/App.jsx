import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutTheClub from './Pages/AboutTheClub.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutTheClub" element={<AboutTheClub />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
