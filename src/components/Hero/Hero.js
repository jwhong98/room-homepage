import React from "react";
import classes from "./Hero.module.css";
import HeroNavigation from "./HeroNavigation";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <img src={props.img} alt="furniture" />
      <HeroNavigation onNext={props.onNext} onPrev={props.onPrev} />
    </section>
  );
};

export default Hero;
