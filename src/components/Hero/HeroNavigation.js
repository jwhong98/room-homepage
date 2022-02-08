import React from "react";
import classes from "./HeroNavigation.module.css";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";

const HeroNavigation = (props) => {
  return (
    <div className={classes.heroNav}>
      <img src={left} onClick={props.onPrev} alt="left arrow" />
      <img src={right} onClick={props.onNext} alt="right arrow" />
    </div>
  );
};

export default HeroNavigation;
