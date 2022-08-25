import { TextsmsTwoTone } from "@mui/icons-material";
import React from "react";
import Script from "react-load-script";

import "./Checkout.css";

let OmiseCard;

const Checkout = ({charge}) => {
  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: "pkey_test_5o7r3ofmow0c7me62qk",
      currency: "thb",
      frameLabel: "Chopper Shop",
      submitLabel: "PAY NOW",
      buttonLabel: " Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethod: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCartHandler = () => {
    const { cart, createCreditCardCharge } = charge;
    OmiseCard.open({
      amount: cart.amount,
      onCreateTokenSuccess: (token) => {
        createCreditCardCharge(cart.email, cart.name, cart.amount, token);
      },
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCartHandler();
  };
  return (
    <div className="own-form">
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
      <form>
        <button
          id="credit-card"
          className="btn"
          type="button"
          onClick={handleClick}
        >
          Pay with Credit Card
        </button>
      </form>
    </div>
  );
};

export default Checkout;
