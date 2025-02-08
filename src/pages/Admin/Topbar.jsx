import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

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
      <Toolbar>
        <Typography variant="h6" noWrap>
          Admin Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;