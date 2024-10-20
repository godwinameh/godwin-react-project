import React from "react";
import "./Offers.css";
import koboWebIcon from "../../assets/koboWebIcon.svg";
import moneyTransferIcon from "../../assets/moneyTransferIcon.svg";
import savingsIcon from "../../assets/savingsIcon.svg";

const Offers = () => {
  return (
    <div className="offer-wrap">
          <div className="offers-container">
      <h2>Featured Offers from <br /> Our Partners</h2>
      <div className="offers-grid">
        <div className="offer-item">
          <img src={koboWebIcon} alt="KoboWeb Pay" />
          <h3>KoboWeb Pay</h3>
          <p>
            Customer can pay for products and services at anytime and anywhere through our single <br /> click payment channels.
          </p>
        </div>
        <div className="offer-item">
          <img src={moneyTransferIcon} alt="Money Transfers" />
          <h3>Money Transfers</h3>
          <p>
            Our clients have a safe and affordable way to receive and send money.
          </p>
        </div>
        <div className="offer-item">
          <img src={savingsIcon} alt="Savings Accounts" />
          <h3>Savings Accounts</h3>
          <p>
            Savings help clients build a cushion against hard times.
          </p>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Offers;
