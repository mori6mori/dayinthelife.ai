import React, { useState } from 'react';
import './UploadMaterial.css';

const UploadMaterial = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleAudioUpload = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleVideoUpload = (event) => {
    setVideoFile(event.target.files[0]);
  };

  return (
    <div className="upload-container">
      <h1 className="creative-companion">Creative Companion</h1>
      
      <div className="material-section">
        <h2 className="title">Add Material (Video & Voice)</h2>
        <p className="description">
          Upload raw footage you filmed for your vlog, product and talk about
          what is going on in the clip!
        </p>

        <div className="upload-areas">
          <div className="audio-section">
            <div className="record-audio-box">
              <div className="mic-icon">🎤</div>
              <p>Record audio</p>
            </div>
            <label className="upload-audio-btn">
              <span className="audio-icon">🔊</span>
              Upload audio
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioUpload}
                hidden
              />
            </label>
          </div>

          <div className="video-section">
            <label className="upload-video-box">
              <div className="upload-icon">⬆️</div>
              <p>Upload video</p>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                hidden
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMaterial; 