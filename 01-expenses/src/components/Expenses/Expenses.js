import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useEffect } from "react";

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState("2022");
    const [searchedTitle, setsearchedTitle] = useState("");
    const [filteredExpenses, setFilteredExpenses] = useState(items.filter((expense) =>
        (expense.date.getFullYear().toString() === filteredYear)
    ));

    const expensesFilterHandler = (year) => {
        setFilteredYear(year);
    };

    const expensesSearchHandler = (title) => {
        setsearchedTitle(title);
    };

    useEffect(() => {
        if (searchedTitle) {
            setFilteredExpenses(items.filter((expense) =>
                (expense.date.getFullYear().toString() === filteredYear)
                && (expense.title.includes(searchedTitle))
            ));
        } else {
            setFilteredExpenses(items.filter((expense) =>
                expense.date.getFullYear().toString() === filteredYear));
        }
    }, [filteredYear, searchedTitle, items]);
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={expensesFilterHandler}
                onChangeSearch={expensesSearchHandler}
            />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;