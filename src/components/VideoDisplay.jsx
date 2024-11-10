// In VideoDisplay.jsx
import React from 'react';

const VideoDisplay = () => {
  return (
    <div className="video-display-container">
      <h1 className="text-3xl font-bold mb-4">Generated Video</h1>
      <video controls src="/video.mp4" className="w-full h-auto"></video>
    </div>
  );
};

export default VideoDisplay;