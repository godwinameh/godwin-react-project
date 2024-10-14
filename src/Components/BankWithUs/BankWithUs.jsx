
import './BankWithUs.css';
import { FaClockRotateLeft } from "react-icons/fa6";
import phoneImage from '../../assets/phoneImage.svg';
import apple from '../../assets/apple.svg'
import google from '../../assets/google.svg'
import securityicon from '../../assets/securityicon.svg'
import settingicon from '../../assets/settingicon.svg'



const BankWithUs = () => {
  return (
    <div className="overall-wrap">
     <div className="bank-container">
       <div className="header-text">   
            <h2>Bank with Us on the Go!</h2>
            <p>Our Mobile banking solutions offer you the following:</p>
        </div>
      <div className="container-all">
      <div className="text-wrap">
      <div className="bank-content">
        <div className="features">
          <div className="feature-red">
            <h3><span className="icon-red"> <FaClockRotateLeft /> </span> Always on 24 x 7 Accesses</h3>
            <p>
              You can conveniently access our banking services anytime, anywhere.
              You are also transaction-ready without having to visit any of our local branches before you finalize your transactions.
            </p>
          </div>
          <div className="feature-blue">
            <h3><span className="icon-blue"><img src={settingicon} alt="" /></span> Optimizing Your Money</h3>
            <p>
              You can manage your money with less effort. Manage your money digitally and optimize how much money you can save all from a single dashboard.
            </p>
          </div>
          <div className="feature-green">
            <h3><span className="icon"><img src={securityicon} alt="icon" /></span> Strengthened Security</h3>
            <p>
              We require a username and password to sign into the <br /> banking app and offer additional safety features to <br /> further safeguard your account: Multifactor <br /> authentication.
            </p>
          </div>
        </div>
      </div>
       </div>
      <div className="bank-image">
        <img src={phoneImage} alt="Mobile banking" />
        <div className="store-icons">
          <img src={google} alt="Google Play" />
          <img src={apple} alt="App Store" />
        </div>
      </div>
      </div>
    </div>
    </div>
   
  );
};

export default BankWithUs;
