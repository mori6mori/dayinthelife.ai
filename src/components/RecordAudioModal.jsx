import React, { useState } from 'react';
import './RecordAudioModal.css';

const RecordAudioModal = ({ isOpen, onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Add actual recording logic here
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Add stop recording logic here
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Record Audio</h2>
        </div>

        <div className="modal-body">
          <div className="recording-indicator">
            {isRecording ? "Recording..." : "Ready to record"}
          </div>
          
          <div className="record-button-container">
            {!isRecording ? (
              <button 
                className="record-button"
                onClick={handleStartRecording}
              >
                Start Recording
              </button>
            ) : (
              <button 
                className="stop-button"
                onClick={handleStopRecording}
              >
                Stop Recording
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordAudioModal;