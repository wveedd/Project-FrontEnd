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
  Box 
} from '@mui/material';
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
    ReasonForVer: ''
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

  return (
    <Container maxWidth="sm" className="registration-page" sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem', marginRight : '0rem' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif',textAlign: 'center'}} >
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
            <MenuItem value="" disabled>Select User Type</MenuItem>
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
          sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952',color: 'white' } }} 
          fullWidth
        >Register
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
  );
}

export default Registration;