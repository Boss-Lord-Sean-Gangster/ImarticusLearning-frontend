import React, { useState, useEffect } from "react";
import Section from "./Section";
import SkeletonLoader from "./SkeletonLoader"; // Assuming you have a SkeletonLoader component

export function CourseContent({courseId}) {
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch course data on component mount
  useEffect(() => {
    async function fetchCourseData() {
      try {
        // Assuming you're fetching the course data from an API
        const response = await fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/courses/${courseId}`); // Replace with your actual API URL
        const data = await response.json();
        setCourseTitle(data.title); // Assuming the backend returns { title: "Course Title" }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data", error);
        setLoading(false); // In case of error, stop loading
      }
    }
    
    fetchCourseData();
  }, []);

  return (
    <div className="p-4" style={{width:'80%', marginLeft:"20%"}}>
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Course</li>
          <li className="breadcrumb-item active" aria-current="page">
            {loading ? <SkeletonLoader width="200px" /> : courseTitle}
          </li>
        </ol>
      </nav>

      <div className="card mb-4">
        <div className="card-body border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h4">
              {loading ? <SkeletonLoader width="300px" height="40px" /> : courseTitle}
            </h1>
            <button className="btn btn-outline-success text-success border-success hover:bg-success hover:text-white">
              Resume
            </button>
          </div>
        </div>

        <Section courseId={courseId} />
      </div>

      <div className="card mt-4">
        <div className="card-body d-flex align-items-center gap-4">
          <div className="bg-light p-3 rounded">
            <svg className="w-8 h-8 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 12H4M4 12L10 6M4 12L10 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1">
            <h5 className="font-weight-bold">Certificate</h5>
            <p className="text-muted">Complete the course to download the certificate</p>
          </div>
          <button className="btn btn-outline-success disabled text-success border-success hover:bg-success hover:text-white" style={{marginLeft:"40%"}}>
            Get Certificate
          </button>
        </div>
      </div>
    </div>
  );
}
