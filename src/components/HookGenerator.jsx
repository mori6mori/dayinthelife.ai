import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HookGenerator.css';

const HookGenerator = () => {
  const navigate = useNavigate();
  const [selectedHook, setSelectedHook] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hooksData = [
    { hook: 'Hook 1', storyline: 'Storyline for Hook 1' },
    { hook: 'Hook 2', storyline: 'Storyline for Hook 2' },
    { hook: 'Hook 3', storyline: 'Storyline for Hook 3' },
    { hook: 'Hook 4', storyline: 'Storyline for Hook 4' },
  ];

  const handleSubmit = () => {
    if (!selectedHook) return;

    setIsSubmitting(true);

    // Simulate a 20-second wait
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/video-display');
    }, 20000);
  };

  return (
    <div className="hook-generator-container">
      <h1 className="super-creator">Super Creator</h1>

      <div className="generator-content">
        <h2 className="main-title">Hook & Video Structure Generation</h2>
        <p className="subtitle">
          Select the story card you like the most and proceed to generating the final script!
        </p>

        <div className="hooks-section">
          <h3 className="text-xl font-semibold mb-4">Viral Hooks</h3>
          <div className="hooks-grid">
            {hooksData.map((item, index) => (
              <div
                key={index}
                className={`hook-card ${selectedHook === item ? 'selected' : ''}`}
                onClick={() => setSelectedHook(item)}
              >
                <div className="card-header">
                  <h4>Hook:</h4>
                </div>
                <div className="card-content">
                  <p className="mb-4 text-gray-700">{item.hook}</p>
                  <h4>Storyline:</h4>
                  <p className="text-gray-700">{item.storyline}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="submit-button" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Generating Video...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HookGenerator;