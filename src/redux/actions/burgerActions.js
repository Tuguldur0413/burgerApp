export const addIngredient = (nemehOrts) => {
  return {
    type: "ADD_INGREDIENT",
    nemehOrts,
  };
};

export const removeIngredient = (hasahOrts) => {
  return {
    type: "REMOVE_INGREDIENT",
    hasahOrts,
  };
};
