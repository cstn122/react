import React, { useState, useContext } from "react";
import { FullDataContext, FullDataDispatchContext } from "../../FullDataContext/FullDataContext";
import classes from "./Update.module.css";

const Create = (props) => {
  const allData = useContext(FullDataContext);
  const dispatch = useContext(FullDataDispatchContext);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  
  console.log('rendering Update.js', props.updateItem);

  const submitHandler = (event) => {
    event.preventDefault();
    const updatedData = {
      id: props.updateItem.id,
      name: updatedName,
      description: updatedDescription,
      is_demo: props.updateItem.is_demo,
    }

    dispatch({
      type: 'changed',
      data: updatedData,
    })

    console.log('submitted! ', updatedData);
    props.onSave(updatedData);
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
          value={updatedName}
          onChange={e => setUpdatedName(e.target.value)}
        />
        <label>Description</label>
        <input
          value={updatedDescription}
          onChange={e => setUpdatedDescription(e.target.value)}
        />
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Create;
