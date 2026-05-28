import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>KALLOS<span className="text-gradient">LUJO</span></h2>
            <p className="fade-text">
              Elevating events through premium sound, lighting, and cinematic visual experiences. Setting the standard for luxury event management.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/kallos_lujo_events?igsh=a3NrcjY1YnZqMTFh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><a href="mailto:kalloslujo@gmail.com">Get a Quote</a></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Event Videography</li>
              <li>Cinematic Photography</li>
              <li>Stage & Lighting</li>
              <li>Premium Audio Systems</li>
              <li>360 Photo Booths</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={20} className="icon-gold" />
                <span>Serving premium events nationwide</span>
              </li>
              <li>
                <Phone size={20} className="icon-gold" />
                <span>+44 7393 486331</span>
              </li>
              <li>
                <Mail size={20} className="icon-gold" />
                <span>kalloslujo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kallos Lujo Events. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
