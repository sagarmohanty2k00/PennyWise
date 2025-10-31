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
  Box,
} from "@mui/material";

export default function EMIs() {
  const [emis, setEmis] = useState([
    {
      id: 1,
      amount: 2000,
      startDate: "2025-01-01",
      endDate: "2025-12-01",
      totalInstallments: 12,
      paidInstallments: 5,
    },
    {
      id: 2,
      amount: 1500,
      startDate: "2025-02-15",
      endDate: "2025-11-15",
      totalInstallments: 10,
      paidInstallments: 10,
    },
  ]);

  const calculateNextEmiDate = (emi) => {
    if (emi.paidInstallments >= emi.totalInstallments) {
      return null; // Completed
    }
    const start = new Date(emi.startDate);
    const nextInstallmentIndex = emi.paidInstallments; // zero-based
    const nextDate = new Date(start);
    nextDate.setMonth(start.getMonth() + nextInstallmentIndex);
    return nextDate;
  };

  const daysDifference = (date) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const diffTime = date - now;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDaysLeftOrOverdue = (days) => {
    if (days === null) return "-";

    if (days === 0) return "today";
    if (days === 1) return "tomorrow";
    if (days === -1) return "yesterday";

    if (days > 1) {
      return `in ${days} days`;
    }
    if (days < -1) {
      return `${Math.abs(days)} days overdue`;
    }
    return ""; // fallback, should not happen
  };

  const getStatusColor = (days) => {
    if (days === null) return "gray"; // Completed
    if (days <= 0) return "red";
    if (days <= 7) return "orange";
    return "green";
  };

  const getStatusText = (emi) =>
    emi.paidInstallments >= emi.totalInstallments ? "Paid" : "Not Paid";

  const markAsPaid = (id) => {
    setEmis((prevEmis) =>
      prevEmis.map((emi) => {
        if (emi.id === id && emi.paidInstallments < emi.totalInstallments) {
          return { ...emi, paidInstallments: emi.paidInstallments + 1 };
        }
        return emi;
      })
    );
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        EMIs
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>EMI Amount (₹)</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Total Installments</TableCell>
              <TableCell>Paid Installments</TableCell>
              <TableCell>Next EMI</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emis.map((emi) => {
              const nextDate = calculateNextEmiDate(emi);
              const daysToNext = nextDate ? daysDifference(nextDate) : null;
              const statusColor = getStatusColor(daysToNext);
              const statusText = getStatusText(emi);
              const canMarkPaid =
                emi.paidInstallments < emi.totalInstallments && statusText === "Not Paid";

              return (
                <TableRow key={emi.id}>
                  <TableCell>{emi.amount.toLocaleString()}</TableCell>
                  <TableCell>{new Date(emi.startDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(emi.endDate).toLocaleDateString()}</TableCell>
                  <TableCell>{emi.totalInstallments}</TableCell>
                  <TableCell>{emi.paidInstallments}</TableCell>
                  <TableCell
                    sx={{
                      color: statusColor,
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {formatDaysLeftOrOverdue(daysToNext)}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: statusText === "Paid" ? "green" : "red",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {statusText}
                  </TableCell>
                  <TableCell>
                    {canMarkPaid ? (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => markAsPaid(emi.id)}
                      >
                        Mark as Paid
                      </Button>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
