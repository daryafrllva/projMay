// FeedbackSection.jsx
import React from 'react';
import './FeedbackSection.less';
import bitcoinIcon from "../../assets/png/bitcoin.png";

const FeedbackSection = () => {
    const feedbacks = [
        {
            id: 1,
            name: "Мария",
            date: "10.11.2024",
            text: "Я перепробовала много платформ, но эта – лучшая. Инструменты для анализа рынка настолько точны, что я смогла значительно снизить свои риски. А еще нравится, что здесь все продумано до мелочей, даже для новичков. Чувствуется, что платформа создана с заботой о пользователях.",
        },
        {
            id: 2,
            name: "Екатерина",
            date: "15.10.2024",
            text: "Эта платформа – настоящая находка! Особенно впечатлила функция снижения рисков благодаря умным рекомендациям. За несколько месяцев я не только научилась эффективно инвестировать, но и построила стабильный доход. Спасибо за такую современную и надежную платформу!",
        },
        {
            id: 3,
            name: "Дмитрий",
            date: "19.01.2025",
            text: "Торговля стала для меня проще и доступнее. Платформа объединила инновационные технологии и удобство использования. Больше всего нравятся интерактивные графики и возможность настроить все под свои нужды. Теперь я чувствую уверенность в каждой сделке.",
        },
        {
            id: 4,
            name: "Назар",
            date: "02.02.2025",
            text: "Раньше трейдинг казался мне сложным и непонятным, но благодаря этой платформе все стало интуитивным и прозрачным. Передовая аналитика и удобный интерфейс позволяют принимать обоснованные решения, а поддержка команды всегда на высоте! Благодаря платформе я вышел на новый уровень прибыльности.",
        }
    ];

    // Duplicate items for seamless looping
    const duplicatedFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks];

    return (
        <section className="_wrapper_hq2vv_1">
            <div className="_container_hq2vv_8 _feedbacksContainer_wotaq_90">
                <div className="_wrapper_1apmi_1">
                    <h2 className="_title_1apmi_7">Отзывы</h2>
                </div>

                <div className="feedback-carousel">
                    {duplicatedFeedbacks.map((feedback, index) => (
                        <div key={`${feedback.id}-${index}`} className="_card_pwenn_1">
                            <div className="_top_pwenn_11">
                                <h3 className="_title_pwenn_17">
                                    <img src={bitcoinIcon} alt="bitcoin" className="_bitcoin_pwenn_28" />
                                    {feedback.name}
                                </h3>
                                <p className="_date_pwenn_33">{feedback.date}</p>
                            </div>
                            <p className="_text_pwenn_40">{feedback.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;