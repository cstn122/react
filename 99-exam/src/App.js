import React, { useState, useContext } from "react";
import List from "./components/List/List";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";
import Context from "./Context/Context";
import Button from "./components/UI/Button";

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
  const ctx = useContext(Context);
  const [filteredData, setfilteredData] = useState(DUMMY_ITEMS);
  const [filter, setFilter] = useState("");
  const [createDialog, setCreateDialog] = useState(null);
  const [updateDialog, setUpdateDialog] = useState(null);

  const filterChangeHandler = (event) => {
    setFilter(() => event.target.value);
    if (event.target.value.trim().length !== 0) {
      console.log("filtering: ", event.target.value);
      setfilteredData(() =>
        filteredData.filter((filtered) =>
          filtered.name.includes(event.target.value)
        )
      );
    } else {
      console.log("not filtering");
      setfilteredData(() => DUMMY_ITEMS);
    }
  };

  const createItemHandler = () => {
    console.log("create!");
    setCreateDialog(() => <Create onCancel={cancelHandler} onSaveData={saveDataHandler} />);
  };

  const updateItemHandler = () => {
    console.log("update!");
    setUpdateDialog(() => <Update onCancel={cancelHandler} />);
  };

  const saveDataHandler = (enteredData) => {
    console.log('saving...');
    setfilteredData([...filteredData, enteredData]);
  };

  const cancelHandler = () => {
    setCreateDialog(null);
  };

  return (
    <>
      {createDialog}
      {updateDialog}
      <Button onClick={createItemHandler}>Create</Button>
      <input
        type="text"
        value={filter}
        onChange={filterChangeHandler}
        placeholder="Filter by name"
        style={{
          margin: 'auto',
          textAlign: 'left',
          borderRadius: '3px',
          border: 'none',
          display: 'block'
        }}
      />
      <List data={filteredData} />
    </>
  );
};

export default App;
