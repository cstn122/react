import "./ExpensesList.css";

// parent of
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {  // child of Expenses, props is to receive items aka filteredExpenses from Expenses
    // use JS logic here to avoid complicated, hard-reading JSX code:
    // let filterResult = "";

    if (props.items.length === 0) {
        // filterResult = <p>No expense found.</p>;
        return <h2 className="expenses-list__fallback">No expense found.</h2>;
    } else {
        // filterResult = props.items.map((expense) => (
        return <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>

    }
    // return filterResult;
};

export default ExpensesList;