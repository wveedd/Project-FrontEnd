import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";

const Verify = () => {
    const [formData, setFormData] = useState({
      certificateId: "",
      studentName: "",
      prn: "",
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post("http://localhost:8080/api/verify", formData);
          console.log("Response from backend:", response.data);
          alert("Verification data sent successfully!");
        } catch (error) {
          console.error("Error sending data to backend:", error);
          alert("Failed to send verification data.");
        }
      };
    
      return (
    <Container
      maxWidth="lg" // Changed to 'lg' to accommodate the two-column layout
      className="login-page"
      sx={{
        backgroundColor: '#F1E7D7',
        minHeight: '100vh',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <Grid container spacing={2}>
        {/* Left Grid for Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
          </Box>
        </Grid>

        {/* Right Grid for Login Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
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
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              {errorMessage && <Typography color="error" className="error-message">{errorMessage}</Typography>}
              <br /><br />
              <Typography className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
              </Typography>
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