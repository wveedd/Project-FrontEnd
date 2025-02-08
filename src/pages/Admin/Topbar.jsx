import React from 'react';
import { AppBar, Toolbar, Typography, Button  } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(1)`, // Adjust for the sidebar width
        marginLeft: '200px', // Adjust for the sidebar width
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure the topbar is above the sidebar
      }}
    >
      <Toolbar sx={{ backgroundColor: '#1E2952' }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1}}>
          Admin Dashboard
        </Typography>
        <Button color="inherit" >Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;