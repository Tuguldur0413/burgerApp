import axios from "../../axios.order";

export const loadOrders = (userID) => {
  return function (dispatch, getState) {
    //zahialgiig tataj ehellee gdgiiig medegdene.
    //eniig huleej awaad spinner ajillaj ehlne.
    dispatch(loadOrdersStart());

    const token = getState().singupReducer.token;
    axios
      .get(`orders.json?auth=${token}&orderBy="userID"&equalTo="${userID}"`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        dispatch(loadOrdersSuccess(loadedOrders));
      })
      .catch((error) => dispatch(loadOrdersError(error)));
  };
};

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER",
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    Orders: loadedOrders,
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};

// zahialgiig hadgalah

export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    //spinner ergelduulne
    dispatch(saveOrderStart());
    const token = getState().singupReducer.token;
    //firebase ruu hadgalna
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};
export const saveOrderStart = (newOrder) => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = (newOrder) => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
