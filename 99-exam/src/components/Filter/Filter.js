import React from 'react'

const Filter = () => {
    const [filteredData, setfilteredData] = useState(DUMMY_ITEMS);
    const [filter, setFilter] = useState("");
  
    const filterChangeHandler = (event) => {
      setFilter(() => event.target.value);
      if (event.target.value.trim().length !== 0) {
        console.log('filtering: ', event.target.value);
        setfilteredData(() => filteredData.filter(filtered => filtered.name.includes(event.target.value)));
      } 
      else {
        console.log('not filtering');
        setfilteredData(() => DUMMY_ITEMS);
      }
    };
  return (

  );
};

export default Filter;