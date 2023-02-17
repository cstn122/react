import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const clickHandler = () => {
        alert("Clicked");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <div className="expense-item h2">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            <button onClick={clickHandler}>Change Title</button>
            
        </Card>
    );
}

export default ExpenseItem;