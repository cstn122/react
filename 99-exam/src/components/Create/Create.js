import React, { useState } from "react";
import classes from "./Create.module.css";
import Button from "../UI/Button";

const Create = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      id: Math.random(),
      name: enteredName,
      description: enteredDescription,
      is_demo: '',
    }
    console.log('submitted! ', enteredData);
    props.onSave(enteredData);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log('cancelled!');
    props.onCancel('create');
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>Create</h3>
        <label>Name</label>
        <input
          value={enteredName}
          onChange={e => setEnteredName(e.target.value)}
        />
        <label>Description</label>
        <input
          value={enteredDescription}
          onChange={e => setEnteredDescription(() => e.target.value)}
        />
        <Button onClick={cancelHandler}>Cancel</Button>
        <Button type="submit">Save</Button>
      </form>
    </>
  );
};

export default Create;
