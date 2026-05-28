import React, { useState, useEffect, useRef } from 'react';
import './ExpertiseAccordion.css';

const ExpertiseAccordion = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Desktop: Use interval if not hovered
    if (!isMobile) {
      let interval;
      if (!isHovered) {
        interval = setInterval(() => {
          setActiveIndex((current) => (current + 1) % services.length);
        }, 4000); // Automatically cycle every 4 seconds
      }
      return () => clearInterval(interval);
    }
    
    // Mobile: Use Intersection Observer to activate item closest to center
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute('data-index'));
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px", // Trigger when item enters center 20% of viewport
          threshold: 0
        }
      );

      itemRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }
  }, [isHovered, services.length]);

  return (
    <div 
      className="expertise-accordion-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {services.map((service, idx) => (
        <div 
          key={idx}
          ref={(el) => (itemRefs.current[idx] = el)}
          data-index={idx}
          className={`expertise-accordion-item ${idx === activeIndex ? 'active' : ''}`}
          onClick={() => setActiveIndex(idx)}
          onMouseEnter={() => window.innerWidth > 768 && setActiveIndex(idx)}
        >
          <img src={service.image} alt={service.title} className="accordion-bg" />
          <div className="accordion-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          
          <div className={`accordion-vertical-title ${idx === activeIndex ? 'hidden' : ''}`}>
             <span>{service.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseAccordion;
