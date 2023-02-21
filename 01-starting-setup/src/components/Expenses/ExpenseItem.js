import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";

// parent of
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    // change title
    // const [title, setTitle] = useState(props.title);
    
    // const clickHandler = () => {
    //     setTitle("Changed");
    //     console.log(title);
    // };

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
            {/* <button onClick={clickHandler}>Change Title</button> */}
            
        </Card>
    );
}

export default ExpenseItem;