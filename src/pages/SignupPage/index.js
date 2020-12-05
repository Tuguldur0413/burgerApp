import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
const SignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      setError("НУУЦ ҮГНҮҮД ХООРОНДОО ТААРАХГҮЙ БАЙНА");
    }
  };

  return (
    <div className={css.Signup}>
      {props.userID && <Redirect to="/" />}
      <h1>Бүртгүүлэх хэсэг</h1>
      <div>Та өөрийн мэдээллээ оруулна уу...</div>
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Имэйл хаяг"
      />
      <input
        onChange={(event) => setPassword1(event.target.value)}
        type="password"
        placeholder="Нууц үг"
      />
      <input
        onChange={(event) => setPassword2(event.target.value)}
        type="password"
        placeholder="Нууц үгээ давтана оруулна уу!!!"
      />
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}
      {props.saving && <Spinner />}
      <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={signup} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.singupReducer.saving,
    firebaseError: state.singupReducer.firebaseError,
    userID: state.singupReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
