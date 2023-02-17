import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "../Expenses/ExpenseItem";

const NewExpense = () => {

    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;