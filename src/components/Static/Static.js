import React from "react";
import classes from "./Static.module.css";

const Static = (props) => {
  return (
    <div className={classes.static}>
      <img src={props.img} alt="about" />
    </div>
  );
};

export default Static;
