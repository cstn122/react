import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        // alert("Clicked");
        setTitle("Changed");
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <div className="expense-item h2">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            <button onClick={clickHandler}>Change Title</button>
            
        </Card>
    );
}

export default ExpenseItem;