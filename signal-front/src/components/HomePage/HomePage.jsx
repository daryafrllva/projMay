import React, { useState, useRef, useEffect } from 'react';
import './homepage.less';
import star from '../../assets/png/star.png';
import bar from '../../assets/png/bar.png';
import online from '../../assets/png/online.png';
import loss from '../../assets/png/loss.png';
import success from '../../assets/png/success.png';
import bitcoin from '../../assets/png/bitcoin.png';
import epthcoin from '../../assets/png/epthcoin.png';
import click from '../../assets/png/click.png';
import hand1 from '../../assets/png/hand1.png';
import hand2 from '../../assets/png/hand2.png';
import hand3 from '../../assets/png/hand3.png';
import safe from '../../assets/png/safe.png';
import podium from '../../assets/png/podium.png';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const announcementText = "AI BOSST USA";
  const starIcon = <img src={star} alt="star" className="marquee-star" />;
  const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % 3);
      }, 6000);

      return () => clearInterval(interval);
    }, []);


  const slides = [
    {
      image: hand1,
    },
    {
      image: hand2,
    },
    {
      image: hand3,
    }
  ];

  const handleScroll = (event) => {
    setCurrentSlide((prev) => {
      if (event.deltaY > 0) {

        return prev < slides.length - 1 ? prev + 1 : prev;
      } else {
        return prev > 0 ? prev - 1 : prev;
      }
    });
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const touchEndX = event.touches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (touchStartX.current - touchEndX < -50) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <>
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
            <span className="homepage__button-icon">
              <img src={click} alt="coursor" className="homepage__button-icon1" />
            </span>
          </button>

          <div className="homepage__stats">
            <div className="homepage__stat-item">
              <div className="homepage__stat-icon">
                <img src={online} alt="online" />
              </div>
              <div className="homepage__stat-number">1293</div>
              <div className="homepage__stat-label">Онлайн посетители</div>
            </div>
            <div className="homepage__stat-item">
              <div className="homepage__stat-icon">
                <img src={success} alt="success" />
              </div>
              <div className="homepage__stat-number">0</div>
              <div className="homepage__stat-label">Успешные сигналы</div>
            </div>
            <div className="homepage__stat-item">
              <div className="homepage__stat-icon">
                <img src={loss} alt="loss" />
              </div>
              <div className="homepage__stat-number">0</div>
              <div className="homepage__stat-label">Неудачные сигналы</div>
            </div>
          </div>
        </div>

        <div className="homepage__image">
          <div className="homepage__graph">
            <img src={bar} alt="graph" />
          </div>

          <div className="homepage__coin homepage__coin--left">
            <img src={epthcoin} alt="ephir" />
          </div>

          <div className="homepage__coin homepage__coin--right">
            <img src={bitcoin} alt="bitcoin" />
          </div>

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
      <section
          className="slider-section"
          onWheel={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          ref={sliderRef}>

  <h2 className='slider__title'>Что мы предлагаем?</h2>

  <div className="slider">
    <div
      className="slider__track"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: 'transform 0.5s ease',
      }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="slider__item">
          <img src={slide.image} alt={`Slide ${index + 1}`} className="slider__image" draggable="false" />
        </div>
      ))}
    </div>
  </div>
  <div className="slider__dots">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`slider__dot ${index === currentSlide ? 'active' : ''}`}
        onClick={() => setCurrentSlide(index)}
      ></span>
    ))}
  </div>
  <div className="slider__podium">
    <img src={podium} alt="podium" />
  </div>
</section>
<section className="how-it-works">
  <h2 className="how-it-works__title">Как это работает?</h2>

  <div className="how-it-works__laptop">
  </div>

  <div className="how-it-works__progress-bar">
    <div className="how-it-works__progress-fill" />
  </div>

  <div className="how-it-works__steps">
    {['Регистрация', 'Пополнение счёта', 'Начинайте торговлю'].map((title, index) => (
      <div
        key={index}
        className={`how-it-works__step ${index === activeStep ? 'active' : ''}`}
      >
        <h3 className="how-it-works__step-title">{title}</h3>
        <p className="how-it-works__step-description">
          {index === 0 && 'Зарегистрируйтесь на нашей платформе и начните использовать все её возможности.'}
          {index === 1 && 'Используйте надёжные методы для быстрого пополнения счёта на брокерской платформе.'}
          {index === 2 && 'Используйте мощные инструменты нашей платформы для успешной торговли.'}
        </p>
      </div>
    ))}
  </div>
</section>
    </>
  );
};

export default Homepage;
