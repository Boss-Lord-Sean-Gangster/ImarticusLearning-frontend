import React from 'react';
import '../styles/Partners.css'; // Custom CSS for styling

const Partners = () => {
  return (
    <div className="partners-container">
      <h3 className="partners-title">
        <span className="partners-count">1000+</span> Hiring Partners
      </h3>
      <div className="partners-logos">
        <img src="leadsquard-banner.png" alt="Leadsquard" />
        <img src="maersk-banner.png" alt="Maersk" />
        <img src="cognizant-banner.png" alt="Cognizant" />
        <img src="saasguru-banner.png" alt="SaasGuru" />
        <img src="schbaang-banner.png" alt="Schbaang" />
        <img src="ola-banner.png" alt="Ola" />
        <img src="flipkart-banner.png" alt="Flipkart" />
        <img src="socail-banner.png" alt="Social" />
        <img src="thesocialbooth-banner.png" alt="The Social Booth" />
        <img src="cupshup-banner.png" alt="Cupshup" />
        <img src="semirer-banner.png" alt="Semirer" />
        <img src="deloitte-banner.png" alt="Deloitte" />
      </div>
      <p className="partners-text">and more</p>
    </div>
  );
};

export default Partners;
