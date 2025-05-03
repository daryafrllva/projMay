import React, { useState } from 'react';
import './Header.less';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const selectLanguage = (lang) => {
    setCurrentLang(lang);
    setIsLangMenuOpen(false);
  };


  return (
    <header className="header-wrapper">
      <div className="header-container">
        <a href="/" className="_link_18p1q_1">AI BOOST USA</a>
        
        <div 
          className={`header-burger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </div>
        
        <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-menu">
            <li><a href="/about" className="nav-link">О нас</a></li>
            <li><a href="#" className="nav-link">Инструкция</a></li>
            <li><a href="#" className="nav-link">Вики</a></li>
          </ul>
          
          <div className="header-right">


            <div className="_wrapper_1xdl1_1">
              <button className={`_button_1xdl1_5 ${isLangMenuOpen ? '_open_1xdl1_41' : ''}`}
                      onClick={toggleLangMenu}>
                <span className="_currLang_1xdl1_41">{currentLang}</span>
                <svg width="12" height="8" viewBox="0 0 12 8">
                  <path d="M1 1L6 6L11 1" stroke="currentColor"/>
                </svg>
              </button>


              <div className={`_dropdown_1xdl1_56 ${isLangMenuOpen ? '_open_1xdl1_41' : ''}`}>
                <div className="_container_1xdl1_9">
                  <button
                      className={`_langButton_1xdl1_17 ${currentLang === 'RU' ? '_active_1xdl1_26' : ''}`}
                      onClick={() => selectLanguage('RU')}
                  >
                    RU
                  </button>
                  <button
                      className={`_langButton_1xdl1_17 ${currentLang === 'EN' ? '_active_1xdl1_26' : ''}`}
                      onClick={() => selectLanguage('EN')}
                  >
                    EN
                  </button>
                  <button
                      className={`_langButton_1xdl1_17 ${currentLang === 'UA' ? '_active_1xdl1_26' : ''}`}
                      onClick={() => selectLanguage('UA')}
                  >
                    ES
                  </button>
                </div>
              </div>
            </div>








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