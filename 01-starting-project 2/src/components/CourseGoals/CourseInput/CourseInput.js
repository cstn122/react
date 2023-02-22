import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FormControl = styled.div`
 
  margin: 0.5rem 0;

 & label {
  color: ${props => (props.invalid ? 'red' : 'black')};
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  background-color: ${props => (props.invalid ? '#f7c4c7' : 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

&  input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

/* & .invalid input {
  border-color: red;
  background-color: #f7c4c7;
}

& .invalid label {
  color: red;
} */

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {  // string.trim() removes redundant blanks in the string
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // alert('Cannot add empty goal!');
      setIsValid(false);
      return;
    }
    else {
      props.onAddGoal(enteredValue);
      setIsValid(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl 
        className={`form-control ${isValid ? '' : 'invalid'}`}
        invalid={!isValid}
        >
        {/* 'form-control' + {isValid ? '' : 'invalid'} */}
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
