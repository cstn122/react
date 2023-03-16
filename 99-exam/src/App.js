import React, { useState, useReducer } from "react";
import jsonData from './example.json';
import classes from './App.module.css';
import List from "./components/List/List";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";
import Button from "./components/UI/Button";
import { FullDataContext, FullDataDispatchContext } from "./FullDataContext/FullDataContext";

const App = () => {

  jsonData = JSON.parse(JSON.stringify(jsonData));

  const [allData, dispatch] = useReducer(dataReducer, jsonData)
  const [filter, setFilter] = useState("");  // remove
  const [filteredData, setFilteredData] = useState(allData);
  const [createModal, setCreateModal] = useState(null);
  const [updateModal, setUpdateModal] = useState(null);

  const filterChangeHandler = (event) => {
    setFilter(() => event.target.value);
    if (event.target.value.trim().length !== 0) {
      setFilteredData(() =>
        allData.filter((filtered) => filtered.name.includes(event.target.value))
      );
    } else {
      setFilteredData(() => allData);
    }
  };

  const createHandler = () => {
    console.log("create!");
    // setCreateModal(() => <Modal title='Create' onSave={saveCreateHandler} onCancel={cancelHandler} />);
    setCreateModal(() => <Create onCancel={cancelHandler} />);
  };

  // const saveCreateHandler = (enteredData) => {
  //   dispatch({
  //     type: 'added',
  //     payload: enteredData,
  //   });
  //   setCreateModal(() => null);
  // };

  const updateHandler = (updateITEM) => {
    // setUpdateModal(() => <Modal title='Update' onSave={saveUpdateHandler} onCancel={cancelHandler} updateItem={updateITEM} />);
    setUpdateModal(() => <Update onCancel={cancelHandler} updateItem={updateITEM} />)
  };

  const cancelHandler = (cancel) => {
    if (cancel === 'Update') {
      console.log('cancelling', cancel);
      setUpdateModal(() => null);
    } else if (cancel === 'Create') {
      console.log('cancelling', cancel);
      setCreateModal(() => null);
    } else {
      console.log('Unknown cancel:', cancel);
    }
  };

  return (
    <FullDataDispatchContext.Provider value={dispatch}>
      <FullDataContext.Provider value={allData}>
        {createModal}
        {updateModal}
        <div className={classes.container}>
          <div className={classes.section}>
            {/* use div instead */}
            <Button onClick={createHandler} classes={classes.button}>Create</Button>
            <input onChange={filterChangeHandler} placeholder="Filter by name" />
          </div>
          <List
            data={filter.trim().length === 0 ? allData : filteredData}
            onUpdate={updateHandler}
          />
        </div>
      </FullDataContext.Provider>
    </FullDataDispatchContext.Provider>
  );
};

const dataReducer = (allData, action) => {
  switch (action.type) {
    case 'added': {
      return [...allData, {
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        is_demo: action.payload.is_demo
      }];
    }

    case 'changed': {
      console.log('reducer', action);
      return allData.map(d => {
        if (d.id === action.payload.id) {
          console.log('changed')
          return {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            is_demo: action.payload.is_demo
          };
        } else {
          return d;
        }
      });
    }

    case 'deleted': {
      console.log('deleting:', action.payload.id);
      return allData.filter(d => d.id !== action.payload.id);
    }
    default: {
      throw Error('Unknown action:', action.type);
    }
  }
};

export default App;
