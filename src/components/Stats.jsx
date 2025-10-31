import { useState, useEffect } from "react";

export default function Stats() {
  // Dummy stats data
  const [categorySpends, setCategorySpends] = useState([
    { category: "Rent", amount: 15000 },
    { category: "Food", amount: 5000 },
    { category: "Entertainment", amount: 2000 },
  ]);

  const [dailySpends, setDailySpends] = useState([
    { day: "2025-10-25", amount: 1500 },
    { day: "2025-10-26", amount: 2000 },
    { day: "2025-10-27", amount: 1300 },
  ]);

  return (
    <div>
      <h1>Stats</h1>

      <h3>Category-wise Spending (Pie Chart placeholder)</h3>
      <ul>
        {categorySpends.map((item, idx) => (
          <li key={idx}>{item.category}: ₹{item.amount}</li>
        ))}
      </ul>

      <h3>Daily Spending (Histogram placeholder)</h3>
      <ul>
        {dailySpends.map((item, idx) => (
          <li key={idx}>
            {item.day}: ₹{item.amount}
          </li>
        ))}
      </ul>

      {/* In future, replace placeholders with real charts using Chart.js or similar */}
    </div>
  );
}
