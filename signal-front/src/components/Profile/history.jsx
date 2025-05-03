import bitcoin from '../../assets/png/bitcoin.png';
import loss from '../../assets/png/loss.png';
import success from '../../assets/png/success.png';
import chart from '../../assets/png/chart.png';
import bell from '../../assets/png/bell.png';
import neutral from '../../assets/png/neutral.png';
const History = () => {


    return (
        <>
        <section className="_wrapper_hq2vv_1 _container_ttiou_1">
            <div className="_container_hq2vv_8 _sectionContainer_ttiou_12">
                <div>
                    <h2 className="_cardTitle_ttiou_19"></h2>
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
                        <div className='_infoContainer_ttiou_86'>
                            <img src={bell} alt="info"  className='_infoImg_ttiou_102'/>
                            Плохая статистика?
                        </div>
                </div>
                <div>
                    <h2 className='_cardTitle_ttiou_19'>Статистика</h2>
                    <div className='_tableFiltersWrapper_11gwj_85'>
                        <h3 className='_tableFiltersTitle_11gwj_93'>Фильтры</h3>
                        <div className='_filters_11gwj_100'>
                            <div className='_wrapper_2edya_1'>
                                <button className='_button_2edya_5'>
                                    <span className='_selection_2edya_24'>Результат</span>
                                </button>
                                <div className='_dropdown_2edya_38'>
                                    <div className='_container_2edya_49'>
                                        <button className='_button_2edya_5'>Результат</button>
                                        <button className='_button_2edya_5'>LOSE</button>
                                        <button className='_button_2edya_5'>WIN</button>
                                        <button className='_button_2edya_5'>NEUTRAL</button>
                                    </div>
                                </div>
                            </div>
                            <div className='_wrapper_2edya_1'>
                                <button className='_button_2edya_5'>
                                    <span className='_selection_2edya_24'>Валютная пара</span>
                                </button>
                                <div className='_dropdown_2edya_38'>
                                    <div className='_container_2edya_49'>
                                        <button className='_button_2edya_5'>Валютная пара</button>
                                        <button className='_button_2edya_5'>GBPCAD</button>
                                        <button className='_button_2edya_5'>EURCAD</button>
                                        <button className='_button_2edya_5'>EURUSD</button>
                                        <button className='_button_2edya_5'>EURGBP</button>
                                        <button className='_button_2edya_5'>GBPJPY</button>
                                        <button className='_button_2edya_5'>CADJPY</button>
                                        <button className='_button_2edya_5'>AUDCHF</button>
                                        <button className='_button_2edya_5'>USDCHF</button>
                                        <button className='_button_2edya_5'>GBPUSD</button>
                                        <button className='_button_2edya_5'>USDCAD</button>
                                        <button className='_button_2edya_5'>AUDJPY</button>
                                        <button className='_button_2edya_5'>AUDUSD</button>
                                    </div>
                                </div>
                            </div>
                            <button className='_resetButton_11gwj_107'>Сбросить</button>
                        </div>
                    </div>
                    <div className='_historyTableWrapper_11gwj_74'></div>
                </div>
            </div>
        </section>
        
        </>
    );
}

export default history;