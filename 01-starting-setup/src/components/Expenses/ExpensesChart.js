// this is a parent of
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {  // child of Expenses, props is to receive expenses aka filteredExpenses from Expenses
    const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    for (const expense of props.expenses) {  // for in... to iterate an object, for of... to iterate an array
        const expenseMonth = expense.date.getMonth();  // starting from 0 aka Jan, hence expenseMonth can be used as index of each expense
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;