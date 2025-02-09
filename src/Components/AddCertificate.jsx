import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddCertificate = () => {
  const [formData, setFormData] = useState({
    certificateId: '',
    studentName: '',
    prn: '',
    courseName: '',
    grade: '',
    enrollmentDate: null,
    completionDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/certificates', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Certificate added:', response.data);
      alert('Certificate added successfully!');
      // Reset form after submission
      setFormData({
        certificateId: '',
        studentName: '',
        prn: '',
        courseName: '',
        grade: '',
        enrollmentDate: null,
        completionDate: null,
      });
    } catch (error) {
      console.error('Error adding certificate:', error);
      alert('Failed to add certificate.');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm" sx={{ fontFamily: 'Merriweather, serif', mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Add Certificate
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Certificate ID"
            name="certificateId"
            value={formData.certificateId}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="PRN"
            name="prn"
            value={formData.prn}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Course Name"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            margin="normal"
            required
          />
          <DatePicker
            label="Enrollment Date"
            value={formData.enrollmentDate}
            onChange={(date) => handleDateChange('enrollmentDate', date)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                required
              />
            )}
          />
          <DatePicker
            label="Completion Date"
            value={formData.completionDate}
            onChange={(date) => handleDateChange('completionDate', date)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                required
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
          >
            Add Certificate
          </Button>
        </Box>
      </Container>
    </LocalizationProvider>
  );
};

export default AddCertificate;