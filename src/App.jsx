//import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import './index.css';
import Navbar from './Components/NavBar';
import DashboardNavbar from './Components/DashboardNavbar';
import Login from './pages/Login';
import Verify from './pages/Verify';
import AdminLogin from './Components/AdminLogin';
import Adminfunc from './Components/Adminfunc';
import AdminDashboard from './Components/AdminDashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token found:", token); // Debugging output
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    console.log("Logging in, token:", token);
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <div className="App">
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<Adminfunc />} />
          <Route path="/AdminDashboard/*"
  element={isAuthenticated ? <AdminDashboard handleLogout={handleLogout} /> : <Navigate to="/login" />} 
/>
        </Routes>
      </div>
    </Router>
  );

  // Navbar Wrapper Component

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