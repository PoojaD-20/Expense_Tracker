import React, { useState } from "react";

const Filters = ({ filterTransactions, sortTransactions }) => {
  const [category, setCategory] = useState("all");
  const [date, setDate] = useState("");

  const handleFilter = () => {
    filterTransactions(category, date);
  };

  return (
    <div className="filters">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Shopping">Shopping</option>
        <option value="Salary">Salary</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleFilter}>Filter</button>
      <button onClick={sortTransactions}>Sort by Amount</button>
    </div>
  );
};

export default Filters;