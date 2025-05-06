import React, { useState, useEffect, useRef } from 'react';
import WeekendSignal from './weekendSignal';
import cross from '../../assets/svg/cross.svg';
import plus from '../../assets/svg/plus.svg';
import click from '../../assets/svg/click.svg';
import loadingbot from '../../assets/video/loading-bot.mp4';
import info from '../../assets/svg/info.svg';
import anal from '../../assets/svg/analitics.svg';
import chart1 from '../../assets/svg/chart-1.svg';
import chart2 from '../../assets/svg/chart2.svg';
import chart3 from '../../assets/svg/chart3.svg';
import chart4 from '../../assets/svg/chart4.svg';
import chart5 from '../../assets/svg/chart5.svg';
import chart6 from '../../assets/svg/chart6.svg';
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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const currencyIcons = { AUD, CAD, CHF, EUR, GBP, JPY, USD };
const currencyPairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD', 'USDCHF'];

const generateRandomPair = () => {
  const max = 99;
  const min = 60;

  const secondMin = min;
  const secondMax = max;
  const second = Math.floor(Math.random() * (secondMax - secondMin + 1)) + secondMin;

  const targetDifference = 10;
  const firstMin = Math.max(min, second - 15);
  const firstMax = Math.min(second - 5, 99);

  const first = Math.floor(Math.random() * (firstMax - firstMin + 1)) + firstMin;

  return { first, second };
};

const Signal = () => {
  const [isWeekend, setIsWeekend] = useState(false);
  const [isBalanceChecked, setIsBalanceChecked] = useState(false);
  const [balance, setBalance] = useState(null);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedAI, setSelectedAI] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [selectedPair, setSelectedPair] = useState(null);
  const [startPrice, setStartPrice] = useState(null);

  const [slidingAverages, setSlidingAverages] = useState(() => {
    const saved = localStorage.getItem('slidingAverages');
    return saved ? JSON.parse(saved) : generateRandomPair();
  });

  const [movementPotential, setMovementPotential] = useState(() => {
    const saved = localStorage.getItem('movementPotential');
    return saved ? JSON.parse(saved) : generateRandomPair();
  });

  const [trendStrength, setTrendStrength] = useState(() => {
    const saved = localStorage.getItem('trendStrength');
    return saved ? JSON.parse(saved) : generateRandomPair();
  });

  const [power, setPower] = useState(() => {
    const saved = localStorage.getItem('power');
    return saved ? JSON.parse(saved) : generateRandomPair();
  });

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('profile');
    return saved ? JSON.parse(saved) : generateRandomPair();
  });

  const [tolpa, setTolpa] = useState(() => {
    const saved = localStorage.getItem('tolpa');
    return saved ? JSON.parse(saved) : generateRandomPair();
  });

  // Таймер
  const [timerValue, setTimerValue] = useState(null); 
  const [timeLeft, setTimeLeft] = useState(null); 
  const timerRef = useRef(null);

  // Для результата и цены закрытия
  const [result, setResult] = useState(null);
  const [endPrice, setEndPrice] = useState(null);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('slidingAverages');
      localStorage.removeItem('movementPotential');
      localStorage.removeItem('trendStrength');
      localStorage.removeItem('power');
      localStorage.removeItem('profile');
      localStorage.removeItem('tolpa');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Проверка баланса через backend
  useEffect(() => {
    const checkBalance = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/check-client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsBalanceChecked(true);
          setBalance(data.balance);
          if (data.balance < 10) {
            toast.error('На счете недостаточно средств для сигналов. Минимальная сумма — $10.');
          }
        } else {
          setIsBalanceChecked(true);
          setBalance(0);
          toast.error('Ошибка при проверке баланса. Попробуйте позже.');
        }
      } catch (error) {
        setIsBalanceChecked(true);
        setBalance(0);
        toast.error('Ошибка соединения с сервером.');
      }
    };

    checkBalance();
  }, []);

  useEffect(() => {
    const today = new Date().getDay();
    setIsWeekend(today === 0 || today === 6);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAnalyticsModal = () => {
    setIsAnalyticsModalOpen(!isAnalyticsModalOpen);
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
    const minutes = parseInt(time);
    setTimerValue(minutes * 60);
  };

  const [direction, setDirection] = useState('down');

  const fetchRandomPairAndPrice = async () => {
    try {
      const currencyPairs = ['EUR-USD', 'GBP-USD', 'USD-JPY', 'AUD-USD', 'USD-CAD', 'USD-CHF'];
      const randomPair = currencyPairs[Math.floor(Math.random() * currencyPairs.length)];
      setSelectedPair(randomPair);

      const priceResponse = await fetch(`https://api.coinbase.com/v2/prices/${randomPair}/spot`);
      const priceData = await priceResponse.json();
      setStartPrice(parseFloat(priceData.data.amount).toFixed(4));
      setShowChart(true);
      setTimeLeft(timerValue);
      setResult(null);
      setEndPrice(null);
      setDirection(Math.random() < 0.5 ? 'up' : 'down');
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  // Таймер: запускать при showChart и timerValue
  useEffect(() => {
    if (showChart && timerValue) {
      setTimeLeft(timerValue);
      setResult(null);
      setEndPrice(null);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev > 0 ? prev - 1 : 0;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [showChart, timerValue]);

  // Проверка результата по окончанию таймера
  useEffect(() => {
    if (showChart && timeLeft === 0 && selectedPair && startPrice) {
      const checkResult = async () => {
        try {
          const priceResponse = await fetch(`https://api.coinbase.com/v2/prices/${selectedPair}/spot`);
          const priceData = await priceResponse.json();
          const endPriceValue = parseFloat(priceData.data.amount).toFixed(5);
          setEndPrice(endPriceValue);

          if (parseFloat(endPriceValue) > parseFloat(startPrice)) {
            setResult('win');
          } else if (parseFloat(endPriceValue) < parseFloat(startPrice)) {
            setResult('lose');
          } else {
            setResult('neutral');
          }
        } catch (error) {
          setResult('neutral');
        }
      };
      checkResult();
    }
  }, [timeLeft, showChart, selectedPair, startPrice]);

  const handleNewSignal = () => {
    fetchRandomPairAndPrice();
  };

  const handleResetSignal = () => {
    setShowChart(false);
    setSelectedPair(null);
    setStartPrice(null);
    setSelectedAI(null);
    setSelectedTime(null);
    setTimerValue(null);
    setTimeLeft(null);
    setResult(null);
    setEndPrice(null);
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
                <span>{balance !== null ? `$${balance}` : 'загрузка...'}</span>
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
        <ToastContainer />
      </section>
    );
  }

  if (showChart && selectedPair) {
    const formatTime = (seconds) => {
      const m = Math.floor(seconds / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    };

    return (
      <section className='_wrapper_hq2vv_1'>
        <div className='_container_hq2vv_8 _wrapper_18eu1_1'>
          <div className='_tvWrapper_1yk8r_225'>
            <div className='tradingview-widget-container' style={{ height: '600px', width: '100%' }}>
              <iframe
                style={{ height: '100%', width: '100%' }}
                src={`https://www.tradingview.com/widgetembed/?symbol=${selectedPair.replace('-', '')}&interval=1&theme=dark`}
                frameBorder="0"
              ></iframe>
            </div>
            <div className='tradingview-widget-copyright'>
              <a href="https://www.tradingview.com/?utm_source=36signal.com&utm_medium=widget_new&utm_campaign=advanced-chart">
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
                <span className='_openPrice_1yk8r_44'>Цена открытия:</span>
                <span className='_openPriceValue_1yk8r_331'>
                  <span className='_openPricePendingValue_1yk8r_59'>{startPrice}</span>
                </span>
              </p>
            </div>
            <div className='_processContainer_1yk8r_29 _signalWaiting_1yk8r_262'>
              <div className='_topResultContainer_1yk8r_242 _signalWaiting_1yk8r_262'>
                <div className='_signalWrapper_1yk8r_262 _signalWaiting_1yk8r_262'>
                  <p className='_title_1yk8r_36'>
                    <div className='_imagesContainer_1lcee_1'>
                      <span className="_logo_1lcee_7">
                        <img src={currencyIcons[selectedPair.split('-')[0]]} alt={selectedPair.split('-')[0]} />
                      </span>
                      <span className="_logo_1lcee_7">
                        <img src={currencyIcons[selectedPair.split('-')[1]]} alt={selectedPair.split('-')[1]} />
                      </span>
                    </div>
                    <p className='_signalDataInfo_1yk8r_291' style={{ backgroundColor: 'none' }}>
                      <span>{selectedPair}</span>
                      <span className='_signalBuyText_1yk8r_312' style={{
                        color: direction === 'up' ? '#00FF7F' : '#FF4D4D',
                        fontWeight: 700,
                        margin: '0 10px'
                      }}>
                        {direction === 'up' ? 'Вверх' : 'Вниз'}
                      </span>
                      <span>{selectedTime}</span>
                    </p>
                  </p>
                </div>
              </div>
              <div className='_signalAnalytics_1yk8r_163' onClick={toggleAnalyticsModal}>
                <img src={anal} alt="Analitica" />
                Аналитика
              </div>
              {isAnalyticsModalOpen && (
                <div className='_modal_b50nl_1'>
                  <div className='_modalContent_b50nl_28 _analyticsModal_1yk8r_159'>
                    <div className='_closeBtn_b50nl_42' onClick={toggleAnalyticsModal}>
                      <img src={cross} alt="cross" />
                    </div>
                    <div className='_statisticsInnerContainer_1yk8r_111'>
                      <div className='_statisticsCard_1yk8r_127'>
                        <h3>Технический анализ на покупку:</h3>
                        <div className='_statisticsData_1yk8r_119'>
                          <p>
                            <img src={chart1} alt="chart1" />
                            <span>Скользящие средние:
                              <b>{slidingAverages.first}%</b>
                              -
                              <b>{slidingAverages.second}%</b>
                            </span>
                          </p>
                          <p>
                            <img src={chart2} alt="chart2" />
                            <span>Потенциал движения:
                              <b>{movementPotential.first}%</b>
                              -
                              <b>{movementPotential.second}%</b>
                            </span>
                          </p>
                          <p>
                            <img src={chart3} alt="chart3" />
                            <span>Сила тренда:
                              <b>{trendStrength.first}%</b>
                              -
                              <b>{trendStrength.second}%</b>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className='_statisticsCard_1yk8r_127'>
                        <h3>Объёмный анализ на покупку:</h3>
                        <div className='_statisticsData_1yk8r_119'>
                          <p>
                            <img src={chart4} alt="chart1" />
                            <span> Сила продавца:
                              <b> {power.first}%</b>
                              -
                              <b> {power.second}%</b>
                            </span>
                          </p>
                          <p>
                            <img src={chart5} alt="chart1" />
                            <span>Объёмный профиль:
                              <b> {profile.first}%</b>
                              -
                              <b> {profile.second}%</b>
                            </span>
                          </p>
                          <p>
                            <img src={chart6} alt="chart1" />
                            <span> Настроение толпы:
                              <b> {tolpa.first}%</b>
                              -
                              <b> {tolpa.second}%</b>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='_progressBarWrapper_1yk8r_395'>
              <p className='_endTimeText_qnld5_32'>Результат через:</p>
              <div className='_wrapper_qnld5_1'>
                <div className='_container_qnld5_10'>
                  <div
                    className='_bar_qnld5_17'
                    style={{
                      width: timerValue
                        ? `${100 - Math.round((timeLeft / timerValue) * 100)}%`
                        : '0%',
                      transition: 'width 1s linear'
                    }}
                  ></div>
                </div>
              </div>
              <p className='_timeText_qnld5_22'>{timeLeft !== null ? formatTime(timeLeft) : ''}</p>
              {result && (
                <div style={{ textAlign: 'center', margin: '40px 0 24px 0' }}>
                  <span
                    style={{
                      color: result === 'win' ? '#00FF7F' : result === 'lose' ? '#FF4D4D' : '#fff',
                      fontWeight: 900,
                      fontSize: 64,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: 32,
                    }}
                    className={`_signalResultText_1yk8r_198 ${result === 'win' ? '_win_1yk8r_206' : result === 'lose' ? '_lose_1yk8r_207' : '_neutral_1yk8r_208'}`}
                  >
                    {result === 'win' && 'WIN'}
                    {result === 'lose' && 'LOSE'}
                    {result === 'neutral' && 'NEUTRAL'}
                  </span>
                  <div style={{ maxWidth: 520, margin: '0 auto' }}>
                    <div
                      style={{
                        background: '#181818',
                        borderRadius: 32,
                        padding: '18px 36px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 22,
                        fontWeight: 600,
                        marginBottom: 18,
                        color: '#fff',
                      }}
                    >
                      <svg width="24" height="24" style={{ marginRight: 12 }} viewBox="0 0 24 24" fill="none"><path d="M4 12L10 18L20 6" stroke="#00FF7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ marginRight: 12 }}>Цена открытия:</span>
                      <span style={{ color: '#00FF7F', fontWeight: 700, marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" style={{ marginRight: 6 }}><path d="M7.5 0L14.8612 12.75H0.138784L7.5 0Z" fill="#00FF7F"/></svg>
                        ${startPrice}
                      </span>
                    </div>
                    <div
                      style={{
                        background: '#181818',
                        borderRadius: 32,
                        padding: '18px 36px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 22,
                        fontWeight: 600,
                        color: '#fff',
                      }}
                    >
                      <svg width="24" height="24" style={{ marginRight: 12 }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FF4D4D" strokeWidth="2"/><path d="M12 6V12L15 15" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ marginRight: 12 }}>Цена закрытия:</span>
                      <span style={{ color: result === 'win' ? '#00FF7F' : '#FF4D4D', fontWeight: 700, marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" style={{ marginRight: 6, transform: result === 'win' ? 'rotate(180deg)' : 'none' }}>
                          <path d="M7.5 0L14.8612 12.75H0.138784L7.5 0Z" fill={result === 'win' ? '#00FF7F' : '#FF4D4D'}/>
                        </svg>
                        ${endPrice}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='_getContainer_1yk8r_16'>
            <button
              type='button'
              className='_button_13fxj_1 _common_13fxj_28'
              onClick={handleResetSignal}
            >
              <span>Сбросить сигнал</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
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
              <button
                type='button'
                className='_button_13fxj_1 _action_13fxj_13'
                onClick={handleNewSignal}
                disabled={!selectedAI || !selectedTime}
              >
                <span>Получить новый сигнал</span>
                <img src={click} alt="click" />
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Signal;