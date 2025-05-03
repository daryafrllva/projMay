import React, { useState, useRef, useEffect } from 'react';
import './homepage.css';
import star from '../../assets/svg/star.svg';
import bar from '../../assets/png/bar.png';
import online from '../../assets/png/online.png';
import loss from '../../assets/png/loss.png';
import success from '../../assets/png/success.png';
import bitcoin from '../../assets/png/bitcoin.png';
import bitc from '../../assets/png/bitc.png';
import chart from '../../assets/png/chart.png';
import ctabg from '../../assets/png/cta-bg.png';
import gold from '../../assets/png/gold.png';
import threelmg from '../../assets/png/threelmg.png';
import twolmg from '../../assets/png/twolmg.png';
import epthcoin from '../../assets/png/epthcoin.png';
import click from '../../assets/svg/click.svg';
import hand1 from '../../assets/svg/hand1.svg';
import hand2 from '../../assets/svg/hand2.svg';
import hand3 from '../../assets/svg/hand3.svg';
import one from '../../assets/svg/1.svg';
import two from '../../assets/svg/2.svg';
import three from '../../assets/svg/3.svg';
import plus from '../../assets/svg/plus.svg';
import safe from '../../assets/png/safe.png';
import podium from '../../assets/png/podium.png';
import herovideo from '../../assets/video/hero-video.mp4';
import mock from '../../assets/video/mock.mp4';

const Homepage = () => {
  const announcementText = "AI BOSST USA";
  const starIcon = <img src={star} alt="star" className="marquee-star" />;
  return (
    <>
    <div className="_mainWrapper_17x2r_1">
      <section className="_wrapper_hq2vv_1">
        <div className="_container_hq2vv_8 _container_17x2r_16 container">
        <video className="_video_17x2r_23" src={herovideo} autoPlay muted loop></video>
        <div className="_overlay_17x2r_36"></div>
        <div className="_heroWrapper_17x2r_46">
          <div className="_text_17x2r_124">
            <h1 className='_title_17x2r_51'>
              <span className="_selected_17x2r_60">AI BOSST USA </span>
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
        </section>
        <div className='_marqueeContainer_17x2r_143'> 
  <div className="rfm-marquee-container _marqueeContainer_v1xye_1">
      <div className="marquee-content right-direction rfm-marquee">
        {[...Array(50)].map((_, i) => (
          <React.Fragment key={`left-${i}`}>
            <div className='rfm-child'>
            <span className="marquee-item _text_v1xye_14">{announcementText}</span>
            <span className="marquee-star">{starIcon}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>

    <div className="rfm-marquee-container _marqueeContainer_v1xye_1">
      <div className="marquee-content left-direction rfm-marquee">
        {[...Array(50)].map((_, i) => (
          <React.Fragment key={`right-${i}`}>
            <div className='rfm-child'>
            <span className="_text_v1xye_14">{announcementText}</span>
            <span className="marquee-star">{starIcon}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
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

<section className="_wrapper_hq2vv_1 _wrapper_1jpyc_1">
  <div className='_wrapper_1apmi_1'>
    <h2 className='_title_1apmi_7'>Как это работает?</h2>
  </div>
  <div className='_videoWrapper_1jpyc_19'>
    <video src={mock} className='_video_1jpyc_10' autoPlay muted loop></video>
  </div>
  <div className='_cards_1jpyc_87'>
    <div className='_progressBar_1jpyc_34'>
      <div className='_progressBarIndicate_1jpyc_49'></div>
      <div className='_progressBarDesktopIndicate_1jpyc_48'></div>
    </div>
    <div className='_wrapper_t1n74_1'>
      <p className='_position_t1n74_23'>1</p>
      <div>
        <p className='_title_t1n74_40'>Регистрация</p>
        <p className='_text_t1n74_48'>Зарегистрируйтесь на нашей платформе и начните использовать все её возможности.</p>
      </div>
    </div>
    <div className='_wrapper_t1n74_1'>
      <p className='_position_t1n74_23'>2</p>
      <div>
        <p className='_title_t1n74_40'>Пополнение счёта</p>
        <p className='_text_t1n74_48'>Используйте надёжные методы для быстрого пополнения счёта на брокерской платформе.</p>
      </div>
    </div>
    <div className='_wrapper_t1n74_1 _active_t1n74_16'>
      <p className='_position_t1n74_23'>3</p>
      <div>
        <p className='_title_t1n74_40'>Начинайте торговлю</p>
        <p className='_text_t1n74_48'>Используйте мощные инструменты нашей платформы для успешной торговли.</p>
      </div>
    </div>
  </div>
</section>

<section className='_wrapper_hq2vv_1 _wrapper_1d2tw_1'>
        <div className='_container_hq2vv_8 _container_1d2tw_2'>
          <div className='_wrapper_1apmi_1'>
            <h2 className='_title_1apmi_7'>Инструменты успеха</h2>
          </div>
          <div>
            <div className='_cardContainer_ulq9z_1'>
              <div className='_card_ulq9z_1'>
                <div className='_top_ulq9z_28'>
                  <img src={one} alt="1"  className='_positionImg_ulq9z_35'/>
                  <img src={chart} alt="chart" className='_img_ulq9z_40'/>
                </div>
                <div>
                  <h3 className='_title_ulq9z_52'>Аналитические графики</h3>
                  <p className='_text_ulq9z_57'>Данные создают тренды, а графики — их истории. Представьте инструмент, раскрывающий потенциал рынка через удобную и понятную визуализацию, позволяя вам действовать уверенно и быстро…</p>
                </div>
              </div>
            </div>
            <div className='_cardContainer_ulq9z_1 _selected_ulq9z_12'>
            <div className='_card_ulq9z_1'>
                <div className='_top_ulq9z_28'>
                  <img src={two} alt="2" className='_positionImg_ulq9z_35' />
                  <img src={twolmg} alt="chart" className='_img_ulq9z_40'/>
                </div>
                <div>
                  <h3 className='_title_ulq9z_52'>Торговые сигналы</h3>
                  <p className='_text_ulq9z_57'>Чёткие сигналы в вихре рыночных изменений. Представьте источник, который помогает принимать важные решения, опираясь на проверенные данные, а не на интуицию. Найдите идеальные моменты для действий.</p>
                </div>
              </div>
            </div>
            <div className='_cardContainer_ulq9z_1'>
              <div className='_card_ulq9z_1'>
                <div className='_top_ulq9z_28'>
                  <img src={three} alt="3" className='_positionImg_ulq9z_35'/>
                  <img src={threelmg} alt="chart" className='_img_ulq9z_40'/>
                </div>
                <div>
                  <h3 className='_title_ulq9z_52'>Современный подход</h3>
                  <p className='_text_ulq9z_57'>Искусственный интеллект меняет правила игры. Представьте систему, которая анализирует рынок в реальном времени, распознаёт скрытые закономерности и предоставляет точные торговые сигналы. Меньше догадок – больше обоснованных решений.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>

<section className='_wrapper_hq2vv_1'>
  <div className='_container_hq2vv_8 _wrapper_7q4q7_1'>
    <h2 className='_title_7q4q7_26'>FAQ</h2>
    <img src={bitc} alt="bitcoin" className='_bitcoin_7q4q7_53' />
    <img src={gold} alt="gold" className='_gold_7q4q7_54'/>
    <div className='_cards_7q4q7_9'>
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div className='_title_1uqbn_9'>
          Как начать торговлю на вашей платформе?
          <img src={plus} alt="plus" className='_plusImg_1uqbn_22'/>
          </div>
          <div className='_expanderContainer_1uqbn_47'>
            <div className='_expander_1uqbn_47'>
              <div className='_description_1uqbn_34'>Чтобы начать торговлю, зарегистрируйте аккаунт и пополните баланс у брокера Pocket Option. После этого вы готовы сделать свой первый шаг в трейдинге. </div>
            </div>
          </div>
        </div>
      </div>
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div className='_title_1uqbn_9'>
          Нужно ли платить за сигналы?
          <img src={plus} alt="plus" className='_plusImg_1uqbn_22'/>
          </div>
          <div className='_expanderContainer_1uqbn_47'>
            <div className='_expander_1uqbn_47'>
              <div className='_description_1uqbn_34'>Нет! Сигналы от AI BOOST USA абсолютно бесплатные, но чтобы получить доступ, нужно быть нашим рефералом на Pocket Option и пополнить счёт на $10. </div>
            </div>
          </div>
        </div>
      </div>
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div className='_title_1uqbn_9'>
          Нужен ли опыт для торговли?
          <img src={plus} alt="plus" className='_plusImg_1uqbn_22'/>
          </div>
          <div className='_expanderContainer_1uqbn_47'>
            <div className='_expander_1uqbn_47'>
              <div className='_description_1uqbn_34'>Наша платформа разработана как для новичков, так и для профессионалов, поэтому начать может каждый. </div>
            </div>
          </div>
        </div>
      </div>
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div className='_title_1uqbn_9'>
          Что такое торговые сигналы и как ими пользоваться?
          <img src={plus} alt="plus" className='_plusImg_1uqbn_22'/>
          </div>
          <div className='_expanderContainer_1uqbn_47'>
            <div className='_expander_1uqbn_47'>
              <div className='_description_1uqbn_34'>Торговые сигналы — это рекомендации, которые помогают принимать решения о покупке или продаже активов на основе анализа рынка. Используйте их для повышения точности сделок. </div>
            </div>
          </div>
        </div>
      </div>
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div className='_title_1uqbn_9'>
          Какие методы пополнения счёта доступны?
          <img src={plus} alt="plus" className='_plusImg_1uqbn_22'/>
          </div>
          <div className='_expanderContainer_1uqbn_47'>
            <div className='_expander_1uqbn_47'>
              <div className='_description_1uqbn_34'>Пополнение счёта осуществляется на стороне платформы Pocket Option. </div>
            </div>
          </div>
        </div>
      </div>
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div className='_title_1uqbn_9'>
          Есть ли поддержка 24/7?
          <img src={plus} alt="plus" className='_plusImg_1uqbn_22'/>
          </div>
          <div className='_expanderContainer_1uqbn_47'>
            <div className='_expander_1uqbn_47'>
              <div className='_description_1uqbn_34'>Да, если у вас возникнут вопросы, вы можете обратиться к нашей команде через Telegram. 
                <a href="">ссылка ебать</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='_wrapper_hq2vv_1'>
  <div className='_container_hq2vv_8 _wrapper_yvbyh_1'>
    <div className='_wrapper_1apmi_1 _titlesWrapper_yvbyh_33'>
      <h2 className='_title_1apmi_7'>Будьте в курсе всех трендов трейдинга!</h2>
      <p className='_description_1apmi_22'>Регистрируйтесь и получайте доступ к аналитике, эксклюзивным стратегиям.</p>
    </div>
    <div className='_buttons_yvbyh_38'>
      <a href="" className='_button_13fxj_1 _action_13fxj_13'>
        <span>Авторизация</span>
        <img src={click} alt="click" />
      </a>
    </div>
  </div>
</section>
    </>
  );
};

export default Homepage;
