import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import Contact from "../../components/Contact";
import Button from "../../components/General/Button";
import css from "./style.module.css";

const ShippingPage = (props) => {
  const cancelOrder = () => {
    props.history.goBack();
  };
  const showContactData = () => {
    props.history.replace("/ship/contact");
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "20px" }}>
        <strong>Таны захиалга амттай болно гэж найдаж байна</strong>
      </p>
      <p style={{ fontSize: "20px" }}>
        <strong>Дүн: {props.totalPrice}</strong>
      </p>
      <Burger />
      <Button clicked={cancelOrder} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
      <Button
        clicked={showContactData}
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
      />
      <Route path="/ship/contact">
        <Contact />
      </Route>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(ShippingPage);
