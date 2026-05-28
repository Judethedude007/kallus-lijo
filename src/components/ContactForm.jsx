import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from './Button';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [eventDate, setEventDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Web3Forms API Configuration
    const formData = new FormData(e.target);
    // Explicit API Routing Key for Web3Forms forwarder (Write-Only Safe)
    formData.append("access_key", "fdceaded-b5c2-4990-a9c4-54ffd8851c53");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Something went wrong with the email forwarder!");
      }
    } catch (error) {
      console.log("Web3Forms error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="contact-form-section">
      {/* Desktop Only Premium Shiny Ornamental Patterns */}
      <div className="desktop-patterns">
        <div className="pattern-ring ring-1"></div>
        <div className="pattern-ring ring-2"></div>
        <div className="pattern-ring ring-3"></div>
        <div className="pattern-ring ring-4"></div>
        <div className="pattern-ring ring-5"></div>
        <div className="pattern-ring ring-6"></div>
      </div>

      <div className="container contact-form-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>BOOK YOUR EVENT <span className="text-gradient">NOW!</span></h2>
          <p className="required-note">* indicates required fields</p>
        </motion.div>

        <motion.form 
          className="glass-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name*" required />
            </div>
            <div className="form-group">
              <input type="text" name="lastName" placeholder="Last Name*" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <input type="email" name="email" placeholder="Email Address*" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone*" required />
            </div>
            <div className="form-group">
              <input type="text" name="extension" placeholder="Extension" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="location" placeholder="Location(s)" />
            </div>
            <div className="form-group">
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                placeholderText="Event Date"
                name="eventDate"
                dateFormat="MMMM d, yyyy"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <textarea name="aboutEvent" rows="5" placeholder="About My Event"></textarea>
            </div>
          </div>

          <div className="form-submit-row">
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : (submitted ? 'MESSAGE SENT ✓' : 'SUBMIT REQUEST')}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
