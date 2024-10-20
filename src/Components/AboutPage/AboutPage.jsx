import React from 'react';
import './AboutPage.css';
import image from '../../assets/images/image.png'


const AboutPage = () => {
  return (
    <div className="hero-about-container">
      <div className="w-full">
        <img src={image} alt="image" className="h-60 lg:h-auto" />
      </div>
    <div className="about-page">
      <section className="about-section">
        <h2>Who we are</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non. Amet, a ante et cursus vel. Sodales porta porta varius suspendisse faucibus phasellus lectus turpis placerat. Condimentum ultrices diam in vel et faucibus natoque tortor. Velit ut vulputate id tristique duis pharetra, volutpat lacus, iaculis. In sed tristique ut tellus varius quis ornare arcu. Consectetur sit id mattis adipiscing arcu. Vitae sed nullam egestas arcu sapien eget. Semper ornare consectetur molestie dolor fermentum elit mauris, id scelerisque. Dolor at feugiat metus, donec ultricies bibendum ornare. In malesuada in sapien, donec nec varius velit integer sed.

        Ut ornare phasellus libero semper. Quis nibh lorem consectetur ultricies vulputate egestas dictum. Integer congue tempus pretium in lorem aenean ut lectus venenatis. 
        </p>
      </section>

        <div className="text-right flex flex-col">
        <section className="about-section text-justify">
        <h2>Mission</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non. Amet, a ante et cursus vel. Sodales porta porta varius suspendisse faucibus phasellus lectus turpis placerat. Condimentum ultrices diam in vel et faucibus natoque tortor.
        </p>
      </section>

      <section className="about-section mt-10 text-justify">
        <h2>Vision</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non. Amet, a ante et cursus vel. Sodales porta porta varius suspendisse faucibus phasellus lectus turpis placerat. Condimentum ultrices diam in vel et faucibus natoque tortor.
        </p>
      </section>
        </div>
    </div>
    </div>
  );
};

export default AboutPage;
