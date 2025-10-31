import { Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export default function Expenses() {
  const fixedSpends = [
    { id: 1, description: "Rent", amount: 15000 },
    { id: 2, description: "Electricity Bill", amount: 2000 },
  ];
  const volatileSpends = [
    { id: 3, description: "Movie", amount: 800 },
    { id: 4, description: "Cigarettes", amount: 500 },
  ];
  const savings = [
    { id: 5, description: "Emergency Fund", amount: 10000 },
    { id: 6, description: "Vacation Fund", amount: 3000 },
  ];

  const renderList = (items) => (
    <List>
      {items.map((item) => (
        <ListItem key={item.id} divider>
          <ListItemText primary={item.description} secondary={"₹" + item.amount} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Expenses
      </Typography>

      <Typography variant="h5">Fixed Spends</Typography>
      {renderList(fixedSpends)}

      <Typography variant="h5" sx={{ mt: 3 }}>
        Volatile Spends
      </Typography>
      {renderList(volatileSpends)}

      <Typography variant="h5" sx={{ mt: 3 }}>
        Savings
      </Typography>
      {renderList(savings)}
    </>
  );
}
