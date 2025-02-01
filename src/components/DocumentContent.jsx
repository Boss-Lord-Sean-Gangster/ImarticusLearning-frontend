import React, { useState, useEffect } from "react";
import Video from "./Video";
import SkeletonLoader from "./SkeletonLoader"; // Assuming you have a SkeletonLoader component
import DocumentViewer from "./DocumentViewer";

export function DocumentContent({ courseId }) {
  const [courseTitle, setCourseTitle] = useState(""); // State to store the video title

  return (
    <div className="p-4" style={{ width: '80%', marginLeft: "20%" }}>
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Course</li>
          <li className="breadcrumb-item">Document</li>
          <li className="breadcrumb-item active" aria-current="page">
            {/* {loading ? <SkeletonLoader width="200px" /> : courseTitle || "Loading..."} */}
          </li>
        </ol>
      </nav>

      <div className="card mb-4">
        <div className="card-body border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h4">
              {/* {loading ? <SkeletonLoader width="300px" height="40px" /> : courseTitle || "Loading..."} */}
            </h1>
          </div>
        </div>
          <DocumentViewer courseId={courseId}/>  
      </div>
    </div>
  );
}
