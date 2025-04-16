// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import { BarElement, CategoryScale, LinearScale } from 'chart.js';

// Chart.register(BarElement, CategoryScale, LinearScale);
// Chart.register(ArcElement, Tooltip, Legend);


// const ExpenseChart = ({ transactions }) => {
//   const expenseData = transactions.filter((t) => t.type === "expense");
//   const categories = [...new Set(expenseData.map((t) => t.category))];
//   const data = categories.map((category) =>
//     expenseData.reduce((sum, t) => (t.category === category ? sum + t.amount : sum), 0)
//   );

//   const chartData = {
//     labels: categories,
//     datasets: [
//       {
//         data,
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
//       }
//     ]
//   };

//   return (
//   <div className="expense-chart-container card shadow p-4">
//     <h4 className="text-center text-primary mb-3">Expense Breakdown</h4>
//     <Pie data={chartData} />
//   </div>
//   );
// };

// export default ExpenseChart;



import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);
Chart.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  // Remove filter — include all transactions regardless of type
  const categories = [...new Set(transactions.map((t) => t.category))];
  const data = categories.map((category) =>
    transactions.reduce((sum, t) => (t.category === category ? sum + t.amount : sum), 0)
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
      }
    ]
  };

  if (transactions.length === 0 || data.every((val) => val === 0)) {
    return (
      <div className="expense-chart-container card shadow p-4 text-center">
        <h4 className="text-primary mb-2">Expense Breakdown</h4>
        <p>No transactions to display.</p>
      </div>
    );
  }

  return (
    <div className="expense-chart-container card shadow p-4">
      <h4 className="text-center text-primary mb-3">Expense Breakdown</h4>
      <Pie data={chartData} />
    </div>
  );
};

export default ExpenseChart;
