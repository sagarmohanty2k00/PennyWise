import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Dummy values and state
  const [cashInHand, setCashInHand] = useState(15000);
  const [creditCardBudget, setCreditCardBudget] = useState(35000);
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 2000, category: "Lunch", mode: "Volatile", description: "Lunch with friends" },
    { id: 2, amount: 5000, category: "Rent", mode: "Fixed", description: "Monthly rent" },
  ]);

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <p><b>Cash In Hand:</b> ₹{cashInHand.toLocaleString()}</p>
        <p><b>Credit Card Budget Left:</b> ₹{creditCardBudget.toLocaleString()}</p>
      </div>

      <h3>Expenses</h3>
      <table border="1" cellPadding="5" style={{ width: "100%", marginBottom: 20 }}>
        <thead>
          <tr>
            <th>Amount (₹)</th>
            <th>Category</th>
            <th>Mode</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>{exp.mode}</td>
              <td>{exp.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => alert("Add Expense clicked - integrate later!")}>Add Expense</button>
      <button onClick={() => alert("Add Income clicked - integrate later!")}>Add Income</button>

      <hr />
      <nav>
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/emis">EMIs</Link> |{" "}
        <Link to="/stats">Stats</Link>
      </nav>
    </div>
  );
}
