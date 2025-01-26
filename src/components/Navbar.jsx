import React, { useState } from 'react';
import '../styles/Navbar.css'; // For custom CSS styles

const Navbar = () => {
  const [active, setActive] = useState(null); // To track active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the mobile menu

  const handleClick = (index) => {
    setActive(index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <img src="Imarticus-logo.png" alt="Imarticus logo" className="logo" />
      <nav className="navbar sticky-top">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`} />
          <div className={`line ${isMenuOpen ? 'open' : ''}`} />
          <div className={`line ${isMenuOpen ? 'open' : ''}`} />
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {['Overview', 'Hiring Partners', 'Curriculum', 'Trainers', 'Projects', 'Success Stories', 'Pricing', 'FAQs'].map((item, index) => (
            <li
              key={index}
              className={`nav-item ${active === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
