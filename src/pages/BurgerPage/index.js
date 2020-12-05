import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = (props) => {
  const [confirmModal, setConfirmModal] = useState(false);
  //val[0]; // ugugdul
  //val[1]; //ugugdliig uurchluh func
  const continueOrder = () => {
    props.history.push("/ship");
  };
  const showConfirmModal = () => {
    setConfirmModal(true);
  };
  const closeConfirmModal = () => {
    setConfirmModal(false);
  };
  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmModal}>
        <OrderSummary
          closeConfirmModal={closeConfirmModal}
          continueOrder={continueOrder}
        />
      </Modal>
      <Burger />
      <BuildControls
        showConfirmModal={showConfirmModal}
        ortsHasah={props.burgertOrtsHas}
        ortsNemeh={props.burgertOrtsNem}
      />
    </div>
  );
};
export default BurgerPage;
