import React from 'react';
import { FaStar, FaUsers } from 'react-icons/fa'; // React icons for star and users
import '../styles/Hero.css'; // Custom CSS for styling
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const goToPage = (path) => {
        navigate(path);
    }

  return (
    <div className="hero-container">
      <div className="hero-logo-text">
        <img src="hero-logo.png" alt="Hero Logo" className="hero-logo" />
        <div>
          <h2>mycaptain</h2>
          <p className="dark-green-text">BY IMARTICUS LEARNING</p>
        </div>
      </div>

      <div className="hero-tagline">
        <h1>Become a <span className="highlight-text">Digital Marketer</span> in 18 Weeks</h1>
        <p>MyCaptain Digital Marketing Program with Job Assurance</p>
      </div>

      <div className="hero-details">
        <div className="details-list">
          <ul>
            <li>
              Next Batch <span>February</span>
            </li>
            <li>
              Available Seats <span>29/60</span>
            </li>
            <li>
              Taught by experts from <span>Rapido, Deloitte, MFine, Zomato</span>
            </li>
          </ul>
        </div>
        <div className="rating-container">
          <h4><FaStar className="yellow-icon" /> 4.51 <FaUsers className="user-icon" /> 1.2 Lacs+ Learners</h4>
        </div>
      </div>

      <div className="cta-buttons">
        <button className="apply-now" onClick={() => goToPage('/course') }>Apply Now</button>
        <button className="download-brochure">Download Brochure</button>
      </div>
    </div>
  );
};

export default Hero;
