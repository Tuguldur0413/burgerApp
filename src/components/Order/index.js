import React from "react";

import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц: Гахайн мах : {props.order.orts.bacon}, Салад :
        {props.order.orts.salad}, Үхрийн мах : {props.order.orts.meat}, Бяслага
        : {props.order.orts.cheese}
      </p>
      <p>
        Хаяг:{props.order.hayag.name} | {props.order.hayag.city} |{" "}
        {props.order.hayag.street}
      </p>
      <p>
        Үнийн дүн:<strong>{props.order.dun}</strong>
      </p>
      <p></p>
    </div>
  );
};

export default Order;
