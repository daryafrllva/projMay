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
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Homepage = ({ isAuthenticated }) => {
  const { t } = useTranslation();
  const announcementText = "AI BOSST USA";
  const starIcon = <img src={star} alt="star" className="marquee-star" />;

  const onlineUsers = 129;
  const successfulSignals = 468;
  const unsuccessfulSignals = 72;
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://your-backend-url.com/stats', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          setOnlineUsers(data.onlineUsers);
          setSuccessfulSignals(data.successfulSignals);
          setUnsuccessfulSignals(data.unsuccessfulSignals);
        } else {
          console.error('Ошибка при получении статистики.');
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchStats();
  }, []);
  const [activeFaq, setActiveFaq] = useState(null);
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
              <span className="_selected_17x2r_60">AI BOOST USA </span>
              {t('home.title').replace('AI BOOST USA', '')}
            </h1>
            <h2 className='_description_17x2r_71'>
              {t('home.description')}
            </h2>
            <div className="_bitcoin_17x2r_120">
              <img src={bitcoin} alt="bitcoin" />
            </div>
            <div className="_statsWrapper_17x2r_251">
              <div className="_statsCardsWrapper_17x2r_135">
                
                <div className="_card_suqtr_1">
                  <div className='_stats_suqtr_17'>
                  <p>{onlineUsers}</p>
                  <img src={online} alt="monitor"/>
                </div>
                  <p className='_text_suqtr_9'>{t('home.stats.onlineUsers')}</p>
                </div>
                <div className="_card_suqtr_1">
                <div className='_stats_suqtr_17'>
                  <p>{successfulSignals}</p>
                  <img src={success} alt="green shield"/>
                </div>
                <p className='_text_suqtr_9'>{t('home.stats.successfulSignals')}</p>
                </div>
                <div className="_card_suqtr_1">
                <div className='_stats_suqtr_17'>
                  <p>{unsuccessfulSignals}</p>
                  <img src={loss} alt="red shield"/>
                </div>
                <p className='_text_suqtr_9'>{t('home.stats.unsuccessfulSignals')}</p>
                </div>
              </div>
              {isAuthenticated ? (
                  <a href="/register" className='_button_13fxj_1 _button_17x2r_81 _action_13fxj_13'>
                    <span>{t('home.cta.getSignal')}</span>
                    <img src={click} alt="coursor" />
                  </a>
              ) : (
                  <a href="/register" className='_button_13fxj_1 _button_17x2r_81 _action_13fxj_13'>
                    <span>{t('home.cta.register')}</span>
                    <img src={click} alt="coursor" />
                  </a>
              )}
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
            <span className="_text_v1xye_14">{announcementText}</span>
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
          <h2 className='_title_1apmi_7'>{t('home.offer.title')}</h2>
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
                  <h3 className='_title_xjhya_24'>{t('home.offer.features.0.title')}</h3>
                  <p className='_text_xjhya_32'>{t('home.offer.features.0.description')}</p>
                </div>
              </div>
            </div>
            <div className='_card_1mffy_87'>
              <div className='_card_xjhya_1'>
                <div className='_top_xjhya_8'>
                  <img src={hand2} alt="hand2" className='_image_xjhya_15'/>
                </div>
                <div className='_bottom_xjhya_19'>
                  <h3 className='_title_xjhya_24'>{t('home.offer.features.1.title')}</h3>
                  <p className='_text_xjhya_32'>{t('home.offer.features.1.description')}</p>
                </div>
              </div>
            </div>
            <div className='_card_1mffy_87'>
              <div className='_card_xjhya_1'>
                <div className='_top_xjhya_8'>
                  <img src={hand3} alt="hand3" className='_image_xjhya_15'/>
                </div>
                <div className='_bottom_xjhya_19'>
                  <h3 className='_title_xjhya_24'>{t('home.offer.features.2.title')}</h3>
                  <p className='_text_xjhya_32'>{t('home.offer.features.2.description')}</p>
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
    <h2 className='_title_1apmi_7'>{t('home.howItWorks.title')}</h2>
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
        <p className='_title_t1n74_40'>{t('home.howItWorks.steps.0.title')}</p>
        <p className='_text_t1n74_48'>{t('home.howItWorks.steps.0.description')}</p>
      </div>
    </div>
    <div className='_wrapper_t1n74_1'>
      <p className='_position_t1n74_23'>2</p>
      <div>
        <p className='_title_t1n74_40'>{t('home.howItWorks.steps.1.title')}</p>
        <p className='_text_t1n74_48'>{t('home.howItWorks.steps.1.description')}</p>
      </div>
    </div>
    <div className='_wrapper_t1n74_1 _active_t1n74_16'>
      <p className='_position_t1n74_23'>3</p>
      <div>
        <p className='_title_t1n74_40'>{t('home.howItWorks.steps.2.title')}</p>
        <p className='_text_t1n74_48'>{t('home.howItWorks.steps.2.description')}</p>
      </div>
    </div>
  </div>
</section>

<section className='_wrapper_hq2vv_1 _wrapper_1d2tw_1'>
        <div className='_container_hq2vv_8 _container_1d2tw_2'>
          <div className='_wrapper_1apmi_1'>
            <h2 className='_title_1apmi_7'>{t('home.tools.title')}</h2>
          </div>
          <div>
            <div className='_cardContainer_ulq9z_1'>
              <div className='_card_ulq9z_1'>
                <div className='_top_ulq9z_28'>
                  <img src={one} alt="1"  className='_positionImg_ulq9z_35'/>
                  <img src={chart} alt="chart" className='_img_ulq9z_40'/>
                </div>
                <div>
                  <h3 className='_title_ulq9z_52'>{t('home.tools.items.0.title')}</h3>
                  <p className='_text_ulq9z_57'>{t('home.tools.items.0.description')}</p>
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
                  <h3 className='_title_ulq9z_52'>{t('home.tools.items.1.title')}</h3>
                  <p className='_text_ulq9z_57'>{t('home.tools.items.1.description')}</p>
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
                  <h3 className='_title_ulq9z_52'>{t('home.tools.items.2.title')}</h3>
                  <p className='_text_ulq9z_57'> {t('home.tools.items.2.description')}</p>
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
      {/* FAQ 1 */}
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div
            className='_title_1uqbn_9'
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
          >
              {t('home.faq.questions.0.question')}
            <img src={plus} alt="plus" className={`_plusImg_1uqbn_22${activeFaq === 1 ? ' _plusOpen_1uqbn_30' : ''}`} />
          </div>
          <div className={`_expanderContainer_1uqbn_47${activeFaq === 1 ? ' _open_1uqbn_54' : ''}`}>
            <div className={`_expander_1uqbn_47${activeFaq === 1 ? ' _open_1uqbn_54' : ''}`}>
              <div className='_description_1uqbn_34'>
                  {t('home.faq.questions.0.answer')}              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ 2 */}
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
            <div
                className='_title_1uqbn_9'
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
            >
                {t('home.faq.questions.1.question')}
                <img src={plus} alt="plus" className={`_plusImg_1uqbn_22${activeFaq === 2 ? ' _plusOpen_1uqbn_30' : ''}`} />
            </div>
          <div className={`_expanderContainer_1uqbn_47${activeFaq === 2 ? ' _open_1uqbn_54' : ''}`}>
            <div className={`_expander_1uqbn_47${activeFaq === 2 ? ' _open_1uqbn_54' : ''}`}>
              <div className='_description_1uqbn_34'>
                  {t('home.faq.questions.1.answer')}              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ 3 */}
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div
            className='_title_1uqbn_9'
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
          >
              {t('home.faq.questions.2.question')}            <img src={plus} alt="plus" className={`_plusImg_1uqbn_22${activeFaq === 3 ? ' _plusOpen_1uqbn_30' : ''}`} />
          </div>
          <div className={`_expanderContainer_1uqbn_47${activeFaq === 3 ? ' _open_1uqbn_54' : ''}`}>
            <div className={`_expander_1uqbn_47${activeFaq === 3 ? ' _open_1uqbn_54' : ''}`}>
              <div className='_description_1uqbn_34'>
                  {t('home.faq.questions.2.answer')}               </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ 4 */}
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div
            className='_title_1uqbn_9'
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
          >
              {t('home.faq.questions.3.question')}            <img src={plus} alt="plus" className={`_plusImg_1uqbn_22${activeFaq === 4 ? ' _plusOpen_1uqbn_30' : ''}`} />
          </div>
          <div className={`_expanderContainer_1uqbn_47${activeFaq === 4 ? ' _open_1uqbn_54' : ''}`}>
            <div className={`_expander_1uqbn_47${activeFaq === 4 ? ' _open_1uqbn_54' : ''}`}>
              <div className='_description_1uqbn_34'>
                  {t('home.faq.questions.3.answer')}              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ 5 */}
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div
            className='_title_1uqbn_9'
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)}
          >
              {t('home.faq.questions.4.question')}
            <img src={plus} alt="plus" className={`_plusImg_1uqbn_22${activeFaq === 5 ? ' _plusOpen_1uqbn_30' : ''}`} />
          </div>
          <div className={`_expanderContainer_1uqbn_47${activeFaq === 5 ? ' _open_1uqbn_54' : ''}`}>
            <div className={`_expander_1uqbn_47${activeFaq === 5 ? ' _open_1uqbn_54' : ''}`}>
              <div className='_description_1uqbn_34'>
                  {t('home.faq.questions.4.answer')}              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ 6 */}
      <div className='_wrapper_1uqbn_1'>
        <div className='_container_1uqbn_5'>
          <div
            className='_title_1uqbn_9'
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveFaq(activeFaq === 6 ? null : 6)}
          >
              {t('home.faq.questions.5.question')}
            <img src={plus} alt="plus" className={`_plusImg_1uqbn_22${activeFaq === 6 ? ' _plusOpen_1uqbn_30' : ''}`} />
          </div>
          <div className={`_expanderContainer_1uqbn_47${activeFaq === 6 ? ' _open_1uqbn_54' : ''}`}>
            <div className={`_expander_1uqbn_47${activeFaq === 6 ? ' _open_1uqbn_54' : ''}`}>
              <div className='_description_1uqbn_34'>
                  {t('home.faq.questions.5.answer')}                <a href=""></a>
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
      <h2 className='_title_1apmi_7'>{t('home.trends.title')}</h2>
      <p className='_description_1apmi_22'>{t('home.trends.description')}</p>
    </div>
    <div className='_buttons_yvbyh_38'>
      <a href="/login" className='_button_13fxj_1 _action_13fxj_13'>
        <span>{t('home.trends.login')}</span>
        <img src={click} alt="click" />
      </a>
    </div>
  </div>
</section>
    </>
  );
};

Homepage.propTypes = {
  isAuthenticated: PropTypes.bool
};

Homepage.defaultProps = {
  isAuthenticated: false
};
export default Homepage;
