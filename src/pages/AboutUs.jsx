// src/pages/AboutUs/AboutUs.jsx
import React from 'react';
import { Container, Typography, Grid, List, ListItem, ListItemText, Box, Paper } from '@mui/material';
import axios from 'axios'; // Import Axios if you plan to make API calls
// import './AboutUs.css';

function AboutUs() {
  // Example function to fetch data using Axios (if needed)
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/about'); // Replace with your actual API endpoint
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Uncomment the line below to fetch data when the component mounts
  // React.useEffect(() => { fetchData(); }, []);

  return (
    <Box sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem' }}>
      <Container className="about-us-page" sx={{ padding: '2rem' }}>
        <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            The Certificate Verification System is a web-based application that allows
            users (companies and administrators) to verify the authenticity of
            educational certificates and associated marks stored in a database. This
            system streamlines the verification process by cross-checking certificate
            details (such as Certificate ID, Marks ID, or uploaded certificate
            images) against records maintained in the system.
          </Typography>
        </Paper>
        <br /><br />
        <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h2" gutterBottom>
            Key Features
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Secure login and registration mechanism for companies." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Companies can verify certificates presented by candidates to confirm their authenticity before hiring." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Users can view or download certificates for personal use after payment." />
            </ListItem>
          </List>
        </Paper>
        <br /><br />

        {/* <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h2" gutterBottom>
            Technologies Used
          </Typography>
          <Grid container spacing={4}>
            <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>

              <Grid item xs={12} sm={4}>
                <Typography variant="h3">Frontend</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="ReactJS" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="JavaScript (ES6+)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="HTML5" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="JSX" />
                  </ListItem>
                </List>
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3">Backend</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Spring Boot (Spring MVC, Spring Data JPA)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="RESTful API Development" />
                  </ListItem>
                </List>
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3">Database</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="MySQL" />
                  </ListItem>
                </List>
              </Grid>
            </Paper>
          </Grid>
        </Paper> */}
        <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h2" gutterBottom>
            Technologies Used
          </Typography>
          <Grid container spacing={4}>
            {/* Frontend Section */}
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
                <Typography variant="h3">Frontend</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="ReactJS" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="JavaScript (ES6+)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="HTML5" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="JSX" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Backend Section */}
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
                <Typography variant="h3">Backend</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Spring Boot (Spring MVC, Spring Data JPA)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="RESTful API Development" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Database Section */}
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
                <Typography variant="h3">Database</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="MySQL" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <br /><br />
        <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h3" gutterBottom>
            Payment Gateway
          </Typography>
          <Typography variant="body1" paragraph>
            Integration for payment (e.g., Razorpay, Stripe, or PayPal)
          </Typography>
        </Paper>
        <br /><br />
        <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to provide a reliable and efficient platform for verifying
            educational credentials, fostering trust and transparency in the academic
            and professional world.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default AboutUs;