
import './OurPartner.css'; 
import debitCardImage from '../../assets/debitCardImage.svg'; 
import savingicon from '../../assets/savingicon.svg'
import moneyfinger from '../../assets/moneyfinger.svg'
import koboworld from '../../assets/koboworld.svg'

const OurPartner = () => {
  return (
    <div className="partner-wrap">
        <div className="partners-container">
        <div className="service-subheader">
          <h2>Choose Your Service</h2>
          <p>
            Customized offers fast and easy. Tell us who you are and what <br /> you like, to see what offers are available to you. 
            It will only take a <br /> minute and won’t impact your credit score.
          </p>
        </div>
      <div className="services-section">
        <div className="service-card">
          <div className="icon">
            <img src={koboworld} alt="icon" />
            </div> 
          <h3>KoboWeb Pay</h3>
          <p>Learn More</p>
        </div>
        <div className="service-card">
          <div className="icon"><img src={moneyfinger} alt="image" /></div> 
          <h3>Money Transfer</h3>
          <p>Learn More</p>
        </div>
        <div className="service-card">
          <div className="icon"><img src={savingicon} alt="" /></div> 
          <h3>Savings Account</h3>
          <p>Learn More</p>
        </div>
      </div>

      <div className="debit-card-section">
        <div className="card-image">
          <img src={debitCardImage} alt="Debit Cards" />
        </div>
        <div className="card-description">
          <h1>Get Your First Multiple Debit Card</h1>
          <p>
            Access your money anywhere there’s an ATM machine, or make purchases online with your Fortress debit card.
          </p>
          <button className='btn-find'>Find out more</button>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default OurPartner;
