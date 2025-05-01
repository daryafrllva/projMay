import React, { useState, useRef, useEffect } from 'react';
import './homepage.css';
import star from '../../assets/svg/star.svg';
import bar from '../../assets/png/bar.png';
import online from '../../assets/png/online.png';
import loss from '../../assets/png/loss.png';
import success from '../../assets/png/success.png';
import bitcoin from '../../assets/png/bitcoin.png';
import epthcoin from '../../assets/png/epthcoin.png';
import click from '../../assets/svg/click.svg';
import hand1 from '../../assets/svg/hand1.svg';
import hand2 from '../../assets/svg/hand2.svg';
import hand3 from '../../assets/svg/hand3.svg';
import safe from '../../assets/png/safe.png';
import podium from '../../assets/png/podium.png';
import herovideo from '../../assets/video/hero-video.mp4';

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
    <div className="_mainWrapper_17x2r_1">
      <section className="_wrapper_hq2vv_1">
        <div className="_container_hq2vv_8 _container_17x2r_16 container">
        <video className="_video_17x2r_23" src={herovideo}></video>
        <div className="_overlay_17x2r_36"></div>
        <div className="_heroWrapper_17x2r_46">
          <div className="_text_17x2r_124">
            <h1 className='_title_17x2r_51'>
              <span class="_selected_17x2r_60">AI BOSST USA</span>
              PLATFORM
            </h1>
            <h2 className='_description_17x2r_71'>
            Современные инструменты откроют путь к успеху. Мы созданы для того, чтобы сделать трейдинг доступным, понятным и выгодным для всех. Получайте бесплатные сигналы на бинарные опционы с помощью нашей платформы.
            </h2>
            <div className="_bitcoin_17x2r_120">
              <img src={bitcoin} alt="bitcoin" />
            </div>
            <div className="_statsWrapper_17x2r_251">
              <div className="_statsCardsWrapper_17x2r_135">
                
                <div className="_card_suqtr_1">
                  <div className='_stats_suqtr_17'>
                  <p>9963</p>
                  <img src={online} alt="monitor"/>
                </div>
                <p className='_text_suqtr_9'>Онлайн посетители</p>
                </div>
                <div className="_card_suqtr_1">
                <div className='_stats_suqtr_17'>
                  <p>20195</p>
                  <img src={success} alt="green shield"/>
                </div>
                <p className='_text_suqtr_9'>Успешные сигналы</p>
                </div>
                <div className="_card_suqtr_1">
                <div className='_stats_suqtr_17'>
                  <p>8018</p>
                  <img src={loss} alt="red shield"/>
                </div>
                <p className='_text_suqtr_9'>Неудачные сигналы</p>
                </div>
              </div>
              <a className='_button_13fxj_1 _button_17x2r_81 _action_13fxj_13'>
                <span>Регистрация</span>
                <img src={click} alt="coursor" />
              </a>
        </div>
      </div>
        </div>
        <div className="_images_17x2r_47">
          <div className="_bars_17x2r_85">
            <img className="_barsSvg_17x2r_178" src={bar} alt="bars" />
            <div className="_bitcoin_17x2r_120">
              <img src={bitcoin} alt="bitcoin" />
            </div>
            <div className="_eth_17x2r_113">
              <img src={epthcoin} alt="eth" />
            </div>
          </div>
        </div>
        </div>
        

        <div className='_marqueeContainer_17x2r_143'> 
  <div className="rfm-marquee-container _marqueeContainer_v1xye_1">
      <div className="marquee-content right-direction">
        {[...Array(50)].map((_, i) => (
          <React.Fragment key={`left-${i}`}>
            <span className="marquee-item">{announcementText}</span>
            <span className="marquee-star">{starIcon}</span>
          </React.Fragment>
        ))}
      </div>
    </div>

    <div className="rfm-marquee-container _marqueeContainer_v1xye_1">
      <div className="marquee-content left-direction">
        {[...Array(50)].map((_, i) => (
          <React.Fragment key={`right-${i}`}>
            <span className="marquee-item">{announcementText}</span>
            <span className="marquee-star">{starIcon}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
  
        </section>
</div>
  <section className='_wrapper_hq2vv_1'> 
    <div className='_container_hq2vv_8 _wrapper_1mffy_1'>
      <div className='_container_hq2vv_8 _wrapper_1mffy_1'>
        <div className='_wrapper_1apmi_1'>
          <h2 className='_title_1apmi_7'>Что мы предлагаем?</h2>
        </div>
      </div>
      <img src={safe} alt="safe" className='_safeImg_1mffy_34 _left_1mffy_54'/>
      <img src={safe} alt="safe" className='_safeImg_1mffy_34 _right_1mffy_61'/>
      <div className='_desktopSlider_1mffy_30'>
        <div className='_desktopSliderWrapper_1mffy_75'>
          <div className='_desktopSliderContainer_1mffy_80'>
            <div className='_card_1mffy_87'>
              <div className='_card_xjhya_1'>
                <div className='_top_xjhya_8'>
                  <img src={hand1} alt="hand1" className='_image_xjhya_15'/>
                </div>
                <div className='_bottom_xjhya_19'>
                  <h3 className='_title_xjhya_24'>Точные торговые сигналы</h3>
                  <p className='_text_xjhya_32'>Получайте актуальные сигналы для обоснованных решений в режиме реального времени.</p>
                </div>
              </div>
            </div>
            <div className='_card_1mffy_87'>
              <div className='_card_xjhya_1'>
                <div className='_top_xjhya_8'>
                  <img src={hand2} alt="hand2" className='_image_xjhya_15'/>
                </div>
                <div className='_bottom_xjhya_19'>
                  <h3 className='_title_xjhya_24'>Быстрый старт</h3>
                  <p className='_text_xjhya_32'>Мгновенно начните торговлю — регистрация занимает всего несколько минут, и вы готовы к рынку.</p>
                </div>
              </div>
            </div>
            <div className='_card_1mffy_87'>
              <div className='_card_xjhya_1'>
                <div className='_top_xjhya_8'>
                  <img src={hand3} alt="hand3" className='_image_xjhya_15'/>
                </div>
                <div className='_bottom_xjhya_19'>
                  <h3 className='_title_xjhya_24'>Интуитивный интерфейс</h3>
                  <p className='_text_xjhya_32'>Удобный интерфейс для легкого доступа и быстрых операций с любого устройства.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={podium} alt="podium" className='_podiumImage_1mffy_26' />
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
