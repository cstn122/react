import React, { useState, useContext } from "react";
import classes from "./Update.module.css";
import Button from "../UI/Button";
import { FullDataContext, FullDataDispatchContext } from "../../FullDataContext/FullDataContext";

const Update = (props) => {
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const fullDataContext = useContext(FullDataContext);
  const fullDataDispatchContext = useContext(FullDataDispatchContext);

  const submitHandler = (event) => {
    event.preventDefault();
    // const updatedData = {
    //   id: props.updateItem.id,
    //   name: updatedName,
    //   description: updatedDescription,
    //   is_demo: props.updateItem.is_demo,
    // };

    // console.log('submitted! ', updatedData);
    // props.onSave(updatedData);

    fullDataDispatchContext({
      type: 'changed',
      id: props.updateItem.id,
      name: updatedName,
      description: updatedDescription,
      is_demo: props.updateItem.is_demo,
    });
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log('cancelled!');
    props.onCancel('update');
  };

  return (
    <>
      <div className={classes.backdrop} />
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>Update</h3>
        <label>Name</label>
        <input
          placeholder={props.updateItem.name}
          value={updatedName}
          onChange={e => setUpdatedName(e.target.value)}
        />
        <label>Description</label>
        <input
          placeholder={props.updateItem.description}
          value={updatedDescription}
          onChange={e => setUpdatedDescription(e.target.value)}
        />
        <Button type="submit" classes={classes.save}>Save</Button>
        <Button onClick={cancelHandler} classes={classes.cancel}>Cancel</Button>
      </form>
    </>
  );
};

export default Update;
