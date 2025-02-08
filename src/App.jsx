import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import './index.css';
import Login from './pages/Login'; // 
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: '240px', // Adjust for the sidebar width
          marginTop: '64px', // Adjust for the topbar height
        }}
      >
        <MainContent />
      </Box>
    </Box>
  );
}

export default App;