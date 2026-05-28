import React from 'react';
import './Marquee.css';

const Marquee = ({ text }) => {
  // Duplicate text several times to make sure it fills the screen for seamless loop
  const content = `${text} • `.repeat(8);
  
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text">{content}</span>
        <span className="marquee-text">{content}</span>
      </div>
    </div>
  );
};

export default Marquee;
