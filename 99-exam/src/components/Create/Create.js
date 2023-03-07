import React, { useState } from "react";
import classes from "./Create.module.css";
import Card from "../UI/Card";

const Create = (props) => {


  return (
    <Card
      title="Create"
      defaultName=""
      defaultDescription=""
      onCancel={props.onCancel}
    />
  );
};

export default Create;
