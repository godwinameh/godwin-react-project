
import manWithBanana from "../../assets/manwithbanana.svg";
import AccountOpeningForm from "../../Pages/AccountOpeningForm/AccountOpeningForm";
import './HeroSection.css';
import { useState } from "react";
import 'animate.css'

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenAccount = () => {
    setShowForm(true); // Show the account opening form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form when closing
  };
  return (
      <div className="hero-container">
    <section className="hero-section ">
      <div className="hero-content">
        <h1 class="animate__animated animate__rotateIn" >
          Enjoy a 
          <span className="highlight"> <br /> unique banking <br /></span> experience
        </h1>
        <p>
          Microfinance bank for you, supporting smallholder
          farmers through co-operative micro-lending.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-open" onClick={handleOpenAccount}>Open an account</button>
          <button className="btn btn-request">Request loan</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={manWithBanana} alt="Farmer"  class="animate__animated animate__rollIn"/>
      </div>
        </section>
             {/* Conditionally render the AccountOpeningForm */}
      {showForm && (
        <div className="account-form-overlay">
          <div className="account-form-container">
            <button className="close-form" onClick={handleCloseForm}>✖</button>
            <AccountOpeningForm />
          </div>
        </div>
      )}
      </div>
  );
};

export default HeroSection;
