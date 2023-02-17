import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(""); 
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const [userInput, setUserInput] = useState({ 
        // initial value of title, amount and date:
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log("title changed to " + event.target.value);

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log("amount changed to " + event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log("date changed to " + event.target.value);
    };

    return (
        <form className="expense-form">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>

    );
};

export default ExpenseForm;