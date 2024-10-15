import React from 'react';
// import { FaClockRotateLeft } from "react-icons/fa6";
// import { CiSettings } from "react-icons/ci";
// import { FaClock, FaChartLine, FaLock } from 'react-icons/fa';
// import GooglePlay from './google-play-icon.png'; // Assume you have Google Play and App Store icons
// import AppStore from './app-store-icon.png'; // Update paths as necessary
// import PhoneImage1 from './phone1.png'; // Replace with your actual image path
// import PhoneImage2 from './phone2.png'; // Replace with your actual image path

const BankFeatures = () => {
  return (
    <div className="bg-green-100 py-12 px-4 md:px-12 lg:px-24 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Bank with Us on the Go!</h1>
      <p className="text-lg mb-8">Our Mobile banking solutions offer you the following:</p>
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left section with features */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-start space-x-4">
             <FaClockRotateLeft className="text-orange-400 text-2xl" />
            <div>
              <h2 className="text-xl font-semibold text-orange-500">Always on 24 x 7 Accesses</h2>
              <p className="text-gray-600">
                You can conveniently access our banking services anytime, anyday. You are also transaction ready without having to visit any of our local branches before you finalize your transactions.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CiSettings className="text-blue-400 text-2xl" />
            <div>
              <h2 className="text-xl font-semibold text-blue-500">Optimizing Your Money</h2>
              <p className="text-gray-600">
                You can manage your money with less effort. Manage your money digitally and optimize how much money you can save all from a single dashboard.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaLock className="text-green-400 text-2xl" />
            <div>
              <h2 className="text-xl font-semibold text-green-500">Strengthened Security</h2>
              <p className="text-gray-600">
                We require a username and password to sign into the banking app and offer additional safety features to further safeguard your account: Multifactor authentication.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right section with images */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-60 h-96 md:w-72 md:h-[28rem] lg:w-80 lg:h-[32rem]">
            <img src={PhoneImage1} alt="Phone 1" className="absolute left-0 w-full h-full object-contain" />
            <img src={PhoneImage2} alt="Phone 2" className="absolute right-0 top-0 w-full h-full object-contain transform translate-x-6" />
          </div>
        </div>
      </div>

      {/* Store buttons */}
      <div className="mt-8 flex justify-center md:justify-start space-x-4">
        <a href="#">
          <img src={GooglePlay} alt="Get it on Google Play" className="w-32 h-10 object-contain" />
        </a>
        <a href="#">
          <img src={AppStore} alt="Download on the App Store" className="w-32 h-10 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default BankFeatures;
