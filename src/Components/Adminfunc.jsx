import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import AdminDashboard from './AdminDashboard'; // Import your admin components
import OtherAdminComponent from './OtherAdminComponent'; // Example of another admin component

const Adminfunc = () => {
  return (
    <Router>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Button color="inherit" component={Link} to="/admin/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/admin/other">
            Other Component
          </Button>
        </Toolbar>
      </AppBar> */}
      <Container>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* <Route path="/admin/other" element={<OtherAdminComponent />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Container>
    </Router>
  );
};

export default Adminfunc;