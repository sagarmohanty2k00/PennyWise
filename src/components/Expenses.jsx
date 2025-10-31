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
  TextField,
  MenuItem,
  Box,
} from "@mui/material";

import Grid from "@mui/material/Grid";

const categories = [
  { value: "*", label: "All" },
  { value: "fixed", label: "Fixed Spends" },
  { value: "volatile", label: "Volatile Spends" },
  { value: "savings", label: "Savings" },
];

const dateFilters = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "year", label: "This Year" },
];

const sampleTransactions = [
  { id: 1, amount: -15000, category: "fixed", description: "Rent", date: "2025-10-01" },
  { id: 2, amount: -2000, category: "fixed", description: "Electricity Bill", date: "2025-10-10" },
  { id: 3, amount: -500, category: "volatile", description: "Groceries", date: "2025-10-15" },
  { id: 4, amount: -1000, category: "volatile", description: "Movie", date: "2025-10-20" },
  { id: 5, amount: +3000, category: "savings", description: "Investment", date: "2025-10-05" },
  { id: 6, amount: +2000, category: "savings", description: "Emergency Fund", date: "2025-10-13" },
];

// Helper to filter transactions by selected date range
const filterByDateRange = (txns, range) => {
  if (range === "all") return txns;

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return txns.filter((tx) => {
    const txDate = new Date(tx.date);
    txDate.setHours(0, 0, 0, 0);

    switch (range) {
      case "today":
        return txDate.getTime() === now.getTime();
      case "week": {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        return txDate >= startOfWeek && txDate <= now;
      }
      case "month": {
        return (
          txDate.getFullYear() === now.getFullYear() &&
          txDate.getMonth() === now.getMonth()
        );
      }
      case "year": {
        return txDate.getFullYear() === now.getFullYear();
      }
      default:
        return true;
    }
  });
};

export default function Expenses() {
  const [transactions] = useState(sampleTransactions);
  const [filterCategory, setFilterCategory] = useState("*");
  const [filterDateRange, setFilterDateRange] = useState("all");

  const filteredTxns = filterByDateRange(
    transactions.filter((tx) => (filterCategory ? (tx.category === filterCategory || filterCategory === "*") : true)),
    filterDateRange
  );

  const getCategoryLabel = (cat) => {
    const found = categories.find((c) => c.value === cat);
    return found ? found.label : cat;
  };

  const groupByCategory = (txns) => {
    return txns.reduce((acc, tx) => {
      (acc[tx.category] = acc[tx.category] || []).push(tx);
      return acc;
    }, {});
  };

  const groupedTxns = groupByCategory(filteredTxns);

  const formatAmount = (amt) => {
    const isCredit = amt > 0;
    const color = isCredit ? "green" : "red";
    const sign = isCredit ? "+" : "-";
    return (
      <Typography component="span" sx={{ color, fontWeight: "bold" }}>
        {sign}₹{Math.abs(amt).toLocaleString()}
      </Typography>
    );
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const totalAmount = (txns) => txns.reduce((sum, t) => sum + t.amount, 0);

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Expenses & Savings
      </Typography>

      {/* Filters with smaller Add Button */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 3, alignItems: "center" }}
      >
        <TextField
          select
          label="Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          sx={{ minWidth: 150 }}
          size="small"
          helperText="Filter by Category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Date Range"
          value={filterDateRange}
          onChange={(e) => setFilterDateRange(e.target.value)}
          sx={{ minWidth: 150 }}
          size="small"
          helperText="Filter by Date"
        >
          {dateFilters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" size="medium" onClick={() => alert("Add Expense/Income clicked!")}>
          Add
        </Button>
      </Stack>

      {/* Grouped transaction tables */}
      {categories.map(({ value, label }) => {
        const txns = groupedTxns[value] || [];
        if (txns.length === 0) return null;

        return (
          <Box key={value} sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom>
              {label} (Total: ₹{totalAmount(txns).toLocaleString()})
            </Typography>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Amount (₹)</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {txns.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>{tx.description}</TableCell>
                      <TableCell>{formatAmount(tx.amount)}</TableCell>
                      <TableCell>{formatDate(tx.date)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );
      })}
    </Box>
  );
}
