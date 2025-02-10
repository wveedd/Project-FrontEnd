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

const ViewCertificate = () => {
  const [certificates, setCertificates] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/admin/getCertis', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setCertificates(response.data);
        } else {
          setCertificates([]); // Set to empty array if data is not an array
          console.error('Expected an array but received:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching certificates:', error);
        setError('Failed to fetch certificates.');
        setLoading(false);
      }
    };

    fetchCertificates();
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
        View Certificates
      </Typography>
      {certificates.length === 0 ? (
        <Typography variant="body1" align="center">
          No certificates found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Certificate ID</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>PRN</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Enrollment Date</TableCell>
                <TableCell>Completion Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {certificates.map((certificate) => (
                <TableRow key={certificate.certificateId}>
                  <TableCell>{certificate.certificateId}</TableCell>
                  <TableCell>{certificate.studentName}</TableCell>
                  <TableCell>{certificate.prn}</TableCell>
                  <TableCell>{certificate.courseName}</TableCell>
                  <TableCell>{certificate.grade}</TableCell>
                  <TableCell>
                    {new Date(certificate.enrollmentDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(certificate.completionDate).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ViewCertificate;