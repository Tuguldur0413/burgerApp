import React from "react";
import css from "./style.module.css";
import Logoimage from "../../assets/images/burger-logo.png";
const Logo = () => (
  <div className={css.Logo}>
    <img src={Logoimage} />
  </div>
);
export default Logo;
