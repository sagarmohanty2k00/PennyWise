import { useState } from "react";
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const [cashInHand] = useState(15000);
  const [creditCardBudget] = useState(35000);
  const [expenses] = useState([
    { id: 1, amount: 2000, category: "Lunch", mode: "Volatile", description: "Lunch with friends" },
    { id: 2, amount: 5000, category: "Rent", mode: "Fixed", description: "Monthly rent" },
  ]);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>

      <Stack direction="row" spacing={4} sx={{ mb: 3 }}>
        <Typography variant="h6">Cash In Hand: ₹{cashInHand.toLocaleString()}</Typography>
        <Typography variant="h6">Credit Card Budget Left: ₹{creditCardBudget.toLocaleString()}</Typography>
      </Stack>

      <Typography variant="h5" gutterBottom>
        Expenses
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Amount (₹)</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Mode</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((exp) => (
              <TableRow key={exp.id}>
                <TableCell>{exp.amount}</TableCell>
                <TableCell>{exp.category}</TableCell>
                <TableCell>{exp.mode}</TableCell>
                <TableCell>{exp.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} direction="row" sx={{ mb: 4 }}>
        <Button variant="contained" onClick={() => alert("Add Expense clicked - integrate later!")}>
          Add Expense
        </Button>
        <Button variant="contained" onClick={() => alert("Add Income clicked - integrate later!")}>
          Add Income
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button component={Link} to="/expenses" variant="outlined">
          Expenses
        </Button>
        <Button component={Link} to="/emis" variant="outlined">
          EMIs
        </Button>
        <Button component={Link} to="/stats" variant="outlined">
          Stats
        </Button>
      </Stack>
    </>
  );
}
