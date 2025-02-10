import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userPassword: '',
    phoneNumber: '',
    organization: '',
    designation: '',
    typeOfUser: '',
    address: '',
    reasonForVerification: '',
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

    // Validate form data
    for (const key in formData) {
      if (formData[key] === '') {
        setErrorMessage(`Please fill out the ${key} field.`);
        return;
      }
    }

    try {
      const response = await axios.post('http://localhost:8080/api/certi/users/register', formData, {
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
    'https://i.pinimg.com/736x/ab/7f/86/ab7f86ab6a787d2a03f4f000f288f740.jpg',
    'https://i.pinimg.com/1200x/cc/f4/9b/ccf49b6cd6ce914b80a18e9316a44dcd.jpg',
  ];

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ backgroundColor: '#F1E7D7', borderRadius: '8px', boxShadow: 3, width: '130%', maxWidth: '1200px', height: '650px' }}>
        {/* Left Side: Image Slider */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ marginTop: '50%', maxWidth: '600px', width: '100%', height: '100%', padding: '0', overflow: 'hidden' }}>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} // Ensure the image covers the container
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>

        {/* Right Side: Registration Form */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '2rem' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif', textAlign: 'center' }}>
              REGISTER
            </Typography>
            <form className="registration-form" onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                label="Password"
                id="password"
                name="userPassword"
                type="password"
                value={formData.userPassword}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                id="PhoneNo"
                name="phoneNumber"
                type="number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Organization"
                id="Organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Designation"
                id="Designation"
                name="designation"
                value={formData.designation}
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Reason For Verification"
                id="ReasonForVer"
                name="reasonForVerification"
                value={formData.reasonForVerification}
                onChange={handleChange}
                required
              />
              <br />
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

              <Typography variant="body2" className="login-link">
                Already have an account? <Link to="/login">Login here</Link>
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Registration;