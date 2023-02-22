import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
    // multiple states are avilable
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({ 
    //     // initial value of title, amount and date:
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, enteredTitle: event.target.value,
        // });
        // setUserInput((userInput) => {
        //     return {...userInput, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, enteredAmount: event.target.value,
        // });
        // setUserInput((userInput) => {
        //     return {...userInput, enteredAmount: event.target.value};
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, enteredDate: event.target.value,
        // });
        // setUserInput((userInput) => {
        //     return {...userInput, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();  // prevent the page from reloading after submitting the form

        const enteredExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // returns the numeric representation of the object
            date: new Date(enteredDate),
        };

        console.log(enteredExpenseData);

        // feed enteredExpenseData up to NewExpense.js
        props.onSaveExpenseData(enteredExpenseData);

        foldAddHandler();
    };

    const foldAddHandler = () => {
        props.setShowAdd(false);

        // clear input
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    //<div className="new-expense">
    return <form className="expense-form" onSubmit={submitHandler}> {/*add "onSubmit" here! not in the submit button element.*/}
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} value={enteredDate} />
            </div>
            <div>
                <button onClick={foldAddHandler}>Cancel</button>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>;
};

export default ExpenseForm;