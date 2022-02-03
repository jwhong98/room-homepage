import React from "react";
import classes from "./HeroNavigation.module.css";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";

const HeroNavigation = () => {
  return (
    <div className={classes.heroNav}>
      <img src={left} alt="left arrow" />
      <img src={right} alt="right arrow" />
    </div>
  );
};

export default HeroNavigation;
