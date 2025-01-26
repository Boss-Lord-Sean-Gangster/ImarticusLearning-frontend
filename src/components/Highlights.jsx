import React from 'react';
import '../styles/Highlights.css'; // Custom CSS for styling

const Highlights = () => {
  return (
    <div className="highlights-container">
      {/* Key Highlights Section */}
      <div className="highlights">
        <h2 className="highlight-title">Key Highlights</h2>
        <div className="highlights-cards">
          <div className="highlight-card">
            <h4>1600+ <span>Students Placed</span></h4>
          </div>
          <div className="highlight-card">
            <h4>12LPA <span>Highest CTC</span></h4>
          </div>
          <div className="highlight-card">
            <h4>10 <span>Assured Interviews</span></h4>
          </div>
          <div className="highlight-card">
            <h4>1000+ <span>Hiring Partners</span></h4>
          </div>
        </div>
        <p className="highlight-companies-text">The Program has been created in collaboration with Managers from</p>
        <div className="company-logos">
          <img src="zomato-logo.png" alt="Zomato" />
          <img src="rapido-logo.png" alt="Rapido" />
          <img src="mfine-logo.png" alt="MFine" />
          <img src="Deloitte-logo.png" alt="Deloitte" />
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <h2 className="form-title">
          Apply for the MyCaptain Digital Marketing Job Assurance Program
        </h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" name="phone" />
          
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
          
          <button type="submit" className="submit-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Highlights;
