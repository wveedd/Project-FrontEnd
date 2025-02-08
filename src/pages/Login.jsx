// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';
import axios from 'axios';
// import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('/api/login', formData); // Replace with your actual API endpoint

      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('token', userData.token); // Or store user data
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setErrorMessage('Invalid email or password.');
        setSnackbarOpen(true); // Open Snackbar for error
      }
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again later.');
      console.error('Login error:', error);
      setSnackbarOpen(true); // Open Snackbar for error
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm" className="login-page" sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem', marginRight : '0rem' }}>
      <div className="login-container">
      <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif',textAlign: 'center'}} >
        LOGIN
      </Typography>        
      <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <br /><br />
          <Button 
          type="submit" 
          variant="contained" 
          sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952',color: 'white' } }} 
          fullWidth
        >Login
        </Button>

          {errorMessage && <Typography color="error" className="error-message">{errorMessage}</Typography>}
<br /><br />
          <Typography className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </form>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={errorMessage}
      />
    </Container>
  );
}

export default Login;