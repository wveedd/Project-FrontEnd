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

const Transactions = () => {
  const [transactions, setTransactions] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch transaction data from the backend API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setTransactions(response.data);
        } else {
          setTransactions([]); // Set to empty array if data is not an array
          console.error('Expected an array but received:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError('Failed to fetch transactions.');
        setLoading(false);
      }
    };

    fetchTransactions();
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
        Transactions
      </Typography>
      {transactions.length === 0 ? (
        <Typography variant="body1" align="center">
          No transactions found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Transaction Date</TableCell>
                <TableCell>Transaction Type</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Verification ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.transactionId}>
                  <TableCell>{transaction.transactionId}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    {new Date(transaction.transactionDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{transaction.transactionType}</TableCell>
                  <TableCell>{transaction.user_Id}</TableCell>
                  <TableCell>{transaction.verificationId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Transactions;