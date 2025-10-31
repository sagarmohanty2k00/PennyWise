import { useState } from "react";

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
    <div>
      <h1>EMIs</h1>

      <ul>
        {emis.map((emi) => (
          <li key={emi.id}>
            EMI: ₹{emi.amount} from {emi.startDate} to {emi.endDate} - Paid {emi.paidInstallments}/{emi.totalInstallments} installments
          </li>
        ))}
      </ul>

      <h3>Add EMI</h3>
      <form onSubmit={addEmi}>
        <input
          type="number"
          placeholder="EMI amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Start date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="End date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
          required
        />
        <button type="submit">Add EMI</button>
      </form>
    </div>
  );
}
