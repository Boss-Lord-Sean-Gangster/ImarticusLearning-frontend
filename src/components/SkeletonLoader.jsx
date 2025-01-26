import React from 'react';
import '../styles/SkeletonLoader.css'; // You can style this as per your needs

const SkeletonLoader = () => {
  return (
    <div className="course-card skeleton">
      <div className="course-info">
        <div className="course-title skeleton-text"></div>
        <div className="course-description skeleton-text"></div>
        <div className="course-author skeleton-text"></div>
        <div className="course-duration skeleton-text"></div>
        <div className="course-pricing">
          <div className="price skeleton-text"></div>
          <div className="rating">
            <div className="stars skeleton-text"></div>
            <div className="rating-info skeleton-text"></div>
          </div>
        </div>
        <button className="enroll-btn skeleton-btn"></button>
      </div>
      <div className="course-image skeleton"></div>
    </div>
  );
};

export default SkeletonLoader;
