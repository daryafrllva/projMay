import React, { useState, useEffect } from 'react';
import WeekendSignal from './weekendSignal';
import cross from '../../assets/svg/cross.svg';
import plus from '../../assets/svg/plus.svg';
import click from '../../assets/svg/click.svg';
import loadingbot from '../../assets/video/loading-bot.mp4';
import info from '../../assets/svg/info.svg';
import AUD from '../../assets/svg/AUD.svg';
import CAD from '../../assets/svg/CAD.svg';
import CHF from '../../assets/svg/CHF.svg';
import EUR from '../../assets/svg/EUR.svg';
import GBP from '../../assets/svg/GBP.svg';
import JPY from '../../assets/svg/JPY.svg';
import USD from '../../assets/svg/USD.svg';
import gpt from '../../assets/svg/gpt.svg';
import AIB from '../../assets/svg/AIBOOST.svg';
import AIB2 from '../../assets/svg/AIB2.svg';
import IND from '../../assets/svg/IND.svg';
import PLUSA from '../../assets/svg/PLUSA.svg';
import './signal.css';

const currencyIcons = { AUD, CAD, CHF, EUR, GBP, JPY, USD }; 
const currencyPairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD', 'USDCHF'];

const Signal = () => {
  const [isWeekend, setIsWeekend] = useState(false);
  const [isBalanceChecked, setIsBalanceChecked] = useState(false);
  const [hasSufficientBalance, setHasSufficientBalance] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedAI, setSelectedAI] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [selectedPair, setSelectedPair] = useState(null);
  const [startPrice, setStartPrice] = useState(null);

  useEffect(() => {
    const today = new Date().getDay();
    setIsWeekend(today === 0 || today === 6);
    setIsBalanceChecked(true);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleAISelection = (ai) => {
    setSelectedAI(ai);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleNewSignal = () => {
    const pair = currencyPairs[Math.floor(Math.random() * currencyPairs.length)];
    setSelectedPair(pair);
    setStartPrice((Math.random() * (1.5 - 1) + 1).toFixed(4));
    setShowChart(true);
  };

  if (isWeekend) {
    return <WeekendSignal />;
  }

  if (!isBalanceChecked) {
    return (
      <section className='_wrapper_hq2vv_1'>
        <div className='_container_hq2vv_8 _wrapper_1wuj9_1'>
          <div className='_cardWrapper_1wuj9_6'>
            <div className='_card_1wuj9_6'>
              <h2 className='_cardTitle_1wuj9_49'>Упс!</h2>
              <p className='_mainText_1wuj9_59'>
                На счете недостаточно средств для сигналов. 💳 Минимальная торговая сумма — $10. Пополните баланс 💸 — и вперед к успеху! 🚀
              </p>
              <p className='_currentBalance_1wuj9_68'>
                Ваш текущий баланс:
                <span>тут баланс</span>
              </p>
              <div className='_info_1wuj9_87' onClick={toggleModal}>
                ❔ Отвечаем на ваши вопросы
              </div>
            </div>
            <button type='button' className='_button_13fxj_1 _mainButton_1wuj9_26 _action_13fxj_13' disabled>
              <span>Проверяем баланс...</span>
              <img src={click} alt="click" />
            </button>
          </div>
        </div>

        {/* Модальное окно */}
        {isModalOpen && (
          <div className='_modal_b50nl_1'>
            <div className='_modalContent_b50nl_28'>
              <div className='_closeBtn_b50nl_42'>
                <img src={cross} alt="cross" onClick={toggleModal} />
              </div>
              <div className='_infoModalContent_1wuj9_98'>
                <div className='_wrapper_1uqbn_1'>
                  <div className='_container_1uqbn_5'>
                    <div
                      className='_title_1uqbn_9'
                      onClick={() => toggleSection('info1')}
                    >
                      Откуда у вас эта информация?
                      <img
                        src={plus}
                        alt="plus"
                        className={`_plusImg_1uqbn_22 ${
                          expandedSections['info1'] ? '_plusOpen_1uqbn_30' : ''
                        }`}
                      />
                    </div>
                    <div
                      className={`_expanderContainer_1uqbn_47 ${
                        expandedSections['info1'] ? '_open_1uqbn_54' : ''
                      }`}
                    >
                      <div
                        className={`_expander_1uqbn_47 ${
                          expandedSections['info1'] ? '_open_1uqbn_54' : ''
                        }`}
                      >
                        <div className='_infoModalAccordionCard_1wuj9_118'>
                          <p className='_infoModalText_1wuj9_122'>
                            Мы сотрудничаем с брокером Pocket Option в рамках
                            реферальной программы. Согласно нашим
                            договоренностям, брокер выплачивает нам процент от
                            вашего торгового оборота раз в год. Хотим
                            подчеркнуть, что с вас не взимаются никакие
                            дополнительные платежи или комиссии — все условия
                            касаются исключительно нашего соглашения с брокером.
                          </p>
                          <p className='_text_tjs0j_1 _left_tjs0j_12 _primary_tjs0j_31 _infoModalText_1wuj9_122'>
                            Если ваш баланс равен нулю, мы не получаем никакой
                            прибыли от вашей активности. Именно по этой причине
                            мы не можем предоставить доступ к нашему ресурсу, так
                            как наш доход напрямую зависит от вашего оборота.
                          </p>
                          <p className='_infoModalText_1wuj9_122'>
                            Дополнительно хотим отметить, что право на доступ к
                            информации о вашем балансе предоставлено нам самим
                            брокером. Это необходимо для обеспечения
                            прозрачности наших отношений и выполнения условий
                            реферальной программы.
                          </p>
                          <p className='_text_tjs0j_1 _left_tjs0j_12 _primary_tjs0j_31 _infoModalText_1wuj9_122'>
                            Если у вас возникнут дополнительные вопросы, мы
                            всегда готовы ответить и объяснить все детали!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='_wrapper_1uqbn_1'>
                  <div className='_container_1uqbn_5'>
                    <div
                      className='_title_1uqbn_9'
                      onClick={() => toggleSection('info2')}
                    >
                      Сайт не видит баланс?
                      <img
                        src={plus}
                        alt="plus"
                        className={`_plusImg_1uqbn_22 ${
                          expandedSections['info2'] ? '_plusOpen_1uqbn_30' : ''
                        }`}
                      />
                    </div>
                    <div
                      className={`_expanderContainer_1uqbn_47 ${
                        expandedSections['info2'] ? '_open_1uqbn_54' : ''
                      }`}
                    >
                      <div
                        className={`_expander_1uqbn_47 ${
                          expandedSections['info2'] ? '_open_1uqbn_54' : ''
                        }`}
                      >
                        <div className='_infoModalAccordionCard_1wuj9_118'>
                          <p className='_mainText_1wuj9_59 _infoModalAccordionCardText_1wuj9_136'>
                            <b>Обратите внимание:</b> если вы только что
                            пополнили баланс, но сайт все еще сообщает о
                            недостатке средств, пожалуйста, подождите несколько
                            минут.
                          </p>
                          <p className='_text_tjs0j_1 _left_tjs0j_12 _attention_tjs0j_36 _infoModalText_1wuj9_122'>
                            Нам нужно время для получения актуальной информации о
                            вашем балансе от брокера. Также обратите внимание,
                            что бонусные средства не учитываются как часть
                            доступного баланса.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }


  if (showChart && selectedPair) {
    return (
      <section className='_wrapper_hq2vv_1'>
        <div className='_container_hq2vv_8 _wrapper_18eu1_1'>
          <div className='_tvWrapper_1yk8r_225'>
          <div className='tradingview-widget-container' style={{ height: '600px', width: '100%' }}>
            <iframe
              style={{ height: '100%', width: '100%' }}
              src={`https://www.tradingview.com/widgetembed/?symbol=${selectedPair}&interval=1&theme=dark`}
              frameBorder="0"
            ></iframe>
          </div>
            <div className='tradingview-widget-copyright'>
              <a href="https://www.tradingview.com/?utm_source=36signal.com&utm_medium=widget_new&utm_campaign=advanced-chart">
              <span className='blue-text'>Track all markets on TradingView</span>
              </a>
            </div>
          </div>
          <p className='_otcWarning_1yk8r_233'>
            Если валютная пара на брокере отображается как OTC, нажмите «Сбросить сигнал», чтобы получить новый.
            </p>
            <div className='_signalVideo_1yk8r_1 _hidden_1yk8r_8'>
              <video className='_video_1yk8r_12'></video>
            </div>
            <div className='_desktopPendingWrapper_1yk8r_400'>
              <div className='_openPricePendingWrapper_1yk8r_44'>
                <p className='_openPricePendingText_1yk8r_51'>
                  <p className='_openPricePending_1yk8r_44'>
                    <img src="" alt="" />
                    <span className='_openPrice_1yk8r_44'>Цена открытия:</span>
                    <span className='_openPriceValue_1yk8r_331'>
                      <img src="" alt="" />
                      <span className='_openPricePendingValue_1yk8r_59'>{startPrice}</span>
                    </span>
                  </p>
                </p>
              
            </div>
            <div className='_processContainer_1yk8r_29 _signalWaiting_1yk8r_262'>
              <div className='_topResultContainer_1yk8r_242 _signalWaiting_1yk8r_262'>
                <div className='_signalWrapper_1yk8r_262 _signalWaiting_1yk8r_262'>
                  <p className='_title_1yk8r_36'>
                  </p>
                  <div className='_imagesContainer_1lcee_1'>
                  <span className="_logo_1lcee_7">
                    <img src={currencyIcons[selectedPair.slice(0, 3)]} alt={selectedPair.slice(0, 3)} />
                  </span>
                  <span className="_logo_1lcee_7">
                    <img src={currencyIcons[selectedPair.slice(3)]} alt={selectedPair.slice(3)} />
                  </span>
                </div>
                  <p className='_signalDataInfo_1yk8r_291'>
                    <span>{selectedPair}</span>
                    <span className='_signalBuyText_1yk8r_312'></span>
                    <span>time</span>
                  </p>
                </div>
              </div>
              <div className='_signalAnalytics_1yk8r_163'>
                <img src="" alt="" />
                </div>
            </div>
            </div>
            <div className='_progressBarWrapper_1yk8r_395'>
              <p className='_endTimeText_qnld5_32'>Результат через:</p>
              <div className='_wrapper_qnld5_1'>
                <div className='_container_qnld5_10'>
                  <div className='_bar_qnld5_17'></div>
                </div>
              </div>
            </div>
            <p className='_timeText_qnld5_22'></p>
        </div>
        <div className='_getContainer_1yk8r_16'>
          <button type='button' className='_button_13fxj_1 _common_13fxj_28'>
            <span>Сбросить сигнал</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className='_wrapper_hq2vv_1'>
      <div className='_container_hq2vv_8 _wrapper_18eu1_1'>
        <div className='_signalVideo_1yk8r_1'>
          <video src={loadingbot} autoPlay muted loop className='_video_1yk8r_12'></video>
        </div>
        <div className='_wrapper_1t4y8_1'>
          <h1 className='_mainTitle_1t4y8_6'>Настройки сигнала</h1>
          <div className='_listWrapper_1t4y8_12'>
            <h2>AI:</h2>
            <div className='_list_1t4y8_12'>
              {[{ name: 'ChatGPT 4o', icon: gpt }, { name: 'AI BOOST USA v1', icon: AIB }, { name: 'AI BOOST USA v2', icon: AIB2 }, { name: 'Indicators + ChatGPT 3.5', icon: IND }, { name: 'AI BOOST USA Trade PLUS', icon: PLUSA }].map((ai, index) => (
                <button
                  key={index}
                  className={selectedAI === ai.name ? '_selected_1t4y8_46' : ''}
                  onClick={() => handleAISelection(ai.name)}
                >
                  <img src={ai.icon} alt={ai.name} style={{ width: '15px' }} />
                  {ai.name}
                </button>
              ))}
            </div>
          </div>
          <div className='_listWrapper_1t4y8_12'>
            <h2>TIME:</h2>
            <div className='_list_1t4y8_12'>
              {['3 MIN', '5 MIN', '7 MIN', '10 MIN'].map((time, index) => (
                <button
                  key={index}
                  className={selectedTime === time ? '_selected_1t4y8_46' : ''}
                  onClick={() => handleTimeSelection(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='_desktopPendingWrapper_1yk8r_400'>
          <div className='_getContainer_1yk8r_16'>
            <button type='button' className='_button_13fxj_1 _action_13fxj_13' onClick={handleNewSignal}>
              <span>Получить новый сигнал</span>
              <img src={click} alt="click" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signal;
