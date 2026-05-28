import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularBadge from '../components/CircularBadge';
import './Services.css';

import servWeddings from '../assets/weddings/DSC02675-Enhanced-NR-optimized.webp';
import serv360 from '../assets/360 photobooth/360-optimized.webp';
import servDJ from '../assets/party/DSC08496-optimized.webp';
import servAdverts from "../assets/openings/DSC08152-optimized.webp";
import servFood from "../assets/corporate/DSC09853-optimized.webp";
import servGatherings from '../assets/gatherings/DSC01124-Enhanced-NR-optimized.webp';

const imageModules = import.meta.glob([
  '../assets/**/*-optimized.webp',
  '../assets/**/*.mp4',
  '../assets/**/*.MP4',
  '../assets/**/*.mov',
  '../assets/**/*.MOV'
], { eager: true });
const allAssets = Object.keys(imageModules).map(key => ({
  path: key,
  url: imageModules[key].default || imageModules[key]
}));

const getImagesForCategory = (categoryFolder) => {
  return allAssets
    .filter(asset => asset.path.includes(`/${categoryFolder}/`))
    .map(asset => asset.url);
};

const Services = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    { title: "Weddings", description: "Breathtaking atmospheres and masterful storytelling for the most important day of your life.", image: servWeddings, folder: 'weddings' },
    { title: "360 Photobooth", description: "Immersive 360-degree video experiences capturing every angle of your special moments with premium quality.", image: serv360, folder: '360 photobooth' },
    { title: "Parties", description: "High-energy entertainment paired with enveloping sound systems and intelligent light architecture.", image: servDJ, folder: 'party' },
    { title: "GRAND OPENINGS", description: "Cinematic commercial videography that elevates your brand and captivates your audience.", image: servAdverts, folder: 'openings' },
    { title: "CORPORATE EVENTS", description: "Premium, polished event coverage capturing the refined details and professional atmosphere.", image: servFood, folder: 'corporate' },
    { title: "PRIVATE GATHERINGS", description: "Premium production for exclusive private events, ensuring flawless execution and ambiance.", image: servGatherings, folder: 'gatherings' }
  ];

  return (
    <div className="services-page-wrapper">
      <div className="services-header-box">
        <motion.h1
          className="services-title text-center text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WHERE WE DELIVER EXCELLENCE
        </motion.h1>
      </div>

      <div className="container">
        <div className="services-grid">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              className="service-card-heavy glass-box cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProgram(program)}
            >
              <div className="service-img-wrapper">
                <img src={program.image} alt={program.title} className="service-img" />
                <div className="service-img-overlay"></div>
              </div>
              <div className="service-card-content">
                <h2>{program.title}</h2>
                <div className="service-line"></div>
                <p>{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CircularBadge text="Scroll to Explore • Premium Events • " />

      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProgram(null)}
          >
            <button className="modal-close" onClick={() => setSelectedProgram(null)}>×</button>
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedProgram.title} Gallery</h2>
              <motion.div
                className="modal-gallery-grid"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0 } // Disabled parent sequential stagger
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {getImagesForCategory(selectedProgram.folder).length > 0 ? (() => {
                  const imagesList = getImagesForCategory(selectedProgram.folder);
                  const numCols = window.innerWidth <= 768 ? 2 : 3;
                  const itemsPerCol = Math.ceil(imagesList.length / numCols);

                  return imagesList.map((src, i) => {
                    const col = Math.floor(i / itemsPerCol);
                    const row = i % itemsPerCol;
                    // Sideways load: horizontal wave progressing downwards
                    const customDelay = (row * 0.08) + (col * 0.04) + 0.2;

                    const isVideo = src.split('?')[0].match(/\.(mp4|webm|mov)$/i);
                    return isVideo ? (
                      <motion.video
                        key={i}
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        variants={{
                          hidden: { opacity: 0, y: 80, scale: 0.85, filter: "blur(10px)" },
                          show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: { type: "spring", bounce: 0.4, duration: 1.4, delay: customDelay }
                          }
                        }}
                      />
                    ) : (
                      <motion.img
                        key={i}
                        src={src}
                        alt={`${selectedProgram.title} gallery item`}
                        loading="lazy"
                        variants={{
                          hidden: { opacity: 0, y: 80, scale: 0.85, filter: "blur(10px)" },
                          show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: { type: "spring", bounce: 0.4, duration: 1.4, delay: customDelay }
                          }
                        }}
                      />
                    );
                  });
                })() : (
                  <p className="text-center" style={{ width: '100%', gridColumn: '1 / -1' }}>More images coming soon.</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
