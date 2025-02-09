import React from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Container,
  Box,
} from '@mui/material';
import {
  AddCircleOutline as AddCertificateIcon,
  ListAlt as ViewCertificatesIcon,
  People as ViewUsersIcon,
  VerifiedUser as ViewVerificationsIcon,
  Payment as TransactionsIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import AddCertificate from './AddCertificate';
import ViewCertificate from './ViewCertificate';
import ViewUsers from './ViewUsers';
import ViewVerification from './ViewVerification';
import Transactions from './Transactions';

const AdminDashboard = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleAdminLogout = async () => {
    try {
      await axios.post('/api/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token');
      handleLogout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> {/* Empty Toolbar to offset content below AppBar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Add Certificate', path: 'add-certificate', icon: <AddCertificateIcon /> },
              { text: 'View Certificates', path: 'view-certificates', icon: <ViewCertificatesIcon /> },
              { text: 'View Users', path: 'view-users', icon: <ViewUsersIcon /> },
              { text: 'View Verifications', path: 'view-verifications', icon: <ViewVerificationsIcon /> },
              { text: 'Transactions', path: 'transactions', icon: <TransactionsIcon /> },
            ].map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                to={`/AdminDashboard/${item.path}`}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LogoutIcon />}
            onClick={handleAdminLogout}
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Empty Toolbar to offset content below AppBar */}
        <Container>
          <Routes>
            <Route path="/add-certificate" element={<AddCertificate />} />
            <Route path="/view-certificates" element={<ViewCertificate />} />
            <Route path="/view-users" element={<ViewUsers />} />
            <Route path="/view-verifications" element={<ViewVerification />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/" element={<Navigate to="/AdminDashboard/view-certificates" />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;