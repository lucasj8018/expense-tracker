import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Work Material", value: 0 },
    { label: "Office Supply", value: 0 },
    { label: "Office Improve", value: 0 },
    { label: "Prof Dev", value: 0 },
    { label: "Travel", value: 0 },
    { label: "Meal", value: 0 },
    { label: "Instrument", value: 0 },
    { label: "Software Sub", value: 0 },
  ];

  for (const expense of props.expenses) {
    const categoryId = expense.category;
    for (let i = 0; i < chartDataPoints.length; i++) {
      if (chartDataPoints[i].label === categoryId) {
        chartDataPoints[i].value += expense.amount;
      }
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
