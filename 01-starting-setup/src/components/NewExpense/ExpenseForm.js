import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
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
        console.log("title changed to " + event.target.value);

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, enteredAmount: event.target.value,
        // });
        // setUserInput((userInput) => {
        //     return {...userInput, enteredAmount: event.target.value};
        // });
        console.log("amount changed to " + event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, enteredDate: event.target.value,
        // });
        // setUserInput((userInput) => {
        //     return {...userInput, enteredDate: event.target.value};
        // });
        console.log("date changed to " + event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();  // prevent the page from reloading after submitting the form
        
        const enteredExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(enteredExpenseData);

        // feed enteredExpenseData up to NewExpense.js
        props.onSaveExpenseData(enteredExpenseData);

        // clear input
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form className="expense-form" onSubmit={submitHandler}> {/*add "onSubmit" here! not in the submit button element.*/}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>

    );
};

export default ExpenseForm;