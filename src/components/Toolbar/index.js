import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";
const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <HamburgerMenu ToggleSideBar={props.ToggleSideBar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
