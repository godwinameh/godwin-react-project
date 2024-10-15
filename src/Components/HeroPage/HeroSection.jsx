
import manWithBanana from "../../assets/manwithbanana.svg";

import './HeroSection.css';

const HeroSection = () => {
  return (
      <div className="hero-container">
    <section className="hero-section ">
      <div className="hero-content">
        <h1>
          Enjoy a 
          <span className="highlight"> <br /> unique banking <br /></span> experience
        </h1>
        <p>
          Microfinance bank for you, supporting smallholder
          farmers through co-operative micro-lending.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-open">Open an account</button>
          <button className="btn btn-request">Request loan</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={manWithBanana} alt="Farmer" />
      </div>
        </section>
      </div>
  );
};

export default HeroSection;
