import React, { useState } from "react";
import classes from "./Create.module.css";

const Create = (props) => {
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
    const enteredData = {
      id: Math.random(),
      name: enteredName,
      description: enteredDescription,
      is_demo: '',
    }
    console.log('submitted! ', enteredData);
    props.onSaveData(enteredData);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log('cancelled!');
    props.onCancel(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h3>Create</h3>
      <label>Name</label>
      <input
        value={enteredName}
        onChange={nameChangeHandler}
      />
      <label>Description</label>
      <input
        value={enteredDescription}
        onChange={descriptionChangeHandler}
      />
      <button onClick={cancelHandler}>Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default Create;
