import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const DashboardNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard Navbar
        </Typography>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;