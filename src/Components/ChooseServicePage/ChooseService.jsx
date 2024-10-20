import React from 'react';
import './ChooseService.css'; 
import mapImage from '../../assets/mapImage.svg'; 

const ChooseService = () => {
  return (
    <div className="over-services">
      <div className="over-service-container">
      <div className="image-section">
        <img src={mapImage} alt="World Map" />
      </div>
      <div className="text-section">
        <div className="service-header">
          <h1>Digitally everywhere across the Globe.</h1>
          <p>
            The mobile banking application will allow users to pay merchants for goods and services. 
            Through our application, users can open an account, make payments and request for loans.
          </p>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default ChooseService;
