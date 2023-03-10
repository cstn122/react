import React, { useState, useContext } from "react";
import classes from "./Create.module.css";
import Button from "../UI/Button";
import { FullDataContext, FullDataDispatchContext } from "../../FullDataContext/FullDataContext";

const Create = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const fullDataContext = useContext(FullDataContext);
  const fullDataDispatchContext = useContext(FullDataDispatchContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      id: Math.random(),
      name: enteredName,
      description: enteredDescription,
      is_demo: '',
    };
    // props.onSave(enteredData);
    fullDataDispatchContext({
      type: 'added',
      id: Math.random(),// nextId++,
      name: enteredData.name,
      description: enteredData.description,
      is_demo: null,
    });
    setIsUpdating(() => false);
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
        <Button type="submit" classes={classes.save}>Save</Button>
        <Button onClick={cancelHandler} classes={classes.cancel}>Cancel</Button>
      </form>
    </>
  );
};

export default Create;
