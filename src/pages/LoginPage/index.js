import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    props.login(email, password);
  };
  return (
    <div className={css.Login}>
      {props.userID && <Redirect to="/" />}
      <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {props.loggingIn && <Spinner />}
      {props.firebaseError && (
        <div style={{ color: "red" }}> {props.firebaseError} </div>
      )}
      <Button text="ЛОГИН" btnType="Success" clicked={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggingIn: state.singupReducer.loggingIn,
    firebaseError: state.singupReducer.firebaseError,
    userID: state.singupReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
