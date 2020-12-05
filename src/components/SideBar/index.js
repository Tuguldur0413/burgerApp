import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";
const SideBar = (props) => {
  let classes = [css.Sidebar, css.Close];

  if (props.ShowSideBar) {
    classes = [css.Sidebar, css.Open];
  }
  return (
    <div>
      <Shadow show={props.ShowSideBar} hideShadow={props.ToggleSideBar} />
      <div onClick={props.ToggleSideBar} className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SideBar;
