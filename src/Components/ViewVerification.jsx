import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
} from '@mui/material';

const ViewVerification = () => {
  const [verifications, setVerifications] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch verification data from the backend API
  useEffect(() => {
    const fetchVerifications = async () => {
      try {
        const response = await axios.get('/api/verifications', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setVerifications(response.data);
        } else {
          setVerifications([]); // Set to empty array if data is not an array
          console.error('Expected an array but received:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching verifications:', error);
        setError('Failed to fetch verifications.');
        setLoading(false);
      }
    };

    fetchVerifications();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ fontFamily: 'Merriweather, serif', mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        View Verifications
      </Typography>
      {verifications.length === 0 ? (
        <Typography variant="body1" align="center">
          No verifications found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Verification ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Verified Date</TableCell>
                <TableCell>Certificate ID</TableCell>
                <TableCell>Transaction ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {verifications.map((verification) => (
                <TableRow key={verification.verificationId}>
                  <TableCell>{verification.verificationId}</TableCell>
                  <TableCell>{verification.status}</TableCell>
                  <TableCell>{verification.type}</TableCell>
                  <TableCell>
                    {new Date(verification.verifiedDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{verification.certificateId}</TableCell>
                  <TableCell>{verification.transactionId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ViewVerification;