import React, { useState, useEffect } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { color } from "chart.js/helpers";


const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Shopping", amount: 2000, category: "Study Table", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 800, category: "Housing", date: "2025-01-05" },
    { id: 3, description: "Groceries", amount: 150, category: "Food", date: "2025-01-07" }
  ]);
  
const Backend_Url=process.env.REACT_APP_URL;
  // useEffect(() => {
  //   const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
  //   if (savedTransactions) {
  //     setTransactions(savedTransactions);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  // }, [transactions]);

  // const addTransaction = (transaction) => {
  //   setTransactions([...transactions, transaction]);
  // };

  // const deleteTransaction = (id) => {
  //   setTransactions(transactions.filter((transaction) => transaction.id !== id));
  // };

  useEffect(() => {
    fetch(`${Backend_Url}/api/transactions`)
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error("Error fetching transactions:", err));
  }, []);
  
  
  const addTransaction = async (transaction) => {
    const res = await fetch(`${Backend_Url}/api/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });
    const newTransaction = await res.json();
    setTransactions([...transactions, newTransaction]);
  };
  
  console.log("url:", Backend_Url);
  
  const deleteTransaction = async (id) => {
    console.log("del id:",id);
    await fetch(`${Backend_Url}/api/transactions/${id}`, {
      method: "DELETE",
    });
    setTransactions(transactions.filter((transaction) => transaction._id !== id));
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
      <AddTransaction addTransaction={addTransaction} darkMode={darkMode}/>
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <ExpenseChart transactions={transactions} />
    </div>
  );
};

export default App;