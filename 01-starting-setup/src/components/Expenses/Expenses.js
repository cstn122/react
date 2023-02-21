import "./Expenses.css"
import { useState } from "react";

// this is a parent of
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {    // child of App, props is to receive items aka expenses from App
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js filtered " + selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    // what i thought was    expense.date.year 

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList
                    items={filteredExpenses}
                />
            </Card>
        </li>
    );
};

export default Expenses;