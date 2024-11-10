import React, { useState } from 'react';
import './HookGenerator.css';

const HookGenerator = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);

  const dummyScript = `This is the original script content.
It can contain multiple lines
and show the full text when expanded.`;

  return (
    <div className="hook-generator-container">
      <h1 className="super-creator">Super Creator</h1>
      
      <div className="generator-content">
        <h2 className="main-title">Hook & Video Structure Generation</h2>
        <p className="subtitle">select the card you like the most and proceed to generating the final script!</p>

        <div className="sections-container">
          <div className="persona-section">
            <h3>Persona Analysis</h3>
            <div className="analysis-card"></div>
          </div>

          <div className="hooks-section">
            <h3>Viral Hooks</h3>
            <div className="hooks-grid">
              <div className="hook-card"></div>
              <div className="hook-card"></div>
              <div className="hook-card"></div>
              <div className="hook-card"></div>
            </div>
          </div>
        </div>

        <div className="script-section">
          <div 
            className="script-header" 
            onClick={() => setIsScriptExpanded(!isScriptExpanded)}
          >
            <span>Original Script</span>
            <span className="arrow">{isScriptExpanded ? '▼' : '▶'}</span>
          </div>
          {isScriptExpanded && (
            <div className="script-content">
              {dummyScript}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HookGenerator;