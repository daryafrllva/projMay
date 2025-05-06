// Header.jsx
import React, { useState } from 'react';
import './Header.less';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase()); // Используем i18n вместо локального состояния
    setIsLangMenuOpen(false);
  };

  // Получаем текущий язык в верхнем регистре
  const currentLang = i18n.language.toUpperCase();

  return (
      <header className="header-wrapper">
        <div className="header-container">
          <a href="/" className="header-logo">
            <span className="logo-text">AI BOOST USA</span>
          </a>


          <div
              className={`header-burger ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </div>

          <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-menu">
              <li><a href="/about" className="nav-link">{t('header.about')}</a></li>
              <li><a href="/instruction" className="nav-link">{t('header.instruction')}</a></li>
              <li><a href="/wiki" className="nav-link">{t('header.wiki')}</a></li>
            </ul>

            <div className="header-right">
              <div className="language-selector">
                <button
                    className={`language-button ${isLangMenuOpen ? 'open' : ''}`}
                    onClick={toggleLangMenu}
                >
                  <span className="current-language">{currentLang}</span>
                  <svg width="12" height="8" viewBox="0 0 12 8">
                    <path d="M1 1L6 6L11 1" stroke="currentColor"/>
                  </svg>
                </button>

                <div className={`language-dropdown ${isLangMenuOpen ? 'open' : ''}`}>
                  <div className="dropdown-container">
                    <button
                        className={`language-option ${currentLang === 'RU' ? 'active' : ''}`}
                        onClick={() => selectLanguage('ru')}
                    >
                      RU
                    </button>
                    <button
                        className={`language-option ${currentLang === 'EN' ? 'active' : ''}`}
                        onClick={() => selectLanguage('en')}
                    >
                      EN
                    </button>
                    <button
                        className={`language-option ${currentLang === 'UA' ? 'active' : ''}`}
                        onClick={() => selectLanguage('ua')}
                    >
                      UA
                    </button>
                  </div>
                </div>
              </div>
              <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="telegram-button">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6178 0.999438L0.929461 9.84276C0.809084 9.89363 0.706371 9.97891 0.634166 10.0879C0.561949 10.1967 0.523438 10.3246 0.523438 10.4553C0.523438 10.5859 0.561949 10.7138 0.634166 10.8226C0.706371 10.9316 0.809084 11.0169 0.929461 11.0678L6.21446 13.1444L8.26779 20.0744C8.29477 20.1744 8.34642 20.2661 8.41803 20.3409C8.48963 20.4158 8.57889 20.4714 8.6776 20.5027C8.77632 20.5341 8.88133 20.5402 8.983 20.5203C9.08466 20.5006 9.17973 20.4556 9.25946 20.3894L12.1994 17.8578C12.3503 17.7326 12.5401 17.664 12.7361 17.664C12.9321 17.664 13.122 17.7326 13.2728 17.8578L18.5928 21.9178C18.6769 21.9819 18.7763 22.0229 18.8812 22.0368C18.986 22.0505 19.0927 22.0368 19.1906 21.9966C19.2884 21.9566 19.3741 21.8916 19.4391 21.8082C19.504 21.7248 19.5462 21.6257 19.5611 21.5211L23.4578 1.7811C23.4912 1.66682 23.4923 1.54547 23.4608 1.43065C23.4292 1.31581 23.3663 1.21203 23.2791 1.1309C23.192 1.04978 23.084 0.994515 22.9672 0.971298C22.8503 0.948081 22.7294 0.957823 22.6178 0.999438ZM18.4878 5.66611L9.95942 14.0078C9.65757 14.3053 9.46446 14.6956 9.41113 15.1161L9.11946 17.4494C9.11946 17.5176 9.09242 17.5828 9.04428 17.631C8.99615 17.679 8.93087 17.7061 8.86279 17.7061C8.79472 17.7061 8.72943 17.679 8.68131 17.631C8.63317 17.5828 8.60613 17.5176 8.60613 17.4494L7.43946 13.3194C7.38184 13.0915 7.39445 12.8514 7.47565 12.6307C7.55684 12.41 7.70282 12.219 7.89446 12.0828L18.2194 5.3861C18.4061 5.26944 18.5928 5.53777 18.4411 5.68944L18.4878 5.66611Z" fill="#FEFEFE" stroke="#FFFFFF"/>
                </svg>
              </a>

              <a href="/login" className="account-wrapper">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9985 11.7587C16.1658 11.7587 18.7334 9.35025 18.7334 6.37933C18.7334 3.40841 16.1658 1 12.9985 1C9.83126 1 7.26367 3.40841 7.26367 6.37933C7.26367 9.35025 9.83126 11.7587 12.9985 11.7587Z" stroke="#FFFFFF" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M3.90803 25.0002H22.092C24.1069 25.0002 25.659 23.375 24.7182 21.7038C23.3339 19.2453 20.1783 16.3105 13 16.3105C5.82173 16.3105 2.66607 19.2453 1.28189 21.7038C0.340893 23.375 1.89303 25.0002 3.90803 25.0002Z" stroke="#FFFFFF" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>
  );
};

export default Header;