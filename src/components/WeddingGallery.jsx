import React from 'react';
import { motion } from 'framer-motion';
import './WeddingGallery.css';

import m1 from '../assets/openings/DSC08152-optimized.webp';
import m2 from '../assets/gatherings/DSC07840-optimized.webp';
import m3 from '../assets/openings/DSC08160-optimized.webp';
import m4 from '../assets/corporate/DSC00013-optimized.webp';
import m5 from '../assets/party/DSC08699-optimized.webp';
import m6 from '../assets/weddings/DSC07053-optimized.webp';

const WeddingGallery = () => {
  const images = [m1, m2, m3, m4, m5, m6];

  return (
    <section className="wedding-gallery-section section">
      <div className="container">
        <div className="wedding-header">
          <motion.span 
            className="section-kicker text-gradient"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            OUR COLLECTIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Memories That Last Forever
          </motion.h2>
          <div className="header-line" style={{ margin: "2rem 0 4rem 0" }}></div>
        </div>

        <div className="gallery-masonry">
          {images.map((imgSrc, idx) => (
            <motion.div 
              key={idx} 
              className="gallery-item-container"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="gallery-img-wrapper">
                <img src={imgSrc} alt="Event Memories Collection" className="gallery-img" />
                <div className="gallery-glow"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;
