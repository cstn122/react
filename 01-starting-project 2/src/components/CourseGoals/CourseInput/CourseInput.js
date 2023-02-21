import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
<<<<<<< HEAD
import styled from 'styled-components';

const FormControl = styled.div`
 
  margin: 0.5rem 0;

 & label {
  color: ${props => (props.invalid ? 'red' : 'transparent')};
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
=======
>>>>>>> cf3d37428f7460d13cc1bb953d4e431528ae69d0

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
<<<<<<< HEAD
      <FormControl 
        className={`form-control ${isValid ? '' : 'invalid'}`}
        invalid={!isValid}
        >
        {/* 'form-control' + {isValid ? '' : 'invalid'} */}
=======
      <div className={`form-control ${isValid ? '' : 'invalid'}`}> 
      {/* 'form-control' + {isValid ? '' : 'invalid'} */}
>>>>>>> cf3d37428f7460d13cc1bb953d4e431528ae69d0
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
        />
<<<<<<< HEAD
      </FormControl>
=======
      </div>
>>>>>>> cf3d37428f7460d13cc1bb953d4e431528ae69d0
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
