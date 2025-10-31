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

  const renderList = (items) => items.map((item) => (
    <li key={item.id}>{item.description}: ₹{item.amount}</li>
  ));

  return (
    <div>
      <h1>Expenses</h1>

      <h3>Fixed Spends</h3>
      <ul>{renderList(fixedSpends)}</ul>

      <h3>Volatile Spends</h3>
      <ul>{renderList(volatileSpends)}</ul>

      <h3>Savings</h3>
      <ul>{renderList(savings)}</ul>
    </div>
  );
}
