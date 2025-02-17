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

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      console.log('Sending login request with data:', formData); // Debugging
      const response = await axios.post('http://localhost:8080/api/certi/users/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Received response:', response); // Debugging

      if (response.status >= 200 && response.status < 300) {
        const userData = response.data;
        localStorage.setItem('token', userData.token); // Ensure the backend returns a token
        setSuccessMessage('Login successful!');
        setSnackbarOpen(true);
        setTimeout(() => navigate('/verify'), 2000);
      } else {
        setErrorMessage('Invalid email or password.');
        setSnackbarOpen(true);
      }
    } catch (error) {
      if (error.response) {
        // Backend returned an error response (e.g., 401 Unauthorized)
        setErrorMessage(error.response.data || 'Invalid email or password.');
      } else {
        // Network or other errors
        setErrorMessage('A network error occurred. Please try again later.');
      }
      setSnackbarOpen(true);
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
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
    autoplaySpeed: 3000,
  };

  // Array of image URLs for the slider
  const images = [
    'https://i.pinimg.com/736x/ab/7f/86/ab7f86ab6a787d2a03f4f000f288f740.jpg',
    'https://i.pinimg.com/1200x/cc/f4/9b/ccf49b6cd6ce914b80a18e9316a44dcd.jpg',
  ];

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ backgroundColor: '#F1E7D7', borderRadius: '8px', boxShadow: 3, width: '130%', maxWidth: '1200px', height: '650px' }}>
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
            <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif', textAlign: 'center' }}>
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
                sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952', color: 'white' } }}
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>

              {errorMessage && (
                <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                  {errorMessage}
                </Typography>
              )}
              <br /><br />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography>
                  Don&apos;t have an account? <Link to="/register">Register here</Link>
                </Typography>
                <Typography>
                  or
                </Typography>
                <Typography className="Admin-link">
                  Login as Admin <Link to="/admin-login">Admin Login</Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={errorMessage || successMessage}
      />
    </Container>
  );
}

export default Login;