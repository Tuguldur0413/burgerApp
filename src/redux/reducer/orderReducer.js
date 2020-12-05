const initialState = {
  //load orders
  Orders: [],
  Loading: false,
  error: null,
  //save orders
  newOrder: {
    saving: false,
    finished: false,
    error: null,
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ORDER":
      return {
        ...state,
        newOrder: {
          saving: false,
          finished: false,
          error: null,
        },
      };
    case "LOAD_ORDERS_START":
      return {
        ...state,
        Loading: true,
      };
    case "LOAD_ORDERS_SUCCESS":
      return {
        ...state,
        Loading: false,
        Orders: action.Orders,
      };
    case "LOAD_ORDERS_ERROR":
      return {
        ...state,
        Loading: false,
        error: action.error,
      };
    case "SAVE_ORDER_START":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: true,
        },
      };
    case "SAVE_ORDER_SUCCESS":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
          error: null,
        },
      };
    case "SAVE_ORDER_ERROR":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
          error: action.error,
        },
      };

    default:
      return state;
  }
};
export default reducer;
