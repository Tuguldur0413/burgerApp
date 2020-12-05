import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import * as action from "../../redux/actions/orderActions";
import Order from "../../components/Order";
const OrderPage = (props) => {
  useEffect(() => {
    props.loadOrders(props.userID);
  }, []);

  return (
    <div>
      {props.Loading ? (
        <Spinner />
      ) : (
        props.Orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Orders: state.orderReducer.Orders,
    Loading: state.orderReducer.Loading,
    userID: state.singupReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userID) => dispatch(action.loadOrders(userID)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
