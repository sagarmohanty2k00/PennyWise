import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Stats() {
  const categorySpends = [
    { category: "Rent", amount: 15000 },
    { category: "Food", amount: 5000 },
    { category: "Entertainment", amount: 2000 },
  ];

  const dailySpends = [
    { day: "2025-10-25", amount: 1500 },
    { day: "2025-10-26", amount: 2000 },
    { day: "2025-10-27", amount: 1300 },
  ];

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Stats
      </Typography>

      <Typography variant="h5" gutterBottom>
        Category-wise Spending (Pie Chart placeholder)
      </Typography>
      <List>
        {categorySpends.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.category} secondary={`₹${item.amount}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Daily Spending (Histogram placeholder)
      </Typography>
      <List>
        {dailySpends.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.day} secondary={`₹${item.amount}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
