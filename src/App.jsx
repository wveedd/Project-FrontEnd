import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import './index.css';
import Login from './pages/Login'; // 
import Verify from './pages/Verify';
// Import your CSS if you have it
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './pages/Admin/SideBar';
import Topbar from './pages/Admin/Topbar';
import MainContent from './pages/Admin/MainContent';

function App() {
  // return (
  //   <Router>
  //     <div className="App">
  //       <Navbar />
  //       <Routes>
  //         <Route path="/" element={<LandingPage />} />
  //         <Route path="/about" element={<AboutUs />} />
  //         <Route path="/register" element={<Registration />} />
  //         <Route path="/Login" element={<Login />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
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