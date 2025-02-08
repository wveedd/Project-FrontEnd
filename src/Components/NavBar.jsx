// src/components/Navbar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Use NavLink for active styling
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import './Navbar.css'; // Import your Navbar CSS

function Navbar() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E2952' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Button color="inherit" sx={{ color: 'white' }} onClick={() => navigate('/')}>
          Certificate Verification
        </Button>
        </Typography>
        <Button color="inherit" sx={{ color: 'white' }} onClick={() => navigate('/about')}>
          About Us
        </Button>
        <Button color="inherit" sx={{ color: 'white' }} onClick={() => navigate('/register')}>
          Register
        </Button>
        <Button color="inherit" sx={{ color: 'white' }} onClick={() => navigate('/login')}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;