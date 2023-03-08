import React, { useState, useReducer } from "react";
import classes from './App.module.css';
import List from "./components/List/List";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";
import { FullDataContext, FullDataDispatchContext } from "./FullDataContext/FullDataContext";
import Button from "./components/UI/Button";
import Filter from "./components/Filter/Filter";

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
  // const nextId = 6;
  const [allData, dispatch] = useReducer(dataReducer, DUMMY_ITEMS)

  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(allData);
  const [createDialog, setCreateDialog] = useState(null);
  const [updateDialog, setUpdateDialog] = useState(null);

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
    setCreateDialog(() => <Create onCancel={cancelHandler} onSave={saveDataHandler} />);
  };

  const saveDataHandler = (enteredData) => {
    console.log('saving...');
    dispatch({
      type: 'added',
      id: Math.random(),   // id: nextId++,
      name: enteredData.name,
      description: enteredData.description,
      is_demo: null,
    });
    console.log('dispatched', enteredData);
    setCreateDialog(() => null);
  };

  const updateHandler = (updateITEM) => {
    setUpdateDialog(() => <Update onCancel={cancelHandler} onSave={updateDataHandler} updateItem={updateITEM}/>);
  };

  const updateDataHandler = (updatedData) => {
    console.log('updating from App...', updatedData);
    dispatch({
      type: 'changed',
      id: updatedData.id,
      name: updatedData.name,
      description: updatedData.description,
      is_demo: updatedData.is_demo,
    })
    setUpdateDialog(() => null);
  };

  const cancelHandler = (cancel) => {
    console.log(cancel);
    if (cancel === 'update') {
      setUpdateDialog(() => null);
    } else if (cancel === 'create') {
      setCreateDialog(() => null);
    }
  };

  const deleteHandler = (dataId) => {
    dispatch({
      type: 'deleted',
      id: dataId,
    })
  };

  return (
    <FullDataContext.Provider value={allData}>
      <FullDataDispatchContext.Provider value={dispatch}>
        {createDialog}
        {updateDialog}
        {/* <Update/> */}
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
        is_demo: '',
      }];
    }

    case 'changed': {
      return allData.map(d => {
        if (d.id === action.data.id) {
          console.log('updated!');
          return action.data;
        } else {
          console.log('updating:', action.data.id);
          return d;
        }
      });
    }

    case 'deleted': {
      console.log('the one to delete:', action.id);
      return allData.filter(d => d.id !== action.id);
    }
    default: {
      throw Error('Unknown action:', action.type);
    }
  }

};

export default App;
