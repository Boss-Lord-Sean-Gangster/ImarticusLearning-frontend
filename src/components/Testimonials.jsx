import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Gupta",
      date: "January 10, 2025",
      description: "The Digital Marketing Pro course completely changed my career. The live sessions and projects were amazing!",
    },
    {
      name: "Sanya Mehra",
      date: "December 5, 2024",
      description: "I loved the hands-on approach. The instructors were very helpful, and the projects were real-world oriented.",
    },
    {
      name: "Rohan Sharma",
      date: "November 20, 2024",
      description: "The course exceeded my expectations. The performance marketing module was my favorite part!",
    },
    {
      name: "Isha Malhotra",
      date: "October 15, 2024",
      description: "Highly recommend this course to anyone looking to get into digital marketing. The support was phenomenal.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="title">Testimonials From Our Students</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="card-header">
              <FaUserCircle className="user-icon" />
              <div>
                <h3 className="name">{testimonial.name}</h3>
                <p className="date">{testimonial.date}</p>
              </div>
            </div>
            <p className="description">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
