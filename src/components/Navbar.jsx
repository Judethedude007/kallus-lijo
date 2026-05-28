import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import logo from '../assets/Logo no background.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const formEl = document.getElementById('contact-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
    }
  };

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-box' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Kallos Lujo Logo" className="logo-img" />
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </div>

        <div className="nav-actions">
          <div onClick={handleQuoteClick} style={{cursor: 'pointer'}}>
            <Button variant="primary" className="quote-btn">Get a Quote</Button>
          </div>
          <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
