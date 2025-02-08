// src/pages/Registration/Registration.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Grid,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    UserId: '',
    PhoneNo: '',
    Organization: '',
    Designation: '',
    typeOfUser: '',
    Address: '',
    ReasonForVer: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Something went wrong during registration.');
      } else {
        setErrorMessage('A network error occurred. Please try again later.');
      }
      console.error('Registration error:', error);
    }
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
    'https://via.placeholder.com/800x600?text=Image+1',
    'https://via.placeholder.com/800x600?text=Image+2',
    'https://via.placeholder.com/800x600?text=Image+3',
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1E7D7',
        padding: '2rem',
      }}
    >
      {/* Parent Grid to hold both containers */}
      <Grid
        container
        spacing={4} // Add spacing between the two containers
        sx={{
          maxWidth: '1200px', // Set a maximum width for the grid
          width: '100%', // Ensure the grid takes full width
        }}
      >
        {/* Left Container: Image Slider */}
        <Grid item xs={12} md={6}>
          <Container
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              padding: '10rem',
              height: '600px', // Fixed height for the container
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'center',
              
            }}
          >
            <Slider {...sliderSettings} style={{ width: '100%' }}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: '100%', height: '500px', borderRadius: '8px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </Slider>
          </Container>
        </Grid>

        {/* Right Container: Registration Form */}
        <Grid item xs={12} md={6}>
          <Container
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              padding: '2rem',
              height: '600px', // Fixed height for the container
              overflowY: 'auto', // Add scroll if content overflows
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'black', fontFamily: 'Merriweather, serif', textAlign: 'center' }}
            >
              REGISTER
            </Typography>
            <Box component="form" onSubmit={handleSubmit} className="registration-form">
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="User Id"
                id="UserId"
                name="UserId"
                value={formData.UserId}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                id="PhoneNo"
                name="PhoneNo"
                type="number"
                value={formData.PhoneNo}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Organization"
                id="Organization"
                name="Organization"
                value={formData.Organization}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Designation"
                id="Designation"
                name="Designation"
                value={formData.Designation}
                onChange={handleChange}
                required
              />
              <FormControl fullWidth margin="normal" required>
                <InputLabel id="typeOfUser-label">Type Of User</InputLabel>
                <Select
                  labelId="typeOfUser-label"
                  id="TypeOfUser"
                  name="typeOfUser"
                  value={formData.typeOfUser}
                  onChange={handleChange}
                  label="Type Of User"
                >
                  <MenuItem value="" disabled>
                    Select User Type
                  </MenuItem>
                  <MenuItem value="PlacementAgency">Placement Agency</MenuItem>
                  <MenuItem value="Institution">Institution</MenuItem>
                  <MenuItem value="Company">Company</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                label="Address"
                id="Address"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Reason For Verification"
                id="ReasonForVer"
                name="ReasonForVer"
                value={formData.ReasonForVer}
                onChange={handleChange}
                required
              />
              <br /><br />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952', color: 'white' } }}
                fullWidth
              >
                Register
              </Button>
              {errorMessage && (
                <Typography color="error" variant="body2" gutterBottom>
                  {errorMessage}
                </Typography>
              )}
              {successMessage && (
                <Typography color="primary" variant="body2" gutterBottom>
                  {successMessage}
                </Typography>
              )}
              <br /> <br />
              <Typography variant="body2" className="login-link">
                Already have an account? <Link to="/login">Login here</Link>
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Registration;