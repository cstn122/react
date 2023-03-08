import React, { useState } from "react";
import classes from "./List.module.css";
import Item from "./Item";

const List = ({data, onUpdate, onDelete}) => {

  const updatingHandler = (updating) => {
    console.log('List updating', updating);
    onUpdate(updating);
  };

  const deletingHandler = (deleting) => {
    console.log('List deleting', deleting);
    onDelete(deleting);
  };

  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Is Demo</th>
          <th scope="col"></th>
        </tr>

        {data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            is_demo={item.is_demo}
            onUpdating={updatingHandler}
            onDeleting={deletingHandler}
          />
        ))}
      </tbody>
    </table>
  );
};

export default List;
