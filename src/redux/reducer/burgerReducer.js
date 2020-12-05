const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  purchasing: false,
  totalPrice: 1000,
  ingredientNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслага",
    meat: "Үхрийн мах",
    salad: "Салад",
  },
};

const INGREDIENTS_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
  console.log("reducerees", action);
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.nemehOrts]: state.ingredients[action.nemehOrts] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.nemehOrts],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice = state.totalPrice - INGREDIENTS_PRICES[action.hasahOrts];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.hasahOrts]: state.ingredients[action.hasahOrts] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    };
  } else if (action.type === "CLEAR_ORDER") {
    return initialState;
  }
  return state;
};

export default reducer;
