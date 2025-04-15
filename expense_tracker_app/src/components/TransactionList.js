import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TransactionList = ({ transactions, deleteTransaction }) => (
  <div className="transaction-list container mt-4">
    <h3 className="text-center mb-3">Transaction History</h3>

    <div className="row">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="col-md-6">
          <div className={`transaction-card card shadow-sm p-3 mb-3 ${transaction.type === "income" ? "border-success" : "border-danger"}`}>
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="m-0">{transaction.description}</h5>
                <small className="text-muted">{transaction.date}</small>
              </div>
              <span className={`amount {transaction.type === "income" ? "text-success" : "text-danger"}`}>
                {transaction.amount}
              </span>
            </div>
            <button className="btn btn-sm btn-outline-danger mt-2 w-100" onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionList;