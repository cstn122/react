import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.classes}`}>
      <label htmlFor={props.input.id}>
        {props.label}
      </label>

      {/* <input
        id={props.id}
        type={props.type}
        min={props.min}
        step={props.step}
        label={props.label}
        value={props.value}
        onChange={props.onChange} /> */}
        <input {...props.input}/>
    </div>
  );
};

export default Input;