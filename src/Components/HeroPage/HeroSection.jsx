import manWithBanana from "../../assets/manwithbanana.svg";
import AccountOpeningForm from "../../Pages/AccountOpeningForm/AccountOpeningForm";
import LoanRequestForm from "../LoanFormPage/LoanRequestForm";
import './HeroSection.css';
import { useState } from "react";
import 'animate.css';

const HeroSection = () => {
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [showLoanForm, setShowLoanForm] = useState(false);

  const handleOpenAccount = () => {
    setShowAccountForm(true); 
    setShowLoanForm(false); 
  };

  const handleOpenLoanRequest = () => {
    setShowLoanForm(true); 
    setShowAccountForm(false); 
  };

  const handleCloseForms = () => {
    setShowAccountForm(false);
    setShowLoanForm(false);
  };

  return (
    <div className="hero-container">
      <section className="hero-section ">
        <div className="hero-content">
          <h1 className="animate__animated animate__rotateIn">
            Enjoy a 
            <span className="highlight"> <br /> unique banking <br /></span> experience
          </h1>
          <p>
            Microfinance bank for you, supporting smallholder
            farmers through co-operative micro-lending.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-open" onClick={handleOpenAccount}>Open an account</button>
            <button className="btn btn-request" onClick={handleOpenLoanRequest}>Request loan</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={manWithBanana} alt="Farmer" className="animate__animated animate__rollIn"/>
        </div>
      </section>

      {/* Conditionally render the AccountOpeningForm */}
      {showAccountForm && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-form" onClick={handleCloseForms}></button>
            <AccountOpeningForm />
          </div>
        </div>
      )}

      {/* Conditionally render the LoanRequestForm */}
      {showLoanForm && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-form" onClick={handleCloseForms}></button>
            <LoanRequestForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
