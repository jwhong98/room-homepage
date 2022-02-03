import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../images/mobile-image-hero-1.jpg";
import HeroNavigation from "./HeroNavigation";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <img src={heroImg} alt="furniture" />
      <HeroNavigation />
    </section>
  );
};

export default Hero;
