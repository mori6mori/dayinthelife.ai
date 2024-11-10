import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadMaterial.css';
import RecordAudioModal from './RecordAudioModal';

const UploadMaterial = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [videoFiles, setVideoFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recordedAudioFile, setRecordedAudioFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAudioUpload = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files);
    setVideoFiles(files);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate a 3-second wait
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/hook-generator');
    }, 3000);
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
            <div 
              className="record-audio-box"
              onClick={() => setIsModalOpen(true)}
            >
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
              <p>Upload videos</p>
              <input
                type="file"
                accept="video/*"
                multiple
                onChange={handleVideoUpload}
                hidden
              />
            </label>
            {videoFiles.length > 0 && (
              <div className="video-list">
                <h3>Uploaded Videos:</h3>
                <ul>
                  {videoFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <button className="submit-button" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Submit'}
        </button>
      </div>

      <RecordAudioModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAudioRecorded={(file) => setRecordedAudioFile(file)}
      />
    </div>
  );
};

export default UploadMaterial;