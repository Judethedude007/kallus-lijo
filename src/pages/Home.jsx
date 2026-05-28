import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import AnimatedServiceCard from '../components/AnimatedCard';
import ExpertiseAccordion from '../components/ExpertiseAccordion';
import StatsBar from '../components/StatsBar';
import Marquee from '../components/Marquee';
import CircularBadge from '../components/CircularBadge';
import WeddingGallery from '../components/WeddingGallery';
import ContactForm from '../components/ContactForm';
import './Home.css';
import logo from '../assets/Logo no background.png';
import heroImage from '../assets/weddings/DSC06118-optimized.webp';
import serv360 from '../assets/360 photobooth/360-optimized.webp';
import servOriginal1 from '../assets/party/PHOTO-2025-07-04-18-23-51-optimized.webp';
import servOriginal2 from '../assets/party/PHOTO-2025-07-04-18-23-51(1)-optimized.webp';
import servOriginal3 from '../assets/party/PHOTO-2025-07-04-18-23-51(4)-optimized.webp';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHeroText = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Automatically trigger the cinematic zoom-in exit animation after the progress circle finishes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { title: "360 Photobooth", description: "Immersive 360-degree video experiences capturing every angle of your special moments with premium quality.", image: serv360 },
    { title: "Cinematic Videography", description: "Masterfully crafted visual storytelling capturing the essence, emotion, and scale of your luxury events.", image: servOriginal2 },
    { title: "Dynamic Lighting & Stage", description: "Immersive atmospheric design utilizing state-of-the-art rigging and intelligent light architecture.", image: servOriginal3 },
    { title: "Premium Audio Engineering", description: "Flawless acoustics and enveloping sound systems tailored for pristine clarity in any venue.", image: servOriginal1 }
  ];

  const testimonials = [
    { name: "Leo Mcmullen & Ellis Thompson", role: "Into The Groove (dance music events - Cumbria)", text: "Absolutely unreal photos - captured the atmosphere, crowd energy, and every standout moment of our set perfectly." },
    { name: "Simon Brown", role: "LDN Fashion Week Gala Night", text: "So glad we had the 360 booth....It was the perfect way to showcase our designers, models, and the energy of the night." },
    { name: "The lovely bride and groom", role: "Two Newlyweds Now Living Happily Ever After", text: "These guys absolutely made our night - the 360 booth was a madness, everyone loved it, and they really made the party." }
  ];

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.8, duration: 1.5, ease: "easeInOut" } }}
          >
            <div className="loader-floral-bg"></div>

            <motion.div className="loader-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 80, opacity: 0 }} /* Extreme zooming out/into the screen */
              transition={{ duration: 2.0, ease: [0.65, 0, 0.1, 1] }}
            >
              <div className="loader-circle-wrapper">
                <svg className="loader-circle-svg" viewBox="0 0 100 100">
                  <circle className="loader-circle-bg" cx="50" cy="50" r="48" />
                  <motion.circle
                    className="loader-circle-progress"
                    cx="50" cy="50" r="48"
                    initial={{ strokeDashoffset: 301 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
                </svg>
                <img src={logo} alt="Kallos Lujo" className="loader-logo" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="home-wrapper">
        <section className="hero-section">
          <div className="hero-bg">
            <motion.img
              style={{ y: yHero }}
              src={heroImage}
              alt="Luxury Event Setup"
              className="hero-img"
            />
            {/* Generic translucent cinematic overlay video over the whole hero */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-particles-and-lines-of-light-19818-large.mp4"
            />
            <div className="hero-overlay"></div>
            <div className="hero-gradient-bottom"></div>
          </div>

          <motion.div className="container hero-content" style={{ opacity: opacityHeroText }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 50 : 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hero-subtitle">PREMIUM EVENT PRODUCTION</span>
            </motion.div>

            {/* DEDICATED TITLE VIDEO BACKDROP WRAPPER */}
            <div className="title-backdrop-container">
              <div className="title-placeholder-video-box">
                {/* YOU CAN REPLACE THIS VIDEO LINK LATER */}
                <video
                  autoPlay loop muted playsInline className="title-embedded-video"
                  src="https://assets.mixkit.co/videos/preview/mixkit-abstract-particles-and-lines-of-light-19818-large.mp4"
                />
                <div className="title-video-mask"></div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 50 : 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hero-title"
              >
                Event.<br />
                <span className="text-gradient">Unforgettable.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-desc"
            >
              We engineer breathtaking atmospheres for the world's most exclusive events through cutting-edge lighting, pristine audio, and master visual storytelling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="primary">Explore Our Capabilities</Button>
            </motion.div>
          </motion.div>

          <CircularBadge text="Scroll to Experience • Award Winning • " />
        </section>

        {/* STATS STRIP SECTION */}
        <StatsBar />

        {/* SERVICES SECTION */}
        <section className="section services-preview">
          <div className="container">
            <div className="section-header">
              <motion.span
                className="section-kicker text-gradient"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                OUR EXPERTISE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
              >
                Mastering Every Dimension
              </motion.h2>
            </div>

            <div className="services-showcase">
              <ExpertiseAccordion services={services} />
            </div>
          </div>
        </section>

        {/* WEDDING GALLERY SECTION */}
        <WeddingGallery />

        {/* MARQUEE SECTION */}
        <Marquee text="LUXURY WEDDINGS • CORPORATE GALAS • HIGH-END PRODUCTION" />

        {/* TESTIMONIALS SECTION */}
        <section className="section testimonials-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Experience Speaks</h2>
              <div className="header-line"></div>
            </div>

            <div className="testimonial-cards">
              {testimonials.map((test, idx) => (
                <motion.div
                  key={idx}
                  className="testimonial-card glass-box"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="testimonial-text">"{test.text}"</p>
                  <div className="testimonial-author">
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
