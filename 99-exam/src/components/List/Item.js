import React from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button";

const Item = (item) => {
  // const [updating, setUpdating] = useState('');
  // const [deleting, setDeleting] = useState('');

  const updateHandler = () => {
    // setUpdating(item.id);
    // item.onUpdating(updating);
    item.onUpdating(item);
  };

  const deleteHandler = () => {
    // setDeleting(() => item);
    // item.onDeleting(deleting);
    item.onDeleting(item);
  };

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
