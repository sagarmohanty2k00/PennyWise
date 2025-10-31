import { useState } from "react";
import { Typography, List, ListItem, ListItemText, Divider, TextField, Button, Box, Stack } from "@mui/material";

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
  ]);
  const [form, setForm] = useState({
    amount: "",
    startDate: "",
    endDate: "",
  });

  const addEmi = (e) => {
    e.preventDefault();
    if (form.amount && form.startDate && form.endDate) {
      setEmis((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          amount: parseFloat(form.amount),
          startDate: form.startDate,
          endDate: form.endDate,
          totalInstallments: 12,
          paidInstallments: 0,
        },
      ]);
      setForm({ amount: "", startDate: "", endDate: "" });
    }
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        EMIs
      </Typography>

      <List>
        {emis.map((emi) => (
          <ListItem key={emi.id} divider>
            <ListItemText
              primary={`EMI: ₹${emi.amount} from ${emi.startDate} to ${emi.endDate}`}
              secondary={`Paid ${emi.paidInstallments}/${emi.totalInstallments} installments`}
            />
          </ListItem>
        ))}
      </List>

      <Box component="form" onSubmit={addEmi} sx={{ mt: 4, maxWidth: 400 }}>
        <Stack spacing={2}>
          <TextField
            label="EMI amount"
            type="number"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />
          <TextField
            label="Start date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            required
          />
          <TextField
            label="End date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            required
          />
          <Button type="submit" variant="contained">
            Add EMI
          </Button>
        </Stack>
      </Box>
    </>
  );
}
