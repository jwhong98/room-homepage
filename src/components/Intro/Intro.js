import React from "react";
import classes from "./Intro.module.css";
import arrow from "../../images/icon-arrow.svg";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <h2>Discover innovative ways to decorate</h2>
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <button>
        shop now <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Intro;
