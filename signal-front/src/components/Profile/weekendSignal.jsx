import React from 'react';
import epthcoin from '../../assets/png/epthcoin.png';
import bitcoin from '../../assets/png/bitcoin.png';
import click from '../../assets/svg/click.svg';

const WeekendSignal = () => {
  return ( 
    <section className='_wrapper_hq2vv_1'>
        <div className='_container_hq2vv_8 _wrapper_18eu1_1'>
            <div className='_notWorkingCard_18eu1_5'>
                <div className='_notWorkingWrapper_18eu1_9'>
                    <img src={bitcoin} alt="bitcoin" className='_bitcoin_18eu1_55'/>
                    <img src={epthcoin} alt="eth" className='_eth_18eu1_56'/>
                    <div className='_notWorkingContainer_18eu1_15'>
                        <h1>Рынки сейчас отдыхают 💤</h1>
                        <div className='_times_18eu1_40'>
                            <p>Мы работаем только с понедельника по пятницу с 13:00 - 3:00, так что заходите в рабочие дни, и мы поможем покорить финансовые вершины! 🚀</p>
                        </div>
                    </div>
                    <a href="/" className='_button_13fxj_1 _mainButton_18eu1_49 _action_13fxj_13'>
                    <span>На главную</span>
                    <img src={click} alt="click" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WeekendSignal;