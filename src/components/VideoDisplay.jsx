import React from 'react';
import './VideoDisplay.css';

const VideoDisplay = () => {
  return (
    <div className="video-display-container">
      <h1 className="video-title">Generated Video</h1>
      <video controls src="/video2.mp4" className="video-player"></video>
    </div>
  );
};

export default VideoDisplay;