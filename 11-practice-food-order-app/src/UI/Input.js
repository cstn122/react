import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.classes}`}>
      <label
        className={props.classes}
      >
        {props.label}
      </label>
      
      <input
        className={props.classes}
        type={props.type}
        min={props.min}
        step={props.step}
        label={props.label}
        value={props.value}
        onChange={props.onChange} />
    </div>
  );
};

export default Input;