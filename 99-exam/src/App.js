import React, { useState, useReducer, useEffect } from "react";
import classes from './App.module.css';
import List from "./components/List/List";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";
import Button from "./components/UI/Button";
import Filter from "./components/Filter/Filter";
import { FullDataContext, FullDataDispatchContext } from "./FullDataContext/FullDataContext";

const App = () => {
  const DUMMY_ITEMS = [
    {
      id: 1,
      name: "Demo Location",
      description: "Demo Location",
      is_demo: true,
    },
    {
      id: 2,
      name: "WMC",
      description: "WMC",
      is_demo: false,
    },
    {
      id: 3,
      name: "MWC",
      description: "MWC",
      is_demo: false,
    },
    {
      id: 4,
      name: "PXD",
      description: "PXD",
      is_demo: false,
    },
    {
      id: 5,
      name: "Frank",
      description: "Frank",
      is_demo: false,
    },
  ];
  const [allData, dispatch] = useReducer(dataReducer, DUMMY_ITEMS)

  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(allData);
  const [createModal, setCreateModal] = useState(null);
  const [updateModal, setUpdateModal] = useState(null);

  let nextId = allData.length + 1;

  const filterHandler = (search, searchResult) => {
    // console.log('filter: ', search);
    // console.log('filteredData: ', searchResult);
    // useEffect(() => {
    //   setFilter(() => search);
    // }, [search]);
    // useEffect(() => {
    //   setFilteredData(() => searchResult);
    // }, [searchResult]);
    // console.log('setting filter...');
    setFilter(() => search);
    setFilteredData(() => searchResult);
  };

  const createHandler = () => {
    console.log("create!");
    setCreateModal(() => <Create onCancel={cancelHandler} />);
  };

  // const saveDataHandler = (enteredData) => {
  //   console.log('saving...');
  //   dispatch({
  //     type: 'added',
  //     id: nextId++,
  //     name: enteredData.name,
  //     description: enteredData.description,
  //     is_demo: null,
  //   });
  //   console.log('dispatched', enteredData);
  //   setCreateModal(() => null);
  // };

  const updateHandler = (updateITEM) => {
    // setUpdateModal(() => <Update onCancel={cancelHandler} onSave={updateDataHandler} updateItem={updateITEM} />);
    setUpdateModal(() => <Update onCancel={cancelHandler} updateItem={updateITEM} />);
  };

  useEffect(() => {
    console.log('close modals');
    setCreateModal(() => null);
    setUpdateModal(() => null);
  },
    [allData]);

  // const updateDataHandler = (dataToUpdate) => {
  //   console.log('updating from App...', dataToUpdate);
  //   dispatch({
  //     type: 'changed',
  //     data: {
  //       id: dataToUpdate.id,
  //       name: dataToUpdate.name,
  //       description: dataToUpdate.description,
  //       is_demo: dataToUpdate.is_demo,
  //     },
  //   })
  //   setUpdateModal(() => null);
  // };

  const cancelHandler = (cancel) => {
    console.log(cancel);
    if (cancel === 'update') {
      setUpdateModal(() => null);
    } else if (cancel === 'create') {
      setCreateModal(() => null);
    }
  };

  const deleteHandler = (dataToDelete) => {
    dispatch({
      type: 'deleted',
      data: {
        id: dataToDelete.id,
        name: dataToDelete.name,
        description: dataToDelete.description,
        is_demo: dataToDelete.is_demo,
      },
    })
  };

  return (
    <FullDataContext.Provider value={allData}>
      <FullDataDispatchContext.Provider value={dispatch}>
        {createModal}
        {updateModal}
        <Button onClick={createHandler} classes={classes.button}>Create</Button>
        <Filter onFilter={filterHandler} fullData={allData} />
        <List
          data={filter.trim().length === 0 ? allData : filteredData}
          onUpdate={updateHandler}
          onDelete={deleteHandler}
        />
      </FullDataDispatchContext.Provider>
    </FullDataContext.Provider>
  );
};

const dataReducer = (allData, action) => {
  switch (action.type) {
    case 'added': {
      return [...allData, {
        id: action.id,
        name: action.name,
        description: action.description,
        is_demo: false,
      }];
    }

    case 'changed': {
      console.log('reducer', action);
      return allData.map(d => {
        if (d.id === action.id) {
          return { id: action.id, name: action.name, description: action.description, is_demo: action.is_demo };
        } else {
          return d;
        }
      });
    }

    case 'deleted': {
      console.log('deleting:', action.data.id);
      return allData.filter(d => d.id !== action.data.id);
    }
    default: {
      throw Error('Unknown action:', action.type);
    }
  }
};

export default App;
