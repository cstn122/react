import React, { useState } from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button";

const Item = (item) => {
  const [updating, setUpdating] = useState('');
  const [deleting, setDeleting] = useState('');

  const updateHandler = () => {
    console.log(item.id);
    setUpdating('5');
    console.log(updating);
    item.onUpdating(item);
    console.log('*****', item.onUpdating);
  };

  const deleteHandler = () => {
    setDeleting(() => item.id);
    item.onDeleting(deleting);
  };
  // setUpdating('5');
  // console.log(updating);

  return (
    <tr className={classes.item}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.is_demo.toString()}</td>
      <td>
        <Button onClick={updateHandler} classes={classes.edit}>Edit</Button>
        <Button onClick={deleteHandler} classes={classes.delete}>Delete</Button>
      </td>
    </tr>
  );
};

export default Item;
