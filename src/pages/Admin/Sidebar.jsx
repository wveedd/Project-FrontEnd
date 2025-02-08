import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReceiptIcon from '@mui/icons-material/Receipt';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginTop: '64px', // Adjust for the topbar height
        },
      }}
    >
      <Drawer variant="permanent" anchor="left">
        <List>
          {/* Add Certificate */}
          <ListItem button onClick={() => navigate('/certificate')}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Add Certificate" />
          </ListItem>

          {/* View Certificate */}
          <ListItem button onClick={() => navigate('/certificate')}>
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="View Certificate" />
          </ListItem>

          {/* View User */}
          <ListItem button onClick={() => navigate('/certificate')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="View User" />
          </ListItem>

          {/* View Verification */}
          <ListItem button onClick={() => navigate('/certificate')}>
            <ListItemIcon>
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText primary="View Verification" />
          </ListItem>

          {/* View Transaction */}
          <ListItem button onClick={() => navigate('/certificate')}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="View Transaction" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;