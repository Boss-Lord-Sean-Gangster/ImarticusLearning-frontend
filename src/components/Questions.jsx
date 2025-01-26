import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/Questions.css";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Do I need a laptop to do the course?",
      answer:
        "A Laptop is mandatory to do the course. This is primarily because all your projects are industry-level and you would be able to do those projects only on a Laptop.",
    },
    {
      question: "How will the Placement Assurance work?",
      answer:
        "On successful completion of the course, our placements team will ensure that you apply to 10 partnered jobs per week. This will help you crack up to 10 assured interviews over 6-10 months (or before, depending on your portfolio and Resume).",
    },
    {
      question: "How will I be taught concepts in the class?",
      answer: "The mentors would be teaching you through classroom sessions.",
    },
    {
      question: "What is the duration of this course?",
      answer:
        "This Online Program will happen across 5-7 months. The DMGP is a 5-month program with 2 specialisations, while ADMIPP is 7 months with 3 specialisations.",
    },
    {
      question: "What’s the cost of the program?",
      answer:
        "The fees for the Digital Marketing Graduate Program (DMGP) is Rs 1,75,000/- inclusive of GST.",
    },
    {
      question: "When am I eligible for the Job Assurance?",
      answer:
        "You are eligible for the Job Assurance only upon the successful graduation of the course, completing all projects, and passing Benchmark tests and Placement qualification Interviews.",
    },
    {
      question: "The course is available in which languages?",
      answer: "The course will happen only in English, not in any other regional language.",
    },
  ];

  return (
    <div className="questions-container">
      <h1 className="title">Still Have Doubts?</h1>
      <p className="subtitle">
        We have answered some of the frequent questions for you!
      </p>
      <div className="accordion">
        {questions.map((item, index) => (
          <div
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <p className="question">{item.question}</p>
              <span className="icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-body">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
