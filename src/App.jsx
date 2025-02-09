//import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
// import Navbar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import './index.css';
import Navbar from './Components/NavBar';
import DashboardNavbar from './Components/DashboardNavbar';
import Login from './pages/Login';
import Verify from './pages/Verify';
// Import your CSS if you have it
// import { CssBaseline, Box } from '@mui/material';
// import Sidebar from './pages/Admin/SideBar';
// import Topbar from './pages/Admin/Topbar';
// import MainContent from './pages/Admin/MainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          
        </Routes>
      </div>
    </Router>
  );

  // Navbar Wrapper Component

  // return (
  //   <Box sx={{ display: 'flex' }}>
  //     <CssBaseline />
  //     <Topbar />
  //     <Sidebar />
  //     <Box
  //       component="main"
  //       sx={{
  //         flexGrow: 1,
  //         p: 3,
  //         marginLeft: '240px', // Adjust for the sidebar width
  //         marginTop: '64px', // Adjust for the topbar height
  //       }}
  //     >
  //       <MainContent />
  //     </Box>
  //   </Box>
  // );
}
const NavbarWrapper = () => {
  const location = useLocation(); // Get the current route location

  // Define which navbar to show based on the route
  if (location.pathname.startsWith('/Login')) {
    return <DashboardNavbar />; // Use a different navbar for dashboard routes
  }

  return <Navbar />; // Default navbar for other routes
};
export default App;