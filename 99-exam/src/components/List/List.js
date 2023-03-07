import React, { useState, useReducer } from "react";
import classes from "./List.module.css";
import Item from "./Item";

// const buttonReducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE_ITEM":

//     case "EDIT_ITEM":
    
//     case 'DELETE_ITEM':
//   }
// };

const List = ({ data }) => {

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
          />
        ))}
      </tbody>
    </table>
  );
};

export default List;
