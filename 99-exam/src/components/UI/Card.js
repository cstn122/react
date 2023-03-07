import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
  
    const nameChangeHandler = (event) => {
      setEnteredName(() => event.target.value);
    };
  
    const descriptionChangeHandler = (event) => {
      setEnteredDescription(() => event.target.value);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
    };
  
    const cancelHandler = (event) => {
      event.preventDefault();
      props.onCancel(true);
    };
    
  return (
    <form className={`${classes.card} ${props.classes}`} onSubmit={submitHandler}>
      <h3>{props.title}</h3>
      <label>Name</label>
      <input
        placeholder={props.defaultName}
        value={enteredName}
        onChange={nameChangeHandler}
      />
      <label>Description</label>
      <input
        placeholder={props.defaultDescription}
        value={enteredDescription}
        onChange={descriptionChangeHandler}
      />

      <button onClick={cancelHandler}>Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default Card;
