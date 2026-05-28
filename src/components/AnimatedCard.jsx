import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AnimatedCard.css';

const AnimatedServiceCard = ({ title, description, image, delay = 0 }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/services" className="card-link">
        <div className="card-image-container">
          <img src={image} alt={title} className="card-img" />
          <div className="card-overlay" />
          <div className="card-arrow">
            <ArrowUpRight size={24} color="#040D1A" strokeWidth={2.5} />
          </div>
          <div className="card-content-overlay">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimatedServiceCard;
