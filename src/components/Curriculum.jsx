import React, { useState } from "react";
import { FaAngleDown, FaArrowDown } from "react-icons/fa"; // Importing downward arrow icon from react-icons
import "../styles/Curriculum.css";

const Curriculum = () => {
  // State to manage the opening and closing of each section
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle logic
  };

  return (
    <div className="curriculum-container">
      <h1 className="curriculum-title">Program Curriculum</h1>
      <p className="curriculum-tagline">Our curriculum is designed to make you a finest marketer</p>

      <div className="accordion">
        {/* Digital Marketing Pro Course Section */}
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => handleToggle("digital-marketing-pro")}>
            <h2>Welcome to the Digital Marketing Pro Course</h2>
            <FaAngleDown className={`accordion-icon ${openSection === "digital-marketing-pro" ? "rotate" : ""}`} />
          </div>
          {openSection === "digital-marketing-pro" && (
            <div className="accordion-content">
              <p>Kickstarting your Journey as a Digital Marketer</p>
              <div className="sub-categories">
                <h3>Orientation</h3>
                <ul>
                  <li>Network & Slack Training Session</li>
                  <li>Know your Self Assessment</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Fundamentals of Digital Marketing Section */}
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => handleToggle("fundamentals-digital-marketing")}>
            <h2>Fundamentals of Digital Marketing</h2>
            <FaAngleDown className={`accordion-icon ${openSection === "fundamentals-digital-marketing" ? "rotate" : ""}`} />
          </div>
          {openSection === "fundamentals-digital-marketing" && (
            <div className="accordion-content">
              <p>6 Live Classes | 1 Project | Business Models and Competitor Research</p>
              <div className="sub-categories">
                <h3>Live Classes</h3>
                <ul>
                  <li>How to create a Customer Persona?</li>
                  <li>Captain Collab: Building Customer Personas with Research & Data</li>
                  <li>Minor Project: Brand Analysis for brands like Zoom & Lenskart</li>
                  <li>Understanding Marketing Funnels</li>
                  <li>Success Metrics of a Funnel</li>
                  <li>Captain Collab: Marketing Funnels & Metrics</li>
                  <li>Identifying the right career fit for you in Digital Marketing</li>
                </ul>
                <h3>Minor Projects</h3>
                <ul>
                  <li>Brand Analysis for brands like Zoom & Lenskart</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Social Media Marketing Section */}
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => handleToggle("social-media-marketing")}>
            <h2>Social Media Marketing</h2>
            <FaAngleDown className={`accordion-icon ${openSection === "social-media-marketing" ? "rotate" : ""}`} />
          </div>
          {openSection === "social-media-marketing" && (
            <div className="accordion-content">
              <p>10 Live Classes | 3 Projects | Understanding Social Media roles, goals, and platforms</p>
              <div className="sub-categories">
                <h3>Live Classes</h3>
                <ul>
                  <li>Why do 'Brands' need Social Media Marketing?</li>
                  <li>Brand Awareness Strategies for Instagram</li>
                  <li>Funnel Building Strategies for Instagram</li>
                  <li>Creating Social Media Strategy for Instagram</li>
                  <li>Content Ideation for Instagram</li>
                  <li>Creating Content Calendar for Instagram</li>
                </ul>
                <h3>Minor Projects</h3>
                <ul>
                  <li>Creating Social Media Strategy for Brands like Zoom & Lenskart</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Search Engine Optimisation Section */}
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => handleToggle("seo")}>
            <h2>Search Engine Optimisation</h2>
            <FaAngleDown className={`accordion-icon ${openSection === "seo" ? "rotate" : ""}`} />
          </div>
          {openSection === "seo" && (
            <div className="accordion-content">
              <p>9 Live Classes | 2 Projects | Understanding SEO & Setting up Google Keyword Planner</p>
              <div className="sub-categories">
                <h3>Live Classes</h3>
                <ul>
                  <li>How does the world of Search Engines work?</li>
                  <li>How Websites and URLs are structured?</li>
                  <li>Keyword Research & Analysis for Myntra</li>
                  <li>Identifying the Website Structure and URL Optimisation</li>
                  <li>What are Keywords and how to identify them?</li>
                  <li>Creating SEO-friendly Content with the help of ChatGPT</li>
                </ul>
                <h3>Minor Projects</h3>
                <ul>
                  <li>Keyword Research & Analysis for Myntra</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Performance Marketing Section */}
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => handleToggle("performance-marketing")}>
            <h2>Performance Marketing</h2>
            <FaAngleDown className={`accordion-icon ${openSection === "performance-marketing" ? "rotate" : ""}`} />
          </div>
          {openSection === "performance-marketing" && (
            <div className="accordion-content">
              <p>20 Live Classes | 6 Projects | Introduction to Performance Marketing</p>
              <div className="sub-categories">
                <h3>Live Classes</h3>
                <ul>
                  <li>Understanding the Scope of Performance Marketing</li>
                  <li>Starting Your Journey with Marketing Funnels</li>
                  <li>Understanding Marketing Metrics and KPIs</li>
                  <li>Understanding of Root Cause Analysis</li>
                  <li>A Guide to Google Analytics</li>
                  <li>Starting Your Excel Journey</li>
                </ul>
                <h3>Minor Projects</h3>
                <ul>
                  <li>Root Cause Analysis using tools</li>
                  <li>Google Analytics project</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="download-button">Download Brochure <FaArrowDown /></button>
    </div>
  );
};

export default Curriculum;
