import React, { useContext } from "react";
import classes from "./List.module.css";
import Item from "./Item";
import { FullDataDispatchContext } from "../../FullDataContext/FullDataContext";

const List = ({ data, onUpdate }) => {
  const dispatch = useContext(FullDataDispatchContext);

  const updatingHandler = (updating) => {
    console.log('List updating', updating);
    onUpdate(updating);
  };

  const deleteHandler = (dataToDelete) => {
    dispatch({
      type: 'deleted',
      payload: {
        id: dataToDelete.id,
        name: dataToDelete.name,
        description: dataToDelete.description,
        is_demo: dataToDelete.is_demo,
      },
    })
  };

  return (
    data.length === 0 ? 
    <p className={classes.text}>No data found.</p> :
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
              onDeleting={deleteHandler}
            />
          ))}
        </tbody>
      </table>
  );
};

export default List;
