



import React from 'react';
import './About.less';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Ми аналізуємо<br/>
                        Створюємо стратегії<br/>
                        Досягаємо успіху</h1>
                    <p className="about-hero-subtitle">Ми створюємо інноваційні рішення для вашого бізнесу</p>
                </div>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <div className="about-section-content">
                        <h2 className="about-section-title">Наша місія</h2>
                        <div className="about-section-text">
                            <p>Ми допомагаємо бізнесам досягати успіху за допомогою сучасних технологічних рішень.</p>
                            <p>Наша команда професіоналів працює над створенням продуктів, які справді роблять різницю.</p>
                        </div>
                    </div>
                    <div className="about-section-image">
                        {/* Здесь будет изображение */}
                        <div className="image-placeholder"></div>
                    </div>
                </section>

                <section className="about-section reverse">
                    <div className="about-section-content">
                        <h2 className="about-section-title">Наші цінності</h2>
                        <div className="about-values">
                            <div className="value-item">
                                <h3 className="value-title">Інновації</h3>
                                <p className="value-text">Ми постійно вдосконалюємо наші продукти та послуги</p>
                            </div>
                            <div className="value-item">
                                <h3 className="value-title">Якість</h3>
                                <p className="value-text">Наші рішення відповідають найвищим стандартам</p>
                            </div>
                            <div className="value-item">
                                <h3 className="value-title">Клієнтоорієнтованість</h3>
                                <p className="value-text">Ваш успіх - наш пріоритет</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-section-image">
                        {/* Здесь будет изображение */}
                        <div className="image-placeholder"></div>
                    </div>
                </section>

                <section className="about-team">
                    <h2 className="about-team-title">Наша команда</h2>
                    <p className="about-team-subtitle">Професіонали, які працюють для вашого успіху</p>

                    <div className="team-members">
                        <div className="team-member">
                            <div className="member-photo"></div>
                            <h3 className="member-name">Іван Петренко</h3>
                            <p className="member-position">CEO & Засновник</p>
                        </div>
                        <div className="team-member">
                            <div className="member-photo"></div>
                            <h3 className="member-name">Олена Сидорова</h3>
                            <p className="member-position">Технічний директор</p>
                        </div>
                        <div className="team-member">
                            <div className="member-photo"></div>
                            <h3 className="member-name">Михайло Іванов</h3>
                            <p className="member-position">Розробник</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;