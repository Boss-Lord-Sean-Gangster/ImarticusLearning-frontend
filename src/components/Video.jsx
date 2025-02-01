import React, { useState, useEffect, useRef } from "react";

const VideoPart = ({ videoId, onProgress }) => {
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null); // State to hold the video URL
  const playerRef = useRef(null);

  // Fetch the video URL based on the videoId passed to the component
  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(`https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/videos/${videoId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }
        const videoData = await response.json();
        console.log("Video data received:", videoData); // Log video data to verify the response
        if (videoData.videoUrl) {
          setVideoUrl(videoData.videoUrl); // Assuming videoData has a videoUrl property
        } else {
          console.error("No videoUrl found in response");
        }
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    if (videoId) {
      fetchVideoUrl();
    }
  }, [videoId]);

  // Update progress at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.currentTime;
        const duration = playerRef.current.duration;
        if (duration) {
          const percentage = (currentTime / duration) * 100;
          setProgress(percentage);
          onProgress(videoId, percentage); // Send progress update
        }
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [videoId, onProgress]);

  return (
    <div className="video-container" style={{width:"1000px"}}>
      {/* Conditionally render the iframe when the video URL is fetched */}
      {videoUrl ? (
        <iframe
          ref={playerRef}
          width="1000"
          height="515"
          src={`https://www.youtube.com/embed/${videoUrl}`} // Use the fetched videoUrl here
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{marginLeft:"10%"}}
        ></iframe>
      ) : (
        <p>Loading video...</p> // Show loading text while fetching the video URL
      )}

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default VideoPart;
