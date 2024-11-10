import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HookGenerator.css';

const HookGenerator = () => {
  const navigate = useNavigate();
  const [selectedHookIndex, setSelectedHookIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPersonaOpen, setIsPersonaOpen] = useState(false);

  const modes = ['Violent Mode', 'Bedtime Mode', 'Adventure Mode'];
  const [selectedMode, setSelectedMode] = useState(modes[0]);

  const hooksData = [
    {
      hook: "POV: When you're so lost at a hackathon, you spend 20 minutes looking for WiFi instead of coding 💀",
      storyline: [
        "Open with wandering footage of the hackathon space",
        "Cut to a 'me pretending I know what I'm doing' moment with a confused expression",
        "Highlight the 'LoMA' door confusion with a close-up on the sign",
        "End with a self-roast about being the only one focused on food, showing a dramatic close-up of the food table"
      ]
    },
    {
      hook: "They said 'bring your skills to the hackathon' but my only skill is finding free food 🤡",
      storyline: [
        "Show office space footage with people working intensely",
        "Zoom in on the food area with a focus on fruits",
        "Include a voice clip about being lactose intolerant and the almond milk coffee",
        "End with a dramatic zoom on the laptop showing a blank screen or an empty code editor, emphasizing the lack of progress on the coding challenge"
      ]
    },
    {
      hook: "When you're lactose intolerant at a tech event but still manage to make your coffee order more complicated than everyone's code 💅",
      storyline: [
        "Use hallway walking footage with a focus on the person's outfit or accessories",
        "Add commentary about the almond milk and how it takes longer than regular milk",
        "Show people coding intensely and quickly, juxtaposing their efficiency with the slow coffee preparation",
        "End with a slow-motion shot of the person taking a sip of their coffee with a satisfied look"
      ]
    },
    {
      hook: "The way I walked into Eleven Labs' office looking like I know what AI is when I can barely find the WiFi password 😭",
      storyline: [
        "Use the Eleven Labs office entrance footage with a confident walk in the beginning",
        "Show the person looking around confused, trying to find the WiFi network",
        "Include a clip about 'trying to find guides' or struggling to connect to the internet",
        "End with a dramatic close-up of the door shutting behind them as they finally manage to access the WiFi"
      ]
    }
    // Removed the fifth hook as per the requirement
  ];

  const handleSubmit = () => {
    if (selectedHookIndex === null) return;

    setIsSubmitting(true);

    // Simulate a 10-second wait
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/video-display');
    }, 10000); // 10000 milliseconds = 10 seconds
  };

  return (
    <div className="hook-generator-container">
      <h1 className="super-creator">dayinthetopic.ai</h1>

      <div className="generator-content">
        <h2 className="main-title">Hook & Video Structure Generation</h2>
        <p className="subtitle">
          Select the story card you like the most and proceed to generating the final script!
        </p>

        {/* Mode Selector */}
        <div className="mode-selector">
          <h3>Change Mode</h3>
          <div className="modes">
            {modes.map((mode, index) => (
              <div
                key={index}
                className={`mode-option ${selectedMode === mode ? 'selected' : ''}`}
                onClick={() => setSelectedMode(mode)}
              >
                {mode}
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Persona Analysis */}
        <div className="persona-analysis">
          <div
            className="persona-header"
            onClick={() => setIsPersonaOpen(!isPersonaOpen)}
          >
            <h3>Persona Analysis</h3>
            <span className="arrow">{isPersonaOpen ? '▲' : '▼'}</span>
          </div>
          {isPersonaOpen && (
            <div className="persona-content">
              <h4>Background:</h4>
              <p>
                Ivy League (Columbia) student with a focus on computer science
              </p>
              <h4>Traits:</h4>
              <ul>
                <li>Self-aware and introspective</li>
                <li>Uses vulnerability and humor in storytelling</li>
                <li>Combines academic rigor with relatable struggles</li>
                <li>Tech/CS focused from a learner perspective</li>
                <li>Has a passion for learning and personal growth</li>
              </ul>
            </div>
          )}
        </div>

        {/* Hooks Section */}
        <div className="hooks-section">
          <h3 className="section-title">Viral Hooks</h3>
          <div className="hooks-grid">
            {hooksData.map((item, index) => (
              <div
                key={index}
                className={`hook-card ${selectedHookIndex === index ? 'selected' : ''}`}
                onClick={() => setSelectedHookIndex(index)}
              >
                <div className="card-content">
                  <p className="hook-text">{item.hook}</p>
                  <h4 className="storyline-title">Storyline:</h4>
                  <ol className="storyline-list">
                    {item.storyline.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HookGenerator;