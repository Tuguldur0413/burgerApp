import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/burgerActions";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.ingredients };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Бүргэрийн үнэ:<strong>{props.totalPrice}</strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabled={disabledIngredients}
          type={el}
          orts={props.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ortsNemeh: (nemehOrts) => dispatch(action.addIngredient(nemehOrts)),
    ortsHasah: (hasahOrts) => dispatch(action.removeIngredient(hasahOrts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
