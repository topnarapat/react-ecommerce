import React, { Component } from "react";
import Script from "react-load-script";

import "./Checkout.css";

let OmiseCard;

export class Checkout extends Component {
  handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: "pkey_test_5o7r3ofmow0c7me62qk",
      currency: "thb",
      frameLabel: "Chopper Shop",
      submitLabel: "PAY NOW",
      buttonLabel: " Pay with Omise",
    });
  };

  creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethod: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  omiseCartHandler = () => {
    const { cart, createCreditCardCharge } = this.props;
    OmiseCard.open({
      amount: cart.amount,
      onCreateTokenSuccess: (token) => {
        createCreditCardCharge(cart.email, cart.name, cart.amount, token);
      },
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.creditCardConfigure();
    this.omiseCartHandler();
  };

  render() {
    return (
      <div className="own-form">
        <Script
          url="https://cdn.omise.co/omise.js"
          onLoad={this.handleLoadScript}
        />
        <form>
          <button
            id="credit-card"
            className="btn"
            type="button"
            onClick={this.handleClick}
          >
            Pay with Credit Card
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
