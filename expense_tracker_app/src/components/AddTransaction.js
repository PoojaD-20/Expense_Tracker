import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 


const AddTransaction = ({ addTransaction }) => {
  const [form, setForm] = useState({ type: "income", description: "", amount: "", category: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount || !form.date) return;

    const newTransaction = { ...form, id: Date.now(), amount: parseFloat(form.amount) };
    addTransaction(newTransaction);
    setForm({ type: "income", description: "", amount: "", category: "", date: "" });
  };

  return (
    <form className="add-transaction-form p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
      <h3 className="text-center mb-3">Add New Transaction</h3>
      <label className="mr-2 mb-2">Category</label>
      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;