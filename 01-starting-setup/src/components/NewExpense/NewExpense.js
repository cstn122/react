import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,  // spreading existed expense data eg title, amount, date
            id: Math.random().toString(),
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const [showAdd, setShowAdd] = useState(false);

    const showAddHandler = () => {
        setShowAdd(true);
    };

    return (
        <div className="new-expense">
            {
                showAdd === false ?
                    <button onClick={showAddHandler}>Add New Expense</button>
                    : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowAdd={setShowAdd} />
            }

        </div>
    );
};

export default NewExpense;