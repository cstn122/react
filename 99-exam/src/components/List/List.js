import React, { useState, useReducer } from "react";
import classes from "./List.module.css";
import Item from "./Item";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      return {};

    case "EDIT_ITEM":
      return {};

    case 'DELETE_ITEM':
      return {};

    default:
      return {};
  }
};


const List = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, { id: '', name: '', description: '', is_demo: '' });
  
  const updateHandler = () => {
    dispatch({ type: 'EDIT_ITEM', })
  };

  const deleteHandler = () => {
    
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
            id={item.id}
            name={item.name}
            description={item.description}
            is_demo={item.is_demo}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
          />
        ))}
      </tbody>
    </table>
  );
};

export default List;
