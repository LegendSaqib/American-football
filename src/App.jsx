import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutTheClub from './Pages/AboutTheClub.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx'
import News from './Components/News.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutTheClub" element={<AboutTheClub />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
