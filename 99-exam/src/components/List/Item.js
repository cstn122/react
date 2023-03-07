import React from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button";

const Item = (item) => {


  const editItemHandler = () => {};

  const deleteItemHandler = () => {};

  return (
    <tr className={classes.item}>
      {/* <th scope="row">{item.key}</th> */}
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.is_demo.toString()}</td>
      <td>
        <button onClick={editItemHandler}>Edit</button>
        <button onClick={deleteItemHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default Item;
