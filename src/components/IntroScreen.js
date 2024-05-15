import React from 'react';
import './IntroScreen.css';

const IntroScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-bg"></div>
      <div className="splash-text animate-reveal-text">
        MoodInsight
      </div>
    </div>
  );
};

export default IntroScreen;

