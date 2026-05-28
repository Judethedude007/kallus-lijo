import React from 'react';
import ContactForm from '../components/ContactForm';

import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div 
    style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  >
    <ContactForm />
  </motion.div>
);

export default Contact;
