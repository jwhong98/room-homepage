import React from "react";
import classes from "./HeroNavigation.module.css";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";

const HeroNavigation = (props) => {
  return (
    <div className={classes.heroNav}>
      <div className={classes.imgContainer}>
        <img src={left} onClick={props.onPrev} alt="left arrow" />
      </div>
      <div className={classes.imgContainer}>
        <img src={right} onClick={props.onNext} alt="right arrow" />
      </div>
    </div>
  );
};

export default HeroNavigation;
