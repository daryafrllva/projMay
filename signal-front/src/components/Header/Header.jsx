import React, { useState } from 'react';
import './Header.less';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="logo">MyApp</div>
        
        <div 
          className={`header-burger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </div>
        
        <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-menu">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link active">Features</a></li>
            <li><a href="#" className="nav-link">Pricing</a></li>
            <li><a href="#" className="nav-link">About</a></li>
          </ul>
          
          <div className="header-right">
            <div className="account-wrapper">
              <p>Account</p>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="..." stroke="#fbfbfb" />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;