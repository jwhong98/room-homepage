import React from "react";
import classes from "./Intro.module.css";
import arrow from "../../images/icon-arrow.svg";

const Intro = (props) => {
  return (
    <div className={classes.intro}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button>
        shop now <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Intro;
