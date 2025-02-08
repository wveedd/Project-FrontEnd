// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import axios from 'axios'; // Import Axios if you plan to make API calls

function LandingPage() {
  // Example function to fetch data using Axios (if needed)
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/landing'); // Replace with your actual API endpoint
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Uncomment the line below to fetch data when the component mounts
  // React.useEffect(() => { fetchData(); }, []);

  return (
    // Altered: Using Box with width: '100%' to cover the full width
    <Box sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem' }}>
      <Box className="hero" sx={{ position: 'relative', textAlign: 'center', color: 'white', mb: 4  }}>
        <img
          src="https://i.pinimg.com/736x/ab/7f/86/ab7f86ab6a787d2a03f4f000f288f740.jpg"
          alt=""
          style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        />
        <Box sx={{ padding: '2rem' }}>
          <Typography variant="h2" sx={{ color: 'black', fontFamily: 'Merriweather, serif'}}>Secure Your Future with Verified Credentials</Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem', color: 'black' }}>
            Instantly verify the authenticity of certificates, diplomas, and other credentials. Build trust and confidence in your achievements.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.href = '/verify'}>Verify Now</Button> 
          {/* to change */}
          <Button variant="outlined" color="secondary" onClick={() => window.location.href = '/about'} sx={{ marginLeft: '1rem' }}>Learn More</Button>
        </Box>
      </Box>

      <Box className="how-it-works" sx={{ mb: 4 }}>
        <Typography variant="h4" align="center">How It Works</Typography>
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">1. Submit Credential</Typography>
              <Typography>Upload the certificate or document.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">2. Automated Check</Typography>
              <Typography>Our system performs a secure verification.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">3. Receive Results</Typography>
              <Typography>Get immediate verification feedback.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box className="benefits" sx={{ mb: 4 }}>
        <Typography variant="h4" align="center">Benefits for Individuals & Organizations</Typography>
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">Prevent Fraud</Typography>
              <Typography>Ensure credential legitimacy.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">Save Time & Money</Typography>
              <Typography>Streamline verification.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">Enhance Trust</Typography>
              <Typography>Build confidence.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5">Secure & Reliable</Typography>
              <Typography>Dependable platform.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box className="testimonials" sx={{ mb: 4 }}>
        <Typography variant="h4" align="center">What Our Users Say</Typography>
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography>"Easy and reliable verification."</Typography>
              <Typography className="testimonial-author">- John Doe, HR Manager</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography>"Great tool for Verifying the students!"</Typography>
              <Typography className="testimonial-author">- Jane Smith, Placement Agency</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box className="cta" sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4">Ready to Get Started?</Typography>
        <Box sx={{ marginTop: '1rem' }}>
          <Button variant="contained" color="primary" onClick={() => window.location.href = '/login'}>Verify Now</Button>
          <Button variant="outlined" color="secondary" onClick={() => window.location.href = '/register'} sx={{ marginLeft: '1rem' }}>Register</Button>
        </Box>
      </Box>

      <footer className="footer" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography>&copy; {new Date().getFullYear()} C-DAC. All rights reserved</Typography>
      </footer>
    </Box>
  );
}

export default LandingPage;