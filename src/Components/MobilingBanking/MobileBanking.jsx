import React from "react";
import "./MobileBanking.css";
import phoneImage from "../../assets/phoneImage.svg"; 
import google from "../../assets/google.svg"; 
import apple from "../../assets/apple.svg";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GrShieldSecurity } from "react-icons/gr";
import { MdSettingsSuggest } from "react-icons/md";



const MobileBanking = () => {
  return (
    <section className="mobile-banking-container">
      <div className="both-container">
      <h1>Bank with Us on the Go!</h1>
      <p>Our Mobile banking solutions offer you the following:</p>
      <div className="mobile-content">

        <div className="features">
          <div className="feature-item">
            <span className="icon" style={{color: "#F88347"}}> <FaClockRotateLeft /></span>
            <div>
              <h3 style={{color: "#F88347"}}>Always on 24 x 7 Accesses</h3>
              <p>
                You can conveniently access our banking services anytime, anyday. You are also transaction ready without having to visit any of our local branches before you finalize your transactions.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon" style={{color: "#4771FF"}}>  <MdSettingsSuggest /></span>
            <div>
              <h3 style={{color: "#4771FF"}}>Optimizing Your Money</h3>
              <p>
                You can manage your money with less effort. Manage your money digitally and optimize how much money you can save all from a single dashboard.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon" style={{color: "#058054"}}><GrShieldSecurity /> </span>
            <div>
              <h3 style={{color: "#058054"}}>Strengthened Security</h3>
              <p>
                We require a username and password to sign into the banking app and offer additional safety features to further safeguard your account: Multifactor authentication.
              </p>
            </div>
          </div>
        </div>

      <div className="phoneimage-section">
        <img src={phoneImage} alt="Mobile Banking" className="phone-image" />
        <div className="app-btn">
          <img src={google} alt="Get it on Google Play" />
          <img src={apple} alt="Download on the App Store" />
        </div>
      </div>
      </div>

      </div>
    </section>
  );
};

export default MobileBanking;
