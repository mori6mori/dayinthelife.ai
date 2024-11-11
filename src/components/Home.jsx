import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Dayinthelife.ai</h1>
      </header>
      <main className="main-content">
        {/* <h2>
          Tell me about your day & go VIRAL in clicks
        </h2> */}
        <img 
          src="/images/title.png" 
          alt="title icon" 
          className="title"
        />
        <p className="subtext">your video + our voice = viral content!</p>
        <button className="try-button">
          Try now!
          <img 
            src="/images/click.png" 
            alt="Click icon" 
            className="click-icon"
          />
        </button>
      </main>
    </div>
  );
}

export default Home;