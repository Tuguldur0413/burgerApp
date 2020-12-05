import React from "react";
import css from "./style.module.css";
const HamburgerMenu = (props) => (
  <div onClick={props.ToggleSideBar} className={css.HamburgerMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HamburgerMenu;
