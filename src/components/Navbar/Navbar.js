import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import toggleMenu from "../../images/icon-hamburger.svg";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <img
        className={classes.toggle}
        src={toggleMenu}
        alt="menu toggle"
        onClick={props.onShowMenu}
      />
      <img className={classes.logo} src={logo} alt="logo" />
      <ul className={classes.menu}>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
