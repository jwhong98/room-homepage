import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";
import closeIcon from "../../images/icon-close.svg";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const portalElement = document.getElementById("overlay");

const MobileMenu = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={classes.container}>
          <img
            className={classes.icon}
            src={closeIcon}
            alt="close"
            onClick={props.onClose}
          />
          <ul className={classes.menu}>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>,
        portalElement
      )}
    </>
  );
};

export default MobileMenu;
