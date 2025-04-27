import React from 'react';
import './homepage.less';
import star from '../../assets/png/star.png';
import bar from '../../assets/png/bar.png';
import online from '../../assets/png/online.png';
import loss from '../../assets/png/loss.png';
import success from '../../assets/png/success.png';
import bitcoin from '../../assets/png/bitcoin.png';
import epthcoin from '../../assets/png/epthcoin.png';
import click from '../../assets/png/click.png';

const Homepage = () => {
    const announcementText = "AI BOSST USA"; 
    const starIcon = <img src={star} alt="star" className="marquee-star" />;

  return (
    <section className="homepage">
      <div className="homepage__content">
        <div className="homepage__text">
          <h1 className="homepage__title">
            <span className="homepage__title--highlight">AI BOSST USA</span> PLATFORM
          </h1>

          <p className="homepage__description">
            Современные инструменты откроют путь к успеху. Мы созданы для того, чтобы сделать трейдинг доступным, понятным и выгодным для всех. Получайте бесплатные сигналы на бинарные опционы с помощью нашей платформы.
          </p>

          <button className="homepage__button">
            Регистрация
            <span className="homepage__button-icon"><img src={click} alt="coursor" className='homepage__button-icon1'/></span>
          </button>

          <div className="homepage__stats">
            <div className="homepage__stat-item">
              <div className="homepage__stat-icon"><img src={online} alt="online"/></div>
              <div className="homepage__stat-number">1293</div>
              <div className="homepage__stat-label">Онлайн посетители</div>
            </div>
            <div className="homepage__stat-item">
              <div className="homepage__stat-icon"><img src={success} alt="success"/></div>
              <div className="homepage__stat-number">0</div>
              <div className="homepage__stat-label">Успешные сигналы</div>
            </div>
            <div className="homepage__stat-item">
              <div className="homepage__stat-icon"><img src={loss} alt="loss"/></div>
              <div className="homepage__stat-number">0</div>
              <div className="homepage__stat-label">Неудачные сигналы</div>
            </div>
          </div>
        </div>

        <div className="homepage__image">

          <div className="homepage__graph"><img src={bar} alt="graph"/></div>

          <div className="homepage__coin homepage__coin--left"><img src={epthcoin} alt="ephir"/></div>

          <div className="homepage__coin homepage__coin--right"><img src={bitcoin} alt="bitcoin"/></div>
        </div>
      </div>

      <div className="marquee-container rotate-left">
              <div className="marquee-content right-direction">
                {[...Array(50)].map((_, i) => (
                  <React.Fragment key={`left-${i}`}>
                  <span className="marquee-item">{announcementText}</span>
                  <span className="marquee-star">{starIcon}</span>
                </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="marquee-container rotate-right">
              <div className="marquee-content left-direction">
                {[...Array(50)].map((_, i) => (
                  <React.Fragment key={`right-${i}`}>
                  <span className="marquee-item">{announcementText}</span>
                  <span className="marquee-star">{starIcon}</span>
                </React.Fragment>
                ))}
              </div>
            </div>
    </section>
  );
};

export default Homepage;
