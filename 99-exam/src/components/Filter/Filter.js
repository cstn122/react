import React, { useState } from 'react';
import classes from './Filter.module.css';

const Filter = (props) => {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(props.fullData);

  const filterChangeHandler = (event) => {
    setFilter(() => event.target.value);
    if (event.target.value.trim().length !== 0) {
      setFilteredData(() =>
        props.fullData.filter((filtered) =>
          filtered.name.includes(event.target.value)
        )
      );
    } else {
      setFilteredData(() => props.fullData);
    }
  };
  props.onFilter(filter, filteredData);

  return <input
    className={classes.filter}
    type="text"
    value={filter}
    onChange={filterChangeHandler}
    placeholder="Filter by name"
  />
};

export default Filter;