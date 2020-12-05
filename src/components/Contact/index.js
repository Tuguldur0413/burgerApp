import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import * as action from "../../redux/actions/orderActions";

const Contact = (props) => {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  useEffect(() => {
    console.log("contact effect....");
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      props.history.replace("/orders");
    }
    return () => {
      //clear func(tsewerlegch func): zahialgiig butsaagaad hoosolnoo
      console.log("order-clearing....");
      props.clearOrder();
    };
  }, [props.newOrderStatus.finished]);
  const saveOrder = () => {
    const newOrder = {
      userID: props.userID,
      orts: props.ingredients,
      dun: props.totalPrice,
      hayag: {
        name: name,
        city: city,
        street: street,
      },
    };
    props.saveOrderAction(newOrder);
  };

  const ChangeName = (e) => {
    setName(e.target.value);
  };
  const ChangeCity = (e) => {
    setCity(e.target.value);
  };
  const Changestreet = (e) => {
    setStreet(e.target.value);
  };

  return (
    <div className={css.Contact}>
      ДҮН: {props.totalPrice}
      <div>
        {props.newOrderStatus.error &&
          `Захиалгыг хадгалах явцад алдаа гарлаа: ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={ChangeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={ChangeCity}
            type="text"
            name="street"
            placeholder="Таны хот"
          />
          <input
            onChange={Changestreet}
            type="text"
            name="city"
            placeholder="Таны гэрийн хаяг"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" clicked={saveOrder} />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userID: state.singupReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(action.saveOrder(newOrder)),
    clearOrder: () => dispatch(action.clearOrder()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Contact));
