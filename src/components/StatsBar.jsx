import React from 'react';
import { motion } from 'framer-motion';
import './StatsBar.css';

const StatsBar = () => {
  const stats = [
    { value: "25+", label: "UK Counties Served" },
    { value: "150+", label: "Premium Events" },
    { value: "100%", label: "Cinematic Quality" }
  ];

  return (
    <div className="stats-container">
      <div className="container stats-inner">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="stat-value text-gradient">{stat.value}</h3>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
