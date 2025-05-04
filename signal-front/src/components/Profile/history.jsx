import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import bitcoin from '../../assets/png/bitcoin.png';
import loss from '../../assets/png/loss.png';
import success from '../../assets/png/success.png';
import chart from '../../assets/png/chart.png';
import bell from '../../assets/png/bell.png';
import neutral from '../../assets/png/neutral.png';
import AUD from '../../assets/svg/AUD.svg';
import CAD from '../../assets/svg/CAD.svg';
import CHF from '../../assets/svg/CHF.svg';
import EUR from '../../assets/svg/EUR.svg';
import GBP from '../../assets/svg/GBP.svg';
import JPY from '../../assets/svg/JPY.svg';
import USD from '../../assets/svg/USD.svg';
import cross from '../../assets/svg/cross.svg'
import './history.css';

const currencyIcons = { AUD, CAD, CHF, EUR, GBP, JPY, USD }; 

const History = () => {
  const [data, setData] = useState([]); // Все данные
  const [filteredData, setFilteredData] = useState([]); 
  const [filters, setFilters] = useState({
    ai: '', 
    result: '', 
    pair: '',
  });
  const [hasMore, setHasMore] = useState(true); 
  const [page, setPage] = useState(1); 

  const [dropdowns, setDropdowns] = useState({
    ai: false,
    result: false,
    pair: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    };
 
  const updateDropdown = (key) => {
    setDropdowns((prev) => {
      // Закрываем все dropdown, кроме текущего
      const updatedDropdowns = Object.keys(prev).reduce((acc, dropdownKey) => {
        acc[dropdownKey] = dropdownKey === key ? !prev[key] : false;
        return acc;
      }, {});
      return updatedDropdowns;
    });
  };
  const fetchData = async () => {

    const response = await fetch(`https://api.example.com/history?page=${page}`);
    const newData = await response.json();


    if (newData.length === 0) {
      setHasMore(false);
      return;
    }
    setData((prev) => [...prev, ...newData]);
    setFilteredData((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);
  };


  const applyFilters = () => {
    let filtered = [...data];

    if (filters.ai) {
      filtered = filtered.filter((item) => item.ai === filters.ai);
    }
    if (filters.result) {
      filtered = filtered.filter((item) => item.result === filters.result);
    }
    if (filters.pair) {
      filtered = filtered.filter((item) => item.pair === filters.pair);
    }

    setFilteredData(filtered);
  };


  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDropdowns((prev) => ({ ...prev, [key]: false })); // Закрываем dropdown после выбора
  };

  const resetFilters = () => {
    setFilters({ ai: '', result: '', pair: '' });
    setFilteredData(data);
  };


  useEffect(() => {
    applyFilters();
  }, [filters]);


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='history-page'>
    <section className="_wrapper_hq2vv_1 _container_ttiou_1">
      <div className="_container_hq2vv_8 _sectionContainer_ttiou_12">
        <div>
          <h2 className="_cardTitle_ttiou_19">История сделок</h2>
          <div className="_statsContainer_ttiou_31">
            <div className="_statsItem_1xfwo_1">
              <div className="_statsItemTexts_1xfwo_9">
                <p>33</p>
                <img src={bitcoin} alt="Всего сигналов" />
              </div>
              <h3>Всего сигналов</h3>
            </div>
            <div className="_statsItem_1xfwo_1">
              <div className="_statsItemTexts_1xfwo_9">
                <p>26</p>
                <img src={success} alt="Успешные сигналы" />
              </div>
              <h3>Успешные сигналы</h3>
            </div>
            <div className="_statsItem_1xfwo_1">
              <div className="_statsItemTexts_1xfwo_9">
                <p>5</p>
                <img src={loss} alt="Неуспешные сигналы" />
              </div>
              <h3>Неуспешные сигналы</h3>
            </div>
            <div className="_statsItem_1xfwo_1">
              <div className="_statsItemTexts_1xfwo_9">
                <p>2</p>
                <img src={neutral} alt="Нейтральные сигналы" />
              </div>
              <h3>Нейтральные сигналы</h3>
            </div>
            <div className="_statsItem_1xfwo_1">
              <div className="_statsItemTexts_1xfwo_9">
                <p>78.79%</p>
                <img src={chart} alt="Win rate" />
              </div>
              <h3>Win rate</h3>
            </div>
          </div>
          <button className="_infoContainer_ttiou_86" onClick={toggleModal}>
            <img src={bell} alt="info" className="_infoImg_ttiou_102" />
            Плохая статистика?
          </button>
          {isModalOpen && (
            <div className='_modal_b50nl_1'>
                <div className='_modalContent_b50nl_28 _infoModal_ttiou_58'>
                    <div className='_closeBtn_b50nl_42' onClick={toggleModal}>
                        <img src={cross} alt="cross" />
                    </div>
                    <div className='_infoModalWrapper_ttiou_65'>
                        <h3 className='_infoRecomendationTitle_ttiou_72'>Рекомендации:</h3>
                        <ol className='_infoRecomendationList_ttiou_77'>
                            <li>
                            Проверяйте экономический календарь.  
                            </li>
                            <li>
                            Анализируйте рынок и следуйте тренду.  
                            </li>
                            <li>
                            Проверяйте экономический календарь.  
                            </li>
                            <li>
                            Используйте риск-менеджмент.  
                            </li>
                            <li>
                            Используйте риск-менеджмент.  
                            </li>
                            <li>
                            Избегайте торговли во время нестабильности.  
                            </li>
                            <li>
                            Анализируйте свои сделки для улучшения стратегии.  
                            </li>
                        </ol>
                        <p className='_disclaimerText_ttiou_44'>
                        В случае, если негативных сигналов будет больше, чем позитивных, рекомендуем выбрать другое время для торговли.
                        </p>
                    </div>
                </div>
            </div>
            
            )}
        </div>

        {/* Фильтры */}
        <h2 className='_cardTitle_ttiou_19'>Статистика</h2>
        <div className="_tableFiltersWrapper_11gwj_85">
  <h3 className="_tableFiltersTitle_11gwj_93">Фильтры</h3>
  <div className="_filters_11gwj_100">
    {/* Фильтр по ИИ */}
    <div className="_wrapper_2edya_1">
    <button
        className="_button_2edya_5 _open_2edya_71"
        onClick={() => updateDropdown('ai')}
    >
        <span className="_selection_2edya_24">ИИ</span>
    </button>
    {dropdowns.ai && (
        <div className="_dropdown_2edya_38 _open_2edya_71">
            <div className='_container_2edya_49'>
            <button className="_button_2edya_5" onClick={() => updateFilter('ai', '')}>
                Все
            </button>
            <button className="_button_2edya_5" onClick={() => updateFilter('ai', 'ChatGPT 4o')}>
             ChatGPT 4o
            </button>
            <button className="_button_2edya_5" onClick={() => updateFilter('ai', 'AI BOOST USA v1')}>
                AI BOOST USA v1
            </button>
            <button className="_button_2edya_5" onClick={() => updateFilter('ai', 'AI BOOST USA Trade PLUS')}>
                AI BOOST USA Trade PLUS
            </button>
            <button className="_button_2edya_5" onClick={() => updateFilter('ai', 'VIP Indicator')}>
                VIP Indicator
            </button>
            </div>
            </div>
        )}
    </div>
            {/* Фильтр по результату */}
            <div className="_wrapper_2edya_1">
              <button
                 className="_button_2edya_5 _open_2edya_71"
                 onClick={() => updateDropdown('result')}
              >
                <span className="_selection_2edya_24">Результат</span>
              </button>
              {dropdowns.result && (
               <div className="_dropdown_2edya_38 _open_2edya_71">
                <div className='_container_2edya_49'>
                  <button className="_button_2edya_5" onClick={() => updateFilter('result', '')}>
                    Все
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('result', 'LOSE')}>
                    LOSE
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('result', 'WIN')}>
                    WIN
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('result', 'NEUTRAL')}>
                    NEUTRAL
                  </button>
                </div>
                </div>
              )}
            </div>

    
            <div className="_wrapper_2edya_1">
              <button
               className="_button_2edya_5 _open_2edya_71"
               onClick={() => updateDropdown('pair')}
              >
                <span className="_selection_2edya_24">Валютная пара</span>
              </button>
              {dropdowns.pair && (
                <div className="_dropdown_2edya_38 _open_2edya_71">
                <div className='_container_2edya_49'>
                  <button className="_button_2edya_5" onClick={() => updateFilter('pair', '')}>
                    Все
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('pair', 'EURUSD')}>
                    EURUSD
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('pair', 'GBPUSD')}>
                    GBPUSD
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('pair', 'AUDUSD')}>
                    AUDUSD
                  </button>
                  <button className="_button_2edya_5" onClick={() => updateFilter('pair', 'USDCAD')}>
                    USDCAD
                  </button>
                </div>
                </div>
              )}
            </div>
          </div>
          <button className="_resetButton_11gwj_107" onClick={resetFilters}>
            Сбросить
          </button>
        </div>

        {/* Таблица с бесконечным скроллом */}
        <div className="_historyTableWrapper_11gwj_74">
          <InfiniteScroll
            dataLength={filteredData.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h3>Вы ещё не получали сигналы</h3>}
            scrollableTarget="scrollableDiv"
          >
            <table className="_historyTable_11gwj_1">
              <thead>
                <tr className="_tableHead_11gwj_11">
                  <th>Валютная пара</th>
                  <th>Дата</th>
                  <th>Время</th>
                  <th>ИИ</th>
                  <th>Продолжительность</th>
                  <th>Результат</th>
                </tr>
              </thead>
              <tbody className="_tableBody_11gwj_33">
                {filteredData.map((item, index) => (
                  <React.Fragment key={index}>
                    {/* Адаптивный блок */}
                    <tr className="_mobileCurrencyTr_9fyhu_105">
                      <td colSpan={5}>
                        <div className="_currencySymbol_9fyhu_18">
                          <div className="_imagesContainer_1lcee_1">
                            <span className="_logo_1lcee_7">
                              <img src={currencyIcons[item.pair.slice(0, 3)]} alt={item.pair.slice(0, 3)} />
                            </span>
                            <span className="_logo_1lcee_7">
                              <img src={currencyIcons[item.pair.slice(3)]} alt={item.pair.slice(3)} />
                            </span>
                          </div>
                          <p>{item.pair}</p>
                        </div>
                      </td>
                    </tr>

                    {/* Десктопная версия */}
                    <tr className="_rowData_9fyhu_45">
                      <td className="_desktopCurrencyTr_9fyhu_7">
                        <div className="_currencySymbol_9fyhu_18">
                          <div className="_imagesContainer_1lcee_1">
                            <span className="_logo_1lcee_7">
                              <img src={currencyIcons[item.pair.slice(0, 3)]} alt={item.pair.slice(0, 3)} />
                            </span>
                            <span className="_logo_1lcee_7">
                              <img src={currencyIcons[item.pair.slice(3)]} alt={item.pair.slice(3)} />
                            </span>
                          </div>
                          <p>{item.pair}</p>
                        </div>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>
                        <span className={item.ai === 'VIP Indicator' ? '_vipSignal_9fyhu_37 ' : '_vipSignal_9fyhu_37'}>
                          {item.ai}
                        </span>
                      </td>
                      <td>{item.duration}</td>
                      <td className={`_result_9fyhu_54 _${item.result.toLowerCase()}_9fyhu_64`}>
                        {item.result}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </section>
    </div>
  );
};

export default History;