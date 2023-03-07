import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      placeholder={props.placeholder}
      onClick={props.onClick}
    ></button>
  );
};

export default Button;
