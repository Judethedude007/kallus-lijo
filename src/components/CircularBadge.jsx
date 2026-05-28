import React from 'react';
import './CircularBadge.css';

const CircularBadge = ({ text = "Scroll Down • Discover More • " }) => {
  return (
    <div className="circular-badge">
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
        </defs>
        <circle cx="50" cy="50" r="35" fill="none" />
        <text className="badge-text" fill="currentColor">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="badge-center">
        <div className="arrow-down"></div>
      </div>
    </div>
  );
};

export default CircularBadge;
