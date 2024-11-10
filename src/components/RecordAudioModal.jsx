import React, { useState, useRef } from 'react';
import './RecordAudioModal.css';

const RecordAudioModal = ({ isOpen, onClose, onAudioRecorded }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartRecording = () => {
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = event => {
          if (event.data.size > 0) {
            setRecordedChunks(prev => [...prev, event.data]);
          }
        };
        mediaRecorder.current.start();
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  };

  const handleStopRecording = () => {
    mediaRecorder.current.stop();
    setIsRecording(false);

    const audioBlob = new Blob(recordedChunks, { type: 'audio/webm' });
    const audioFile = new File([audioBlob], 'recorded_audio.webm', {
      type: 'audio/webm',
    });
    onAudioRecorded(audioFile);
    setRecordedChunks([]); // Clear recorded chunks
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