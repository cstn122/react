import React, { useState } from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button";

const Item = (item) => {

  return (
    <tr className={classes.item}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.is_demo.toString()}</td>
      <td>
        <Button onUpdate={item.onClick} classes={classes.edit}>Edit</Button>
        <Button onDelete={item.onClick} classes={classes.delete}>Delete</Button>
      </td>
    </tr>
  );
};

export default Item;
