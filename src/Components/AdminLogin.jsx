import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Grid,
  Box,
} from '@mui/material';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AdminLogin() {
  const [formData, setFormData] = useState({
    userName: '', // Changed from email to username
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
      const response = await axios.post('http://localhost:8080/api/admin/adminlogin', formData); // Replace with your actual API endpoint

      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('token', userData.token); // Store token in localStorage
        navigate('/AdminDashboard/'); // Redirect to AdminDashboard
      } else {
        setErrorMessage('Invalid username or password.'); // Updated error message
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

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change image every 3 seconds
  };

  // Array of image URLs for the slider
  const images = [
    'https://i.pinimg.com/736x/ab/7f/86/ab7f86ab6a787d2a03f4f000f288f740.jpg',
    'https://i.pinimg.com/1200x/cc/f4/9b/ccf49b6cd6ce914b80a18e9316a44dcd.jpg',
    
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: '#F1E7D7', borderRadius: '8px', boxShadow: 3, width: '130%', maxWidth: '1200px', height: '650px' }}
      >
        {/* Left Side: Image Slider */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', padding: '5rem' }}>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>

        {/* Right Side: Login Form */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', padding: '2rem' }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'black', fontFamily: 'Merriweather, serif', textAlign: 'center' }}
            >
              ADMIN-LOGIN
            </Typography>
            <form className="login-form" onSubmit={handleSubmit}>
              <TextField
                label="Username" // Changed from Email to Username
                type="text"
                name="adminUserName"
                value={formData.adminUserName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                name="adminPassword"
                value={formData.adminPassword}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <br />
              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952', color: 'white' } }}
                fullWidth
              >
                Admin-Login
              </Button>

              {errorMessage && <Typography color="error" className="error-message">{errorMessage}</Typography>}
            </form>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={errorMessage}
      />
    </Container>
  );
}

export default AdminLogin;