import React from 'react';
import guideImage from '../../assets/png/guide.png';

const LibrarySection = () => {
    const articles = [
        {
            title: "Полное руководство по бинарным опционам",
            description: "Углублённый гид по бинарным опционам: как они работают, чем отличаются от других инструментов, их риски и стратегии. Разоблачение мифов о казино и пошаговое понимание механики трейдинга.",
            time: "10 мин",
            link: "./html/understanding-binary-options.html",
            image: guideImage
        },
        {
            title: "Стратегии успешной торговли",
            description: "Изучите проверенные стратегии, которые помогут вам стабильно зарабатывать на бинарных опционах. Подходит для трейдеров всех уровней.",
            time: "8 мин",
            link: "./html/successful-trading-strategies.html",
            image: guideImage
        },
        {
            title: "Методы управления рисками",
            description: "Откройте для себя проверенные стратегии управления рисками в трейдинге бинарными опционами. Научитесь защищать свой капитал и использовать сигналы нашей платформы эффективно.",
            time: "7 мин",
            link: "./html/risk-management-methods.html",
            image: guideImage
        },
        {
            title: "Стратегия Мартингейл в бинарных опционах",
            description: "Пошаговое руководство по применению стратегии Мартингейл в трейдинге бинарными опционами. Принципы, примеры, риски и советы по управлению капиталом.",
            time: "6 мин",
            link: "./html/martingale-strategy.html",
            image: guideImage
        },
        {
            title: "Индикаторная стратегия RSI + SMA",
            description: "Разбор стратегии, основанной на сочетании индикаторов RSI и скользящей средней SMA. Идеальный баланс между трендовым и осцилляторным подходом для бинарных опционов.",
            time: "7 мин",
            link: "./html/rsi-sma-strategy.html",
            image: guideImage
        },
        {
            title: "Торговля от уровней поддержки и сопротивления",
            description: "Стратегия, основанная на анализе ключевых уровней рынка. Идеальна для бинарных опционов благодаря высокой точности точек входа.",
            time: "6 мин",
            link: "./html/support-resistance-strategy.html",
            image: guideImage
        },
        {
            title: "Выбор подходящего брокера",
            description: "Узнайте, как выбрать лучшего брокера для торговли бинарными опционами.",
            time: "6 мин",
            link: "./html/choose-broker.html",
            image: guideImage
        }
    ];

    return (
        <section className="_wrapper_hq2vv_1 _wrapper_1hb89_59">
            <div className="_container_hq2vv_8 _container_1hb89_1">
                <h2 className="_libraryTitle_1hb89_54">Библиотека</h2>
                <div className="_grid_1hb89_75">
                    {articles.map((article, index) => (
                        <a key={index} className="_link_64em0_1 _card_14fbx_1" href={article.link} target="_self">
                            <div className="_top_14fbx_14">
                                <img src={article.image} alt={article.title} className="_cardImage_14fbx_80" />
                            </div>
                            <div className="_bottom_14fbx_24">
                                <div className="_cardTitles_14fbx_33">
                                    <h2 className="_cardTitle_14fbx_33">{article.title}</h2>
                                    <p className="_cardDescription_14fbx_46">{article.description}</p>
                                </div>
                                <div className="_footer_14fbx_59">
                                    <p className="_readingTime_14fbx_70">
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="_clock_14fbx_78">
                                            <path d="M12 7V12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFFFFF" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg>
                                        <span>{article.time}</span>
                                    </p>
                                    <span className="_cardLink_14fbx_52">Читать</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LibrarySection;