// Footer.js

import React from 'react';
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone />
          <p>+1 123 456 7890</p>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <p>info@example.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <p>123, Housing Society, India</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com"><FaFacebookF /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;
