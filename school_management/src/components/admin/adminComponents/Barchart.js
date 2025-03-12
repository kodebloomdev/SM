import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Barchart() {
  const [sortBy, setSortBy] = useState("Yearly");

  // Data for the chart
  const yearlyData = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Yearly Statistics",
        data: [200, 600, 400, 550, 750, 500],
        backgroundColor: [
          "rgba(173, 216, 230, 0.8)", // Light blue
          "rgba(205, 0, 255, 0.8)", // Purple
          "rgba(173, 216, 230, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(173, 216, 230, 0.8)",
        ],
        borderRadius: 10,
      },
    ],
  };

  const monthlyData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Monthly Statistics",
        data: [500, 750, 550, 400, 600, 200, 200, 600, 400, 550, 750, 500],
        backgroundColor: [
          "rgba(205, 0, 255, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(173, 216, 230, 0.8)",
          "rgba(173, 216, 230, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(173, 216, 230, 0.8)",
          "rgba(173, 216, 230, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(173, 216, 230, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(205, 0, 255, 0.8)",
          "rgba(173, 216, 230, 0.8)",
        ],
        borderRadius: 10,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 800,
        ticks: { stepSize: 200 },
      },
    },
  };

  return (
    <div className="w-[350px] mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header with Sort Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-700">Statistics</h2>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-500">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
          >
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <Bar data={sortBy === "Yearly" ? yearlyData : monthlyData} options={options} />
    </div>
  );
}

export default Barchart;
