import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Who we are</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices...
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Mission</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices...
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Vision</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;