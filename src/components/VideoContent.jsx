import React, { useState, useEffect } from "react";
import Video from "./Video";
import SkeletonLoader from "./SkeletonLoader"; // Assuming you have a SkeletonLoader component

export function VideoContent({ videoId }) {
  const [courseTitle, setCourseTitle] = useState(""); // State to store the video title
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch the video title based on videoId
  useEffect(() => {
    const fetchVideoTitle = async () => {
      try {
        const response = await fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/videos/${videoId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch video title");
        }
        const videoData = await response.json();
        if (videoData.title) {
          setCourseTitle(videoData.title); // Set the title from the response
        }
      } catch (error) {
        console.error("Error fetching video title:", error);
      } finally {
        setLoading(false); // Once the request completes, set loading to false
      }
    };

    if (videoId) {
      fetchVideoTitle(); // Fetch the video title when videoId changes
    }
  }, [videoId]);

  return (
    <div className="p-4" style={{ width: '80%', marginLeft: "20%" }}>
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Course</li>
          <li className="breadcrumb-item">Videos</li>
          <li className="breadcrumb-item active" aria-current="page">
            {loading ? <SkeletonLoader width="200px" /> : courseTitle || "Loading..."}
          </li>
        </ol>
      </nav>

      <div className="card mb-4">
        <div className="card-body border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h4">
              {loading ? <SkeletonLoader width="300px" height="40px" /> : courseTitle || "Loading..."}
            </h1>
          </div>
        </div>

        <Video videoId={videoId} />
      </div>
    </div>
  );
}
