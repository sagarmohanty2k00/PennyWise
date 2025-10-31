import { useState } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const [cashInHand] = useState(15000);
  const [creditCardBudget] = useState(35000);
  // Transactions with date added
  const [transactions] = useState([
    {
      id: 1,
      amount: -2000,
      category: "Lunch",
      mode: "Volatile",
      description: "Lunch with friends",
      date: "2025-10-27",
    },
    {
      id: 2,
      amount: -5000,
      category: "Rent",
      mode: "Fixed",
      description: "Monthly rent",
      date: "2025-10-01",
    },
    {
      id: 3,
      amount: 70000,
      category: "Salary",
      mode: "Credit",
      description: "Monthly salary",
      date: "2025-10-25",
    },
    {
      id: 4,
      amount: -1500,
      category: "Movie",
      mode: "Volatile",
      description: "Movie ticket",
      date: "2025-10-26",
    },
  ]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>

      <Stack direction="row" spacing={4} sx={{ mb: 3 }}>
        <Typography variant="h6">
          Cash In Hand: ₹{cashInHand.toLocaleString()}
        </Typography>
        <Typography variant="h6">
          Credit Card Budget Left: ₹{creditCardBudget.toLocaleString()}
        </Typography>
      </Stack>

      {/* Buttons on top of transactions */}
      <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
        <Button
          variant="contained"
          onClick={() => alert("Add Expense clicked - integrate later!")}
        >
          Add Expense
        </Button>
        <Button
          variant="contained"
          onClick={() => alert("Add Income clicked - integrate later!")}
        >
          Add Income
        </Button>
      </Stack>

      <Typography variant="h5" gutterBottom>
        Transactions
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount (₹)</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Mode</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((tx) => {
              const isCredit = tx.amount > 0;
              return (
                <TableRow key={tx.id}>
                  <TableCell>{formatDate(tx.date)}</TableCell>
                  <TableCell
                    sx={{
                      color: isCredit ? "green" : "red",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isCredit ? "+" : "-"}₹{Math.abs(tx.amount).toLocaleString()}
                  </TableCell>
                  <TableCell>{tx.category}</TableCell>
                  <TableCell>{tx.mode}</TableCell>
                  <TableCell>{tx.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
