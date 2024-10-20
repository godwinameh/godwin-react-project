import React from "react";
import "./BusinessPage.css";
import businessLady from "../../assets/businessLady.svg";
import  question from  '../../assets/question.svg'
import avg from '../../assets/avg.svg'
import carmel from  '../../assets/carmel.svg'


const BusinessPage = () => {
  return (
    <div className="container-business">
       <div className="business-page">
      <div className="business-section">
        <div className="buz-image-container">
          <img src={businessLady} alt="Lady" />
        </div>
        <div className="buz-contentPage ">
          <div className="buz-text-content">
          <p>
            Whether you're looking for a partner on
             your next business adventure or an organisation with robust support for finance services, we have got everything you need in one safe place.
          </p>
          <h2>Power your business  potential and get the support you need in  real ₦ values</h2>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card orange text-[#F88347] border-[#F88347]">
            <img src={avg} alt="icons" />
          <h3 className="">2,100</h3>
          <p>Average investment amount</p>
        </div>
        <div className="stat-card blue text-[#4771FF] border-[#4771FF]">
            <img src={question} alt="icons" />
          <h3>80,000</h3>
          <p>Questions asked by investors to entrepreneurs</p>
        </div>
        <div className="stat-card green text-[#058054] border-[#058054]">
            <img src={carmel} alt="icons" />
          <h3>356</h3>
          <p>Average investors per deal  (398 avg. in the top 10 deals)</p>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default BusinessPage;
