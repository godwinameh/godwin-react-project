import React from 'react';
import './OurService.css';
import kobo from '../../assets/kobo.svg';
import money from '../../assets/money.svg';
import account from '../../assets/account.svg';
import agricloan from '../../assets/agricloan.svg';
import loan from '../../assets/loan.svg';
import buzloan from '../../assets/buzloan.svg';
import 'animate.css'

const OurService = () => {
  return (
   <div className="service-offerings-container">
     <div className="service-offerings">
      <div className="header-services">
        <h2>Our Service Offerings and Benefits</h2>
        <p>
          At First Multiple, we are inclined to give you the right support. We are backed with state- of-the-art technology to bring you the right business support that you need.
        </p>
        <p>
          We offer the following services and using First Multiple comes with its benefits.
        </p>
      </div>
      <div className="services-flex">
        <div className="service-wrap">
          <div className="service-item">
            <div className="img-icon">
              <img src={kobo} alt="Kobo Icon" class="animate__animated animate__zoomInDown"/>
            </div>
            <div className="text">
              <h3>KoboWeb Pay</h3>
              <p>
                Customers can pay for products and <br /> services anytime, anywhere through <br />
                our single-click payment channels.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="img-icon">
              <img src={money} alt="Money Icon" class="animate__animated animate__zoomInDown" />
            </div>
            <div className="text">
              <h3>Money Transfer</h3>
              <p>Our clients have a safe and <br /> affordable way to receive and send <br /> money.</p>
            </div>
          </div>
        </div>

        <div className="service-wrap">
          <div className="service-item">
            <div className="img-icon">
              <img src={account} alt="Account Icon" class="animate__animated animate__zoomInDown" />
            </div>
            <div className="text">
              <h3>Savings Accounts</h3>
              <p>Savings help clients build a cushion <br /> against hard times.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="img-icon">
              <img src={agricloan} alt="Agriculture Loan Icon" class="animate__animated animate__zoomInDown" />
            </div>
            <div className="text">
              <h3>Agriculture Loans</h3>
              <p>
                These loans let rural clients purchase <br /> seeds, fertilizer, livestock, and <br />
                equipment.
              </p>
            </div>
          </div>
        </div>

        <div className="service-wrap">
          <div className="service-item">
            <div className="img-icon">
              <img src={loan} alt="Group Loan Icon" />
            </div>
            <div className="text">
              <h3>Group Loans</h3>
              <p>Our group loans are targeted to very <br /> low-income entrepreneurs.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="img-icon">
              <img src={buzloan} alt="Business Loan Icon" />
            </div>
            <div className="text">
              <h3>Business Loans</h3>
              <p>Larger loan sizes and more flexible <br /> terms help entrepreneurs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default OurService;
