import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";
const App = (props) => {
  const [ShowSideBar, setShowSideBar] = useState(false);

  const ToggleSideBar = () => {
    setShowSideBar((prevShowSidebar) => !prevShowSidebar);
  };

  return (
    <div>
      <Toolbar ToggleSideBar={ToggleSideBar} />
      <SideBar ShowSideBar={ShowSideBar} ToggleSideBar={ToggleSideBar} />
      <main className={css.Content}>
        UserID: {props.userID}
        {props.userID ? (
          <Switch>
            <Route path="/logOut" component={Logout} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Redirect to="/login" />
          </Switch>
        )}
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userID: state.singupReducer.userID,
  };
};
export default connect(mapStateToProps)(App);
