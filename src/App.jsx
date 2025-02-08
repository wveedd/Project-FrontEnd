import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import './index.css';
import Login from './pages/Login'; // 
// Import your CSS if you have it


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;