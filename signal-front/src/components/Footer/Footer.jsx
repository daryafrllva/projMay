import React from 'react';
import './Footer.less';

const Footer = () => {
  const announcementText = "36SIGNAL"; 

  return (
    <footer className="footer-wrapper">
      <div className="marquee-container rotate-left">
        <div className="marquee-content left-direction">
          {[...Array(50)].map((_, i) => (
            <span key={`left-${i}`} className="marquee-item">{announcementText}</span>
          ))}
        </div>
      </div>
      
      <div className="marquee-container rotate-right">
        <div className="marquee-content right-direction">
          {[...Array(50)].map((_, i) => (
            <span key={`right-${i}`} className="marquee-item">{announcementText}</span>
          ))}
        </div>
      </div>
      
      <div className="footer-top-border">
        <div className="footer-top-container">
          <div className="footer-socials">
            <a href="#"><svg>...</svg></a>
            <a href="#"><svg>...</svg></a>
            <a href="#"><svg>...</svg></a>
          </div>
        </div>
      </div>
      
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-copyright">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Terms</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-link">Privacy</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;