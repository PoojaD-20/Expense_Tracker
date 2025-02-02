import React, { useState, useEffect } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { color } from "chart.js/helpers";


const App = () => {
  // const [transactions, setTransactions] = useState([]);
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Shopping", amount: 2000, category: "Study Table", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 800, category: "Housing", date: "2025-01-05" },
    { id: 3, description: "Groceries", amount: 150, category: "Food", date: "2025-01-07" }
  ]);
  
  

  // Load data from localStorage when the app mounts
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

  // Save data to localStorage whenever transactions state changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`container-fluid ${darkMode ? "bg-dark text-light" : "bg-light text-dark"} min-vh-100`}>
      <h1 className="text-primary text-lg-center fs-2 fw-bold my-4">Expense Tracker</h1>
      <button className="btn btn-outline-info text-primary text-bold my-2" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <ExpenseChart transactions={transactions} />
    </div>
  );
};

export default App;
