import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Snackbar, Grid, Box } from '@mui/material';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Login.css';
// import './Verify.css'; // Uncomment if you have a CSS file for styling

function Verify() {
  const [formData, setFormData] = useState({
    studentName: '',
    prn: '',
    certificateId: '',
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
      const response = await axios.post('http://localhost:8080/api/verification/initiate-verification', formData); // Replace with your actual API endpoint

      if (response.status === 200) {
        const verificationData = response.data;
        localStorage.setItem('verificationToken', verificationData.token); // Or store verification data
        navigate('/verification-success'); // Redirect to success page
      } else {
        setErrorMessage('Verification failed. Please check your details.');
        setSnackbarOpen(true); // Open Snackbar for error
      }
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again later.');
      console.error('Verification error:', error);
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
      ''
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

    {/* Right Side: Verify Form */}
    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', padding: '2rem' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif', textAlign: 'center' }}>
          VERIFY
        </Typography>
        <form className="verify-form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="PRN Number"
            type="text"
            name="prn"
            value={formData.prn}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Certificate ID"
            type="text"
            name="certificateId"
            value={formData.certificateId}
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
          >
            Verify
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
export default Verify;