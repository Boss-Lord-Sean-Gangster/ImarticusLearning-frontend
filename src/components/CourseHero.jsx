import React, { useEffect, useState } from 'react';
import '../styles/CourseHero.css';
import { FaStar } from 'react-icons/fa';
import Form from './Form';
import SkeletonLoader from './SkeletonLoader';

const CourseHero = () => {
  // Use state to store fetched course data
  const [courseData, setCourseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from backend API (adjust the URL to your actual backend endpoint)
    fetch('https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/courses/6794d284f5ecb2ecef237718')
      .then(response => response.json())
      .then(data => setCourseData(data))
      .catch(error => console.error("Error fetching course data:", error));
  }, []);


  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling again
  };


  if (!courseData) {
    return <SkeletonLoader />; // Show Skeleton Loader while data is loading
  }

  const {
    title,
    description,
    author,
    duration,
    price,
    ratings,
    enrollments,
    image,
    curriculum,
    instructor,
    faqs,
  } = courseData;

  console.log(courseData._id)

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const stars = [...Array(fullStars)].map((_, index) => (
      <FaStar style={{ color: 'gold' }}/>
    ));
    const empty = [...Array(emptyStars)].map((_, index) => (
        <FaStar style={{ color: 'grey' }}/>
    ));
    return [...stars, ...empty];
  };

  const curriculumItems = ['concept videos', 'practice quizzes', 'certificate of completion'];
  return (
    <div className="course-hero">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <h5>Home / Courses / {title}</h5>
      </div>

      {/* Main Course Card */}
      <div className="course-card">
        <div className="course-info">
          <h2 className="course-title">{title}</h2>
          <p className="course-description">{description}</p>
          <p className="course-author">Author: {author}</p>
          <p className="course-duration">Duration: {duration}</p>

          <div className="course-pricing">
            <p className="price">${price}</p>
            <div className="rating">
              <div className="stars">{renderRatingStars(ratings)}</div>
              <p className="rating-info">({ratings} / 5)</p>
            <p className="enrolled">{enrollments} Enrolled</p>
            </div>
          </div>
            <button className="enroll-btn" onClick={openModal}>Enroll Now</button>
        </div>

        {/* Course Image */}
        <div className="course-image faded-image">
          <img src={image} alt={title} />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <Form courseId={courseData._id} closeForm={closeModal} />
          </div>
        </div>
      )}



      {/* Overlapping Section */}
      <div className="overlapping-section">
        <div className="includes">
          <h3>Includes</h3>
          <ul>
            {curriculumItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="learning">
          <h3>What will I learn?</h3>
          <ul>
            {curriculum.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='description-section'>
        <h3>Description</h3>
            <p>{description}</p>
            <ul>
            {curriculumItems.map((item, index) => (
               <li key={index}>{item}</li> 
            ))}
            </ul>
            <p>The Topics covered in <span className='highlight-text'>{title}</span> are-:</p>
            <ul>
            {curriculum.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
            </ul>
            <p>This excellent course of <span className='highlight-text'>{duration}</span> will give you complete knowledge of <span className='highlight-text'>{title}</span>.</p>
      </div>

      <div className="curriculum-section">
        <h2>Curriculum</h2>
        <ul>
          {curriculum.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>

      {/* Instructor Section */}
      <div className="instructor-section">
        <h3>About Instructors</h3>
        <div className="instructor-info">
          <img src={instructor.image} alt={instructor.name} className="instructor-image" />
          <div className="instructor-details">
            <h4>{instructor.name}</h4>
            <p>{instructor.bio}</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    
    </div>
  );
};

export default CourseHero;
