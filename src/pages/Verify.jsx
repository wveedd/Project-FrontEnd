import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';
import axios from 'axios';
// import './Verify.css'; // Uncomment if you have a CSS file for styling

function Verify() {
  const [formData, setFormData] = useState({
    name: '',
    prnNumber: '',
    marksId: '',
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
      const response = await axios.post('/api/verify', formData); // Replace with your actual API endpoint

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

  return (
    <Container maxWidth="sm" className="verify-page" sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem', marginRight: '0rem' }}>
      <div className="verify-container">
        <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif', textAlign: 'center' }}>
          VERIFY
        </Typography>
        <form className="verify-form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="PRN Number"
            type="text"
            name="prnNumber"
            value={formData.prnNumber}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Marks ID"
            type="text"
            name="marksId"
            value={formData.marksId}
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

export default Verify;